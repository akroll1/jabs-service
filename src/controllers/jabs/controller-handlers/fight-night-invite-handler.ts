import { sendFightNightInviteEmailSES } from "@/services/ses";

export async function fightNightInviteHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { emails, inviteUrl } = body;

  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    return { statusCode: 400, message: 'Missing or invalid field: emails' };
  }

  if (!inviteUrl) {
    return { statusCode: 400, message: 'Missing required field: inviteUrl' };
  }

  await Promise.all(emails.map((email: string) => sendFightNightInviteEmailSES(email, inviteUrl)));

  return { statusCode: 200, message: 'Fight night invite emails sent.' };
}
