import { JabType } from "@/common";
import { JabsService } from '@/services/jabs/jabs.service'; 

const validJabTypes = new Set(Object.values(JabType));

const jabsService = new JabsService();

// Internal variant — skips token verification for trusted Lambda-to-Lambda calls
export async function internalUnsubscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, type } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!type || !validJabTypes.has(type)) return { statusCode: 400, message: 'Missing or invalid field: type' };

  await jabsService.unsubscribeFromType(email, type as JabType);

  return { statusCode: 200, message: 'Unsubscribed!' };
}