import { JabType } from "./enums";

export type UnsubscribeFromSourceOptions = {
    id: string;
    source: JabType;
    email?: string;
    campaignId?: string;
    cornerId?: string;
};

export type JSONResponse = {
  statusCode?: number;
  origin?: string;
  message?: string;
};

export type YouAreInvitedToCorner = {
  cornerId?: string;
  cornerName?: string;
  email: string;
  managerName?: string;
  seasonTitle?: string;
  unsubscribeUrl?: string;
};

