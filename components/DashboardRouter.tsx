
import React from 'react';
import { Home } from './Home';
import { DiscoveryCenter } from './DiscoveryCenter';
import { MyProjects } from './MyProjects';
import { NewPlan } from './NewPlan';
import { PlanComparison } from './PlanComparison';
import { UnicornBenchmarking } from './UnicornBenchmarking';
import { BrandIdentityStudio } from './BrandIdentityStudio';
import { ProblemOpportunityEngine } from './ProblemOpportunityEngine';
import { BusinessPlanEditor } from './BusinessPlanEditor';
import { UsersManagement } from './UsersManagement';
import { AdminProjectsManagement } from './Admin/AdminProjectsManagement';
import { AdminAnalyticsDashboard } from './Admin/AdminAnalyticsDashboard';
import { AdminSecurityDashboard } from './Admin/AdminSecurityDashboard';
import { PricingPlans } from './PricingPlans';
import { Settings } from './Settings';
import { Tasks } from './Tasks';
import { Changelog } from './Changelog';
import { ExportTemplates } from './ExportTemplates';
import { Notifications } from './Notifications';
import { SmartAnalyzer } from './SmartAnalyzer';
import { Profile } from './Profile';
import { MobileSiteMap } from './MobileSiteMap';
import ResultPage from '../easy_mode/ResultPage';

// Dashboards
import AdvertisingDashboard from './AdvertisingMarketing/AdvertisingDashboard';
import MarketingDashboard from './AdvertisingMarketing/MarketingDashboard';
import InfluencerMarketingDashboard from './AdvertisingMarketing/InfluencerMarketingDashboard';
import BrandsLeadersDashboard from './AdvertisingMarketing/BrandsLeadersDashboard';
import SearchEngineOptimizationContentMarketingDashboard from './AdvertisingMarketing/SearchEngineOptimizationContentMarketingDashboard';

import FarmingDashboard from './Agriculture/FarmingDashboard';
import FisheriesAquacultureDashboard from './Agriculture/FisheriesAquacultureDashboard';
import ForestryDashboard from './Agriculture/ForestryDashboard';
import AgriculturalTechnologyAgritechDashboard from './Agriculture/AgriculturalTechnologyAgritechDashboard';
import SmartFarmingDashboard from './Agriculture/SmartFarmingDashboard';
import SeedsCropProtectionDashboard from './Agriculture/SeedsCropProtectionDashboard';

import ChemicalIndustryDashboard from './ChemicalsResources/ChemicalIndustryDashboard';
import FossilFuelsDashboard from './ChemicalsResources/FossilFuelsDashboard';
import MiningDashboard from './ChemicalsResources/MiningDashboard';
import PulpPaperDashboard from './ChemicalsResources/PulpPaperDashboard';
import PlasticRubberDashboard from './ChemicalsResources/PlasticRubberDashboard';
import PetroleumRefineryDashboard from './ChemicalsResources/PetroleumRefineryDashboard';
import RecycledMaterialsDashboard from './ChemicalsResources/RecycledMaterialsDashboard';
import BatteryMaterialsDashboard from './ChemicalsResources/BatteryMaterialsDashboard';

import ApparelShoesDashboard from './ConsumerGoodsFMCG/ApparelShoesDashboard';
import NonAlcoholicBeveragesDashboard from './ConsumerGoodsFMCG/NonAlcoholicBeveragesDashboard';
import CleaningProductsDashboard from './ConsumerGoodsFMCG/CleaningProductsDashboard';
import CosmeticsPersonalCareDashboard from './ConsumerGoodsFMCG/CosmeticsPersonalCareDashboard';
import FoodNutritionDashboard from './ConsumerGoodsFMCG/FoodNutritionDashboard';
import FurnitureHouseholdDashboard from './ConsumerGoodsFMCG/FurnitureHouseholdDashboard';
import GardenPatioDashboard from './ConsumerGoodsFMCG/GardenPatioDashboard';
import HomeImprovementDashboard from './ConsumerGoodsFMCG/HomeImprovementDashboard';
import PetSuppliesDashboard from './ConsumerGoodsFMCG/PetSuppliesDashboard';
import ToysDashboard from './ConsumerGoodsFMCG/ToysDashboard';
import SustainableConsumerGoodsDashboard from './ConsumerGoodsFMCG/SustainableConsumerGoodsDashboard';
import PackagedFoodsDashboard from './ConsumerGoodsFMCG/PackagedFoodsDashboard';

import EconomyDashboard from './EconomyPolitics/EconomyDashboard';
import InternationalTradeDashboard from './EconomyPolitics/InternationalTradeDashboard';
import PoliticsDashboard from './EconomyPolitics/PoliticsDashboard';
import PublicPolicyEconomicStrategyDashboard from './EconomyPolitics/PublicPolicyEconomicStrategyDashboard';
import GeopoliticalRiskTradeAnalysisDashboard from './EconomyPolitics/GeopoliticalRiskTradeAnalysisDashboard';

