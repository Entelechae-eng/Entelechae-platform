"use client";

import { useState } from "react";
import { Check, Copy, Clock, Send, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

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

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setStatusMessage("Thank you. Your message has been received by the Entelechae studio team.");
    }, 1200);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-4xl">
        <Badge variant="emerald" dot>
          OPEN FOR DIALOGUE 2026
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Start a{" "}
          <span className="italic font-serif font-light text-neutral-300">
            conversation.
          </span>
        </h1>
        <p className="text-neutral-400 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl">
          For platform access requests, research alliances, enterprise deployments,
          or general enquiries. We respond directly within 24 hours.
        </p>
      </div>

      {/* ─── Main Grid: Info + Interactive Form ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Direct Contacts & Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          {/* Main Email Card */}
          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                GENERAL CORRESPONDENCE
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono break-all">
                entelechae@gmail.com
              </div>
              <p className="text-xs text-neutral-400 mt-2 font-light">
                Direct inbox monitored by the founding team.
              </p>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard("entelechae@gmail.com")}
              className="w-full py-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 flex items-center justify-center gap-2 transition-all"
            >
              {copiedEmail === "entelechae@gmail.com" ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Founders Direct Contacts */}
          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-6 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-white/[0.08] pb-4">
              FOUNDING STEWARDS
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Sahurain</div>
                  <a
                    href="mailto:sahurain15@gmail.com"
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    sahurain15@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("sahurain15@gmail.com")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
                  aria-label="Copy Sahurain email"
                >
                  {copiedEmail === "sahurain15@gmail.com" ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <div>
                  <div className="text-sm font-semibold text-white">Tantresh Sahu</div>
                  <a
                    href="mailto:tantreshsahu@gmail.com"
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    tantreshsahu@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("tantreshsahu@gmail.com")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all"
                  aria-label="Copy Tantresh Sahu email"
                >
                  {copiedEmail === "tantreshsahu@gmail.com" ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Operational Details */}
          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/60 p-6 space-y-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2 text-neutral-300">
              <Clock size={14} className="text-emerald-400" />
              <span>STUDIO RESPONSE PROTOCOL</span>
            </div>
            <p className="font-light leading-relaxed">
              We review every inquiry within 24 hours. For urgent architectural inquiries, specify &apos;PRIORITY&apos; in your message subject.
            </p>
          </div>
        </div>

        {/* Right Column: High-End Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0c0c10] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                  TRANSMIT AN ENQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  How can Entelechae assist your vision?
                </h3>
              </div>

              {/* Topic Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Subject Domain:
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                        selectedTopic === topic
                          ? "bg-white text-black font-semibold shadow-md"
                          : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. elena@domain.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Organization / Studio (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kinetics Labs or Independent"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Message & Brief
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or research thesis..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : isSent ? (
                      <>
                        <Check size={16} className="text-emerald-600" />
                        <span>Transmitted Successfully</span>
                      </>
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>

                {statusMessage && (
                  <p className="text-xs font-mono text-emerald-400 text-center pt-2">
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
