"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-[#121319] border border-neutral-800/80 rounded-[2rem] p-8 sm:p-10 text-white shadow-2xl shadow-black/30 flex flex-col justify-between min-h-[560px] sm:min-h-[600px]">
      <div>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800/80 text-xs font-mono">
          <span className="text-neutral-500 uppercase tracking-wider">NEW MESSAGE</span>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>COMPOSE</span>
          </div>
        </div>

        {submitted ? (
          <div className="py-24 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
              Thanks for reaching out, {name}. I will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-neutral-400 font-medium">NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase text-neutral-400 font-medium">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase text-neutral-400 font-medium">MESSAGE</label>
                <span className="text-xs font-mono text-neutral-500">{message.length} / 500</span>
              </div>
              <textarea
                name="message"
                required
                maxLength={500}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/80 transition-colors resize-none leading-relaxed"
              />
            </div>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-70 disabled:cursor-not-allowed text-neutral-950 font-bold text-sm transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message →"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
