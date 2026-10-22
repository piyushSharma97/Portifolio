"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

type FormContent = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  sentLabel: string;
  note: string;
  emailSubjectPrefix: string;
  senderPrefix: string;
};

export function ContactForm({ form, email }: { form: FormContent; email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`${form.emailSubjectPrefix} ${name}`);
    const body = encodeURIComponent(`${form.senderPrefix} ${name} (${senderEmail})\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form glass-card" onSubmit={handleSubmit}>
      <label>
        <span>{form.nameLabel}</span>
        <input autoComplete="name" name="name" placeholder={form.namePlaceholder} required />
      </label>
      <label>
        <span>{form.emailLabel}</span>
        <input autoComplete="email" name="email" placeholder={form.emailPlaceholder} required type="email" />
      </label>
      <label>
        <span>{form.messageLabel}</span>
        <textarea name="message" placeholder={form.messagePlaceholder} required rows={4} />
      </label>
      <button className="button button-primary form-submit" type="submit">
        {sent ? form.sentLabel : form.submitLabel} {sent ? <ArrowUpRight size={16} /> : <Send size={15} />}
      </button>
      <p className="form-note">{form.note}</p>
    </form>
  );
}
