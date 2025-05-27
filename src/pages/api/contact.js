import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mail from 'nodemailer';
import cors from 'cors';

// require("dotenv").config();
// const express = require('express');

// const mail = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
const transporter = mail.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true, // Enable debugging
  logger: true, // Log SMTP interactions
});

// service: 'hotmail', // or 'office365'
// auth: {
//   user: 'your-email@microsoft.com', // your email
//   pass: 'your-app-password'         // app password
// },
// tls: {
//   rejectUnauthorized: false
// }
// });


app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, budget, contact_method, preferred_date, preferred_time } = req.body;
  if (!name || !email || !message || !budget || !contact_method || !preferred_date || !preferred_time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'AppVin- Contact Enquiry Form',
      // text: `Name : ${name}\nEmail: ${email}\nMessage: ${message}\nBudget: ${budget}\nContact Method: ${contact_method}\nPreferred Time: ${preferred_time}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}\n` +
        `Budget: ${budget}\n` +
        `Preferred Contact Method: ${contact_method}\n` +
        `Preferred Date: ${preferred_date}\n` +
        `Preferred Time: ${preferred_time}`,
      // replyTo: email,
    });
    res.json({ success: true });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,  // <-- user's email from the form
      subject: 'Thanks for contacting us!',
      text: `Hi ${name},\n\nThank you for reaching out! We have received your query:\n\n"${message}"\n\nWe will get back to you soon.\n\nRegards,\nTeam`,
    });
  }
  catch (err) {
    console.log('contacts', err);
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    await transporter.sendMail({
      from: 'sales@appvintech.com',
      to: 'sales@appvintech.com',
      subject: 'New Newsletter Form Submission',
      // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nBudget: ${budget}\nContact Method: ${contact_method}\nPreferred Time: ${preferred_time}`,
      text:
        `Email: ${email}\n`,
      replyTo: email,
    });
    await transporter.sendMail({
      from: 'sales@appvintech.com',
      to: email,
      subject: 'Thanks for Subscribing!',
      text: `Hi there,\n\nThank you for subscribing to our newsletter! We'll keep you updated.\n\nBest,\nThe Team`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email failed", error);
    res.status(500).json({ success: false });
  }
});


app.listen(PORT, () => {
  console.log(`Contact form backend running on http://localhost:${PORT}`);
});
