"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 md:pt-28">
      {/* TOP CAMERA BANNER */}
      <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[1100px] h-full px-2 md:px-4">
          <Image
            src="/rtvcamers.png"
            alt="RTV Camera"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* LEFT - TEXT */}
          <div className="order-2 md:order-1">
            <h2 className="text-base md:text-xl font-bold text-red-700 border-b-2 border-dashed border-blue-500 pb-2 mb-4">
              About Us
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
              Welcome to RTV News Network, Division Of Rayudu Vision Media
              Limited — your source for independent, progressive, unbiased news.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              We at RTV NEWS NETWORK do more than just cover the news; we also
              create stories, start discussions, and promote social change. As a
              media company, we are dedicated to make a constructive
              contribution to the ongoing re-negotiating journey with us.
            </p>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="order-1 md:order-2 relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-sm bg-white">
            <Image
              src="/maxresdefault.jpg"
              alt="Ravi Prakash - RTV News Network"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8 md:space-y-10">
            {/* WHAT WE DO */}
            <section>
              <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                WHAT WE DO
              </h2>
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
                <Image
                  src="/Banner4.jpg"
                  alt="What We Do"
                  fill
                  className="object-contain"
                />
              </div>
            </section>

            {/* OUR PURPOSE */}
            <section>
              <h2 className="text-sm md:text-lg font-bold text-green-700 mb-2 md:mb-3">
                Our Purpose
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Our goal is to give a platform for uninformed journalists,
                risk taking campaigners, and alternative-thinking leaders.
                Our journalism is founded on honesty, impartiality, and a
                dedication to the truth. We think that news serves as a
                catalyst for change and more than just a source of information.
              </p>
            </section>

            {/* COMPLETELY DIGITAL */}
            <section>
              <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                Completely Digital
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
                Our newsroom runs entirely on digital platforms, delivering
                real-time updates, video bulletins and interactive stories
                straight to your screen.
              </p>
              
              <a 
                href="https://rtvlive.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
                  <Image
                    src="/competednew.jpg"
                    alt="Completely Digital"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </section>

            {/* OUR PRODUCTS */}
            <section>
              <h2 className="text-sm md:text-lg font-bold text-green-700 mb-2 md:mb-3">
                Our Products
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Indulge in our user-friendly interface and intuitive web
                portals that can be seamlessly integrated into your website
                and TV package. Our platform offers unlimited advertising
                and mobile access, computing for smartphone connection.
              </p>
            </section>

            {/* WIDENING DIGITAL WINGS */}
            <section>
              <h2 className="text-sm md:text-lg font-extrabold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                Widening Digital Wings
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
                We are expanding our digital footprint across platforms to
                reach every corner of the state with reliable, unbiased
                journalism.
              </p>
              <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
                <Image
                  src="/satellite.jpg"
                  alt="Widening Digital Wings"
                  fill
                  className="object-contain"
                />
              </div>
            </section>

            {/* SATELLITE CHANNEL */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                Satellite Channel and Digital News Radio
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                We are excited to announce the impending debut of our
                satellite channel and digital news radio platform. With
                cutting-edge technology, these platforms will help us to
                more effectively reach a wider audience and influence
                positive change.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 md:space-y-10">
            {/* RAYUDU VISION */}
            <section>
              <h2 className="text-sm md:text-lg font-bold text-red-700 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                Rayudu Vision Media Ltd
              </h2>

              <a 
                href="https://www.facebook.com/RTVTeluguDigital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
                  <Image
                    src="/about.jpg"
                    alt="Rayudu Vision Media"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </section>

            {/* WHAT WE DO? */}
            <section>
              <h2 className="text-sm md:text-lg font-bold text-blue-700 mb-2 md:mb-3">
                What We Do?
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                By publishing a commitment to courageous journalism and an
                unshakable commitment to the truth, RTV NEWS NETWORK reshapes
                news reporting. We stand firm in the media landscape as a
                right of honesty and transparency.
              </p>
            </section>

            {/* LATEST JOBS */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                Latest Jobs with RTV Network
              </h3>
              <div className="space-y-2">
                <div className="border-b border-gray-300 py-2">
                  <h4 className="text-sm md:text-base font-bold text-gray-900">
                    Traineeship
                  </h4>
                </div>
                <div className="border-b border-gray-300 py-2">
                  <h4 className="text-sm md:text-base font-bold text-gray-900">
                    Internships
                  </h4>
                </div>
              </div>
            </section>

            {/* DIGITAL APPROACH */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                Digital Approach
              </h3>

              <a 
                href="https://www.youtube.com/channel/UCE5RIa7b_JIK0a31Uaq4xRw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden shadow-sm bg-white">
                  <Image
                    src="/digital.jpg"
                    alt="Digital Approach"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </section>

            {/* YOUTUBE NETWORK */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                Youtube Network
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Our digital reach knows no bounds with over 70 Youtube
                channels, bringing in a daily average of 30 million views.
              </p>
            </section>

            {/* E-PAPER */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 border-b-2 border-dashed border-blue-500 pb-2 mb-3 md:mb-4">
                E-Paper
              </h3>

              <a 
                href="https://www.tolivelugu.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-lg overflow-hidden shadow-sm bg-white">
                  <Image
                    src="/tholivelugu.jpg"
                    alt="E-Paper - Tholivelugu"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </section>

            {/* TEL WEBSITE MAGAZINE */}
            <section>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                Tel, Website and Magazine
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3 md:mb-4">
                With in-depth reporting, insightful analysis, and
                thought-provoking pieces, our team&apos;s technology demonstrates
                our commitment to delivering the most engaging and informative
                content. Delivering our audience with news and insightful
                information.
              </p>
              
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.tolivelugu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm md:text-base font-medium break-all"
                >
                  https://www.tolivelugu.com/
                </a>
                
                <a
                  href="https://epaper.merupu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm md:text-base font-medium break-all"
                >
                  https://epaper.merupu.com/
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-300 mt-10 md:mt-12 py-4 md:py-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start">
          <span>© 2023 RTV News Network. All Rights Reserved.</span>
          
          <span className="text-gray-400 hidden md:inline">|</span>
          
          <Link 
            href="/page/privacy-policy" 
            className="text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 font-semibold px-2 py-1 rounded transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
