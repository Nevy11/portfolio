import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      throw new Error("Missing required fields")
    }

    const GMAIL_APP_PASSWORD = Deno.env.get('GMAIL_APP_PASSWORD')
    if (!GMAIL_APP_PASSWORD) {
      throw new Error("Missing GMAIL_APP_PASSWORD. Please set it in your Supabase project dashboard.")
    }

    const client = new SmtpClient();

    // Connect to Gmail's SMTP server
    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: "smongare2004@gmail.com",
      password: GMAIL_APP_PASSWORD,
    });

    // Send the email
    await client.send({
      from: "smongare2004@gmail.com", 
      to: "smongare2004@gmail.com",
      subject: `New Contact Request from ${name}`,
      content: `
New Message Received!

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully via Gmail SMTP" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
    )
  }
})
