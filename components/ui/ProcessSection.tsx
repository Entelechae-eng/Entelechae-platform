"use client";

interface Step {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    step: "01",
    title: "Thesis Formulation",
    subtitle: "Discovery & Gap Analysis",
    description:
      "We identify foundational systemic voids in software and computing long before they become mainstream consensus.",
    deliverables: ["Market & Technical Gap Analysis", "Mathematical & Systems Thesis", "Architecture Blueprint"],
  },
  {
    step: "02",
    title: "Sovereign Architecture",
    subtitle: "Rigor from First Principles",
    description:
      "We build low-level prototypes, design the formal system constraints, and establish our zero-dependency baseline.",
    deliverables: ["Protocol Specifications", "Zero-Latency UI Design", "Cryptographic Baseline"],
  },
  {
    step: "03",
    title: "Native Engineering",
    subtitle: "Precision Implementation",
    description:
      "We engineer the platform into a production reality with unyielding standards for performance, aesthetic taste, and stability.",
    deliverables: ["Native Multi-Platform Engine", "Stress & Security Audits", "Studio Workflow Integration"],
  },
  {
    step: "04",
    title: "Ecosystem Deployment",
    subtitle: "Patient, Enduring Scale",
    description:
      "We launch the platform into closed creator, researcher, and enterprise circles, cultivating sovereign adoption with zero debt.",
    deliverables: ["Private Cohort Onboarding", "Continuous Architectural Updates", "100-Year Stewardship"],
  },
];

export function ProcessSection() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item) => (
          <div
            key={item.step}
            className="group relative rounded-3xl border border-white/10 bg-[#0e0e13]/70 p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            {/* Step header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-3xl font-light text-neutral-400 group-hover:text-white transition-colors">
                  {item.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider mt-1">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="pt-6 border-t border-white/[0.06] mt-6 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                Deliverables:
              </span>
              <ul className="space-y-1.5">
                {item.deliverables.map((del) => (
                  <li
                    key={del}
                    className="text-xs text-neutral-300 font-light flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400/80 shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
