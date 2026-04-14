import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type FC,
} from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { SectorDashboardProps } from './types';
import { useAccentVars } from './useAccentVars';
import { LightCard, DarkCard, KpiCard, MarketCard } from './SectionCards';
import { OpportunitiesSection } from './BusinessOpportunities';
import { LeadersSection } from './LeadersSection';
import { BottomRow } from './BottomRow';
import { buildNav, buildNavMap } from './NavHelpers';

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
  businessOpportunities = [],
  onBack,
  onBuildPlan,
  parentCategory = 'استكشاف السوق',
}) => {
  // Inject CSS vars
  useAccentVars(accent, accentHex);

  const hasLeaders = leaders.length > 0;
  const hasDefinition = !!definition;
  const hasOpportunities = (businessOpportunities?.length ?? 0) > 0;

  const nav = useMemo(
    () => buildNav(sections, hasLeaders, hasDefinition, hasOpportunities),
    [sections, hasLeaders, hasDefinition, hasOpportunities],
  );

  const navMap = useMemo(
    () => buildNavMap(sections, hasLeaders, hasDefinition, hasOpportunities),
    [sections, hasLeaders, hasDefinition, hasOpportunities],
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

    ['opportunities-section', 'leaders', 'definition', 'insights-bottom'].forEach((id) => {
      const el = document.querySelector(`[data-section="${id}"]`) || document.getElementById(id);
      if (el) tracked.push(el);
    });

    visibleRef.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.getAttribute('data-section') ?? entry.target.id ?? '';
          if (entry.isIntersecting) {
            visibleRef.current.add(id);
          } else {
            visibleRef.current.delete(id);
          }
        }

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
        fontFamily: "'Cairo', 'Tajawal', 'IBM Plex Sans Arabic', system-ui, sans-serif",
      }}
    >
      <header style={{ background: 'linear-gradient(160deg, #0a0f1e 0%, #0f172a 60%, #131f35 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'var(--acc)', filter: 'blur(160px)', opacity: 0.08, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 48px 80px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, direction: 'rtl' }}>
            <div style={{ flex: '1 1 500px', maxWidth: 720, minWidth: 320 }}>
              <button 
                onClick={onBack}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '100px', color: '#94a3b8', fontSize: '12px', fontWeight: 700, marginBottom: 24, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#f8fafc'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                <span>الرجوع إلى {parentCategory}</span>
                <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div className="sd-hero-icon-bg" style={{ padding: 12, borderRadius: 20, boxShadow: '0 15px 35px rgba(0,0,0,0.3)', position: 'relative' }}>
                  <Icon size={30} color="#fff" strokeWidth={1.5} />
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 20, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)' }} />
                </div>
                <div style={{ height: 32, width: 1, background: 'rgba(255,255,255,0.1)' }} />
              </div>

              <h1 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 14 }}>{title}</h1>
              <p style={{ margin: 0, fontSize: 16, color: '#94a3b8', fontWeight: 500, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
                <button className="sd-download-btn" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 14, color: '#fff', fontSize: 14, fontWeight: 800, border: 'none', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
                  <Download size={18} />
                  <span>{pdfLabel}</span>
                </button>
              </div>
            </div>

            <div style={{ flex: '1 1 360px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
              {kpis.slice(0, 4).map((kpi, i) => (
                <KpiCard key={i} kpi={kpi} />
              ))}
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {topMarkets.map((market, i) => (
              <MarketCard key={i} market={market} />
            ))}
          </div>
        </div>
      </header>

      <nav ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #e2e8f0', padding: '0 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, height: 72 }}>
          {nav.map((item) => (
            <button key={item} onClick={() => handleNavClick(item)} className={`sd-nav-btn ${activeNav === item ? 'active' : ''}`} style={{ padding: '10px 24px', borderRadius: '100px', border: '1px solid transparent', background: 'transparent', color: activeNav === item ? '#fff' : '#64748b', fontSize: 14, fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s' }}>{item}</button>
          ))}
        </div>
      </nav>

      <main ref={mainRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 48px 80px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {sections.map((section) => (
          <div key={section.id} data-section={section.id}>
            {section.variant === 'dark' ? <DarkCard section={section} /> : <LightCard section={section} />}
          </div>
        ))}

        {hasLeaders && (
          <LeadersSection leaders={leaders} title={title} />
        )}

        <BottomRow
          definition={definition}
          industryInsights={industryInsights}
          tags={tags}
          title={title}
        />

        {hasOpportunities && (
          <OpportunitiesSection opportunities={businessOpportunities} onBuildPlan={onBuildPlan} />
        )}
      </main>
    </div>
  );
};

export default SectorDashboardTemplate;
export * from './types';
