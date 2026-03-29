import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { cornerInviteEmailTemplate } from "@/email-templates";
import { generateUnsubscribeToken } from "src/libs/unsubscribe-token";
import { JabType } from "src/common";
import { Config } from "../../../config";
import { YouAreInvitedToCorner } from "@/common";

/**
 * This is the "Let's Get You Up and Running" email template.
 * */



export const sendCornerInviteEmailSES = async (options: YouAreInvitedToCorner): Promise<void> => {
  console.log('OPTIONS: ', options);
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
        Data: `🥊 You're invited to join ${options.cornerName?.toUpperCase()} on FightSync`,
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
