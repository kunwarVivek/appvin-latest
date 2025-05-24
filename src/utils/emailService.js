// Email service utility for sending form submissions
import nodemailer from 'nodemailer';

export async function sendEmail(formData, formType) {
  try {
    // Log the data for debugging
    console.log(`[${formType} Form Submission]`, formData);

    // In development mode, we'll simulate sending an email
    // This ensures the form submission works without requiring actual email credentials

    // Log the form data that would be sent
    console.log('Form data that would be sent to abhya.singh@appvintech.com:');
    console.log('Subject:', `New ${formType} Form Submission`);
    console.log('Form data:', JSON.stringify(formData, null, 2));

    // Create HTML content for logging
    const htmlContent = generateEmailHtml(formData, formType);
    console.log('HTML content:', htmlContent);

    // For development, always return success
    // In production, you would use actual SMTP credentials
    console.log('---------------------------------------');
    console.log('DEVELOPMENT MODE: Email sending simulated');
    console.log('In production, this form data would be sent to: abhya.singh@appvintech.com');
    console.log('To set up actual email sending, update the emailService.js file with your SMTP credentials');
    console.log('---------------------------------------');

    return {
      success: true,
      messageId: `simulation-${Date.now()}`,
      note: 'Email sending simulated - form data logged to console'
    };

    /*
    // Production code (commented out for now)
    // Create a transporter using your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: 'your-smtp-server.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });

    // Set up email data
    const mailOptions = {
      from: '"AppVin Website" <noreply@appvintech.com>',
      to: 'abhya.singh@appvintech.com',
      subject: `New ${formType} Form Submission`,
      text: JSON.stringify(formData, null, 2),
      html: generateEmailHtml(formData, formType),
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId
    };
    */
  } catch (error) {
    console.error('Error processing form submission:', error);
    return { success: false, error: error.message };
  }
}

function generateEmailHtml(formData, formType) {
  let html = `
    <h1>New ${formType} Form Submission</h1>
    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
  `;

  for (const [key, value] of Object.entries(formData)) {
    html += `
      <tr>
        <td><strong>${key}</strong></td>
        <td>${value}</td>
      </tr>
    `;
  }

  html += `
    </table>
    <p>Submitted on: ${new Date().toLocaleString()}</p>
  `;

  return html;
}
