import { GrantedVia } from "@/common/enums";

export interface FightNightInviteTemplateOptions {
  inviteUrl: string;
  source: GrantedVia;
}

export const fightNightInviteEmailTemplate = ({ inviteUrl, source }: FightNightInviteTemplateOptions): string => {
  const isCorner = source === GrantedVia.CORNER;

  return `<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Classic Fight Night!</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background-color:#1a1a1a;padding:32px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;">🥊 FightSync</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 32px;">
              <h2 style="color:#1a1a1a;margin:0 0 16px;">You're invited!</h2>
              <p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 24px;">
                You've been invited to <strong>Classic Fight Night!</strong> on FightSync.
              </p>
              <p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 ${isCorner ? '32px' : '24px'};">
                Join us as we relive classic fights and score them together- live on the FightSync app! It's a great way to connect with friends and share your love of boxing.
              </p>
              ${isCorner ? '' : `<p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 32px;">
                Click the button below to accept your invitation.
              </p>`}
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#e63946;border-radius:4px;">
                    <a href="${inviteUrl}" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;">
                      <span style="color:#ffffff;">${isCorner ? 'View Classic Fight Night' : 'Accept Invitation'}</span>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="color:#999999;font-size:12px;margin:0;">
                You received this email because you were invited to a FightSync Classic Fight Night event.
                If you didn't expect this, you can safely ignore it.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};
