import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // In a real application, you'd add the email to your database
    // or mailing list service (e.g., Mailchimp, ConvertKit).
    console.log(`New subscription from: ${email}`);

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
