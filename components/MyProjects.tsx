
import React, { useState, useMemo } from 'react';
import { 
  FolderRoot, Search, Filter, Plus, 
  MoreVertical, Clock, CheckCircle2, 
  TrendingUp, BrainCircuit, LayoutGrid, 
  Target, Zap, Share2, Trash2, 
  FileDown, ArrowRight, Star
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  sector: string;
  status: 'ready' | 'review' | 'draft';
  progress: {
    market: number;
    product: number;
    financial: number;
  };
  aiScore: number;
  lastEdited: string;
  marketCap: string;
  isFavorite: boolean;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1', name: 'أكاديمية الذكاء الاصطناعي', sector: 'EdTech', status: 'ready',
    progress: { market: 100, product: 90, financial: 95 },
    aiScore: 94, lastEdited: 'منذ ساعتين', marketCap: '$1.4M', isFavorite: true
  },
  {
    id: 'p2', name: 'منصة الحصاد الذكي', sector: 'AgriTech', status: 'review',
    progress: { market: 85, product: 70, financial: 40 },
    aiScore: 78, lastEdited: 'منذ 5 ساعات', marketCap: '$800K', isFavorite: false
  },
  {
    id: 'p3', name: 'بوابة الدفع الإقليمية', sector: 'FinTech', status: 'draft',
    progress: { market: 40, product: 20, financial: 10 },
    aiScore: 45, lastEdited: 'أمس', marketCap: '$5.2M', isFavorite: false
  },
  {
    id: 'p4', name: 'عقارات فيرتشوال', sector: 'Property', status: 'ready',
    progress: { market: 100, product: 100, financial: 90 },
    aiScore: 91, lastEdited: 'منذ يومين', marketCap: '$12M', isFavorite: true
  }
];

export const MyProjects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'ready' | 'draft'>('all');

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter(p => {
      const matchSearch = p.name.includes(searchTerm) || p.sector.includes(searchTerm);
      const matchFilter = filterMode === 'all' ? true : p.status === filterMode;
      return matchSearch && matchFilter;
    });
  }, [searchTerm, filterMode]);

  return (
    <div dir="rtl" className="min-h-screen pb-20 font-['IBM_Plex_Sans_Arabic'] animate-in fade-in duration-700">
      
      {/* Mini-Stat Strip - More Professional & Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
           <div className="text-center lg:text-right w-full lg:w-auto">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 leading-none uppercase tracking-tight">إدارة مشاريعي الاستثمارية</h1>
              <p className="text-[12px] sm:text-sm font-bold text-slate-400">تابع تقدم {MOCK_PROJECTS.length} خطط أعمال استراتيجية تحت مجهر الذكاء الاصطناعي.</p>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden ring-1 ring-black/5">
              <div className="relative group w-full sm:min-w-[280px]">
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={16} />
                 <input 
                   type="text" 
                   placeholder="ابحث سرياً..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full pr-12 pl-4 py-3 bg-slate-50 border-none rounded-xl sm:rounded-2xl outline-none text-xs font-bold text-slate-800 focus:bg-white transition-all ring-1 ring-transparent focus:ring-blue-100"
                 />
              </div>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-xl sm:rounded-2xl text-xs font-black shadow-lg shadow-blue-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
                 <Plus size={18} strokeWidth={3} />
                 <span>مشروع جديد</span>
              </button>
           </div>
        </div>
      </div>

      {/* Grid Container - Higher Density */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {filteredProjects.map(project => (
           <ProjectCard key={project.id} project={project} />
         ))}
         
         <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 group hover:border-blue-400 transition-all cursor-pointer hover:bg-blue-50/20">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4">
               <Plus size={24} strokeWidth={3} />
            </div>
            <span className="text-xs font-black text-slate-400 group-hover:text-blue-600">إضافة مشروع</span>
         </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-white border border-slate-100 rounded-3xl p-5 hover:border-blue-600 hover:shadow-[0_20px_60px_rgba(37,99,235,0.06)] transition-all duration-300 relative">
       {/* Favorite Toggle */}
       <button className={`absolute top-4 left-4 z-20 p-2 rounded-lg transition-all ${project.isFavorite ? 'text-amber-400 bg-amber-50' : 'text-slate-300 hover:text-amber-400 bg-transparent'}`}>
          <Star size={14} fill={project.isFavorite ? 'currentColor' : 'none'} strokeWidth={3} />
       </button>

       {/* Icon & Category */}
       <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 bg-slate-900 text-white rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-[-4deg]">
             <LayoutGrid size={22} strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
             <h3 className="text-sm font-black text-slate-900 truncate mb-0.5 group-hover:text-blue-600 transition-colors">{project.name}</h3>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{project.sector}</span>
          </div>
       </div>

       {/* Status & Readiness */}
       <div className="flex items-center justify-between mb-6 bg-slate-50/50 p-3 rounded-2xl border border-slate-50">
          <div className="flex flex-col">
             <span className="text-[8px] font-black text-slate-400 uppercase mb-0.5">جاهزية التمويل</span>
             <span className="text-lg font-black text-slate-900">{project.aiScore}%</span>
          </div>
          <div className={`p-2 rounded-xl border flex items-center justify-center ${project.status === 'ready' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : project.status === 'review' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
             {project.status === 'ready' ? <CheckCircle2 size={16} /> : project.status === 'review' ? <Clock size={16} /> : <TrendingUp size={16} />}
          </div>
       </div>

       {/* Progress Bar Layered */}
       <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase">
             <span>اكتمال الأقسام</span>
             <span className="text-blue-600">{Math.round((project.progress.market + project.progress.product + project.progress.financial) / 3)}%</span>
          </div>
          <div className="flex items-center gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-[2px]">
             <div className="h-full bg-blue-600 rounded-full" style={{ width: `${project.progress.market / 3}%` }}></div>
             <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${project.progress.product / 3}%` }}></div>
             <div className="h-full bg-amber-500 rounded-full" style={{ width: `${project.progress.financial / 3}%` }}></div>
          </div>
       </div>

       {/* Action Buttons Hub - Compact */}
       <div className="flex items-center gap-2 pt-4 border-t border-slate-50 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-100">
             <span>فتح الخطة</span>
             <ArrowRight size={14} strokeWidth={3} />
          </button>
          
          <div className="flex gap-1">
             <ActionIcon icon={<Share2 size={14} />} color="blue" />
             <ActionIcon icon={<FileDown size={14} />} color="slate" />
             <ActionIcon icon={<Trash2 size={14} />} color="red" />
          </div>
       </div>

       {/* Last Edited Footer - Hidden on Hover to save space */}
       <div className="flex items-center justify-center gap-1.5 text-[9px] font-black text-slate-300 mt-4 group-hover:opacity-0 transition-opacity">
          <Clock size={10} />
          <span>آخر تعديل {project.lastEdited}</span>
       </div>
    </div>
  );
};

const ActionIcon = ({ icon, color }: { icon: React.ReactNode, color: string }) => {
  const styles: any = {
    blue: 'text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white',
    slate: 'text-slate-400 bg-slate-50 hover:bg-slate-800 hover:text-white',
    red: 'text-red-600 bg-red-50 hover:bg-red-600 hover:text-white'
  };
  return (
    <button className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${styles[color]}`}>
       {icon}
    </button>
  );
};
