
import React from 'react';
import { Home } from './Home';
import { DiscoveryCenter } from './DiscoveryCenter';
import { MyProjects } from './MyProjects';
import { NewPlan } from './NewPlan';
import { PlanComparison } from './PlanComparison';
import { UnicornBenchmarking } from './UnicornBenchmarking';
import { BrandIdentityStudio } from './BrandIdentityStudio';
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
import AlcoholicBeveragesDashboard from './ConsumerGoodsFMCG/AlcoholicBeveragesDashboard';
import CannabisDashboard from './ConsumerGoodsFMCG/CannabisDashboard';
import TobaccoDashboard from './ConsumerGoodsFMCG/TobaccoDashboard';
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

import ClimateWeatherDashboard from './EnergyEnvironment/ClimateWeatherDashboard';
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
import LoveSexDashboard from './Life/LoveSexDashboard';
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
}

export const DashboardRouter: React.FC<DashboardRouterProps> = ({
  activeTab,
  setActiveTab,
  user,
  sections,
  handleSectionUpdate,
  expandedSectionId,
  onSectionExpand
}) => {
  const containerClass = ['editor', 'strategic-dashboard', 'contact-us', 'market-discovery'].includes(activeTab) || activeTab.endsWith('-dashboard') 
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
        return <MyProjects />;
      case 'new-plan':
        return <NewPlan onStart={(id) => id === 'easy' ? setActiveTab('strategic-dashboard') : setActiveTab('editor')} />;
      case 'brand-identity':
        return <BrandIdentityStudio />;
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
          />
        );
      case 'strategic-dashboard':
        return <ResultPage />;
      case 'notifications':
        return <Notifications />;
      
      // Dashboards with navigation props
      case 'advertising-dashboard':
        return <AdvertisingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="استكشاف السوق" />;
      case 'brands-leaders-dashboard':
        return <BrandsLeadersDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'marketing-dashboard':
        return <MarketingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'influencer-marketing-dashboard':
        return <InfluencerMarketingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />;
      case 'farming-dashboard':
        return <FarmingDashboard onBack={() => setActiveTab('discovery-center')} onBuildPlan={handleBuildPlan} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'fisheries-aquaculture-dashboard':
        return <FisheriesAquacultureDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;
      case 'forestry-dashboard':
        return <ForestryDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />;
      
      // Auto-generated dashboards (mostly no specific props)
      case 'chemical-industry-dashboard': return <ChemicalIndustryDashboard />;
      case 'fossil-fuels-dashboard': return <FossilFuelsDashboard />;
      case 'mining-dashboard': return <MiningDashboard />;
      case 'pulp-paper-dashboard': return <PulpPaperDashboard />;
      case 'plastic-rubber-dashboard': return <PlasticRubberDashboard />;
      case 'petroleum-refinery-dashboard': return <PetroleumRefineryDashboard />;
      case 'apparel-shoes-dashboard': return <ApparelShoesDashboard />;
      case 'building-construction-dashboard': return <BuildingConstructionDashboard />;
      case 'heavy-construction-dashboard': return <HeavyConstructionDashboard />;
      case 'cleaning-products-dashboard': return <CleaningProductsDashboard />;
      case 'cosmetics-personal-care-dashboard': return <CosmeticsPersonalCareDashboard />;
      case 'food-nutrition-dashboard': return <FoodNutritionDashboard />;
      case 'furniture-household-dashboard': return <FurnitureHouseholdDashboard />;
      case 'garden-patio-dashboard': return <GardenPatioDashboard />;
      case 'home-improvement-dashboard': return <HomeImprovementDashboard />;
      case 'pet-supplies-dashboard': return <PetSuppliesDashboard />;
      case 'toys-dashboard': return <ToysDashboard />;
      case 'financial-services-dashboard': return <FinancialServicesDashboard />;
      case 'investments-dashboard': return <InvestmentsDashboard />;
      case 'financial-institutions-dashboard': return <FinancialInstitutionsDashboard />;
      case 'insurance-dashboard': return <InsuranceDashboard />;
      case 'care-support-dashboard': return <CareSupportDashboard />;
      case 'hospitals-health-professionals-dashboard': return <HospitalsHealthProfessionalsDashboard />;
      case 'health-system-dashboard': return <HealthSystemDashboard />;
      case 'medical-technology-dashboard': return <MedicalTechnologyDashboard />;
      case 'pharma-market-dashboard': return <PharmaceuticalProductsDashboard />;
      case 'state-of-health-dashboard': return <StateOfHealthDashboard />;
      case 'communications-dashboard': return <CommunicationsDashboard />;
      case 'cyber-crime-security-dashboard': return <CyberCrimeSecurityDashboard />;
      case 'internet-demographics-dashboard': return <InternetDemographicsDashboard />;
      case 'mobile-internet-apps-dashboard': return <MobileInternetAppsDashboard />;
      case 'online-search-dashboard': return <OnlineSearchDashboard />;
      case 'online-video-entertainment-dashboard': return <OnlineVideoEntertainmentDashboard />;
      case 'reach-traffic-dashboard': return <ReachTrafficDashboard />;
      case 'social-media-dashboard': return <SocialMediaDashboard />;
      case 'celebrities-dashboard': return <CelebritiesDashboard />;
      case 'family-friends-dashboard': return <FamilyFriendsDashboard />;
      case 'personality-behavior-dashboard': return <PersonalityBehaviorDashboard />;
      case 'holidays-dashboard': return <HolidaysDashboard />;
      case 'audio-dashboard': return <AudioDashboard />;
      case 'books-publishing-dashboard': return <BooksPublishingDashboard />;
      case 'news-dashboard': return <NewsDashboard />;
      case 'tv-video-film-dashboard': return <TVVideoFilmDashboard />;
      case 'video-gaming-esports-dashboard': return <VideoGamingESportsDashboard />;
      case 'aerospace-defense-dashboard': return <AerospaceDefenseDashboard />;
      case 'electronics-dashboard': return <ElectronicsDashboard />;
      case 'industrial-machinery-dashboard': return <IndustrialMachineryDashboard />;
      case 'metals-dashboard': return <MetalsDashboard />;
      case 'rolling-stock-dashboard': return <RollingStockDashboard />;
      case 'shipbuilding-dashboard': return <ShipbuildingDashboard />;
      case 'vehicle-manufacturing-dashboard': return <VehicleManufacturingDashboard />;
      case 'commercial-real-estate-dashboard': return <CommercialRealEstateDashboard />;
      case 'industrial-real-estate-dashboard': return <IndustrialRealEstateDashboard />;
      case 'mortgages-financing-dashboard': return <MortgagesFinancingDashboard />;
      case 'property-services-dashboard': return <PropertyServicesDashboard />;
      case 'residential-real-estate-dashboard': return <ResidentialRealEstateDashboard />;
      case 'diy-retail-dashboard': return <DIYRetailDashboard />;
      case 'fashion-accessories-dashboard': return <FashionAccessoriesDashboard />;
      case 'food-beverage-retail-dashboard': return <FoodBeverageRetailDashboard />;
      case 'furniture-retail-dashboard': return <FurnitureRetailDashboard />;
      case 'general-merchandise-dashboard': return <GeneralMerchandiseDashboard />;
      case 'health-hygiene-dashboard': return <HealthHygieneDashboard />;
      case 'office-supplies-dashboard': return <OfficeSuppliesDashboard />;
      case 'private-label-dashboard': return <PrivateLabelDashboard />;
      case 'retail-technology-dashboard': return <RetailTechnologyDashboard />;
      case 'shopping-behavior-dashboard': return <ShoppingBehaviorDashboard />;
      case 'sports-leisure-retail-dashboard': return <SportsLeisureRetailDashboard />;
      case 'subscriptions-direct-selling-dashboard': return <SubscriptionsDirectSellingDashboard />;
      case 'supply-chain-dashboard': return <SupplyChainDashboard />;
      case 'wholesale-dashboard': return <WholesaleDashboard />;
      case 'business-services-dashboard': return <BusinessServicesDashboard />;
      case 'skilled-labor-dashboard': return <SkilledLaborDashboard />;
      case 'crime-law-enforcement-dashboard': return <CrimeLawEnforcementDashboard />;
      case 'demographics-dashboard': return <DemographicsDashboard />;
      case 'education-science-dashboard': return <EducationScienceDashboard />;
      case 'geography-nature-dashboard': return <GeographyNatureDashboard />;
      case 'historical-data-dashboard': return <HistoricalDataDashboard />;
      case 'art-culture-dashboard': return <ArtCultureDashboard />;
      case 'gambling-dashboard': return <GamblingDashboard />;
      case 'hobbies-dashboard': return <HobbiesDashboard />;
      case 'parks-outdoors-dashboard': return <ParksOutdoorsDashboard />;
      case 'professional-sports-dashboard': return <ProfessionalSportsDashboard />;
      case 'sports-fitness-dashboard': return <SportsFitnessDashboard />;
      case 'wellness-spas-dashboard': return <WellnessSpasDashboard />;
      case 'consumer-electronics-dashboard': return <ConsumerElectronicsDashboard />;
      case 'hardware-dashboard': return <HardwareDashboard />;
      case 'household-appliances-dashboard': return <HouseholdAppliancesDashboard />;
      case 'it-services-dashboard': return <ITServicesDashboard />;
      case 'software-dashboard': return <SoftwareDashboard />;
      case 'telecommunications-dashboard': return <TelecommunicationsDashboard />;
      case 'smart-construction-bim-dashboard': return <SmartConstructionBIMDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'modular-prefab-construction-dashboard': return <ModularPrefabConstructionDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />;
      case 'api-governance-infrastructure-dashboard': return <PublicPolicyEconomicStrategyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'geopolitical-risk-analysis-dashboard': return <GeopoliticalRiskTradeAnalysisDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'renewable-energy-integration-dashboard': return <RenewableEnergyInfrastructureDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'carbon-neutrality-tech-dashboard': return <CarbonCaptureClimateTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'mental-wellness-wellbeing-dashboard': return <MentalHealthWellbeingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'longevity-biotech-performance-dashboard': return <LongevityHumanPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'semiconductor-foundary-dashboard': return <SemiconductorsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'industrial-iot-automation-dashboard': return <AdvancedRoboticsManufacturingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'proptech-ai-optimization-dashboard': return <PropTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'smart-urbanization-policy-dashboard': return <SmartCitiesDevelopmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'last-mile-logistics-optimization-dashboard': return <EcommerceLogisticsFulfillmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'omnichannel-retail-automation-dashboard': return <OmnichannelRetailSystemsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'digital-transformation-advisory-dashboard': return <DigitalTransformationConsultingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'back-office-outsourcing-dashboard': return <BPODashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'urban-policy-development-dashboard': return <UrbanDevelopmentPolicyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'demographic-intelligence-analytics-dashboard': return <PopulationAnalyticsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'performance-analytics-sports-tech-dashboard': return <SportsAnalyticsPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'immersive-gaming-industry-dashboard': return <EsportsGamingIndustryDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      
      // Additional dashboards from late imports
      case 'b2b-ecommerce-dashboard': return <B2BEcommerceDashboard />;
      case 'b2c-ecommerce-dashboard': return <B2CEcommerceDashboard />;
      case 'c2c-ecommerce-dashboard': return <C2CEcommerceDashboard />;
      case 'digital-shopping-behaviour-dashboard': return <DigitalShoppingBehaviourDashboard />;
      case 'ecommerce-key-figures-dashboard': return <ECommerceKeyFiguresDashboard />;
      case 'paid-content-dashboard': return <PaidContentDashboard />;
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
      case 'cloud-services-internet': return <CloudServicesDashboard />;
      case 'streaming-platforms': return <StreamingPlatformsDashboard />;
      case 'podcast-industry': return <PodcastIndustryDashboard />;
      case 'digital-publishing': return <DigitalPublishingDashboard />;
      case 'artificial-intelligence-new': return <ArtificialIntelligenceDashboard />;
      case 'ev-infrastructure': return <ElectricVehicleEvInfrastructureDashboard />;
      case 'autonomous-vehicles': return <AutonomousVehiclesDashboard />;
      case 'medical-tourism': return <MedicalTourismDashboard />;
      case 'travel-tech': return <TravelTechnologyDashboard />;
      case 'non-alcoholic-beverages-dashboard': return <NonAlcoholicBeveragesDashboard />;
      case 'economy-dashboard': return <EconomyDashboard />;
      case 'international-trade-dashboard': return <InternationalTradeDashboard />;
      case 'politics-dashboard': return <PoliticsDashboard />;
      case 'climate-weather-dashboard': return <ClimateWeatherDashboard />;
      case 'emissions-dashboard': return <EmissionsDashboard />;
      case 'energy-dashboard': return <EnergyDashboard />;
      case 'greentech-dashboard': return <GreentechDashboard />;
      case 'waste-dashboard': return <WasteDashboard />;
      case 'water-dashboard': return <WaterDashboard />;
      case 'financial-institutions-dashboard': return <FinancialInstitutionsDashboard />;
      case 'investments-dashboard': return <InvestmentsDashboard />;
      case 'pharma-dashboard': return <PharmaDashboard />;
      case 'healthcare-dashboard': return <HealthCareDashboard />;

      // New ones added by scripts
      case 'aviation-dashboard': return <AviationDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'logistics-dashboard': return <LogisticsDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'public-transport-dashboard': return <PublicTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'rail-transport-dashboard': return <RailTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'vehicles-road-traffic-dashboard': return <VehiclesRoadTrafficDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'water-transport-dashboard': return <WaterTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />;
      case 'accommodation-dashboard': return <AccommodationDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />;
      case 'business-travel-dashboard': return <BusinessTravelDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />;
      case 'food-drink-services-dashboard': return <FoodDrinkServicesDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />;
      case 'leisure-travel-dashboard': return <LeisureTravelDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />;

      // Missing routes from DiscoveryCenter update
      case 'alcoholic-beverages-dashboard': return <AlcoholicBeveragesDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية" />;
      case 'cannabis-dashboard': return <CannabisDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية" />;
      case 'tobacco-dashboard': return <TobaccoDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="السلع الاستهلاكية" />;
      case 'love-sex-dashboard': return <LoveSexDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'mental-health-wellbeing-economy-dashboard': return <MentalHealthWellbeingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'longevity-human-performance-dashboard': return <LongevityHumanPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />;
      case 'hobbies-dashboard': return <HobbiesDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'parks-outdoors-dashboard': return <ParksOutdoorsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'sports-analytics-performance-tech-dashboard': return <SportsAnalyticsPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'esports-gaming-industry-dashboard': return <EsportsGamingIndustryDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />;
      case 'household-appliances-dashboard': return <HouseholdAppliancesDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'artificial-intelligence-dashboard': return <ArtificialIntelligenceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'cloud-services-dashboard': return <CloudServicesDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التكنولوجيا والاتصالات" />;
      case 'autonomous-vehicles-dashboard': return <AutonomousVehiclesDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'ev-infrastructure-dashboard': return <ElectricVehicleEvInfrastructureDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="النقل واللوجستيات" />;
      case 'medical-tourism-dashboard': return <MedicalTourismDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'travel-technology-dashboard': return <TravelTechnologyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="السياحة والضيافة" />;
      case 'semiconductors-dashboard': return <SemiconductorsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'advanced-robotics-manufacturing-dashboard': return <AdvancedRoboticsManufacturingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />;
      case 'proptech-dashboard': return <PropTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'smart-cities-development-dashboard': return <SmartCitiesDevelopmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />;
      case 'ecommerce-logistics-fulfillment-dashboard': return <EcommerceLogisticsFulfillmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'omnichannel-retail-systems-dashboard': return <OmnichannelRetailSystemsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />;
      case 'digital-transformation-consulting-dashboard': return <DigitalTransformationConsultingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'bpo-dashboard': return <BPODashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'urban-development-smart-cities-policy-dashboard': return <UrbanDevelopmentPolicyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'population-analytics-demographic-intelligence-dashboard': return <PopulationAnalyticsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />;
      case 'online-video-entertainment-dashboard': return <OnlineVideoEntertainmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'reach-traffic-dashboard': return <ReachTrafficDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الإنترنت والاتصالات" />;
      case 'renewable-energy-infrastructure-dashboard': return <RenewableEnergyInfrastructureDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'carbon-capture-climate-tech-dashboard': return <CarbonCaptureClimateTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />;
      case 'public-policy-economic-strategy-dashboard': return <PublicPolicyEconomicStrategyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
      case 'geopolitical-risk-global-trade-analysis-dashboard': return <GeopoliticalRiskTradeAnalysisDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />;
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
