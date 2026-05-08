import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { 
  Phone, FileText, MapPin, Star, X, PlayCircle, 
  ArrowRight, CheckCircle2, User, Mail, Building2, TreePine, Shield, Droplets, 
  Dumbbell, Music, Sun, Zap, Landmark, Car, Infinity, Layers, Wallet, Ruler, 
  PenTool, TrendingUp 
} from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// --- 1. MODAL COMPONENT ---
const CustomModal = ({ isOpen, close, title, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 relative shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full z-0" />
          <button 
            onClick={close} 
            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-50 transition z-10"
          >
            <X size={20}/>
          </button>
          <h3 className="text-2xl font-black text-[#1a4332] mb-4 uppercase tracking-tighter relative z-10 italic">{title}</h3>
          <div className="relative z-10">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const amenities = [
  "Planned & Beautifully Landscaped Community",
  "Integrated City with Modern Infrastructure",
  "24x7 Multi-Tier Security with Smart Surveillance",
  "Premium Clubhouse with Swimming Pool",
  "Indoor & Outdoor Sports Facilities",
  "Music-Enabled Common Areas",
  "Energy-Efficient Solar Street Lighting",
  "Reliable Power Backup",
  "Banking & ATM Facilities within Premises"
];

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);

  // --- REUSABLE FORM FIELDS ---
  const FormFields = () => (
    <div className="space-y-4">
      <div className="relative">
        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Full Name" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-green-600 outline-none transition" required />
      </div>
      <div className="relative">
        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="tel" placeholder="Mobile Number" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-green-600 outline-none transition" required />
      </div>
      <div className="relative">
        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="email" placeholder="Email Address" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-green-600 outline-none transition" required />
      </div>
      <div className="relative">
        <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="City" className="w-full p-4 pl-12 bg-slate-50 rounded-2xl border-none ring-1 ring-gray-100 focus:ring-2 focus:ring-green-600 outline-none transition" required />
      </div>
      <button className="w-full bg-[#1a4332] text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-black transition-all shadow-lg">Submit Request</button>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-[60] bg-white/80 backdrop-blur-md shadow-sm px-4 md:px-12 py-3 flex justify-between items-center">
        <img src="swiper/Glenwood name.webp" alt="Glenwood" className="h-10 md:h-14" />
        <div className="flex items-center gap-2 md:gap-5">
          <button onClick={() => setIsFormOpen(true)} className="hidden md:flex items-center gap-2 text-[#1a4332] font-bold text-xs uppercase tracking-widest hover:text-green-600 transition group">
            <FileText size={16} className="group-hover:animate-bounce" /> Brochure
          </button>
          <a href="tel:+91XXXXXXXXXX" className="bg-green-600 text-white p-2.5 rounded-full md:px-5 md:py-2.5 md:rounded-xl flex items-center gap-2 shadow-lg shadow-green-100">
            <Phone size={18} /> <span className="hidden md:inline font-bold uppercase text-xs">Call</span>
          </a>
          <button onClick={() => setIsFormOpen(true)} className="bg-[#1a4332] text-white px-5 py-2.5 rounded-xl font-bold uppercase text-xs hover:bg-black transition shadow-lg shadow-slate-200">
            Enquiry
          </button>
        </div>
      </nav>

      {/* --- MEDIUM LOGO SECTION --- */}
      <div className="mt-20 py-8 md:py-12 bg-white flex flex-col items-center justify-center text-center px-4">
          <motion.img 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            src="swiper/Glenwood name.webp" 
            className="w-56 md:w-80 h-auto object-contain mb-3" 
            alt="Glenwood Branding"
          />
          <div className="w-16 h-0.5 bg-green-600 rounded-full mb-3" />
          <p className="text-[#1a4332] font-black text-lg md:text-2xl uppercase tracking-[0.15em]">The Green City</p>
          <p className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest mt-1">DDJAY PLOTS • SEC-29, JHAJJAR</p>
      </div>

      {/* --- HERO / SWIPER --- */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <Swiper modules={[Autoplay, Pagination, EffectFade]} effect="fade" autoplay={{ delay: 1500 }} pagination={{ clickable: true }} className="h-full w-full">
          <SwiperSlide><img src="swiper/EntryGateHCBS.webp" className="w-full h-full object-cover" alt="Main Gate" /></SwiperSlide>
          <SwiperSlide><img src="swiper/BadmintonCourtViewHCBS.webp" className="w-full h-full object-cover" alt="Badminton" /></SwiperSlide>
          <SwiperSlide><img src="swiper/ClubHouseHCBS.webp" className="w-full h-full object-cover" alt="Club House" /></SwiperSlide>
          <SwiperSlide><img src="swiper/LandscapeViewHCBS.webp" className="w-full h-full object-cover" alt="Landscape" /></SwiperSlide>
          <SwiperSlide><img src="swiper/PavilionViewHCBS.webp" className="w-full h-full object-cover" alt="Pavilion View" /></SwiperSlide>
          <SwiperSlide><img src="swiper/PoolCamHCBS.webp" className="w-full h-full object-cover" alt="Pool Camera" /></SwiperSlide>
        </Swiper>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end items-center pb-12 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button onClick={() => setIsStoryOpen(true)} className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition-all">
              <PlayCircle size={24} /> <span className="font-bold uppercase text-sm">Our Brand Story</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- AMENITIES SECTION --- */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a4332] uppercase italic tracking-tighter">World-Class Amenities</h2>
            <div className="w-20 h-1.5 bg-green-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all">
                <div className="bg-green-600/10 p-2 rounded-xl shrink-0"><CheckCircle2 className="text-green-600" size={24} /></div>
                <span className="font-bold text-slate-700 text-sm md:text-base leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM VALUES SWIPER --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 px-5">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a4332] leading-tight">
              Crafting spaces that spark joy, one community, <br className="hidden md:block"/> 
              one family, one home at a time.
            </h2>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
            className="pb-16 value-swiper"
          >
            {[
              { t: "The Best of Both Worlds", d: "Impressive returns on plots + security & comfort of condominiums", i: <TrendingUp size={24}/>, img: "values/best world.avif" },
              { t: "Stilt + 4 Floors", d: "Construction of up to 4 floors allowed on each residential plot", i: <Layers size={24}/>, img: "values/stilt 4 floors.avif" },
              { t: "Maximum Flexibility", d: "Rent or Sell each floor separately with a separate floor registry", i: <Infinity size={24}/>, img: "values/max flexibility.avif"},
              { t: "Save More", d: "Zero GST Applicable on plots under the DDJAY scheme", i: <Wallet size={24}/>, img: "values/save more.avif" },
              { t: "Allowed FAR: 2.64*", d: "Get maximum construction area under the DDJAY scheme", i: <Ruler size={24}/>, img: "values/construction.avif"},
              { t: "Design Support", d: "Build your home with ease. Get support from our expert designers", i: <PenTool size={24}/>, img: "values/design support.avif" }
            ].map((val, idx) => (
              <SwiperSlide key={idx}>
                <motion.div whileHover={{ y: -10 }} className="relative h-[450px] rounded-[2rem] overflow-hidden group shadow-lg">
                  <img src={val.img} alt={val.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">{val.i}</div>
                    <h3 className="text-xl font-black uppercase italic leading-tight mb-3 tracking-tighter">{val.t}</h3>
                    <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{val.d}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- LOCATION --- */}
      <section className="py-24 bg-[#1a4332] text-white px-8">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-video">
            <img src="swiper/Screenshot 2026-05-07 125546.png" className="w-full h-full object-cover" alt="Map" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold mb-8 italic">Strategic Connectivity</h2>
            {[
              ["Jhajjar-Gurugram Highway", "00 Mins"], ["NH-352 Highway", "02 Mins"], 
              ["IIT Delhi Jhajjar", "10 Mins"], ["Reliance MET City", "20 Mins"], 
              ["AIIMS Jhajjar", "35 Mins"], ["Dwarka Expressway", "01 Hr"]
            ].map(([p, t], i) => (
              <div key={i} className="flex justify-between border-b border-white/10 pb-3 font-medium">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-green-400"/> {p}</span>
                <span className="text-green-400 font-bold">{t}</span>
              </div>
            ))}
            <button onClick={() => setIsWhoWeAreOpen(true)} className="mt-8 flex items-center gap-2 text-green-400 font-bold uppercase text-sm tracking-widest">Who We Are <ArrowRight size={18}/></button>
          </div>
        </div>
      </section>

      {/* --- STATIC FORM SECTION --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl grid md:grid-cols-2 gap-12 items-center border border-slate-100">
          <div>
            <h2 className="text-3xl font-black text-[#1a4332] mb-4 uppercase italic leading-tight">Book Your <br/>Dream Plot</h2>
            <p className="text-gray-500 mb-8">Fill in your details to receive the complete project kit including price list, layout plan, and brochure.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#1a4332] font-bold"><CheckCircle2 size={20} className="text-green-600"/> HRERA Approved</div>
              <div className="flex items-center gap-3 text-[#1a4332] font-bold"><CheckCircle2 size={20} className="text-green-600"/> Gated Community</div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}><FormFields /></form>
        </div>
      </section>

      {/* --- MODALS --- */}
      <CustomModal isOpen={isFormOpen} close={() => setIsFormOpen(false)} title="Enquiry Form">
        <form onSubmit={(e) => e.preventDefault()}><FormFields /></form>
      </CustomModal>

      <CustomModal isOpen={isStoryOpen} close={() => setIsStoryOpen(false)} title="Brand Story">
        <p className="text-gray-600 leading-relaxed text-lg">Glenwood Group is dedicated to creating eco-friendly residential spaces. Our 'Green City' project in Jhajjar offers DDJAY plots designed for sustainable living and high investment returns.</p>
      </CustomModal>

      <CustomModal isOpen={isWhoWeAreOpen} close={() => setIsWhoWeAreOpen(false)} title="About HCBS">
        <p className="text-gray-600 leading-relaxed text-lg">HCBS Developments is a trusted name in Haryana real estate, specializing in affordable housing and prime plotting under the Deen Dayal Jan Awas Yojna.</p>
      </CustomModal>

      {/* --- FLOATING BROCHURE --- */}
      <div className="fixed bottom-10 right-10 z-[50]">
        <button onClick={() => setIsFormOpen(true)} className="bg-orange-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce group transition-all hover:w-48 overflow-hidden">
          <FileText size={28} className="shrink-0" />
          <span className="hidden group-hover:inline ml-2 font-bold whitespace-nowrap text-xs tracking-tighter">DOWNLOAD BROCHURE</span>
        </button>
      </div>

     {/* --- ULTRA-PREMIUM COLLABORATION HUB --- */}
<section className="py-28 bg-white relative overflow-hidden">
  {/* Minimalist Background Detail */}
  <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none opacity-[0.03]">
    <div className="w-px h-full bg-[#1a4332]" />
    <div className="w-px h-full bg-[#1a4332]" />
    <div className="w-px h-full bg-[#1a4332]" />
    <div className="w-px h-full bg-[#1a4332]" />
  </div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-20">
      
      {/* Left side: The Architectural Logo Frame */}
      <div className="lg:w-5/12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative"
        >
          {/* Main Logo Container */}
          <div className="bg-[#f8fafc] p-16 rounded-[4rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />
            <img 
              src="swiper/metropolitan.avif" 
              alt="Metropolitan Infra Realty" 
              className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Premium Floating Badge */}
          <div className="absolute -bottom-8 -right-8 bg-[#1a4332] text-white p-8 rounded-[2.5rem] shadow-2xl z-20 border-4 border-white">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-1 opacity-70">Strategic Partnership</p>
            <p className="text-xl font-light italic tracking-tight">Est. Excellence</p>
          </div>
        </motion.div>
      </div>

      {/* Right side: The Luxury Narrative */}
      <div className="lg:w-7/12 space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-green-600" />
            <span className="text-green-700 text-[11px] font-black uppercase tracking-[0.5em]">Global Standards</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-[1.05] tracking-[-0.04em]">
            Strategic <span className="font-black italic text-[#1a4332]">Collaboration</span> <br/>
            <span className="text-slate-400 font-extralight">& Development</span>
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-light tracking-tight">
            The Glenwood project is being developed in collaboration with <span className="text-slate-900 font-semibold">Metropolitan Infra Realty LLP</span>, a reputed real estate firm headquartered at <span className="text-slate-800 font-medium">Plot No. 28, The Sheesham Courtyard, Mehrauli Badarpur Road, Saidulajab, New Delhi - 110030.</span>
            <br/><br/>
            This partnership merges Glenwood's vision of creating premium residential spaces with Metropolitan's proven expertise in delivering high-quality developments, ensuring a blend of innovation and reliability.
          </p>
        </div>

        {/* Minimalist Stats/Traits */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 pt-6 border-t border-slate-100">
          {[
            { label: "Partner", val: "Metropolitan" },
            { label: "HQ", val: "New Delhi" },
            { label: "Commitment", val: "Reliability" }
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[9px] font-black text-green-600 uppercase tracking-[0.3em]">{item.label}</p>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-widest">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


    {/* --- SLIM & SLEEK CONTACT HUB --- */}
<section className="py-12 bg-white px-6">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1a4332] rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col md:row-reverse lg:flex-row">
      
      {/* Left Side: Address Details (Condensed) */}
      <div className="lg:w-2/3 p-8 md:p-12 text-white border-b lg:border-b-0 lg:border-r border-white/10">
        <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-6">
          Reach Us
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Site & Experience Center - Compact layout */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={18} className="text-green-400 shrink-0 mt-1"/>
              <div>
                <p className="text-[10px] font-black text-green-400 uppercase tracking-widest">Project Site</p>
                <p className="text-sm font-medium text-slate-200">Sector 29 Jhajjar, Haryana - 124505</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="text-green-400 shrink-0 mt-1"/>
              <div>
                <p className="text-[10px] font-black text-green-400 uppercase tracking-widest">Experience Center</p>
                <p className="text-sm font-medium text-slate-200">Sector 104, Dwarka Expy, Gurugram</p>
              </div>
            </div>
          </div>

          {/* Corporate Office - Integrated */}
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Corporate Office</p>
            <p className="text-sm font-bold leading-snug text-slate-100">
              UNIT No. 69-70, 2nd Floor, MGF Megapolis, MG Road, Gurugram - 122002
            </p>
          </div>
        </div>

        {/* Footer Links - Inline */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3">
          <a href="mailto:hello@hcbs.co.in" className="flex items-center gap-2 hover:text-green-400 transition-colors font-bold text-xs uppercase">
            <Mail size={16} className="text-green-400"/> hello@hcbs.co.in
          </a>
          <a href="http://glenwood.co.in/" target="_blank" className="flex items-center gap-2 hover:text-green-400 transition-colors font-bold text-xs uppercase">
            <Zap size={16} className="text-green-400"/> glenwood.co.in
          </a>
        </div>
      </div>

      {/* Right Side: Branding (Slimmer) */}
      <div className="lg:w-1/3 bg-slate-50 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full opacity-50"></div>
        
        <img 
          src="swiper/Glenwood name.webp" 
          className="w-48 md:w-56 mb-4 relative z-10" 
          alt="Glenwood Logo" 
        />
        <p className="text-[9px] font-black text-[#1a4332] border border-[#1a4332]/20 px-3 py-1 rounded-full uppercase tracking-tighter">
          Haryana Real Estate Approved
        </p>
      </div>

    </div>
  </div>
</section>

      <footer className="py-10 text-center text-gray-400 text-[10px] uppercase tracking-widest bg-white">
        © 2026 Glenwood Group | Created with ❤️
      </footer>
    </div>
  );
};

export default App;