import { JabType } from "./enums";

export interface Jab {
  email: string;
  type: JabType;
  canContact: boolean;
  createdAt: Date;
  updatedAt: Date;
}