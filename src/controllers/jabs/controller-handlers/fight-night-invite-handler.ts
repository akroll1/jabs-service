import { GrantedVia } from "@/common/enums";
import { CreateInviteEmail } from "@/common/types";
import { sendFightNightInviteEmailSES } from "@/services/ses";

export async function fightNightInviteHandler(body: CreateInviteEmail[]): Promise<{ statusCode: number; message: string }> {
  const recipients: CreateInviteEmail[] = Array.isArray(body) ? body : [];
  if (recipients.length === 0) {
    return { statusCode: 400, message: 'Missing or invalid recipients array.' };
  }

  const invalid = recipients.find(r => !r.email || !r.inviteUrl);
  if (invalid) {
    return { statusCode: 400, message: 'Each recipient must have email and inviteUrl.' };
  }

  await Promise.all(recipients.map(({ email, inviteUrl, source }) =>
    sendFightNightInviteEmailSES(email, inviteUrl, source ?? GrantedVia.HMAC_INVITE)
  ));

  return { statusCode: 200, message: 'Fight night invite emails sent.' };
}
