// v4.0.1 - Production Sync
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/Home';
import { DiscoveryCenter } from './components/DiscoveryCenter';

import { MyProjects } from './components/MyProjects';
import { NewPlan } from './components/NewPlan';
import { PlanComparison } from './components/PlanComparison';
import { UnicornBenchmarking } from './components/UnicornBenchmarking';
import { BrandIdentityStudio } from './components/BrandIdentityStudio';
import { BusinessPlanEditor } from './components/BusinessPlanEditor';
import { UsersManagement } from './components/UsersManagement';
import { AdminProjectsManagement } from './components/Admin/AdminProjectsManagement';
import { AdminAnalyticsDashboard } from './components/Admin/AdminAnalyticsDashboard';
import { AdminSecurityDashboard } from './components/Admin/AdminSecurityDashboard';
import { LeftAiSidebar } from './components/LeftAiSidebar';
import { PricingPlans } from './components/PricingPlans';
import { Settings } from './components/Settings';
import { Tasks } from './components/Tasks';
import { Changelog } from './components/Changelog';
import { ExportTemplates } from './components/ExportTemplates';
import { Notifications } from './components/Notifications';
import { SmartAnalyzer } from './components/SmartAnalyzer';
import { Profile } from './components/Profile';
import ResultPage from './easy_mode/ResultPage';
import AdvertisingDashboard from './components/AdvertisingMarketing/AdvertisingDashboard';
import MarketingDashboard from './components/AdvertisingMarketing/MarketingDashboard';
import InfluencerMarketingDashboard from './components/AdvertisingMarketing/InfluencerMarketingDashboard';
import BrandsLeadersDashboard from './components/AdvertisingMarketing/BrandsLeadersDashboard';
import FarmingDashboard from './components/Agriculture/FarmingDashboard';
import FisheriesAquacultureDashboard from './components/Agriculture/FisheriesAquacultureDashboard';
import ForestryDashboard from './components/Agriculture/ForestryDashboard';
import ChemicalIndustryDashboard from './components/ChemicalsResources/ChemicalIndustryDashboard';
import FossilFuelsDashboard from './components/ChemicalsResources/FossilFuelsDashboard';
import MiningDashboard from './components/ChemicalsResources/MiningDashboard';
import PulpPaperDashboard from './components/ChemicalsResources/PulpPaperDashboard';
import PlasticRubberDashboard from './components/ChemicalsResources/PlasticRubberDashboard';
import PetroleumRefineryDashboard from './components/ChemicalsResources/PetroleumRefineryDashboard';
import ApparelShoesDashboard from './components/ConsumerGoodsFMCG/ApparelShoesDashboard';
import NonAlcoholicBeveragesDashboard from './components/ConsumerGoodsFMCG/NonAlcoholicBeveragesDashboard';
import EconomyDashboard from './components/EconomyPolitics/EconomyDashboard';
import InternationalTradeDashboard from './components/EconomyPolitics/InternationalTradeDashboard';
import PoliticsDashboard from './components/EconomyPolitics/PoliticsDashboard';
import ClimateWeatherDashboard from './components/EnergyEnvironment/ClimateWeatherDashboard';
import EmissionsDashboard from './components/EnergyEnvironment/EmissionsDashboard';
import EnergyDashboard from './components/EnergyEnvironment/EnergyDashboard';
import GreentechDashboard from './components/EnergyEnvironment/GreentechDashboard';
import WasteDashboard from './components/EnergyEnvironment/WasteDashboard';
import WaterDashboard from './components/EnergyEnvironment/WaterDashboard';
import FinancialInstitutionsDashboard from './components/FinanceInsurance/FinancialInstitutionsDashboard';
import InvestmentsDashboard from './components/FinanceInsurance/InvestmentsDashboard';
import FinancialServicesDashboard from './components/FinanceInsurance/FinancialServicesDashboard';
import CareSupportDashboard from './components/HealthPharma/CareSupportDashboard';
import HospitalsHealthProfessionalsDashboard from './components/HealthPharma/HospitalsHealthProfessionalsDashboard';
import HealthSystemDashboard from './components/HealthPharma/HealthSystemDashboard';
import MedicalTechnologyDashboard from './components/HealthPharma/MedicalTechnologyDashboard';
import PharmaceuticalProductsDashboard from './components/HealthPharma/PharmaceuticalProductsDashboard';
import StateOfHealthDashboard from './components/HealthPharma/StateOfHealthDashboard';
import InsuranceDashboard from './components/FinanceInsurance/InsuranceDashboard';
import CyberCrimeSecurityDashboard from './components/Internet/CyberCrimeSecurityDashboard';
import CommunicationsDashboard from './components/Internet/CommunicationsDashboard';

import InternetDemographicsDashboard from './components/Internet/InternetDemographicsDashboard';
import MobileInternetAppsDashboard from './components/Internet/MobileInternetAppsDashboard';
import OnlineSearchDashboard from './components/Internet/OnlineSearchDashboard';
import OnlineVideoEntertainmentDashboard from './components/Internet/OnlineVideoEntertainmentDashboard';
import ReachTrafficDashboard from './components/Internet/ReachTrafficDashboard';
import SocialMediaDashboard from './components/Internet/SocialMediaDashboard';
import CelebritiesDashboard from './components/Life/CelebritiesDashboard';
import FamilyFriendsDashboard from './components/Life/FamilyFriendsDashboard';
import PersonalityBehaviorDashboard from './components/Life/PersonalityBehaviorDashboard';
import HolidaysDashboard from './components/Life/HolidaysDashboard';
import AudioDashboard from './components/Media/AudioDashboard';
import BooksPublishingDashboard from './components/Media/BooksPublishingDashboard';
import NewsDashboard from './components/Media/NewsDashboard';
import TVVideoFilmDashboard from './components/Media/TVVideoFilmDashboard';
import VideoGamingESportsDashboard from './components/Media/VideoGamingESportsDashboard';
import AerospaceDefenseDashboard from './components/MetalsElectronics/AerospaceDefenseDashboard';
import ElectronicsDashboard from './components/MetalsElectronics/ElectronicsDashboard';
import IndustrialMachineryDashboard from './components/MetalsElectronics/IndustrialMachineryDashboard';
import MetalsDashboard from './components/MetalsElectronics/MetalsDashboard';
import RollingStockDashboard from './components/MetalsElectronics/RollingStockDashboard';
import ShipbuildingDashboard from './components/MetalsElectronics/ShipbuildingDashboard';
import VehicleManufacturingDashboard from './components/MetalsElectronics/VehicleManufacturingDashboard';
import CommercialRealEstateDashboard from './components/RealEstate/CommercialRealEstateDashboard';
import IndustrialRealEstateDashboard from './components/RealEstate/IndustrialRealEstateDashboard';
import MortgagesFinancingDashboard from './components/RealEstate/MortgagesFinancingDashboard';
import PropertyServicesDashboard from './components/RealEstate/PropertyServicesDashboard';
import ResidentialRealEstateDashboard from './components/RealEstate/ResidentialRealEstateDashboard';
import DIYRetailDashboard from './components/RetailTrade/DIYRetailDashboard';
import FashionAccessoriesDashboard from './components/RetailTrade/FashionAccessoriesDashboard';
import FoodBeverageRetailDashboard from './components/RetailTrade/FoodBeverageRetailDashboard';
import FurnitureRetailDashboard from './components/RetailTrade/FurnitureRetailDashboard';
import GeneralMerchandiseDashboard from './components/RetailTrade/GeneralMerchandiseDashboard';
import HealthHygieneDashboard from './components/RetailTrade/HealthHygieneDashboard';

