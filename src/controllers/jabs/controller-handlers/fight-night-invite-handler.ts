import { sendFightNightInviteEmailSES } from "@/services/ses";

interface Recipient {
  email: string;
  inviteUrl: string;
}

export async function fightNightInviteHandler(body: any): Promise<{ statusCode: number; message: string }> {
  const recipients: Recipient[] = Array.isArray(body) ? body : [];

  if (recipients.length === 0) {
    return { statusCode: 400, message: 'Missing or invalid recipients array.' };
  }

  const invalid = recipients.find(r => !r.email || !r.inviteUrl);
  if (invalid) {
    return { statusCode: 400, message: 'Each recipient must have email and inviteUrl.' };
  }

  await Promise.all(recipients.map(({ email, inviteUrl }) => sendFightNightInviteEmailSES(email, inviteUrl)));

  return { statusCode: 200, message: 'Fight night invite emails sent.' };
}
