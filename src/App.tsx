/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Cpu, 
  Coins, 
  Building2, 
  LineChart, 
  ChevronRight,
  Menu,
  X,
  Heart,
  Send,
  Crosshair,
  Activity,
  GraduationCap,
  Briefcase,
  Shield,
  Layers,
  Globe,
  Database,
  Search,
  Zap,
  Users,
  CheckCircle2,
  Lock,
  FileText,
  Workflow
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "What We Do", id: "what-we-do" },
  { name: "Brand Hierarchy", id: "brands" },
  { name: "Architecture", id: "architecture" },
  { name: "Governance", id: "governance" },
  { name: "Team", id: "team" }
];

const WHAT_THIS_IS = [
  {
    title: "Legal & Strategic Parent",
    description: "Vecna Global B.V. holds the operating structure, commercial discipline, contracts, and venture coordination.",
    icon: Building2
  },
  {
    title: "Governance Protocol",
    description: "T-BEC defines trust, contribution standards, founder behavior, and collaboration rules. It is not a company.",
    icon: Shield
  },
  {
    title: "AI Product Intelligence",
    description: "Sharon and SharonX form the product intelligence and ecosystem layer for AI concierge and conversational commerce.",
    icon: Zap
  },
  {
    title: "Execution Network",
    description: "Soolx, YapZek AI, and GBeess support finance, technology, growth, branding, and sales execution.",
    icon: Workflow
  }
];

const BRAND_HIERARCHY = [
  {
    title: "Sharon",
    subtitle: "AI intelligence layer",
    description: "Product logic, conversational experience, and intelligent assistance protocol.",
    status: "Core OS"
  },
  {
    title: "SharonX",
    subtitle: "Venture & brand ecosystem",
    description: "Supports new AI products and distribution logic for the global marketplace.",
    status: "Ecosystem"
  },
  {
    title: "fly.sharonx.eu",
    subtitle: "AI Travel Concierge",
    description: "Current active product-facing AI travel and lifestyle assistant experience.",
    status: "Active Product"
  },
  {
    title: "SharonXAcademy",
    subtitle: "Education Vertical",
    description: "Structured learning, skills, and training programs powered by AI intelligence.",
    status: "Vertical"
  },
  {
    title: "Yuff!",
    subtitle: "AI Education Product",
    description: "Focused learning journeys designed for high-retention knowledge transfer.",
    status: "Vertical"
  },
  {
    title: "OS-Carr",
    subtitle: "Financial Intelligence",
    description: "Future finance, audit, and payout intelligence productization path.",
    status: "Future Roadmap"
  }
];

const VENTURE_CAPS = [
  {
    title: "AI Concierge",
    description: "Conversation-based guidance, planning, and decision support for high-intent users.",
    icon: Search
  },
  {
    title: "AI Chat Commerce",
    description: "Intent detection, guided selling, and conversion logic across conversational surfaces.",
    icon: LineChart
  },
  {
    title: "Enterprise AI Assistants",
    description: "Configurable AI support for customer service, internal operations, and business workflows.",
    icon: Database
  }
];

const FOUNDERS = [
  {
    name: "Erhan Dönmez",
    role: "Strategy & Risk",
    description: "Venture architecture, commercial framing, and strategic orchestration.",
    icon: Crosshair
  },
  {
    name: "Bülent Bulut",
    role: "Fintech & Treasury",
    description: "Payment logic, financial coordination, and treasury discipline.",
    icon: Coins
  },
  {
    name: "Karay Akar",
    role: "AI & Infrastructure",
    description: "Software engineering, infrastructure, and core product engine.",
    icon: Cpu
  },
  {
    name: "Gamze Berçinli",
    role: "Growth & Branding",
    description: "Community building, branding, and sales network execution.",
    icon: Globe
  }
];

const GOVERNANCE = [
  {
    title: "T-BEC Protocol Charter",
    description: "Defines governance logic, collaboration standards, and behavioral principles.",
    icon: FileText
  },
  {
    title: "Consortium Agreement",
    description: "Defines company roles, operational responsibilities, and commercial flow.",
    icon: Shield
  },
  {
    title: "Founder Memorandum",
    description: "Clarifies founder intent, decision principles, and commercial alignment.",
    icon: Users
  },
  {
    title: "Ethics & Growth Framework",
    description: "Documented standards for trust, ownership, revenue, and exit discipline.",
    icon: CheckCircle2
  }
];

