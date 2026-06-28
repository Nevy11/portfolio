import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import nodemailer from "npm:nodemailer@6.9.13"

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
      throw new Error("Missing GMAIL_APP_PASSWORD in environment")
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'smongare2004@gmail.com',
        pass: GMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
      from: 'smongare2004@gmail.com',
      to: 'smongare2004@gmail.com',
      subject: `New Contact Request from ${name}`,
      text: `New Message Received!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully via Gmail" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
    )
  }
})
