import React, { useState } from 'react';
import { Cpu, Database, ShieldCheck, Zap, Activity } from 'lucide-react';

interface NodeInfo {
  id: string;
  name: string;
  layer: string;
  protocol: string;
  metric: string;
  status: string;
  icon: React.ReactNode;
}

export const StudioMatrixVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('node-core');

  const nodes: NodeInfo[] = [
    {
      id: 'node-gateway',
      name: 'INGRESS_GATEWAY',
      layer: 'Edge Network',
      protocol: 'TLS 1.3 / HTTP/3',
      metric: '0.4ms Latency',
      status: 'HEALTHY',
      icon: <ShieldCheck size={18} />,
    },
    {
      id: 'node-core',
      name: 'ENGINEERING_CORE',
      layer: 'Distributed Runtime',
      protocol: 'gRPC / Async Event Bus',
      metric: '99.99% Uptime',
      status: 'OPTIMAL',
      icon: <Cpu size={18} />,
    },
    {
      id: 'node-cache',
      name: 'IN_MEMORY_CACHE',
      layer: 'State Cache',
      protocol: 'Redis Cluster',
      metric: '0.12ms Read',
      status: 'ACTIVE',
      icon: <Zap size={18} />,
    },
    {
      id: 'node-db',
      name: 'PERSISTENCE_STORAGE',
      layer: 'Relational DB',
      protocol: 'PostgreSQL ACID',
      metric: 'Pool: 48 Conns',
      status: 'REPLICATED',
      icon: <Database size={18} />,
    },
  ];

  const current = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="studio-matrix-container" style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-muted)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card), 0 0 35px -10px var(--accent-glow)'
    }}>
      {/* Corner Notches */}
      <div className="corner-accent corner-tl">+</div>
      <div className="corner-accent corner-tr">+</div>
      <div className="corner-accent corner-bl">+</div>
      <div className="corner-accent corner-br">+</div>

      {/* Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>
            STUDIO_SYS // TOPOLOGY_MATRIX
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.72rem' }} className="mono">
          <Activity size={12} color="var(--accent)" />
          <span>SYS.LATENCY: 12ms</span>
        </div>
      </div>

      {/* Interactive Blueprint Canvas */}
      <div style={{
        background: 'var(--bg-canvas)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        position: 'relative',
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Schematic Grid Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.5,
          pointerEvents: 'none'
        }} />

        {/* Nodes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          position: 'relative',
          zIndex: 2
        }}>
          {nodes.map((node) => {
            const isSelected = node.id === activeNode;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                style={{
                  background: isSelected ? 'var(--bg-surface-elevated)' : 'rgba(15, 21, 32, 0.75)',
                  border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.85rem',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                className="studio-node-btn"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <div style={{ color: isSelected ? 'var(--accent)' : 'var(--text-secondary)' }}>
                    {node.icon}
                  </div>
                  <span className="mono" style={{
                    fontSize: '0.68rem',
                    color: isSelected ? 'var(--accent)' : 'var(--text-muted)',
                    background: isSelected ? 'var(--accent-subtle)' : 'transparent',
                    padding: '2px 5px',
                    borderRadius: 3
                  }}>
                    {node.status}
                  </span>
                </div>
                <div className="mono" style={{ fontSize: '0.78rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {node.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {node.layer}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Telemetry Inspector Box */}
        <div style={{
          marginTop: '1.25rem',
          padding: '0.85rem 1rem',
          background: 'rgba(20, 29, 43, 0.9)',
          border: '1px solid var(--border-muted)',
          borderRadius: 'var(--radius-sm)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600 }}>
              &gt; INSPECTOR: {current.name}
            </span>
            <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              LAYER: {current.layer}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }} className="mono">
            <span>PROTOCOL: <strong style={{ color: 'var(--text-primary)' }}>{current.protocol}</strong></span>
            <span>TELEMETRY: <strong style={{ color: 'var(--accent)' }}>{current.metric}</strong></span>
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.72rem',
        color: 'var(--text-muted)'
      }} className="mono">
        <span>ARCH: MODULAR_SYSTEMS</span>
        <span>SPEC: HIGH_CONCURRENCY</span>
        <span style={{ color: 'var(--accent)' }}>STATUS: ONLINE</span>
      </div>
    </div>
  );
};
