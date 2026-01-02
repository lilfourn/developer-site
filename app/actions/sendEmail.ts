"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
  const { name, email, message } = data;

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Invalid email format" };
  }

  try {
    // Create SMTP transporter for Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "luke.fournier2023@gmail.com",
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "Failed to send email. Please try again." };
  }
}
