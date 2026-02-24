export const letsGetYouStartedEmailTemplate = (email: string) => {
  return `<!doctype html>
<html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title></title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-px-100 {
        width: 100px !important;
        max-width: 100px;
      }

      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-px-100 {
      width: 100px !important;
      max-width: 100px;
    }

    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

    .moz-text-html .mj-column-per-50 {
      width: 50% !important;
      max-width: 50%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    .body-border {
      border: 5px solid #333 !important;
    }
  </style>
</head>

<body style="word-spacing:normal;background-color:#f8f8f8;">
  <div aria-roledescription="email" class="body-border" style="background-color:#f8f8f8;" role="article" lang="und" dir="auto">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="border-top:2px solid #000;direction:ltr;font-size:0px;padding:20px 0;padding-bottom:10px;padding-left:24px;padding-right:24px;padding-top:48px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:100px;" ><![endif]-->
              <div class="mj-column-px-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:100px;">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1719953352/fsl_icon_no_bg_fr1tfv.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:504px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;padding-top:10px;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:36px;font-weight:bold;line-height:1;text-align:center;color:#333333;">FightSync</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#111111" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#111111;background-color:#111111;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#111111;background-color:#111111;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:48px;padding-left:48px;padding-right:48px;padding-top:24px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.6;text-align:left;color:#bbbbbb;">WELCOME TO FIGHTSYNC</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:12px;line-height:12px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:38px;line-height:1.375;text-align:left;color:#ffffff;"><strong>Let's get you <br />up and running smoothly</strong></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile">
                                  <tbody>
                                    <tr>
                                      <td style="width:252px;" class="mj-full-width-mobile">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1719947921/home_page_n0_bg_wticrg.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="252" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:48px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:504px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#515151;">Fantasy boxing is here! FightSync allows you to make fight predictions, create groups and compete together over a season of boxing.</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:24px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:22px;line-height:1.5;text-align:center;color:#000000;"><strong>The Latest Fight Info</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:4px;line-height:4px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#515151;">FightSync has the latest major fight info and up-to-the-minute results including how and where to watch fights and the latest odds.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
                                        <a href="https://fightsync.app#fight_info?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=fight_info&email=${email}" style="display:inline-block;background:transparent;color:#dd0c28;font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:20px;font-weight:normal;line-height:1.5;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                                          <strong>Learn more</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:110px;">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759140/email_assets/introductory_email/latest_fight_info_no_bg_v7gjr0.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="110" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:24px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:120px;">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759174/email_assets/introductory_email/real_time_analytics_no_bg_loimni.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:22px;line-height:1.5;text-align:center;color:#000000;"><strong>Real-Time Analytics and Scoring</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:4px;line-height:4px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#515151;">Real-time fight analytics give you an insight into fights like never before! Score the fight as it happens and see how your scorecard compares to others.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
                                        <a href="https://fightsync.app#analytics?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=analytics&email=${email}" style="display:inline-block;background:transparent;color:#dd0c28;font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:20px;font-weight:normal;line-height:1.5;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                                          <strong>Learn more</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:24px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:22px;line-height:1.5;text-align:center;color:#000000;"><strong>Make Predictions</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:4px;line-height:4px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#515151;">Let AI help you make your fight predictions by choosing which fighter wins and how. Create a Corner and play against friends over a season.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
                                        <a href="https://fightsync.app#make_predictions?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=make_predictions&email=${email}" style="display:inline-block;background:transparent;color:#dd0c28;font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:20px;font-weight:normal;line-height:1.5;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                                          <strong>Learn more</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:120px;">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759142/email_assets/introductory_email/make_predictions_no_bg_r7pwuz.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px;padding-bottom:24px;padding-left:48px;padding-right:48px;padding-top:24px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:120px;">
                                        <img alt="" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759141/email_assets/introductory_email/create_a_corner_no_bg_wfeqhd.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="120" height="auto" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:252px;" ><![endif]-->
              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:22px;line-height:1.5;text-align:center;color:#000000;"><strong>Create a Corner</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:4px;line-height:4px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#515151;">Create a Corner and see all your corner's scores in real-time. Compete and play over a season together to find out who wears the belt in your corner.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
                                        <a href="https://fightsync.app#create_a_corner?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=create_a_corner&email=${email}" style="display:inline-block;background:transparent;color:#dd0c28;font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:20px;font-weight:normal;line-height:1.5;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank">
                                          <strong>Learn more</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:50px;padding-bottom:0px;padding-left:50px;padding-right:50px;padding-top:0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:500px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
        <tbody>
          <tr>
            <td style="border-bottom:2px solid gray;direction:ltr;font-size:0px;padding:20px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:8px;line-height:8px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:24px;line-height:1.25;text-align:center;color:#ffffff;"><strong>FightSync</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;line-height:1;text-align:center;color:#dddddd;"><strong>You be the Judge.</strong></div>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:16px;line-height:16px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:14px;line-height:1.6;text-align:center;color:#888888;">If this email has been sent in error, you may disregard it or unsubscribe below.</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#000000" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#000000;background-color:#000000;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#000000;background-color:#000000;width:100%;">
        <tbody>
          <tr>
            <td style="border-bottom:2px solid #ffffff;border-top:none;direction:ltr;font-size:0px;padding:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;padding-top:40px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:20px;line-height:20px;">&#8202;</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0px;word-break:break-word;">
                                <div style="font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:16px;line-height:1.5;text-align:center;color:#dddddd;">${new Date().getFullYear()} FightSync &copy; All rights reserved.<br /><br /></div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:transparent;" valign="middle">
                                        <a href="https://fightsync.app/unsubscribe?id=${email}&source=WELCOME" style="display:inline-block;background:transparent;color:#999999;font-family:'Cabin', 'Helvetica', 'Arial', sans-serif;font-size:18px;font-weight:normal;line-height:120%;margin:0;text-decoration:underline;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> Unsubscribe </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td style="font-size:0px;word-break:break-word;">
                                <div style="height:40px;line-height:40px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`;
};

