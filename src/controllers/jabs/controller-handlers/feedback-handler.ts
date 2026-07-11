import { FeedbackType } from "@/common";
import { FeedbackService } from "@/services/feedback";
import { sendFeedbackNotificationSES } from "@/services/ses";

const feedbackService = new FeedbackService();
const validFeedbackTypes = new Set(Object.values(FeedbackType));

export async function feedbackHandler(body: Record<string, any>): Promise<{ statusCode: number; message: string }> {
  const { sub, email, type, comments } = body;

  if (!sub) return { statusCode: 400, message: 'Missing required field: sub' };
  if (!email) return { statusCode: 400, message: 'Missing required field: email' };
  if (!type || !validFeedbackTypes.has(type)) return { statusCode: 400, message: 'Missing or invalid field: type' };

  const created = await feedbackService.createFeedback({ sub, email, type, comments });

  if (!created) return { statusCode: 500, message: 'Failed to save feedback.' };

  // Feedback is persisted — a notification failure shouldn't surface as an error to the user
  try {
    await sendFeedbackNotificationSES({ sub, email, type, comments });
  } catch (err) {
    console.error("Failed to send feedback notification email:", err);
  }

  return { statusCode: 201, message: 'Feedback received. Thank you!' };
}
