// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const HomePage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 md:pt-28">
//       {/* TOP CAMERA BANNER */}
//       <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white flex items-center justify-center overflow-hidden">
//         <div className="relative w-full max-w-[1100px] h-full px-2 md:px-4">
//           <Image
//             src="/rtvcamers.png"
//             alt="RTV Camera"
//             fill
//             className="object-contain object-center"
//             priority
//           />
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 md:py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
//           {/* LEFT - TEXT */}
//           <div className="order-2 md:order-1">
//             <h2 className="text-base md:text-xl font-bold text-red-700 border-b-2 border-dashed border-blue-500 pb-2 mb-4">
//               About Us
//             </h2>
//             <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
//               Welcome to RTV News Network, Division Of Rayudu Vision Media
//               Limited — your source for independent, progressive, unbiased news.
//             </p>
//             <p className="text-sm md:text-base leading-relaxed text-gray-700">
//               We at RTV NEWS NETWORK do more than just cover the news; we also
//               create stories, start discussions, and promote social change. As a
//               media company, we are dedicated to make a constructive
//               contribution to the ongoing re-negotiating journey with us.
//             </p>
//           </div>

//           {/* RIGHT - IMAGE */}
//           <div className="order-1 md:order-2 relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-sm bg-white">
//             <a
//               href="https://english.rtvlive.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
//             >
//               <Image
//                 src="/latestnews.png"
//                 alt="Ravi Prakash - RTV News Network"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
//           {/* LEFT COLUMN */}
//           <div className="space-y-8 md:space-y-10">
//             {/* WHAT WE DO */}
//             <section>
//               <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 WHAT WE DO
//               </h2>
//               <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
//                 <Image
//                   src="/Banner4.jpg"
//                   alt="What We Do"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </section>

//             {/* OUR PURPOSE */}
//             <section>
//               <h2 className="text-sm md:text-lg font-bold text-green-700 mb-2 md:mb-3">
//                 Our Purpose
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 Our goal is to give a platform for uninformed journalists,
//                 risk taking campaigners, and alternative-thinking leaders.
//                 Our journalism is founded on honesty, impartiality, and a
//                 dedication to the truth. We think that news serves as a
//                 catalyst for change and more than just a source of information.
//               </p>
//             </section>

//             {/* COMPLETELY DIGITAL */}
//             <section>
//               <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 Completely Digital
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
//                 Our newsroom runs entirely on digital platforms, delivering
//                 real-time updates, video bulletins and interactive stories
//                 straight to your screen.
//               </p>
              
//               <a 
//                 href="https://rtvlive.com/" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block cursor-pointer hover:opacity-90 transition-opacity"
//               >
//                 <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
//                   <Image
//                     src="/competednew.jpg"
//                     alt="Completely Digital"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </a>
//             </section>

//             {/* OUR PRODUCTS */}
//             <section>
//               <h2 className="text-sm md:text-lg font-bold text-green-700 mb-2 md:mb-3">
//                 Our Products
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 Indulge in our user-friendly interface and intuitive web
//                 portals that can be seamlessly integrated into your website
//                 and TV package. Our platform offers unlimited advertising
//                 and mobile access, computing for smartphone connection.
//               </p>
//             </section>

//             {/* WIDENING DIGITAL WINGS */}
//             <section>
//               <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 Widening Digital Wings
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
//                 We are expanding our digital footprint across platforms to
//                 reach every corner of the state with reliable, unbiased
//                 journalism.
//               </p>
//               <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
//                 <Image
//                   src="/satellite.jpg"
//                   alt="Widening Digital Wings"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </section>

//             {/* SATELLITE CHANNEL */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
//                 Satellite Channel and Digital News Radio
//               </h3>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 We are excited to announce the impending debut of our
//                 satellite channel and digital news radio platform. With
//                 cutting-edge technology, these platforms will help us to
//                 more effectively reach a wider audience and influence
//                 positive change.
//               </p>
//             </section>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="space-y-8 md:space-y-10">
//             {/* RAYUDU VISION */}
//             <section>
//               <h2 className="text-sm md:text-lg font-bold text-red-700 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 Rayudu Vision Media Ltd
//               </h2>

