"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Zap, ArrowRight, Lock, CheckCircle2, Trophy, Clock, Sparkles, Star, PhoneCall } from "lucide-react";

export default function Hero() {
  const [selectedSport, setSelectedSport] = useState("Cricket IPL");
  const [selectedAmount, setSelectedAmount] = useState("₹1,000");
  const [selectedExchange, setSelectedExchange] = useState("Diamond Exchange");

  const customMessage = `Hello Bet Vault v10! I want to set up my betting ID right now.\nSport: ${selectedSport}\nDeposit: ${selectedAmount}\nExchange: ${selectedExchange}`;
  const whatsappUrl = getWhatsAppLink(customMessage);

  return (
    <section className="relative pt-10 pb-20 md:py-24 px-4 sm:px-6 overflow-hidden amethyst-bg-mesh amethyst-grid-dots">
      
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-35 right-10 w-96 h-96 bg-neonMagenta-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Copy & Host Spotlight */}
        <div className="lg:col-span-7 space-y-6 text-left relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>BET VAULT v10 PRO — NEXT-GEN EXCHANGE HUB</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Bet Smart on Master Lines. <br className="hidden sm:inline" />
            <span className="text-gradient-neon">5-Min Payout Guarantee.</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Let's cut through the noise — sports betting should be exciting, transparent, and completely stress-free. We built Bet Vault v10 so you can create a verified master exchange ID in 2 minutes and withdraw your winnings straight to your GPay, Paytm, or UPI within 5 minutes flat.
          </p>

          {/* Featured Host Spotlight Card */}
          <div className="p-4 rounded-3xl glass-holo-card border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-cyan-400/50 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Bet Vault Host Tanya"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-cyan-400 stroke-cyan-400" />
                ))}
                <span className="text-xs font-mono font-bold text-slate-300 ml-1">5.0 VIP Rating</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                "Instant payouts 24 hours a day — no delays, no excuses."
              </h4>
              <p className="text-xs text-slate-400">
                — <span className="text-cyan-300 font-semibold">Tanya Kapoor</span>, Lead Risk Manager & VIP Host
              </p>
            </div>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amethyst-900/80 border border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">&lt; 2 Mins Setup</p>
                <p className="text-[11px] text-slate-400">Direct WhatsApp Desk</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amethyst-900/80 border border-slate-800">
              <div className="p-2.5 rounded-xl bg-neonMagenta-500/10 text-neonMagenta-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">100% Payout Security</p>
                <p className="text-[11px] text-slate-400">Verified IMPS & UPI</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amethyst-900/80 border border-slate-800">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white">Top Exchanges</p>
                <p className="text-[11px] text-slate-400">Diamond, Sky & Lotus</p>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-3 group tracking-wider uppercase"
            >
              <Zap className="w-5 h-5 fill-amethyst-950 stroke-amethyst-950" />
              Get Instant WhatsApp ID
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#markets"
              className="btn-outline-neon px-6 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2"
            >
              Explore Live Sports Odds ↓
            </a>
          </div>

        </div>

        {/* Right Column: Interactive ID Configurator Widget */}
        <div className="lg:col-span-5 relative z-10">
          <div className="glass-holo-card rounded-3xl p-6 sm:p-8 space-y-6 border border-cyan-500/40">
            
            {/* Widget Header */}
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="font-mono text-xs text-cyan-300 font-black uppercase tracking-wider">
                  LIVE ID CONFIGURATOR
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">v10 PRO Ready</span>
            </div>

            {/* Step 1: Sport Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                1. Select Sport or Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Cricket IPL", "Football", "Tennis", "Live Casino"].map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                      selectedSport === sport
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/10"
                        : "bg-amethyst-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span>{sport}</span>
                    {selectedSport === sport && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deposit Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                2. Choose Deposit Tier:
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {["₹500", "₹1,000", "₹5,000", "₹10,000+"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-2.5 text-center rounded-xl text-xs font-mono font-black transition-all border ${
                      selectedAmount === amt
                        ? "bg-cyan-400 text-amethyst-950 border-cyan-300 shadow-md"
                        : "bg-amethyst-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Exchange Selection */}
            <div className="space-y-2">
              <label className="text-xs text-slate-200 font-bold block">
                3. Choose Verified Exchange Server:
              </label>
              <select
                value={selectedExchange}
                onChange={(e) => setSelectedExchange(e.target.value)}
                className="w-full bg-amethyst-900 border border-slate-800 text-slate-100 text-xs rounded-xl p-3 font-semibold focus:border-cyan-400 outline-none"
              >
                <option value="Diamond Exchange">Diamond Exchange (High Speed Live Odds)</option>
                <option value="SkyExchange">SkyExchange (Best Fancy & Session Odds)</option>
                <option value="Lotus365">Lotus365 (Live Cards & International Odds)</option>
                <option value="LaserBook">LaserBook (Auto Punter Dashboard)</option>
              </select>
            </div>

            {/* Config Summary Card */}
            <div className="p-4 rounded-xl bg-amethyst-950 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                <span>ESTIMATED SETUP TIME</span>
                <span className="text-cyan-400 font-bold">⚡ ~2 Mins via WhatsApp</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                <span>Welcome Bonus:</span>
                <span className="text-neonMagenta-400 font-mono">+10% Extra Balance on First Load</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-v10 py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <PhoneCall className="w-4 h-4 fill-white" />
              Send Config & Open ID on WhatsApp
            </a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>256-Bit Encrypted Banking Pipeline</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
