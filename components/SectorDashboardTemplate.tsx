/**
 * SectorDashboardTemplate — v2.0
 * إعادة هيكلة احترافية كاملة
 *
 * ✅ RTL-first — تصميم عربي أصيل
 * ✅ كود نظيف بدون Tailwind dynamic classes (لا مشاكل purge)
 * ✅ نظام ألوان accent ديناميكي عبر CSS custom properties
 * ✅ Scroll-spy موثوق عبر IntersectionObserver
 * ✅ Sticky nav مع تمرير سلس
 * ✅ Cards بتصميم راقٍ — dark / light variants
 * ✅ TypeScript صارم — بدون any
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type FC,
  type LegacyRef,
} from 'react';
import { Download, LucideIcon } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────

export interface SectorKPI {
  label: string;
  value: string;
  unit: string;
  icon?: LucideIcon;
}

export interface SectorSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string | React.ReactNode;
  /** 'dark' → dark card, 'light' (default) → white card */
  variant?: 'dark' | 'light';
  /** Highlight color for left-bar accent (e.g. '#10b981') — overrides accent prop */
  accentColor?: string;
}

export interface SectorMarket {
  label: string;
  country: string;
  note: string;
  icon?: LucideIcon;
}

export interface SectorLeader {
  name: string;
  country: string;
  note?: string;
}

export interface SectorDashboardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** Tailwind color name: 'emerald' | 'blue' | 'violet' | 'amber' | 'rose' | 'cyan' … */
  accent: string;
  /** Exact hex for accent — used for CSS custom properties */
  accentHex?: string;
  pdfLabel?: string;
  kpis: SectorKPI[];
  sections: SectorSection[];
  leaders?: SectorLeader[];
  definition?: string;
  industryInsights?: string[];
  tags?: string[];
  topMarkets?: SectorMarket[];
  onBack?: () => void;
  parentCategory?: string;
}

// ─────────────────────────────────────────────────────────────
//  ACCENT COLOR MAP  (Tailwind name → hex)
// ─────────────────────────────────────────────────────────────

const ACCENT_HEX: Record<string, string> = {
  emerald: '#10b981',
  blue: '#3b82f6',
  violet: '#8b5cf6',
  amber: '#f59e0b',
  rose: '#f43f5e',
  cyan: '#06b6d4',
  indigo: '#6366f1',
  sky: '#0ea5e9',
  teal: '#14b8a6',
  orange: '#f97316',
  pink: '#ec4899',
  lime: '#84cc16',
  red: '#ef4444',
  green: '#22c55e',
  purple: '#a855f7',
  yellow: '#eab308',
  slate: '#64748b',
  fuchsia: '#d946ef',
};

// ─────────────────────────────────────────────────────────────
//  INJECT GLOBAL CSS  (once, per accent)
// ─────────────────────────────────────────────────────────────

