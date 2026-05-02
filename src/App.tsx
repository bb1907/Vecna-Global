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
  Briefcase
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "What We Do", id: "what-we-do", dropdown: ["Private Equity", "Private Credit", "Infrastructure"] },
  { name: "Who We Serve", id: "who-we-serve", dropdown: ["Institutional Investors", "Private Wealth"] },
  { name: "Services", id: "services", dropdown: ["Technology", "Investment", "Finance", "Education", "Consulting"] },
  { name: "Network", id: "network" }
];

const WHAT_WE_DO = [
  {
    title: "Private Equity",
    description: "Focusing on mid-market growth companies through secondary, primary and co-investment strategies.",
    features: ["Secondary Portfolio Acquisitions", "Primary Fund Commitments", "Direct Co-investments"]
  },
  {
    title: "Private Credit",
    description: "Providing diversified senior and junior debt solutions to mid-market private equity-backed companies.",
    features: ["Senior Secured Loans", "Mezzanine Financing", "Direct Lending"]
  },
  {
    title: "Infrastructure",
    description: "Direct investments in long-term, stable assets with essential service characteristics.",
    features: ["Energy Transition", "Digital Infrastructure", "Transportation Nodes"]
  }
];

const WHO_WE_SERVE = [
  {
    title: "Institutional Investors",
    description: "Partnering with pension funds, endowments, and insurance companies globally to meet long-term yield objectives.",
    icon: Building2
  },
  {
    title: "Private Wealth",
    description: "Providing high-net-worth individuals and family offices with institutional-quality access to private markets.",
    icon: Briefcase
  }
];

const STATS = [
  { label: "Track Record", value: "25+", unit: "Years", subtext: "Continuous Market Dominance" },
  { label: "Capital Management", value: "$2B+", unit: "Managed", subtext: "Precision Liquid Assets" },
  { label: "Operations", value: "GLOBAL", unit: "Reach", subtext: "Multi-Node Distribution" },
];

const SECTORS = [
  {
    title: "Technology",
    icon: Cpu,
    description: "Pioneering semiconductors and advanced AI systems that form the backbone of modern computation.",
    cta: "INITIATE ACCESS"
  },
  {
    title: "Investment",
    icon: Coins,
    description: "Strategic capital deployment aimed at hyper-scaling deep-tech infrastructure and research labs.",
    cta: "VIEW PORTFOLIO"
  },
  {
    title: "Finance",
    icon: LineChart,
    description: "Executing high-frequency algorithmic trading strategies with precision risk-mitigation protocols.",
    cta: "DATA STREAMS"
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Empowering the next generation of innovators through advanced learning platforms and data-driven education.",
    cta: "LEARN MORE"
  },
  {
    title: "Consulting",
    icon: Briefcase,
    description: "Enterprise-grade strategic advisory services focused on digital transformation and operational excellence.",
    cta: "CONSULT NOW"
  }
];

const PILLARS = [
  {
    id: "network",
    title: "Network Infrastructure",
    description: "Our proprietary global mesh network operates across 42 sovereign nodes, providing ultra-low latency data transmission and failsafe redundancy for mission-critical operations.",
    features: ["Quantum Mesh Topology", "Self-Healing Protocols", "Sovereign Node Isolation"]
  },
  {
    id: "compliance",
    title: "Institutional Compliance",
    description: "Vecna Global adheres to the highest tier of international regulatory frameworks, ensuring complete legal transparency and institutional-grade accountability in every jurisdiction.",
    features: ["Global AML/KYC Sync", "Real-time Auditing", "Cross-Border Tax Logic"]
  },
  {
    id: "security",
    title: "Security & Encryption",
    description: "Security is built into the silicon level. We utilize post-quantum cryptographic standards and hardware-isolated security modules (HSM) to protect institutional assets.",
    features: ["Post-Quantum RSA", "Hardware Isolation", "Zero-Knowledge Proofs"]
  },
  {
    id: "privacy",
    title: "Zero-Trust Privacy",
    description: "Anonymity is a fundamental protocol. Our ecosystem utilizes stealth-addressing and decoupled identity layers to ensure that user privacy remains absolute and untraceable.",
    features: ["Decoupled Identity", "Signature Masking", "Ephemeral Data Logs"]
  }
];

