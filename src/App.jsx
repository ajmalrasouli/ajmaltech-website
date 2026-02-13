export default function App() {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-700">AjmalTech</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-blue-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable IT Support for Growing Businesses
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          We deliver proactive IT management, cloud solutions, and cybersecurity 
          services to keep your business secure and operational.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book Free Consultation
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 shadow-lg rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-4">Managed IT Support</h4>
            <p className="text-gray-600">
              24/7 monitoring, helpdesk support and proactive maintenance 
              to prevent downtime and keep your systems running.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-4">Cloud & Microsoft 365</h4>
            <p className="text-gray-600">
              Migration, configuration and optimisation of Microsoft 365 
              and secure cloud infrastructure solutions.
            </p>
          </div>

          <div className="p-8 shadow-lg rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-4">Cybersecurity</h4>
            <p className="text-gray-600">
              Endpoint protection, compliance implementation and security 
              hardening tailored for SMEs.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About AjmalTech</h3>
          <p className="text-gray-600 leading-relaxed">
            AjmalTech provides reliable and strategic IT support services 
            designed for small and medium-sized businesses. Our mission is to 
            simplify technology, strengthen security, and support long-term growth.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>

        <form 
          action="https://formspree.io/f/xaqdevqz"
          method="POST"
          className="space-y-6"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name"
            required 
            className="w-full border p-3 rounded-lg"
          />

          <input 
            type="email" 
            name="email"
            placeholder="Your Email"
            required 
            className="w-full border p-3 rounded-lg"
          />

          <textarea 
            name="message"
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-lg h-32"
          />

          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100">
        © {new Date().getFullYear()} AjmalTech. All rights reserved.
      </footer>

    </div>
  )
}
