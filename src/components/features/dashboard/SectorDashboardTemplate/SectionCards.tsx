import React, { type FC } from 'react';
import { SectorKPI, SectorSection, SectorMarket } from './types';

const parseContent = (content: string, dark: boolean): React.ReactNode => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {content.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 4 }} />;

        if (/^[•\-\*]/.test(t)) {
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: dark ? 'var(--acc)' : '#cbd5e1', marginTop: 8, flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: 14, color: dark ? '#cbd5e1' : '#475569', lineHeight: 1.6, fontWeight: 500 }}>{t.substring(1).trim()}</p>
            </div>
          );
        }
        return <p key={i} style={{ margin: 0, fontSize: 15, color: dark ? '#cbd5e1' : '#475569', lineHeight: 1.7, fontWeight: 500 }}>{t}</p>;
      })}
    </div>
  );
};

export const LightCard: FC<{ section: SectorSection }> = ({ section }) => (
  <div
    className="sd-section-light sd-section-card"
    style={{
      position: 'relative',
      background: '#fff',
      borderRadius: 24,
      border: '1px solid #f1f5f9',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s, border-color 0.3s',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.07)';
      (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      (e.currentTarget as HTMLElement).style.borderColor = '#f1f5f9';
    }}
  >
    <div className="sd-hover-glow" style={{ position: 'absolute', top: -40, left: -40, width: 160, height: 160, borderRadius: '50%', opacity: 0, transition: 'opacity 0.5s', pointerEvents: 'none' }} />
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 20, direction: 'rtl' }}>
      <div style={{ position: 'relative', flexShrink: 0, width: 4 }}>
        <div className="sd-bar" style={{ width: 4, height: 44, borderRadius: 4 }} />
        <div className="sd-bar-glow" style={{ position: 'absolute', inset: 0, borderRadius: 4, filter: 'blur(4px)' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 className="sd-section-title" style={{ margin: 0, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{section.title}</h2>
        {section.subtitle && <p style={{ margin: '4px 0 0', fontSize: 10, fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{section.subtitle}</p>}
      </div>
    </div>
    <div className="sd-section-light-body" style={{ direction: 'rtl' }}>
      {typeof section.content === 'string' ? parseContent(section.content, false) : section.content}
    </div>
  </div>
);

export const DarkCard: FC<{ section: SectorSection }> = ({ section }) => (
  <div
    className="sd-section-dark sd-section-card"
    style={{ position: 'relative', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}
  >
    <div className="sd-glow" style={{ position: 'absolute', top: -80, left: -80, width: 280, height: 280, borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 20, direction: 'rtl' }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div className="sd-section-dark-bar" style={{ width: 4, height: 44, borderRadius: 4 }} />
          <div className="sd-section-dark-bar-glow" style={{ position: 'absolute', inset: 0, borderRadius: 4, filter: 'blur(6px)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="sd-section-title" style={{ margin: 0, fontWeight: 800, color: '#f8fafc', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{section.title}</h2>
          {section.subtitle && <p style={{ margin: '4px 0 0', fontSize: 10, fontWeight: 700, color: 'var(--acc-60)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{section.subtitle}</p>}
        </div>
      </div>
      <div style={{ direction: 'rtl' }}>
        {typeof section.content === 'string' ? parseContent(section.content, true) : section.content}
      </div>
    </div>
  </div>
);

export const KpiCard: FC<{ kpi: SectorKPI }> = ({ kpi }) => (
  <div
    style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 0.2s', cursor: 'default', minHeight: 110 }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
  >
    {kpi.icon && (
      <div className="sd-kpi-icon-bg" style={{ borderRadius: 12, padding: 10, display: 'flex' }}>
        <kpi.icon className="sd-kpi-icon" size={22} />
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, justifyContent: 'center' }}>
      <span style={{ fontSize: 32, fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.04em', lineHeight: 1 }}>{kpi.value}</span>
      <span className="sd-kpi-unit" style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}>{kpi.unit}</span>
    </div>
    <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.35, textAlign: 'center', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{kpi.label}</p>
  </div>
);

export const MarketCard: FC<{ market: SectorMarket }> = ({ market }) => (
  <div
    className="sd-market-card"
    style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 18, display: 'flex', transition: 'background 0.2s', cursor: 'default' }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,23,42,0.85)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,23,42,0.6)'; }}
  >
    {market.icon && (
      <div className="sd-market-icon-bg" style={{ borderRadius: 12, padding: 10, display: 'flex', flexShrink: 0 }}>
        <market.icon className="sd-market-icon" size={22} />
      </div>
    )}
    <div className="sd-market-card-content" style={{ flex: 1, minWidth: 0 }}>
      <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: 'var(--acc-60)', textTransform: 'uppercase', letterSpacing: '0.12em', lineHeight: 1.35 }}>{market.label}</p>
      <div style={{ marginTop: 2 }}>
        <p style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#f8fafc', lineHeight: 1.2 }}>{market.country}</p>
        {market.note && (
          <p style={{ margin: '4px 0 0', fontSize: 11, color: '#64748b', fontWeight: 500, lineHeight: 1.4, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{market.note}</p>
        )}
      </div>
    </div>
  </div>
);
