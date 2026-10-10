import { X, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { getAssetUrl } from '../../utils/assets';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div
        className="modal-dialog"
        style={{ padding: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="section-label" style={{ margin: 0, padding: '0.15rem 0.5rem', fontSize: '0.75rem' }}>
              <span className="indicator-dot" />
              CASE STUDY // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              color: 'var(--text-muted)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-surface-elevated)'
            }}
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Title & Summary */}
          <div>
            <h2 id="project-modal-title" style={{ fontSize: '1.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              {project.summary}
            </p>
          </div>

          {/* Screenshot / Architecture Blueprint Preview */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-canvas)',
            maxHeight: '340px'
          }}>
            <img
              src={getAssetUrl(project.screenshot)}
              alt={`Architecture view for ${project.title}`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={15} />
                Live Demo Application
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={15} />
              Repository Source
            </a>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }} className="mono">
              Engineered With
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* In-Depth Description */}
          <div style={{
            padding: '1.25rem',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)'
          }}>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              System Overview & Architecture
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            {project.caseStudy?.architecture && (
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)' }}>
                  ARCHITECTURAL TOPOLOGY:
                </span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {project.caseStudy.architecture}
                </p>
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.caseStudy?.keyFeatures && project.caseStudy.keyFeatures.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--accent)" />
                Key Engineered Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.caseStudy.keyFeatures.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '2px' }}>[0{i + 1}]</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {project.caseStudy?.technicalChallenges && project.caseStudy.technicalChallenges.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={16} color="var(--amber-accent)" />
                Technical Challenges & Engineering Solutions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.caseStudy.technicalChallenges.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem', marginBottom: '0.35rem' }}>
                      ⚡ Challenge: {item.challenge}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      🛡️ Solution: {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation Details */}
          {project.caseStudy?.implementationDetails && project.caseStudy.implementationDetails.length > 0 && (
            <div style={{
              padding: '1rem',
              border: '1px dashed var(--border-muted)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }} className="mono">
                Implementation Notes & Testing
              </h4>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {project.caseStudy.implementationDetails.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: '0.3rem' }}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
