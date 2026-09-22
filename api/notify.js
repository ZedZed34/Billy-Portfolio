export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // We read these from Vercel's Environment Variables
  const LINE_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const LINE_USER_ID = process.env.LINE_USER_ID;

  if (!LINE_ACCESS_TOKEN || !LINE_USER_ID) {
    return res.status(500).json({ message: 'LINE credentials missing in env' });
  }

  const lineMessage = {
    to: LINE_USER_ID,
    messages: [
      {
        type: 'text',
        text: `🚨 New Portfolio Message!\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      },
    ],
  };

  try {
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LINE_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(lineMessage),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to send LINE message:', errorText);
      return res.status(500).json({ message: 'Failed to send LINE message' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending LINE alert:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
