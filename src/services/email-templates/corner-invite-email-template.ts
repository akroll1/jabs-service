export interface CornerInviteTemplateOptions {
  email: string;
  cornerName: string;
  inviterName?: string;
  unsubscribeUrl?: string;
}

export const cornerInviteEmailTemplate = ({ cornerName, inviterName, unsubscribeUrl }: CornerInviteTemplateOptions): string => {
  const from = inviterName ? `${inviterName} has` : 'Someone has';

  return `<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>You're invited to ${cornerName}</title>
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
              <h2 style="color:#1a1a1a;margin:0 0 16px;">You're invited to join a Corner</h2>
              <p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 24px;">
                ${from} invited you to join <strong>${cornerName}</strong> on FightSync.
              </p>
              <p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 32px;">
                FightSync helps fighters and their corners stay connected, track performance, and prepare for fight night.
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#e63946;border-radius:4px;">
                    <a href="https://fightsync.app" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;">
                      View Invitation
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;border-top:1px solid #eeeeee;">
              <p style="color:#999999;font-size:12px;margin:0;">
                You received this email because someone invited you to FightSync.
                If you didn't expect this, you can safely ignore it.
                ${unsubscribeUrl ? `<br /><a href="${unsubscribeUrl}" style="color:#999999;">Unsubscribe from corner invites</a>` : ''}
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
