import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 rounded-md"></div>
              <span className="text-xl font-semibold text-gray-900 tracking-tight">
                AjmalTech
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#services" className="hover:text-gray-900 transition">Services</a>
              <a href="#about" className="hover:text-gray-900 transition">About</a>
              <a href="#plans" className="hover:text-gray-900 transition">Plans</a>
              <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
            >
              Request Consultation
            </a>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
              {isOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 space-y-4 text-sm font-medium text-gray-600">
              <a href="#services" className="block">Services</a>
              <a href="#about" className="block">About</a>
              <a href="#plans" className="block">Plans</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reliable IT Support for Small Offices & Schools in London
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mb-6">
            Personal, responsive IT support delivered directly by an experienced engineer.
            On-site across London when required, remote when faster.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Typically responding within the same working day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition duration-200 text-center"
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">IT Services</h2>
          <p className="text-gray-600">
            Practical solutions tailored for small organisations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Office IT Support",
              desc: "Day-to-day troubleshooting and maintenance to keep your office productive."
            },
            {
              title: "School IT Support",
              desc: "Support for school networks, Microsoft 365 and safeguarding-focused IT."
            },
            {
              title: "Microsoft 365 & Security",
              desc: "Setup, management and security best practices for your organisation."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">About AjmalTech</h2>
          <p className="text-gray-600 leading-relaxed">
            I personally provide IT support to small offices and schools across London.
            When you contact AjmalTech, you speak directly to the engineer resolving your issue.
            My focus is simple: dependable, honest IT support without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Serving London</h3>
          <p className="text-gray-600">
            On-site and remote IT support across Central, North, East, South and West London.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            Tell me about your IT requirements and I’ll respond within the same working day.
          </p>

          <form
            action="https://formspree.io/f/xaqdevqz"
            method="POST"
            className="space-y-6 text-left bg-white p-8 rounded-xl shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Tell me about your IT needs"
              required
              className="w-full border border-gray-200 p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              onClick={() => {
                if (window.gtag) {
                  window.gtag("event", "contact_form_submit", {
                    event_category: "engagement",
                    event_label: "Contact Form",
                  });
                }
              }}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        <p>Serving small offices & schools across London.</p>
        <p className="mt-2">© {new Date().getFullYear()} AjmalTech</p>
      </footer>
    </>
  );
}
