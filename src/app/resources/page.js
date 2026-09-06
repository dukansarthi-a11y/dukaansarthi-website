import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollPopupForm from '@/components/ScrollPopupForm';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Business Resources & Blogs | DukaanSarthi',
  description: 'Read the latest tips on GST billing, inventory management, retail growth, and ERP software tutorials by DukaanSarthi.',
};

export default function ResourcesPage() {
  return (
    <div className="resources-page pt-20">
      <Navbar />
      
      {/* Header */}
      <header className="resources-header">
        <div className="container text-center">
          <div className="badge badge-primary mb-4">RESOURCES & BLOG</div>
          <h1 className="display-font text-4xl md:text-5xl font-bold mb-4">
            Grow Your <span className="text-gradient">Business</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Expert advice, GST updates, and retail management strategies to help you run your shop more efficiently.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="blog-grid">
            {blogs.map(blog => (
              <Link href={`/resources/${blog.slug}`} key={blog.id} className="blog-card">
                <div className="blog-img-wrapper">
                  <img src={blog.image} alt={blog.title} className="blog-img" />
                  <span className="blog-category">{blog.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="flex items-center gap-1"><BookOpen size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <span className="blog-read-more">
                    Read Article <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ScrollPopupForm />
      <Footer />

      <style>{`
        .pt-20 { padding-top: 100px; }
        .mb-4 { margin-bottom: 16px; }
        .py-16 { padding: 64px 0; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-4xl { font-size: 2.25rem; }
        .text-5xl { font-size: 3rem; }
        .font-bold { font-weight: 700; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-1 { gap: 4px; }
        .bg-light { background-color: var(--light); }

        .resources-header {
          padding: 60px 0 40px;
          background: linear-gradient(180deg, rgba(0, 181, 165, 0.05) 0%, transparent 100%);
        }

        .text-gradient {
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        .blog-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 181, 165, 0.1);
          border-color: rgba(0, 181, 165, 0.2);
        }

        .blog-img-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        .blog-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--white);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .blog-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-meta {
          display: flex;
          gap: 16px;
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .blog-title {
          font-size: 1.25rem;
          color: var(--dark);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .blog-excerpt {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }

        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: gap 0.3s;
        }

        .blog-card:hover .blog-read-more {
          gap: 8px;
        }

        @media (max-width: 768px) {
          .text-4xl { font-size: 2rem; }
          .pt-20 { padding-top: 80px; }
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
