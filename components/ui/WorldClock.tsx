"use client";

import { useSyncExternalStore } from "react";

const NODES = [
  { city: "San Francisco", timeZone: "America/Los_Angeles" },
  { city: "London", timeZone: "Europe/London" },
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "New Delhi", timeZone: "Asia/Kolkata" },
];

let globalTimestamp = 0;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  globalTimestamp = Date.now();
  setInterval(() => {
    globalTimestamp = Date.now();
    listeners.forEach((l) => l());
  }, 1000);
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return globalTimestamp;
}

function getServerSnapshot() {
  return 0;
}

export function WorldClock() {
  const timestamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!timestamp) {
    return (
      <div className="flex flex-wrap gap-4 py-2 text-xs font-mono text-neutral-500">
        <span>GLOBAL NODES ACTIVE</span>
      </div>
    );
  }

  const time = new Date(timestamp);

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 py-2 text-xs font-mono text-neutral-400">
      {NODES.map((node) => {
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: node.timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(time);

        return (
          <div key={node.city} className="flex items-center gap-1.5">
            <span className="text-neutral-500">{node.city}</span>
            <span className="text-white font-medium">{formatted}</span>
          </div>
        );
      })}
    </div>
  );
}
