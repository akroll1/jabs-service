
export enum FeedbackType {
  BUG_REPORT = "BUG_REPORT",
  FEATURE_REQUEST = "FEATURE_REQUEST",
  GENERAL_COMMENT = "GENERAL_COMMENT",
  REQUEST_FIGHT_NIGHT_ACCESS = "REQUEST_FIGHT_NIGHT_ACCESS",
  REQUEST_MORE_FIGHTCOINS = "REQUEST_MORE_FIGHTCOINS",
  OTHER = "OTHER",
}
export enum GrantedVia {
  HMAC_INVITE = "HMAC_INVITE",
  CORNER = "CORNER",
}
export enum JabType {
  // Sentinel used only when unsubscribing: means "every type for this email".
  // Never persisted as a subscription row — see SUBSCRIBABLE_JAB_TYPES.
  ALL = "ALL",
  CORNER_INVITE = "CORNER_INVITE",
  FEEDBACK = "FEEDBACK",
  FIGHT_NIGHT_INVITE = "FIGHT_NIGHT_INVITE",
  NEWSLETTER = "NEWSLETTER",
  REMINDERS = "REMINDERS",
  WEEKLY_FIGHTS_UPDATE = "WEEKLY_FIGHTS_UPDATE",
  WELCOME = "WELCOME",
}

/**
 * The JabTypes a subscription row may actually hold. Excludes the ALL
 * sentinel, which is an unsubscribe-only instruction rather than a real type.
 */
export const SUBSCRIBABLE_JAB_TYPES: JabType[] = Object.values(JabType).filter(
  (type) => type !== JabType.ALL
);
