import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { fightNightInviteEmailTemplate } from "@/email-templates";

export const sendFightNightInviteEmailSES = async (email: string, inviteUrl: string): Promise<void> => {
  const sesClient = new SESClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  const source = process.env.SES_EMAIL_SOURCE || "noreply@fightsync.app";
  const htmlBody = fightNightInviteEmailTemplate({ inviteUrl });

  const params = {
    Destination: {
      ToAddresses: [email],
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
        Data: "🥊 You're invited to Classic Fight Night! on FightSync",
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
