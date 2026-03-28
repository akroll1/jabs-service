import { verifyUnsubscribeToken } from "@/libs/unsubscribe-token";
import { Config } from "config";
import { JabsService } from "@/services/jabs/jabs.service";

const jabsService = new JabsService();

export async function unsubscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { token } = body;

  if (!token) return { statusCode: 400, message: 'Missing required field: token' };

  const payload = verifyUnsubscribeToken(token, Config.UNSUBSCRIBE_SECRET);

  if (!payload) return { statusCode: 401, message: 'Invalid or expired unsubscribe token' };

  await jabsService.unsubscribeFromType(payload.email, payload.type);

  return { statusCode: 200, message: 'Unsubscribed!' };
}