import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { checkSubscriptionRateLimit } from "@/lib/rateLimit";

function jsonResponse(body: { message?: string; error?: string }, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host && new URL(origin).host !== host) {
      return jsonResponse({ error: "Request origin is not allowed." }, 403);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return jsonResponse({ error: "JSON request required." }, 415);
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 2048) {
      return jsonResponse({ error: "Request is too large." }, 413);
    }

    const clientAddress = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    const rateLimit = await checkSubscriptionRateLimit(clientAddress);
    if (!rateLimit.success) {
      return jsonResponse({ error: "Too many attempts. Please try again later." }, 429);
    }

    const body = await request.json();
    if (typeof body.website === "string" && body.website.trim()) {
      return jsonResponse({ error: "Invalid request." }, 400);
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Enter a valid email address." }, 400);
    }

    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) {
      return jsonResponse({ error: "Subscription service is not configured." }, 503);
    }

    const { error } = await supabaseAdmin.from("email_subscribers").insert({ email });

    if (error?.code === "23505") {
      return jsonResponse({ message: "You are already subscribed." }, 200);
    }

    if (error) {
      console.error("Supabase subscription error:", error);
      return jsonResponse({ error: "Subscription could not be completed." }, 500);
    }

    return jsonResponse({ message: "You are subscribed." }, 201);
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }
}
