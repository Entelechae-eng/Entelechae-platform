import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-black text-white px-6 text-center space-y-6">
      <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
        404 · ERROR
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight uppercase">
        PAGE NOT FOUND
      </h1>
      <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light leading-relaxed">
        The requested platform, system node, or document does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[3px] bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
      >
        <span>RETURN HOME</span>
        <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}

