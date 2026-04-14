import React, { type FC } from 'react';
import { SectorLeader } from './types';

export const LeadersSection: FC<{
  leaders: SectorLeader[];
  title: string;
}> = ({ leaders, title }) => (
  <div
    id="leaders-section"
    data-section="leaders"
    className="sd-section-card"
    style={{ background: '#fff', borderRadius: 24, border: '1px solid #f1f5f9' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, direction: 'rtl' }}>
      <div className="sd-bar" style={{ width: 4, height: 52, borderRadius: 4, flexShrink: 0 }} />
      <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>قادة {title.replace(/^(قطاع|صناعة)\s*/, '')}</h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16, direction: 'rtl' }}>
      {leaders.map((leader, idx) => (
        <div
          key={idx}
          className="sd-leader-card"
          style={{ position: 'relative', background: '#f8fafc', borderRadius: 16, border: '1px solid #e2e8f0', padding: '20px 20px 20px 44px', transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s', cursor: 'default' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#fff';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#f8fafc';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          <div className="sd-leader-badge" style={{ position: 'absolute', top: 16, left: 16, width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>
            {idx + 1}
          </div>
          <p style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{leader.name}</p>
          <p style={{ margin: '4px 0 0', fontSize: 13, fontWeight: 600, color: '#64748b' }}>{leader.country}</p>
          {leader.note && (
            <p className="sd-note" style={{ margin: '12px 0 0', paddingTop: 12, borderTop: '1px solid #e2e8f0', fontSize: 12, fontWeight: 600, color: '#64748b', lineHeight: 1.6, transition: 'color 0.2s' }}>{leader.note}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);
