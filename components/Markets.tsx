"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Flame, Trophy, Activity, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react";

export default function Markets() {
  const [activeTab, setActiveTab] = useState<"cricket" | "football" | "tennis" | "casino">("cricket");

  const marketsData = {
    cricket: [
      {
        id: "m1",
        title: "India vs Australia — 3rd T20 International",
        time: "TODAY • 7:00 PM IST",
        status: "LIVE MATCH",
        teamA: "India",
        oddsA: "1.82",
        teamB: "Australia",
        oddsB: "2.05",
        exchange: "Diamond Exchange",
        featured: true,
      },
      {
        id: "m2",
        title: "Mumbai Indians vs Chennai Super Kings",
        time: "TOMORROW • 7:30 PM IST",
        status: "UPCOMING IPL",
        teamA: "Mumbai Indians",
        oddsA: "1.90",
        teamB: "Chennai Super Kings",
        oddsB: "1.92",
        exchange: "SkyExchange",
        featured: true,
      },
      {
        id: "m3",
        title: "England vs Pakistan — ODI Series",
        time: "JUL 24 • 3:30 PM IST",
        status: "OPEN FOR BETS",
        teamA: "England",
        oddsA: "1.65",
        teamB: "Pakistan",
        oddsB: "2.30",
        exchange: "Lotus365",
        featured: false,
      },
    ],
    football: [
      {
        id: "f1",
        title: "Real Madrid vs Barcelona — El Clasico",
        time: "TONIGHT • 11:30 PM IST",
        status: "LIVE ODDS",
        teamA: "Real Madrid",
        oddsA: "2.10",
        teamB: "Barcelona",
        oddsB: "3.20",
        exchange: "Diamond Exchange",
        featured: true,
      },
      {
        id: "f2",
        title: "Manchester City vs Arsenal — Premier League",
        time: "SUNDAY • 9:00 PM IST",
        status: "UPCOMING",
        teamA: "Manchester City",
        oddsA: "1.75",
        teamB: "Arsenal",
        oddsB: "4.10",
        exchange: "SkyExchange",
        featured: false,
      },
    ],
    tennis: [
      {
        id: "t1",
        title: "Wimbledon Men's Singles Final",
        time: "JUL 25 • 6:30 PM IST",
        status: "FEATURED GRAND SLAM",
        teamA: "Novak Djokovic",
        oddsA: "1.70",
        teamB: "Carlos Alcaraz",
        oddsB: "2.15",
        exchange: "Lotus365",
        featured: true,
      },
    ],
    casino: [
      {
        id: "c1",
        title: "Live Teen Patti & Dragon Tiger Tables",
        time: "24/7 NON-STOP STREAMING",
        status: "INSTANT CARDS",
        teamA: "Player A",
        oddsA: "1.95",
        teamB: "Player B",
        oddsB: "1.95",
        exchange: "LaserBook",
        featured: true,
      },
      {
        id: "c2",
        title: "Live Roulette & Lightning Dice",
        time: "24/7 STREAMING",
        status: "HIGH MULTIPLIER",
        teamA: "Red Odds",
        oddsA: "2.00",
        teamB: "Black Odds",
        oddsB: "2.00",
        exchange: "Diamond Exchange",
        featured: false,
      },
    ]
  };

  return (
    <section id="markets" className="py-20 px-4 sm:px-6 relative amethyst-bg-mesh">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-500/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
              <Flame className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE SPORTS MARKETS & EXCHANGES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Active Match Markets & Master Lines
            </h2>
            <p className="text-slate-300 text-base max-w-xl font-normal">
              Direct Back & Lay odds pulled straight from top exchange servers. Real live lines, zero artificial price manipulation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-amethyst-900 border border-purple-500/20 self-start md:self-auto overflow-x-auto">
            {(["cricket", "football", "tennis", "casino"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 px-5 rounded-xl text-xs font-black uppercase transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-cyan-400 text-amethyst-950 shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Markets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketsData[activeTab].map((market) => {
            const matchMsg = `Hi Bet Vault v10, I want to place a bet on: ${market.title} (${market.exchange})`;
            const waLink = getWhatsAppLink(matchMsg);

            return (
              <div
                key={market.id}
                className="glass-holo-card rounded-3xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group border border-purple-500/20 hover:border-cyan-400/40 transition-all"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="px-3 py-1 rounded-xl bg-amethyst-900 border border-slate-800 text-[11px] font-mono font-bold text-cyan-300">
                      {market.exchange}
                    </span>
                    <p className="text-[11px] text-slate-400 font-mono mt-2">
                      {market.time}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                    {market.status}
                  </span>
                </div>

                {/* Match Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {market.title}
                </h3>

                {/* Odds Box */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-amethyst-950 border border-slate-800">
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-400 truncate font-medium">{market.teamA}</p>
                    <p className="font-mono text-lg font-black text-cyan-300">
                      {market.oddsA}
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[11px] text-slate-400 truncate font-medium">{market.teamB}</p>
                    <p className="font-mono text-lg font-black text-neonMagenta-400">
                      {market.oddsB}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action Link */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline-neon py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Bet on This Match via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
