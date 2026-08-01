import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, HeartHandshake, Award, Users, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "About Us | BetVault Exchange Hub",
  description: "Learn why BetVault was established to bring 100% financial clarity, instant payouts, and zero-hassle betting to Indian sports fans.",
};

export default function AboutPage() {
  const waLink = getWhatsAppLink("Hi BetVault team, I read your About page and want to join the VIP betting hub.");

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative amethyst-bg-mesh space-y-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>OUR PHILOSOPHY & STORY</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          Restoring Absolute Trust in <span className="text-gradient-neon">Indian Sports Betting</span>
        </h1>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          We built BetVault because we were tired of watching genuine punters get scammed by shady Telegram bookies who delay payouts or disappear during peak IPL matches.
        </p>
      </div>

      {/* Model Ambassador & Story Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 relative">
          <div className="glass-holo-card rounded-3xl p-6 sm:p-8 space-y-6 border border-cyan-500/30 text-center sm:text-left">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Bet Vault Host Tanya"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amethyst-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                <span className="px-3 py-1 rounded-full bg-cyan-400 text-amethyst-950 font-mono text-[10px] font-black uppercase">
                  LEAD RISK AUDITOR & HOST
                </span>
                <h3 className="font-display font-bold text-xl text-white">Tanya Kapoor</h3>
                <p className="text-xs text-slate-300">"We clear every valid withdrawal within 5 minutes flat. Period."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 text-slate-200 font-normal text-base leading-relaxed">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Created by Experienced Bettors, for Real Punters
          </h2>

          <p>
            When we first started betting on IPL matches seven years ago, the environment was chaotic. You had to message unverified WhatsApp numbers, deposit cash into random accounts, and pray that the bookie wouldn't block your number after you won a big bet.
          </p>

          <p>
            That is why we built <strong>BetVault</strong>. We established direct partnerships with master exchange servers (Diamond Exchange, SkyExchange, Lotus365, LaserBook) and automated banking validation so payouts land in under 5 minutes without manual delays.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amethyst-900 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-xs font-bold text-white">30,000+ Active Verified Bettors</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amethyst-900 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-neonMagenta-400 shrink-0" />
              <span className="text-xs font-bold text-white">₹15+ Crore Payouts Cleared</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-neon-cyan px-8 py-4 rounded-2xl text-xs font-black items-center gap-3 uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-amethyst-950" />
              <span>Join Bet Vault VIP Network</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
