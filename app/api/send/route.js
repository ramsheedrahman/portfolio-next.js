import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req,res) {
  const { email, subject, message } = req.json();
  try {
    const data = await resend.emails.send({
      from:'onboarding@resend.dev',
      to: 'ramsheedkk06@gmail.com',
      subject: 'Hello world',
      react: (
        <>
        <h1>{subject}</h1>
        <p>from:{email}</p>
        <p>{message}</p>
h        </>
      )
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
