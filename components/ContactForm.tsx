"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Send, MessageSquare, PhoneCall, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [queryType, setQueryType] = useState("New ID Creation");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Hi BetVault Team!\nName: ${name}\nPhone: ${phone}\nQuery: ${queryType}\nMessage: ${message}`;
    const waUrl = getWhatsAppLink(formattedMsg);
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative amethyst-bg-mesh">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span>24/7 VIP SUPPORT DESK</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Connect with Our VIP Account Desk
          </h2>

          <p className="text-slate-300 text-base font-normal max-w-xl mx-auto">
            Need help creating your ID, setting up a deposit recharge, or processing an instant withdrawal? We are online to help right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hostess Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-holo-card rounded-3xl p-6 sm:p-8 space-y-6 border border-cyan-500/30 text-center sm:text-left">
              
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Bet Vault VIP Host Tanya"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="px-3 py-1 rounded-full bg-cyan-400 text-amethyst-950 font-mono text-[10px] font-black uppercase">
                    DIRECT SUPPORT DESK
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">Tanya Kapoor</h3>
                  <p className="text-xs text-slate-300">"Message me directly on WhatsApp for 2-minute instant account creation."</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-amethyst-950 border border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <div className="text-xs font-mono">
                    <p className="text-white font-bold">Average Response Speed</p>
                    <p className="text-slate-400">&lt; 45 Seconds on WhatsApp</p>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink("Hello Tanya, I want to talk directly to a VIP account manager.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp-v10 py-3.5 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Form Box */}
          <div className="lg:col-span-7">
            <div className="glass-holo-card rounded-3xl p-6 sm:p-10 space-y-6 border border-purple-500/20">
              
              <h3 className="font-display font-black text-2xl text-white">
                Submit Support Query
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Your Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-amethyst-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 outline-none font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">WhatsApp Phone Number:</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-amethyst-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Query Category:</label>
                  <select
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value)}
                    className="w-full bg-amethyst-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:border-cyan-400 outline-none font-medium"
                  >
                    <option value="New ID Creation">New Betting ID Setup (IPL & Exchange)</option>
                    <option value="Instant Deposit">Deposit Recharge Query</option>
                    <option value="Instant Withdrawal">Withdrawal Clearance Request</option>
                    <option value="Odds Query">Match Odds & Session Query</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Message / Request Details:</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-amethyst-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 outline-none font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-neon-cyan py-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <Send className="w-4 h-4 fill-amethyst-950" />
                  <span>Submit & Launch WhatsApp Support</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
