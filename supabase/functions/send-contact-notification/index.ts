import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  service: string;
  message: string;
  notificationType: "whatsapp" | "email" | "sms";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message, notificationType }: ContactRequest = await req.json();

    console.log("Received contact request:", { name, email, service, notificationType });

    // Create notification message
    const notificationMessage = `New Contact Request!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;

    if (notificationType === "whatsapp") {
      // Redirect to WhatsApp with pre-filled message
      const whatsappMessage = encodeURIComponent(
        `Hi! I'm ${name}.\nEmail: ${email}\nService: ${service}\n\n${message}`
      );
      const whatsappUrl = `https://wa.me/919423543739?text=${whatsappMessage}`;
      
      console.log("WhatsApp redirect URL generated:", whatsappUrl);
      
      return new Response(JSON.stringify({ 
        success: true, 
        redirectUrl: whatsappUrl,
        message: "WhatsApp link generated" 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (notificationType === "email") {
      // For email, we'd need Resend API key - for now return mailto link
      const mailtoUrl = `mailto:vpphotography3739@gmail.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`)}`;
      
      console.log("Email mailto URL generated");
      
      return new Response(JSON.stringify({ 
        success: true, 
        redirectUrl: mailtoUrl,
        message: "Email link generated" 
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Default response for other types
    return new Response(JSON.stringify({ 
      success: true, 
      message: "Contact request received" 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: unknown) {
    console.error("Error in send-contact-notification function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