const useAccentVars = (accent: string, accentHex?: string) => {
  const hex = accentHex ?? ACCENT_HEX[accent] ?? '#10b981';
  useEffect(() => {
    const styleId = 'sector-dashboard-vars';
    let el = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement('style');
      el.id = styleId;
      document.head.appendChild(el);
    }
    el.textContent = `
      :root {
        --acc: ${hex};
        --acc-10: ${hex}1a;
        --acc-20: ${hex}33;
        --acc-40: ${hex}66;
        --acc-60: ${hex}99;
      }
      .sd-nav-btn.active {
        background: var(--acc) !important;
        border-color: var(--acc) !important;
        box-shadow: 0 4px 20px var(--acc-20) !important;
      }
      .sd-kpi-unit { color: var(--acc) !important; }
      .sd-bar { background: var(--acc) !important; box-shadow: 0 0 12px var(--acc-40) !important; }
      .sd-bar-glow { background: var(--acc) !important; }
      .sd-tag:first-child span.sd-hash { color: var(--acc) !important; }
      .sd-insight-dot { background: var(--acc) !important; }
      .sd-leader-badge { background: var(--acc-10) !important; color: var(--acc) !important; }
      .sd-section-dark .sd-glow { background: var(--acc) !important; opacity: 0.15; }
      .sd-download-btn { background: var(--acc) !important; }
      .sd-download-btn:hover { filter: brightness(1.1); }
      .sd-market-icon { color: var(--acc) !important; }
      .sd-market-icon-bg { background: var(--acc-10) !important; }
      .sd-hero-icon-bg { background: var(--acc) !important; }
      .sd-section-light:hover .sd-hover-glow { opacity: 1 !important; background: var(--acc-10) !important; }
      .sd-leader-card:hover { border-color: var(--acc-40) !important; }
      .sd-leader-card:hover .sd-note { color: var(--acc) !important; }
      .sd-kpi-icon-bg { background: var(--acc-10) !important; }
      .sd-kpi-icon { color: var(--acc) !important; }
      .sd-section-dark-bar { background: var(--acc) !important; box-shadow: 0 0 16px var(--acc-60) !important; }
      .sd-section-dark-bar-glow { background: var(--acc) !important; opacity: 0.4 !important; }
      /* Light sections: force readable body copy when Tailwind “dark” utilities are nested */
      .sd-section-light .sd-section-light-body {
        color: #0f172a;
        font-weight: 600;
      }
      .sd-section-light .sd-section-light-body [class*="text-slate-"],
      .sd-section-light .sd-section-light-body [class*="text-gray-"],
      .sd-section-light .sd-section-light-body [class*="text-zinc-"],
      .sd-section-light .sd-section-light-body [class*="text-neutral-"],
      .sd-section-light .sd-section-light-body .text-white {
        color: #1e293b !important;
        font-weight: 600 !important;
      }
      .sd-section-light .sd-section-light-body .font-bold {
        font-weight: 800 !important;
        color: #0f172a !important;
      }
    `;
  }, [hex]);
};

// ─────────────────────────────────────────────────────────────
//  HELPERS: parse text content into rich JSX
// ─────────────────────────────────────────────────────────────

const parseContent = (content: string, dark: boolean): React.ReactNode => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {content.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{ height: 4 }} />;

        // Bullet line
        if (/^[•\-\*]/.test(t)) {
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                direction: 'rtl',
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: dark ? 'var(--acc-60)' : 'var(--acc)',
                  flexShrink: 0,
                  marginTop: 8,
                  transition: 'transform 0.2s',
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: dark ? '#cbd5e1' : '#0f172a',
                  fontWeight: dark ? 500 : 600,
                }}
              >
                {t.replace(/^[•\-\*]\s*/, '')}
              </span>
            </div>
          );
        }

        // Label: value pattern (short lines)
        if (t.includes(':') && t.length < 100) {
          const colonIdx = t.indexOf(':');
          const label = t.slice(0, colonIdx);
          const rest = t.slice(colonIdx + 1);
          return (
            <div key={i} style={{ paddingTop: i === 0 ? 0 : 8 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: dark ? '#cbd5e1' : '#0f172a',
                  fontWeight: dark ? 500 : 600,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    background: 'var(--acc-10)',
                    borderRight: '3px solid var(--acc)',
                    borderRadius: '0 4px 4px 0',
                    marginLeft: 8,
                    fontSize: 13,
                    fontWeight: 800,
                    color: dark ? '#e2e8f0' : '#0f172a',
                  }}
                >
                  {label}
                </span>
                {rest}
              </p>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p
            key={i}
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.8,
              color: dark ? '#cbd5e1' : '#0f172a',
              fontWeight: dark ? 500 : 600,
            }}
          >
            {t}
          </p>
        );
      })}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
//  SECTION CARD  (light variant)
// ─────────────────────────────────────────────────────────────

