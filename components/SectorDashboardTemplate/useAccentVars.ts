import { useEffect } from 'react';

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

export const useAccentVars = (accent: string, accentHex?: string) => {
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
      
      /* Web Application Typography Fixes */
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

      /* Responsive Layout Utilities */
      .sd-container {
        width: 100%;
        max-width: 1320px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
      }
      @media (min-width: 768px) {
        .sd-container {
          padding-left: 40px;
          padding-right: 40px;
        }
      }
      @media (min-width: 1024px) {
        .sd-container {
          padding-left: 60px;
          padding-right: 60px;
        }
      }

      .sd-header-section {
        padding-top: 30px !important;
        padding-bottom: 40px !important;
      }
      @media (min-width: 1024px) {
        .sd-header-section {
          padding-top: 60px !important;
          padding-bottom: 80px !important;
        }
      }

      .sd-header-grid {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
      @media (min-width: 1024px) {
        .sd-header-grid {
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
        }
      }

      .sd-kpi-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      @media (min-width: 640px) {
        .sd-kpi-grid {
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 14px;
        }
      }
      @media (min-width: 1024px) {
        .sd-kpi-grid {
          flex: 1 1 360px;
        }
      }

      .sd-market-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      @media (min-width: 768px) {
        .sd-market-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
      }
      @media (min-width: 1024px) {
        .sd-market-grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
      }

      .sd-nav-container {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none; /* Firefox */
      }
      .sd-nav-container::-webkit-scrollbar {
        display: none; /* Safari/Chrome */
      }

      .sd-nav-btn {
        white-space: nowrap;
        flex-shrink: 0;
      }

      .sd-section-card {
        padding: 24px 20px !important;
      }
      @media (min-width: 768px) {
        .sd-section-card {
          padding: 40px 48px !important;
        }
      }

      .sd-hero-title {
        font-size: 28px !important;
      }
      @media (min-width: 768px) {
        .sd-hero-title {
          font-size: 36px !important;
        }
      }
      @media (min-width: 1024px) {
        .sd-hero-title {
          font-size: 48px !important;
        }
      }

      .sd-opp-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }
      @media (min-width: 768px) {
        .sd-opp-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
      }

      .sd-bottom-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
      @media (min-width: 1024px) {
        .sd-bottom-grid.has-split {
          grid-template-columns: 3fr 2fr;
        }
      }
    
    `;
  }, [hex]);

  return hex;
};
