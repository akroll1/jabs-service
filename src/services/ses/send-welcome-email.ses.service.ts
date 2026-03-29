import { JabType } from "@/common";
import { generateUnsubscribeToken } from "@/libs/unsubscribe-token";
import { letsGetYouStartedEmailTemplate } from "@/email-templates";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { Config } from "config";

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