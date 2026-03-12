import { JabType } from "./enums";

export interface Jab {
  email: string;
  type: JabType;
  canContact: boolean;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  unsubscribedAt?: Date | null;
}