import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Brain, Rocket, Lightbulb, Sparkles, BookOpen } from "lucide-react";

const getPostIcon = (tags: string[]) => {
  if (tags.includes("AI") || tags.includes("Machine Learning")) return Brain;
  if (tags.includes("Startup") || tags.includes("Product")) return Rocket;
  if (tags.includes("Engineering") || tags.includes("Best Practices")) return Lightbulb;
  return Sparkles;
};

export const metadata = {
  title: "Blog | Ashwani Kumar",
  description: "Thoughts on AI, engineering, building products, and lessons learned along the way.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Thoughts on AI, engineering, building products, and lessons learned along the way.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="glass rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 transition-all duration-300 group relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-3">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  {(() => {
                    const Icon = getPostIcon(post.tags);
                    return (
                      <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                        <Icon size={28} className="text-indigo-400" />
                      </div>
                    );
                  })()}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
