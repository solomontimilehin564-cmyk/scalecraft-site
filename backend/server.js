require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',');

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '10kb' }));

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Health check
app.get('/', (req, res) => res.json({ status: 'ok', service: 'Scale Craft API' }));

// Contact form
app.post('/api/inquiry', async (req, res) => {
  const { name, email, service, budget, message, website } = req.body || {};

  // Hidden "website" field: real visitors leave it empty, bots fill it in
  if (website) return res.json({ ok: true });

  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide your name and a valid email.' });
  }

  console.log('New inquiry:', { name, email, service, budget });

  if (!resend) {
    console.log('RESEND_API_KEY not set, so no email was sent.');
    return res.json({ ok: true, emailed: false });
  }

  try {
    await resend.emails.send({
      from: 'Scale Craft <onboarding@resend.dev>',
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New inquiry: ${service || 'General'}`,
      html: `
        <h2>New consultation request</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Service:</b> ${esc(service)}</p>
        <p><b>Budget:</b> ${esc(budget)}</p>
        <p><b>Message:</b><br>${esc(message).replace(/\n/g, '<br>')}</p>`
    });
    res.json({ ok: true, emailed: true });
  } catch (err) {
    console.error('Email failed:', err);
    res.status(500).json({ error: 'Could not send your message. Please try again.' });
  }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));