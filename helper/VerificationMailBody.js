const VerificationEmailBody = (OTPCode) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style type="text/css">
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
        * {
          padding: 0;
          margin: 0;
        }
        .main {
          max-width: 767px;
        }
        img {
          width: 100%;
          height: 100%;
        }
        table,
        tbody,
        tr,
        td {
          padding: 0;
          margin: 0;
        }
       
        .button {
          padding: 5px 40px;
          border-radius: 50px;
          height: 55px;
         
          background-color: #0c0a0a;
         
          font-family: "Montserrat", sans-serif;
          font-size: 25px;
          letter-spacing: 8px;
          color: #f5f3f4;
          font-weight: 500;
          border: 0;
          outline: 0;
          text-align: center;
        }
       
      </style>
    </head>
  
    <body>
      <center class="wrapper" style="background-color: #fff">
        <table
          bgcolor="#fff"
          class="main"
          cellpadding="0"
          cellspacing="0"
          height="100%"
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table width="100%">
                  <tbody>
                    <img src="https://i.ibb.co/s249vjv/image-one.jpg" alt="the main image of the mail" />
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" style="padding: 60px 0;">
                  <tbody>
                    <center>
                      <tr>
                        <td>
                          <center>
                            <button class="button">
                              ${OTPCode}
                            </button>
                            <p style="display: none;">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo ipsa natus ducimus veniam dicta enim beatae qui error a quasi saepe vel dignissimos, sint distinctio provident asperiores sed id!
                            </p>
                          </center>
                         
                        </td>
                      </tr>
                    </center>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%">
                  <tbody>
                    <img src="https://i.ibb.co/s3qSqGX/footer.jpg" alt="">
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </body>
  </html>`;
};
module.exports = { VerificationEmailBody };
