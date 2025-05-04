
export function createWelcomeEmailTemplate(name, profileUrl) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Dreamjob9ja</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #0E4C2D, #082114); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLZ2Gt1kbGYvmC_SvkRRjaDXZMj8Q3_52LhH7xVHH1WQjN7eng=s576-c-no" style="width: 150px; margin-bottom: 20px; border-radius: 10px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Dreamjob9ja!</h1>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #1EBE53;"><strong>Hello ${name},</strong></p>
        <p>We're thrilled to have you join our professional community! Dreamjob9ja is your platform to connect, learn, and grow in your career.</p>
        <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="font-size: 16px; margin: 0;"><strong>Here's how to get started:</strong></p>
          <ul style="padding-left: 20px;">
            <li>Complete your profile</li>
            <li>Explore job opportunities</li>
            <li>Submit applications for jobs that match your skills</li>
            <li>Join communities relevant to your interests</li>
            <li>Take online courses to enhance your skills</li>
          </ul>
        </div>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${profileUrl}" style="background-color: #1EBE53; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Complete Your Profile</a>
        </div>
        <p>If you have any questions or need assistance, our support team is always here to help.</p>
        <p>Best regards,<br>The Dreamjob9ja Team</p>
      </div>
    </body>
    </html>
  `;
}

export const createConnectionAcceptedEmailTemplate = (senderName, recipientName, profileUrl) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connection Request Accepted</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #0E4C2D, #082114); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <img src="https://lh3.googleusercontent.com/a/ACg8ocLZ2Gt1kbGYvmC_SvkRRjaDXZMj8Q3_52LhH7xVHH1WQjN7eng=s576-c-no" alt="Dreamjob9ja Logo" style="width: 150px; margin-bottom: 20px;border-radius: 10px;"/>
    <h1 style="color: white; margin: 0; font-size: 28px;">Connection Accepted!</h1>
  </div>
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <p style="font-size: 18px; color: #1EBE53;"><strong>Hello ${senderName},</strong></p>
    <p>Great news! <strong>${recipientName}</strong> has accepted your connection request on Dreamjob9ja.</p>
    <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="font-size: 16px; margin: 0;"><strong>What's next?</strong></p>
      <ul style="padding-left: 20px;">
        <li>Check out ${recipientName}'s full profile</li>
        <li>Send a message to start a conversation</li>
        <li>Explore mutual connections and interests</li>
      </ul>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${profileUrl}" style="background-color: #1EBE53; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">View ${recipientName}'s Profile</a>
    </div>
    <p>Expanding your professional network opens up new opportunities. Keep connecting!</p>
    <p>Best regards,<br>The Dreamjob9ja Team</p>
  </div>
</body>
</html>
`;



export const createCommentNotificationEmailTemplate = (recipientName, commenterName, postUrl, commentContent) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Comment on Your Post</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #0E4C2D, #082114); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <img src="https://lh3.googleusercontent.com/a/ACg8ocLZ2Gt1kbGYvmC_SvkRRjaDXZMj8Q3_52LhH7xVHH1WQjN7eng=s576-c-no" alt="UnLinked Logo" style="width: 150px; margin-bottom: 20px; border-radius: 10px;">
    <h1 style="color: white; margin: 0; font-size: 28px;">New Comment on Your Post</h1>
  </div>
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <p style="font-size: 18px; color: #1EBE53;"><strong>Hello ${recipientName},</strong></p>
    <p>${commenterName} has commented on your post:</p>
    <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="font-style: italic; margin: 0;">"${commentContent}"</p>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href=${postUrl} style="background-color: #1EBE53; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">View Comment</a>
    </div>
    <p>Stay engaged with your network by responding to comments and fostering discussions.</p>
    <p>Best regards,<br>The Dreamjob9ja Team</p>
  </div>
</body>
</html>

`;

export function createConfirmationEmailTemplate(name, confirmationLink) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirm Your Email</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #0E4C2D, #082114); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLZ2Gt1kbGYvmC_SvkRRjaDXZMj8Q3_52LhH7xVHH1WQjN7eng=s576-c-no" style="width: 150px; margin-bottom: 20px; border-radius: 10px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Confirm Your Email</h1>
      </div>
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        <p style="font-size: 18px; color: #1EBE53;"><strong>Hello ${name},</strong></p>
        <p>Thank you for signing up at Dreamjob9ja! To complete your registration, please confirm your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${confirmationLink}" style="background-color: #1EBE53; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Confirm Email</a>
        </div>
        <p>If the button above doesn't work, copy and paste this link into your browser:</p>
        <p style="background-color: #f3f6f8; padding: 10px; border-radius: 8px; word-wrap: break-word;">${confirmationLink}</p>
        <p>If you did not sign up for Dreamjob9ja, you can safely ignore this email.</p>
        <p>Best regards,<br>The Dreamjob9ja Team</p>
      </div>
    </body>
    </html>
  `;
}
