"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast will my withdrawal reach my bank account or UPI ID?",
      a: "Our average payout processing speed is under 5 minutes. As soon as you request a withdrawal on your dashboard or via our 24/7 WhatsApp VIP desk, funds are sent directly via GPay, PhonePe, Paytm, or IMPS.",
    },
    {
      q: "What is the minimum deposit needed to open a new ID?",
      a: "You can start your master exchange betting ID with an initial deposit as low as ₹500. We recommend testing a small deposit and test withdrawal right after.",
    },
    {
      q: "Which master exchanges are supported on Bet Vault v10?",
      a: "We provide verified, direct master panel IDs for Diamond Exchange, SkyExchange, Lotus365, and LaserBook with zero price manipulation and live lines.",
    },
    {
      q: "Is my personal data and transaction history safe?",
      a: "100% confidential. All communication and banking validations are protected under 256-bit SSL encryption. We never share player data with third parties.",
    },
    {
      q: "What happens to my bets if a cricket match gets rained out?",
      a: "All bets follow official exchange settlement rules. If a match is declared void or abandoned due to weather, your staked balance is immediately returned to your account without deductions.",
    },
  ];

  const waLink = getWhatsAppLink("Hi Bet Vault v10 team, I have a question about betting IDs.");

  return (
    <section className="py-20 px-4 sm:px-6 relative amethyst-bg-mesh">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Clear Answers to Common Questions
          </h2>

          <p className="text-slate-300 text-base font-normal max-w-xl mx-auto">
            Everything you need to know about instant deposits, withdrawal speed, master exchange lines, and account privacy.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-holo-card rounded-2xl border border-purple-500/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-white text-base sm:text-lg hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-purple-500/20 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Box */}
        <div className="p-6 rounded-3xl bg-amethyst-900 border border-purple-500/30 text-center sm:flex sm:items-center sm:justify-between gap-4 space-y-4 sm:space-y-0">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-white text-base">Have a question not covered here?</h4>
            <p className="text-xs text-slate-400 font-normal">Our VIP support team is ready on WhatsApp to assist you directly.</p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-neon-cyan px-6 py-3.5 rounded-2xl text-xs font-black items-center justify-center gap-2 uppercase tracking-wide shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-amethyst-950" />
            <span>Ask Support on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