const PromptHeart = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-yellow">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
  </svg>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Message received. Our orchestration team will verify your credentials.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-white/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] w-full max-w-xl bg-white border border-black/5 shadow-2xl p-8 md:p-12 rounded-[32px]"
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-2">Connect</h2>
                <p className="text-black/50">Establish a secure line with our global nodes.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Email Protocol</label>
                  <input 
                    required
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Inquiry Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Portfolio, Partnership, Investment..."
                  className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Communication</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Briefly state your orchestrational goal"
                  className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button className="w-full bg-black text-white py-5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-black/90 transition-all active:scale-[0.98]">
                Initiate Transmission <Send size={18} />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const MAP_NODES = [
  { id: "edtech", name: "Edtech Hub", top: "35%", left: "48%", status: "Active", latency: "12ms", sector: "Education" },
  { id: "ai", name: "AI Node", top: "32%", left: "25%", status: "Live", latency: "8ms", sector: "AI/ML" },
  { id: "soolx", name: "Soolx Cluster", top: "45%", left: "75%", status: "Synced", latency: "45ms", sector: "Web3" },
  { id: "consult", name: "Consulting HQ", top: "38%", left: "52%", status: "Live", latency: "14ms", sector: "Enterprise" },
  { id: "tech", name: "Technology Forge", top: "60%", left: "35%", status: "Online", latency: "22ms", sector: "R&D" },
];

const NetworkMapModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#050506] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 z-20 bg-black/80 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Crosshair className="text-primary-yellow size-6 animate-pulse" />
                <div className="absolute inset-0 bg-primary-yellow/20 blur-xl rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white uppercase italic leading-none">Global Connectivity Matrix</h2>
                <div className="flex gap-4 mt-2 text-[9px] font-black text-white/30 tracking-[0.3em] uppercase">
                  <span className="flex items-center gap-1.5"><div className="size-1 bg-primary-yellow rounded-full animate-blink" /> Live Status: Active</span>
                  <span>Encryption: Quantum-RSA</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="group p-3 bg-white/5 hover:bg-primary-yellow rounded-full transition-all text-white hover:text-black border border-white/10"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row relative">
            {/* Sidebar List for quick access */}
            <div className="w-full lg:w-80 border-r border-white/5 bg-black/40 backdrop-blur-xl p-8 z-20 overflow-y-auto max-h-[30vh] lg:max-h-none">
              <div className="text-[10px] font-black text-primary-yellow/50 uppercase tracking-[0.3em] mb-8">Active Protocols</div>
              <div className="flex flex-col gap-3">
                {MAP_NODES.map((node) => (
                  <button
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                      selectedNode === node.id 
                        ? "bg-primary-yellow/10 border-primary-yellow text-white" 
                        : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold tracking-widest uppercase">{node.name}</span>
                      <Activity size={12} className={selectedNode === node.id ? "text-primary-yellow" : "opacity-20"} />
                    </div>
                    <div className="text-[9px] font-medium text-white/40 uppercase tracking-tighter">{node.sector} • {node.latency}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Map Area */}
            <div className="relative flex-1 bg-[#020203] overflow-hidden group/map">
              {/* Background Grid */}
              <div className="absolute inset-0 neural-grid opacity-20" />
              
              {/* Interactive World Map */}
              <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-24">
                <div className="relative w-full h-full max-w-6xl aspect-[2/1] transition-transform duration-1000 ease-out flex items-center justify-center">
                  
                  {/* The Map Image - Optimized Visibility */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx5Jhk4dKn8zODOPAsEByqjr4HdyaEtJPz7pI272h0jZhEkwXrVeQrAiDT8yEJ_FW5XE62UeTMHDYU6bYSbRa-4VS2KsitkJz4pzQ6yujykDeYLgDXkLktTUrWFl6A8GwJkfsIjHEL4Ywn8be3VnrDC6nBLemOPhre2aN6TU_nlvO2yiI__oHVUIoeXhFRZgDSQVF5AEygUt6MoGnSNPYq8B_ALhTMcgPALJQAjHG2-yAWoMNl_ZlueDvqOiJfnyNfjx-XDOzfD-4" 
                      alt="Matrix Map" 
                      className="w-full h-full object-contain invert opacity-40 brightness-150 contrast-125 saturate-0"
                    />
                    {/* Dark gradient to fade edges of map image container if necessary */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,5,6,1)_100%)]" />
                  </div>

                  {/* Hotspots */}
                  {MAP_NODES.map((node) => (
                    <div
                      key={node.id}
                      className="absolute z-30"
                      style={{ top: node.top, left: node.left }}
                    >
                      <button
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                        className="relative group/node"
                      >
                        {/* Interactive Rings */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.4, 0.1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -inset-8 bg-primary-yellow rounded-full z-0" 
                        />
                        <div className={`absolute -inset-4 border-2 rounded-full transition-all duration-500 z-0 ${
                          (hoveredNode === node.id || selectedNode === node.id) 
                            ? "border-primary-yellow scale-110 opacity-100" 
                            : "border-primary-yellow/20 scale-100 opacity-40 animate-pulse"
                        }`} />
                        
                        {/* Core Point */}
                        <div className={`size-4 rounded-full border-2 border-black relative z-10 transition-all duration-300 ${
                          (hoveredNode === node.id || selectedNode === node.id)
                            ? "bg-primary-yellow scale-125 shadow-[0_0_20px_rgba(255,236,0,0.8)]"
                            : "bg-primary-yellow/50 scale-100 shadow-[0_0_10px_rgba(255,236,0,0.3)]"
                        }`} />

                        {/* Floating Tooltip - Only show on hover or select, with dynamic placement logic if needed (simplified here) */}
                        <AnimatePresence>
                          {(hoveredNode === node.id || selectedNode === node.id) && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 z-50 whitespace-nowrap pointer-events-none"
                            >
                              <div className="bg-black/95 border border-primary-yellow/40 p-5 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl min-w-[200px]">
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <div className="text-[9px] font-black text-primary-yellow uppercase tracking-[0.2em] mb-0.5">{node.status}</div>
                                    <div className="text-sm font-bold text-white tracking-widest uppercase">{node.name}</div>
                                  </div>
                                  <div className="size-8 bg-white/5 rounded-xl flex items-center justify-center">
                                    <Activity size={14} className="text-primary-yellow" />
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                                  <div>
                                    <div className="text-[8px] text-white/30 font-bold uppercase mb-1">Latency</div>
                                    <div className="text-[11px] text-white font-mono">{node.latency}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[8px] text-white/30 font-bold uppercase mb-1">Secure</div>
                                    <div className="text-[11px] text-primary-yellow font-mono">ENCRYPTED</div>
                                  </div>
                                </div>
                              </div>
                              {/* Pointer */}
                              <div className="w-4 h-4 bg-black/95 border-r border-b border-primary-yellow/40 rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2 z-40" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* HUD Overlays - Better positioned */}
              <div className="absolute bottom-12 right-12 flex flex-col gap-4 items-end z-20">
                <div className="p-6 bg-black/80 border border-white/5 rounded-[32px] backdrop-blur-2xl shadow-2xl min-w-[240px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-2 bg-primary-yellow rounded-full animate-blink" />
                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Operational Index</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] mb-1.5 font-bold uppercase tracking-widest">
                        <span className="text-white/40">Sync Rate</span>
                        <span className="text-primary-yellow italic">99.98%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "99.98%" }}
                          className="h-full bg-primary-yellow"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] mb-1.5 font-bold uppercase tracking-widest">
                        <span className="text-white/40">Network Load</span>
                        <span className="text-white">Active</span>
                      </div>
                      <div className="text-xl font-bold text-white tracking-tighter italic">1.2 TB/s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNetworkMapOpen, setIsNetworkMapOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] selection-yellow overflow-x-hidden text-[#1d1d1f]">
      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <NetworkMapModal
        isOpen={isNetworkMapOpen}
        onClose={() => setIsNetworkMapOpen(false)}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1000px] mx-auto px-5 lg:px-0 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState("", document.title, window.location.pathname + window.location.search);
            }}
          >
            <PromptHeart />
            <div className="text-xl font-bold tracking-tight">
              Vecna Global
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <div 
                key={link.id}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.id)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    if (link.id === 'home') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.history.pushState("", document.title, window.location.pathname + window.location.search);
                    }
                  }}
                  className="text-sm font-medium text-black/50 hover:text-black transition-colors flex items-center gap-1 py-2"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronRight size={14} className={`transform transition-transform ${activeDropdown === link.id ? 'rotate-90' : ''}`} />
                  )}
                </a>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white border border-black/5 shadow-xl rounded-2xl p-2 z-[60]"
                      >
                        {link.dropdown.map(item => (
                          <a 
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-3 text-sm font-medium text-black/50 hover:text-black hover:bg-black/5 rounded-xl transition-all"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-black text-white px-5 py-2.5 text-sm font-medium rounded-full hover:bg-black/80 transition-all ml-4"
            >
              Invest Now
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map(link => (
              <div key={link.id} className="flex flex-col gap-4">
                <div className="text-sm font-bold uppercase tracking-widest text-black/30">
                  {link.name}
                </div>
                {link.dropdown ? (
                  <div className="flex flex-col gap-4 pl-4 border-l border-black/5">
                    {link.dropdown.map(item => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-2xl font-semibold text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a 
                    href={`#${link.id}`}
                    className="text-2xl font-semibold text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }}
              className="w-full bg-black text-white py-5 text-lg font-semibold rounded-2xl shadow-lg mt-4"
            >
              Invest Now
            </button>
          </div>
        </motion.div>
      )}

      <main className="relative pt-32 md:pt-48">
        {/* Abstract Background Top */}
        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,236,0,0.15),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-5 lg:px-0 flex flex-col gap-24 md:gap-40 items-center">
          {/* Hero Section */}
          <section className="w-full text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm uppercase tracking-widest font-medium text-black/40 mb-8"
            >
              Strategic Orchestration
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[72px] font-semibold leading-[1.1] tracking-[-0.04em] mb-12"
            >
              <span className="text-black">Vecna Global:</span><br />
              <span className="text-[#86868b]">Orchestrating the Future</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[22px] md:text-[32px] font-normal tracking-[-0.02em] leading-[1.3] text-[#86868b] max-w-3xl"
            >
              <strong className="text-black font-normal">Scaling deep-tech ventures with precision-engineered capital and institutional-grade infrastructure.</strong> Matched by stage, sector, and geography across the digital horizon.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-16"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/90 transition-all flex items-center justify-center gap-2"
              >
                Enter Protocol <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setIsNetworkMapOpen(true)}
                className="bg-white border border-black/10 text-black px-8 py-4 rounded-full font-medium hover:bg-black/5 transition-all"
              >
                View Network Map
              </button>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="text-[48px] md:text-[80px] font-normal tracking-[-0.04em] leading-none text-black">
                  {stat.value}
                </div>
                <div className="text-base font-normal leading-relaxed text-black/60">
                  <span className="text-black font-medium">{stat.unit}</span> — {stat.subtext}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Ecosystem Sectors */}
          <section id="services" className="w-full scroll-mt-32">
            <h2 className="text-xs md:text-sm uppercase tracking-widest font-medium text-black/40 mb-12">
              Ecosystem Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SECTORS.map((sector, idx) => (
                <motion.div
                  key={idx}
                  id={sector.title.toLowerCase()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-[#f5f5f5] rounded-[32px] flex flex-col gap-8 group scroll-mt-32"
                >
                  <div className="size-12 bg-black rounded-2xl flex items-center justify-center text-white">
                    <sector.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{sector.title}</h3>
                    <p className="text-lg text-black/50 leading-relaxed mb-8">{sector.description}</p>
                  </div>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-fit inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/5 text-sm font-medium hover:bg-black hover:text-white transition-all"
                  >
                    {sector.cta} <ChevronRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* What We Do */}
          <section id="what-we-do" className="w-full scroll-mt-32">
            <h2 className="text-xs md:text-sm uppercase tracking-widest font-medium text-black/40 mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {WHAT_WE_DO.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-white border border-black/5 rounded-[32px] flex flex-col gap-6 hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-black/50 leading-relaxed">{item.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {item.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/40">
                        <div className="size-1.5 bg-primary-yellow rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Who We Serve */}
          <section id="who-we-serve" className="w-full scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-xs md:text-sm uppercase tracking-widest font-medium text-black/40 mb-6">
                  Who We Serve
                </h2>
                <h3 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-none mb-8">
                  Tailored solutions for <span className="text-primary-yellow italic">sophisticated</span> capital.
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                {WHO_WE_SERVE.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-[#f5f5f5] rounded-[32px] flex gap-6 items-start group hover:bg-black hover:text-white transition-all duration-500"
                  >
                    <div className="p-4 bg-white/10 rounded-2xl text-primary-yellow group-hover:bg-primary-yellow group-hover:text-black transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Structural Pillars */}
          <section className="w-full">
            <h2 className="text-xs md:text-sm uppercase tracking-widest font-medium text-black/40 mb-12">
              Structural Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  id={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border border-black/5 rounded-[32px] hover:bg-white hover:shadow-xl transition-all duration-500 scroll-mt-32"
                >
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-black/50 leading-relaxed mb-6">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.features.map(feature => (
                      <span key={feature} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-black/5 rounded-full text-black/40">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA / Final Section */}
          <section className="w-full pb-40">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-black text-white p-12 md:p-24 rounded-[48px] text-center flex flex-col items-center gap-10"
             >
               <h2 className="text-[32px] md:text-[56px] font-semibold leading-[1.2] tracking-[-0.04em] max-w-2xl">
                 Ready to orchestrate your position in the next generation?
               </h2>
               <p className="text-lg md:text-xl text-white/50 max-w-xl">
                 Secure your position in the next generation of technological dominance.
               </p>
               <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-black px-12 py-5 rounded-full text-lg font-semibold hover:bg-white/90 transition-all"
              >
                 Join the Network
               </button>
             </motion.div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <PromptHeart />
            <span className="font-bold">Vecna Global</span>
          </div>
          <div className="flex gap-8">
            {["What We Do", "Who We Serve", "Network", "Compliance", "Security", "Privacy"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-xs font-medium text-black/40 hover:text-black transition-colors uppercase tracking-widest">{item}</a>
            ))}
          </div>
          <div className="text-xs font-medium text-black/30 whitespace-nowrap">
            © 2024 VECNA GLOBAL. ALL SYSTEMS SECURED.
          </div>
        </div>
      </footer>
    </div>
  );
}

