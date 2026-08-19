import { SUBSCRIBABLE_JAB_TYPES } from "@/common";
import { JabsService } from '@/services/jabs/jabs.service';

const jabsService = new JabsService();
// ALL is an unsubscribe-only sentinel, so it is not subscribable
const validJabTypes = new Set<string>(SUBSCRIBABLE_JAB_TYPES);

export async function subscribeHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { email, type, ...rest } = body;

  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!type || !validJabTypes.has(type)) return { statusCode: 400, message: 'Missing or invalid field: type' };

  const created = await jabsService.subscribeToType({ email, type, ...rest });

  if (!created) return { statusCode: 500, message: 'Failed to create jab subscription.' };

  return { statusCode: 201, message: 'Subscribed!' };
}