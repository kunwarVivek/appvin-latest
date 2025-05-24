import { sendEmail } from '../../utils/emailService';

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Send email
    const result = await sendEmail(formData, 'Newsletter');
    
    if (result.success) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Newsletter subscription submitted successfully',
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
    console.error('Error processing newsletter subscription:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to process newsletter subscription',
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
