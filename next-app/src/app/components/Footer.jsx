"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-[#EAEAEA] border-t border-[#C6A664]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column: Logo + Info */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <img
            src="/logo/white.png"
            alt="Katerina Tzova"
            width={220}
            height={80}
            className="mb-4"
          />
          {/*<p className="text-sm text-[#EAEAEA]/70 max-w-sm">*/}
          {/*  Capturing stories with cinematic light and presence. Weddings,*/}
          {/*  baptisms, portraits, theatre &amp; film.*/}
          {/*</p>*/}

          {/* Phone */}
          <p>Tel:{" "}
            <a href="tel:+306974184885" className="hover:underline">
              +30 697 418 4885
            </a>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/kater.tzova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#D4AF37] transition"
            >
              <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5"/>
            </a>
            <a
              href="https://www.youtube.com/@katerinatzova9005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#D4AF37] transition"
            >
              <img src="/icons/youtube.png" alt="YouTube" className="w-5 h-5"/>
            </a>
            <a
              href="https://www.instagram.com/katerinatzova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#D4AF37] transition"
            >
              <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5"/>
            </a>
            {/*<a*/}
            {/*  href="https://vimeo.com/yourprofile"*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*  aria-label="Vimeo"*/}
            {/*  className="hover:text-[#D4AF37] transition"*/}
            {/*>*/}
            {/*  <img src="/icons/vimeo.png" alt="Vimeo" className="w-5 h-5"/>*/}
            {/*</a>*/}
          </div>

        </div>

        {/* Right column: Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact"/>
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <select
            name="eventType"
            className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
            required
          >
            <option value="">Type of Event</option>
            <option>Wedding</option>
            <option>Baptism</option>
            <option>Portrait</option>
            <option>Theatre</option>
            <option>Movie</option>
            <option>Dance School</option>
            <option>Other Event</option>
          </select>

          <textarea
            name="message"
            placeholder="Message / Comment"
            rows={4}
            className="w-full rounded-md bg-[#121214] border border-[#C6A664]/30 px-3 py-2 text-sm focus:border-[#D4AF37] focus:outline-none"
          />

          <button
            type="submit"
            className="btn-gold w-full md:w-auto px-6 py-2 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
}
