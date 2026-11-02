"use client";

import { useState } from "react";
import { Check, Copy, Send, Loader2 } from "lucide-react";

const domains = [
  "Atelier Access",
  "Research Alliance",
  "Enterprise Escrow",
  "General Dialogue",
];

export default function ContactPage() {
  const [selectedDomain, setSelectedDomain] = useState("Atelier Access");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setStatusMessage("Transmission received. Direct response within 24 hours.");
    }, 900);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-3 max-w-2xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          INITIATE · DIRECT TRANSMISSION
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Direct dialogue.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          Request platform cohort access, propose computational research alliances, or initiate confidential discussions.
        </p>
      </div>

      {/* ─── Fast Contact Strips (Instant Copy, No Friction) ─── */}
      <div className="pt-6 border-t border-white/[0.08] space-y-4">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          DIRECT INBOXES
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <button
            type="button"
            onClick={() => copyToClipboard("entelechae@gmail.com", "general")}
            className="flex items-center justify-between p-3 border border-white/[0.08] hover:border-white/25 transition-colors text-left group"
          >
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block">Studio General</span>
              <span className="text-neutral-300 group-hover:text-white transition-colors">entelechae@gmail.com</span>
            </div>
            <span className="text-neutral-500 group-hover:text-white ml-2 shrink-0">
              {copiedKey === "general" ? <Check size={13} className="text-white" /> : <Copy size={13} />}
            </span>
          </button>

          <button
            type="button"
            onClick={() => copyToClipboard("sahurain15@gmail.com", "sahurain")}
            className="flex items-center justify-between p-3 border border-white/[0.08] hover:border-white/25 transition-colors text-left group"
          >
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block">Sahurain (Architect)</span>
              <span className="text-neutral-300 group-hover:text-white transition-colors">sahurain15@gmail.com</span>
            </div>
            <span className="text-neutral-500 group-hover:text-white ml-2 shrink-0">
              {copiedKey === "sahurain" ? <Check size={13} className="text-white" /> : <Copy size={13} />}
            </span>
          </button>

          <button
            type="button"
            onClick={() => copyToClipboard("tantreshsahu@gmail.com", "tantresh")}
            className="flex items-center justify-between p-3 border border-white/[0.08] hover:border-white/25 transition-colors text-left group"
          >
            <div>
              <span className="text-[10px] text-neutral-500 uppercase block">Tantresh Sahu (Tech)</span>
              <span className="text-neutral-300 group-hover:text-white transition-colors">tantreshsahu@gmail.com</span>
            </div>
            <span className="text-neutral-500 group-hover:text-white ml-2 shrink-0">
              {copiedKey === "tantresh" ? <Check size={13} className="text-white" /> : <Copy size={13} />}
            </span>
          </button>
        </div>
      </div>

      {/* ─── Minimal Transmission Interface (Cursor / Meta Style) ─── */}
      <div className="pt-8 border-t border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            TRANSMISSION BRIEF
          </div>
          <span className="text-[11px] font-mono text-neutral-500">ENCRYPTION: LOCAL TERMINAL</span>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {domains.map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1 text-xs font-mono transition-colors rounded-full border ${
                selectedDomain === domain
                  ? "bg-white text-black border-white font-medium"
                  : "border-white/10 text-neutral-400 hover:text-white hover:border-white/30"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Frictionless Minimal Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your name / affiliation"
              className="w-full bg-black border border-white/[0.1] rounded-none py-3 px-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full bg-black border border-white/[0.1] rounded-none py-3 px-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors font-mono"
            />
          </div>

          <textarea
            required
            rows={5}
            placeholder={`Message or scope regarding ${selectedDomain.toLowerCase()}...`}
            className="w-full bg-black border border-white/[0.1] rounded-none py-3 px-3.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors resize-none font-mono"
          />

          <div className="pt-2 flex items-center justify-between">
            <div className="text-[11px] font-mono text-neutral-500">
              {statusMessage || "Reviewed personally within 24 hours."}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className="px-6 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : isSent ? (
                <>
                  <Check size={13} />
                  <span>Transmitted</span>
                </>
              ) : (
                <>
                  <span>Initiate</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
