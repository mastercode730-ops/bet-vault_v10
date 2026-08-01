"use client";
import Link from 'next/link';
import { Shield, Zap, Lock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const waLink = getWhatsAppLink("Hello BetVault, I want to create a new online betting ID.");

  return (
    <footer className="bg-amethyst-950 border-t border-purple-500/20 text-slate-400 py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-cyan-magenta flex items-center justify-center text-amethyst-950 font-black">
                <Shield className="w-5 h-5 fill-amethyst-950 stroke-amethyst-950" />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  BET<span className="text-gradient-neon">VAULT</span>
                </span>
                <span className="ml-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                  v10 PRO
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-sm">
              India's premier royal amethyst sports exchange network. Connecting punters directly to verified master exchange servers with 5-minute instant payouts and 24/7 human WhatsApp desk support.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>256-Bit SSL Encrypted Banking Pipeline</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-cyan-300 transition-colors">Home Page</Link>
              </li>
              <li>
                </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">About Bet Vault</Link>
              </li>
              <li>
                <a href="/#markets" className="hover:text-cyan-300 transition-colors">Live Sports Markets</a>
              </li>
              <li>
                <a href="/#calculator" className="hover:text-cyan-300 transition-colors">Odds & Profit Calculator</a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-300 transition-colors">Strategy Blog Articles</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">VIP Contact Desk</Link>
              </li>
            </ul>
          </div>

          {/* Master Exchanges */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              Verified Master Exchanges
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-amethyst-900 border border-slate-800 text-cyan-300">✓ Diamond Exchange</div>
              <div className="p-2.5 rounded-xl bg-amethyst-900 border border-slate-800 text-cyan-300">✓ SkyExchange</div>
              <div className="p-2.5 rounded-xl bg-amethyst-900 border border-slate-800 text-cyan-300">✓ Lotus365</div>
              <div className="p-2.5 rounded-xl bg-amethyst-900 border border-slate-800 text-cyan-300">✓ LaserBook</div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-neon-cyan py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 uppercase tracking-wider mt-4"
            >
              <Zap className="w-4 h-4 fill-amethyst-950" />
              Get Instant ID via WhatsApp
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-purple-500/20 text-center sm:flex sm:items-center sm:justify-between gap-4 text-[11px] text-slate-500 font-normal">
          <p>© 2026 BetVault. All rights reserved. Play Responsibly. 18+ Only.</p>
          <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0 font-medium flex-wrap">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Sitemap</a>
            <span>•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Robots.txt</a>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Responsible Gaming</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