import ClimateDashboard from './EnergyEnvironment/ClimateDashboard';
import EmissionsDashboard from './EnergyEnvironment/EmissionsDashboard';
import EnergyDashboard from './EnergyEnvironment/EnergyDashboard';
import GreentechDashboard from './EnergyEnvironment/GreentechDashboard';
import WasteDashboard from './EnergyEnvironment/WasteDashboard';
import WaterDashboard from './EnergyEnvironment/WaterDashboard';
import RenewableEnergyInfrastructureDashboard from './EnergyEnvironment/RenewableEnergyInfrastructureDashboard';
import CarbonCaptureClimateTechDashboard from './EnergyEnvironment/CarbonCaptureClimateTechDashboard';

import FinancialInstitutionsDashboard from './FinanceInsurance/FinancialInstitutionsDashboard';
import InvestmentsDashboard from './FinanceInsurance/InvestmentsDashboard';
import FinancialServicesDashboard from './FinanceInsurance/FinancialServicesDashboard';
import InsuranceDashboard from './FinanceInsurance/InsuranceDashboard';
import FinancialTechnologyFintechDashboard from './FinanceInsurance/FinancialTechnologyFintechDashboard';
import DigitalPaymentsDashboard from './FinanceInsurance/DigitalPaymentsDashboard';
import WealthManagementDashboard from './FinanceInsurance/WealthManagementDashboard';

import CareSupportDashboard from './HealthPharma/CareSupportDashboard';
import HospitalsHealthProfessionalsDashboard from './HealthPharma/HospitalsHealthProfessionalsDashboard';
import HealthSystemDashboard from './HealthPharma/HealthSystemDashboard';
import MedicalTechnologyDashboard from './HealthPharma/MedicalTechnologyDashboard';
import PharmaceuticalProductsDashboard from './HealthPharma/PharmaceuticalProductsDashboard';
import StateOfHealthDashboard from './HealthPharma/StateOfHealthDashboard';
import BiotechnologyDashboard from './HealthPharma/BiotechnologyDashboard';
import DigitalHealthDashboard from './HealthPharma/DigitalHealthDashboard';
import MentalHealthServicesDashboard from './HealthPharma/MentalHealthServicesDashboard';
import PharmaDashboard from './HealthPharma/PharmaDashboard';
import HealthCareDashboard from './HealthPharma/HealthCareDashboard';

import CyberCrimeSecurityDashboard from './Internet/CyberCrimeSecurityDashboard';
import CommunicationsDashboard from './Internet/CommunicationsDashboard';
import InternetDemographicsDashboard from './Internet/InternetDemographicsDashboard';
import MobileInternetAppsDashboard from './Internet/MobileInternetAppsDashboard';
import OnlineSearchDashboard from './Internet/OnlineSearchDashboard';
import OnlineVideoEntertainmentDashboard from './Internet/OnlineVideoEntertainmentDashboard';
import ReachTrafficDashboard from './Internet/ReachTrafficDashboard';
import SocialMediaDashboard from './Internet/SocialMediaDashboard';
import AiPlatformsDashboard from './Internet/AiPlatformsDashboard';

import CelebritiesDashboard from './Life/CelebritiesDashboard';
import FamilyFriendsDashboard from './Life/FamilyFriendsDashboard';
import PersonalityBehaviorDashboard from './Life/PersonalityBehaviorDashboard';
import HolidaysDashboard from './Life/HolidaysDashboard';
import MentalHealthWellbeingDashboard from './Life/MentalHealthWellbeingDashboard';
import LongevityHumanPerformanceDashboard from './Life/LongevityHumanPerformanceDashboard';

import AudioDashboard from './Media/AudioDashboard';
import BooksPublishingDashboard from './Media/BooksPublishingDashboard';
import NewsDashboard from './Media/NewsDashboard';
import TVVideoFilmDashboard from './Media/TVVideoFilmDashboard';
import VideoGamingESportsDashboard from './Media/VideoGamingESportsDashboard';
import StreamingPlatformsDashboard from './Media/StreamingPlatformsDashboard';
import PodcastIndustryDashboard from './Media/PodcastIndustryDashboard';
import DigitalPublishingDashboard from './Media/DigitalPublishingDashboard';

import AerospaceDefenseDashboard from './MetalsElectronics/AerospaceDefenseDashboard';
import ElectronicsDashboard from './MetalsElectronics/ElectronicsDashboard';
import IndustrialMachineryDashboard from './MetalsElectronics/IndustrialMachineryDashboard';
import MetalsDashboard from './MetalsElectronics/MetalsDashboard';
import RollingStockDashboard from './MetalsElectronics/RollingStockDashboard';
import ShipbuildingDashboard from './MetalsElectronics/ShipbuildingDashboard';
import VehicleManufacturingDashboard from './MetalsElectronics/VehicleManufacturingDashboard';
import SemiconductorsDashboard from './MetalsElectronics/SemiconductorsDashboard';
import AdvancedRoboticsManufacturingDashboard from './MetalsElectronics/AdvancedRoboticsManufacturingDashboard';

import CommercialRealEstateDashboard from './RealEstate/CommercialRealEstateDashboard';
import IndustrialRealEstateDashboard from './RealEstate/IndustrialRealEstateDashboard';
import MortgagesFinancingDashboard from './RealEstate/MortgagesFinancingDashboard';
import PropertyServicesDashboard from './RealEstate/PropertyServicesDashboard';
import ResidentialRealEstateDashboard from './RealEstate/ResidentialRealEstateDashboard';
import PropTechDashboard from './RealEstate/PropTechDashboard';
import SmartCitiesDevelopmentDashboard from './RealEstate/SmartCitiesDevelopmentDashboard';

