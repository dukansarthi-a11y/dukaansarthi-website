import React from 'react';
import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollPopupForm from '@/components/ScrollPopupForm';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

// Generate static params for SEO and fast loading
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return { title: 'Not Found' };
  
  return {
    title: `${blog.title} | DukaanSarthi Resources`,
    description: blog.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  // Very basic markdown parser for our dummy content
  const renderContent = (content) => {
    return content.split('\n').map((line, idx) => {
      if (line.startsWith('# ')) {
        return <h1 key={idx} className="blog-h1">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={idx} className="blog-h2">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('- ')) {
        return <li key={idx} className="blog-li">{line.replace('- ', '')}</li>;
      }
      if (line.startsWith('**') && line.endsWith('**') && line.length < 50) {
        return <p key={idx}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
      }
      // Handle inline bolding basic
      let formattedLine = line;
      if (formattedLine.includes('**')) {
        const parts = formattedLine.split('**');
        formattedLine = parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
      }
      
      if (line.trim() === '') return <br key={idx} />;
      return <p key={idx} className="blog-p">{formattedLine}</p>;
    });
  };

  return (
    <div className="blog-post-page pt-20">
      <Navbar />
      
      <main className="blog-main py-16">
        <div className="container max-w-3xl">
          
          <Link href="/resources" className="back-link">
            <ChevronLeft size={16} /> Back to Resources
          </Link>

          <article className="blog-article">
            <div className="badge badge-primary mb-4">{blog.category}</div>
            
            <h1 className="article-title">{blog.title}</h1>
            
            <div className="article-meta">
              <span className="flex items-center gap-2"><Calendar size={16} /> {blog.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {blog.readTime}</span>
            </div>

            <div className="article-image-wrapper">
              <img src={blog.image} alt={blog.title} className="article-main-image" />
            </div>

            <div className="article-content">
              {renderContent(blog.content)}
            </div>
          </article>
          
          <div className="article-cta">
            <h3>Ready to implement this in your business?</h3>
            <p>Get started with DukaanSarthi today and automate your retail operations.</p>
            <a href="/#contact" className="btn btn-primary">Book Free Demo</a>
          </div>

        </div>
      </main>

      <ScrollPopupForm />
      <Footer />

      <style>{`
        .pt-20 { padding-top: 100px; }
        .py-16 { padding: 64px 0; }
        .mb-4 { margin-bottom: 16px; }
        .max-w-3xl { max-width: 48rem; margin: 0 auto; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 8px; }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 32px;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .article-title {
          font-size: 2.5rem;
          line-height: 1.2;
          color: var(--dark);
          margin-bottom: 24px;
          font-family: var(--font-family);
        }

        .article-meta {
          display: flex;
          gap: 24px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 24px;
        }

        .article-image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .article-main-image {
          width: 100%;
          height: auto;
          max-height: 450px;
          object-fit: cover;
          display: block;
        }

        .article-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--dark-light);
        }

        .blog-h1 {
          font-size: 2rem;
          color: var(--dark);
          margin: 40px 0 20px;
          line-height: 1.3;
        }

        .blog-h2 {
          font-size: 1.5rem;
          color: var(--dark);
          margin: 32px 0 16px;
          line-height: 1.3;
        }

        .blog-p {
          margin-bottom: 20px;
        }

        .blog-li {
          margin-bottom: 12px;
          margin-left: 20px;
          position: relative;
        }
        
        .blog-li::before {
          content: "•";
          color: var(--primary);
          font-weight: bold;
          position: absolute;
          left: -15px;
        }

        .article-cta {
          margin-top: 60px;
          padding: 40px;
          background: linear-gradient(135deg, rgba(0, 181, 165, 0.05) 0%, rgba(10, 102, 194, 0.05) 100%);
          border-radius: 16px;
          text-align: center;
          border: 1px solid var(--border);
        }

        .article-cta h3 {
          font-size: 1.5rem;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .article-cta p {
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .article-title { font-size: 2rem; }
          .article-cta { padding: 30px 20px; }
        }
      `}</style>
    </div>
  );
}
