import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, FileText, Mail, Sparkles, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
  onChangeAccent: (color: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Action' | 'Theme Accent';
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onCopyEmail,
  onChangeAccent,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-hero',
      title: 'Jump to Studio Overview (Hero)',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('hero'); onClose(); },
    },
    {
      id: 'nav-about',
      title: 'Jump to About & Engineering Goals',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('about'); onClose(); },
    },
    {
      id: 'nav-projects',
      title: 'Jump to Featured Projects & Case Studies',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('projects'); onClose(); },
    },
    {
      id: 'nav-skills',
      title: 'Jump to Technical Skills & Stack',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('skills'); onClose(); },
    },
    {
      id: 'nav-experience',
      title: 'Jump to Professional Experience',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('experience'); onClose(); },
    },
    {
      id: 'nav-coding',
      title: 'Jump to Coding & Problem Solving Profiles',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('coding'); onClose(); },
    },
    {
      id: 'nav-achievements',
      title: 'Jump to Achievements & Awards',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('achievements'); onClose(); },
    },
    {
      id: 'nav-certifications',
      title: 'Jump to Verified Certifications',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('certifications'); onClose(); },
    },
    {
      id: 'nav-education',
      title: 'Jump to Education History',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('education'); onClose(); },
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact & Inquiries',
      category: 'Navigation',
      icon: <Compass size={16} />,
      action: () => { onNavigate('contact'); onClose(); },
    },

    // Actions
    {
      id: 'act-copy-email',
      title: `Copy Email Address (${portfolioData.personal.email})`,
      category: 'Action',
      icon: <Mail size={16} />,
      action: () => { onCopyEmail(); onClose(); },
      shortcut: 'Copy',
    },
    {
      id: 'act-resume',
      title: 'Open / Download Resume PDF',
      category: 'Action',
      icon: <FileText size={16} />,
      action: () => {
        window.open(portfolioData.personal.resumePath, '_blank');
        onClose();
      },
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile',
      category: 'Action',
      icon: <GithubIcon size={16} />,
      action: () => {
        const gh = portfolioData.socials.find((s) => s.platform === 'github');
        if (gh) window.open(gh.url, '_blank');
        onClose();
      },
    },

    // Theme Accents
    {
      id: 'accent-emerald',
      title: 'Set Accent: Precision Emerald (#10b981)',
      category: 'Theme Accent',
      icon: <Sparkles size={16} color="#10b981" />,
      action: () => { onChangeAccent('#10b981'); onClose(); },
    },
    {
      id: 'accent-cyan',
      title: 'Set Accent: Cyber Cyan (#06b6d4)',
      category: 'Theme Accent',
      icon: <Sparkles size={16} color="#06b6d4" />,
      action: () => { onChangeAccent('#06b6d4'); onClose(); },
    },
    {
      id: 'accent-amber',
      title: 'Set Accent: Signal Amber (#f59e0b)',
      category: 'Theme Accent',
      icon: <Sparkles size={16} color="#f59e0b" />,
      action: () => { onChangeAccent('#f59e0b'); onClose(); },
    },
    {
      id: 'accent-indigo',
      title: 'Set Accent: Electric Cobalt (#6366f1)',
      category: 'Theme Accent',
      icon: <Sparkles size={16} color="#6366f1" />,
      action: () => { onChangeAccent('#6366f1'); onClose(); },
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command Palette">
      <div
        className="modal-dialog"
        style={{ maxWidth: '640px', padding: 0 }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Box */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-surface)'
        }}>
          <Search size={18} color="var(--accent)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem'
            }}
          />
          <span className="mono" style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            padding: '2px 6px',
            borderRadius: '4px'
          }}>
            ESC
          </span>
          <button onClick={onClose} style={{ color: 'var(--text-muted)', padding: '4px' }} aria-label="Close palette">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '0.5rem' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }} className="mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'var(--bg-surface-elevated)' : 'transparent',
                    border: isSelected ? '1px solid var(--border-accent)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: isSelected ? 'var(--accent)' : 'var(--text-secondary)' }}>
                      {cmd.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.86rem',
                        fontWeight: 500,
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}>
                        {cmd.title}
                      </div>
                      <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        {cmd.category}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <ArrowRight size={14} color="var(--accent)" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div style={{
          padding: '0.65rem 1.25rem',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-canvas)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: 'var(--text-muted)'
        }} className="mono">
          <span>Navigate: ↑ ↓ • Select: ↵</span>
          <span>Studio Quick Command Engine</span>
        </div>
      </div>
    </div>
  );
};
