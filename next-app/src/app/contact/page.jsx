export default function ContactPage() {
  return (
    <section className="bg-[#0B0B0C] text-[#EAEAEA] mb-12">
      {/* Title block, same style as Stills */}
      <div className="py-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-great-vibes !font-normal">Contact</h1>
          <img
            src="/icons/call-back.png" // reuse same icon for now
            alt="Delicate hand-drawn sketch"
            width={64}
            height={64}
            className="opacity-80"
          />
        </div>
      </div>

      {/* Subtitle + icon */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="font-great-vibes !font-normal mb-6">
          I’d love to hear about your story.
        </h1>
        <p className="text-sm md:text-base text-[#EAEAEA]/70 mb-6">
          Reach out and let’s create something timeless together.
        </p>

        {/*<div className="flex justify-center">*/}
        {/*  <img*/}
        {/*    src="/icons/call-back.png"*/}
        {/*    alt="Contact Icon"*/}
        {/*    width={64}*/}
        {/*    height={64}*/}
        {/*    className="opacity-90"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </section>
  );
}