import { ContactForm } from "@/components/resume/contact-form";

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
      <div className="mb-8 sm:mb-12">
        <p className="text-[#6B7280] text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">
          {"// contact.ts"}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="text-[#374151]">const</span> getInTouch
          <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-7 bg-[#171717] ml-1 sm:ml-2 animate-pulse align-middle" />
        </h1>
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
