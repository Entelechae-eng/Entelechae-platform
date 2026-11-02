"use client";

import { useState } from "react";
import { Check, Copy, Send, Loader2 } from "lucide-react";

const topics = [
  "Atelier Access",
  "Research Alliance",
  "Enterprise Deployment",
  "Careers Application",
  "General Dialogue",
];

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("Atelier Access");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setStatusMessage("Transmission received. We review inquiries personally within 24 hours.");
    }, 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          CORRESPONDENCE · 2026
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Start a conversation.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          For platform access requests, research alliances, enterprise deployments, or general inquiries.
        </p>
      </div>

      {/* ─── Direct Coordinates & Form (Flat 2-Col, No Boxes) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-8 border-t border-white/[0.08] items-start">
        {/* Left Column: Direct Inboxes */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              GENERAL INBOX
            </div>
            <div className="text-lg sm:text-xl font-mono text-white">
              entelechae@gmail.com
            </div>
            <p className="text-xs text-neutral-400 font-light">
              Direct inbox monitored by the founding team.
            </p>
            <button
              type="button"
              onClick={() => copyToClipboard("entelechae@gmail.com")}
              className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase underline underline-offset-4"
            >
              {copiedEmail === "entelechae@gmail.com" ? (
                <>
                  <Check size={12} className="text-white" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/[0.06]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              FOUNDING STEWARDS
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-medium">Sahurain</div>
                  <a href="mailto:sahurain15@gmail.com" className="font-mono text-neutral-500 hover:text-white">
                    sahurain15@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("sahurain15@gmail.com")}
                  className="text-neutral-500 hover:text-white p-1"
                  aria-label="Copy Sahurain email"
                >
                  {copiedEmail === "sahurain15@gmail.com" ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <div>
                  <div className="text-white font-medium">Tantresh Sahu</div>
                  <a href="mailto:tantreshsahu@gmail.com" className="font-mono text-neutral-500 hover:text-white">
                    tantreshsahu@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("tantreshsahu@gmail.com")}
                  className="text-neutral-500 hover:text-white p-1"
                  aria-label="Copy Tantresh Sahu email"
                >
                  {copiedEmail === "tantreshsahu@gmail.com" ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-6 border-t border-white/[0.06] text-xs text-neutral-500 font-mono">
            <div className="uppercase text-neutral-400">RESPONSE PROTOCOL</div>
            <p className="font-light leading-relaxed">
              We review every inquiry within 24 hours. For urgent architectural matters, mark priority in your subject line.
            </p>
          </div>
        </div>

        {/* Right Column: Flat Minimal Form (No Outer Container Card) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            TRANSMIT INQUIRY
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1 text-[11px] font-mono transition-colors rounded-[2px] ${
                  selectedTopic === topic
                    ? "bg-white text-black font-medium"
                    : "border border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Minimal Inputs */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Elena Rostova"
                  className="w-full bg-black border border-white/10 rounded-[2px] py-2.5 px-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@domain.com"
                  className="w-full bg-black border border-white/10 rounded-[2px] py-2.5 px-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Organization / Studio (Optional)
              </label>
              <input
                type="text"
                placeholder="Kinetics Labs or Independent"
                className="w-full bg-black border border-white/10 rounded-[2px] py-2.5 px-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Message &amp; Brief
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your inquiry, project scope, or research thesis..."
                className="w-full bg-black border border-white/10 rounded-[2px] py-2.5 px-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className="w-full py-2.5 rounded-[2px] bg-white text-black font-medium text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
                    <span>Send Transmission</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </div>

            {statusMessage && (
              <p className="text-xs font-mono text-neutral-300 text-center pt-2">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
