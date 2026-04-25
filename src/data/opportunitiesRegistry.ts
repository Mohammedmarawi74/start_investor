import { BusinessOpportunity } from '../components/SectorDashboardTemplate/types';
import { agricultureOpportunities } from './opportunities/agriculture';
import { advertisingMarketingOpportunities } from './opportunities/advertisingMarketing';
import { chemicalsResourcesOpportunities } from './opportunities/chemicalsResources';
import { constructionOpportunities } from './opportunities/construction';
import { consumerGoodsFmcgOpportunities } from './opportunities/consumerGoodsFmcg';
import { ecommerceOpportunities } from './opportunities/ecommerce';
import { economyPoliticsOpportunities } from './opportunities/economyPolitics';
import { energyEnvironmentOpportunities } from './opportunities/energyEnvironment';
import { financeInsuranceOpportunities } from './opportunities/financeInsurance';
import { healthPharmaOpportunities } from './opportunities/healthPharma';
import { internetOpportunities } from './opportunities/internet';
import { lifeOpportunities } from './opportunities/life';
import { mediaOpportunities } from './opportunities/media';
import { metalsElectronicsOpportunities } from './opportunities/metalsElectronics';
import { realEstateOpportunities } from './opportunities/realEstate';
import { retailTradeOpportunities } from './opportunities/retailTrade';
import { servicesOpportunities } from './opportunities/services';
import { societyOpportunities } from './opportunities/society';
import { sportsRecreationOpportunities } from './opportunities/sportsRecreation';
import { technologyTelecommunicationsOpportunities } from './opportunities/technologyTelecommunications';
import { transportationLogisticsOpportunities } from './opportunities/transportationLogistics';
import { travelTourismOpportunities } from './opportunities/travelTourism';

/**
 * Central Registry for Business Opportunities across all 158 sectors.
 * This file aggregates all modular category files from the /opportunities folder.
 */
export const OPPORTUNITIES_REGISTRY: Record<string, BusinessOpportunity[]> = {
  ...agricultureOpportunities,
  ...advertisingMarketingOpportunities,
  ...chemicalsResourcesOpportunities,
  ...constructionOpportunities,
  ...consumerGoodsFmcgOpportunities,
  ...ecommerceOpportunities,
  ...economyPoliticsOpportunities,
  ...energyEnvironmentOpportunities,
  ...financeInsuranceOpportunities,
  ...healthPharmaOpportunities,
  ...internetOpportunities,
  ...lifeOpportunities,
  ...mediaOpportunities,
  ...metalsElectronicsOpportunities,
  ...realEstateOpportunities,
  ...retailTradeOpportunities,
  ...servicesOpportunities,
  ...societyOpportunities,
  ...sportsRecreationOpportunities,
  ...technologyTelecommunicationsOpportunities,
  ...transportationLogisticsOpportunities,
  ...travelTourismOpportunities,
};