import OfficeSuppliesDashboard from './components/RetailTrade/OfficeSuppliesDashboard';
import PrivateLabelDashboard from './components/RetailTrade/PrivateLabelDashboard';
import RetailTechnologyDashboard from './components/RetailTrade/RetailTechnologyDashboard';
import ShoppingBehaviorDashboard from './components/RetailTrade/ShoppingBehaviorDashboard';
import SportsLeisureRetailDashboard from './components/RetailTrade/SportsLeisureRetailDashboard';
import SubscriptionsDirectSellingDashboard from './components/RetailTrade/SubscriptionsDirectSellingDashboard';
import SupplyChainDashboard from './components/RetailTrade/SupplyChainDashboard';
import WholesaleDashboard from './components/RetailTrade/WholesaleDashboard';
import BusinessServicesDashboard from './components/Services/BusinessServicesDashboard';
import SkilledLaborDashboard from './components/Services/SkilledLaborDashboard';
import CrimeLawEnforcementDashboard from './components/Society/CrimeLawEnforcementDashboard';
import DemographicsDashboard from './components/Society/DemographicsDashboard';
import EducationScienceDashboard from './components/Society/EducationScienceDashboard';
import GeographyNatureDashboard from './components/Society/GeographyNatureDashboard';
import HistoricalDataDashboard from './components/Society/HistoricalDataDashboard';
import ArtCultureDashboard from './components/SportsRecreation/ArtCultureDashboard';
import GamblingDashboard from './components/SportsRecreation/GamblingDashboard';
import HobbiesDashboard from './components/SportsRecreation/HobbiesDashboard';
import ParksOutdoorsDashboard from './components/SportsRecreation/ParksOutdoorsDashboard';
import ProfessionalSportsDashboard from './components/SportsRecreation/ProfessionalSportsDashboard';
import SportsFitnessDashboard from './components/SportsRecreation/SportsFitnessDashboard';
import WellnessSpasDashboard from './components/SportsRecreation/WellnessSpasDashboard';
import ConsumerElectronicsDashboard from './components/TechnologyTelecommunications/ConsumerElectronicsDashboard';
import HardwareDashboard from './components/TechnologyTelecommunications/HardwareDashboard';
import HouseholdAppliancesDashboard from './components/TechnologyTelecommunications/HouseholdAppliancesDashboard';
import ITServicesDashboard from './components/TechnologyTelecommunications/ITServicesDashboard';
import SoftwareDashboard from './components/TechnologyTelecommunications/SoftwareDashboard';
import TelecommunicationsDashboard from './components/TechnologyTelecommunications/TelecommunicationsDashboard';
import AviationDashboard from './components/TransportationLogistics/AviationDashboard';
import LogisticsDashboard from './components/TransportationLogistics/LogisticsDashboard';
import PublicTransportDashboard from './components/TransportationLogistics/PublicTransportDashboard';
import RailTransportDashboard from './components/TransportationLogistics/RailTransportDashboard';
import VehiclesRoadTrafficDashboard from './components/TransportationLogistics/VehiclesRoadTrafficDashboard';
import WaterTransportDashboard from './components/TransportationLogistics/WaterTransportDashboard';
import AccommodationDashboard from './components/TravelTourism/AccommodationDashboard';
import BusinessTravelDashboard from './components/TravelTourism/BusinessTravelDashboard';
import FoodDrinkServicesDashboard from './components/TravelTourism/FoodDrinkServicesDashboard';
import LeisureTravelDashboard from './components/TravelTourism/LeisureTravelDashboard';
import BuildingConstructionDashboard from './components/Construction/BuildingConstructionDashboard';
import HeavyConstructionDashboard from './components/Construction/HeavyConstructionDashboard';
import CleaningProductsDashboard from './components/ConsumerGoodsFMCG/CleaningProductsDashboard';
import CosmeticsPersonalCareDashboard from './components/ConsumerGoodsFMCG/CosmeticsPersonalCareDashboard';
import FoodNutritionDashboard from './components/ConsumerGoodsFMCG/FoodNutritionDashboard';
import FurnitureHouseholdDashboard from './components/ConsumerGoodsFMCG/FurnitureHouseholdDashboard';
import GardenPatioDashboard from './components/ConsumerGoodsFMCG/GardenPatioDashboard';
import HomeImprovementDashboard from './components/ConsumerGoodsFMCG/HomeImprovementDashboard';
import PetSuppliesDashboard from './components/ConsumerGoodsFMCG/PetSuppliesDashboard';
import ToysDashboard from './components/ConsumerGoodsFMCG/ToysDashboard';
import B2BEcommerceDashboard from './components/Ecommerce/B2BEcommerceDashboard';
import B2CEcommerceDashboard from './components/Ecommerce/B2CEcommerceDashboard';
import C2CEcommerceDashboard from './components/Ecommerce/C2CEcommerceDashboard';
import DigitalShoppingBehaviourDashboard from './components/Ecommerce/DigitalShoppingBehaviourDashboard';
import ECommerceKeyFiguresDashboard from './components/Ecommerce/ECommerceKeyFiguresDashboard';
import PaidContentDashboard from './components/Ecommerce/PaidContentDashboard';
import { BottomNavBar } from './components/BottomNavBar';
import SearchEngineOptimizationContentMarketingDashboard from './components/AdvertisingMarketing/SearchEngineOptimizationContentMarketingDashboard';
import AgriculturalTechnologyAgritechDashboard from './components/Agriculture/AgriculturalTechnologyAgritechDashboard';
import SmartFarmingDashboard from './components/Agriculture/SmartFarmingDashboard';
import SeedsCropProtectionDashboard from './components/Agriculture/SeedsCropProtectionDashboard';
import RecycledMaterialsDashboard from './components/ChemicalsResources/RecycledMaterialsDashboard';
import BatteryMaterialsDashboard from './components/ChemicalsResources/BatteryMaterialsDashboard';
import SustainableConsumerGoodsDashboard from './components/ConsumerGoodsFMCG/SustainableConsumerGoodsDashboard';
import PackagedFoodsDashboard from './components/ConsumerGoodsFMCG/PackagedFoodsDashboard';
import OnlineMarketplacesDashboard from './components/Ecommerce/OnlineMarketplacesDashboard';
import CrossBorderEcommerceDashboard from './components/Ecommerce/CrossBorderEcommerceDashboard';
import SocialCommerceDashboard from './components/Ecommerce/SocialCommerceDashboard';
import FinancialTechnologyFintechDashboard from './components/FinanceInsurance/FinancialTechnologyFintechDashboard';
import DigitalPaymentsDashboard from './components/FinanceInsurance/DigitalPaymentsDashboard';
import WealthManagementDashboard from './components/FinanceInsurance/WealthManagementDashboard';
import BiotechnologyDashboard from './components/HealthPharma/BiotechnologyDashboard';
import DigitalHealthDashboard from './components/HealthPharma/DigitalHealthDashboard';
import MentalHealthServicesDashboard from './components/HealthPharma/MentalHealthServicesDashboard';
import AiPlatformsDashboard from './components/Internet/AiPlatformsDashboard';
import CloudServicesDashboard from './components/TechnologyTelecommunications/CloudServicesDashboard';
import StreamingPlatformsDashboard from './components/Media/StreamingPlatformsDashboard';
import PodcastIndustryDashboard from './components/Media/PodcastIndustryDashboard';
import DigitalPublishingDashboard from './components/Media/DigitalPublishingDashboard';
import ArtificialIntelligenceDashboard from './components/TechnologyTelecommunications/ArtificialIntelligenceDashboard';
import ElectricVehicleEvInfrastructureDashboard from './components/TransportationLogistics/ElectricVehicleEvInfrastructureDashboard';
import AutonomousVehiclesDashboard from './components/TransportationLogistics/AutonomousVehiclesDashboard';
import MedicalTourismDashboard from './components/TravelTourism/MedicalTourismDashboard';
import TravelTechnologyDashboard from './components/TravelTourism/TravelTechnologyDashboard';
import SmartConstructionBIMDashboard from './components/Construction/SmartConstructionBIMDashboard';
import ModularPrefabConstructionDashboard from './components/Construction/ModularPrefabConstructionDashboard';
import PublicPolicyEconomicStrategyDashboard from './components/EconomyPolitics/PublicPolicyEconomicStrategyDashboard';
import GeopoliticalRiskTradeAnalysisDashboard from './components/EconomyPolitics/GeopoliticalRiskTradeAnalysisDashboard';
import RenewableEnergyInfrastructureDashboard from './components/EnergyEnvironment/RenewableEnergyInfrastructureDashboard';
import CarbonCaptureClimateTechDashboard from './components/EnergyEnvironment/CarbonCaptureClimateTechDashboard';
import MentalHealthWellbeingDashboard from './components/Life/MentalHealthWellbeingDashboard';
import LongevityHumanPerformanceDashboard from './components/Life/LongevityHumanPerformanceDashboard';
import SemiconductorsDashboard from './components/MetalsElectronics/SemiconductorsDashboard';
import AdvancedRoboticsManufacturingDashboard from './components/MetalsElectronics/AdvancedRoboticsManufacturingDashboard';
import PropTechDashboard from './components/RealEstate/PropTechDashboard';
import SmartCitiesDevelopmentDashboard from './components/RealEstate/SmartCitiesDevelopmentDashboard';
import EcommerceLogisticsFulfillmentDashboard from './components/RetailTrade/EcommerceLogisticsFulfillmentDashboard';
import OmnichannelRetailSystemsDashboard from './components/RetailTrade/OmnichannelRetailSystemsDashboard';
import DigitalTransformationConsultingDashboard from './components/Services/DigitalTransformationConsultingDashboard';
import BPODashboard from './components/Services/BPODashboard';
import UrbanDevelopmentPolicyDashboard from './components/Society/UrbanDevelopmentPolicyDashboard';
import PopulationAnalyticsDashboard from './components/Society/PopulationAnalyticsDashboard';
import SportsAnalyticsPerformanceDashboard from './components/SportsRecreation/SportsAnalyticsPerformanceDashboard';
import EsportsGamingIndustryDashboard from './components/SportsRecreation/EsportsGamingIndustryDashboard';
import SiteTour from './components/SiteTour';
import { User, PlanSection, BusinessModelItem, Comment } from './types';
import {
  ShieldCheck,
  ArrowLeft,
  GanttChartSquare,
  LayoutGrid,
  Files,
  MessageCircle,
  Sparkles,
  LayoutDashboard,
  PanelRightClose,
  PanelRightOpen,
  Settings as SettingsIcon,
  CreditCard,
  Bell,
  History,
  BarChart3,
  Palette,
  ListTodo,
  Home as HomeIcon,
  ArrowRightLeft,
  Plus,
  Globe,
  Check,
  Zap,
  Info,
  ChevronLeft,
  Clock3,
  User as UserIcon,
  ShoppingBag,
  CreditCard as BillingIcon,
  LifeBuoy,
  LogOut,
  Layers,
  Layout,
  Compass,
  Briefcase,
  TrendingUp,
  X,
  Menu,
  Waves,
  TreePine
} from 'lucide-react';

