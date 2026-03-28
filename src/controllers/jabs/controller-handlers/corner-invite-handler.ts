import { sendCornerInviteEmailSES } from "@/services/jabs/ses.service";

export async function cornerInviteHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, cornerName, inviterName } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!cornerName) return { statusCode: 400, message: 'Missing required field: cornerName' };

  await sendCornerInviteEmailSES({ email, cornerName, inviterName });

  return { statusCode: 200, message: 'Corner invite email sent.' };
}