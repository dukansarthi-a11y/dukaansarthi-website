"use client";
import React from 'react';
import { jobOpenings } from '../data/content';
import { Briefcase, MapPin, Clock, ArrowRight, Building } from 'lucide-react';

export default function Careers() {
  return (
    <section className="careers-section section" id="careers">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">JOIN OUR TEAM</div>
          <h2 className="with-line center">Careers at DukaanSarthi</h2>
          <p className="section-subtitle">
            We are on a mission to digitize 10 million Indian retailers. If you're passionate about building impactful technology, we'd love to work with you.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="careers-grid">
          {jobOpenings.length === 0 ? (
            <div className="empty-jobs-state text-center">
              <div className="empty-icon-box">
                <Briefcase size={32} />
              </div>
              <h3>No Open Positions Right Now</h3>
              <p>We are currently fully staffed, but we are always looking for great talent. Send your resume to <strong>hr@dukaansarthi.com</strong> and we'll reach out when a role opens up!</p>
            </div>
          ) : (
            jobOpenings.map((job) => (
              <div key={job.id} className="job-card card">
                <div className="job-card-header">
                  <span className="job-department">{job.department}</span>
                  <span className={`job-type-badge ${job.type.toLowerCase() === 'remote' ? 'remote' : ''}`}>
                    {job.type}
                  </span>
                </div>
                
                <h3 className="job-title">{job.title}</h3>
                <p className="job-description">{job.description}</p>
                
                <div className="job-meta">
                  <div className="meta-item">
                    <MapPin size={16} className="meta-icon" />
                    <span>{job.location}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} className="meta-icon" />
                    <span>{job.experience}</span>
                  </div>
                </div>
                
                <div className="job-divider"></div>
                
                <a href={job.link} className="btn btn-outline-primary apply-btn">
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>
            ))
          )}
        </div>

      </div>

      <style>{`
        .careers-section {
          background-color: var(--white);
          position: relative;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        .empty-jobs-state {
          grid-column: 1 / -1;
          background-color: var(--light);
          border: 1px dashed var(--border);
          border-radius: var(--radius-md);
          padding: 60px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .empty-icon-box {
          background-color: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          padding: 16px;
          border-radius: 50%;
        }

        .empty-jobs-state h3 {
          font-size: 1.5rem;
          color: var(--dark);
        }

        .empty-jobs-state p {
          max-width: 500px;
          font-size: 1rem;
        }

        .job-card {
          display: flex;
          flex-direction: column;
          text-align: left;
          padding: 32px 24px;
        }

        .job-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .job-department {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .job-type-badge {
          font-size: 0.7rem;
          font-weight: 700;
          background-color: var(--light);
          color: var(--text-main);
          padding: 4px 10px;
          border-radius: 50px;
          border: 1px solid var(--border);
        }

        .job-type-badge.remote {
          background-color: #f0fdf4;
          color: #166534;
          border-color: #bbf7d0;
        }

        .job-title {
          font-size: 1.35rem;
          color: var(--dark);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .job-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .job-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-light);
        }

        .meta-icon {
          color: var(--text-muted);
        }

        .job-divider {
          height: 1px;
          background-color: var(--border);
          margin-bottom: 20px;
        }

        .apply-btn {
          width: 100%;
          justify-content: space-between;
        }

        @media (max-width: 1024px) {
          .careers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .careers-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
