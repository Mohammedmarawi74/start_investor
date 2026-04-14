import React, { useState, type FC } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { BusinessOpportunity } from './types';

export const OpportunityCard: FC<{ opp: BusinessOpportunity; index: number }> = ({
  opp,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = opp.icon;

  return (
    <div
      className="sd-opp-card"
      onClick={() => setIsOpen(!isOpen)}
      style={{
        background: '#fff',
        border: '1px solid #f1f5f9',
        borderRadius: 24,
        padding: 24,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--acc-20)';
        el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#f1f5f9';
        el.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 16,
        }}
      >
        <div style={{ 
          width: 44, height: 44, borderRadius: 12, 
          background: 'var(--acc-10)', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', 
          color: 'var(--acc)' 
        }}>
          {Icon && <Icon size={22} />}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 900, color: '#f1f5f9', lineHeight: 1, userSelect: 'none' }}>
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: isOpen ? 'var(--acc)' : '#f8fafc',
            color: isOpen ? '#fff' : '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            boxShadow: isOpen ? '0 4px 12px var(--acc-20)' : 'none',
          }}>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      <h4 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 800, color: '#0f172a' }}>{opp.title}</h4>
      <p style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#64748b', lineHeight: 1.6 }}>{opp.description}</p>

      {/* Expandable Content */}
      <div style={{
        maxHeight: isOpen ? '1000px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        paddingTop: isOpen ? 8 : 0,
      }}>
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
          <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 800, color: 'var(--acc)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>أمثلة للمشاريع:</p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {opp.examples.map((ex, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#475569' }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--acc-40)' }} />
                {ex}
              </li>
            ))}
          </ul>

          {opp.note && (
            <div style={{ marginTop: 24, padding: 12, background: '#f8fafc', borderRadius: 12, border: '1px solid #f1f5f9', display: 'flex', gap: 10 }}>
              <CheckCircle2 size={16} color="var(--acc)" style={{ marginTop: 2, flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: '#64748b', lineHeight: 1.5 }}>{opp.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const OpportunitiesSection: FC<{ opportunities: BusinessOpportunity[] }> = ({
  opportunities,
}) => {
  return (
    <div
      id="opportunities-section"
      data-section="opportunities-section"
      style={{
        background: '#fff',
        borderRadius: 24,
        border: '1px solid #f1f5f9',
        padding: '40px 48px',
        direction: 'rtl',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          className="sd-bar"
          style={{ width: 4, height: 40, borderRadius: 4 }}
        />
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h3
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.01em',
              }}
            >
              نماذج الأعمال والفرص الاستثمارية
            </h3>
            <span
              style={{
                background: 'var(--acc)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '100px',
                boxShadow: '0 4px 12px var(--acc-20)',
              }}
            >
              جديد
            </span>
          </div>
          <p
            style={{
              margin: '6px 0 0',
              fontSize: 14,
              fontWeight: 600,
              color: '#64748b',
            }}
          >
            أبرز مسارات العمل المتاحة في هذا القطاع وكيفية البدء فيها
          </p>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        {opportunities.map((opp, idx) => (
          <OpportunityCard key={opp.id} opp={opp} index={idx} />
        ))}
      </div>
    </div>
  );
};
