import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- Analytics Tracking Utility (Mockup) ---
const trackEvent = (eventName, data = {}) => {
  console.log(`[Analytics] Event: ${eventName}`, data);
  // In a real app, this is where you'd call Mixpanel, PostHog, or Google Analytics
  // e.g. window.gtag('event', eventName, data);
};


// --- Hardcoded Futuristic SVGs ---
const NeuralNodeIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg>;
const BioWaveIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12h4l3-9 5 18 3-9h5" /></svg>;
const EyeScannerIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /><path d="M12 3v2" /><path d="M12 19v2" /><path d="M4 4l1.5 1.5" /><path d="M18.5 18.5L20 20" /><path d="M4 20l1.5-1.5" /><path d="M18.5 5.5L20 4" /></svg>;
const CpuIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>;
const ChevronRightIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>;

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [glitchText, setGlitchText] = useState("Dopamine Exhaustion Detected.");
  const [activeModule, setActiveModule] = useState('predictive');
  const [isHoveringEye, setIsHoveringEye] = useState(false);

  // Scroll animations setup
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [0.2, 0.05]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Futuristic typing/glitch effect simulator
  useEffect(() => {
    const phrases = [
      "Cortisol Spiking.",
      "Bandwidth Depleted.",
      "Initiating Neural Reset.",
      "Dopamine Exhaustion Detected."
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % phrases.length;
      setGlitchText(phrases[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });

  const handleAcquireKey = (location) => {
    trackEvent('acquire_key_clicked', { location });
    window.location.href = "https://amanp69.gumroad.com/l/oasisos";
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-mono selection:bg-cyan-900 selection:text-cyan-100 overflow-x-hidden">

      {/* HUD Background Effects */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[150px]"></div>
      </motion.div>

      {/* Cybernetic Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-cyan-900/50 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NeuralNodeIcon className="w-6 h-6 text-cyan-400" />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">OASIS_NEURAL_FW_V1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400">System Online</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full overflow-hidden">

        {/* TERMINAL HERO SECTION */}
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: The Vision Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 mb-8">
                <BioWaveIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">Biometric Readiness: Standby</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold tracking-tighter text-white mb-6 leading-[1.05]">
                You don't need an app blocker. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  You need a Neural Firewall.
                </span>
              </h1>

              <p className="text-lg font-sans text-zinc-400 font-light leading-relaxed mb-10 max-w-xl">
                The era of relying on "willpower" to fight supercomputers is over. Oasis is a predictive cognitive layer for your devices. It intercepts algorithmic manipulation, deflates chemical cravings, and actively restores your brain's baseline bandwidth.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleAcquireKey('hero_section')}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-sans font-bold uppercase tracking-wide transition-all shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Initialize Interface
                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_forwards]"></div>
                </button>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-sans font-bold text-white">Founder's Key: $29</span>
                  <span className="text-xs text-zinc-500">Fund the future of cognition.</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Futuristic HUD Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full aspect-square md:aspect-[4/3] border border-cyan-900/50 bg-[#050508] p-1 flex flex-col shadow-[0_0_50px_rgba(0,255,255,0.05)] group/hud"
            >
              {/* HUD Frame Decorators */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

              {/* Scanning Line Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 blur-[2px] animate-[scan_3s_ease-in-out_infinite]"></div>

              <div className="flex-1 bg-black p-6 flex flex-col justify-between overflow-hidden relative">

                {/* HUD Header */}
                <div className="flex justify-between items-start mb-8 border-b border-cyan-900/50 pb-4">
                  <div>
                    <div className="text-[10px] text-cyan-500 tracking-widest uppercase mb-1">Subject Status</div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={glitchText}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-white"
                      >
                        {glitchText}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <CpuIcon className="w-6 h-6 text-cyan-400 opacity-50" />
                </div>

                {/* Central "Eye" / Node */}
                <div
                  className="flex-1 flex items-center justify-center relative perspective-1000"
                  onMouseEnter={() => setIsHoveringEye(true)}
                  onMouseLeave={() => setIsHoveringEye(false)}
                >
                  <motion.div
                    animate={{ rotateZ: isHoveringEye ? 360 : 0 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 border border-cyan-900/40 rounded-full"
                  />
                  <motion.div
                    animate={{ rotateZ: isHoveringEye ? -360 : 0 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border border-dashed border-cyan-800/60 rounded-full"
                  />

                  <motion.div
                    animate={{ scale: isHoveringEye ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-32 h-32 rounded-full bg-cyan-900/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.1)] group-hover/hud:shadow-[0_0_60px_rgba(0,255,255,0.2)] transition-shadow duration-500"
                  >
                    <EyeScannerIcon className={`w-12 h-12 text-cyan-400 transition-all duration-300 ${isHoveringEye ? 'scale-110' : ''}`} />
                  </motion.div>
                </div>

                {/* System Diagnostics */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="border border-cyan-900/30 bg-cyan-900/10 p-3 group-hover/hud:border-cyan-500/30 transition-colors duration-500">
                    <div className="text-[9px] text-cyan-500 uppercase tracking-widest mb-1">Dopamine Baseline</div>
                    <div className="text-xl text-white font-light">CRITICAL</div>
                    <div className="w-full bg-cyan-950 h-1 mt-2 overflow-hidden"><motion.div initial={{ width: "0%" }} animate={{ width: "25%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-rose-500"></motion.div></div>
                  </div>
                  <div className="border border-cyan-900/30 bg-cyan-900/10 p-3 group-hover/hud:border-cyan-500/30 transition-colors duration-500">
                    <div className="text-[9px] text-cyan-500 uppercase tracking-widest mb-1">Algorithmic Shield</div>
                    <div className="text-xl text-white font-light">ENGAGED</div>
                    <div className="w-full bg-cyan-950 h-1 mt-2 overflow-hidden"><motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.7 }} className="h-full bg-cyan-500"></motion.div></div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* THE MASTER PLAN (Vision Pitch) */}
        <section className="py-24 border-y border-zinc-900 bg-[#030303] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6"
          >
            <div className="mb-16">
              <h2 className="text-xs text-cyan-500 tracking-[0.3em] uppercase mb-4">The Blueprint</h2>
              <h3 className="text-3xl md:text-4xl font-sans font-bold text-white leading-tight">We are building the software layer for human cognitive enhancement.</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-900/50 before:to-transparent">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-black text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,255,255,0.2)] z-10 transition-transform group-hover:scale-110">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group-hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-lg font-sans font-bold text-white mb-2">Phase 1: The OS Layer (Current)</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">A mobile app that acts as a middleware firewall. It uses algorithmic friction, Strict Mode, and grayscale degradation to physically sever dopamine loops created by doomscrolling and chemical cravings.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-black text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-zinc-950/50 border border-zinc-900 backdrop-blur-sm opacity-50 hover:opacity-100 transition-opacity">
                  <h4 className="text-lg font-sans font-bold text-white mb-2">Phase 2: Predictive Biometrics</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">Integration with Apple Watch and Oura. Oasis will monitor Heart Rate Variability (HRV) to detect stress spikes and chemical cravings *before* you reach for a vape or a feed, pre-emptively locking distracting vectors.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-black text-zinc-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-zinc-950/50 border border-zinc-900 backdrop-blur-sm opacity-50 hover:opacity-100 transition-opacity">
                  <h4 className="text-lg font-sans font-bold text-white mb-2">Phase 3: Environmental BCI</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">Software integration into AR glasses and audio wearables to dynamically filter visual and auditory reality based on your real-time cognitive bandwidth and focus requirements.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* FUTURISTIC FEATURE SELECTOR */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">

            {/* Nav */}
            <div className="md:col-span-4 space-y-2 border-l border-zinc-900 pl-4">
              <button onClick={() => setActiveModule('predictive')} className={`w-full text-left py-4 px-4 transition-all ${activeModule === 'predictive' ? 'border-l-2 border-cyan-500 text-white bg-cyan-900/10' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <div className="text-[10px] uppercase tracking-widest mb-1">Module 01</div>
                <div className="font-sans font-bold">Predictive Interception</div>
              </button>
              <button onClick={() => setActiveModule('chemical')} className={`w-full text-left py-4 px-4 transition-all ${activeModule === 'chemical' ? 'border-l-2 border-rose-500 text-white bg-rose-900/10' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <div className="text-[10px] uppercase tracking-widest mb-1">Module 02</div>
                <div className="font-sans font-bold">Chemical Craving Deflection</div>
              </button>
              <button onClick={() => setActiveModule('bandwidth')} className={`w-full text-left py-4 px-4 transition-all ${activeModule === 'bandwidth' ? 'border-l-2 border-violet-500 text-white bg-violet-900/10' : 'text-zinc-500 hover:text-zinc-300'}`}>
                <div className="text-[10px] uppercase tracking-widest mb-1">Module 03</div>
                <div className="font-sans font-bold">Bandwidth Allocation (Strict Mode)</div>
              </button>
            </div>

            {/* Display */}
            <div className="md:col-span-8 bg-[#050508] border border-zinc-900 p-8 md:p-12 relative overflow-hidden min-h-[400px]">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {activeModule === 'predictive' && (
                  <motion.div
                    key="predictive"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <EyeScannerIcon className="w-10 h-10 text-cyan-400 mb-6" />
                    <h3 className="text-3xl font-sans font-bold text-white mb-4">Algorithmic Friction</h3>
                    <p className="text-lg font-sans text-zinc-400 leading-relaxed mb-6">
                      Algorithms operate in milliseconds. Human willpower takes seconds. Oasis bridges the gap. When you initiate an action born from dopamine depletion (e.g., opening TikTok), the OS catches the command and forces a system pause.
                    </p>
                    <p className="font-sans text-sm text-zinc-500">
                      By enforcing a 15-second neural-reset visualizer, we allow the prefrontal cortex to override the amygdala's impulse.
                    </p>
                  </motion.div>
                )}

                {activeModule === 'chemical' && (
                  <motion.div
                    key="chemical"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <BioWaveIcon className="w-10 h-10 text-rose-400 mb-6" />
                    <h3 className="text-3xl font-sans font-bold text-white mb-4">Urge Surfing Protocol</h3>
                    <p className="text-lg font-sans text-zinc-400 leading-relaxed mb-6">
                      A biological craving (Nicotine, THC, Alcohol) peaks and fades within 180 seconds. The Oasis "Panic Protocol" is a 3-minute, high-intensity interactive sequence designed to flood your working memory and occupy your hands.
                    </p>
                    <p className="font-sans text-sm text-zinc-500">
                      It hijacks the brain's processing power, leaving zero bandwidth for the craving to manifest into a physical action.
                    </p>
                  </motion.div>
                )}

                {activeModule === 'bandwidth' && (
                  <motion.div
                    key="bandwidth"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <CpuIcon className="w-10 h-10 text-violet-400 mb-6" />
                    <h3 className="text-3xl font-sans font-bold text-white mb-4">Unbypassable Allocation</h3>
                    <p className="text-lg font-sans text-zinc-400 leading-relaxed mb-6">
                      When you must enter deep work, your environment must be uncompromising. Standard blockers offer an "Ignore for 15 minutes" button. Oasis removes the UI entirely.
                    </p>
                    <p className="font-sans text-sm text-zinc-500">
                      When Bandwidth Allocation is active, your smartphone reverts to a purely functional state. Distraction vectors are cryptographically locked until the timer expires.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* PRICING (The Investment) */}
        <section id="pricing" className="py-32 px-6 border-t border-zinc-900 bg-[#000000] relative">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-sans font-bold text-white mb-6">Become a Founding Node.</h2>
              <p className="text-lg font-sans text-zinc-400 max-w-xl mx-auto">By funding Phase 1, you secure lifetime access to the software layer as we build toward the future of cognitive enhancement.</p>
            </div>

            <div className="bg-gradient-to-b from-cyan-900/50 to-transparent p-[1px] rounded-sm">
              <div className="bg-[#050508] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-cyan-500/30">
                    Lifetime License
                  </div>
                  <h3 className="text-3xl font-sans font-bold text-white mb-4">Oasis OS: Phase 1</h3>
                  <p className="text-zinc-400 font-sans text-sm mb-8">Secure the full neural firewall before our public launch shifts to a $60/year subscription architecture.</p>

                  <ul className="space-y-4 font-sans text-sm">
                    <li className="flex items-center gap-3 text-zinc-300">
                      <NeuralNodeIcon className="w-4 h-4 text-cyan-500" /> Full Access to Interception Modules
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <NeuralNodeIcon className="w-4 h-4 text-cyan-500" /> The "Urge Surfer" Panic Protocol
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <NeuralNodeIcon className="w-4 h-4 text-cyan-500" /> Biometric Update Compatibility (Phase 2)
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <NeuralNodeIcon className="w-4 h-4 text-cyan-500" /> Native iOS & Android Architecture
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-auto bg-[#020202] border border-cyan-900/50 p-8 text-center relative overflow-hidden">
                  {/* Decorator */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/50"></div>

                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Initialization Fee</div>
                  <div className="flex justify-center items-start gap-1 mb-8">
                    <span className="text-xl font-bold text-cyan-500 mt-2">$</span>
                    <span className="text-6xl font-sans font-extrabold text-white tracking-tighter">29</span>
                  </div>

                  <button onClick={() => handleAcquireKey('checkout_section')} className="group relative w-full py-4 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-sans font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] mb-4 overflow-hidden">
                    <span className="relative z-10">Acquire Key</span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_forwards]"></div>
                  </button>

                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Limit: 50 Founding Nodes
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-600 text-[10px] uppercase tracking-widest flex flex-col items-center gap-4">
        <NeuralNodeIcon className="w-6 h-6 opacity-50" />
        <p>Oasis Neural Firewall. Protecting Human Bandwidth.</p>
      </footer>

    </div >
  );
}