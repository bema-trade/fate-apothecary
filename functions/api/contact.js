const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store'
  }
});

const cleanLine = (value, max) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const cleanText = (value, max) => String(value ?? '').trim().slice(0, max);
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.CF_ACCOUNT_ID || !env.CF_EMAIL_TOKEN || !env.CONTACT_TO) {
    console.error('Contact form email environment variables are missing.');
    return json({ error: 'The contact form is not fully connected yet. Please email hello@fateapothecary.com instead.' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'That message could not be read. Please try again.' }, 400);
  }

  // Quietly accept obvious bot submissions without sending anything.
  if (cleanLine(body.website, 200)) return json({ ok: true });

  const name = cleanLine(body.name, 100);
  const email = cleanLine(body.email, 254).toLowerCase();
  const subject = cleanLine(body.subject, 160);
  const message = cleanText(body.message, 5000);

  if (!name || !email || !subject || !message) {
    return json({ error: 'Please fill out all of the fields.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const text = [
    'New message from the Fate Apothecary website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message
  ].join('\n');

  const html = `
    <h2>New message from the Fate Apothecary website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br>
    <strong>Email:</strong> ${escapeHtml(email)}<br>
    <strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(env.CF_ACCOUNT_ID)}/email/sending/send`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${env.CF_EMAIL_TOKEN}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from: { email: 'hello@fateapothecary.com', name: 'Fate Apothecary Website' },
      to: env.CONTACT_TO,
      reply_to: email,
      subject: `Website contact: ${subject}`,
      text,
      html
    })
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success === false) {
    console.error('Cloudflare Email Sending error:', result);
    return json({ error: 'We could not send your message. Please try again or email hello@fateapothecary.com.' }, 502);
  }

  return json({ ok: true });
}

export function onRequest() {
  return json({ error: 'Method not allowed.' }, 405);
}
