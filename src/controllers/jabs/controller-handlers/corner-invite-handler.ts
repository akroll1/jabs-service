import { sendCornerInviteEmailSES } from "@/services/ses";

export async function cornerInviteHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, cornerName, managerName } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!cornerName) return { statusCode: 400, message: 'Missing required field: cornerName' };

  await sendCornerInviteEmailSES({ email, cornerName: cornerName.toUpperCase(), managerName: managerName?.toUpperCase() });
 
  return { statusCode: 200, message: 'Corner invite email sent.' };
}