import { sendWelcomeEmailSES } from "@/services/jabs/ses.service";

export async function welcomeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };

  await sendWelcomeEmailSES(email);

  return { statusCode: 200, message: 'Welcome email sent.' };
}