// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fronEmail = process.env.From_EMAIL;

export async function POST() {
  const { body } = await req.jason();
  const { email, subject, message } = body;
  console.log(body);
  try {
    const data = await resend.emails.send({
      from: "fromEmail",
      to: [""],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
