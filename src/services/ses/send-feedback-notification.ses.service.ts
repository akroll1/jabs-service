import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { FeedbackType } from "@/common";

export type FeedbackNotificationOptions = {
  sub: string;
  email: string;
  type: FeedbackType;
  comments?: string | null;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const sendFeedbackNotificationSES = async ({ sub, email, type, comments }: FeedbackNotificationOptions): Promise<void> => {
  const sesClient = new SESClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  const fromAddress = process.env.SES_EMAIL_SOURCE || "noreply@fightsync.app";
  const notifyAddress = process.env.FEEDBACK_NOTIFY_EMAIL;

  if (!notifyAddress) {
    console.error("FEEDBACK_NOTIFY_EMAIL is not set; skipping feedback notification email.");
    return;
  }

  const htmlBody = `<!doctype html>
<html lang="en">
<body style="margin:0;padding:24px;font-family:Arial,sans-serif;color:#1a1a1a;">
  <h2 style="margin:0 0 16px;">🥊 New FightSync Feedback</h2>
  <table cellpadding="6" cellspacing="0" style="font-size:14px;">
    <tr><td style="color:#555555;"><strong>Type</strong></td><td>${escapeHtml(type)}</td></tr>
    <tr><td style="color:#555555;"><strong>From</strong></td><td>${escapeHtml(email)}</td></tr>
    <tr><td style="color:#555555;"><strong>User (sub)</strong></td><td>${escapeHtml(sub)}</td></tr>
  </table>
  <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;border-top:1px solid #eeeeee;padding-top:16px;">${comments ? escapeHtml(comments) : "<em>No comments provided.</em>"}</p>
</body>
</html>`;

  const params = {
    Destination: {
      ToAddresses: [notifyAddress],
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `🥊 FightSync Feedback: ${type}`,
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
