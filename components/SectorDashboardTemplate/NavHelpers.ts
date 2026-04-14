import { SectorSection } from './types';

/**
 * Build nav labels from sections.
 */
export const buildNav = (
  sections: SectorSection[],
  hasLeaders: boolean,
  hasDefinition: boolean,
  hasOpportunities: boolean,
  hasSwot: boolean,
): string[] => {
  const items = sections.map((s) => s.title);
  if (hasSwot && !items.includes('تحليل SWOT')) items.push('تحليل SWOT');
  if (hasLeaders && !items.includes('القادة')) items.push('القادة');
  if (hasDefinition && !items.includes('التعريف')) items.push('التعريف');
  if (hasOpportunities && !items.includes('فرص الاستثمار')) items.push('فرص الاستثمار');
  return items;
}

/** Map nav label → data-section id */
export const buildNavMap = (
  sections: SectorSection[],
  hasLeaders: boolean,
  hasDefinition: boolean,
  hasOpportunities: boolean,
  hasSwot: boolean,
): Record<string, string> => {
  const map: Record<string, string> = {};
  sections.forEach((s) => {
    map[s.title] = s.id;
  });
  if (hasSwot) map['تحليل SWOT'] = 'swot-analysis';
  if (hasLeaders) map['القادة'] = 'leaders';
  if (hasDefinition) map['التعريف'] = 'definition';
  if (hasOpportunities) map['فرص الاستثمار'] = 'opportunities-section';
  return map;
}
