"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";

// Email validation regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Security: Sanitize input to prevent XSS and malicious content
function sanitizeInput(input: string): string {
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, "");

  // Remove script-like patterns
  sanitized = sanitized.replace(/javascript:/gi, "");
  sanitized = sanitized.replace(/on\w+=/gi, "");

  // Encode special characters
  sanitized = sanitized
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");

  return sanitized;
}

// Security: Check for suspicious patterns
function containsSuspiciousContent(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:/i,
    /vbscript:/i,
    /expression\s*\(/i,
    /url\s*\(/i,
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(input));
}

// Security: Basic rate limiting check (prevents spam)
const SUBMISSION_COOLDOWN = 30000; // 30 seconds
let lastSubmissionTime = 0;

function canSubmit(): boolean {
  const now = Date.now();
  if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
    return false;
  }
  return true;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "security_error" | "rate_limited">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && isValidEmail(email);

  function handleEmailChange(value: string) {
    setEmail(value);
    if (value && !isValidEmail(value)) {
      setEmailError("// Error: Invalid email format");
    } else {
      setEmailError("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Rate limiting check
    if (!canSubmit()) {
      setStatus("rate_limited");
      return;
    }

    // Security checks
    if (containsSuspiciousContent(name) || containsSuspiciousContent(email) || containsSuspiciousContent(message)) {
      setStatus("security_error");
      return;
    }

    // Final email validation
    if (!isValidEmail(email)) {
      setEmailError("// Error: Invalid email format");
      return;
    }

    setStatus("sending");

    // Sanitize all inputs before sending
    const sanitizedData = {
      name: sanitizeInput(name.trim()),
      email: email.trim(), // Email doesn't need HTML sanitization
      message: sanitizeInput(message.trim()),
    };

    try {
      const result = await sendContactEmail(sanitizedData);

      if (result.success) {
        lastSubmissionTime = Date.now();
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8">
      <div
        className="relative p-4 sm:p-5 md:p-6 border border-[#171717]/20 rounded-sm
                   transition-all duration-300 ease-linear
                   hover:border-[#171717]/50
                   hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,0.1)]
                   group"
      >
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
        <span className="absolute top-0 left-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />
        <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
        <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />

        <h2 className="text-[#6B7280] text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wide">
          {"// CONTACT"}
        </h2>

        {status === "sent" ? (
          <div className="py-8 sm:py-12 text-center">
            <p className="text-base sm:text-xl font-bold text-[#374151] flex items-center justify-center gap-2 sm:gap-3">
              <span>{">"} message.sent</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M5 13l4 4L19 7"
                  className="animate-[draw_0.5s_ease-out_forwards]"
                  style={{
                    strokeDasharray: 24,
                    strokeDashoffset: 24,
                  }}
                />
              </svg>
            </p>
            <p className="text-[#6B7280] text-sm sm:text-base mt-2">Thanks! I'll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#6B7280] hover:text-[#171717] transition-colors cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Function signature */}
            <p className="text-sm sm:text-lg font-bold">
              <span className="text-[#374151]">async function</span>{" "}
              sendMessage() {"{"}
            </p>

            <div className="pl-2 sm:pl-4 md:pl-6 space-y-3 sm:space-y-4">
              {/* Name field */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-[#6B7280] text-xs sm:text-sm block">
                  {"// your name"}
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-[#6B7280] text-xs sm:text-base whitespace-nowrap">const name =</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={100}
                    placeholder='"John Doe"'
                    className="flex-1 bg-transparent border-b border-[#171717]/30
                             focus:border-[#171717] outline-none py-1 px-2 text-sm sm:text-base
                             transition-colors duration-300
                             placeholder:text-[#171717]/30"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-[#6B7280] text-xs sm:text-sm block">
                  {"// your email"}
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-[#6B7280] text-xs sm:text-base whitespace-nowrap">const email =</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                    maxLength={254}
                    placeholder='"you@example.com"'
                    className={`flex-1 bg-transparent border-b outline-none py-1 px-2 text-sm sm:text-base
                             transition-colors duration-300
                             placeholder:text-[#171717]/30
                             ${emailError ? "border-red-500" : "border-[#171717]/30 focus:border-[#171717]"}`}
                  />
                </div>
                {emailError && (
                  <p className="text-red-600 text-[10px] sm:text-xs sm:pl-24">{emailError}</p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-[#6B7280] text-xs sm:text-sm block">
                  {"// your message"}
                </label>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="text-[#6B7280] text-xs sm:text-base sm:pt-1 whitespace-nowrap">const message =</span>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    maxLength={2000}
                    rows={3}
                    placeholder='`Hello Luke...`'
                    className="flex-1 bg-transparent border border-[#171717]/30
                             focus:border-[#171717] outline-none py-2 px-3 rounded-sm text-sm sm:text-base
                             transition-colors duration-300 resize-none
                             placeholder:text-[#171717]/30"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-1 sm:pt-2">
                <span className="text-[#6B7280] text-xs sm:text-base">await</span>{" "}
                <button
                  type="submit"
                  disabled={!isFormValid || status === "sending"}
                  className={`relative px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium group/btn
                           transition-opacity duration-300
                           ${!isFormValid || status === "sending"
                             ? "opacity-40 cursor-not-allowed"
                             : "opacity-100 cursor-pointer hover:opacity-80"}`}
                >
                  <span className="absolute inset-0 rounded-sm">
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-[#252525]" />
                    <span className="absolute top-0 left-0 w-0.5 h-full bg-[#252525]" />
                    <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#252525]" />
                    <span className="absolute bottom-0 right-0 w-0.5 h-full bg-[#252525]" />
                  </span>
                  <span className="relative">
                    {status === "sending" ? "sending..." : "send()"}
                  </span>
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-xs sm:text-sm">
                  {"// Error: Failed to send. Please try again."}
                </p>
              )}
              {status === "security_error" && (
                <p className="text-red-600 text-xs sm:text-sm">
                  {"// Error: Invalid content detected."}
                </p>
              )}
              {status === "rate_limited" && (
                <p className="text-red-600 text-xs sm:text-sm">
                  {"// Error: Please wait before sending another message."}
                </p>
              )}
            </div>

            <p className="font-bold text-sm sm:text-base">{"}"}</p>
          </form>
        )}
      </div>
    </section>
  );
}
