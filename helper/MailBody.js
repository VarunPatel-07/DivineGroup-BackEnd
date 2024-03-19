const VerificationEmailBody = (OTPCode) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
   <meta charset="UTF-8">
   <meta content="width=device-width, initial-scale=1" name="viewport">
   <meta name="x-apple-disable-message-reformatting">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta content="telephone=no" name="format-detection">
   <title>New Message</title><!--[if (mso 16)]>
     <style type="text/css">
     a {text-decoration: none;}
     </style>
     <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
 <xml>
     <o:OfficeDocumentSettings>
     <o:AllowPNG></o:AllowPNG>
     <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
 </xml>
 <![endif]-->
   <style type="text/css">
 .rollover:hover .rollover-first {
   max-height:0px!important;
   display:none!important;
   }
   .rollover:hover .rollover-second {
   max-height:none!important;
   display:block!important;
   }
   .rollover span {
   font-size:0px;
   }
   u + .body img ~ div div {
   display:none;
   }
   #outlook a {
   padding:0;
   }
   span.MsoHyperlink,
 span.MsoHyperlinkFollowed {
   color:inherit;
   mso-style-priority:99;
   }
   a.es-button {
   mso-style-priority:100!important;
   text-decoration:none!important;
   }
   a[x-apple-data-detectors] {
   color:inherit!important;
   text-decoration:none!important;
   font-size:inherit!important;
   font-family:inherit!important;
   font-weight:inherit!important;
   line-height:inherit!important;
   }
   .es-desk-hidden {
   display:none;
   float:left;
   overflow:hidden;
   width:0;
   max-height:0;
   line-height:0;
   mso-hide:all;
   }
   .es-button-border:hover > a.es-button {
   color:#ffffff!important;
   }
 @media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p5r { padding-right:5px!important } .es-m-p0b { padding-bottom:0px!important } .es-m-p5l { padding-left:5px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0l { padding-left:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-8486 { width:164px!important } a.es-button.es-button-7581 { font-size:36px!important; padding:0!important } .es-text-4126, .es-text-4126 p, .es-text-4126 a, .es-text-4126 h1, .es-text-4126 h2, .es-text-4126 h3, .es-text-4126 h4, .es-text-4126 h5, .es-text-4126 h6, .es-text-4126 ul, .es-text-4126 ol, .es-text-4126 li, .es-text-4126 span, .es-text-4126 sup, .es-text-4126 sub, .es-text-4126 u, .es-text-4126 b, .es-text-4126 strong, .es-text-4126 em, .es-text-4126 i { font-size:28px!important } }
 @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
 </style>
  </head>
  <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
   <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
         <v:fill type="tile" color="#fafafa"></v:fill>
       </v:background>
     <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
      <tr>
       <td valign="top" style="padding:0;Margin:0">
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
           <td class="es-info-area" align="center" style="padding:0;Margin:0">
            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
              <tr>
               <td align="left" style="padding:20px;Margin:0">
                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tr>
                   <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="center" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View online version</a></p></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
           <td align="center" bgcolor="#161515" style="padding:0;Margin:0;background-color:#161515">
            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
              <tr>
               <td align="left" bgcolor="#161515" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;background-color:#161515">
                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tr>
                   <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="center" class="es-m-txt-c es-m-p15b" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><img src="https://fezyfbs.stripocdn.email/content/guids/CABINET_4c9802564b87338cfd1e2659cae1c512c49434fa58598717fd832c3ba22b94fa/images/group_3.png" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" class="img-8486" width="200"></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
           <td align="center" bgcolor="#161515" style="padding:0;Margin:0;background-color:#161515">
            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;width:600px" role="none">
              <tr>
               <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px;border-radius:1px;background-color:#161515" bgcolor="#161515">
                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tr>
                   <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://fezyfbs.stripocdn.email/content/guids/CABINET_67e080d830d87c17802bd9b4fe1c0912/images/55191618237638326.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="100"></td>
                      </tr>
                      <tr>
                       <td align="center" class="es-m-txt-c es-text-4126" style="padding:0;Margin:0;padding-bottom:10px"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px !important;color:#ffffff" align="center">Confirm Your Email Through OTP</h1></td>
                      </tr>
                      <tr>
                       <td align="center" class="es-m-p5l es-m-p5r es-m-p0b" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:5px;padding-left:40px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#efefef;font-size:14px">This message has been sent to inform you that your email address has been registered with our website. To verify your email address and confirm ownership of this account, kindly utilize the One-Time Password provided below. We appreciate your prompt attention in this regard.</p></td>
                      </tr>
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#ffffff;font-size:14px">If you did not register with us, please disregard this email.</p></td>
                      </tr>
                      <tr>
                       <td align="center" class="es-m-p0t es-m-p0b" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><span class="es-button-border es-il" style="border-style:solid;border-color:#2CB543;background:transparent;border-width:0;display:inline-block;border-radius:25px;width:auto"><a href="" class="es-button es-button-7581" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#f41884;font-size:36px;padding:10px 20px;display:inline-block;background:transparent;border-radius:25px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:43px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid transparent;border-left-width:30px;border-right-width:30px"> ${OTPCode} </a></span></td>
                      </tr>
                      <tr>
                       <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:5px;padding-left:40px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#ffffff;font-size:14px">Once confirmed, this email will be uniquely associated with your account.</p></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
           <td align="center" bgcolor="#161515" style="padding:0;Margin:0;background-color:#161515">
            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#161515;" bgcolor="#161515" role="none">
              <tr>
               <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:20px">
                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tr>
                   <td align="left" style="padding:0;Margin:0;width:600px">
                    <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#161515" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#161515" role="presentation">
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr>
                           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Facebook" src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="X.com" src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/x-circle-colored.png" alt="X" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                           <td align="center" valign="top" style="padding:0;Margin:0;padding-right:40px"><img title="Instagram" src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt="Inst" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                           <td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png" alt="Yt" width="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                       <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px !important;letter-spacing:0;color:#efefef;font-size:12px">Style Casual&nbsp;© 2021 Style Casual, Inc. All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px !important;letter-spacing:0;color:#efefef;font-size:12px">4562 Hazy Panda Limits, Chair Crossing, Kentucky, US, 607898</p></td>
                      </tr>
                      <tr>
                       <td style="padding:0;Margin:0">
                        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr class="links">
                           <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#ffffff;font-size:12px">Visit Us </a></td>
                           <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #ffffff"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#ffffff;font-size:12px">Privacy Policy</a></td>
                           <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #ffffff"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#ffffff;font-size:12px">Terms of Use</a></td>
                          </tr>
                        </table></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
           <td class="es-info-area" align="center" style="padding:0;Margin:0">
            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
              <tr>
               <td align="left" style="padding:20px;Margin:0">
                <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                  <tr>
                   <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                      <tr>
                       <td align="center" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px" target="_blank" href="https://google.com"><span style="color:#333333">No longer want to receive these emails?&nbsp;</span>Unsubscribe<span style="color:#333333">.</span></a></p></td>
                      </tr>
                    </table></td>
                  </tr>
                </table></td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
    </table>
   </div>
  </body>
 </html>`;
};

const ResetPassWordMail = (ResetPassPageLink) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    dir="ltr"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>New Message</title>
      <!--[if (mso 16)]>
        <style type="text/css">
          a {
            text-decoration: none;
          }
        </style>
      <![endif]-->
      <!--[if gte mso 9
        ]><style>
          sup {
            font-size: 100% !important;
          }
        </style><!
      [endif]-->
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <style type="text/css">
        .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
        }
        .rollover:hover .rollover-second {
          max-height: none !important;
          display: block !important;
        }
        .rollover span {
          font-size: 0px;
        }
        u + .body img ~ div div {
          display: none;
        }
        #outlook a {
          padding: 0;
        }
        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color: inherit;
          mso-style-priority: 99;
        }
        a.es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        .es-button-border:hover > a.es-button {
          color: #ffffff !important;
        }
        @media only screen and (max-width: 600px) {
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p15b {
            padding-bottom: 15px !important;
          }
          .es-m-p5r {
            padding-right: 5px !important;
          }
          .es-m-p0b {
            padding-bottom: 0px !important;
          }
          .es-m-p5l {
            padding-left: 5px !important;
          }
          .es-m-p0t {
            padding-top: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          p,
          a {
            line-height: 150% !important;
          }
          h1,
          h1 a {
            line-height: 120% !important;
          }
          h2,
          h2 a {
            line-height: 120% !important;
          }
          h3,
          h3 a {
            line-height: 120% !important;
          }
          h4,
          h4 a {
            line-height: 120% !important;
          }
          h5,
          h5 a {
            line-height: 120% !important;
          }
          h6,
          h6 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 36px !important;
            text-align: left;
          }
          h2 {
            font-size: 26px !important;
            text-align: left;
          }
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
          h4 {
            font-size: 24px !important;
            text-align: left;
          }
          h5 {
            font-size: 20px !important;
            text-align: left;
          }
          h6 {
            font-size: 16px !important;
            text-align: left;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 36px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 26px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-header-body h4 a,
          .es-content-body h4 a,
          .es-footer-body h4 a {
            font-size: 24px !important;
          }
          .es-header-body h5 a,
          .es-content-body h5 a,
          .es-footer-body h5 a {
            font-size: 20px !important;
          }
          .es-header-body h6 a,
          .es-content-body h6 a,
          .es-footer-body h6 a {
            font-size: 16px !important;
          }
          .es-menu td a {
            font-size: 12px !important;
          }
          .es-header-body p,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body a {
            font-size: 16px !important;
          }
          .es-footer-body p,
          .es-footer-body a {
            font-size: 14px !important;
          }
          .es-infoblock p,
          .es-infoblock a {
            font-size: 12px !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3,
          .es-m-txt-c h4,
          .es-m-txt-c h5,
          .es-m-txt-c h6 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3,
          .es-m-txt-r h4,
          .es-m-txt-r h5,
          .es-m-txt-r h6 {
            text-align: right !important;
          }
          .es-m-txt-j,
          .es-m-txt-j h1,
          .es-m-txt-j h2,
          .es-m-txt-j h3,
          .es-m-txt-j h4,
          .es-m-txt-j h5,
          .es-m-txt-j h6 {
            text-align: justify !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3,
          .es-m-txt-l h4,
          .es-m-txt-l h5,
          .es-m-txt-l h6 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-m-txt-r .rollover:hover .rollover-second,
          .es-m-txt-c .rollover:hover .rollover-second,
          .es-m-txt-l .rollover:hover .rollover-second {
            display: inline !important;
          }
          .es-m-txt-r .rollover span,
          .es-m-txt-c .rollover span,
          .es-m-txt-l .rollover span {
            line-height: 0 !important;
            font-size: 0 !important;
          }
          .es-spacer {
            display: inline-table;
          }
          a.es-button,
          button.es-button {
            font-size: 20px !important;
            line-height: 120% !important;
          }
          a.es-button,
          button.es-button,
          .es-button-border {
            display: inline-block !important;
          }
          .es-m-fw,
          .es-m-fw.es-fw,
          .es-m-fw .es-button {
            display: block !important;
          }
          .es-m-il,
          .es-m-il .es-button,
          .es-social,
          .es-social td,
          .es-menu {
            display: inline-block !important;
          }
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          .es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          .es-social td {
            padding-bottom: 10px;
          }
          .h-auto {
            height: auto !important;
          }
          .img-8486 {
            width: 164px !important;
          }
          a.es-button.es-button-7581 {
            font-size: 18px !important;
            padding: 10px 30px !important;
          }
          .es-text-4126,
          .es-text-4126 p,
          .es-text-4126 a,
          .es-text-4126 h1,
          .es-text-4126 h2,
          .es-text-4126 h3,
          .es-text-4126 h4,
          .es-text-4126 h5,
          .es-text-4126 h6,
          .es-text-4126 ul,
          .es-text-4126 ol,
          .es-text-4126 li,
          .es-text-4126 span,
          .es-text-4126 sup,
          .es-text-4126 sub,
          .es-text-4126 u,
          .es-text-4126 b,
          .es-text-4126 strong,
          .es-text-4126 em,
          .es-text-4126 i {
            font-size: 28px !important;
          }
        }
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #fafafa"
      >
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#fafafa"></v:fill>
          </v:background>
        <![endif]-->
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #fafafa;
          "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    class="es-info-area"
                    align="center"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      bgcolor="#FFFFFF"
                      role="none"
                    >
                      <tr>
                        <td align="left" style="padding: 20px; margin: 0">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-infoblock"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 18px;
                                          letter-spacing: 0;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href=""
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #cccccc;
                                            font-size: 12px;
                                          "
                                          >View online version</a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-header"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#161515"
                    style="padding: 0; margin: 0; background-color: #161515"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-header-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          bgcolor="#161515"
                          style="
                            margin: 0;
                            padding-top: 10px;
                            padding-right: 20px;
                            padding-bottom: 10px;
                            padding-left: 20px;
                            background-color: #161515;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                class="es-m-p0r"
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c es-m-p15b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 20px;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        src="https://fezyfbs.stripocdn.email/content/guids/CABINET_4c9802564b87338cfd1e2659cae1c512c49434fa58598717fd832c3ba22b94fa/images/group_3.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          font-size: 12px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        title="Logo"
                                        class="img-8486"
                                        width="200"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#161515"
                    style="padding: 0; margin: 0; background-color: #161515"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: separate;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        width: 600px;
                      "
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-top: 30px;
                            padding-bottom: 30px;
                            border-radius: 1px;
                            background-color: #161515;
                          "
                          bgcolor="#161515"
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <td
                                    align="center"
                                    class="esd-block-image es-p10t es-p10b"
                                    style="font-size: 0px"
                                  >
                                    <a target="_blank"
                                      ><img
                                        src="https://fezyfbs.stripocdn.email/content/guids/CABINET_91d375bbb7ce4a7f7b848a611a0368a7/images/69901618385469411.png"
                                        alt=""
                                        style="display: block"
                                        width="100"
                                    /></a>
                                  </td>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c es-text-4126"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <h1
                                        style="
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 46px;
                                          font-style: normal;
                                          font-weight: bold;
                                          line-height: 55px !important;
                                          color: #ffffff;
                                        "
                                        align="center"
                                      >
                                        Password reset 
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-p5l es-m-p5r es-m-p0b"
                                      style="
                                        margin: 0;
                                        padding-top: 5px;
                                        padding-right: 40px;
                                        padding-bottom: 5px;
                                        padding-left: 40px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 30px;
                                          letter-spacing: 0;
                                          color: #efefef;
                                          font-size: 20px;
                                          font-weight: 500;
                                          text-align: start;
                                        "
                                      >
                                        After you click the button, you'll be
                                        asked to complete the following steps:
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        margin: 0;
                                        padding-top: 5px;
                                        padding-right: 55px;
                                        padding-bottom: 5px;
                                        padding-left: 55px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 30px;
                                          letter-spacing: 0;
                                          color: #ffffff;
                                          font-size: 16px;
                                          text-align: start;
                                        "
                                      >
                                        1.Enter a new password.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 30px;
                                          letter-spacing: 0;
                                          color: #ffffff;
                                          font-size: 16px;
                                          text-align: start;
                                        "
                                      >
                                        2.Confirm your new password.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 30px;
                                          letter-spacing: 0;
                                          color: #ffffff;
                                          font-size: 16px;
                                          text-align: start;
                                        "
                                      >
                                        3.Click Submit.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-p0t es-m-p0b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <span
                                        class="es-button-border es-il"
                                        style="
                                          border-style: solid;
                                          border-color: #2cb543;
                                          background: transparent;
                                          border-width: 0;
                                          display: inline-block;
                                          border-radius: 25px;
                                          width: auto;
                                        "
                                        ><a
                                          href=${ResetPassPageLink}
                                          class="es-button es-button-7581"
                                          target="_blank"
                                          style="
                                            mso-style-priority: 100 !important;
                                            text-decoration: none !important;
                                            mso-line-height-rule: exactly;
                                            color: #ffffff;
                                            font-size: 22px;
                                            padding: 8px 35px;
                                            display: inline-block;
                                            background: #f41884;
                                            border-radius: 40px;
                                            font-family: arial, 'helvetica neue',
                                              helvetica, sans-serif;
                                            font-weight: bold;
                                            font-style: normal;
                                            line-height: 43px;
                                            width: auto;
                                            text-align: center;
                                            margin: 20px 0;
                                            letter-spacing: 0;
                                            mso-padding-alt: 0;
                                            mso-border-alt: 10px solid transparent;
                                            border-left-width: 30px;
                                            border-right-width: 30px;
                                          "
                                        >
                                          Click To Reset Password
                                        </a></span
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-p0r es-m-p0l"
                                      style="
                                        margin: 0;
                                        padding-top: 5px;
                                        padding-right: 40px;
                                        padding-bottom: 5px;
                                        padding-left: 40px;
                                      "
                                    >
                                      <h3
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #ffffff;
                                          font-weight: 600;
                                          font-size: 18px;
                                        "
                                      >
                                        This link is valid for one use only.
                                        Expires in 1 hours.
                                      </h3>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-p0r es-m-p0l"
                                      style="
                                        margin: 0;
                                        padding-top: 5px;
                                        padding-right: 40px;
                                        padding-bottom: 5px;
                                        padding-left: 40px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #ffffff;
  
                                          font-size: 14px;
                                        "
                                      >
                                        If you didn't request to reset
                                        your password, please disregard this
                                        message or contact our customer service
                                        department.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-footer"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#161515"
                    style="padding: 0; margin: 0; background-color: #161515"
                  >
                    <table
                      class="es-footer-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #161515;
                      "
                      bgcolor="#161515"
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-bottom: 20px;
                            padding-top: 20px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  bgcolor="#161515"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    background-color: #161515;
                                  "
                                  role="presentation"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 15px;
                                        padding-bottom: 15px;
                                        font-size: 0;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-table-not-adapt es-social"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="Facebook"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                              alt="Fb"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="X.com"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/x-circle-colored.png"
                                              alt="X"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="Instagram"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                              alt="Inst"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="padding: 0; margin: 0"
                                          >
                                            <img
                                              title="Youtube"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png"
                                              alt="Yt"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 35px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 24px !important;
                                          letter-spacing: 0;
                                          color: #efefef;
                                          font-size: 12px;
                                        "
                                      >
                                        Style Casual&nbsp;© 2021 Style Casual,
                                        Inc. All Rights Reserved.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 24px !important;
                                          letter-spacing: 0;
                                          color: #efefef;
                                          font-size: 12px;
                                        "
                                      >
                                        4562 Hazy Panda Limits, Chair Crossing,
                                        Kentucky, US, 607898
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0; margin: 0">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        class="es-menu"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr class="links">
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Visit Us
                                            </a>
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                              border-left: 1px solid #ffffff;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Privacy Policy</a
                                            >
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                              border-left: 1px solid #ffffff;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Terms of Use</a
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    class="es-info-area"
                    align="center"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      bgcolor="#FFFFFF"
                      role="none"
                    >
                      <tr>
                        <td align="left" style="padding: 20px; margin: 0">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-infoblock"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 18px;
                                          letter-spacing: 0;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      >
                                        <a
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #333333;
                                            font-size: 12px;
                                          "
                                          target="_blank"
                                          href="https://google.com"
                                          ><span style="color: #333333"
                                            >No longer want to receive these
                                            emails?&nbsp;</span
                                          >Unsubscribe<span style="color: #333333"
                                            >.</span
                                          ></a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};
const CustomerWelcomeMail = (name) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    dir="ltr"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>New Message</title>
  
      <style type="text/css">
        .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
        }
        .rollover:hover .rollover-second {
          max-height: none !important;
          display: block !important;
        }
        .rollover span {
          font-size: 0px;
        }
        u + .body img ~ div div {
          display: none;
        }
        #outlook a {
          padding: 0;
        }
        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color: inherit;
          mso-style-priority: 99;
        }
        a.es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        .es-button-border:hover > a.es-button {
          color: #ffffff !important;
        }
        @media only screen and (max-width: 600px) {
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p15b {
            padding-bottom: 15px !important;
          }
          .es-m-p5r {
            padding-right: 5px !important;
          }
          .es-m-p0b {
            padding-bottom: 0px !important;
          }
          .es-m-p5l {
            padding-left: 5px !important;
          }
          .es-m-p0t {
            padding-top: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          p,
          a {
            line-height: 150% !important;
          }
          h1,
          h1 a {
            line-height: 120% !important;
          }
          h2,
          h2 a {
            line-height: 120% !important;
          }
          h3,
          h3 a {
            line-height: 120% !important;
          }
          h4,
          h4 a {
            line-height: 120% !important;
          }
          h5,
          h5 a {
            line-height: 120% !important;
          }
          h6,
          h6 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 36px !important;
            text-align: left;
          }
          h2 {
            font-size: 26px !important;
            text-align: left;
          }
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
          h4 {
            font-size: 24px !important;
            text-align: left;
          }
          h5 {
            font-size: 20px !important;
            text-align: left;
          }
          h6 {
            font-size: 16px !important;
            text-align: left;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 36px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 26px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-header-body h4 a,
          .es-content-body h4 a,
          .es-footer-body h4 a {
            font-size: 24px !important;
          }
          .es-header-body h5 a,
          .es-content-body h5 a,
          .es-footer-body h5 a {
            font-size: 20px !important;
          }
          .es-header-body h6 a,
          .es-content-body h6 a,
          .es-footer-body h6 a {
            font-size: 16px !important;
          }
          .es-menu td a {
            font-size: 12px !important;
          }
          .es-header-body p,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body a {
            font-size: 16px !important;
          }
          .es-footer-body p,
          .es-footer-body a {
            font-size: 14px !important;
          }
          .es-infoblock p,
          .es-infoblock a {
            font-size: 12px !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3,
          .es-m-txt-c h4,
          .es-m-txt-c h5,
          .es-m-txt-c h6 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3,
          .es-m-txt-r h4,
          .es-m-txt-r h5,
          .es-m-txt-r h6 {
            text-align: right !important;
          }
          .es-m-txt-j,
          .es-m-txt-j h1,
          .es-m-txt-j h2,
          .es-m-txt-j h3,
          .es-m-txt-j h4,
          .es-m-txt-j h5,
          .es-m-txt-j h6 {
            text-align: justify !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3,
          .es-m-txt-l h4,
          .es-m-txt-l h5,
          .es-m-txt-l h6 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-m-txt-r .rollover:hover .rollover-second,
          .es-m-txt-c .rollover:hover .rollover-second,
          .es-m-txt-l .rollover:hover .rollover-second {
            display: inline !important;
          }
          .es-m-txt-r .rollover span,
          .es-m-txt-c .rollover span,
          .es-m-txt-l .rollover span {
            line-height: 0 !important;
            font-size: 0 !important;
          }
          .es-spacer {
            display: inline-table;
          }
          a.es-button,
          button.es-button {
            font-size: 20px !important;
            line-height: 120% !important;
          }
          a.es-button,
          button.es-button,
          .es-button-border {
            display: inline-block !important;
          }
          .es-m-fw,
          .es-m-fw.es-fw,
          .es-m-fw .es-button {
            display: block !important;
          }
          .es-m-il,
          .es-m-il .es-button,
          .es-social,
          .es-social td,
          .es-menu {
            display: inline-block !important;
          }
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          .es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          .es-social td {
            padding-bottom: 10px;
          }
          .h-auto {
            height: auto !important;
          }
          .img-8486 {
            width: 164px !important;
          }
          a.es-button.es-button-7581 {
            font-size: 18px !important;
            padding: 10px 30px !important;
          }
          .es-text-4126,
          .es-text-4126 p,
          .es-text-4126 a,
          .es-text-4126 h1,
          .es-text-4126 h2,
          .es-text-4126 h3,
          .es-text-4126 h4,
          .es-text-4126 h5,
          .es-text-4126 h6,
          .es-text-4126 ul,
          .es-text-4126 ol,
          .es-text-4126 li,
          .es-text-4126 span,
          .es-text-4126 sup,
          .es-text-4126 sub,
          .es-text-4126 u,
          .es-text-4126 b,
          .es-text-4126 strong,
          .es-text-4126 em,
          .es-text-4126 i {
            font-size: 28px !important;
          }
        }
       
        
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #fafafa"
      >
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#fafafa"></v:fill>
          </v:background>
        <![endif]-->
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #fafafa;
          "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0" class="warper-td">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    class="es-info-area"
                    align="center"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      bgcolor="#FFFFFF"
                      role="none"
                    >
                      <tr>
                        <td align="left" style="padding: 20px; margin: 0">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-infoblock"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 18px;
                                          letter-spacing: 0;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      >
                                        <a
                                          target="_blank"
                                          href=""
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #cccccc;
                                            font-size: 12px;
                                          "
                                          >View online version</a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-header"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#fff"
                    style="padding: 0; margin: 0; background-color: #fff"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-header-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      role="none"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr>
                        <td
                          align="left"
                          bgcolor="#1c1c1c"
                          style="
                            margin: 0;
                            padding-top: 10px;
                            padding-right: 20px;
                            padding-bottom: 10px;
                            padding-left: 20px;
                            background-color: #1c1c1c;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                class="es-m-p0r"
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c es-m-p15b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 20px;
                                        font-size: 0px;
                                      "
                                    >
                                      <img
                                        src="https://fezyfbs.stripocdn.email/content/guids/CABINET_4c9802564b87338cfd1e2659cae1c512c49434fa58598717fd832c3ba22b94fa/images/group_3.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          font-size: 12px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        title="Logo"
                                        class="img-8486 "
                                        width="200"
                                      />
                                    </td>
                                
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#fff"
                    style="padding: 0; margin: 0; background-color: #fff"
                  >
                    <table
                      bgcolor="#ffffff"
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: separate;
                        border-spacing: 0px;
                        background-color: #ffffff;
                        width: 600px;
                      "
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-top: 30px;
                            padding-bottom: 30px;
                            border-radius: 1px;
                            background-color: #1c1c1c;
                          "
                          bgcolor="#1c1c1c"
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="esd-block-image es-p10t es-p10b"
                                      style="font-size: 0px"
                                    >
                                      <a target="_blank"
                                        ><img
                                          src="https://fezyfbs.stripocdn.email/content/guids/CABINET_9ca3362f6e3ce2c3ea60da8fe4f8a850/images/78491618321704551.png"
                                          alt=""
                                          style="display: block"
                                          width="150"
                                      /></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-c es-text-4126"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 10px;
                                      "
                                    >
                                      <h1
                                        style="
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 28px;
                                          font-style: normal;
                                          font-weight: bold;
                                          line-height: 35px !important;
                                          color: #ffffff;
                                          margin-top: 25px;
                                        "
                                        align="center"
                                      >
                                        Hello, ${name}
                                      </h1>
                                      <h3
                                        style="
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 17px;
                                          font-style: normal;
                                          font-weight: normal;
                                          line-height: 24px !important;
                                          color: #e9e6e6e3;
                                          margin-top: 0;
                                          text-transform: capitalize;
                                          padding: 0 10px;
                                        "
                                        align="center"
                                      >
                                        Thank You For Connecting With Us. Our Team
                                        Will Be In Touch With You As Soon As
                                        Possible. If You Require Further
                                        Information, Please Feel Free To Contact
                                        Us Via The Telephone Number Provided Below
                                        Or Through Our Website. We Appreciate Your
                                        Interest And Look Forward To Speaking With
                                        You Soon.
                                      </h3>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="esd-block-text es-p10b es-m-txt-l"
                                    >
                                      <h1
                                        style="
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 45px;
                                          font-style: normal;
                                          font-weight: bold;
                                          line-height: 35px !important;
                                          color: #ffffff;
                                          margin-top: 25px;
                                          margin-bottom: 10px;
                                        "
                                      >
                                        Why us?
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20b es-p20r es-p20l"
                                      align="left"
                                    >
                                      <!-- [if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="90" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-left"
                                        align="left"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="90"
                                              class="es-m-p0r esd-container-frame es-m-p20b"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-image es-m-txt-l"
                                                      style="font-size: 0px"
                                                    >
                                                      <a target="_blank"
                                                        ><img
                                                          src="https://ffajmwy.stripocdn.email/content/guids/CABINET_90fb0f42e4205e00653e660d17ee4f21f3acf9577c8026458a969a8f82eefedc/images/8654548removebgpreview_1_iaf.png"
                                                          alt=""
                                                          style="display: block"
                                                          width="90"
                                                          class="adapt-img"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td><td width="30"></td><td width="440" valign="top"><![endif] -->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-right"
                                        align="right"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="440"
                                              class="esd-container-frame"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text es-p10b es-m-txt-l"
                                                    >
                                                      <h3
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 20px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 35px !important;
                                                          color: #ffffff;
                                                          margin-top: 25px;
                                                          margin-bottom: 10px;
                                                        "
                                                      >
                                                        Expertise Across Segments:
                                                      </h3>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text"
                                                    >
                                                      <p
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 16px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 24px !important;
                                                          color: #cfcdcdce;
                                                          margin: 0px;
                                                          margin-bottom: 20px;
                                                        "
                                                      >
                                                        Whether it's residential,
                                                        commercial, or industrial
                                                        properties, Divine Group
                                                        offers expertise across
                                                        various real estate
                                                        segments, ensuring they
                                                        can cater to diverse
                                                        client needs.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td></tr></table><![endif]-->
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="esd-structure es-p20" align="left">
                                      <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" width="560" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="440" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-right"
                                        align="right"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="90"
                                              class="esd-container-frame es-m-p20b"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-image es-m-txt-l"
                                                      style="font-size: 0px"
                                                    >
                                                      <a target="_blank"
                                                        ><img
                                                          src="https://ffajmwy.stripocdn.email/content/guids/CABINET_90fb0f42e4205e00653e660d17ee4f21f3acf9577c8026458a969a8f82eefedc/images/imagesremovebgpreview.png"
                                                          alt=""
                                                          style="display: block"
                                                          width="90"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td><td dir="ltr" width="30"></td><td dir="ltr" width="90" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-left"
                                        align="left"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="440"
                                              class="es-m-p0r esd-container-frame"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text es-p10b es-m-txt-l"
                                                    >
                                                      <h3
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 20px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 35px !important;
                                                          color: #ffffff;
                                                          margin-top: 25px;
                                                          margin-bottom: 10px;
                                                        "
                                                      >
                                                        Customized Solutions:
                                                      </h3>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text"
                                                    >
                                                      <p
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 16px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 24px !important;
                                                          color: #cfcdcdce;
                                                          margin: 0px;
                                                          margin-bottom: 20px;
                                                        "
                                                      >
                                                        We understand that every
                                                        client's needs are unique.
                                                        Divine Group offers
                                                        personalized and tailored
                                                        solutions to meet
                                                        individual requirements,
                                                        ensuring client
                                                        satisfaction.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td></tr></table></table><![endif]-->
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20b es-p20r es-p20l"
                                      align="left"
                                    >
                                      <!-- [if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="90" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-left"
                                        align="left"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="90"
                                              class="es-m-p0r esd-container-frame es-m-p20b"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-image es-m-txt-l"
                                                      style="font-size: 0px"
                                                    >
                                                      <a target="_blank"
                                                        ><img
                                                          src="https://ffajmwy.stripocdn.email/content/guids/CABINET_90fb0f42e4205e00653e660d17ee4f21f3acf9577c8026458a969a8f82eefedc/images/imagesremovebgpreview_1.png"
                                                          alt=""
                                                          style="display: block"
                                                          width="90"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td><td width="30"></td><td width="440" valign="top"><![endif] -->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-right"
                                        align="right"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="440"
                                              class="esd-container-frame"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text es-p10b es-m-txt-l"
                                                    >
                                                      <h3
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 20px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 35px !important;
                                                          color: #ffffff;
                                                          margin-top: 25px;
                                                          margin-bottom: 10px;
                                                        "
                                                      >
                                                        Market Knowledge:
                                                      </h3>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text"
                                                    >
                                                      <p
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 16px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 24px !important;
                                                          color: #cfcdcdce;
                                                          margin: 0px;
                                                          margin-bottom: 20px;
                                                        "
                                                      >
                                                        With extensive market
                                                        knowledge and experience,
                                                        Divine Group provides
                                                        valuable insights into
                                                        local real estate trends,
                                                        helping clients make
                                                        informed decisions.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td></tr></table><![endif]-->
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="esd-structure es-p20" align="left">
                                      <!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" width="560" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="440" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-right"
                                        align="right"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="90"
                                              class="esd-container-frame es-m-p20b"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-image es-m-txt-l"
                                                      style="font-size: 0px"
                                                    >
                                                      <a target="_blank"
                                                        ><img
                                                          src="https://ffajmwy.stripocdn.email/content/guids/CABINET_90fb0f42e4205e00653e660d17ee4f21f3acf9577c8026458a969a8f82eefedc/images/image_yy7.png"
                                                          alt=""
                                                          style="display: block"
                                                          width="90"
                                                          class="adapt-img"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td><td dir="ltr" width="30"></td><td dir="ltr" width="90" valign="top"><![endif]-->
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-left"
                                        align="left"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="440"
                                              class="es-m-p0r esd-container-frame"
                                              align="center"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text es-p10b es-m-txt-l"
                                                    >
                                                      <h3
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 20px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 35px !important;
                                                          color: #ffffff;
                                                          margin-top: 25px;
                                                          margin-bottom: 10px;
                                                        "
                                                      >
                                                        Long-Term Relationships:
                                                      </h3>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      class="esd-block-text"
                                                    >
                                                      <p
                                                        style="
                                                          font-family: arial,
                                                            'helvetica neue',
                                                            helvetica, sans-serif;
                                                          mso-line-height-rule: exactly;
                                                          letter-spacing: 0;
                                                          font-size: 16px;
                                                          font-style: normal;
                                                          font-weight: normal;
                                                          line-height: 24px !important;
                                                          color: #cfcdcdce;
                                                          margin: 0px;
                                                          margin-bottom: 20px;
                                                        "
                                                      >
                                                        Divine Group values
                                                        long-term relationships
                                                        with clients. Their
                                                        dedication to building
                                                        lasting partnerships
                                                        extends beyond
                                                        transactions, fostering
                                                        trust and loyalty over
                                                        time.
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if mso]></td></tr></table></table><![endif]-->
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-footer"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#fff"
                    style="padding: 0; margin: 0; background-color: #fff"
                  >
                    <table
                      class="es-footer-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #1c1c1c;
                        width: 600px;
                      "
                      bgcolor="#1c1c1c"
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-bottom: 20px;
                            padding-top: 20px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  bgcolor="#1c1c1c"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    background-color: #1c1c1c;
                                  "
                                  role="presentation"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 15px;
                                        padding-bottom: 15px;
                                        font-size: 0;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-table-not-adapt es-social"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="Facebook"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                              alt="Fb"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="X.com"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/x-circle-colored.png"
                                              alt="X"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 40px;
                                            "
                                          >
                                            <img
                                              title="Instagram"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                              alt="Inst"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="padding: 0; margin: 0"
                                          >
                                            <img
                                              title="Youtube"
                                              src="https://fezyfbs.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png"
                                              alt="Yt"
                                              width="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-bottom: 35px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 24px !important;
                                          letter-spacing: 0;
                                          color: #efefef;
                                          font-size: 12px;
                                        "
                                      >
                                        Style Casual&nbsp;© 2021 Style Casual,
                                        Inc. All Rights Reserved.
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 24px !important;
                                          letter-spacing: 0;
                                          color: #efefef;
                                          font-size: 12px;
                                        "
                                      >
                                        4562 Hazy Panda Limits, Chair Crossing,
                                        Kentucky, US, 607898
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0; margin: 0">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        class="es-menu"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr class="links">
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Visit Us
                                            </a>
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                              border-left: 1px solid #ffffff;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Privacy Policy</a
                                            >
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            width="33.33%"
                                            style="
                                              margin: 0;
                                              border: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              padding-right: 5px;
                                              padding-left: 5px;
                                              border-left: 1px solid #ffffff;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: none;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                                display: block;
                                                color: #ffffff;
                                                font-size: 12px;
                                              "
                                              >Terms of Use</a
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    class="es-info-area"
                    align="center"
                    style="padding: 0; margin: 0"
                  >
                    <table
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      bgcolor="#FFFFFF"
                      role="none"
                    >
                      <tr>
                        <td align="left" style="padding: 20px; margin: 0">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-infoblock"
                                      style="padding: 0; margin: 0"
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 18px;
                                          letter-spacing: 0;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      >
                                        <a
                                          style="
                                            mso-line-height-rule: exactly;
                                            text-decoration: underline;
                                            color: #333333;
                                            font-size: 12px;
                                          "
                                          target="_blank"
                                          href="https://google.com"
                                          ><span style="color: #333333"
                                            >No longer want to receive these
                                            emails?&nbsp;</span
                                          >Unsubscribe<span style="color: #333333"
                                            >.</span
                                          ></a
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};

module.exports = { VerificationEmailBody, ResetPassWordMail , CustomerWelcomeMail };
