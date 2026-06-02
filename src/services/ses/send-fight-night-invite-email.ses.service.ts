import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { GrantedVia } from "@/common/enums";
import { fightNightInviteEmailTemplate } from "@/email-templates";

export const sendFightNightInviteEmailSES = async (email: string, inviteUrl: string, source: GrantedVia): Promise<void> => {
  const sesClient = new SESClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  const fromAddress = process.env.SES_EMAIL_SOURCE || "noreply@fightsync.app";
  const htmlBody = fightNightInviteEmailTemplate({ inviteUrl, source });

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
    Source: fromAddress,
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
  } catch (err) {
    console.error("SES send error:", err);
    throw err;
  }
};
