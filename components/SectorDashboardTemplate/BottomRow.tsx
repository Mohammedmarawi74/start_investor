import React, { type FC } from 'react';

export const BottomRow: FC<{
  definition?: string;
  industryInsights?: string[];
  tags?: string[];
  title: string;
}> = ({ definition, industryInsights = [], tags = [], title }) => {
  const hasDefinition = !!definition;
  const hasInsights = industryInsights.length > 0;
  if (!hasDefinition && !hasInsights && tags.length === 0) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: hasDefinition && hasInsights ? '3fr 2fr' : '1fr', gap: 20, direction: 'rtl' }}>
      {hasDefinition && (
        <div id="definition-section" data-section="definition" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.07)', padding: '40px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(100,116,139,0.15)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: 'var(--acc-10)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, direction: 'rtl' }}>
              <div className="sd-bar" style={{ width: 3, height: 44, borderRadius: 4, flexShrink: 0 }} />
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>تعريف {title.replace(/^(قطاع|صناعة)\s*/, '')}</h3>
            </div>
            <p style={{ margin: 0, fontSize: 16, color: '#cbd5e1', fontWeight: 500, lineHeight: 2, direction: 'rtl' }}>{definition}</p>
            {tags.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, direction: 'rtl' }}>
                  <div style={{ width: 20, height: 1, background: 'rgba(100,116,139,0.5)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.2em' }}>الموضوعات</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, direction: 'rtl' }}>
                  {tags.map((tag, i) => (
                    <span key={tag} className="sd-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '5px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 12, fontWeight: 600, color: '#94a3b8', transition: 'all 0.2s' }}>
                      <span className="sd-hash" style={{ color: i === 0 ? 'var(--acc)' : '#475569', fontSize: 10 }}>#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {hasInsights && (
        <div id="insights-section" data-section="insights-bottom" style={{ background: '#fff', borderRadius: 24, border: '1px solid #f1f5f9', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 28px', fontSize: 22, fontWeight: 800, color: '#0f172a', direction: 'rtl', letterSpacing: '-0.02em' }}>أبرز النقاط</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
            {industryInsights.map((insight, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, direction: 'rtl' }}>
                <div className="sd-insight-dot" style={{ width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 8, transition: 'transform 0.2s' }} />
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: '#475569', lineHeight: 1.7 }}>{insight}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
