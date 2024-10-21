import "dotenv/config";

import {NextRequest, NextResponse} from "next/server";



const DISCORD_WEBHOOK_URL_WEBSITE = process.env.DISCORD_WEBHOOK_URL_WEBSITE;

if (!DISCORD_WEBHOOK_URL_WEBSITE) {
  throw new Error("Please set DISCORD_WEBHOOK_URL_WEBSITE in the .env file");
}

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message, name, phone } = await req.json();

    const discordMessage = {
      embeds: [
        {
          title: 'New Contact Form Submission',
          color: 7506394,
          fields: [
            { name: 'Name', value: name, inline: true },
            { name: 'Phone', value: phone, inline: true },
            { name: 'Email', value: email, inline: true },
            { name: 'Subject', value: subject, inline: false },
            { name: 'Message', value: message, inline: false }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    const response = await fetch(DISCORD_WEBHOOK_URL_WEBSITE as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      throw new Error(`Error posting to Discord: ${response.statusText}`);
    }

    return NextResponse.json({ message: 'Message sent to Discord' }, { status: 200 });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return NextResponse.json({ message: 'Error sending message to Discord' }, { status: 500 });
  }
}
