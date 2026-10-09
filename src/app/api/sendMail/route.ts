import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

interface MailOptions {
  from: string;
  to: string | undefined;
  replyTo: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path: string;
    cid: string;
  }>;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // ==============================
    // 2. VALIDATION
    // ==============================
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all fields." },
        { status: 400 }
      );
    }

    const logoPath = path.join(process.cwd(), "public", "rtv.png");
    const logoExists = fs.existsSync(logoPath);

    if (!logoExists) {
      console.warn("⚠️ Warning: public/rtv.png file not found!");
    }

    // ==============================
    // 4. SMTP CONFIGURATION
    // ==============================
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true,
      logger: true,
    });

    // ==============================
    // 5. COMPANY DETAILS
    // ==============================
    const companyName = "RTV News Network";
    const companyEmail = "tech@rtv.ai";
    const companyAddress =
      "8-2, 8-2-293/82/839, Rd Number 44, CBI Colony, Jubilee Hills, Hyderabad, Telangana – 500033";

    // ==============================
    // 6. MAIL OPTIONS
    // ==============================
    const mailOptions: MailOptions = {
      from: `"RTV News Network" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0;padding:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f6fb;padding:30px 15px;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" border="0" style="max-width:650px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

<!-- HEADER -->
<tr>
<td style="background:#172554;padding:30px 25px;text-align:center;">
  ${logoExists ? `<img src="cid:rtv-logo" alt="RTV News Network" style="width:200px;max-width:80%;height:auto;display:block;margin:0 auto 18px;" />` : ""}
  <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:32px;">New Contact Message</h1>
  <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">RTV News Network - Contact Form</p>
</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:30px 25px;">

<p style="margin:0 0 22px;font-size:15px;line-height:24px;color:#4b5563;">
A new message has been submitted through the RTV News Network website contact form.
</p>

<!-- SENDER DETAILS -->
<div style="border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
  <div style="background:#f8fafc;padding:15px 18px;border-bottom:1px solid #e5e7eb;">
    <strong style="font-size:16px;color:#172554;">Sender Details</strong>
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;width:40%;color:#64748b;">Name</td>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;font-weight:600;">${name}</td>
    </tr>
    <tr>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;color:#64748b;">Email</td>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;">
        <a href="mailto:${email}" style="color:#1d4ed8;text-decoration:none;">${email}</a>
      </td>
    </tr>
    <tr>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;color:#64748b;">Subject</td>
      <td style="padding:13px 18px;border-bottom:1px solid #f1f5f9;font-weight:600;">${subject}</td>
    </tr>
    <tr>
      <td style="padding:13px 18px;color:#64748b;vertical-align:top;">Message</td>
      <td style="padding:13px 18px;line-height:22px;">${message}</td>
    </tr>
  </table>
</div>

<!-- COMPANY INFORMATION -->
<div style="margin-top:25px;background:#eff6ff;border:1px solid #dbeafe;border-radius:14px;padding:20px;">
  <h3 style="margin:0 0 15px;color:#172554;font-size:17px;">Company Information</h3>
  <p style="margin:7px 0;font-size:14px;"><strong>Company:</strong> ${companyName}</p>
  <p style="margin:7px 0;font-size:14px;"><strong>Email:</strong>
    <a href="mailto:${companyEmail}" style="color:#1d4ed8;text-decoration:none;">${companyEmail}</a>
  </p>
  <p style="margin:7px 0;font-size:14px;line-height:21px;"><strong>Office:</strong><br />${companyAddress}</p>
</div>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">
  <p style="margin:0;font-size:13px;color:#64748b;">This email was generated automatically from the RTV News Network website.</p>
  <p style="margin:7px 0 0;font-size:13px;color:#94a3b8;">© ${new Date().getFullYear()} ${companyName}</p>
</td>
</tr>

</table>
</td>
</tr>
</table>

</body>
</html>
`,
    };

    if (logoExists) {
      mailOptions.attachments = [
        {
          filename: "rtv.png",
          path: logoPath,
          cid: "rtv-logo",
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    console.log(`✅ Contact email sent to ${process.env.EMAIL_RECEIVER}`);

    // ==============================
    // 9. SUCCESS RESPONSE
    // ==============================
    return NextResponse.json({
      success: true,
      message: "Message submitted successfully. We will get back to you soon.",
    });

  } catch (error: unknown) {
    console.error("❌ Email send error:", error);

    const err = error as { message?: string; code?: string; command?: string };

    return NextResponse.json(
      {
        success: false,
        message: `Error: ${err.message || "Failed to send email"}`,
        code: err.code || "UNKNOWN",
        command: err.command || "",
      },
      { status: 500 }
    );
  }
}
