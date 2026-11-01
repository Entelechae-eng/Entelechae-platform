"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    const website = new FormData(form).get("website");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const result = await response.json();
      setStatus(result.message || result.error || "Subscribed successfully.");
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      }
    } catch {
      setStatus("Subscription could not be completed. Please try again.");
      setIsSuccess(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative flex items-center">
        <input
          id="footer-email"
          name="email"
          type="email"
          placeholder="Enter your email address..."
          required
          className="w-full bg-white/[0.04] border border-white/10 rounded-full py-3.5 pl-5 pr-32 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all"
        />
        {/* Honeypot anti-spam */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={submitting}
          className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all flex items-center gap-1.5 disabled:opacity-50"
        >
          {submitting ? (
            <Loader2 size={13} className="animate-spin" />
          ) : isSuccess ? (
            <>
              <span>Joined</span>
              <Check size={13} className="text-emerald-600" />
            </>
          ) : (
            <>
              <span>Join</span>
              <ArrowRight size={13} />
            </>
          )}
        </button>
      </div>
      {status && (
        <p
          className={`mt-2.5 text-xs font-mono ${
            isSuccess ? "text-emerald-400" : "text-rose-400"
          }`}
          role="status"
        >
          {status}
        </p>
      )}
    </form>
  );
}