import DIYRetailDashboard from './RetailTrade/DIYRetailDashboard';
import FashionAccessoriesDashboard from './RetailTrade/FashionAccessoriesDashboard';
import FoodBeverageRetailDashboard from './RetailTrade/FoodBeverageRetailDashboard';
import FurnitureRetailDashboard from './RetailTrade/FurnitureRetailDashboard';
import GeneralMerchandiseDashboard from './RetailTrade/GeneralMerchandiseDashboard';
import HealthHygieneDashboard from './RetailTrade/HealthHygieneDashboard';
import OfficeSuppliesDashboard from './RetailTrade/OfficeSuppliesDashboard';
import PrivateLabelDashboard from './RetailTrade/PrivateLabelDashboard';
import RetailTechnologyDashboard from './RetailTrade/RetailTechnologyDashboard';
import ShoppingBehaviorDashboard from './RetailTrade/ShoppingBehaviorDashboard';
import SportsLeisureRetailDashboard from './RetailTrade/SportsLeisureRetailDashboard';
import SubscriptionsDirectSellingDashboard from './RetailTrade/SubscriptionsDirectSellingDashboard';
import SupplyChainDashboard from './RetailTrade/SupplyChainDashboard';
import WholesaleDashboard from './RetailTrade/WholesaleDashboard';
import EcommerceLogisticsFulfillmentDashboard from './RetailTrade/EcommerceLogisticsFulfillmentDashboard';
import OmnichannelRetailSystemsDashboard from './RetailTrade/OmnichannelRetailSystemsDashboard';

import BusinessServicesDashboard from './Services/BusinessServicesDashboard';
import SkilledLaborDashboard from './Services/SkilledLaborDashboard';
import DigitalTransformationConsultingDashboard from './Services/DigitalTransformationConsultingDashboard';
import BPODashboard from './Services/BPODashboard';

import CrimeLawEnforcementDashboard from './Society/CrimeLawEnforcementDashboard';
import DemographicsDashboard from './Society/DemographicsDashboard';
import EducationScienceDashboard from './Society/EducationScienceDashboard';
import GeographyNatureDashboard from './Society/GeographyNatureDashboard';
import HistoricalDataDashboard from './Society/HistoricalDataDashboard';
import ReligionDashboard from './Society/ReligionDashboard';
import UrbanDevelopmentPolicyDashboard from './Society/UrbanDevelopmentPolicyDashboard';
import PopulationAnalyticsDashboard from './Society/PopulationAnalyticsDashboard';

import ArtCultureDashboard from './SportsRecreation/ArtCultureDashboard';
import GamblingDashboard from './SportsRecreation/GamblingDashboard';
import HobbiesDashboard from './SportsRecreation/HobbiesDashboard';
import ParksOutdoorsDashboard from './SportsRecreation/ParksOutdoorsDashboard';
import ProfessionalSportsDashboard from './SportsRecreation/ProfessionalSportsDashboard';
import SportsFitnessDashboard from './SportsRecreation/SportsFitnessDashboard';
import WellnessSpasDashboard from './SportsRecreation/WellnessSpasDashboard';
import SportsAnalyticsPerformanceDashboard from './SportsRecreation/SportsAnalyticsPerformanceDashboard';
import EsportsGamingIndustryDashboard from './SportsRecreation/EsportsGamingIndustryDashboard';

import ConsumerElectronicsDashboard from './TechnologyTelecommunications/ConsumerElectronicsDashboard';
import HardwareDashboard from './TechnologyTelecommunications/HardwareDashboard';
import HouseholdAppliancesDashboard from './TechnologyTelecommunications/HouseholdAppliancesDashboard';
import ITServicesDashboard from './TechnologyTelecommunications/ITServicesDashboard';
import SoftwareDashboard from './TechnologyTelecommunications/SoftwareDashboard';
import TelecommunicationsDashboard from './TechnologyTelecommunications/TelecommunicationsDashboard';
import CloudServicesDashboard from './TechnologyTelecommunications/CloudServicesDashboard';
import ArtificialIntelligenceDashboard from './TechnologyTelecommunications/ArtificialIntelligenceDashboard';

import AviationDashboard from './TransportationLogistics/AviationDashboard';
import LogisticsDashboard from './TransportationLogistics/LogisticsDashboard';
import PublicTransportDashboard from './TransportationLogistics/PublicTransportDashboard';
import RailTransportDashboard from './TransportationLogistics/RailTransportDashboard';
import VehiclesRoadTrafficDashboard from './TransportationLogistics/VehiclesRoadTrafficDashboard';
import WaterTransportDashboard from './TransportationLogistics/WaterTransportDashboard';
import ElectricVehicleEvInfrastructureDashboard from './TransportationLogistics/ElectricVehicleEvInfrastructureDashboard';
import AutonomousVehiclesDashboard from './TransportationLogistics/AutonomousVehiclesDashboard';