const mjml = `<mjml>
    <mj-head>
      <mj-style>
      	.body-border {
        	border: 5px solid #333 !important;
      	}
    </mj-style>
      <mj-attributes>
        <mj-all font-family="'Cabin', 'Helvetica', 'Arial', sans-serif"></mj-all>
        <mj-text color="#515151"></mj-text>
      </mj-attributes>

      <mj-font href="https://fonts.googleapis.com/css?family=Cabin:normal,italic,bold&display=swap" name="Cabin"></mj-font>
    </mj-head>
    <mj-body background-color="#f8f8f8" css-class="body-border">
      <mj-section background-color="#fff" border-top="2px solid #000" padding-bottom="10px" padding-left="24px" padding-right="24px" padding-top="48px">
        <mj-column padding="0" width="100px">
          <mj-image align="center" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1719953352/fsl_icon_no_bg_fr1tfv.png" width="100px"></mj-image>
        </mj-column>
			</mj-section>
      <mj-section background-color="#fff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="0px" padding="48px">
        <mj-column padding="0" padding-top="10px">
           <mj-text font-weight="bold" color="#333" font-size="36px" align="center">FightSync</mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#111" padding-bottom="48px" padding-left="48px" padding-right="48px" padding-top="24px" padding="48px">
        <mj-column padding="0">
          <mj-text color="#bbb" font-size="14px" line-height="1.6" padding="0px">
            WELCOME TO FIGHTSYNC
          </mj-text>
          <mj-spacer height="12px"></mj-spacer>
          <mj-text color="#ffffff" font-size="38px" line-height="1.375" padding="0px">
            <strong>Let's get you <br />up and running smoothly</strong>
          </mj-text>
        </mj-column>
        <mj-column padding="0">
          <mj-image fluid-on-mobile="true" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1719947921/home_page_n0_bg_wticrg.png"></mj-image>
        </mj-column>
      </mj-section>
      <mj-section background-color="#ffffff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="48px" padding="48px">
        <mj-column padding="0">
          <mj-text  align="center" font-size="18px" line-height="1.5" padding="0px">
            Fantasy boxing is here! FightSync allows you to make fight predictions, create groups and compete together over a season of boxing.
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#ffffff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="24px" padding="48px">
        <mj-column padding="0">
          <mj-text  align="center" color="#000000" font-size="22px" line-height="1.5" padding="0px">
            <strong>The Latest Fight Info</strong>
          </mj-text>
          <mj-spacer height="4px"></mj-spacer>
          <mj-text  align="center" font-size="18px" line-height="1.5" padding="0px">
						FightSync has the latest major fight info and up-to-the-minute results including how and where to watch fights and the latest odds.
          </mj-text>

          <mj-button href="https://fightsync.app#fight_info?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=fight_info&email=${email}" background-color="transparent" color="#dd0c28" font-size="20px" line-height="1.5">
            <strong>Learn more</strong>
          </mj-button>
        </mj-column>
        <mj-column padding="0">
          <mj-image align="center" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759140/email_assets/introductory_email/latest_fight_info_no_bg_v7gjr0.png" width="110px"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="24px" padding="48px">
        <mj-column padding="0">
          <mj-image align="center" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759174/email_assets/introductory_email/real_time_analytics_no_bg_loimni.png" width="120px"></mj-image>
        </mj-column>
        <mj-column padding="0">
          <mj-text  align="center" color="#000000" font-size="22px" line-height="1.5" padding="0px">
            <strong>Real-Time Analytics and Scoring</strong>
          </mj-text>
          <mj-spacer height="4px"></mj-spacer>
          <mj-text  align="center" font-size="18px" line-height="1.5" padding="0px">
            Real-time fight analytics give you an insight into fights like never before! Score the fight as it happens and see how your scorecard compares to others.
          </mj-text>
          <mj-button href="https://fightsync.app#analytics?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=analytics&email=${email}" background-color="transparent" color="#dd0c28" font-size="20px" line-height="1.5">
            <strong>Learn more</strong>
          </mj-button>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="24px" padding="48px">
        <mj-column padding="0">
          <mj-text  align="center" color="#000000" font-size="22px" line-height="1.5" padding="0px">
            <strong>Make Predictions</strong>
          </mj-text>
          <mj-spacer height="4px"></mj-spacer>
          <mj-text  align="center" font-size="18px" line-height="1.5" padding="0px">
						Let AI help you make your fight predictions by choosing which fighter wins and how. Create a Corner and play against friends over a season.
          </mj-text>
          <mj-button href="https://fightsync.app#make_predictions?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=make_predictions&email=${email}" background-color="transparent" color="#dd0c28" font-size="20px" line-height="1.5">
            <strong>Learn more</strong>
					</mj-button>
        </mj-column>
        <mj-column padding="0">
          <mj-image align="center" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759142/email_assets/introductory_email/make_predictions_no_bg_r7pwuz.png" width="120px"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding-bottom="24px" padding-left="48px" padding-right="48px" padding-top="24px" padding="48px">
        <mj-column padding="0">
          <mj-image align="center" padding="0px" src="https://res.cloudinary.com/dhen5jaym/image/upload/v1766759141/email_assets/introductory_email/create_a_corner_no_bg_wfeqhd.png" width="120px"></mj-image>
        </mj-column>
        <mj-column padding="0">
          <mj-text  align="center" color="#000000" font-size="22px" line-height="1.5" padding="0px">
            <strong>Create a Corner</strong>
          </mj-text>
          <mj-spacer height="4px"></mj-spacer>
          <mj-text  align="center" font-size="18px" line-height="1.5" padding="0px">
            Create a Corner and see all your corner's scores in real-time. Compete and play over a season together to find out who wears the belt in your corner.
          </mj-text>
          <mj-button href="https://fightsync.app#create_a_corner?utm_source=email&utm_medium=email&utm_campaign=welcome&utm_content=create_a_corner&email=${email}" background-color="transparent" color="#dd0c28" font-size="20px" line-height="1.5">
            <strong>Learn more</strong>
          </mj-button>
        </mj-column>
      </mj-section>

      <mj-section background-color="#fff" padding-bottom="0px" padding-left="50px" padding-right="50px" padding-top="0px" padding="50px">
      <mj-column padding="0">

      </mj-column>
    </mj-section>
    <mj-section background-color="#000" padding="20px" border-bottom="2px solid gray">
      <mj-column padding="0">
        <mj-spacer height="8px"></mj-spacer>
        <mj-text align="center" color="#fff" font-size="24px" line-height="1.25" padding="0px">
          <strong>FightSync</strong>
        </mj-text>
          <br />
        <mj-text color="#ddd" align="center" font-size="18px"><strong>You be the Judge.</strong></mj-text>

        <mj-spacer height="16px"></mj-spacer>
        <mj-text align="center" color="#888" font-size="14px" line-height="1.6" padding="0px">
          If this email has been sent in error, you may disregard it or unsubscribe below.
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#000" border-bottom="2px solid #ffffff" border-top="none" padding-bottom="40px" padding-left="40px" padding-right="40px" padding-top="40px" padding="40px">
      <mj-column padding="0">

      <mj-spacer height="20px"></mj-spacer>
      <mj-text color="#ddd" align="center" font-size="16px" line-height="1.5" padding="0px">
        ${new Date().getFullYear()} FightSync &copy; All rights reserved.<br /><br />
      </mj-text>
      <mj-button font-size="18px" background-color="transparent" color="#999" text-decoration="underline" href="https://fightsync.app/unsubscribe?id=${email}&source=WELCOME">Unsubscribe</mj-button>

    </mj-column>
  </mj-section>
    <mj-section padding="0px">
      <mj-column padding="0">
        <mj-spacer height="40px"></mj-spacer>
      </mj-column>
    </mj-section>
    </mj-body>
  </mjml>`;
