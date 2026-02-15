export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-700">AjmalTech</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#plans" className="hover:text-blue-600">Plans</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
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

    </div>
  )
}