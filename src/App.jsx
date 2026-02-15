import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-5">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
              <span className="text-xl font-semibold text-gray-900 tracking-tight">
                AjmalTech
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#services" className="hover:text-gray-900 transition">
                Services
              </a>
              <a href="#about" className="hover:text-gray-900 transition">
                About
              </a>
              <a href="#plans" className="hover:text-gray-900 transition">
                Plans
              </a>
              <a href="#contact" className="hover:text-gray-900 transition">
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Consultation
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-6 py-4 space-y-4 text-sm font-medium text-gray-600">
              <a href="#services" className="block hover:text-gray-900">
                Services
              </a>
              <a href="#about" className="block hover:text-gray-900">
                About
              </a>
              <a href="#plans" className="block hover:text-gray-900">
                Plans
              </a>
              <a href="#contact" className="block hover:text-gray-900">
                Contact
              </a>
              <a
                href="#contact"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>


      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Reliable IT Support for Small Offices & Schools in London
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Personal, responsive IT support delivered directly by an experienced engineer.
            On-site across London when required, remote when faster — without call centres,
            long contracts, or unnecessary complexity.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Free Consultation
            </a>
            <a href="#services" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Work With AjmalTech?</h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Direct access to your IT engineer</li>
              <li>✔ Fast response during working hours</li>
              <li>✔ On-site support across London</li>
              <li>✔ Clear advice without technical jargon</li>
              <li>✔ Flexible support without long contracts</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <p className="text-gray-600">
              I focus on building long-term relationships with small organisations who
              need dependable IT support without the overhead of a large managed service provider.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">IT Services for Small Offices & Schools</h3>
          <p className="text-gray-600">
            Practical, reliable IT solutions tailored for smaller organisations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Office IT Support</h4>
            <p className="text-gray-600">
              Day-to-day troubleshooting, device setup, user support, and network maintenance
              to keep your office running smoothly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">School IT Support</h4>
            <p className="text-gray-600">
              Support for school networks, Microsoft 365 for Education, device management,
              and safeguarding-focused IT guidance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Microsoft 365 & Security</h4>
            <p className="text-gray-600">
              Setup, configuration and ongoing management of Microsoft 365,
              backup solutions and security best practices.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">About AjmalTech</h3>
          <p className="text-gray-600 leading-relaxed">
            Hi, I’m Ajmal. I personally provide IT support to small offices and schools across London.
            When you contact AjmalTech, you speak directly to the engineer who will be resolving your issue.
            My aim is simple: provide dependable, honest IT support that keeps your organisation secure and productive.
          </p>
        </div>
      </section>

      {/* SUPPORT PLANS */}
      <section id="plans" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Simple Support Plans</h3>
          <p className="text-gray-600">
            Flexible options designed for smaller organisations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-4">Ad-Hoc Support</h4>
            <p className="text-gray-600 mb-4">
              Pay-as-you-go IT support for occasional issues.
            </p>
            <p className="font-bold text-blue-600">Hourly Rate</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow border-2 border-blue-600">
            <h4 className="text-xl font-semibold mb-4">Monthly Support</h4>
            <p className="text-gray-600 mb-4">
              Ongoing IT support and monitoring for peace of mind.
            </p>
            <p className="font-bold text-blue-600">Fixed Monthly Fee</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-xl font-semibold mb-4">School Support Plan</h4>
            <p className="text-gray-600 mb-4">
              Tailored IT support package for primary & secondary schools.
            </p>
            <p className="font-bold text-blue-600">Custom Quote</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Need IT Support in London?</h3>
        <p className="text-gray-600 mb-8">
          Get in touch to discuss your requirements and arrange a free initial consultation.
        </p>

        <form 
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-6 text-left"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded-lg" />
          <textarea name="message" placeholder="Tell me about your IT needs" required className="w-full border p-3 rounded-lg h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AjmalTech – IT Support in London
      </footer>
    </>
  )
}
