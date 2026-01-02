import type { Metadata } from "next";
import { ContactForm } from "@/components/resume/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Luke Fournier - Available for internships, projects, and collaborations.",
};

const availability = [
  { status: "response_time", value: "< 24 hours", active: true },
  { status: "projects", value: "Open to all", active: true },
  { status: "internships", value: "Actively seeking", active: true },
  { status: "full_time", value: "Available 2027", active: true },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          <span className="text-[#6B7280]"># </span>
          CONTACT.md
        </h1>
        <p className="text-[#6B7280] text-xs sm:text-sm">
          {"// Let's connect"}
        </p>
      </div>

      {/* Availability Status */}
      <div className="mb-8 sm:mb-12 p-4 sm:p-6 border border-[#171717]/20 rounded-sm">
        <p className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
          {"// STATUS"}
        </p>

        <div className="space-y-1 text-sm sm:text-base">
          <p className="font-medium">
            <span className="text-[#374151]">interface</span> Availability {"{"}
          </p>

          <div className="pl-3 sm:pl-4 md:pl-6 space-y-1.5 sm:space-y-2 py-2">
            {availability.map((item) => (
              <div key={item.status} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <span
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full flex-shrink-0 ${
                    item.active ? "bg-green-500 animate-pulse" : "bg-[#6B7280]"
                  }`}
                />
                <span className="text-[#6B7280]">{item.status}:</span>
                <span className="font-medium">"{item.value}"</span>
              </div>
            ))}
          </div>

          <p className="font-medium">{"}"}</p>
        </div>

        <p className="text-[#6B7280] text-xs sm:text-sm mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#171717]/10">
          {"// Ready to collaborate on your next project"}
        </p>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
