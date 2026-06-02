import { GrantedVia, JabType } from "./enums";

export type CreateInviteEmail = {
  email: string;
  inviteUrl: string;
  managerName: string | null;
  source: GrantedVia;
};

export type JSONResponse = {
  statusCode?: number;
  origin?: string;
  message?: string;
};

export type UnsubscribeFromSourceOptions = {
    id: string;
    source: JabType;
    email?: string;
    campaignId?: string;
    cornerId?: string;
};

export type YouAreInvitedToCorner = {
  id?: string;
  source?: JabType;
  cornerId?: string;
  cornerName: string;
  email: string;
  managerName: string;
  seasonTitle?: string;
  unsubscribeUrl?: string;
};
