import { Problem } from '../components/features/discovery/ProblemOpportunityEngine/types';

export const loadDynamicOpportunities = async (): Promise<Problem[]> => {
  // Use Vite's glob import to find all JSON files recursively in the opportunities directory
  const modules = import.meta.glob('../data/opportunities/**/*.json');
  const opportunities: Problem[] = [];

  for (const path in modules) {
    try {
      const mod: any = await modules[path]();
      const data = mod.default || mod;
      
      console.log(`Checking file: ${path}`, data); // Debug Log

      if (data.opportunity) {
        const opp = data.opportunity;
        // Transform the structured JSON into the Problem type used by the UI
        const transformedOpp = {
          id: opp.metadata.id || path.split('/').pop()?.replace('.json', '') || Math.random().toString(),
          title: opp.core_content.title || 'العنوان مفقود',
          desc: opp.core_content.problem_statement || 'لا يوجد وصف حالياً',
          pain: opp.strategic_matrix?.market_pain || 0,
          money: opp.strategic_matrix?.liquidity_tam || 0,
          freq: 10, 
          gap: opp.strategic_matrix?.competitive_moat || 0,
          opps: (opp.investment_proposals || []).map((p: any) => ({
            type: p.industry_tag || 'مشروع مقترح',
            name: p.brand_name || 'اسم المشروع',
            model: p.revenue_model || 'نموذج العمل'
          })),
          countries: opp.geography?.active_regions || [],
          budget: 'medium',
          b2x: opp.metadata?.business_model || 'B2C',
          // Extended dynamic fields
          roadmap: opp.execution_roadmap,
          whyNotSolved: opp.deep_analysis?.why_unsolved_reasons,
          techStack: opp.deep_analysis?.recommended_tech_stack,
          mainRisk: opp.deep_analysis?.main_risk_index
        };
        
        console.log("Successfully transformed:", transformedOpp.title);
        opportunities.push(transformedOpp);
      } else {
        console.warn(`File at ${path} does not have the 'opportunity' root key.`);
      }
    } catch (error) {
      console.error(`Failed to load opportunity at ${path}:`, error);
    }
  }

  return opportunities;
};
