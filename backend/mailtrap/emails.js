import { transporter } from "./gmail.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	 try {
    const info = await transporter.sendMail({
      from: `"Chatify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    });

    console.log("Verification email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
	 try {
    const html = WELCOME_EMAIL_TEMPLATE
     .replace(/{name}/g, name)
     .replace(/{company}/g, "Chatify-App");

    await transporter.sendMail({
      from: `"Chatify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome 🎉",
      html: html,
    });

    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error("Error sending welcome email", error);
    throw new Error("Error sending welcome email");
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	try {
    const info = await transporter.sendMail({
      from: `"Chatify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Password reset email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
 try {
    const info = await transporter.sendMail({
      from: `"Chatify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Reset success email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending reset success email:", error);
    throw new Error(`Error sending reset success email: ${error}`);
  }
};


