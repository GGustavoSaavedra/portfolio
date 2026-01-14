import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company } = body;

    if (company && String(company).trim().length > 0) {
      return Response.json({ success: true });
    }

    // Validación mínima
    if (!name || !email) {
      return Response.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contacto Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: "Nuevo contacto desde el portfolio",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