import AccommodationDashboard from './TravelTourism/AccommodationDashboard';
import BusinessTravelDashboard from './TravelTourism/BusinessTravelDashboard';
import FoodDrinkServicesDashboard from './TravelTourism/FoodDrinkServicesDashboard';
import LeisureTravelDashboard from './TravelTourism/LeisureTravelDashboard';
import MedicalTourismDashboard from './TravelTourism/MedicalTourismDashboard';
import TravelTechnologyDashboard from './TravelTourism/TravelTechnologyDashboard';

import BuildingConstructionDashboard from './Construction/BuildingConstructionDashboard';
import HeavyConstructionDashboard from './Construction/HeavyConstructionDashboard';
import SmartConstructionBIMDashboard from './Construction/SmartConstructionBIMDashboard';
import ModularPrefabConstructionDashboard from './Construction/ModularPrefabConstructionDashboard';

import B2BEcommerceDashboard from './Ecommerce/B2BEcommerceDashboard';
import B2CEcommerceDashboard from './Ecommerce/B2CEcommerceDashboard';
import C2CEcommerceDashboard from './Ecommerce/C2CEcommerceDashboard';
import DigitalShoppingBehaviourDashboard from './Ecommerce/DigitalShoppingBehaviourDashboard';
import ECommerceKeyFiguresDashboard from './Ecommerce/EcommerceKeyFiguresDashboard';
import PaidContentDashboard from './Ecommerce/PaidContentDashboard';
import OnlineMarketplacesDashboard from './Ecommerce/OnlineMarketplacesDashboard';
import CrossBorderEcommerceDashboard from './Ecommerce/CrossBorderECommerceDashboard';
import SocialCommerceDashboard from './Ecommerce/SocialCommerceDashboard';

import { User, PlanSection } from '../types';

interface DashboardRouterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User;
  sections: PlanSection[];
  handleSectionUpdate: (id: string, updates: Partial<PlanSection>) => void;
  expandedSectionId: string | null;
  onSectionExpand: (id: string | null) => void;
  setSubTabLabel: (label: string | null) => void;
  subTabLabel?: string | null;
}

