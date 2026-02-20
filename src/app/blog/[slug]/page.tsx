import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Brain, Rocket, Lightbulb, Sparkles, BookOpen } from "lucide-react";

const getPostIcon = (tags: string[]) => {
  if (tags.includes("AI") || tags.includes("Machine Learning")) return Brain;
  if (tags.includes("Startup") || tags.includes("Product")) return Rocket;
  if (tags.includes("Engineering") || tags.includes("Best Practices")) return Lightbulb;
  return Sparkles;
};
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Ashwani Kumar`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Icon and Tags */}
          <div className="flex items-center gap-4 mb-6">
            {(() => {
              const Icon = getPostIcon(post.tags);
              return (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                  <Icon size={28} className="text-indigo-400" />
                </div>
              );
            })()}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-8 border-b border-gray-800">
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-cyan-400 prose-code:bg-gray-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800 prose-blockquote:border-l-indigo-500 prose-blockquote:bg-gray-900/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-li:text-gray-300 prose-ul:text-gray-300 prose-ol:text-gray-300">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                AK
              </div>
              <div>
                <p className="text-white font-medium">Ashwani Kumar</p>
                <p className="text-sm text-gray-400">
                  Senior Product Engineer building AI-powered products
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