const MOCK_USER: User = {
  name: 'عبدالله محمد',
  email: 'abdullah@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah',
  credits: 85,
  totalCredits: 100,
};

const INITIAL_SECTIONS: PlanSection[] = [
  { id: '1', title: 'الملخص التنفيذي', content: '', isCompleted: true, lastEdited: 'منذ يومين', aiScore: 85, humanScore: 90, progress: 100 },
  { id: '2', title: 'تحليل السوق والمنافسين', content: '', isCompleted: false, lastEdited: 'أمس', aiScore: 45, humanScore: 0, progress: 20 },
  { id: '3', title: 'نموذج العمل التجاري', content: '', isCompleted: false, progress: 60, aiScore: 72, humanScore: 0 },
  { id: '4', title: 'خطة التسويق والمبيعات', content: '', isCompleted: false, progress: 30, aiScore: 64, humanScore: 0 },
  { id: '5', title: 'الهيكل التنظيمي والإداري', content: '', isCompleted: true, lastEdited: 'منذ أسبوع', aiScore: 92, humanScore: 95, progress: 100 },
  { id: '6', title: 'التوقعات المالية', content: '', isCompleted: false, progress: 10, aiScore: 50, humanScore: 0 },
];

const CANVAS_ITEMS: BusinessModelItem[] = [
  { id: 'c1', category: 'users', title: 'شرائح العملاء', content: 'الشركات الصغيرة والمتوسطة، رواد الأعمال' },
  { id: 'c2', category: 'partners', title: 'الشركاء الرئيسيون', content: 'البنوك المحلية، مزودو خدمات الكلاود' },
  { id: 'c3', category: 'value', title: 'القيمة المضافة', content: 'سهولة الاستخدام، رسوم منخفضة' },
  { id: 'c4', category: 'cost', title: 'هيكل التكاليف', content: '' },
  { id: 'c5', category: 'revenue', title: 'مصادر الإيرادات', content: 'اشتراكات شهرية، عمولة العمليات' },
];

