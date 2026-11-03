export interface Platform {
  id: string;
  name: string;
  shortName: string;
  category: string;
  status: string;
  version: string;
  headline: string;
  description: string;
  url: string;
  githubUrl: string;
  previewImage: string;
  previewAlt: string;
  metrics: { value: string; label: string }[];
  capabilities: string[];
}

export const platforms: Platform[] = [
  {
    id: "entelechae-visuals",
    name: "Entelechae Visuals",
    shortName: "Visuals",
    category: "CREATIVE WEB ARCHITECTURE & ASSETS",
    status: "LIVE PRODUCTION",
    version: "2026",
    headline: "29,627 open-source creative resources, motion components, and WebGL prompts.",
    description:
      "A generational library of 897 React & Tailwind interactive motion components, 28,047 verified templates across Framer, Webflow, and Next.js, and 683 immersive 3D WebGL shader prompts.",
    url: "https://entele-visuals.vercel.app/",
    githubUrl: "https://github.com/Entelechae-eng/Entele-visuals",
    previewImage: "/images/entele-visuals-ui.png",
    previewAlt: "Entelechae Visuals platform interface showcasing open-source motion components and templates",
    metrics: [
      { value: "29,627", label: "Open Resources" },
      { value: "897", label: "Motion Primitives" },
      { value: "28,047", label: "Web Templates" },
      { value: "683", label: "3D AI Prompts" },
    ],
    capabilities: [
      "897 interactive motion components for React & Tailwind CSS",
      "28,047 verified web templates for Framer, Webflow, and Next.js",
      "683 immersive 3D WebGL scenes, background shaders, and AI prompts",
      "Kinetic typography, animated physics buttons, and spatial cards",
      "Permissive MIT open-source license by @Entelechae-eng",
    ],
  },
  {
    id: "entelechae-code",
    name: "Entelechae Code",
    shortName: "Code",
    category: "SOVEREIGN AI WORKBENCH & RUNTIMES",
    status: "LIVE WORKBENCH",
    version: "V1.1",
    headline: "Sovereign AI workbench with client-side state and multi-model intelligence.",
    description:
      "A distraction-free autonomous development environment pairing multi-model reasoning with local SQLite persistence, interactive code artifacts, terminal execution, and zero SaaS telemetry.",
    url: "https://entelechae-code.vercel.app/",
    githubUrl: "https://github.com/Entelechae-eng",
    previewImage: "/images/entelechae-code-preview.png",
    previewAlt: "Entelechae Code sovereign AI workbench interface with model tier selector and artifact preview",
    metrics: [
      { value: "100%", label: "Local SQLite State" },
      { value: "8+ Tiers", label: "Model Intelligence" },
      { value: "< 8ms", label: "Execution Latency" },
      { value: "Zero", label: "Telemetry Tracking" },
    ],
    capabilities: [
      "Multi-model intelligence: Entelechae 1.1, Claude 3.5, Gemini 2.5, DeepSeek, and Local Ollama",
      "Local-first SQLite storage keeping codebases and conversation state private on device",
      "Interactive live artifacts with instant compilation, preview, editing, and versioning",
      "Sandboxed terminal executor with sub-millisecond execution graphs",
      "Extensible Model Context Protocol (MCP) servers and tools ecosystem",
    ],
  },
];

