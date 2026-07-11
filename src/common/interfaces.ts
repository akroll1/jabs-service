import { FeedbackType, JabType } from "./enums";

export interface Feedback {
  id: string;
  sub: string;
  comments?: string | null;
  email: string;
  type: FeedbackType;
  createdAt: Date;
}

export interface Jab {
  email: string;
  type: JabType;
  canContact?: boolean;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
  unsubscribedAt?: Date | null;
}
