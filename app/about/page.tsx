import { Theme } from "@/components/Theme";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { 
  FaBullseye, 
  FaEye, 
  FaHandshake, 
  FaShieldAlt, 
  FaLightbulb, 
  FaUsers 
} from "react-icons/fa";


export default function About() {
  const coreValues = [
    {
      icon: <FaShieldAlt className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Radical Transparency",
      description: "We don't sell overhyped success stories. We share real startup figures, actual operational costs, and honest failure points."
    },
    {
      icon: <FaHandshake className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Community First",
      description: "Entrepreneurship in Nigeria is tough; doing it alone is tougher. We build trust-driven connections between founders."
    },
    {
      icon: <FaLightbulb className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Practical Over Theory",
      description: "Every guide, mentor call, and budget breakdown is grounded in real experience on Nigerian soil."
    },
    {
      icon: <FaUsers className="text-3xl" style={{ color: Theme.primary }} />,
      title: "Inclusive Mentorship",
      description: "Empowering everyday individuals across all 36 states to turn market opportunities into sustainable businesses."
    }
  ];

  const team = [
    {
      name: "Tunde Bakare",
      role: "Co-Founder & Lead Strategist",
      location: "Lagos, Nigeria",
      bio: "Ex-fintech operator with 8+ years experience scaling small-to-medium businesses in West Africa."
    },
    {
      name: "Amina Yusuf",
      role: "Head of Mentor Community",
      location: "Abuja, Nigeria",
      bio: "Passionate community builder connecting over 500+ Nigerian business operators and investors."
    },
    {
      name: "Efe Okon",
      role: "Director of Business Intelligence",
      location: "Port Harcourt, Nigeria",
      bio: "Agribusiness and logistics specialist dedicated to validating realistic market entry costs."
    }
  ];

  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover border-b border-neutral-800">
        <div className="bg-black/80 py-20 md:py-28 px-5 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <span 
              className="text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full text-black"
              style={{ backgroundColor: Theme.secondary }}
            >
              Our Story & Mission
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl uppercase tracking-tight leading-tight">
              Bridging the Gap Between <span style={{ color: Theme.secondary }}>Dreams & Execution</span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
              We are on a mission to drastically reduce business failure rates in Nigeria by giving aspiring founders access to authentic operational blueprints and real-world mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem & Solution / Narrative Section */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
              Why We Started <span style={{ color: Theme.secondary }}>Naija Venture Hub</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed text-base">
              Starting a business in Nigeria comes with a unique set of complexities—unpredictable power supply, fluctuating currency, hidden logistics expenses, and regulatory nuances.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base">
              Far too many ambitious entrepreneurs lose their hard-earned capital simply because textbooks and internet searches don't reflect the daily realities of running a business in Lagos, Kano, Aba, or Ibadan.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base">
              Naija Venture Hub was built to change that. We connect beginners directly with battle-tested Nigerian founders who share genuine numbers, genuine mistakes, and actionable roadmaps.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div 
                className="p-3 rounded-xl shrink-0 text-black font-bold"
                style={{ backgroundColor: Theme.secondary }}
              >
                <FaBullseye className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  To democratize access to realistic business intelligence, mentorship, and capital breakdown data for every aspiring entrepreneur in Nigeria.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-8 flex items-start gap-4">
              <div 
                className="p-3 rounded-xl shrink-0 text-black font-bold"
                style={{ backgroundColor: Theme.secondary }}
              >
                <FaEye className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  To become Africa’s most trusted ecosystem for launching, validating, and scaling sustainable local enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-5 bg-neutral-900/50 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
              Our Guiding <span style={{ color: Theme.secondary }}>Principles</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              The values that define how we build our community and support Nigerian business leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col gap-4 hover:border-neutral-700 transition-all"
              >
                <div 
                  className="p-3 rounded-xl w-fit" 
                  style={{ backgroundColor: Theme.secondary }}
                >
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{val.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            Meet The <span style={{ color: Theme.secondary }}>Team</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Operators, mentors, and community builders committed to driving entrepreneurship in Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-all"
            >
              <div>
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-black mb-6"
                  style={{ backgroundColor: Theme.secondary }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <span className="text-sm font-semibold block mb-4" style={{ color: Theme.secondary }}>
                  {member.role}
                </span>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-medium border-t border-neutral-800 pt-4">
                Based in {member.location}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div 
          className="rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden"
          style={{ backgroundColor: Theme.primary }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight uppercase">
            Want to share your experience or mentor others?
          </h2>
          <p className="text-neutral-200 text-lg max-w-xl font-light">
            If you run a business in Nigeria, join our network of mentors to guide the next generation of business leaders.
          </p>
          <div className="flex items-center gap-4 max-md:flex-col max-md:w-full">
            <Link 
              href="/register?type=mentor" 
              className="font-bold text-lg px-8 py-3.5 rounded-full text-black transition-transform hover:scale-105 max-md:w-full text-center"
              style={{ backgroundColor: Theme.secondary }}
            >
              Become a Mentor
            </Link>
            <Link 
              href="/ideas" 
              className="font-semibold px-8 py-3.5 text-lg rounded-full flex items-center gap-2 border border-neutral-200 text-white hover:bg-white/10 transition-colors max-md:w-full justify-center"
            >
              Explore Ideas <TiArrowRight className="text-xl" />
            </Link>
          </div>
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
            <Link href="/about" className="hover:text-white transition-colors text-white">About Us</Link>
            <Link href="/ideas" className="hover:text-white transition-colors">Venture Directory</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Naija Venture Hub. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}