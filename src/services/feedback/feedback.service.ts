import { FeedbackType } from "@/common";
import { FeedbackMongo } from "src/models/feedback";

export type CreateFeedbackOptions = {
  sub: string;
  email: string;
  type: FeedbackType;
  comments?: string | null;
};

export class FeedbackService {
  async createFeedback(options: CreateFeedbackOptions): Promise<boolean> {
    const feedback = await FeedbackMongo.create({
      sub: options.sub,
      email: options.email,
      type: options.type,
      comments: options.comments ?? null,
    });

    return !!feedback;
  }
}