const ROADMAP = [
  { step: "01", title: "Finalize Structure", desc: "Confirm corporate roles, protocol boundaries, and brand hierarchy." },
  { step: "02", title: "Sign Documentation", desc: "Execute T-BEC Charter, Consortium Agreement, and core statements." },
  { step: "03", title: "Activate Operations", desc: "Open hub.vecna.global workflows and coordination logic." },
  { step: "04", title: "Focus Product Delivery", desc: "Prioritize fly.sharonx.eu and SharonX roadmap execution." },
  { step: "05", title: "Measure First Signal", desc: "Track product delivery, customer traction, and early revenue discipline." }
];

const INVESTMENT_WHY = [
  { title: "Why Now", desc: "AI concierge, conversational commerce, and automation demand are converging simultaneously." },
  { title: "Use of Funds", desc: "Infrastructure, sales activation, treasury workflows, and early execution capacity." },
  { title: "Why This Team", desc: "Strategy, fintech, AI infrastructure, and growth capability at one table." }
];

const PromptHeart = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
  </svg>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Briefing request received. Our orchestration team will verify your credentials.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] w-full max-w-xl bg-[#0f172a] border border-white/10 shadow-2xl p-8 md:p-12 rounded-[32px] text-white">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-2">Private Briefing</h2>
                <p className="text-white/50">Request access to the venture architecture portfolio.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input required placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <input required placeholder="Inquiry Subject" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
              <textarea required rows={4} placeholder="Briefly state your orchestrational goal" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-400 transition-colors resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
              <button className="w-full bg-cyan-500 text-black py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all active:scale-[0.98]">
                Request Briefing <Send size={18} />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ArchitectureMap = () => (
  <div className="relative w-full max-w-4xl mx-auto py-20">
    <div className="flex flex-col items-center gap-12 relative z-10">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-cyan-500 text-black rounded-3xl font-bold text-center shadow-[0_0_50px_rgba(34,211,238,0.3)] border-2 border-white/20"
      >
        Vecna Global B.V.
        <div className="text-[10px] uppercase tracking-widest mt-1 opacity-70">Strategic Parent</div>
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <div className="h-10 w-[1px] bg-white/20" />
        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400">T-BEC Protocol</div>
        <div className="h-10 w-[1px] bg-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {["Soolx Treasury", "YapZek AI", "GBeess Growth"].map((exec, i) => (
          <motion.div 
            key={exec}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center"
          >
            <div className="font-bold text-sm text-white mb-1">{exec}</div>
            <div className="text-[9px] uppercase tracking-widest text-white/30">Execution Network</div>
          </motion.div>
        ))}
      </div>

      <div className="h-10 w-[1px] bg-white/20" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
        {["fly.sharonx.eu", "SharonXAcademy", "Yuff!", "Sharon", "OS-Carr"].map((product) => (
          <div key={product} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center opacity-60">
            <div className="font-medium text-[10px] text-white">{product}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-6 py-2 bg-cyan-900/30 border border-cyan-500/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        hub.vecna.global (Operating OS)
      </div>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]" />
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-cyan-500 selection:text-white overflow-x-hidden text-white font-sans">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToHome}>
            <PromptHeart />
            <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">Vecna Global</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.id} href={`#${link.id}`} className="text-sm font-medium text-white/50 hover:text-white transition-colors">{link.name}</a>
            ))}
            <button onClick={() => setIsContactModalOpen(true)} className="bg-white text-black px-6 py-2.5 text-sm font-bold rounded-full hover:bg-cyan-400 transition-all">Request Briefing</button>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 z-40 bg-[#020617] pt-32 px-10 md:hidden flex flex-col gap-10">
            {NAV_LINKS.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter">{link.name}</a>
            ))}
            <button onClick={() => { setIsMobileMenuOpen(false); setIsContactModalOpen(true); }} className="w-full bg-cyan-500 text-black py-6 text-xl font-bold rounded-2xl">Request Briefing</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 right-0 h-[1000px] pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 blur-[150px] rounded-full" />
          <div className="absolute top-0 inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Hero Section */}
          <section id="home" className="pt-40 pb-32 md:pt-60 md:pb-52 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-2 mb-8"
            >
              {[ "AI Venture Studio", "Central Treasury", "Protocol Governance" ].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">{tag}</span>
              ))}
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-[88px] font-bold leading-[1] tracking-[-0.05em] mb-10 max-w-4xl">
              Building an AI product machine with disciplined <span className="text-cyan-400 italic">venture architecture.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed mb-16">
              Vecna Global B.V. connects AI product intelligence, founder governance, treasury coordination, and execution partners into one contract-backed operating structure.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => setIsContactModalOpen(true)} className="bg-cyan-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all flex items-center gap-3">
                Request Private Briefing <ArrowRight size={20} />
              </button>
              <a href="#architecture" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Explore Operating Model
              </a>
            </motion.div>
          </section>

          {/* SECTION 2 — What This Is */}
          <section id="what-we-do" className="py-32 scroll-mt-32">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4 italic">Operational Foundation</h2>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter">Not a community. Not a pitch deck. <br/>An operating structure.</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHAT_THIS_IS.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/[0.08] transition-all group"
                >
                  <div className="p-4 bg-cyan-500/10 rounded-2xl w-fit mb-8 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 3 — Architecture Diagram */}
          <section id="architecture" className="py-32 scroll-mt-32 border-y border-white/5">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4">Structural Blueprint</h2>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Operating Architecture</div>
              <p className="text-white/40 max-w-2xl mx-auto">Each layer has a clear function. The value is not in the number of names, but in separating legal structure, governance, products, treasury, and execution.</p>
            </div>
            <ArchitectureMap />
          </section>

          {/* SECTION 4 — Brand Hierarchy */}
          <section id="brands" className="py-32 scroll-mt-32">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4">Ecosystem Layers</h2>
                <div className="text-4xl md:text-6xl font-bold tracking-tighter">fly.sharonx.eu is today’s product face. SharonX is the expansion layer.</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRAND_HIERARCHY.map((brand, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-[#0f172a]/50 border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-white/5 rounded border border-white/10 text-white/40">{brand.status}</span>
                      <Layers size={16} className="text-cyan-500/50" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{brand.title}</h3>
                    <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 italic">{brand.subtitle}</div>
                    <p className="text-white/40 text-sm leading-relaxed">{brand.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION 5 — Venture Studio Caps */}
          <section className="py-32 scroll-mt-32 border-t border-white/5">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400/50 mb-12">Product Capability Matrix</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VENTURE_CAPS.map((cap, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <div className="size-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
                    <cap.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{cap.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{cap.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 p-8 border border-white/5 rounded-[32px] bg-gradient-to-r from-transparent to-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="text-xl md:text-2xl font-medium tracking-tight text-white/80 italic">"The first product focus is practical: ship, test, sell, measure, and scale before expanding the narrative."</div>
            </div>
          </section>

          {/* SECTION 6 — Treasury */}
          <section className="py-32 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4">Economic Backbone</h2>
                <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">Central treasury. Controlled payout. Venture-based accountability.</div>
                <p className="text-white/50 text-lg mb-12">Revenue should not be scattered across informal arrangements. Each product maintains operational responsibility, while the economic backbone remains visible and controlled.</p>
                
                <div className="space-y-4">
                  {["Central Treasury", "Controlled Payout", "Venture-Based Entitlement"].map(item => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="size-3 bg-cyan-500 rounded-full" />
                      <span className="font-bold tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 border border-white/10 bg-white/5 rounded-[40px] relative overflow-hidden">
                <div className="flex flex-col gap-10 relative z-10">
                  <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-cyan-400" />
                      <div className="font-bold">Customer</div>
                    </div>
                    <ArrowRight size={20} className="text-white/20" />
                    <div className="font-bold text-white/40">Product Revenue</div>
                  </div>
                  
                  <div className="flex justify-center flex-col items-center">
                    <div className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl text-sm italic">Soolx Payment Infrastructure</div>
                    <ArrowRight size={24} className="rotate-90 my-2 text-white/20" />
                    <div className="px-6 py-4 bg-white text-black font-bold rounded-2xl text-md flex items-center gap-3">
                      <Building2 size={20} /> Vecna Global Treasury
                    </div>
                    <ArrowRight size={24} className="rotate-90 my-2 text-white/20" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                      <div className="text-xs font-bold text-white/60">Founders</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                      <div className="text-xs font-bold text-white/60">Builders</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </section>

          {/* SECTION 7 — Team */}
          <section id="team" className="py-32 scroll-mt-32 border-t border-white/5">
            <div className="mb-20">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4">Founder & Execution Board</h2>
              <div className="text-4xl md:text-6xl font-bold tracking-tighter">A founder table designed for execution, <br/>not title inflation.</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUNDERS.map((founder, i) => (
                <motion.div 
                   key={i} 
                   whileHover={{ y: -10 }}
                   className="p-8 bg-white/5 border border-white/10 rounded-3xl group"
                >
                  <div className="size-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <founder.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-1 tracking-tight">{founder.name}</h3>
                  <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{founder.role}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{founder.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-12 text-white/30 text-sm italic max-w-2xl">“The value for investors and partners is role clarity, documented incentives, measurable execution, and disciplined decision-making.”</p>
          </section>

          {/* SECTION 8 — Governance */}
          <section id="governance" className="py-32 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4">Governance Framework</h2>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">Trust becomes scalable only when it is written.</div>
                <button onClick={() => setIsContactModalOpen(true)} className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                  Request Governance Brief <ChevronRight size={16} />
                </button>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {GOVERNANCE.map((item, i) => (
                  <div key={i} className="p-8 bg-[#0f172a] border border-white/5 rounded-3xl flex gap-6 items-start">
                    <div className="p-3 bg-white/5 rounded-xl text-cyan-400"><item.icon size={20} /></div>
                    <div>
                      <h4 className="font-bold mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 9 — Builder Network */}
          <section className="py-32 scroll-mt-32 border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-20">
              <div className="flex-1">
                <h3 className="text-4xl font-bold tracking-tighter mb-6">A focused builder network for execution quality.</h3>
                <p className="text-white/40 leading-relaxed mb-10">The audience layer is not vanity. It is used for demand testing, message validation, early access, and distribution leverage.</p>
                
                <div className="space-y-2">
                  {["Founder Core", "Execution Companies", "Founding Builders", "Active Builder Network", "Partners & Stakeholders", "Audience Layer"].map((tier, i) => (
                     <div key={i} className="flex justify-between items-center p-4 bg-white/5 border-l-2 border-cyan-500/20 hover:border-cyan-500 transition-all">
                        <span className="font-bold text-sm">{tier}</span>
                        <div className="size-1.5 rounded-full bg-cyan-500/30" />
                     </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent p-12 rounded-[40px] border border-white/10 flex flex-col justify-center items-center text-center">
                 <Globe className="text-cyan-500 size-16 mb-8 opacity-50" />
                 <div className="text-2xl font-bold italic tracking-tight">"Not a public community. Controlled execution capacity."</div>
              </div>
            </div>
          </section>

          {/* SECTION 10 — Roadmap */}
          <section className="py-32 scroll-mt-32 border-t border-white/5">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-12">First 30 Days Milestone</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {ROADMAP.map((item, i) => (
                <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl group overflow-hidden">
                  <div className="text-[40px] font-black text-white/5 absolute top-2 right-2 group-hover:text-cyan-500/10 transition-colors leading-none">{item.step}</div>
                  <h4 className="font-bold text-sm mb-3 relative z-10">{item.title}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center text-white/30 text-xs font-bold uppercase tracking-widest italic">Signal Detection & Activation Phase</div>
          </section>

          {/* SECTION 11 — Investment */}
          <section className="py-32 scroll-mt-32 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INVESTMENT_WHY.map((item, i) => (
                <div key={i} className="p-10 border border-white/5 bg-[#0f172a] rounded-[40px]">
                  <h3 className="text-2xl font-bold mb-6 tracking-tight text-cyan-400">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 12 — Final CTA */}
          <section className="py-40 text-center">
            <motion.div 
               whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
               className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Request a private venture architecture briefing.</h2>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-3 px-12 py-6 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 transition-all shadow-[0_20px_50px_rgba(6,182,212,0.3)]"
              >
                Access Protocol <ArrowRight size={24} />
              </button>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/50 backdrop-blur-3xl">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <PromptHeart />
            <span className="font-bold tracking-tight text-white/80">Vecna Global B.V.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {NAV_LINKS.map(item => (
              <a key={item.id} href={`#${item.id}`} className="text-[10px] font-black text-white/30 hover:text-cyan-400 transition-colors uppercase tracking-[0.3em] italic">{item.name}</a>
            ))}
          </div>
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
            © 2026 Strategic Orchestration OS
          </div>
        </div>
      </footer>
    </div>
  );
}
