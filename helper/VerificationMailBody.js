const VerificationEmailBody = (OTPCode) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@500;700;900&display=swap");
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: #fff;
      }

      .wrapper {
        width: 100%;
        table-layout: fixed;
        padding: 0;
        margin: 0;
      }
      .main {
        width: 100%;
        max-width: 600px;
        font-family: "Montserrat";
        padding: 0;
        margin: 0;
      }
      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 30px;
        text-align: center;
      }
      p {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        padding: 15px 10px 0 10px;
        line-height: 24px;
      }
      a {
        text-align: center;
        margin: auto;
      }
      .img {
        width: 100%;
        height: 100%;
      }
      .image {
        width: 120px;
        height: 120px;
      }

      .otp-btn {
        padding: 10px 20px;
        border: 0;
        border-radius: 10px;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        letter-spacing: 5px;
        cursor: pointer;
        background-color: #ff7d00;
      }
      .social-icon img {
        width: 45px;
        height: 45px;
        /* mix-blend-mode: multiply; */
        aspect-ratio: 1/1;
        padding: 10px;
        border-radius: 10px;
      }
      .privacy-policy {
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
      }
    </style>
  </head>

  <body>
    <center class="wrapper" style="background-color: #fff">
      <table  bgColor="#ffecd1" class="main" style=" color: #fff">
        <tbody bgColor="#ffecd1" style="color: #fff ;">
          <tr>
            <td height="8" style="background-color: #000"></td>
          </tr>
          <!-- navbar image -->
          <tr>
            <td>
              <table class="navbar" width="100%">
                <tr>
                  <td>
                    <center style="padding: 15px 0">
                      <a href="">
                        <img
                          src="https://i.postimg.cc/prvbQhpf/logo1.png"
                          width="130"
                          title="DIVINE GROUP"
                          alt="DIVINE GROUP"
                        />
                      </a>
                    </center>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- otp part -->
          <tr>
            <td>
              <table style="padding: 0 15px" width="100%">
                <tbody bgColor="#15616d">
                  <tr>
                    <td style=" padding: 30px 0">
                      <table width="100%">
                        <tbody>
                          <center>
                            <tr>
                              <td>
                                <center>
                                  <table
                                    style="
                                      padding: 25px;
                                      border-radius: 50%;
                                    "
                                    bgcolor="#fff"
                                  >
                                    <tbody>
                                      <tr>
                                        <td class="image" >
                                          <img
                                            src="https://png.pngtree.com/png-vector/20191105/ourmid/pngtree-email-icon-in-flat-style-png-image_1957181.jpg"
                                            alt=""
                                            style="mix-blend-mode: multiply"
                                            class="img"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </center>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  style="padding: 20px 10px 0 10px"
                                >
                                  <tbody>
                                    <center>
                                      <tr>
                                        <td>
                                          <h2>verify your email</h2>
                                        </td>
                                      </tr>
                                    </center>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>
                                  thnaks for connecting with us please enter the
                                  given below four digite OTP
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <center>
                                  <table style="padding: 15px 0 0 0">
                                    <tbody>
                                      <tr>
                                        <td bgColor="#ff7d00" style="border-radius: 5px;">
                                          <button
                                            class="otp-btn"
                                            style="
                                              background-color: transparent;
                                              color: #fff;
                                            " 
                                          >
                                           ${OTPCode}
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </center>
                              </td>
                            </tr>
                          </center>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <!-- social icon -->
          <tr>
            <td>
              <center>
                <table width="60%" style="padding: 15px 0 0 0">
                  <tbody>
                    <center>
                      <tr>
                        <td style="text-align: center" >
                          <a
                            href="https://google.com"
                            class="social-icon"
                            width="100"
                            height="100px"
                          >
                            <img
                              src="https://qwestore.com/png_images_min/10/bFacebook-logob-bBlack-iconb-FB-icon-7841.png"
                              style="background-color: #fff"
                              alt=""
                            />
                          </a>
                        </td>
                        <td style="text-align: center">
                          <a href="" class="social-icon">
                            <img
                              src="https://www.unipile.com/wp-content/uploads/2022/09/Logo-Instagram-noir-1.png"
                              alt=""
                              style="background-color: #fff"
                            />
                          </a>
                        </td>
                        <td style="text-align: center">
                          <a href="" class="social-icon">
                            <img
                              src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?w=2000"
                              alt=""
                              style="background-color: #fff"
                            />
                          </a>
                        </td>
                      </tr>
                    </center>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
          <tr>
            <td>
              <center>
                <table width="80%" style="padding: 15px 0 20px 0">
                  <tbody>
                    <center>
                      <tr>
                        <td style="text-align: center">
                          <a href="" class="privacy-policy" style="color: #000">
                            © 2023 Divine Group | All Rights Reserved.
                          </a>
                        </td>
                      </tr>
                    </center>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
          <tr>
            <td height="8" style="background-color: #000"></td>
          </tr>
        </tbody>
      </table>
    </center>
  </body>
</html>`;
};
module.exports = {VerificationEmailBody };