const INITIAL_COMMENTS: Comment[] = [
  { id: '1', user: 'سارة أحمد', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara', text: 'أعتقد أننا بحاجة لتفصيل أكثر في قسم تحليل السوق وتحديد المنافسين المباشرين.', timestamp: 'منذ 2 ساعة' }
];

const App: React.FC = () => {
  // Persistence Logic: Initialize from localStorage or default to 'home'
  const [activeTab, setActiveTab] = useState<string>(() => {
    const savedTab = localStorage.getItem('khotta_active_tab');
    return (savedTab as any) || 'home';
  });

  const [sections, setSections] = useState<PlanSection[]>(INITIAL_SECTIONS);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>('1');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | null>('saved');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isAiSidebarOpen, setIsAiSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTourRunning, setIsTourRunning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Persistence Effect: Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem('khotta_active_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (saveStatus === 'saving') {
      const timer = setTimeout(() => setSaveStatus('saved'), 1000);
      return () => clearTimeout(timer);
    }
  }, [saveStatus]);

  const handleSectionUpdate = (id: string, updates: Partial<PlanSection>) => {
    setSaveStatus('saving');
    setSections(prev => prev.map(s => 
      s.id === id ? { ...s, ...updates, lastEdited: 'الآن' } : s
    ));
  };

  const notifications = [
    { 
      id: 1, 
      type: 'ai', 
      priority: 'high',
      title: 'تحليل SWOT جـاهز', 
      msg: 'أكمل الذكاء الاصطناعي تحليل نقاط القوة والضعف لمشروعك الاستراتيجي. يمكنك الآن مراجعة النتائج.', 
      time: 'منذ 5 دقائق', 
      icon: Sparkles, 
      color: 'text-purple-600 bg-purple-50',
      action: 'مراجعة التحليل'
    },
    { 
      id: 2, 
      type: 'task', 
      priority: 'urgent',
      title: 'مهمة قريبة الموعد', 
      msg: 'بقي أقل من 24 ساعة على الموعد النهائي لتسليم خطة التسويق الرقمي.', 
      time: 'منذ ساعة', 
      icon: Clock3, 
      color: 'text-amber-600 bg-amber-50',
      action: 'انتقل للمهام'
    },
    { 
      id: 3, 
      type: 'system', 
      priority: 'low',
      title: 'تجديد اشتراك PRO', 
      msg: 'تم تجديد اشتراكك السنوي بنجاح؛ استمتع بكامل ميزات المنصة والذكاء الاصطناعي.', 
      time: 'منذ يوم', 
      icon: Check, 
      color: 'text-emerald-600 bg-emerald-50',
      action: 'تفاصيل الفاتورة'
    },
  ];

  const adminTabs = ['admin-dashboard', 'users-management', 'admin-plans', 'admin-analytics', 'admin-security'];
  const isAdminView = adminTabs.includes(activeTab);

  return (
    <div className="flex min-h-screen bg-white lg:bg-[#F1F5F9]/80">
      {/* 1. Global AI Sidebar (Left) - Hidden on Mobile */}
      {!isAdminView && (
        <div className="hidden xl:flex">
          <LeftAiSidebar 
            isOpen={isAiSidebarOpen} 
            onToggle={() => setIsAiSidebarOpen(!isAiSidebarOpen)} 
          />
        </div>
      )}

      {/* 2. Global Navigation Sidebar (Right) - Hidden on Mobile */}
      <div className="hidden lg:flex">
        <Sidebar 
          user={MOCK_USER} 
          isOpen={isSidebarOpen} 
          isCollapsed={isSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      </div>

      <main className={`flex-1 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        ${!isSidebarOpen ? 'mr-0' : isSidebarCollapsed ? 'mr-0 lg:mr-24' : 'mr-0 lg:mr-72'} 
        ${!isAdminView && isAiSidebarOpen ? 'ml-0 xl:ml-96' : 'ml-0'}`}>

        {/* Superior Navigation Bar - Improved for Mobile */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-3 sm:px-4 md:px-6 lg:px-12 py-2 sm:py-3 flex items-center justify-between">
           <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 rounded-xl hover:bg-gray-50 transition-all"
                aria-label="فتح القائمة"
              >
                <Menu size={20} />
              </button>

              {/* Dynamic Breadcrumb UI - Improved for Mobile */}
              <nav className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10.5px] font-bold group">
                 <button
                  onClick={() => setActiveTab('home')}
                  className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-primary-600 transition-colors p-1.5 sm:p-0"
                 >
                    <HomeIcon size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">الرئيسية</span>
                 </button>

                 {activeTab !== 'home' && (
                   <>
                    <ChevronLeft size={10} className="text-gray-300 w-3 h-3 sm:w-4 sm:h-4" />
                    
                    {/* Middle Layer: Market Discovery (if activeTab is a sector dashboard) */}
                    {(activeTab.includes('-dashboard') || activeTab === 'seo-content-marketing' || activeTab === 'agritech') && 
                      activeTab !== 'admin-dashboard' && activeTab !== 'strategic-dashboard' && (
                      <>
                        <button 
                          onClick={() => setActiveTab('market-discovery')}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          اكتشاف السوق
                        </button>
                        <ChevronLeft size={10} className="text-gray-300 w-3 h-3 sm:w-4 sm:h-4" />
                      </>
                    )}

                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 border border-gray-100 rounded-full text-gray-700 animate-in fade-in slide-in-from-right-2 duration-500 max-w-[180px] sm:max-w-none truncate">
                       <span className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0"></span>
                       <span className="truncate">
                         {activeTab === 'market-discovery' && 'اكتشاف السوق'}
                         {activeTab === 'profile' && 'الملف الشخصي'}
                         {activeTab === 'settings' && 'إعدادات الحساب'}
                         {activeTab === 'pricing' && 'الاشتراكات'}
                         {activeTab === 'my-plans' && 'مشاريعي'}
                         {activeTab === 'new-plan' && 'خلق فكرة'}
                         {activeTab === 'unicorn-benchmark' && 'رادار اليونيكورن'}
                         {activeTab === 'advertising-dashboard' && 'قطاع الإعلانات'}
                         {activeTab === 'marketing-dashboard' && 'قطاع التسويق'}
                         {activeTab === 'brands-leaders-dashboard' && 'العباقرة ورواد العلامات'}
                         {activeTab === 'influencer-marketing-dashboard' && 'التسويق عبر المؤثرين'}
                         {activeTab === 'seo-content-marketing' && 'تحسين محركات البحث'}
                         {activeTab === 'farming-dashboard' && 'قطاع الزراعة'}
                         {activeTab === 'fisheries-aquaculture-dashboard' && 'الثروة السمكية والاستزراع'}
                         {activeTab === 'forestry-dashboard' && 'قطاع الغابات'}
                         {activeTab === 'agritech' && 'تكنولوجيا الزراعة'}
                         {activeTab === 'chemical-industry-dashboard' && 'الصناعات الكيماوية'}
                         {activeTab === 'fossil-fuels-dashboard' && 'قطاع الوقود الأحفوري'}
                         {activeTab === 'mining-dashboard' && 'قطاع التعدين والمعادن'}
                         {activeTab === 'petroleum-refinery-dashboard' && 'تكرير البترول'}
                         {activeTab === 'pulp-paper-dashboard' && 'قطاع اللب والورق'}
                         {activeTab === 'plastic-rubber-dashboard' && 'قطاع البلاستيك والمطاط'}
                         {activeTab === 'apparel-shoes-dashboard' && 'الملابس والأحذية'}
                         {activeTab === 'non-alcoholic-beverages-dashboard' && 'المشروبات غير الكحولية'}
                         {activeTab === 'economy-dashboard' && 'الاقتصاد والمؤشرات الكلية'}
                         {activeTab === 'international-trade-dashboard' && 'التجارة الدولية'}
                         {activeTab === 'politics-dashboard' && 'السياسة والحكومة'}
                         {activeTab === 'climate-dashboard' && 'المناخ والبيئة'}
                         {activeTab === 'energy-dashboard' && 'قطاع الطاقة'}
                         {activeTab === 'greentech-dashboard' && 'التكنولوجيات الخضراء'}
                         {activeTab === 'waste-dashboard' && 'إدارة النفايات'}
                         {activeTab === 'water-dashboard' && 'المياه والصرف الصحي'}
                         {activeTab === 'financial-institutions-dashboard' && 'المؤسسات المالية'}
                         {activeTab === 'investments-dashboard' && 'الاستثمارات'}
                         {activeTab === 'insurance-dashboard' && 'التأمين'}
                         {activeTab === 'financial-services-dashboard' && 'الخدمات المالية'}
                         {activeTab === 'care-support-dashboard' && 'الرعاية والدعم'}
                         {activeTab === 'hospitals-health-professionals-dashboard' && 'المستشفيات والكوادر'}
                         {activeTab === 'health-system-dashboard' && 'النظام الصحي العالمي'}
                         {activeTab === 'medical-technology-dashboard' && 'التكنولوجيا الطبية'}
                         {activeTab === 'pharma-market-dashboard' && 'سوق الأدوية'}
                         {activeTab === 'building-construction-dashboard' && 'بناء العقارات'}
                         {activeTab === 'heavy-construction-dashboard' && 'البنية التحتية'}
                         {activeTab === 'smart-construction-bim-dashboard' && 'البناء الذكي والنمذجة'}
                         {activeTab === 'cosmetics-personal-care-dashboard' && 'التجميل والعناية الشخصية'}
                         {activeTab === 'food-nutrition-dashboard' && 'الغذاء والتغذية'}
                         {activeTab === 'furniture-household-dashboard' && 'الأثاث والسلع المنزلية'}
                         {activeTab === 'b2b-ecommerce-dashboard' && 'التجارة الإلكترونية B2B'}
                         {activeTab === 'b2c-ecommerce-dashboard' && 'التجارة الإلكترونية B2C'}
                         {activeTab === 'digital-shopping-behaviour-dashboard' && 'سلوك التسوق الرقمي'}
                         {activeTab === 'ecommerce-key-figures-dashboard' && 'مؤشرات التجارة الإلكترونية'}
                         {activeTab === 'paid-content-dashboard' && 'المحتوى والخدمات المدفوعة'}
                         {activeTab === 'communications-dashboard' && 'شبكات الاتصالات'}
                         {activeTab === 'cyber-crime-security-dashboard' && 'الأمن السيبراني'}
                         {activeTab === 'mobile-internet-apps-dashboard' && 'تطبيقات الهواتف'}
                         {activeTab === 'online-search-dashboard' && 'محركات البحث'}
                         {activeTab === 'social-media-dashboard' && 'التواصل الاجتماعي'}
                         {activeTab === 'audio-dashboard' && 'الصوتيات والبودكاست'}
                         {activeTab === 'books-publishing-dashboard' && 'النشر والكتب'}
                         {activeTab === 'news-dashboard' && 'الصحافة والإعلام'}
                         {activeTab === 'tv-video-film-dashboard' && 'السينما والتلفزيون'}
                         {activeTab === 'video-gaming-esports-dashboard' && 'الألعاب الإلكترونية'}
                         {activeTab === 'industrial-machinery-dashboard' && 'الآلات الصناعية'}
                         {activeTab === 'metals-dashboard' && 'التعدين والمعادن'}
                         {activeTab === 'vehicle-manufacturing-dashboard' && 'تصنيع المركبات'}
                         {activeTab === 'commercial-real-estate-dashboard' && 'العقارات التجارية'}
                         {activeTab === 'residential-real-estate-dashboard' && 'العقارات السكنية'}
                         {activeTab === 'fashion-accessories-dashboard' && 'الأزياء والإكسسوارات'}
                         {activeTab === 'food-beverage-retail-dashboard' && 'تجزئة الأغذية'}
                         {activeTab === 'retail-technology-dashboard' && 'تقنيات التجزئة'}
                         {activeTab === 'supply-chain-dashboard' && 'سلاسل التوريد'}
                         {activeTab === 'business-services-dashboard' && 'خدمات الأعمال'}
                         {activeTab === 'education-science-dashboard' && 'التعليم والعلوم'}
                         {activeTab === 'professional-sports-dashboard' && 'الرياضات الاحترافية'}
                         {activeTab === 'sports-fitness-dashboard' && 'اللياقة البدنية'}
                         {activeTab === 'wellness-spas-dashboard' && 'الاستجمام والعافية'}
                         {activeTab === 'software-dashboard' && 'البرمجيات و SaaS'}
                         {activeTab === 'telecommunications-dashboard' && 'الاتصالات والشبكات'}
                         {activeTab === 'aviation-dashboard' && 'الطيران والنقل الجوي'}
                         {activeTab === 'logistics-dashboard' && 'الخدمات اللوجستية'}
                         {activeTab === 'accommodation-dashboard' && 'الفنادق والإقامة'}
                         {activeTab === 'strategic-dashboard' && 'النبض الاستراتيجي'}
                         {activeTab === 'admin-dashboard' && 'لوحة الإدارة'}
                         {activeTab === 'users-management' && 'إدارة المستخدمين'}
                         {activeTab === 'admin-plans' && 'أرشيف الخطط'}
                         {activeTab === 'admin-analytics' && 'تحليلات المنصة'}
                         {activeTab === 'admin-security' && 'بروتوكولات الأمان'}
                         {activeTab === 'contact-us' && 'اتصل بنا'}
                       </span>
                    </div>
                   </>
                 )}
              </nav>
           </div>
           
           <div className="flex items-center gap-2 sm:gap-4">
              {/* Notifications Dropdown Container - Improved for Mobile */}
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => { setIsNotificationsOpen(!isNotificationsOpen); setIsProfileOpen(false); }}
                  className={`p-1.5 sm:p-2 rounded-xl transition-all relative ${isNotificationsOpen ? 'bg-primary-50 text-primary-600' : 'text-gray-400 hover:bg-gray-100'}`}
                >
                  <Bell size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {isNotificationsOpen && (
                  <div className="fixed sm:absolute inset-x-0 sm:inset-x-auto left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-[60px] sm:top-auto sm:mt-4 w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] mx-auto sm:mx-0 bg-white border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-[90] sm:z-[100] animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden rtl text-right">
                    <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-slate-50 flex items-center justify-between bg-gradient-to-l from-slate-50/50 to-white">
                      <div>
                        <h3 className="font-black text-base sm:text-lg text-slate-900 leading-none">مركز التنبيهات</h3>
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider sm:tracking-widest">3 تنبيهات غير مقروءة</p>
                      </div>
                      <button className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <SettingsIcon size={14} className="text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    <div className="max-h-[50vh] sm:max-h-[460px] overflow-y-auto no-scrollbar py-2">
                       {/* Section Header */}
                       <div className="px-4 sm:px-6 py-1.5 sm:py-2">
                          <span className="text-[9px] sm:text-[10px] font-black text-slate-300 uppercase tracking-wider sm:tracking-[0.2em]">الأخيرة</span>
                       </div>

                      {notifications.map((notif) => (
                        <div key={notif.id} className="mx-2 sm:mx-3 my-1 p-3 sm:p-4 flex gap-3 sm:gap-4 hover:bg-slate-50/80 rounded-[1.5rem] sm:rounded-[1.8rem] transition-all cursor-pointer border border-transparent hover:border-slate-100 group">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${notif.color} group-hover:shadow-current/5`}>
                            <notif.icon size={18} strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                              <h4 className="text-[12px] sm:text-[13px] font-black text-slate-900">{notif.title}</h4>
                              <span className="text-[8px] sm:text-[9px] font-black text-slate-400 opacity-60">{notif.time}</span>
                            </div>
                            <p className="text-[11px] sm:text-[12px] text-slate-500 line-clamp-2 leading-relaxed font-medium mb-2 sm:mb-3">{notif.msg}</p>

                            <div className="flex items-center justify-between mt-auto">
                               <button className="text-[9px] sm:text-[10px] font-black text-primary-600 bg-primary-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg hover:bg-primary-600 hover:text-white transition-all">
                                 {notif.action}
                               </button>
                               {notif.priority === 'urgent' && (
                                 <span className="flex items-center gap-1 text-[8px] sm:text-[9px] font-black text-red-500 animate-pulse">
                                   <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                   مستعجل
                                 </span>
                               )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2.5 sm:p-3 bg-gray-50 border-t border-gray-100 text-center">
                      <button onClick={() => { setIsNotificationsOpen(false); setActiveTab('notifications'); }} className="text-[10px] sm:text-[11px] font-black text-gray-500 hover:text-primary-600 transition-colors flex items-center justify-center gap-1 mx-auto">
                        مشاهدة جميع التنبيهات
                        <ChevronLeft size={12} className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown Container - Improved for Mobile */}
              <div className="relative" ref={profileRef}>
                <button
                  id="tour-profile"
                  onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotificationsOpen(false); }}
                  className={`flex items-center gap-2 sm:gap-3 p-0.5 sm:p-1 pr-2 sm:pr-3 border border-gray-100 rounded-full transition-all group ${isProfileOpen ? 'bg-primary-50 border-primary-100' : 'hover:bg-gray-50'}`}
                >
                  <span className={`text-[10px] sm:text-[11px] font-black transition-colors hidden sm:inline ${isProfileOpen ? 'text-primary-700' : 'text-gray-500'}`}>{MOCK_USER.name}</span>
                  <img src={MOCK_USER.avatar} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white shadow-sm" alt="Profile" />
                </button>

                {isProfileOpen && (
                  <div className="fixed sm:absolute inset-x-0 sm:inset-x-auto left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-[60px] sm:top-auto sm:mt-3 w-[calc(100vw-32px)] sm:w-72 max-w-[288px] mx-auto sm:mx-0 bg-white border border-gray-100 rounded-[2rem] shadow-2xl z-[90] sm:z-[100] animate-in fade-in slide-in-from-top-2 duration-300 overflow-hidden rtl text-right">
                     {/* Profile Identity Header */}
                     <div className="p-4 sm:p-5 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3">
                           <img src={MOCK_USER.avatar} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 border-white shadow-sm" alt="Avatar" />
                           <div className="min-w-0">
                               <h4 className="font-black text-xs sm:text-sm text-gray-900 truncate">{MOCK_USER.name}</h4>
                               <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">{MOCK_USER.email}</p>
                           </div>
                        </div>
                        <div className="bg-primary-600 rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-white shadow-lg shadow-primary-200">
                           <div className="flex items-center gap-1.5 sm:gap-2">
                               <Zap size={12} fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4" />
                               <span className="text-[9px] sm:text-[11px] font-black">باقة المحترفين PRO</span>
                           </div>
                           <span className="text-[9px] sm:text-[10px] font-bold opacity-80">85 نقطة</span>
                        </div>
                     </div>

                     {/* Profile Menu Links */}
                     <div className="p-2 sm:p-3 py-3 sm:py-4">
                        <div className="space-y-0.5 sm:space-y-1">
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('settings'); }} className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <UserIcon size={14} className="group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                              <span>ملفي الشخصي</span>
                           </button>
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('my-plans'); }} className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <Briefcase size={14} className="group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                              <span>مشاريعي</span>
                           </button>
                        </div>

                        <div className="h-px bg-gray-50 my-2 sm:my-3 mx-3 sm:mx-4"></div>

                        <div className="space-y-0.5 sm:space-y-1">
                           <button onClick={() => { setIsProfileOpen(false); setActiveTab('pricing'); }} className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-bold text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all group">
                              <CreditCard size={14} className="group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                              <span>اشتراكاتي</span>
                           </button>
                        </div>

                        <div className="h-px bg-gray-50 my-2 sm:my-3 mx-3 sm:mx-4"></div>

                        <div className="space-y-0.5 sm:space-y-1">
                           <button id="tour-site-tour-trigger" onClick={(e) => { e.stopPropagation(); setIsTourRunning(true); setIsSidebarCollapsed(false); setIsProfileOpen(false); }} className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-bold text-indigo-600 hover:bg-slate-50 transition-all group">
                              <Compass size={14} className="group-hover:scale-110 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                              <span>جولة تعريفية</span>
                           </button>
                        </div>

                        <div className="h-px bg-gray-50 my-2 sm:my-3 mx-3 sm:mx-4"></div>

                        <button className="w-full flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-bold text-red-500 hover:bg-red-50 transition-all group">
                           <LogOut size={14} className="group-hover:translate-x-[-2px] transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                           <span>تسجيل الخروج</span>
                        </button>
                     </div>
                  </div>
                )}
              </div>
           </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
        <div className={['editor', 'strategic-dashboard', 'contact-us', 'market-discovery'].includes(activeTab) || activeTab.endsWith('-dashboard') ? 'w-full' : 'max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 pb-20 lg:pb-10'}>
          
          {(activeTab === 'home' || activeTab === 'admin-dashboard') && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Home setActiveTab={setActiveTab} />
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Profile user={MOCK_USER} />
            </div>
          )}

          {activeTab === 'users-management' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <UsersManagement />
            </div>
          )}
          
          {activeTab === 'admin-plans' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminProjectsManagement />
            </div>
          )}

          {activeTab === 'admin-analytics' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminAnalyticsDashboard />
            </div>
          )}

          {activeTab === 'admin-security' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <AdminSecurityDashboard />
            </div>
          )}

          {activeTab === 'my-plans' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MyProjects />
            </div>
          )}

          {activeTab === 'new-plan' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <NewPlan onStart={(id) => id === 'easy' ? setActiveTab('strategic-dashboard') : setActiveTab('editor')} />
            </div>
          )}

          {activeTab === 'brand-identity' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <BrandIdentityStudio />
            </div>
          )}

          {activeTab === 'unicorn-benchmark' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <UnicornBenchmarking />
            </div>
          )}

          {activeTab === 'market-discovery' && (
             <DiscoveryCenter setActiveTab={setActiveTab} />
          )}


          {activeTab === 'comparison' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PlanComparison />
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PricingPlans />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Settings user={MOCK_USER} />
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Tasks />
            </div>
          )}

          {activeTab === 'changelog' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Changelog />
            </div>
          )}

          {activeTab === 'export-templates' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ExportTemplates />
            </div>
          )}

          {activeTab === 'smart-analyzer' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <SmartAnalyzer />
            </div>
          )}

          {activeTab === 'editor' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-140px)]">
               <BusinessPlanEditor 
                 sections={sections} 
                 onSectionUpdate={handleSectionUpdate}
                 expandedSectionId={expandedSectionId}
                 onSectionExpand={setExpandedSectionId}
               />
            </div>
          )}
          {activeTab === 'strategic-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ResultPage />
            </div>
          )}
          {activeTab === 'notifications' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Notifications />
            </div>
          )}
          {activeTab === 'advertising-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AdvertisingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="استكشاف السوق" />
            </div>
          )}
          {activeTab === 'brands-leaders-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BrandsLeadersDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />
            </div>
          )}
          {activeTab === 'marketing-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MarketingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />
            </div>
          )}
          {activeTab === 'influencer-marketing-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <InfluencerMarketingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الإعلانات والتسويق" />
            </div>
          )}
          {activeTab === 'farming-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FarmingDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />
            </div>
          )}
          {activeTab === 'fisheries-aquaculture-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FisheriesAquacultureDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />
            </div>
          )}
          {activeTab === 'forestry-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ForestryDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="الزراعة والموارد الطبيعية" />
            </div>
          )}
          {activeTab === 'chemical-industry-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ChemicalIndustryDashboard />
            </div>
          )}
          {activeTab === 'fossil-fuels-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FossilFuelsDashboard />
            </div>
          )}
          {activeTab === 'mining-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <MiningDashboard />
            </div>
          )}
          {activeTab === 'smart-construction-bim-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SmartConstructionBIMDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />
            </div>
          )}
          {activeTab === 'modular-prefab-construction-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ModularPrefabConstructionDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="البناء والإنشاءات" />
            </div>
          )}
          {activeTab === 'public-policy-economic-strategy-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PublicPolicyEconomicStrategyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />
            </div>
          )}
          {activeTab === 'geopolitical-risk-global-trade-analysis-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <GeopoliticalRiskTradeAnalysisDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الاقتصاد والسياسة" />
            </div>
          )}
          {activeTab === 'renewable-energy-infrastructure-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <RenewableEnergyInfrastructureDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />
            </div>
          )}
          {activeTab === 'carbon-capture-climate-tech-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CarbonCaptureClimateTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الطاقة والبيئة" />
            </div>
          )}
          {activeTab === 'mental-health-wellbeing-economy-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MentalHealthWellbeingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />
            </div>
          )}
          {activeTab === 'longevity-human-performance-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <LongevityHumanPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الحياة والمجتمع" />
            </div>
          )}
          {activeTab === 'semiconductors-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SemiconductorsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />
            </div>
          )}
          {activeTab === 'advanced-robotics-manufacturing-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AdvancedRoboticsManufacturingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="المعادن والإلكترونيات" />
            </div>
          )}
          {activeTab === 'proptech-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PropTechDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />
            </div>
          )}
          {activeTab === 'smart-cities-development-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SmartCitiesDevelopmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="العقارات" />
            </div>
          )}
          {activeTab === 'ecommerce-logistics-fulfillment-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <EcommerceLogisticsFulfillmentDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />
            </div>
          )}
          {activeTab === 'omnichannel-retail-systems-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <OmnichannelRetailSystemsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="التجزئة والتجارة" />
            </div>
          )}
          {activeTab === 'digital-transformation-consulting-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DigitalTransformationConsultingDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />
            </div>
          )}
          {activeTab === 'bpo-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BPODashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />
            </div>
          )}
          {activeTab === 'urban-development-smart-cities-policy-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <UrbanDevelopmentPolicyDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />
            </div>
          )}
          {activeTab === 'population-analytics-demographic-intelligence-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PopulationAnalyticsDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الخدمات والمجتمع" />
            </div>
          )}
          {activeTab === 'sports-analytics-performance-tech-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SportsAnalyticsPerformanceDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />
            </div>
          )}
          {activeTab === 'esports-gaming-industry-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
                <EsportsGamingIndustryDashboard onBack={() => setActiveTab('market-discovery')} parentCategory="الرياضة والاستجمام" />
            </div>
          )}

          {activeTab === 'pulp-paper-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PulpPaperDashboard />
            </div>
          )}

          {activeTab === 'plastic-rubber-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PlasticRubberDashboard />
            </div>
          )}

          {activeTab === 'petroleum-refinery-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PetroleumRefineryDashboard />
            </div>
          )}

          {activeTab === 'apparel-shoes-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ApparelShoesDashboard />
            </div>
          )}

          {activeTab === 'building-construction-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <BuildingConstructionDashboard />
            </div>
          )}

                   {activeTab === 'heavy-construction-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <HeavyConstructionDashboard />
            </div>
          )}
                   {activeTab === 'cleaning-products-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <CleaningProductsDashboard />
            </div>
          )}
                   {activeTab === 'cosmetics-personal-care-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <CosmeticsPersonalCareDashboard />
            </div>
          )}
                   {activeTab === 'food-nutrition-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FoodNutritionDashboard />
            </div>
          )}
                   {activeTab === 'furniture-household-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FurnitureHouseholdDashboard />
            </div>
          )}
                   {activeTab === 'garden-patio-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <GardenPatioDashboard />
            </div>
          )}
                   {activeTab === 'home-improvement-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <HomeImprovementDashboard />
            </div>
          )}
                   {activeTab === 'pet-supplies-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PetSuppliesDashboard />
            </div>
          )}
          {activeTab === 'toys-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ToysDashboard />
            </div>
          )}
          {activeTab === 'financial-services-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FinancialServicesDashboard />
            </div>
          )}
          {activeTab === 'investments-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <InvestmentsDashboard />
            </div>
          )}
          {activeTab === 'financial-institutions-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FinancialInstitutionsDashboard />
            </div>
          )}
          {activeTab === 'insurance-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <InsuranceDashboard />
            </div>
          )}


          {activeTab === 'care-support-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <CareSupportDashboard />
            </div>
          )}
          {activeTab === 'hospitals-health-professionals-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <HospitalsHealthProfessionalsDashboard />
            </div>
          )}
          {activeTab === 'health-system-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <HealthSystemDashboard />
            </div>
          )}
          {activeTab === 'medical-technology-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <MedicalTechnologyDashboard />
            </div>
          )}
          {activeTab === 'pharma-market-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PharmaceuticalProductsDashboard />
            </div>
          )}
           {activeTab === 'state-of-health-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <StateOfHealthDashboard />
             </div>
           )}
          {activeTab === 'communications-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <CommunicationsDashboard />
            </div>
          )}
           {activeTab === 'cyber-crime-security-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CyberCrimeSecurityDashboard />
             </div>
           )}
           {activeTab === 'internet-demographics-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <InternetDemographicsDashboard />
             </div>
           )}
           {activeTab === 'mobile-internet-apps-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MobileInternetAppsDashboard />
             </div>
           )}
           {activeTab === 'online-search-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <OnlineSearchDashboard />
             </div>
           )}
           {activeTab === 'online-video-entertainment-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <OnlineVideoEntertainmentDashboard />
             </div>
           )}
           {activeTab === 'reach-traffic-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ReachTrafficDashboard />
             </div>
           )}
           {activeTab === 'social-media-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SocialMediaDashboard />
             </div>
           )}
           {activeTab === 'celebrities-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CelebritiesDashboard />
             </div>
           )}
           {activeTab === 'family-friends-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FamilyFriendsDashboard />
             </div>
           )}
           {activeTab === 'personality-behavior-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PersonalityBehaviorDashboard />
             </div>
           )}
           {activeTab === 'holidays-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HolidaysDashboard />
             </div>
           )}
           {activeTab === 'audio-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AudioDashboard />
             </div>
           )}
           {activeTab === 'books-publishing-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BooksPublishingDashboard />
             </div>
           )}
           {activeTab === 'news-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <NewsDashboard />
             </div>
           )}
           {activeTab === 'tv-video-film-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <TVVideoFilmDashboard />
             </div>
           )}
           {activeTab === 'video-gaming-esports-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <VideoGamingESportsDashboard />
             </div>
           )}
           {activeTab === 'aerospace-defense-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AerospaceDefenseDashboard />
             </div>
           )}
           {activeTab === 'electronics-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ElectronicsDashboard />
             </div>
           )}
           {activeTab === 'industrial-machinery-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <IndustrialMachineryDashboard />
             </div>
           )}
           {activeTab === 'metals-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MetalsDashboard />
             </div>
           )}
           {activeTab === 'rolling-stock-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <RollingStockDashboard />
             </div>
           )}
           {activeTab === 'shipbuilding-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ShipbuildingDashboard />
             </div>
           )}
           {activeTab === 'vehicle-manufacturing-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <VehicleManufacturingDashboard />
             </div>
           )}
           {activeTab === 'commercial-real-estate-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CommercialRealEstateDashboard />
             </div>
           )}
           {activeTab === 'industrial-real-estate-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <IndustrialRealEstateDashboard />
             </div>
           )}
           {activeTab === 'mortgages-financing-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MortgagesFinancingDashboard />
             </div>
           )}
           {activeTab === 'property-services-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PropertyServicesDashboard />
             </div>
           )}
           {activeTab === 'residential-real-estate-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ResidentialRealEstateDashboard />
             </div>
           )}
           {activeTab === 'diy-retail-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DIYRetailDashboard />
             </div>
           )}
           {activeTab === 'fashion-accessories-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FashionAccessoriesDashboard />
             </div>
           )}
           {activeTab === 'food-beverage-retail-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FoodBeverageRetailDashboard />
             </div>
           )}
           {activeTab === 'furniture-retail-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FurnitureRetailDashboard />
             </div>
           )}
           {activeTab === 'general-merchandise-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <GeneralMerchandiseDashboard />
             </div>
           )}
           {activeTab === 'health-hygiene-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HealthHygieneDashboard />
             </div>
           )}

           {activeTab === 'office-supplies-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <OfficeSuppliesDashboard />
             </div>
           )}
           {activeTab === 'private-label-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PrivateLabelDashboard />
             </div>
           )}
           {activeTab === 'retail-technology-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <RetailTechnologyDashboard />
             </div>
           )}
           {activeTab === 'shopping-behavior-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ShoppingBehaviorDashboard />
             </div>
           )}
           {activeTab === 'sports-leisure-retail-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SportsLeisureRetailDashboard />
             </div>
           )}
           {activeTab === 'subscriptions-direct-selling-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SubscriptionsDirectSellingDashboard />
             </div>
           )}
           {activeTab === 'supply-chain-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SupplyChainDashboard />
             </div>
           )}
           {activeTab === 'wholesale-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <WholesaleDashboard />
             </div>
           )}
           {activeTab === 'business-services-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BusinessServicesDashboard />
             </div>
           )}
           {activeTab === 'skilled-labor-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SkilledLaborDashboard />
             </div>
           )}
           {activeTab === 'crime-law-enforcement-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CrimeLawEnforcementDashboard />
             </div>
           )}
           {activeTab === 'demographics-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DemographicsDashboard />
             </div>
           )}
           {activeTab === 'education-science-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <EducationScienceDashboard />
             </div>
           )}
           {activeTab === 'geography-nature-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <GeographyNatureDashboard />
             </div>
           )}
           {activeTab === 'historical-data-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HistoricalDataDashboard />
             </div>
           )}
           {activeTab === 'art-culture-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ArtCultureDashboard />
             </div>
           )}
           {activeTab === 'gambling-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <GamblingDashboard />
             </div>
           )}
           {activeTab === 'hobbies-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HobbiesDashboard />
             </div>
           )}
           {activeTab === 'parks-outdoors-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ParksOutdoorsDashboard />
             </div>
           )}
           {activeTab === 'professional-sports-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ProfessionalSportsDashboard />
             </div>
           )}
           {activeTab === 'sports-fitness-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SportsFitnessDashboard />
             </div>
           )}
           {activeTab === 'wellness-spas-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <WellnessSpasDashboard />
             </div>
           )}
           {activeTab === 'consumer-electronics-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ConsumerElectronicsDashboard />
             </div>
           )}
           {activeTab === 'hardware-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HardwareDashboard />
             </div>
           )}
           {activeTab === 'household-appliances-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <HouseholdAppliancesDashboard />
             </div>
           )}
           {activeTab === 'it-services-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ITServicesDashboard />
             </div>
           )}
           {activeTab === 'software-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SoftwareDashboard />
             </div>
           )}
           {activeTab === 'telecommunications-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <TelecommunicationsDashboard />
             </div>
           )}
           {activeTab === 'aviation-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AviationDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'logistics-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <LogisticsDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'public-transport-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PublicTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'rail-transport-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <RailTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'vehicles-road-traffic-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <VehiclesRoadTrafficDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'water-transport-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <WaterTransportDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="النقل واللوجستيات" />
             </div>
           )}
           {activeTab === 'accommodation-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AccommodationDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />
             </div>
           )}
           {activeTab === 'business-travel-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BusinessTravelDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />
             </div>
           )}
           {activeTab === 'food-drink-services-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FoodDrinkServicesDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />
             </div>
           )}
           {activeTab === 'leisure-travel-dashboard' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <LeisureTravelDashboard onBack={() => setActiveTab('discovery-center')} parentCategory="السياحة والضيافة" />
             </div>
           )}
                   {activeTab === 'b2b-ecommerce-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <B2BEcommerceDashboard />
            </div>
          )}
                   {activeTab === 'b2c-ecommerce-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <B2CEcommerceDashboard />
            </div>
          )}
                   {activeTab === 'c2c-ecommerce-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <C2CEcommerceDashboard />
            </div>
          )}
                   {activeTab === 'digital-shopping-behaviour-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <DigitalShoppingBehaviourDashboard />
            </div>
          )}
                   {activeTab === 'ecommerce-key-figures-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ECommerceKeyFiguresDashboard />
            </div>
          )}
                   {activeTab === 'paid-content-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PaidContentDashboard />
            </div>
          )}
           {activeTab === 'seo-content-marketing' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SearchEngineOptimizationContentMarketingDashboard />
             </div>
           )}
           {activeTab === 'agritech' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AgriculturalTechnologyAgritechDashboard />
             </div>
           )}
           {activeTab === 'smart-farming' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SmartFarmingDashboard />
             </div>
           )}
           {activeTab === 'seeds-crop-protection' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SeedsCropProtectionDashboard />
             </div>
           )}
           {activeTab === 'recycled-materials' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <RecycledMaterialsDashboard />
             </div>
           )}
           {activeTab === 'battery-materials' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BatteryMaterialsDashboard />
             </div>
           )}
           {activeTab === 'sustainable-consumer-goods' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SustainableConsumerGoodsDashboard />
             </div>
           )}
           {activeTab === 'packaged-foods' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PackagedFoodsDashboard />
             </div>
           )}
           {activeTab === 'online-marketplaces' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <OnlineMarketplacesDashboard />
             </div>
           )}
           {activeTab === 'cross-border-ecommerce' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CrossBorderEcommerceDashboard />
             </div>
           )}
           {activeTab === 'social-commerce' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <SocialCommerceDashboard />
             </div>
           )}
           {activeTab === 'fintech' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <FinancialTechnologyFintechDashboard />
             </div>
           )}
           {activeTab === 'digital-payments' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DigitalPaymentsDashboard />
             </div>
           )}
           {activeTab === 'wealth-management' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <WealthManagementDashboard />
             </div>
           )}
           {activeTab === 'biotechnology' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <BiotechnologyDashboard />
             </div>
           )}
           {activeTab === 'digital-health' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DigitalHealthDashboard />
             </div>
           )}
           {activeTab === 'mental-health-services' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MentalHealthServicesDashboard />
             </div>
           )}
           {activeTab === 'ai-platforms' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AiPlatformsDashboard />
             </div>
           )}
           {activeTab === 'cloud-services-internet' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <CloudServicesDashboard />
             </div>
           )}
           {activeTab === 'streaming-platforms' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <StreamingPlatformsDashboard />
             </div>
           )}
           {activeTab === 'podcast-industry' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <PodcastIndustryDashboard />
             </div>
           )}
           {activeTab === 'digital-publishing' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <DigitalPublishingDashboard />
             </div>
           )}
           {activeTab === 'artificial-intelligence-new' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ArtificialIntelligenceDashboard />
             </div>
           )}
           {activeTab === 'ev-infrastructure' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <ElectricVehicleEvInfrastructureDashboard />
             </div>
           )}
           {activeTab === 'autonomous-vehicles' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <AutonomousVehiclesDashboard />
             </div>
           )}
           {activeTab === 'medical-tourism' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <MedicalTourismDashboard />
             </div>
           )}
           {activeTab === 'travel-tech' && (
             <div className="animate-in slide-in-from-bottom-4 duration-700">
                <TravelTechnologyDashboard />
             </div>
           )}
                   {activeTab === 'non-alcoholic-beverages-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <NonAlcoholicBeveragesDashboard />
            </div>
          )}
                   {activeTab === 'economy-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <EconomyDashboard />
            </div>
          )}
                   {activeTab === 'international-trade-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <InternationalTradeDashboard />
            </div>
          )}
                   {activeTab === 'politics-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PoliticsDashboard />
            </div>
          )}
                   {activeTab === 'climate-weather-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <ClimateWeatherDashboard />
            </div>
          )}
                   {activeTab === 'emissions-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <EmissionsDashboard />
            </div>
          )}
                   {activeTab === 'energy-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <EnergyDashboard />
            </div>
          )}
                   {activeTab === 'greentech-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <GreentechDashboard />
            </div>
          )}
                   {activeTab === 'waste-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <WasteDashboard />
            </div>
          )}
                   {activeTab === 'water-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <WaterDashboard />
            </div>
          )}
                   {activeTab === 'financial-institutions-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <FinancialInstitutionsDashboard />
            </div>
          )}
                   {activeTab === 'investments-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <InvestmentsDashboard />
            </div>
          )}
                   {activeTab === 'pharma-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <PharmaDashboard />
            </div>
          )}
                   {activeTab === 'healthcare-dashboard' && (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <HealthCareDashboard />
            </div>
          )}
        </div>
      </div>
    </main>

      {isTourRunning && (
        <SiteTour
          onComplete={() => setIsTourRunning(false)}
          onSkip={() => setIsTourRunning(false)}
        />
      )}

      {/* 3. Mobile Menu (Hamburger) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdminMode={adminTabs.includes(activeTab)}
      />

      {/* 4. Bottom Navigation (Mobile Only) */}
      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
