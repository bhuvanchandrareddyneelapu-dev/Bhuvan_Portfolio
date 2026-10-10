import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu,
  X,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Search,
  Award,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Code,
  ArrowUp,
  CheckCircle2,
  Copy,
  Send,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

import { portfolioData } from './data/portfolioData';
import type { ProjectItem, CertificationItem, CertificateCategory } from './types/portfolio';
import { getAssetUrl } from './utils/assets';
import { StudioMatrixVisual } from './components/ui/StudioMatrixVisual';
import { ProjectModal } from './components/modals/ProjectModal';
import { CertificateModal } from './components/modals/CertificateModal';
import { CommandPalette } from './components/modals/CommandPalette';
import { Toast, type ToastData } from './components/ui/Toast';

// Brand SVG Icons for platforms
const GithubSvg: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LeetCodeSvg: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.868.528.528 0 0 0 .524.526h6.91a.53.53 0 0 0 .528-.526 5.32 5.32 0 0 0-.125-.868 5.286 5.286 0 0 0-1.209-2.104l3.854-4.126L16.22 2.62a1.374 1.374 0 0 0 .438-.961 1.374 1.374 0 0 0-.438-.961 1.374 1.374 0 0 0-.961-.438zM19.98 11.503h-6.38a.53.53 0 0 0-.528.526 5.32 5.32 0 0 0 .125.868c.25.96.8 1.8 1.55 2.45l4.89 4.22a1.374 1.374 0 0 0 .96.438 1.374 1.374 0 0 0 .961-.438 1.374 1.374 0 0 0 .438-.96 1.374 1.374 0 0 0-.438-.961l-4.89-4.22a3.78 3.78 0 0 1-.78-1.23h3.09a.528.528 0 0 0 .524-.526.528.528 0 0 0-.522-.567z"/>
  </svg>
);

const CodeChefSvg: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
  </svg>
);