const LightCard: FC<{ section: SectorSection }> = ({ section }) => (
  <div
    className="sd-section-light"
    style={{
      position: 'relative',
      background: '#fff',
      borderRadius: 24,
      border: '1px solid #f1f5f9',
      padding: '40px 48px',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s, border-color 0.3s',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow =
        '0 20px 60px rgba(0,0,0,0.07)';
      (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      (e.currentTarget as HTMLElement).style.borderColor = '#f1f5f9';
    }}
  >
    {/* Hover glow top-right */}
    <div
      className="sd-hover-glow"
      style={{
        position: 'absolute',
        top: -40,
        left: -40,
        width: 160,
        height: 160,
        borderRadius: '50%',
        opacity: 0,
        transition: 'opacity 0.5s',
        pointerEvents: 'none',
      }}
    />

    {/* Section header */}
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        marginBottom: 28,
        direction: 'rtl',
      }}
    >
      {/* Accent bar */}
      <div style={{ position: 'relative', flexShrink: 0, width: 4 }}>
        <div
          className="sd-bar"
          style={{
            width: 4,
            height: 52,
            borderRadius: 4,
          }}
        />
        <div
          className="sd-bar-glow"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 4,
            filter: 'blur(4px)',
          }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          {section.title}
        </h2>
        {section.subtitle && (
          <p
            style={{
              margin: '6px 0 0',
              fontSize: 12,
              fontWeight: 800,
              color: '#334155',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            {section.subtitle}
          </p>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="sd-section-light-body" style={{ direction: 'rtl' }}>
      {typeof section.content === 'string'
        ? parseContent(section.content, false)
        : section.content}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  SECTION CARD  (dark variant)
// ─────────────────────────────────────────────────────────────

const DarkCard: FC<{ section: SectorSection }> = ({ section }) => (
  <div
    className="sd-section-dark"
    style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '40px 48px',
      overflow: 'hidden',
    }}
  >
    {/* Ambient glow */}
    <div
      className="sd-glow"
      style={{
        position: 'absolute',
        top: -80,
        left: -80,
        width: 280,
        height: 280,
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }}
    />

    {/* Grid pattern overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }}
    />

    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 16,
          marginBottom: 28,
          direction: 'rtl',
        }}
      >
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div
            className="sd-section-dark-bar"
            style={{
              width: 4,
              height: 52,
              borderRadius: 4,
            }}
          />
          <div
            className="sd-section-dark-bar-glow"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 4,
              filter: 'blur(6px)',
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {section.title}
          </h2>
          {section.subtitle && (
            <p
              style={{
                margin: '6px 0 0',
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--acc-60)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}
            >
              {section.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ direction: 'rtl' }}>
        {typeof section.content === 'string'
          ? parseContent(section.content, true)
          : section.content}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  KPI CARD
// ─────────────────────────────────────────────────────────────

const KpiCard: FC<{ kpi: SectorKPI }> = ({ kpi }) => (
  <div
    style={{
      background: 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 18,
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      transition: 'background 0.2s',
      cursor: 'default',
      minHeight: 122,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.background =
        'rgba(255,255,255,0.1)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.background =
        'rgba(255,255,255,0.06)';
    }}
  >
    {/* Icon */}
    {kpi.icon && (
      <div
        className="sd-kpi-icon-bg"
        style={{ borderRadius: 12, padding: 10, display: 'flex' }}
      >
        <kpi.icon
          className="sd-kpi-icon"
          size={22}
        />
      </div>
    )}

    {/* Value */}
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: 32,
          fontWeight: 900,
          color: '#f8fafc',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        {kpi.value}
      </span>
      <span
        className="sd-kpi-unit"
        style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}
      >
        {kpi.unit}
      </span>
    </div>

    {/* Label */}
    <p
      style={{
        margin: 0,
        fontSize: 12,
        fontWeight: 600,
        color: '#94a3b8',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        lineHeight: 1.35,
        textAlign: 'center',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {kpi.label}
    </p>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  MARKET CARD
// ─────────────────────────────────────────────────────────────

const MarketCard: FC<{ market: SectorMarket }> = ({ market }) => (
  <div
    style={{
      background: 'rgba(15,23,42,0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 18,
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      transition: 'background 0.2s',
      cursor: 'default',
      minHeight: 132,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.background =
        'rgba(15,23,42,0.85)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.background =
        'rgba(15,23,42,0.6)';
    }}
  >
    {/* Icon */}
    {market.icon ? (
      <div
        className="sd-market-icon-bg"
        style={{ borderRadius: 12, padding: 10, display: 'flex' }}
      >
        <market.icon className="sd-market-icon" size={22} />
      </div>
    ) : null}

    {/* Label */}
    <p
      style={{
        margin: 0,
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--acc-60)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        textAlign: 'center',
        lineHeight: 1.35,
      }}
    >
      {market.label}
    </p>

    {/* Country + Note */}
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 900,
          color: '#f8fafc',
          lineHeight: 1.2,
        }}
      >
        {market.country}
      </p>
      {market.note && (
        <p
          style={{
            margin: '6px 0 0',
            fontSize: 11,
            color: '#64748b',
            fontWeight: 500,
            lineHeight: 1.4,
            textAlign: 'center',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {market.note}
        </p>
      )}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  LEADERS SECTION
// ─────────────────────────────────────────────────────────────

const LeadersSection: FC<{
  leaders: SectorLeader[];
  title: string;
}> = ({ leaders, title }) => (
  <div
    id="leaders-section"
    data-section="leaders"
    style={{
      background: '#fff',
      borderRadius: 24,
      border: '1px solid #f1f5f9',
      padding: '40px 48px',
    }}
  >
    {/* Header */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 32,
        direction: 'rtl',
      }}
    >
      <div className="sd-bar" style={{ width: 4, height: 52, borderRadius: 4, flexShrink: 0 }} />
      <h2
        style={{
          margin: 0,
          fontSize: 26,
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.02em',
        }}
      >
        قادة {title.replace(/^(قطاع|صناعة)\s*/, '')}
      </h2>
    </div>

    {/* Grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 16,
        direction: 'rtl',
      }}
    >
      {leaders.map((leader, idx) => (
        <div
          key={idx}
          className="sd-leader-card"
          style={{
            position: 'relative',
            background: '#f8fafc',
            borderRadius: 16,
            border: '1px solid #e2e8f0',
            padding: '20px 20px 20px 44px',
            transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#fff';
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 8px 24px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = '#f8fafc';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          {/* Rank badge */}
          <div
            className="sd-leader-badge"
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              width: 28,
              height: 28,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 900,
            }}
          >
            {idx + 1}
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.3,
            }}
          >
            {leader.name}
          </p>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: 13,
              fontWeight: 600,
              color: '#64748b',
            }}
          >
            {leader.country}
          </p>
          {leader.note && (
            <p
              className="sd-note"
              style={{
                margin: '12px 0 0',
                paddingTop: 12,
                borderTop: '1px solid #e2e8f0',
                fontSize: 12,
                fontWeight: 600,
                color: '#64748b',
                lineHeight: 1.6,
                transition: 'color 0.2s',
              }}
            >
              {leader.note}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  BOTTOM ROW: Definition + Insights
// ─────────────────────────────────────────────────────────────

const BottomRow: FC<{
  definition?: string;
  industryInsights?: string[];
  tags?: string[];
  title: string;
}> = ({ definition, industryInsights = [], tags = [], title }) => {
  const hasDefinition = !!definition;
  const hasInsights = industryInsights.length > 0;
  if (!hasDefinition && !hasInsights && tags.length === 0) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: hasDefinition && hasInsights ? '3fr 2fr' : '1fr',
        gap: 20,
        direction: 'rtl',
      }}
    >
      {/* Definition */}
      {hasDefinition && (
        <div
          id="definition-section"
          data-section="definition"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: 24,
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '40px 48px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{
              position: 'absolute',
              top: -60,
              left: -60,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(100,116,139,0.15)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -60,
              right: -60,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'var(--acc-10)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 20,
                direction: 'rtl',
              }}
            >
              <div
                className="sd-bar"
                style={{ width: 3, height: 44, borderRadius: 4, flexShrink: 0 }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#f8fafc',
                  letterSpacing: '-0.02em',
                }}
              >
                تعريف {title.replace(/^(قطاع|صناعة)\s*/, '')}
              </h3>
            </div>

            {/* Text */}
            <p
              style={{
                margin: 0,
                fontSize: 16,
                color: '#cbd5e1',
                fontWeight: 500,
                lineHeight: 2,
                direction: 'rtl',
              }}
            >
              {definition}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                    direction: 'rtl',
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 1,
                      background: 'rgba(100,116,139,0.5)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                    }}
                  >
                    الموضوعات
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    direction: 'rtl',
                  }}
                >
                  {tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="sd-tag"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '5px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#94a3b8',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span
                        className="sd-hash"
                        style={{
                          color: i === 0 ? 'var(--acc)' : '#475569',
                          fontSize: 10,
                        }}
                      >
                        #
                      </span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Insights */}
      {hasInsights && (
        <div
          id="insights-section"
          data-section="insights-bottom"
          style={{
            background: '#fff',
            borderRadius: 24,
            border: '1px solid #f1f5f9',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3
            style={{
              margin: '0 0 28px',
              fontSize: 22,
              fontWeight: 800,
              color: '#0f172a',
              direction: 'rtl',
              letterSpacing: '-0.02em',
            }}
          >
            أبرز النقاط
          </h3>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              flex: 1,
            }}
          >
            {industryInsights.map((insight, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  direction: 'rtl',
                }}
              >
                <div
                  className="sd-insight-dot"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginTop: 8,
                    transition: 'transform 0.2s',
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  {insight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
//  NAV HELPERS
// ─────────────────────────────────────────────────────────────

/**
 * Build nav labels from sections.
 * If a section has no navLabel, fall back to section.title.
 */
const buildNav = (
  sections: SectorSection[],
  hasLeaders: boolean,
  hasDefinition: boolean,
): string[] => {
  const items = sections.map((s) => s.title);
  if (hasLeaders && !items.includes('القادة')) items.push('القادة');
  if (hasDefinition && !items.includes('التعريف')) items.push('التعريف');
  return items;
};

/** Map nav label → data-section id */
const buildNavMap = (
  sections: SectorSection[],
  hasLeaders: boolean,
  hasDefinition: boolean,
): Record<string, string> => {
  const map: Record<string, string> = {};
  sections.forEach((s) => {
    map[s.title] = s.id;
  });
  if (hasLeaders) map['القادة'] = 'leaders';
  if (hasDefinition) map['التعريف'] = 'definition';
  return map;
};

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

const SectorDashboardTemplate: FC<SectorDashboardProps> = ({
  title,
  subtitle,
  icon: Icon,
  accent,
  accentHex,
  pdfLabel = 'تحميل التقرير (PDF)',
  kpis,
  sections,
  leaders = [],
  definition,
  industryInsights = [],
  tags = [],
  topMarkets = [],
  onBack,
  parentCategory = 'استكشاف السوق',
}) => {
  // Inject CSS vars
  useAccentVars(accent, accentHex);

  const hasLeaders = leaders.length > 0;
  const hasDefinition = !!definition;

  const nav = useMemo(
    () => buildNav(sections, hasLeaders, hasDefinition),
    [sections, hasLeaders, hasDefinition],
  );

  const navMap = useMemo(
    () => buildNavMap(sections, hasLeaders, hasDefinition),
    [sections, hasLeaders, hasDefinition],
  );

  const [activeNav, setActiveNav] = useState<string>(nav[0] ?? '');
  const navRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef<Set<string>>(new Set());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Nav click → smooth scroll
  const handleNavClick = useCallback(
    (label: string) => {
      setActiveNav(label);
      const sectionId = navMap[label];
      if (!sectionId) return;

      const el =
        document.querySelector<HTMLElement>(`[data-section="${sectionId}"]`) ??
        document.getElementById(`${sectionId}-section`);

      if (el) {
        const navH = navRef.current?.offsetHeight ?? 60;
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 32;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    [navMap],
  );

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const tracked: Element[] = [];

    sections.forEach((s) => {
      const el = root.querySelector(`[data-section="${s.id}"]`);
      if (el) tracked.push(el);
    });

    ['leaders', 'definition', 'insights-bottom'].forEach((id) => {
      const el = document.querySelector(`[data-section="${id}"]`);
      if (el) tracked.push(el);
    });

    visibleRef.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id =
            entry.target.getAttribute('data-section') ?? '';
          if (entry.isIntersecting) {
            visibleRef.current.add(id);
          } else {
            visibleRef.current.delete(id);
          }
        }

        // Find first visible section that maps to a nav item
        for (const sectionId of visibleRef.current) {
          for (const [label, sid] of Object.entries(navMap)) {
            if (sid === sectionId && nav.includes(label)) {
              setActiveNav(label);
              return;
            }
          }
        }
      },
      {
        rootMargin: '-120px 0px -40% 0px',
        threshold: [0, 0.2],
      },
    );

    tracked.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections, navMap, nav]);

  return (
    <div
      dir="rtl"
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        fontFamily:
          "'Cairo', 'Tajawal', 'IBM Plex Sans Arabic', system-ui, sans-serif",
      }}
    >
      {/* ══════════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════════ */}
      <header
        style={{
          background: 'linear-gradient(160deg, #0a0f1e 0%, #0f172a 60%, #131f35 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient orbs */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'var(--acc)',
            opacity: 0.06,
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: 0,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'var(--acc)',
            opacity: 0.04,
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1280,
            margin: '0 auto',
            padding: '32px 48px 36px',
          }}
        >
          {/* Back + breadcrumb */}
          {onBack && (
            <button
              onClick={onBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '6px 16px',
                color: '#94a3b8',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 24,
                transition: 'all 0.2s',
                direction: 'rtl',
              }}
            >
              <span>{parentCategory}</span>
              <span style={{ opacity: 0.5 }}>←</span>
            </button>
          )}

          {/* Title row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
              marginBottom: 28,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                flex: 1,
                minWidth: 0,
              }}
            >
              {/* Icon */}
              <div
                className="sd-hero-icon-bg"
                style={{
                  padding: 14,
                  borderRadius: 16,
                  display: 'flex',
                  flexShrink: 0,
                  boxShadow: '0 8px 24px var(--acc-20)',
                }}
              >
                <Icon size={26} color="#fff" />
              </div>

              <div style={{ minWidth: 0 }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: 'clamp(22px, 3vw, 38px)',
                    fontWeight: 900,
                    color: '#f8fafc',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    margin: '8px 0 0',
                    fontSize: 14,
                    color: '#64748b',
                    fontWeight: 500,
                    lineHeight: 1.6,
                    maxWidth: 600,
                  }}
                >
                  {subtitle}
                </p>
              </div>
            </div>

            {/* PDF download */}
            <button
              className="sd-download-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 12,
                border: 'none',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                boxShadow: '0 4px 16px var(--acc-20)',
                transition: 'filter 0.2s',
              }}
            >
              <Download size={14} />
              {pdfLabel}
            </button>
          </div>

          {/* KPI row — centered in banner */}
          {kpis.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: 22,
                marginBottom: topMarkets.length > 0 ? 22 : 0,
              }}
            >
              {kpis.slice(0, 6).map((kpi, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 220px',
                    maxWidth: 300,
                    minWidth: 200,
                  }}
                >
                  <KpiCard kpi={kpi} />
                </div>
              ))}
            </div>
          )}

          {/* Markets row — centered in banner */}
          {topMarkets.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: 22,
              }}
            >
              {topMarkets.slice(0, 6).map((m, i) => (
                <div
                  key={i}
                  style={{
                    flex: '1 1 220px',
                    maxWidth: 300,
                    minWidth: 200,
                  }}
                >
                  <MarketCard market={m} />
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ══════════════════════════════════════════
          STICKY NAV
      ══════════════════════════════════════════ */}
      <nav
        ref={navRef}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: 'rgba(15,23,42,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 48px',
            position: 'relative',
          }}
        >
          {/* Fade overlays for mobile scroll */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 48,
              background:
                'linear-gradient(to right, transparent, rgba(15,23,42,0.95))',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 48,
              background:
                'linear-gradient(to left, transparent, rgba(15,23,42,0.95))',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <div
            style={{
              display: 'flex',
              gap: 4,
              overflowX: 'auto',
              padding: '10px 0',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              direction: 'rtl',
            }}
          >
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`sd-nav-btn${activeNav === item ? ' active' : ''}`}
                style={{
                  flexShrink: 0,
                  padding: '8px 20px',
                  borderRadius: 20,
                  border: '1.5px solid transparent',
                  background: 'transparent',
                  color: activeNav === item ? '#fff' : '#64748b',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (activeNav !== item) {
                    (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
                    (e.currentTarget as HTMLElement).style.background =
                      'rgba(255,255,255,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== item) {
                    (e.currentTarget as HTMLElement).style.color = '#64748b';
                    (e.currentTarget as HTMLElement).style.background =
                      'transparent';
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <main
        ref={mainRef}
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '40px 48px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Sections */}
        {sections.map((section) => (
          <div
            key={section.id}
            data-section={section.id}
          >
            {section.variant === 'dark' ? (
              <DarkCard section={section} />
            ) : (
              <LightCard section={section} />
            )}
          </div>
        ))}

        {/* Leaders */}
        {hasLeaders && (
          <LeadersSection leaders={leaders} title={title} />
        )}

        {/* Definition + Insights */}
        <BottomRow
          definition={definition}
          industryInsights={industryInsights}
          tags={tags}
          title={title}
        />
      </main>
    </div>
  );
};

export default SectorDashboardTemplate;

// ─────────────────────────────────────────────────────────────
//  USAGE EXAMPLE  (احذف هذا الجزء في مشروعك)
// ─────────────────────────────────────────────────────────────
/*

import { BarChart2 } from 'lucide-react';
import SectorDashboardTemplate from './SectorDashboardTemplate';

export default function ExamplePage() {
  return (
    <SectorDashboardTemplate
      title="قطاع التكنولوجيا المالية"
      subtitle="تحليل شامل لأسواق الفينتك العالمية والإقليمية"
      icon={BarChart2}
      accent="emerald"
      accentHex="#10b981"
      kpis={[
        { label: 'حجم السوق العالمي', value: '340', unit: 'مليار $' },
        { label: 'معدل النمو السنوي', value: '23%', unit: 'CAGR' },
        { label: 'عدد الشركات', value: '30K+', unit: 'شركة' },
      ]}
      topMarkets={[
        { label: 'الأكبر عالمياً', country: 'الولايات المتحدة', note: 'أكثر من 120 مليار $' },
        { label: 'الأسرع نمواً', country: 'الصين', note: 'نمو 35% سنوياً' },
        { label: 'الأكثر ابتكاراً', country: 'المملكة المتحدة', note: 'مركز التنظيم العالمي' },
      ]}
      sections={[
        {
          id: 'overview',
          title: 'نظرة عامة',
          subtitle: 'حالة السوق 2024',
          variant: 'light',
          content: `• شهد القطاع نمواً استثنائياً خلال السنوات الأخيرة
• المدفوعات الرقمية تقود القطاع بحصة 45% من الإيرادات
• الذكاء الاصطناعي يعيد تشكيل نماذج الأعمال بشكل جذري`,
        },
        {
          id: 'trends',
          title: 'اتجاهات الصناعة',
          subtitle: 'أبرز التحولات',
          variant: 'dark',
          content: `التضمين المالي: وصول 1.4 مليار شخص جديد للخدمات المصرفية
المدفوعات اللحظية: تجاوزت معالجة 500 مليار معاملة سنوياً
عملات البنوك المركزية الرقمية: 130 دولة في مرحلة التطوير`,
        },
      ]}
      leaders={[
        { name: 'Stripe', country: 'الولايات المتحدة', note: 'تقييم 65 مليار $' },
        { name: 'Ant Group', country: 'الصين', note: 'مليار مستخدم' },
        { name: 'Nubank', country: 'البرازيل', note: 'أكبر بنك رقمي في أمريكا اللاتينية' },
      ]}
      definition="قطاع التكنولوجيا المالية يشمل الشركات التي تستخدم التكنولوجيا لتقديم خدمات مالية أكثر كفاءة وشمولاً، من المدفوعات الرقمية والإقراض عبر الإنترنت إلى إدارة الثروات والتأمين الرقمي."
      industryInsights={[
        'الذكاء الاصطناعي سيوفر 447 مليار $ للمؤسسات المالية بحلول 2023',
        'المنطقة العربية تشهد أسرع نمو فينتك في العالم بمعدل 45%',
        'الأمن السيبراني أصبح أولوية استثمارية قصوى للقطاع',
      ]}
      tags={['فينتك', 'مدفوعات رقمية', 'بلوكتشين', 'ذكاء اصطناعي', 'شمول مالي']}
    />
  );
}
*/