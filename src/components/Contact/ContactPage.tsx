"use client";

import { useState } from "react";
import Link from "next/link";
import {
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setMsg("");
    setSuccess(false);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setMsg(
          result.message ||
            "Unable to send your message. Please try again."
        );
        return;
      }

      setSuccess(true);
      setMsg(
        result.message ||
          "Message submitted successfully. We will get back to you soon."
      );

      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Mail error:", error);
      setMsg("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const input =
    "w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:bg-white focus:border-blue-800 focus:ring-4 focus:ring-blue-900/10";

  return (
    <main className="bg-white min-h-screen pt-24 md:pt-28">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-red-100/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Please fill up the below form and we will get back to your request
            as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-5 gap-7 lg:gap-8">
          
          {/* LEFT COLUMN - ADDRESSES */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[28px] bg-blue-950 text-white p-7 sm:p-8 lg:p-9 h-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                {/* OUR ADDRESS */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} weight="fill" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-1">
                        Our Address:
                      </p>
                      <p className="text-sm font-semibold mb-1">
                        RTV News Network
                      </p>
                      <p className="text-sm leading-6 text-blue-100">
                        8-2, 8-2-293/82/839,
                        <br />
                        Rd Number 44, CBI Colony,
                        <br />
                        Jubilee Hills, Hyderabad,
                        <br />
                        Telangana – 500033.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <a
                  href="mailto:digital@rtvnewsnetwork.com"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1] transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={21} weight="fill" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                        Email:
                      </p>
                      <p className="mt-1 text-sm font-semibold break-all">
                        digital@rtvnewsnetwork.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* REGISTERED ADDRESS */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} weight="fill" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold mb-1">
                        Registered Address:
                      </p>
                      <p className="text-sm font-semibold mb-1">
                        Rayudu Vision Media Limited
                      </p>
                      <p className="text-sm leading-6 text-blue-100">
                        2-3-703/1/B,, TIRUMALA NAGAR,
                        <br />
                        AMBERPET, HYDERABAD,
                        <br />
                        Telangana – 500013.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[28px] border border-gray-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-6 sm:p-8 lg:p-10">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <PaperPlaneTilt size={20} weight="fill" className="text-blue-900" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Fill in your details and we&apos;ll contact you soon.
                  </p>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Name
                  </label>
                  <input
                    className={input}
                    name="name"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={change}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Email
                  </label>
                  <input
                    className={input}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={change}
                    required
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Subject
                  </label>
                  <input
                    className={input}
                    name="subject"
                    placeholder="Enter subject"
                    value={data.subject}
                    onChange={change}
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    className={`${input} h-32 py-3.5 resize-none`}
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={data.message}
                    onChange={change}
                    required
                  />
                </div>

                {/* CAPTCHA PLACEHOLDER */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-6 h-6 rounded border-2 border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:border-blue-500">
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Please prove you are human by selecting the house.
                  </span>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full min-h-[52px] rounded-xl bg-blue-900 text-white font-semibold flex items-center justify-center gap-2.5 hover:bg-blue-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={19} weight="bold" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* SUCCESS/ERROR MESSAGE */}
              {msg && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-3.5 flex items-start gap-3 ${
                    success
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  {success ? (
                    <CheckCircle
                      size={21}
                      weight="fill"
                      className="shrink-0 text-green-600"
                    />
                  ) : (
                    <WarningCircle
                      size={21}
                      weight="fill"
                      className="shrink-0 text-red-600"
                    />
                  )}
                  <p
                    className={`text-sm font-medium leading-5 ${
                      success ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {msg}
                  </p>
                </div>
              )}

              <p className="mt-5 text-center text-xs leading-5 text-gray-400">
                By submitting this form, you agree that our team may contact
                you regarding your enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER 
      ========================================================= */}
      <footer className="border-t border-gray-300 mt-12 py-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-sm text-gray-600 flex flex-wrap gap-2 items-center justify-center md:justify-start">
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
    </main>
  );
}
