import { sendEmail } from '../../utils/emailService';

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Send email
    const result = await sendEmail(formData, 'Contact');
    
    if (result.success) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Contact form submitted successfully',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } else {
      throw new Error(result.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to process contact form',
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
