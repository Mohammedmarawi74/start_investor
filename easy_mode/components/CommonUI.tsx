
import React from 'react';
import { THEME } from '../constants';

// --- Glass Card (Light Mode Optimized) ---
interface GlassCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style = {}, glow = false }) => (
  <div style={{
    background: THEME.bgCard,
    border: `1px solid ${THEME.border}`,
    borderRadius: 24,
    padding: 24,
    position: "relative",
    overflow: "hidden",
    boxShadow: glow ? '0 10px 40px rgba(16, 185, 129, 0.08)' : '0 4px 20px rgba(0,0,0,0.02)',
    fontFamily: THEME.fontBody,
    ...style,
  }}>
    {children}
  </div>
);

// --- Badge (Premium Light Design) ---
interface BadgeProps {
  children: React.ReactNode;
  type?: 'default' | 'green' | 'red' | 'amber' | 'gold' | 'blue' | 'purple';
}

export const Badge: React.FC<BadgeProps> = ({ children, type = "default" }) => {
  const styles = {
    default: { bg: THEME.bgSecondary, color: THEME.textMuted, border: THEME.border },
    green: { bg: THEME.accentDim, color: THEME.accent, border: 'rgba(16, 185, 129, 0.2)' },
    red: { bg: THEME.redDim, color: THEME.red, border: 'rgba(239, 68, 68, 0.2)' },
    amber: { bg: THEME.amberDim, color: THEME.amber, border: 'rgba(245, 158, 11, 0.2)' },
    blue: { bg: THEME.blueDim, color: THEME.blue, border: 'rgba(59, 130, 246, 0.2)' },
    gold: { bg: THEME.goldDim, color: THEME.gold, border: 'rgba(245, 158, 11, 0.2)' },
    purple: { bg: 'rgba(83, 74, 183, 0.08)', color: '#534ab7', border: 'rgba(83, 74, 183, 0.15)' },
  };
  const s = styles[type] || styles.default;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "4px 12px", borderRadius: 20,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.02em",
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      fontFamily: THEME.fontBody,
    }}>{children}</span>
  );
};

// --- Progress Dots ---
export const ProgressDots: React.FC<{ total: number; current: number }> = ({ total, current }) => (
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} style={{
        width: i === current ? 24 : 8,
        height: 8, borderRadius: 4,
        background: i < current ? THEME.accent : i === current ? THEME.accent : "#E2E8F0",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }} />
    ))}
  </div>
);
