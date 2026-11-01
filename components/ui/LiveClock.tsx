"use client";

import { useSyncExternalStore } from "react";

let currentTimeString = "02:24:01 PM";
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  currentTimeString = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  setInterval(() => {
    currentTimeString = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
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
  return currentTimeString;
}

function getServerSnapshot() {
  return "02:24:01 PM";
}

export function LiveClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span>{time}</span>;
}
