import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Link, useLocation } from "wouter";

const blogs = [
  {
    id: 0,
    slug: "oaga-art-resort-reimagined-2026",
    title: "Oaga Art Resort Reimagined: A Colorful New Chapter Begins in the Maldives",
    excerpt:
      "Beginning 1 August 2026, Oaga Art Resort unveils refreshed villas, new overwater accommodation and upgraded dining. Discover why this homegrown Maldivian resort is one of the most creative and memorable stays in the islands.",
    image: "/blog-images/oaga-art-resort-hero.jpg",
    category: "Maldives",
    date: "July 31, 2026",
    readTime: "7 min read",
  },
  {
    id: 1,
    slug: "taj-lake-palace-michelin-guide-three-keys",
    title: "Taj Lake Palace: India's Floating Palace Honored with the MICHELIN Guide Three Keys Distinction",
    excerpt:
      "Rising from the calm waters of Lake Pichola, Taj Lake Palace has earned the MICHELIN Guide Three Keys — the highest hotel recognition. Discover the history, experience and why it belongs on every luxury traveller's list.",
    image: "/blog-images/taj-lake-palace-michelin.png",
    category: "General",
    date: "July 30, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    slug: "travel-leisure-worlds-best-awards-2026",
    title: "Travel + Leisure World's Best Awards 2026: Four Maldives Resorts in the Top 100",
    excerpt:
      "Baros, JOALI, Waldorf Astoria Maldives Ithaafushi and Vakkaru have all been ranked among the world's top 100 hotels. Here's what sets each apart — and how to choose the right one for you.",
    image: "/blog-images/tl2026-baros.png",
    category: "Maldives",
    date: "July 25, 2026",
    readTime: "5 min read",
  },
];

const categories = ["All", "Maldives", "Bali", "Thailand", "General"];

const categoryColors: Record<string, string> = {
  Maldives: "#162660",
  Bali: "#b8860b",
  Thailand: "#1a7a4a",
  General: "#6b4f9e",
};

const categorySlug: Record<string, string> = {
  All: "/blogs",
  Maldives: "/blogs/maldives",
  Bali: "/blogs/bali",
  Thailand: "/blogs/thailand",
  General: "/blogs/general",
};

export default function Blogs() {
  const [location] = useLocation();

  const pathToCategory: Record<string, string> = {
    "/blogs": "All",
    "/blogs/maldives": "Maldives",
    "/blogs/bali": "Bali",
    "/blogs/thailand": "Thailand",
    "/blogs/general": "General",
  };

  const [activeCategory, setActiveCategory] = useState(
    pathToCategory[location] ?? "All"
  );

  useEffect(() => {
    setActiveCategory(pathToCategory[location] ?? "All");
  }, [location]);

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <title>Travel Blog | Antravi - Luxury Travel Insights</title>
      <meta
        name="description"
        content="Explore Antravi's travel blog for expert guides, destination insights, and luxury travel tips for Maldives, Bali, and Thailand."
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-[#162660] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--luxury-gold)",
                marginBottom: "1rem",
              }}
            >
              Stories & Insights
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Travel Journal
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wider opacity-85">
              Expert guides, destination secrets, and inspiration before you reserve next travel
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={categorySlug[cat]}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "2px",
                    border:
                      activeCategory === cat
                        ? "1px solid #162660"
                        : "1px solid #d1d5db",
                    backgroundColor:
                      activeCategory === cat ? "#162660" : "transparent",
                    color: activeCategory === cat ? "#ffffff" : "#6b7280",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.borderColor = "#162660";
                      e.currentTarget.style.color = "#162660";
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.borderColor = "#d1d5db";
                      e.currentTarget.style.color = "#6b7280";
                    }
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  {/* Image */}
                  <div
                    className="overflow-hidden mb-5"
                    style={{ borderRadius: "2px", aspectRatio: "16/10" }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: categoryColors[blog.category] ?? "#162660",
                        fontWeight: 600,
                      }}
                    >
                      {blog.category}
                    </span>
                    <span style={{ color: "#d1d5db", fontSize: "0.6rem" }}>•</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        color: "#9ca3af",
                      }}
                    >
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="font-heading font-bold mb-3 group-hover:opacity-70 transition-opacity"
                    style={{ fontSize: "1.15rem", color: "#162660", lineHeight: 1.35 }}
                  >
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6b7280",
                      lineHeight: 1.7,
                      flexGrow: 1,
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-5 flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--luxury-gold)",
                        fontWeight: 600,
                      }}
                    >
                      Read Article
                    </span>
                    <span style={{ color: "var(--luxury-gold)", fontSize: "0.7rem" }}>→</span>
                  </div>

                  {/* Date */}
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "#9ca3af",
                    }}
                  >
                    {blog.date}
                  </p>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                No articles found for this category.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--luxury-gold)",
                marginBottom: "1rem",
              }}
            >
              Ready to Travel?
            </p>
            <h2
              className="font-heading font-bold mb-4"
              style={{ fontSize: "2rem", color: "#162660" }}
            >
              Turn Inspiration into Your Journey
            </h2>
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.7 }}>
              Our travel specialists are ready to craft your perfect itinerary.
            </p>
            <Link
              href="/contact"
              className="btn-editorial"
              style={{ display: "inline-block" }}
            >
              Plan With Antravi
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
