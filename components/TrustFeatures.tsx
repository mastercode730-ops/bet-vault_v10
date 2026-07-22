"use client";

import Image from "next/image";
import { ShieldCheck, Zap, Lock, Headphones, CheckCircle2, Award } from "lucide-react";

export default function TrustFeatures() {
  const trustPoints = [
    {
      icon: Zap,
      title: "5-Minute Instant Withdrawal Guarantee",
      desc: "No waiting until Monday morning. When you win on an IPL match or live casino game, request a payout and receive UPI funds within 5 minutes flat.",
      color: "text-cyan-300",
      bg: "bg-cyan-500/10 border-cyan-400/30",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Human WhatsApp Support",
      desc: "Forget unhelpful bots. Real human account managers are online on WhatsApp 24/7 to resolve bet settlements, match line queries, and instant deposits.",
      color: "text-neonMagenta-400",
      bg: "bg-neonMagenta-500/10 border-neonMagenta-500/30",
    },
    {
      icon: ShieldCheck,
      title: "100% Verified Master Exchange Panel",
      desc: "Direct access to official servers like Diamond Exchange, SkyExchange, Lotus365, and LaserBook. Unedited live odds with zero hidden markups.",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30",
    },
    {
      icon: Lock,
      title: "Encrypted Privacy & Financial Protection",
      desc: "Your data and transaction history are safeguarded with 256-bit SSL protocols. We strictly guarantee 100% punter account privacy.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative amethyst-bg-mesh">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
            <Award className="w-4 h-4" />
            <span>THE BET VAULT PROMISE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Why Over 30,000 Bettors Trust Bet Vault v10
          </h2>

          <p className="text-slate-300 text-base leading-relaxed font-normal">
            We operate with total financial clarity, lightning withdrawal speeds, and dedicated VIP support that values every punter.
          </p>
        </div>

        {/* Feature Cards Grid + Model Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hostess Spotlight Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-holo-card rounded-3xl p-6 sm:p-8 space-y-6 border border-cyan-500/30 text-center sm:text-left relative overflow-hidden">
              
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                  alt="Bet Vault VIP Host Simran"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amethyst-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="px-3 py-1 rounded-full bg-cyan-400 text-amethyst-950 font-mono text-[10px] font-black uppercase">
                    VIP CONCIERGE DESK
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">Simran Gill</h3>
                  <p className="text-xs text-slate-300">"Your financial security and instant payouts are cleared with zero friction."</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Verified WhatsApp VIP Desk</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neonMagenta-300">
                  <CheckCircle2 className="w-4 h-4 text-neonMagenta-400" />
                  <span>Zero Delay Policy on Valid Account Payouts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Instant Account Recharge via GPay / PhonePe / Paytm</span>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-holo-card rounded-2xl p-6 space-y-4 border border-purple-500/20 hover:border-cyan-400/40 transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.bg}`}>
                    <IconComp className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-black text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
