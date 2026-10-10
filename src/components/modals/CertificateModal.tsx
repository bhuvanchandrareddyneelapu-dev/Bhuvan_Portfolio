import React from 'react';
import { X, ExternalLink, Award, FileText, Image as ImageIcon } from 'lucide-react';
import type { CertificationItem } from '../../types/portfolio';
import { getAssetUrl } from '../../utils/assets';

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  const imageSrc = getAssetUrl(certification.certificateImage || '/certificates/cert-placeholder.svg');
  const pdfSrc = certification.certificatePdf ? getAssetUrl(certification.certificatePdf) : null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div
        className="modal-dialog"
        style={{ maxWidth: '720px', padding: 0 }}
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
              VERIFIED CREDENTIAL PREVIEW {certification.category ? `// ${certification.category.toUpperCase()}` : ''}
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

          {/* Pending file alert if applicable */}
          {certification.isPendingFile && (
            <div style={{
              padding: '0.65rem 0.95rem',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }} className="mono">
              <span>ℹ️ File Asset Pending: Place your certificate file at {certification.certificateImage || '/public/certificates/'}</span>
            </div>
          )}

          {/* Certificate Image or Technical Graphic */}
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-canvas)',
            maxHeight: '440px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={imageSrc}
              alt={`Certificate credential for ${certification.name}`}
              style={{ width: '100%', height: 'auto', maxHeight: '420px', display: 'block', objectFit: 'contain' }}
              loading="lazy"
              onError={(e) => {
                // Graceful fallback to default svg if individual image hasn't been uploaded yet
                (e.currentTarget as HTMLImageElement).src = getAssetUrl('/certificates/cert-placeholder.svg');
              }}
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
            {certification.category && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>CATEGORY:</span>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {certification.category}
                </div>
              </div>
            )}

            {certification.issueDate && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ISSUE DATE:</span>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  {certification.issueDate}
                </div>
              </div>
            )}

            {certification.scoreOrResult && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>SCORE / RESULT:</span>
                <div style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 600, marginTop: '2px' }}>
                  {certification.scoreOrResult}
                </div>
              </div>
            )}

            {certification.credentialId && (
              <div>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>CREDENTIAL ID:</span>
                <div className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {certification.credentialId}
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
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {certification.verificationUrl && (
              <a
                href={certification.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={14} />
                Verify Credential
              </a>
            )}

            {pdfSrc && (
              <a
                href={pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FileText size={14} />
                Open PDF File
              </a>
            )}

            {certification.certificateImage && (
              <a
                href={imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ImageIcon size={14} />
                Enlarge Original Image
              </a>
            )}
          </div>

          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
