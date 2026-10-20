import { Theme } from "@/components/Theme";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaClock, 
  FaPaperPlane 
} from "react-icons/fa";


export default function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-2xl" style={{ color: Theme.primary }} />,
      title: "Email Us",
      value: "support@naijaventurehub.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" style={{ color: Theme.primary }} />,
      title: "Call Us",
      value: "+234 (0) 800 123 4567",
      subtext: "Mon - Fri from 8am to 5pm WAT"
    },
    {
      icon: <FaWhatsapp className="text-2xl" style={{ color: Theme.primary }} />,
      title: "WhatsApp Direct",
      value: "+234 (0) 900 987 6543",
      subtext: "Quick inquiries & community support"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" style={{ color: Theme.primary }} />,
      title: "Office Address",
      value: "Victoria Island, Lagos, Nigeria",
      subtext: "By appointment only"
    }
  ];

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      {/* Header Banner */}
      <section className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover border-b border-neutral-800">
        <div className="bg-black/80 py-16 md:py-24 px-5 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <span 
              className="text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full text-black"
              style={{ backgroundColor: Theme.secondary }}
            >
              Get In Touch
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl uppercase tracking-tight leading-tight">
              We’d Love to <span style={{ color: Theme.secondary }}>Hear From You</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
              Have questions about starting your business, finding a mentor, or listing your venture experience? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area: Contact Details & Form */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold uppercase mb-3">
                Let's Talk <span style={{ color: Theme.secondary }}>Business</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Whether you are an aspiring entrepreneur seeking practical guidance or an experienced business owner ready to give back, we are here to assist.
              </p>
            </div>

            <div className="grid gap-4">
              {contactDetails.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex items-start gap-4 hover:border-neutral-700 transition-colors"
                >
                  <div 
                    className="p-3 rounded-xl shrink-0"
                    style={{ backgroundColor: Theme.secondary }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-semibold uppercase">{item.title}</span>
                    <span className="text-base font-bold text-white mt-0.5">{item.value}</span>
                    <span className="text-xs text-neutral-500 mt-1">{item.subtext}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Operating Hours Box */}
            <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl flex items-center gap-4">
              <FaClock className="text-3xl text-neutral-400 shrink-0" />
              <div className="flex flex-col text-sm">
                <span className="font-bold text-white">Support Hours</span>
                <span className="text-neutral-400">Monday - Friday: 8:00 AM - 5:00 PM (WAT)</span>
                <span className="text-neutral-500 text-xs mt-1">Closed on Weekends & Public Holidays</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-neutral-400 text-sm mb-8">
              Fill out the form below and our local community team will get back to you promptly.
            </p>

            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-neutral-300">
                    Full Name <span style={{ color: Theme.secondary }}>*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    placeholder="e.g. Chukwuma Adebayo"
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-neutral-300">
                    Email Address <span style={{ color: Theme.secondary }}>*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="e.g. name@example.com"
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-neutral-300">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="e.g. 08012345678"
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="topic" className="text-sm font-semibold text-neutral-300">
                    Inquiry Topic <span style={{ color: Theme.secondary }}>*</span>
                  </label>
                  <select 
                    id="topic"
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="aspiring">Aspiring Entrepreneur Inquiry</option>
                    <option value="mentor">Become a Mentor</option>
                    <option value="data">Submit Business Cost Data</option>
                    <option value="partnership">Partnerships & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-neutral-300">
                  Your Message <span style={{ color: Theme.secondary }}>*</span>
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell us about your business goals, current challenges, or how we can assist you..."
                  className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: Theme.primary }}
                className="text-white font-semibold py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ Banner / Quick Help */}
      <section className="py-16 px-5 bg-neutral-900/50 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Looking for Instant Answers?</h3>
            <p className="text-neutral-400 text-sm">
              Explore our Directory for real operational cost breakdowns and business guides.
            </p>
          </div>
          <Link 
            href="/ideas" 
            className="font-semibold px-8 py-3.5 text-base rounded-full flex items-center gap-2 text-black transition-transform hover:scale-105 shrink-0 max-md:w-full justify-center"
            style={{ backgroundColor: Theme.secondary }}
          >
            Browse Business Directory <TiArrowRight className="text-xl" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12 px-5 text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 max-md:text-center">
            <span className="text-xl font-bold text-white uppercase tracking-wider">
              Naija Venture Hub
            </span>
            <p className="text-xs text-neutral-500">
              Empowering Nigerian Entrepreneurs through Real Experiences.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/ideas" className="hover:text-white transition-colors">Venture Directory</Link>
            <Link href="/contact" className="hover:text-white transition-colors text-white">Contact</Link>
          </div>
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Naija Venture Hub. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}