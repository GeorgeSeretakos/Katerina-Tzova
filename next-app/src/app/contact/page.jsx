import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-[#0B0B0C] text-[#EAEAEA] mb-12">
      {/* Title block, same style as Stills */}
      <div className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-serif">Contact</h1>
      </div>

      {/* Subtitle + icon */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base text-[#EAEAEA]/70 mb-6">
          I’d love to hear about your story.
        </p>
        <p className="text-sm md:text-base text-[#EAEAEA]/70 mb-6">
          Reach out and let’s create something timeless together.
        </p>

        <div className="flex justify-center">
          <img
            src="/icons/call-back.png"
            alt="Contact Icon"
            width={64}
            height={64}
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
}