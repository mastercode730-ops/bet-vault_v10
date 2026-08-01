"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Shield, Zap, Menu, X, MessageSquare, Sparkles, Activity, PhoneCall, Globe } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const waLink = getWhatsAppLink("Hey BetVault, I want to create my instant betting ID now.");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      
      {/* Top Announcement Bar */}
      <div className="bg-amethyst-950/90 border-b border-cyan-500/20 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>5,940 Players Active Live</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-neonMagenta-400 font-semibold">
              ⚡ 5-Minute Instant UPI Withdrawal Engine
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline text-[11px] text-slate-400">Official Master Exchange Partner</span>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 flex items-center gap-1 text-[11px] font-bold"
            >
              <PhoneCall className="w-3 h-3 text-cyan-400" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Curved Dock Navbar */}
      <div className={`px-4 sm:px-6 py-3 transition-all ${
        scrolled ? "glass-dock-nav py-2.5 shadow-2xl" : "bg-amethyst-950/80 backdrop-blur-xl border-b border-purple-500/10"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Holographic Gradient */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-cyan-magenta p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-amethyst-950 rounded-[14px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-400 fill-cyan-400/20" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  BET<span className="text-gradient-neon">VAULT</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-black bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 rounded-full animate-neon-pulse">
                  v10 PRO
                </span>
              </div>
              <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                ROYAL AMETHYST EXCHANGE NETWORK
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-200">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              About Us
            </Link>
            <a href="/#markets" className="hover:text-cyan-300 transition-colors">
              Sports Markets
            </a>
            <a href="/#calculator" className="hover:text-cyan-300 transition-colors">
              Odds Calc
            </a>
            <Link href="/blog" className="hover:text-cyan-300 transition-colors">
              Blog Hub
            </Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              Contact VIP
            </Link>
          </nav>

          {/* WhatsApp Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-cyan px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 tracking-wider uppercase"
            >
              <Zap className="w-4 h-4 fill-amethyst-950 stroke-amethyst-950" />
              Get Instant ID
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-amethyst-900 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 border-t border-purple-500/20 px-3 pb-5 space-y-3 bg-amethyst-950/95 backdrop-blur-2xl rounded-2xl p-4 border border-cyan-500/30">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amethyst-900 text-xs mb-2 border border-slate-800 font-mono">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-slate-200">5,940 Bettors Online Right Now</span>
            </div>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              About Us
            </Link>
            <a
              href="/#markets"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              Sports & Casino Markets
            </a>
            <a
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              Odds & Profit Calculator
            </a>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              Blog Guides & Articles
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-amethyst-900 font-bold text-sm"
            >
              Contact VIP Support
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-v10 mt-4 py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-black uppercase tracking-wide"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Instant WhatsApp ID Setup
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