export const DashboardRouter: React.FC<DashboardRouterProps> = ({
  activeTab,
  setActiveTab,
  user,
  sections,
  handleSectionUpdate,
  expandedSectionId,
  onSectionExpand,
  setSubTabLabel,
  subTabLabel
}) => {
  const containerClass = ['home', 'editor', 'strategic-dashboard', 'contact-us', 'market-discovery', 'problem-engine'].includes(activeTab) || activeTab.endsWith('-dashboard') 
    ? 'w-full' 
    : 'max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 pb-20 lg:pb-10';

  const handleBuildPlan = (projectName?: string) => {
    setActiveTab('new-plan');
    // Logic to pre-fill the name could go here if needed
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
      case 'admin-dashboard':
        return <Home setActiveTab={setActiveTab} />;
      case 'profile':
        return <Profile user={user} />;
      case 'users-management':
        return <UsersManagement />;
      case 'admin-plans':
        return <AdminProjectsManagement />;
      case 'admin-analytics':
        return <AdminAnalyticsDashboard />;
      case 'admin-security':
        return <AdminSecurityDashboard />;
      case 'my-plans':
        return <MyProjects setActiveTab={setActiveTab} />;
      case 'new-plan':
        // Guard optional props to avoid runtime ReferenceError if not provided by the caller
        const subTabLabelSafe = typeof subTabLabel === 'string' ? subTabLabel : undefined;
        const setSubTabLabelSafe = typeof setSubTabLabel === 'function' ? setSubTabLabel : undefined;
        return (
          <NewPlan 
            key={`${activeTab}-${subTabLabel ? 'sub' : 'root'}`}
            onStart={(id) => id === 'easy' ? setActiveTab('strategic-dashboard') : setActiveTab('editor')} 
            onBuildPlan={() => setActiveTab('editor')}
            setSubTabLabel={setSubTabLabelSafe} 
            subTabLabel={subTabLabelSafe}
          />
        );
      case 'brand-identity':
        return <BrandIdentityStudio setActiveTab={setActiveTab} />;
      case 'unicorn-benchmark':
        return <UnicornBenchmarking />;
      case 'market-discovery':
        return <DiscoveryCenter setActiveTab={setActiveTab} />;
      case 'comparison':
        return <PlanComparison />;
      case 'pricing':
        return <PricingPlans />;
      case 'settings':
        return <Settings user={user} />;
      case 'tasks':
        return <Tasks />;
      case 'changelog':
        return <Changelog />;
      case 'export-templates':
        return <ExportTemplates />;
      case 'smart-analyzer':
        return <SmartAnalyzer />;
      case 'editor':
        return (
          <BusinessPlanEditor 
            sections={sections} 
            onSectionUpdate={handleSectionUpdate}
            expandedSectionId={expandedSectionId}
            onSectionExpand={onSectionExpand}
            setActiveTab={setActiveTab}
          />
        );
      case 'strategic-dashboard':
        return <ResultPage />;
      case 'notifications':
        return <Notifications />;
      case 'site-map':
        return <MobileSiteMap setActiveTab={setActiveTab} />;
      
      // Dashboards with navigation props
      case 'advertising-dashboard':
        return <AdvertisingDashboard sectorId="advertising-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'brands-leaders-dashboard':
        return <BrandsLeadersDashboard sectorId="brands-leaders-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'marketing-dashboard':
        return <MarketingDashboard sectorId="marketing-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'influencer-marketing-dashboard':
        return <InfluencerMarketingDashboard sectorId="influencer-marketing-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'farming-dashboard':
        return <FarmingDashboard sectorId="farming-dashboard" onBack={() => setActiveTab('discovery-center')} onBuildPlan={handleBuildPlan} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'fisheries-aquaculture-dashboard':
        return <FisheriesAquacultureDashboard sectorId="fisheries-aquaculture-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'forestry-dashboard':
        return <ForestryDashboard sectorId="forestry-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'agritech-dashboard':
        return <AgriculturalTechnologyAgritechDashboard sectorId="agritech-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'seeds-crop-protection-dashboard':
        return <SeedsCropProtectionDashboard sectorId="seeds-crop-protection-dashboard" onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;

      // Chemicals & Resources (Newly automated)
      case 'chemical-industry-dashboard': 
        return <ChemicalIndustryDashboard sectorId="chemical-industry-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'fossil-fuels-dashboard': 
        return <FossilFuelsDashboard sectorId="fossil-fuels-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'mining-dashboard': 
        return <MiningDashboard sectorId="mining-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'petroleum-refinery-dashboard': 
        return <PetroleumRefineryDashboard sectorId="petroleum-refinery-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'plastic-rubber-dashboard': 
        return <PlasticRubberDashboard sectorId="plastic-rubber-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'pulp-paper-dashboard': 
        return <PulpPaperDashboard sectorId="pulp-paper-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الكيمياء والموارد" />;
      case 'building-construction-dashboard': 
        return <BuildingConstructionDashboard sectorId="building-construction-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'heavy-construction-dashboard': 
        return <HeavyConstructionDashboard sectorId="heavy-construction-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'smart-construction-bim-dashboard': 
        return <SmartConstructionBIMDashboard sectorId="smart-construction-bim-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'modular-prefab-construction-dashboard': 
        return <ModularPrefabConstructionDashboard sectorId="modular-prefab-construction-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      // FMCG - Consumer Goods & FMCG
      case 'apparel-shoes-dashboard': 
        return <ApparelShoesDashboard sectorId="apparel-shoes-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'cleaning-products-dashboard': 
        return <CleaningProductsDashboard sectorId="cleaning-products-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'cosmetics-personal-care-dashboard': 
        return <CosmeticsPersonalCareDashboard sectorId="cosmetics-personal-care-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'food-nutrition-dashboard': 
        return <FoodNutritionDashboard sectorId="food-nutrition-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'furniture-household-dashboard': 
        return <FurnitureHouseholdDashboard sectorId="furniture-household-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'garden-patio-dashboard': 
        return <GardenPatioDashboard sectorId="garden-patio-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'home-improvement-dashboard': 
        return <HomeImprovementDashboard sectorId="home-improvement-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'non-alcoholic-beverages-dashboard': 
        return <NonAlcoholicBeveragesDashboard sectorId="non-alcoholic-beverages-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'pet-supplies-dashboard': 
        return <PetSuppliesDashboard sectorId="pet-supplies-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'toys-dashboard': 
        return <ToysDashboard sectorId="toys-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;
      case 'packaged-foods-dashboard': 
        return <PackagedFoodsDashboard sectorId="packaged-foods-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية (FMCG)" />;

      // Finance & Insurance
      case 'financial-institutions-dashboard': 
        return <FinancialInstitutionsDashboard sectorId="financial-institutions-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المال والتأمين" />;
      case 'investments-dashboard': 
        return <InvestmentsDashboard sectorId="investments-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المال والتأمين" />;
      case 'financial-services-dashboard': 
        return <FinancialServicesDashboard sectorId="financial-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المال والتأمين" />;
      case 'insurance-dashboard': 
        return <InsuranceDashboard sectorId="insurance-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المال والتأمين" />;
      // Health, Pharma & Medtech
      case 'care-support-dashboard': 
        return <CareSupportDashboard sectorId="care-support-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      case 'hospitals-health-professionals-dashboard': 
        return <HospitalsHealthProfessionalsDashboard sectorId="hospitals-health-professionals-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      case 'health-system-dashboard': 
        return <HealthSystemDashboard sectorId="health-system-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      case 'medical-technology-dashboard': 
        return <MedicalTechnologyDashboard sectorId="medical-technology-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      case 'pharma-market-dashboard': 
        return <PharmaceuticalProductsDashboard sectorId="pharma-market-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      case 'state-of-health-dashboard': 
        return <StateOfHealthDashboard sectorId="state-of-health-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الصحة والأدوية" />;
      // Internet
      case 'communications-dashboard': 
        return <CommunicationsDashboard sectorId="communications-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'cyber-crime-security-dashboard': 
        return <CyberCrimeSecurityDashboard sectorId="cyber-crime-security-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'internet-demographics-dashboard': 
        return <InternetDemographicsDashboard sectorId="internet-demographics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'mobile-internet-apps-dashboard': 
        return <MobileInternetAppsDashboard sectorId="mobile-internet-apps-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'online-search-dashboard': 
        return <OnlineSearchDashboard sectorId="online-search-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'online-video-entertainment-dashboard': 
        return <OnlineVideoEntertainmentDashboard sectorId="online-video-entertainment-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'reach-traffic-dashboard': 
        return <ReachTrafficDashboard sectorId="reach-traffic-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'social-media-dashboard': 
        return <SocialMediaDashboard sectorId="social-media-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      // Life
      case 'celebrities-dashboard': 
        return <CelebritiesDashboard sectorId="celebrities-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'family-friends-dashboard': 
        return <FamilyFriendsDashboard sectorId="family-friends-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'personality-behavior-dashboard': 
        return <PersonalityBehaviorDashboard sectorId="personality-behavior-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'holidays-dashboard': 
        return <HolidaysDashboard sectorId="holidays-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'mental-health-wellbeing-economy-dashboard': 
        return <MentalHealthWellbeingDashboard sectorId="mental-health-wellbeing-economy-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'longevity-human-performance-dashboard': 
        return <LongevityHumanPerformanceDashboard sectorId="longevity-human-performance-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      // Media
      case 'audio-dashboard': 
        return <AudioDashboard sectorId="audio-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإعلام والترفيه" />;
      case 'books-publishing-dashboard': 
        return <BooksPublishingDashboard sectorId="books-publishing-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإعلام والترفيه" />;
      case 'news-dashboard': 
        return <NewsDashboard sectorId="news-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإعلام والترفيه" />;
      case 'tv-video-film-dashboard': 
        return <TVVideoFilmDashboard sectorId="tv-video-film-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإعلام والترفيه" />;
      case 'video-gaming-esports-dashboard': 
        return <VideoGamingESportsDashboard sectorId="video-gaming-esports-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الإعلام والترفيه" />;
      // Metals & Electronics
      case 'aerospace-defense-dashboard': 
        return <AerospaceDefenseDashboard sectorId="aerospace-defense-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'electronics-dashboard': 
        return <ElectronicsDashboard sectorId="electronics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'industrial-machinery-dashboard': 
        return <IndustrialMachineryDashboard sectorId="industrial-machinery-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'metals-dashboard': 
        return <MetalsDashboard sectorId="metals-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'rolling-stock-dashboard': 
        return <RollingStockDashboard sectorId="rolling-stock-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'shipbuilding-dashboard': 
        return <ShipbuildingDashboard sectorId="shipbuilding-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'vehicle-manufacturing-dashboard': 
        return <VehicleManufacturingDashboard sectorId="vehicle-manufacturing-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'semiconductors-dashboard': 
        return <SemiconductorsDashboard sectorId="semiconductors-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'advanced-robotics-manufacturing-dashboard': 
        return <AdvancedRoboticsManufacturingDashboard sectorId="advanced-robotics-manufacturing-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      // Real Estate
      case 'commercial-real-estate-dashboard': 
        return <CommercialRealEstateDashboard sectorId="commercial-real-estate-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'industrial-real-estate-dashboard': 
        return <IndustrialRealEstateDashboard sectorId="industrial-real-estate-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'mortgages-financing-dashboard': 
        return <MortgagesFinancingDashboard sectorId="mortgages-financing-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'property-services-dashboard': 
        return <PropertyServicesDashboard sectorId="property-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'residential-real-estate-dashboard': 
        return <ResidentialRealEstateDashboard sectorId="residential-real-estate-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'proptech-dashboard': 
        return <PropTechDashboard sectorId="proptech-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'smart-cities-development-dashboard': 
        return <SmartCitiesDevelopmentDashboard sectorId="smart-cities-development-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      // Retail & Trade
      case 'diy-retail-dashboard': 
        return <DIYRetailDashboard sectorId="diy-retail-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'fashion-accessories-dashboard': 
        return <FashionAccessoriesDashboard sectorId="fashion-accessories-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'food-beverage-retail-dashboard': 
        return <FoodBeverageRetailDashboard sectorId="food-beverage-retail-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'furniture-retail-dashboard': 
        return <FurnitureRetailDashboard sectorId="furniture-retail-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'general-merchandise-dashboard': 
        return <GeneralMerchandiseDashboard sectorId="general-merchandise-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'health-hygiene-dashboard': 
        return <HealthHygieneDashboard sectorId="health-hygiene-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'international-trade-dashboard': 
        return <InternationalTradeDashboard sectorId="international-trade-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'office-supplies-dashboard': 
        return <OfficeSuppliesDashboard sectorId="office-supplies-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'private-label-dashboard': 
        return <PrivateLabelDashboard sectorId="private-label-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'retail-technology-dashboard': 
        return <RetailTechnologyDashboard sectorId="retail-technology-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'shopping-behavior-dashboard': 
        return <ShoppingBehaviorDashboard sectorId="shopping-behavior-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'sports-leisure-retail-dashboard': 
        return <SportsLeisureRetailDashboard sectorId="sports-leisure-retail-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'subscriptions-direct-selling-dashboard': 
        return <SubscriptionsDirectSellingDashboard sectorId="subscriptions-direct-selling-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'supply-chain-dashboard': 
        return <SupplyChainDashboard sectorId="supply-chain-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'wholesale-dashboard': 
        return <WholesaleDashboard sectorId="wholesale-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'ecommerce-logistics-fulfillment-dashboard': 
        return <EcommerceLogisticsFulfillmentDashboard sectorId="ecommerce-logistics-fulfillment-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'omnichannel-retail-systems-dashboard': 
        return <OmnichannelRetailSystemsDashboard sectorId="omnichannel-retail-systems-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      // Services
      case 'business-services-dashboard': 
        return <BusinessServicesDashboard sectorId="business-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'skilled-labor-dashboard': 
        return <SkilledLaborDashboard sectorId="skilled-labor-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'digital-transformation-consulting-dashboard': 
        return <DigitalTransformationConsultingDashboard sectorId="digital-transformation-consulting-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'bpo-dashboard': 
        return <BPODashboard sectorId="bpo-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      // Society
      case 'crime-law-enforcement-dashboard': 
        return <CrimeLawEnforcementDashboard sectorId="crime-law-enforcement-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'demographics-dashboard': 
        return <DemographicsDashboard sectorId="demographics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'education-science-dashboard': 
        return <EducationScienceDashboard sectorId="education-science-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'geography-nature-dashboard': 
        return <GeographyNatureDashboard sectorId="geography-nature-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'historical-data-dashboard': 
        return <HistoricalDataDashboard sectorId="historical-data-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'religion-dashboard': 
        return <ReligionDashboard sectorId="religion-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'urban-development-smart-cities-policy-dashboard': 
        return <UrbanDevelopmentPolicyDashboard sectorId="urban-development-smart-cities-policy-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'population-analytics-demographic-intelligence-dashboard': 
        return <PopulationAnalyticsDashboard sectorId="population-analytics-demographic-intelligence-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'art-culture-dashboard': 
        return <ArtCultureDashboard sectorId="art-culture-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'gambling-dashboard': 
        return <GamblingDashboard sectorId="gambling-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'hobbies-dashboard': 
        return <HobbiesDashboard sectorId="hobbies-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'parks-outdoors-dashboard': 
        return <ParksOutdoorsDashboard sectorId="parks-outdoors-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'professional-sports-dashboard': 
        return <ProfessionalSportsDashboard sectorId="professional-sports-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'sports-fitness-dashboard': 
        return <SportsFitnessDashboard sectorId="sports-fitness-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'wellness-spas-dashboard': 
        return <WellnessSpasDashboard sectorId="wellness-spas-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'sports-analytics-performance-tech-dashboard': 
        return <SportsAnalyticsPerformanceDashboard sectorId="sports-analytics-performance-tech-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'esports-gaming-industry-dashboard': 
        return <EsportsGamingIndustryDashboard sectorId="esports-gaming-industry-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      // Technology & Telecommunications
      case 'consumer-electronics-dashboard': 
        return <ConsumerElectronicsDashboard sectorId="consumer-electronics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'hardware-dashboard': 
        return <HardwareDashboard sectorId="hardware-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'household-appliances-dashboard': 
        return <HouseholdAppliancesDashboard sectorId="household-appliances-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'it-services-dashboard': 
        return <ITServicesDashboard sectorId="it-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'software-dashboard': 
        return <SoftwareDashboard sectorId="software-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'telecommunications-dashboard': 
        return <TelecommunicationsDashboard sectorId="telecommunications-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'artificial-intelligence-dashboard': 
        return <ArtificialIntelligenceDashboard sectorId="artificial-intelligence-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'cloud-services-dashboard': 
        return <CloudServicesDashboard sectorId="cloud-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'api-governance-infrastructure-dashboard': return <PublicPolicyEconomicStrategyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'geopolitical-risk-analysis-dashboard': return <GeopoliticalRiskTradeAnalysisDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'renewable-energy-integration-dashboard': return <RenewableEnergyInfrastructureDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'carbon-neutrality-tech-dashboard': return <CarbonCaptureClimateTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'mental-wellness-wellbeing-dashboard': return <MentalHealthWellbeingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'longevity-biotech-performance-dashboard': return <LongevityHumanPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'semiconductor-foundary-dashboard': return <SemiconductorsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'industrial-iot-automation-dashboard': return <AdvancedRoboticsManufacturingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      
      // Additional dashboards from late imports
      // E-Commerce
      case 'b2b-ecommerce-dashboard': 
        return <B2BEcommerceDashboard sectorId="b2b-ecommerce-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'b2c-ecommerce-dashboard': 
        return <B2CEcommerceDashboard sectorId="b2c-ecommerce-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'c2c-ecommerce-dashboard': 
        return <C2CEcommerceDashboard sectorId="c2c-ecommerce-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'digital-shopping-behaviour-dashboard': 
        return <DigitalShoppingBehaviourDashboard sectorId="digital-shopping-behaviour-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'ecommerce-key-figures-dashboard': 
        return <ECommerceKeyFiguresDashboard sectorId="ecommerce-key-figures-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'paid-content-dashboard': 
        return <PaidContentDashboard sectorId="paid-content-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="التجارة الإلكترونية" />;
      case 'seo-content-marketing': return <SearchEngineOptimizationContentMarketingDashboard />;
      case 'agritech-dashboard': return <AgriculturalTechnologyAgritechDashboard />;
      case 'smart-farming': return <SmartFarmingDashboard />;
      case 'seeds-crop-protection': return <SeedsCropProtectionDashboard onBuildPlan={handleBuildPlan} />;
      case 'recycled-materials': return <RecycledMaterialsDashboard />;
      case 'battery-materials': return <BatteryMaterialsDashboard />;
      case 'sustainable-consumer-goods': return <SustainableConsumerGoodsDashboard />;
      case 'packaged-foods': return <PackagedFoodsDashboard />;
      case 'online-marketplaces': return <OnlineMarketplacesDashboard />;
      case 'cross-border-ecommerce': return <CrossBorderEcommerceDashboard />;
      case 'social-commerce': return <SocialCommerceDashboard />;
      case 'fintech': return <FinancialTechnologyFintechDashboard />;
      case 'digital-payments': return <DigitalPaymentsDashboard />;
      case 'wealth-management': return <WealthManagementDashboard />;
      case 'biotechnology': return <BiotechnologyDashboard />;
      case 'digital-health': return <DigitalHealthDashboard />;
      case 'mental-health-services': return <MentalHealthServicesDashboard />;
      case 'ai-platforms': return <AiPlatformsDashboard />;
      case 'problem-engine': return <ProblemOpportunityEngine />;
      case 'cloud-services-internet': return <CloudServicesDashboard />;
      case 'streaming-platforms': return <StreamingPlatformsDashboard />;
      case 'podcast-industry': return <PodcastIndustryDashboard />;
      case 'digital-publishing': return <DigitalPublishingDashboard />;
      case 'artificial-intelligence-new': return <ArtificialIntelligenceDashboard />;
      // Transportation & Logistics
      case 'aviation-dashboard': 
        return <AviationDashboard sectorId="aviation-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'logistics-dashboard': 
        return <LogisticsDashboard sectorId="logistics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'public-transport-dashboard': 
        return <PublicTransportDashboard sectorId="public-transport-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'rail-transport-dashboard': 
        return <RailTransportDashboard sectorId="rail-transport-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'vehicles-road-traffic-dashboard': 
        return <VehiclesRoadTrafficDashboard sectorId="vehicles-road-traffic-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'water-transport-dashboard': 
        return <WaterTransportDashboard sectorId="water-transport-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'autonomous-vehicles-dashboard': 
        return <AutonomousVehiclesDashboard sectorId="autonomous-vehicles-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'ev-infrastructure-dashboard': 
        return <ElectricVehicleEvInfrastructureDashboard sectorId="ev-infrastructure-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      // Travel, Tourism & Hospitality
      case 'accommodation-dashboard': 
        return <AccommodationDashboard sectorId="accommodation-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'business-travel-dashboard': 
        return <BusinessTravelDashboard sectorId="business-travel-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'food-drink-services-dashboard': 
        return <FoodDrinkServicesDashboard sectorId="food-drink-services-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'leisure-travel-dashboard': 
        return <LeisureTravelDashboard sectorId="leisure-travel-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'medical-tourism-dashboard': 
        return <MedicalTourismDashboard sectorId="medical-tourism-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'travel-technology-dashboard': 
        return <TravelTechnologyDashboard sectorId="travel-technology-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'non-alcoholic-beverages-dashboard': return <NonAlcoholicBeveragesDashboard />;
      // Economy & Politics
      case 'economy-dashboard': 
        return <EconomyDashboard sectorId="economy-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'international-trade-dashboard': 
        return <InternationalTradeDashboard sectorId="international-trade-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'politics-dashboard': 
        return <PoliticsDashboard sectorId="politics-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      // Energy & Environment
      case 'climate-dashboard': 
        return <ClimateDashboard sectorId="climate-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'emissions-dashboard': 
        return <EmissionsDashboard sectorId="emissions-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'energy-dashboard': 
        return <EnergyDashboard sectorId="energy-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'greentech-dashboard': 
        return <GreentechDashboard sectorId="greentech-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'waste-dashboard': 
        return <WasteDashboard sectorId="waste-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'water-dashboard': 
        return <WaterDashboard sectorId="water-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'pharma-dashboard': return <PharmaDashboard />;
      case 'healthcare-dashboard': return <HealthCareDashboard />;

      // New ones added by scripts

      case 'renewable-energy-infrastructure-dashboard': 
        return <RenewableEnergyInfrastructureDashboard sectorId="renewable-energy-infrastructure-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'carbon-capture-climate-tech-dashboard': 
        return <CarbonCaptureClimateTechDashboard sectorId="carbon-capture-climate-tech-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'public-policy-economic-strategy-dashboard': 
        return <PublicPolicyEconomicStrategyDashboard sectorId="public-policy-economic-strategy-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'geopolitical-risk-global-trade-analysis-dashboard': 
        return <GeopoliticalRiskTradeAnalysisDashboard sectorId="geopolitical-risk-global-trade-analysis-dashboard" onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'modular-prefab-construction-dashboard': return <ModularPrefabConstructionDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'seeds-crop-protection-dashboard': return <SeedsCropProtectionDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'c2c-ecommerce-dashboard': return <C2CEcommerceDashboard onBack={() => setActiveTab('market-discovery')} onBuildPlan={handleBuildPlan} parentCategory="التجارة الإلكترونية" />;

      default:
        return null;
    }
  };

  return (
    <div className={containerClass}>
      <div className="animate-in slide-in-from-bottom-4 duration-700">
        {renderContent()}
      </div>
    </div>
  );
};
