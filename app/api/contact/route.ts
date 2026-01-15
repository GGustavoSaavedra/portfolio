import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nombre demasiado corto")
    .max(60, "Nombre demasiado largo")
    .regex(/^[\p{L} '\-]+$/u, "Nombre inválido"),
  email: z.string().trim().email("Email inválido"),
  company: z.string().optional().default(""), // honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body?.company && String(body.company).trim().length > 0) {
      return Response.json({ success: true });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        {
          error: "Datos inválidos",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email } = parsed.data;

    await resend.emails.send({
      from: "Contacto Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: "Nuevo contacto desde el portfolio",
      text: `Nombre: ${name}\nEmail: ${email}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
