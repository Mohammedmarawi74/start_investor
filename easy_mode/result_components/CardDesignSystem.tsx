import React from "react";

/**
 * 🎨 DESIGN TOKENS
 * Single source of truth for the Results Page aesthetic.
 */
export const TOKENS = {
  radius: {
    card: "24px",
    inner: "16px",
    button: "14px"
  },
  spacing: {
    pageGap: "24px",
    cardPadding: "32px",
    contentGap: "16px",
    sectionGap: "24px"
  },
  colors: {
    primary: "#6366f1",
    primaryLight: "#818cf8",
    primaryGlow: "rgba(99, 102, 241, 0.15)",
    secondary: "#10b981", // Emerald
    danger: "#e11d48", // Rose
    warning: "#f59e0b", // Amber
    surface: "#ffffff",
    border: "rgba(226, 232, 240, 0.8)",
    borderHover: "rgba(99, 102, 241, 0.3)",
    text: {
      title: "#0f172a",
      body: "#475569",
      muted: "#94a3b8",
      accent: "#6366f1"
    }
  },
  typography: {
    title: {
      size: "20px",
      weight: "800",
      family: "'IBM Plex Sans Arabic', sans-serif"
    },
    body: {
      size: "14.5px",
      weight: "500",
      lineHeight: "1.6"
    },
    label: {
      size: "11px",
      weight: "900",
      spacing: "0.05em"
    }
  },
  shadows: {
    soft: "0 10px 30px -10px rgba(0, 0, 0, 0.04)",
    premium: "0 20px 40px -12px rgba(99, 102, 241, 0.08)",
    glow: "0 0 20px rgba(99, 102, 241, 0.05)"
  }
};

/**
 * ✨ BASE CARD WRAPPER
 */
export const BaseCard = ({ 
  children, 
  variant = "default", 
  className = "", 
  style = {}, 
  onClick 
}: {
  children: React.ReactNode;
  variant?: "default" | "highlight" | "danger" | "success";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "highlight": return { borderColor: "rgba(99, 102, 241, 0.3)", background: "linear-gradient(to bottom right, #fff, #f8faff)" };
      case "danger": return { borderColor: "rgba(225, 29, 72, 0.2)", background: "linear-gradient(to bottom right, #fff, #fff1f2)" };
      case "success": return { borderColor: "rgba(16, 185, 129, 0.2)", background: "linear-gradient(to bottom right, #fff, #f0fdf4)" };
      default: return { borderColor: TOKENS.colors.border, background: TOKENS.colors.surface };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: TOKENS.radius.card,
    padding: TOKENS.spacing.cardPadding,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    border: "1px solid",
    boxShadow: TOKENS.shadows.premium,
    cursor: onClick ? "pointer" : "default",
    overflow: "hidden",
    ...getVariantStyles(),
    ...style
  };

  return (
    <div 
      className={`group ${className} fade-in`}
      style={baseStyles}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = TOKENS.colors.borderHover;
        e.currentTarget.style.boxShadow = `0 30px 60px -12px ${TOKENS.colors.primaryGlow}, ${TOKENS.shadows.premium}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = getVariantStyles().borderColor as string;
        e.currentTarget.style.boxShadow = TOKENS.shadows.premium;
      }}
    >
      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        background: `radial-gradient(circle, ${TOKENS.colors.primaryGlow} 0%, transparent 70%)`,
        opacity: 0.4,
        pointerEvents: "none",
        zIndex: 0
      }} />
      
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

/**
 * 📝 TYPOGRAPHY COMPONENTS
 */

export const CardHeader = ({ 
  title, 
  subtitle, 
  icon, 
  badge, 
  badgeType = "default" 
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeType?: "default" | "success" | "danger" | "warning";
}) => {
  
  const getBadgeStyles = () => {
    switch (badgeType) {
      case "success": return { color: TOKENS.colors.secondary, bg: "#dcfce7" };
      case "danger": return { color: TOKENS.colors.danger, bg: "#ffe4e6" };
      case "warning": return { color: TOKENS.colors.warning, bg: "#fef3c7" };
      default: return { color: TOKENS.colors.primary, bg: "#eef2ff" };
    }
  };

  const badgeStyles = getBadgeStyles();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: TOKENS.spacing.sectionGap }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {icon && (
          <div style={{ 
            width: 42, 
            height: 42, 
            borderRadius: "12px", 
            background: "#f8fafc", 
            border: `1px solid ${TOKENS.colors.border}`,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: TOKENS.colors.primary
          }}>
            {icon}
          </div>
        )}
        <div>
          <h3 style={{ 
            fontSize: TOKENS.typography.title.size, 
            fontWeight: TOKENS.typography.title.weight, 
            color: TOKENS.colors.text.title,
            margin: 0,
            lineHeight: 1.2
          }}>
            {title}
          </h3>
          {subtitle && (
            <p style={{ 
              fontSize: "13px", 
              color: TOKENS.colors.text.muted, 
              margin: "4px 0 0",
              fontWeight: 500 
            }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badge && (
        <div style={{ 
          fontSize: TOKENS.typography.label.size, 
          fontWeight: TOKENS.typography.label.weight, 
          color: badgeStyles.color, 
          background: badgeStyles.bg, 
          padding: "6px 14px", 
          borderRadius: "100px",
          letterSpacing: TOKENS.typography.label.spacing
        }}>
          {badge}
        </div>
      )}
    </div>
  );
};

export const CardBody = ({ 
  children, 
  style 
}: { 
  children: React.ReactNode; 
  style?: React.CSSProperties 
}) => (
  <div style={{ 
    fontSize: TOKENS.typography.body.size, 
    color: TOKENS.colors.text.body, 
    lineHeight: TOKENS.typography.body.lineHeight,
    fontWeight: TOKENS.typography.body.weight,
    ...style
  }}>
    {children}
  </div>
);

export const CardFooter = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => (
  <div style={{ 
    marginTop: TOKENS.spacing.sectionGap, 
    paddingTop: TOKENS.spacing.sectionGap, 
    borderTop: `1px solid ${TOKENS.colors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}>
    {children}
  </div>
);