//               <a 
//                 href="https://www.facebook.com/RTVTeluguDigital/" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block cursor-pointer hover:opacity-90 transition-opacity"
//               >
//                 <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
//                   <Image
//                     src="/about.jpg"
//                     alt="Rayudu Vision Media"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </a>
//             </section>

//             {/* WHAT WE DO? */}
//             <section>
//               <h2 className="text-sm md:text-lg font-bold text-blue-700 mb-2 md:mb-3">
//                 What We Do?
//               </h2>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 By publishing a commitment to courageous journalism and an
//                 unshakable commitment to the truth, RTV NEWS NETWORK reshapes
//                 news reporting. We stand firm in the media landscape as a
//                 right of honesty and transparency.
//               </p>
//             </section>

//             {/* LATEST JOBS */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 Latest Jobs with RTV Network
//               </h3>
//               <div className="space-y-2">
//                 <div className="border-b border-gray-300 py-2">
//                   <h4 className="text-sm md:text-base font-bold text-gray-900">
//                     Traineeship
//                   </h4>
//                 </div>
//                 <div className="border-b border-gray-300 py-2">
//                   <h4 className="text-sm md:text-base font-bold text-gray-900">
//                     Internships
//                   </h4>
//                 </div>
//               </div>
//             </section>

//             {/* DIGITAL APPROACH */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 Digital Approach
//               </h3>

//               <a 
//                 href="https://www.youtube.com/channel/UCE5RIa7b_JIK0a31Uaq4xRw" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block cursor-pointer hover:opacity-90 transition-opacity"
//               >
//                 <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
//                   <Image
//                     src="/digital.jpg"
//                     alt="Digital Approach"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </a>
//             </section>

//             {/* YOUTUBE NETWORK */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
//                 Youtube Network
//               </h3>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700">
//                 Our digital reach knows no bounds with over 70 Youtube
//                 channels, bringing in a daily average of 30 million views.
//               </p>
//             </section>

//             {/* E-PAPER */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
//                 E-Paper
//               </h3>

//               <a 
//                 href="https://www.tolivelugu.com/" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="block cursor-pointer hover:opacity-90 transition-opacity"
//               >
//                 <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-lg overflow-hidden shadow-sm bg-white">
//                   <Image
//                     src="/tholivelugu.jpg"
//                     alt="E-Paper - Tholivelugu"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </a>
//             </section>

//             {/* TEL WEBSITE MAGAZINE */}
//             <section>
//               <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
//                 Tel, Website and Magazine
//               </h3>
//               <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
//                 With in-depth reporting, insightful analysis, and
//                 thought-provoking pieces, our team&apos;s technology demonstrates
//                 our commitment to delivering the most engaging and informative
//                 content. Delivering our audience with news and insightful
//                 information.
//               </p>
              
//               <div className="flex flex-col gap-2">
//                 <a
//                   href="https://www.tolivelugu.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline text-sm md:text-base font-medium break-all"
//                 >
//                   https://www.tolivelugu.com/
//                 </a>
                
//                 <a
//                   href="https://epaper.merupu.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline text-sm md:text-base font-medium break-all"
//                 >
//                   https://epaper.merupu.com/
//                 </a>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer className="border-t border-gray-300 mt-10 md:mt-12 py-4 md:py-6 bg-gray-50">
//         <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start">
//           <span>© 2023 RTV News Network. All Rights Reserved.</span>
          
//           <span className="text-gray-400 hidden md:inline">|</span>
          
//           <Link 
//             href="/page/privacy-policy" 
//             className="text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 font-semibold px-2 py-1 rounded transition-colors"
//           >
//             Privacy Policy
//           </Link>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


