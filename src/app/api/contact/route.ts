import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();
    const { fullName, organization, email, phone, service, message } = data;

    // Basic Validation
    if (!fullName || !organization || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // SMTP Credentials Checks
    const smtpHost = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL || "codeshorts007@gmail.com";
    const adminEmail = process.env.ADMIN_EMAIL || fromEmail;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP user or password not configured in environment variables. Falling back to log-only mode.");
      console.log("Enquiry details:", data);
      return NextResponse.json(
        { message: "Enquiry received successfully (Log mode)." },
        { status: 200 }
      );
    }

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailSubject = `[TRUDICON] New Verification Request - ${fullName} (${organization})`;

    const mailText = `
New Confidential Enquiry Received

Full Name: ${fullName}
Organization: ${organization}
Email Address: ${email}
Phone Number: ${phone}
Service Requirement: ${service}

Message:
${message}

---
Trudicon Consultancy Services Secure Relayer.
`;

    const mailHtml = `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px;">
  <h2 style="color: #6D1A77; margin-top: 0; border-bottom: 2px solid #F3F4F6; padding-bottom: 10px;">New Confidential Enquiry</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #4B5563; width: 180px;">Full Name:</td>
      <td style="padding: 8px 0; color: #111827;">${fullName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Organization:</td>
      <td style="padding: 8px 0; color: #111827;">${organization}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Email Address:</td>
      <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #6D1A77;">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Phone Number:</td>
      <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #6D1A77;">${phone}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Service Required:</td>
      <td style="padding: 8px 0; color: #111827; font-weight: 600;">${service}</td>
    </tr>
  </table>
  <div style="margin-top: 20px; border-top: 1px solid #F3F4F6; pt-15px;">
    <h4 style="color: #4B5563; margin-bottom: 8px;">Message details:</h4>
    <p style="color: #111827; line-height: 1.6; background-color: #F9FAFB; padding: 15px; border-radius: 6px; white-space: pre-wrap; margin: 0;">${message}</p>
  </div>
  <p style="font-size: 11px; color: #9CA3AF; margin-top: 30px; text-align: center; border-top: 1px dashed #E5E7EB; padding-top: 15px;">
    This is an automated transmission from the Trudicon Consultancy Services Secure Contact Relayer.<br />
    Confidentiality Standards Aligned. Only cleared administrators have access.
  </p>
</div>
`;

    // Send Mail exclusively to ADMIN_EMAIL
    await transporter.sendMail({
      from: `"${fullName} via Trudicon" <${fromEmail}>`,
      to: adminEmail,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
      replyTo: email, // This allows the admin to hit reply and send email directly to user
    });

    return NextResponse.json(
      { message: "Enquiry successfully relayed to admin." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email via Nodemailer:", error);
    return NextResponse.json(
      { error: "Failed to process and send enquiry." },
      { status: 500 }
    );
  }
}
