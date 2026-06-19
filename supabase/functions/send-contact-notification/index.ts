import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const ALLOWED_ORIGINS = [
  "https://vpphotography.lovable.app",
  "https://id-preview--e76779f2-178a-4051-923c-30739ae92672.lovable.app",
  "http://localhost:5173",
  "http://localhost:8080",
];

function buildCorsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

interface ContactRequest {
  name: string;
  email: string;
  service: string;
  message: string;
  notificationType: "whatsapp" | "email" | "sms";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function validate(body: Partial<ContactRequest>): { ok: true; data: ContactRequest } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid payload" };
  const { name, email, service, message, notificationType } = body;
  if (!isString(name) || name.trim().length < 1 || name.length > 100) return { ok: false, error: "Invalid name" };
  if (!isString(email) || email.length > 200 || !EMAIL_RE.test(email)) return { ok: false, error: "Invalid email" };
  if (!isString(service) || service.length > 100) return { ok: false, error: "Invalid service" };
  if (!isString(message) || message.trim().length < 1 || message.length > 2000) return { ok: false, error: "Invalid message" };
  if (notificationType !== "whatsapp" && notificationType !== "email" && notificationType !== "sms") {
    return { ok: false, error: "Invalid notificationType" };
  }
  return {
    ok: true,
    data: {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 200),
      service: service.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
      notificationType,
    },
  };
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = buildCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    let raw: unknown;
    try {
      raw = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const result = validate(raw as Partial<ContactRequest>);
    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { name, email, service, message, notificationType } = result.data;

    if (notificationType === "whatsapp") {
      const whatsappMessage = encodeURIComponent(
        `Hi! I'm ${name}.\nEmail: ${email}\nService: ${service}\n\n${message}`
      );
      const whatsappUrl = `https://wa.me/919423543739?text=${whatsappMessage}`;
      return new Response(JSON.stringify({ success: true, redirectUrl: whatsappUrl }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (notificationType === "email") {
      const mailtoUrl = `mailto:vpphotography3739@gmail.com?subject=${encodeURIComponent(`New Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`)}`;
      return new Response(JSON.stringify({ success: true, redirectUrl: mailtoUrl }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("send-contact-notification error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
