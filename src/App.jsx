export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-700">AjmalTech</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#why" className="hover:text-blue-600">Why Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Proactive IT Support That Keeps Your Business Running
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Managed IT services, Microsoft 365 solutions, and cybersecurity protection 
              designed for growing UK businesses.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
              <a href="#services" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Our Services
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-blue-100 rounded-3xl h-80 flex items-center justify-center text-blue-600 font-semibold">
              IT Infrastructure Illustration
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-6">
          <div>
            <p className="text-3xl font-bold text-blue-600">99.9%</p>
            <p className="text-gray-500 text-sm">System Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-500 text-sm">IT Monitoring</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">&lt; 30min</p>
            <p className="text-gray-500 text-sm">Response Time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">100%</p>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Our Core Services</h3>
          <p className="text-gray-600">
            Comprehensive IT solutions tailored for modern businesses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Managed IT Support",
              desc: "24/7 monitoring, helpdesk support, and proactive system management."
            },
            {
              title: "Microsoft 365 & Cloud",
              desc: "Migration, security hardening, and ongoing cloud management."
            },
            {
              title: "Cybersecurity Protection",
              desc: "Endpoint security, compliance solutions, and risk management."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose AjmalTech?</h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Proactive monitoring to prevent downtime</li>
              <li>✔ Transparent pricing & service agreements</li>
              <li>✔ Fast response times</li>
              <li>✔ Security-first approach</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-10 rounded-2xl">
            <p className="text-gray-600 italic">
              “AjmalTech transformed our IT operations. Their response time and 
              proactive support have been exceptional.”
            </p>
            <p className="mt-4 font-semibold text-blue-600">
              – SME Client
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">
          Ready to Improve Your IT Infrastructure?
        </h3>
        <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Free Consultation
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>

        <form 
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-6"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded-lg" />
          <textarea name="message" placeholder="Your Message" required className="w-full border p-3 rounded-lg h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AjmalTech. All rights reserved.
      </footer>

    </div>
  )
}
