import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html, attachments }) => {
  // sender Info
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.SENDERMAIL,
      pass: process.env.SENDERPASS,
    },
  });
  // reciever Info
  const emailInfo = await transporter.sendMail({
    from: ` "TeamX" <${process.env.SENDERMAIL}>`, // sender address
    to,
    subject,
    html,
    attachments,
  });

  return emailInfo.accepted.lenght < 1 ? false : true;
};
