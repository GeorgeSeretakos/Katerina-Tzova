import StillsNav from "./StillsNav";

export default function StillsLayout({ children }) {
  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      <div className="py-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-great-vibes !font-normal">Stills</h1>
          <img
            src="/icons/images.png"
            alt="Delicate hand-drawn sketch"
            width={64}
            height={64}
            className="opacity-80"
          />
        </div>
      </div>

      <StillsNav />

      <div className="max-w-7xl mx-auto px-4 py-10">{children}</div>
    </section>
  );
}