//Homepage.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   REUSABLE SCROLL-REVEAL HOOK
   ═══════════════════════════════════════════════════════════ */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

/* ═══════════════════════════════════════════════════════════
   REVEAL WRAPPER
   ═══════════════════════════════════════════════════════════ */
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
}> = ({ children, delay = 0, direction = "up", className = "" }) => {
  const { ref, visible } = useScrollReveal();

  const base =
    "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

  const hidden = {
    up: "opacity-0 translate-y-12",
    left: "opacity-0 -translate-x-12",
    right: "opacity-0 translate-x-12",
    scale: "opacity-0 scale-95",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : hidden} ${className}`}
    >
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   LIVE NEWS TICKER — Scrolling headlines with BREAKING badge
   ═══════════════════════════════════════════════════════════ */
const LiveNewsTicker: React.FC = () => {
  const headlines = [
  "🔴 RTV News Network — 24/7 Live Coverage | All India | Telugu • English • Digital",
    "🔴 Every District. Every Second. RTV Brings You News As It Happens — AP, Telangana & All India",
    "🔴 Live Updates From Every Corner Of The Nation — Fast, Factual, Unbiased Journalism",
    "🔴 Stay Connected With RTV — Telugu • English • Digital Platforms | News That Never Stops",
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-red-700 via-red-800 to-red-950 overflow-hidden border-y border-red-900/50 shadow-lg">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative flex items-stretch max-w-full">
        {/* BREAKING Badge — fixed left */}
        <div className="relative z-20 flex-shrink-0 flex items-center bg-gradient-to-r from-red-600 to-red-700 px-4 md:px-6 py-3 border-r border-red-500/50 shadow-xl">
          <span className="relative flex h-2.5 w-2.5 mr-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap">
            Breaking
          </span>
          {/* right arrow shape */}
          <div className="absolute right-0 top-0 bottom-0 w-3 translate-x-full">
            <div className="w-full h-full bg-red-700" style={{ clipPath: "polygon(0 0, 0 100%, 100% 50%)" }} />
          </div>
        </div>

        {/* Scrolling Headlines */}
        <div className="relative flex-1 overflow-hidden group">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-red-950/80 to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-red-950/80 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center h-full py-3 animate-ticker group-hover:[animation-play-state:paused]">
            {[...headlines, ...headlines].map((headline, idx) => (
              <div key={idx} className="flex items-center flex-shrink-0">
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap px-4 md:px-6">
                  {headline}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   OUR CHANNELS GRID — Telugu RTV, English RTV, etc.
   ═══════════════════════════════════════════════════════════ */
const OurChannels: React.FC = () => {
  const channels = [
    {
      name: "Telugu RTV",
      tag: "Telugu News",
      description: "24/7 Telugu news coverage across Telangana & Andhra",
      href: "https://www.youtube.com/channel/UCE5RIa7b_JIK0a31Uaq4xRw",
      logo: "/maxresdefault.jpg", // replace with actual logo
      gradient: "from-red-500 to-red-700",
      accent: "text-red-600",
      border: "hover:border-red-400",
    },
    {
      name: "English RTV",
      tag: "English News",
      description: "Independent English journalism for global audience",
      href: "https://english.rtvlive.com/",
      logo: "/latestnews.png", // replace with actual logo
      gradient: "from-blue-500 to-blue-700",
      accent: "text-blue-600",
      border: "hover:border-blue-400",
    },
    {
      name: "Tholivelugu",
      tag: "E-Paper",
      description: "Daily Telugu digital newspaper with in-depth stories",
      href: "https://www.tolivelugu.com/",
      logo: "/tholivelugu.jpg",
      gradient: "from-slate-600 to-slate-800",
      accent: "text-slate-700",
      border: "hover:border-slate-400",
    },
    {
      name: "Merupu",
      tag: "E-Paper",
      description: "Fast, reliable Telugu news e-paper edition",
      href: "https://epaper.merupu.com/",
      logo: "/competednew.jpg", // replace with actual logo
      gradient: "from-amber-500 to-orange-600",
      accent: "text-amber-600",
      border: "hover:border-amber-400",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      {/* Section Header */}
      <Reveal direction="up">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            Our Network
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            Explore Our <span className="text-red-700">Channels</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            One network, multiple platforms — bringing you trusted news across Telugu, English and digital editions.
          </p>
        </div>
      </Reveal>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {channels.map((ch, idx) => (
          <Reveal key={ch.name} delay={idx * 100} direction="up">
            <a
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block bg-white rounded-2xl border-2 border-gray-100 ${ch.border} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${ch.gradient} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

              <div className="p-5 md:p-6">
                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black tracking-widest uppercase ${ch.accent}`}>
                    {ch.tag}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${ch.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Logo Box */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 mb-4">
                  <Image
                    src={ch.logo}
                    alt={ch.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Name */}
                <h3 className="text-base md:text-lg font-black text-gray-900 mb-2 tracking-tight">
                  {ch.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {ch.description}
                </p>

                {/* Bottom link hint */}
                <div className={`mt-4 flex items-center gap-1.5 text-xs font-bold ${ch.accent} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500`}>
                  Visit Channel
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN HOMEPAGE
   ═══════════════════════════════════════════════════════════ */
const HomePage: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800 font-sans antialiased overflow-x-hidden">

      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative w-full bg-gradient-to-br from-red-700 via-red-800 to-red-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse-slow" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-16 md:pb-20 mt-[6rem]">
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase shadow-lg shadow-black/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Live • Independent • Unbiased
            </span>
          </div>

          <h1
            className={`text-center text-white text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] transition-all duration-1000 delay-100 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            RTV{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              NEWS NETWORK
            </span>
          </h1>
          <div
            className={`relative w-full max-w-3xl mx-auto h-[150px] sm:h-[200px] md:h-[240px] mt-8 transition-all duration-1000 delay-300 ${
              heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/rtvcamers.png"
              alt="RTV Camera"
              fill
              className="object-contain object-center drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#fafafa]" />
      </section>

      {/* ═══════════ LIVE NEWS TICKER ═══════════ */}
      <LiveNewsTicker />

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              About Us
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
              Welcome to <span className="text-red-700">RTV News Network</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-3">
              Welcome to RTV News Network, Division Of Rayudu Vision Media Limited — your source for independent, progressive, unbiased news.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-7">
              We at RTV NEWS NETWORK do more than just cover the news; we also create stories, start discussions, and promote social change. As a media company, we are dedicated to make a constructive contribution to the ongoing re-negotiating journey with us.
            </p>

            <a
              href="https://english.rtvlive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Visit English RTV
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-700" />
              <a
                href="https://english.rtvlive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-xl"
              >
                <Image
                  src="/latestnews.png"
                  alt="Ravi Prakash - RTV News Network"
                  fill
                  className="object-contain p-3 group-hover:scale-[1.04] transition-transform duration-700"
                  priority
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ DIVIDER ═══════════ */}
      <Reveal direction="scale">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-gray-400 uppercase">
              Explore RTV
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
        </div>
      </Reveal>

      {/* ═══════════ OUR CHANNELS GRID ═══════════ */}
      <OurChannels />

      {/* ═══════════ MAIN GRID CONTENT ═══════════ */}
      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

          {/* ════════ LEFT COLUMN ════════ */}
          <div className="flex flex-col gap-6 md:gap-8">

            {/* ── WHAT WE DO ── */}
            <Reveal direction="up">
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      What We Do
                    </h2>
                  </div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
                    <Image src="/Banner4.jpg" alt="What We Do" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── OUR PURPOSE ── */}
            <Reveal direction="up" delay={100}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-green-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                    Our Purpose
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                  Our goal is to give a platform for uninformed journalists, risk taking campaigners, and alternative-thinking leaders. Our journalism is founded on honesty, impartiality, and a dedication to the truth. We think that news serves as a catalyst for change and more than just a source of information.
                </p>
              </div>
            </Reveal>

            {/* ── COMPLETELY DIGITAL ── */}
            <Reveal direction="up" delay={150}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      Completely Digital
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-5">
                    Our newsroom runs entirely on digital platforms, delivering real-time updates, video bulletins and interactive stories straight to your screen.
                  </p>
                  <a href="https://rtvlive.com/" target="_blank" rel="noopener noreferrer" className="block group/img">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50/30 border border-gray-100">
                      <Image
                        src="/competednew.jpg"
                        alt="Completely Digital"
                        fill
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                        <span className="text-white text-xs font-bold flex items-center gap-1 translate-y-2 group-hover/img:translate-y-0 transition-transform duration-500">
                          Visit Site
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ── OUR PRODUCTS ── */}
            <Reveal direction="up" delay={200}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                    Our Products
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                  Indulge in our user-friendly interface and intuitive web portals that can be seamlessly integrated into your website and TV package. Our platform offers unlimited advertising and mobile access, computing for smartphone connection.
                </p>
              </div>
            </Reveal>

            {/* ── WIDENING DIGITAL WINGS ── */}
            <Reveal direction="up" delay={250}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-700 flex items-center justify-center text-white shadow-lg shadow-sky-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      Widening Digital Wings
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-5">
                    We are expanding our digital footprint across platforms to reach every corner of the state with reliable, unbiased journalism.
                  </p>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-sky-50/30">
                    <Image src="/satellite.jpg" alt="Widening Digital Wings" fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── SATELLITE CHANNEL ── */}
            <Reveal direction="up" delay={300}>
              <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 p-6 md:p-7 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/30 rounded-full blur-3xl group-hover:bg-red-500/50 transition-colors duration-700" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-white tracking-tight">
                      Satellite Channel & Digital News Radio
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-300">
                    We are excited to announce the impending debut of our satellite channel and digital news radio platform. With cutting-edge technology, these platforms will help us to more effectively reach a wider audience and influence positive change.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ════════ RIGHT COLUMN ════════ */}
          <div className="flex flex-col gap-6 md:gap-8">

            {/* ── RAYUDU VISION ── */}
            <Reveal direction="up" delay={50}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      Rayudu Vision Media Ltd
                    </h2>
                  </div>
                  <a href="https://www.facebook.com/RTVTeluguDigital/" target="_blank" rel="noopener noreferrer" className="block group/img">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-red-50/30 border border-gray-100">
                      <Image
                        src="/about.jpg"
                        alt="Rayudu Vision Media"
                        fill
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                        <span className="text-white text-xs font-bold flex items-center gap-1 translate-y-2 group-hover/img:translate-y-0 transition-transform duration-500">
                          Follow on Facebook
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ── WHAT WE DO? ── */}
            <Reveal direction="up" delay={100}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                    What We Do?
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                  By publishing a commitment to courageous journalism and an unshakable commitment to the truth, RTV NEWS NETWORK reshapes news reporting. We stand firm in the media landscape as a right of honesty and transparency.
                </p>
              </div>
            </Reveal>

            {/* ── LATEST JOBS ── */}
            <Reveal direction="up" delay={150}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                    Latest Jobs with RTV Network
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-400 hover:shadow-lg hover:translate-x-1 transition-all duration-300 cursor-pointer group/job">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/job:animate-pulse flex-shrink-0" />
                      <h4 className="text-sm md:text-base font-bold text-gray-900">Traineeship</h4>
                    </div>
                    <svg className="w-5 h-5 text-blue-600 group-hover/job:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:border-green-400 hover:shadow-lg hover:translate-x-1 transition-all duration-300 cursor-pointer group/job">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 group-hover/job:animate-pulse flex-shrink-0" />
                      <h4 className="text-sm md:text-base font-bold text-gray-900">Internships</h4>
                    </div>
                    <svg className="w-5 h-5 text-green-600 group-hover/job:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── DIGITAL APPROACH ── */}
            <Reveal direction="up" delay={200}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-pink-700 flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      Digital Approach
                    </h3>
                  </div>
                  <a href="https://www.youtube.com/channel/UCE5RIa7b_JIK0a31Uaq4xRw" target="_blank" rel="noopener noreferrer" className="block group/img">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-red-50/30 border border-gray-100">
                      <Image
                        src="/digital.jpg"
                        alt="Digital Approach"
                        fill
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                        <span className="text-white text-xs font-bold flex items-center gap-1 translate-y-2 group-hover/img:translate-y-0 transition-transform duration-500">
                          Watch on YouTube
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ── YOUTUBE NETWORK ── */}
            <Reveal direction="up" delay={250}>
              <div className="group relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 p-6 md:p-7 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/15 rounded-full blur-2xl group-hover:bg-white/25 transition-colors duration-700" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-white tracking-tight">
                      YouTube Network
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-red-50">
                    Our digital reach knows no bounds with over 70 YouTube channels, bringing in a daily average of 30 million views.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── E-PAPER ── */}
            <Reveal direction="up" delay={300}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                      E-Paper
                    </h3>
                  </div>
                  <a href="https://www.tolivelugu.com/" target="_blank" rel="noopener noreferrer" className="block group/img">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-100">
                      <Image
                        src="/tholivelugu.jpg"
                        alt="E-Paper - Tholivelugu"
                        fill
                        className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                        <span className="text-white text-xs font-bold flex items-center gap-1 translate-y-2 group-hover/img:translate-y-0 transition-transform duration-500">
                          Read E-Paper
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* ── TEL WEBSITE MAGAZINE ── */}
            <Reveal direction="up" delay={350}>
              <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                    Tel, Website & Magazine
                  </h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-5">
                  With in-depth reporting, insightful analysis, and thought-provoking pieces, our team&apos;s technology demonstrates our commitment to delivering the most engaging and informative content.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.tolivelugu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 hover:border-violet-400 hover:shadow-lg hover:translate-x-1 transition-all duration-300 group/link"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-violet-600 flex-shrink-0 group-hover/link:animate-pulse" />
                      <span className="text-xs md:text-sm font-semibold text-gray-700 truncate">
                        https://www.tolivelugu.com/
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-violet-600 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="https://epaper.merupu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 hover:border-violet-400 hover:shadow-lg hover:translate-x-1 transition-all duration-300 group/link"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 group-hover/link:animate-pulse" />
                      <span className="text-xs md:text-sm font-semibold text-gray-700 truncate">
                        https://epaper.merupu.com/
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-purple-600 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      {/* ═══════════ CTA STRIP ═══════════ */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal direction="scale">
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-7 md:p-12 overflow-hidden shadow-2xl group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/25 rounded-full blur-3xl group-hover:bg-red-500/40 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-colors duration-700" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xl md:text-3xl font-black text-white mb-2">
                  Stay Informed. Stay Empowered.
                </h3>
                <p className="text-sm md:text-base text-slate-300">
                  Get the latest news, updates and stories delivered straight to your screen.
                </p>
              </div>
              <a
                href="https://english.rtvlive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm md:text-base font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Visit RTV Live
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-blue-800 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 text-center">
            <span className="text-xs md:text-sm text-white">
              © 2023 RTV News Network. All Rights Reserved.
            </span>

            <Link
              href="/page/privacy-policy"
              className="text-xs md:text-sm font-bold text-white bg-red-600 hover:bg-blue-600 px-3 py-1.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* ═══════════ GLOBAL ANIMATION STYLES ═══════════ */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #991b1b);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b91c1c, #7f1d1d);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
