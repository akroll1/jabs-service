import { YouAreInvitedToCorner } from "@/common";


export const cornerInviteEmailTemplate = ({ cornerName, managerName, unsubscribeUrl }: YouAreInvitedToCorner): string => {
  const from = managerName ? `${managerName} has` : 'Someone has';

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
                <strong>${from}</strong> invited you to join <strong>${cornerName}</strong> on FightSync.
              </p>
              <p style="color:#555555;font-size:16px;line-height:1.6;margin:0 0 32px;">
                Don't just watch the fights—score them together. FightSync lets you and your crew judge the main event live and instantly share your cards the second the bell rings. <br /><br />Plus, every round you lock in feeds the global analytics. Watch the worldwide fan consensus shift round-by-round, and see how other fans are seeing the momentum shifts. Experience fight night like never before!              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#e63946;border-radius:4px;">
                    <a href="https://fightsync.app/dashboard/corners/invites?cornerName=${encodeURIComponent(cornerName || "")}&managerName=${encodeURIComponent(managerName || '')}  " style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;">
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
