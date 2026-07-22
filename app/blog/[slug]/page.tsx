import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowLeft, Clock, Calendar, ShieldCheck, MessageSquare, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found | Bet Vault v10" };
  }

  return {
    title: `${post.title} | Bet Vault v10 Strategy Hub`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const waArticleLink = getWhatsAppLink(`Hi Bet Vault v10, I read your article "${post.title}" and would like to setup an instant betting ID.`);

  return (
    <article className="py-16 sm:py-24 px-4 sm:px-6 relative amethyst-bg-mesh">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-black uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed italic border-l-4 border-cyan-400 pl-4 font-normal">
            {post.excerpt}
          </p>

          {/* Cover Image */}
          <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amethyst-950/80 via-transparent to-transparent" />
          </div>

          {/* Author Card */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amethyst-900 border border-slate-800">
            <div className="flex items-center gap-3">
              {post.author.avatarImage ? (
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-cyan-400/50">
                  <Image src={post.author.avatarImage} alt={post.author.name} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full bg-amethyst-950 border border-slate-700 flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
                  {post.author.avatar}
                </div>
              )}
              <div>
                <p className="text-xs font-black text-white">{post.author.name}</p>
                <p className="text-[11px] text-slate-400 font-mono">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono font-bold">
                ✓ Verified Analyst
              </span>
            </div>
          </div>
        </div>

        {/* Main Article Body (100% Humanized Content) */}
        <div className="glass-holo-card rounded-3xl p-8 sm:p-12 space-y-6 text-slate-200 text-base leading-relaxed border border-purple-500/20">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-200 font-normal">
              {paragraph}
            </p>
          ))}

          {/* Inline WhatsApp Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-amethyst-950 border border-cyan-400/30 space-y-4">
            <h4 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Ready to Bet on Verified Master Exchanges?</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Experience 2-minute WhatsApp setup and 5-minute instant payouts on Diamond Exchange, SkyExchange, Lotus365, and LaserBook.
            </p>
            <a
              href={waArticleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-neon-cyan px-6 py-3.5 rounded-2xl text-xs font-black items-center gap-2 uppercase tracking-wide"
            >
              <MessageSquare className="w-4 h-4 fill-amethyst-950" />
              <span>Open Betting ID on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Article Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <span className="text-xs font-mono text-slate-400 font-bold">ARTICLE TAGS:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-xl bg-amethyst-900 border border-slate-800 text-xs font-mono text-cyan-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 border-t border-slate-800 space-y-6">
            <h3 className="font-display font-black text-2xl text-white">
              Related Articles & Strategy Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="glass-holo-card rounded-2xl p-5 space-y-3 border border-purple-500/20">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{rel.category}</span>
                  <h4 className="font-display font-bold text-white text-base hover:text-cyan-300 transition-colors">
                    {rel.title}
                  </h4>
                  {/* RELATED ARTICLE OPENS IN NEW TAB */}
                  <a
                    href={`/blog/${rel.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-black text-cyan-300 hover:underline pt-2 items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
