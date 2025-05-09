import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Energy Industry News & Updates | WGES",
  description: "Stay informed about the latest developments in sustainable energy, industry trends, and WGES's project updates.",
};

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "WGES Completes Largest Commercial Solar Installation in Region",
    excerpt: "A new milestone achieved with the completion of a 2.5 MWp solar installation for a leading manufacturing facility.",
    date: "2024-03-15",
    image: "/images/news-solar.avif",
    category: "Projects"
  },
  {
    id: 2,
    title: "Innovation in Energy Storage: New Technology Partnership",
    excerpt: "Strategic partnership formed to implement cutting-edge battery storage solutions for commercial clients.",
    date: "2024-03-10",
    image: "/images/news-battery.avif",
    category: "Technology"
  },
  {
    id: 3,
    title: "Sustainable Energy Management Success Story",
    excerpt: "How our smart energy management system helped a retail chain reduce energy costs by 40%.",
    date: "2024-03-05",
    image: "/images/news-management.avif",
    category: "Case Studies"
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-0 pb-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src="/images/news-hero.avif"
            alt="Energy Industry News"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                  Latest News & Updates
                </h1>
                <p className="text-white/80 text-lg">
                  Stay informed about sustainable energy developments and our latest projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500 mb-2 block">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className="text-xl font-semibold text-secondary mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.id}`}
                    className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-700 mb-8">
                Subscribe to our newsletter to receive the latest news and insights
                about sustainable energy solutions.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 