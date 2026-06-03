import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "alisonantoniauh@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #0a0a0a; margin-bottom: 8px;">Nuevo mensaje desde tu portafolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />
          <p style="margin-bottom: 8px;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin-bottom: 8px;"><strong>Correo:</strong> ${email}</p>
          <p style="margin-bottom: 8px;"><strong>Mensaje:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px;">Enviado desde alisonurrea.vercel.app</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
