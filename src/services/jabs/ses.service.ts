import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { letsGetYouStartedEmailTemplate, cornerInviteEmailTemplate, CornerInviteTemplateOptions } from "../email-templates";
import { generateUnsubscribeToken } from "src/libs/unsubscribe-token";
import { JabType } from "src/common";
import { Config } from "../../../config";

/**
 * This is the "Let's Get You Up and Running" email template.
 * */

export const sendWelcomeEmailSES = async (email: string): Promise<void> => {
  // Reuse a single SES client configured from env or default region
  const sesClient = new SESClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  // Use an explicit, verified source address from env (SES requires verified identities)
  const source = process.env.SES_EMAIL_SOURCE || "noreply@fightsync.app";

  const token = generateUnsubscribeToken(email, JabType.WELCOME, Config.UNSUBSCRIBE_SECRET);
  const unsubscribeUrl = `https://fightsync.app/unsubscribe?token=${token}`;
  const htmlBody = letsGetYouStartedEmailTemplate(email, unsubscribeUrl);

  const params = {
    Destination: {
      ToAddresses: [email], // Will be single email for JabType.NEWSLETTER.
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "🥊 Welcome to FightSync! 🥊",
      },
    },
    Source: source,
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
  } catch (err) {
    // Log and rethrow so caller/controllers can handle the error and it doesn't fail silently
    console.error("SES send error:", err);
    throw err;
  }
};

export const sendCornerInviteEmailSES = async (options: CornerInviteTemplateOptions): Promise<void> => {
  const sesClient = new SESClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  const source = process.env.SES_EMAIL_SOURCE || "noreply@fightsync.app";

  const token = generateUnsubscribeToken(options.email, JabType.CORNER_INVITE, Config.UNSUBSCRIBE_SECRET);
  const unsubscribeUrl = `https://fightsync.app/unsubscribe?token=${token}`;
  const htmlBody = cornerInviteEmailTemplate({ ...options, unsubscribeUrl });

  const params = {
    Destination: {
      ToAddresses: [options.email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `🥊 You're invited to join ${options.cornerName} on FightSync`,
      },
    },
    Source: source,
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
  } catch (err) {
    console.error("SES send error:", err);
    throw err;
  }
};
