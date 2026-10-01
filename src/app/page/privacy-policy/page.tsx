"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const PolicyPage: React.FC = () => {
  // Header కోసం State లు
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Scroll అయినప్పుడు హెడర్ సైజు మారడానికి
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pt-24 md:pt-28">

      {/* =========================================================
          HEADER (Integrated)
      ========================================================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-500 ease-in-out bg-blue-600 hover:bg-black ${
          isScrolled ? "bg-black py-2" : "bg-black py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/rtv.png"
              alt="logo"
              width={100}
              height={isScrolled ? 60 : 80}
              className="rounded transition-all duration-500 ease-in-out object-contain"
              priority
            />
          </Link>

          {/* Desktop Contact Us Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-white text-blue-600 hover:bg-black hover:text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-blue-600 hover:bg-black border-t border-blue-500 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="px-4 py-3 border-b border-blue-500">
            <Link
              href="/contact"
              className="block text-white font-medium hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </header>

      {/* =========================================================
          POLICY CONTENT
      ========================================================= */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-10">

        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Welcome to Raw TV. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website rawtvapp.com or use our news application.
          </p>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              1. Personal Information
            </h3>
            <p className="text-gray-600 mb-3">We may collect personal information such as:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Contact details (if you contact us or subscribe to newsletters)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2. Non-Personal Information
            </h3>
            <p className="text-gray-600 mb-3">We automatically collect certain non-personal information, including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This data helps us understand how users interact with our content.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-3">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Provide and improve our news content</li>
              <li>Personalize user experience</li>
              <li>Send notifications or newsletters (if subscribed)</li>
              <li>Respond to user inquiries</li>
              <li>Analyze traffic and usage trends</li>
              <li>Ensure website security and prevent misuse</li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-3">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Improve website functionality</li>
              <li>Understand user preferences</li>
              <li>Analyze traffic and performance</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can disable cookies through your browser settings, but some features may not function properly.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-3">We may use third-party services such as:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Analytics tools (e.g., Google Analytics)</li>
              <li>Advertising partners</li>
              <li>Social media integrations</li>
            </ul>
            <p className="text-gray-600 mb-6">
              These third parties have their own privacy policies, and we are not responsible for their practices.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-3">
              We do not sell or rent your personal data. We may share information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>When required by law or legal process</li>
              <li>To protect our rights, users, or public safety</li>
              <li>With trusted service providers who assist in operating our services</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-3">Depending on applicable laws, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You can contact us for any privacy-related requests.
            </p>
          </section>

          {/* Subscription Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Subscription Information
            </h2>
            <p className="text-gray-600 mb-6">
              This app does not include subscriptions, in-app purchases, or payments. It is completely free to use, does not require renewal, and is available on both Android and iOS stores.
            </p>
          </section>

          {/* User-Generated Content */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              User-Generated Content – Terms of Use
            </h2>
            <p className="text-gray-600 mb-3">
              By accessing or using user-generated content features within RAW TV TELUGU, you agree to follow these community guidelines.
            </p>
            <p className="text-gray-600 mb-3">
              Users must not upload, share, or post content that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Contains abusive, hateful, violent, or inappropriate material</li>
              <li>Promotes harassment, spam, or illegal activities</li>
              <li>Violates copyrights or intellectual property rights</li>
              <li>Misleads or harms other users</li>
            </ul>
            <p className="text-gray-600 mb-6">
              All user-uploaded content is subject to moderation and review before being published. We reserve the right to remove any content or restrict accounts that violate these guidelines.
            </p>
            <p className="text-gray-600 mb-6">
              Users can report objectionable content and block abusive users directly within the app.
            </p>
            <p className="text-gray-600 mb-6">
              By continuing to use these features, you acknowledge and agree to these Terms of Use and Community Guidelines.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
            </p>
          </section>

          {/* Contact Us Box */}
          <section className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Contact Us
            </h2>
            <p className="text-blue-800 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="flex flex-col gap-3 text-blue-700 font-medium">
              <a href="mailto:tech@rtvnewsnetwork.com" className="hover:underline flex items-center gap-2">
                📧 tech@rtvnewsnetwork.com
              </a>
              <a href="https://www.rtvlive.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                🌐 www.rtvlive.com
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PolicyPage;
