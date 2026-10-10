import React from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div
        className="modal-dialog"
        style={{ maxWidth: '680px', padding: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award size={18} color="var(--accent)" />
            <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
              VERIFIED CREDENTIAL PREVIEW
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
            aria-label="Close certificate modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h3 id="cert-modal-title" style={{ fontSize: '1.45rem', marginBottom: '0.35rem' }}>
              {certification.name}
            </h3>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Issued by <strong style={{ color: 'var(--text-primary)' }}>{certification.issuingOrganization}</strong>
            </div>
          </div>

          {/* Certificate Image or Technical Graphic */}
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-canvas)'
          }}>
            <img
              src={certification.certificateImage || '/certificates/cert-placeholder.svg'}
              alt={`Certificate credential for ${certification.name}`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>

          {/* Metadata Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '1rem',
            background: 'var(--bg-surface-elevated)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div>
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ISSUE DATE:</span>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                {certification.issueDate}
              </div>
            </div>

            {certification.credentialId && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>CREDENTIAL ID:</span>
                <div className="mono" style={{ fontSize: '0.82rem', color: 'var(--accent)', marginTop: '2px' }}>
                  {certification.credentialId}
                </div>
              </div>
            )}

            {certification.scoreOrResult && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>SCORE / RESULT:</span>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {certification.scoreOrResult}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {certification.verificationUrl ? (
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={14} />
              Verify on Issuer Platform
            </a>
          ) : (
            <div />
          )}

          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