export function App() {
  const { personal, socials, skills, projects, experience, codingProfiles, achievements, certifications, education } =
    portfolioData;

  // Modals & Palette state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filters state
  const [skillSearch, setSkillSearch] = useState('');
  const [certFilter, setCertFilter] = useState<'All' | CertificateCategory>('All');
  const [projectCategory, setProjectCategory] = useState<string>('All');

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    addToast(`Copied email to clipboard: ${personal.email}`, 'success');
  };

  // Keyboard shortcut for Command Palette (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    if (!skillSearch.trim()) return skills;
    const q = skillSearch.toLowerCase();
    return skills
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.tags?.some((t) => t.toLowerCase().includes(q))
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [skills, skillSearch]);

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    if (certFilter === 'All') return certifications;
    return certifications.filter((c) => c.category === certFilter);
  }, [certifications, certFilter]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectCategory === 'All') return projects;
    return projects.filter((p) => p.category === projectCategory);
  }, [projects, projectCategory]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      addToast('Please fill out name, email, and message.', 'error');
      return;
    }
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      addToast('Message prepared! Opening direct email client...', 'success');
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
        contactSubject || `Portfolio Inquiry from ${contactName}`
      )}&body=${encodeURIComponent(
        `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`
      )}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <div className="portfolio-app">
      {/* Studio Background Grid */}
      <div className="studio-grid-bg" aria-hidden="true" />

      {/* Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(9, 13, 18, 0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="container"
          style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Wordmark */}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                background: 'var(--accent)',
                borderRadius: 2,
                boxShadow: '0 0 10px var(--accent)',
              }}
            />
            <span>{personal.wordmark}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
            }}
            className="desktop-nav"
          >
            <a href="#about" className="btn-ghost" style={{ fontSize: '0.82rem' }}>About</a>
            <a href="#projects" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Projects</a>
            <a href="#skills" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Skills</a>
            <a href="#experience" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Experience</a>
            <a href="#coding" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Profiles</a>
            <a href="#certifications" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Certificates</a>
            <a href="#education" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Education</a>
            <a href="#contact" className="btn-ghost" style={{ fontSize: '0.82rem' }}>Contact</a>

            {/* Quick Action: Command Palette Trigger */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.4rem 0.75rem' }}
              title="Command Palette (Ctrl + K)"
            >
              <Search size={14} color="var(--accent)" />
              <span className="mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Ctrl+K</span>
            </button>

            {/* Resume Button */}
            <a
              href={getAssetUrl(personal.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <FileText size={14} />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-toggle">
            <button
              onClick={() => setIsCommandOpen(true)}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.4rem 0.6rem' }}
              aria-label="Open search"
            >
              <Search size={16} color="var(--accent)" />
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              style={{
                color: 'var(--text-primary)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                padding: '0.45rem',
                borderRadius: 'var(--radius-sm)',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '1.25rem 1.75rem',
              background: 'var(--bg-surface)',
              borderBottom: '1px solid var(--border-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Experience</a>
            <a href="#coding" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Coding Profiles</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Certificates</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>Contact</a>
            <a
              href={getAssetUrl(personal.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ marginTop: '0.5rem' }}
            >
              <FileText size={15} />
              Open Resume (PDF)
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="section-wrapper" style={{ paddingTop: '4.5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Introduction */}
            <div>
              <div className="section-label">
                <span className="indicator-dot" />
                <span>{personal.coordinates} // {personal.availabilityStatus}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem',
                }}
              >
                {personal.name}
              </h1>

              <div
                className="mono"
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                {personal.professionalTitle}
              </div>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                {personal.shortIntroduction}
              </p>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="#projects" className="btn btn-primary">
                  Explore Projects
                  <ChevronRight size={16} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail size={16} />
                  Contact Me
                </a>
                <a
                  href={getAssetUrl(personal.resumePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </div>

              {/* Verified Profile Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  CONNECT //
                </span>
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.65rem',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="tech-tag"
                  >
                    {s.platform === 'github' && <GithubSvg size={14} />}
                    {s.platform === 'leetcode' && <LeetCodeSvg size={14} />}
                    {s.platform === 'codechef' && <CodeChefSvg size={14} />}
                    {s.platform === 'email' && <Mail size={14} />}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Interactive Studio Topology Matrix Visual */}
            <div>
              <StudioMatrixVisual />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>CORE BACKGROUND // BIO</span>
            </div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Computer Science and Engineering undergraduate focused on enterprise Java systems, full stack web development, and algorithmic problem-solving.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            {/* Left Bio Card */}
            <div className="studio-card">
              <div className="corner-accent corner-tl">+</div>
              <div className="corner-accent corner-tr">+</div>
              <div className="corner-accent corner-bl">+</div>
              <div className="corner-accent corner-br">+</div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Professional Overview
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {personal.aboutDescription.map((paragraph, idx) => (
                  <p key={idx} style={{ fontSize: '0.98rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {personal.professionalFocus && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                    CORE FOCUS AREAS:
                  </span>
                  <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {personal.professionalFocus.split('|').map((item) => (
                      <span key={item} className="tech-tag" style={{ color: 'var(--text-primary)' }}>
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Highlights & Career Aspirations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Career Goal Card */}
              <div className="studio-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <Sparkles size={18} color="var(--accent)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Career Objective</h4>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {personal.careerGoals}
                </p>
              </div>

              {/* Education Summary Card */}
              <div className="studio-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <GraduationCap size={18} color="var(--cyan-accent)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Current Academic Program</h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {personal.educationSummary}
                </p>
                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <MapPin size={14} color="var(--accent)" />
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Engineering Philosophy Card */}
              <div className="studio-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <Code size={18} color="var(--amber-accent)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Development Mindset</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Writing clean, maintainable, and type-safe software solutions.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Continuous algorithmic problem solving across LeetCode & CodeChef.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Building hands-on full stack applications to validate architectures.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>PROJECT SHOWCASE // PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Engineered web solutions, finance management tools, and community applications designed with clean architecture and real-world utility.
            </p>
          </div>

          {/* Project Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {['All', 'Full-Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectCategory(cat)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  background: projectCategory === cat ? 'var(--accent)' : 'var(--bg-surface-elevated)',
                  color: projectCategory === cat ? '#090d12' : 'var(--text-secondary)',
                  border: projectCategory === cat ? '1px solid var(--accent-light)' : '1px solid var(--border-subtle)',
                  fontWeight: projectCategory === cat ? 700 : 500,
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat === 'All' ? 'All Projects' : `${cat} Systems`}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="studio-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div>
                  {/* Category Pill */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--accent)', background: 'var(--accent-subtle)', padding: '2px 8px', borderRadius: 4 }}>
                      {project.category}
                    </span>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      VERIFIED_PROJECT
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {project.summary}
                  </p>

                  {/* Screenshot preview */}
                  <div
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-canvas)',
                      marginBottom: '1.25rem',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={getAssetUrl(project.screenshot)}
                      alt={project.title}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.technologies.map((t) => (
                      <span key={t} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Layers size={14} />
                    View Case Study
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="GitHub Repository"
                    >
                      <GithubSvg size={14} />
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>ENGINEERING ARSENAL // STACK</span>
            </div>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Comprehensive technical groupings covering languages, backend frameworks, frontend architectures, databases, and computer science foundations.
            </p>
          </div>

          {/* Skill Search Filter */}
          <div style={{ maxWidth: '420px', marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.65rem 1rem',
              }}
            >
              <Search size={16} color="var(--accent)" />
              <input
                type="text"
                placeholder="Search technologies, frameworks, or tags..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                }}
              />
              {skillSearch && (
                <button onClick={() => setSkillSearch('')} style={{ color: 'var(--text-muted)' }}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Skill Groups Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredSkills.map((category) => (
              <div key={category.categoryName} className="studio-card">
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                    {category.categoryName}
                  </h3>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--accent)' }}>
                    {category.skills.length} TECHS
                  </span>
                </div>

                {category.description && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {category.description}
                  </p>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-canvas)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {skill.name}
                        </div>
                        {skill.tags && (
                          <div style={{ display: 'flex', gap: '0.35rem', marginTop: '3px' }}>
                            {skill.tags.map((t) => (
                              <span key={t} style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                                #{t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {skill.levelDescription && (
                        <span
                          className="mono"
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--accent)',
                            background: 'var(--accent-subtle)',
                            padding: '2px 6px',
                            borderRadius: '3px',
                          }}
                        >
                          {skill.levelDescription}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>INDUSTRY EXPERIENCE // ROLES</span>
            </div>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              Internship roles, real-world development contributions, and practical engineering responsibilities.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((exp) => (
              <div key={exp.id} className="studio-card">
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Briefcase size={18} color="var(--accent)" />
                      <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                        {exp.jobTitle}
                      </h3>
                    </div>
                    <div style={{ fontSize: '1rem', color: 'var(--accent)', marginTop: '2px' }}>
                      {exp.organization} {exp.location ? `• ${exp.location}` : ''}
                    </div>
                  </div>

                  <div
                    className="mono"
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-subtle)',
                      padding: '4px 10px',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Calendar size={13} />
                    <span>{exp.startDate} — {exp.endDate}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem' }} className="mono">
                    Responsibilities & Impact
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                        <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '2px' }}>[0{i + 1}]</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>ALGORITHMIC PROWESS // PROFILES</span>
            </div>
            <h2 className="section-title">Coding Profiles & Problem Solving</h2>
            <p className="section-subtitle">
              Verified competitive programming handles, solved problem counts, and practice milestones.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {codingProfiles.map((cp) => (
              <div key={cp.platform} className="studio-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {cp.platform === 'CodeChef' && <CodeChefSvg size={20} />}
                      {cp.platform === 'LeetCode' && <LeetCodeSvg size={20} />}
                      {cp.platform === 'GitHub' && <GithubSvg size={20} />}
                      {cp.platform === 'SkillRack' && <Code size={20} color="var(--accent)" />}
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{cp.platform}</h3>
                    </div>
                  </div>

                  <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {cp.usernamePlaceholder}
                  </div>

                  {cp.metricValue && (
                    <div
                      style={{
                        padding: '0.75rem',
                        background: 'var(--bg-canvas)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1rem',
                      }}
                    >
                      <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {cp.metricLabel || 'STATISTIC'}
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)', marginTop: '2px' }}>
                        {cp.metricValue}
                      </div>
                    </div>
                  )}

                  {cp.badges && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {cp.badges.map((b) => (
                        <span key={b} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {cp.profileUrl ? (
                    <a
                      href={cp.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <ExternalLink size={14} />
                      View {cp.platform} Profile
                    </a>
                  ) : (
                    <div
                      className="mono"
                      style={{
                        textAlign: 'center',
                        fontSize: '0.76rem',
                        color: 'var(--text-muted)',
                        padding: '0.5rem',
                        border: '1px dashed var(--border-subtle)',
                        borderRadius: 4,
                      }}
                    >
                      Active Practice Profile
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>HONORS & MILESTONES // ACHIEVEMENTS</span>
            </div>
            <h2 className="section-title">Achievements & Milestones</h2>
            <p className="section-subtitle">
              Hackathon distinctions, coding challenge milestones, and verified problem-solving accomplishments.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {achievements.map((ach) => (
              <div key={ach.id} className="studio-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--accent)', background: 'var(--accent-subtle)', padding: '2px 8px', borderRadius: 4 }}>
                      {ach.category}
                    </span>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {ach.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {ach.title}
                  </h3>

                  {ach.organization && (
                    <div style={{ fontSize: '0.88rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                      {ach.organization}
                    </div>
                  )}

                  {ach.imageUrl && (
                    <div
                      style={{
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-canvas)',
                        marginBottom: '1rem',
                        maxHeight: '180px',
                      }}
                    >
                      <img
                        src={getAssetUrl(ach.imageUrl)}
                        alt={ach.title}
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {ach.description}
                  </p>
                </div>

                {ach.evidenceUrl && (
                  <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <a
                      href={ach.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <ExternalLink size={14} />
                      View Milestone Details
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials Gallery Section */}
      <section id="certifications" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>VERIFIED CREDENTIALS // GALLERY</span>
            </div>
            <h2 className="section-title">Certifications & Milestones</h2>
            <p className="section-subtitle">
              Professional credentials, academic certifications (NPTEL), hackathon distinctions, and competitive programming achievements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {(['All', 'NPTEL', 'Internship', 'Hackathon', 'CodeChef', 'SkillRack', 'LeetCode'] as const).map((cat) => {
              const isSelected = certFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCertFilter(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--accent)' : 'var(--bg-surface-elevated)',
                    color: isSelected ? '#090d12' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--accent-light)' : '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                    fontWeight: isSelected ? 700 : 500,
                  }}
                >
                  {cat === 'All' ? 'All Credentials' : `${cat} Certificates`}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="studio-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div>
                  {/* Category & Status */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--accent)',
                        background: 'var(--accent-subtle)',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}
                    >
                      {cert.category || 'CERTIFICATE'}
                    </span>

                    {cert.isPendingFile ? (
                      <span className="mono" style={{ fontSize: '0.68rem', color: '#f59e0b' }}>
                        Asset Pending
                      </span>
                    ) : (
                      <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--accent)' }}>
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Preview */}
                  <div
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-canvas)',
                      marginBottom: '1rem',
                      maxHeight: '180px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={getAssetUrl(cert.certificateImage || '/certificates/cert-placeholder.svg')}
                      alt={cert.name}
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = getAssetUrl('/certificates/cert-placeholder.svg');
                      }}
                    />
                  </div>

                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {cert.name}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {cert.issuingOrganization}
                  </div>

                  {cert.scoreOrResult && (
                    <div
                      className="mono"
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {cert.scoreOrResult}
                    </div>
                  )}
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <Award size={14} color="var(--accent)" />
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>ACADEMIC FOUNDATION // TIMELINE</span>
            </div>
            <h2 className="section-title">Education History</h2>
            <p className="section-subtitle">
              Formal academic journey, degree credentials, and foundational milestones.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {education.map((edu) => (
              <div key={edu.id} className="studio-card">
                <div className="corner-accent corner-tl">+</div>
                <div className="corner-accent corner-tr">+</div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ fontSize: '1.05rem', color: 'var(--accent)', marginTop: '2px' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {edu.fieldOfStudy} {edu.location ? `• ${edu.location}` : ''}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      className="mono"
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        background: 'var(--bg-canvas)',
                        border: '1px solid var(--border-subtle)',
                        padding: '4px 10px',
                        borderRadius: 4,
                      }}
                    >
                      {edu.startDate} — {edu.endDate}
                    </div>
                    {edu.gradeOrCgpa && (
                      <div
                        className="mono"
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--accent)',
                          fontWeight: 700,
                          marginTop: '0.5rem',
                        }}
                      >
                        {edu.gradeOrCgpa}
                      </div>
                    )}
                  </div>
                </div>

                {edu.description && (
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {edu.description}
                  </p>
                )}

                {edu.highlights && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {edu.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        <ChevronRight size={13} color="var(--accent)" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="indicator-dot" />
              <span>DIRECT INQUIRIES // CONNECT</span>
            </div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have an opportunity, collaboration, or software development inquiry? Send a message or reach out directly.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Contact Information & Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="studio-card">
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  Contact Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Direct Email */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail size={18} color="var(--accent)" />
                      <div>
                        <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>EMAIL</div>
                        <a href={`mailto:${personal.email}`} style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {personal.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={copyEmail}
                      style={{ color: 'var(--text-muted)', padding: '4px' }}
                      title="Copy email to clipboard"
                    >
                      <Copy size={16} />
                    </button>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <MapPin size={18} color="var(--cyan-accent)" />
                    <div>
                      <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LOCATION</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {personal.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status card */}
              <div className="studio-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
                    CURRENT AVAILABILITY
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Actively seeking Full Stack Developer & Java Developer opportunities, internships, and collaborative software projects.
                </p>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="studio-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Send a Message
              </h3>

              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-muted)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-muted)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Project Inquiry / Job Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-muted)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg-canvas)',
                      border: '1px solid var(--border-muted)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="btn btn-primary"
                  style={{ marginTop: '0.5rem' }}
                >
                  {formSubmitting ? (
                    <span>Preparing...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Inquiries
                    </>
                  )}
                </button>

                {formSubmitted && (
                  <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', marginTop: '0.5rem' }}>
                    ✓ Direct email client launched. Thank you for reaching out!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-canvas)',
          padding: '3rem 0 2rem',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                {personal.name}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                {personal.professionalTitle} • {personal.location}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#hero"
                className="btn btn-secondary btn-sm"
                aria-label="Back to top"
              >
                <ArrowUp size={14} />
                Back to Top
              </a>
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}
            className="mono"
          >
            <div>
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </div>
            <div>
              SYSTEM SPEC: REACT + VITE + TYPESCRIPT // BASE: /Bhuvan_Portfolio/
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={(sectionId) => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCopyEmail={copyEmail}
        onChangeAccent={(color) => {
          document.documentElement.style.setProperty('--accent', color);
          addToast(`Accent updated to ${color}`, 'info');
        }}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />
    </div>
  );
}

export default App;
