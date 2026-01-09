"use client";

import AnimatedPageHeader from "../components/AnimatedPageHeader";

export default function ContactPage() {
  return (
    <section className="bg-[#0B0B0C] text-[#EAEAEA] mb-12">
      <AnimatedPageHeader
        title="Contact"
        iconSrc="/icons/contact-us.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-great-vibes !font-normal mb-6">
          I’d love to hear about your story
        </h1>
        <p className="text-sm md:text-base text-[#EAEAEA]/70 mb-6">
          Reach out and let’s create something timeless together
        </p>
      </div>
    </section>
  );
}
