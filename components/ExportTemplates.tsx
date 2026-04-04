
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Settings2,
  Presentation,
  FileCode,
  Check,
  Plus,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  type: 'PDF' | 'PPTX' | 'DOCX';
  category: 'Investor' | 'Bank' | 'Lean';
  image: string;
  description: string;
}

const TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'النموذج الاستثماري التقني',
    type: 'PDF',
    category: 'Investor',
    image: '/investor_template_mockup_1775307219319.png',
    description: 'قالب كلاسيكي استثنائي.'
  },
  {
    id: '2',
    name: 'القالب الرسمي للبنوك',
    type: 'PDF',
    category: 'Bank',
    image: '/bank_template_mockup_1775307234164.png',
    description: 'تصميم رصين للجداول المالية.'
  },
  {
    id: '3',
    name: 'عرض المصعد (Pitch Deck)',
    type: 'PPTX',
    category: 'Investor',
    image: '/pitch_deck_mockup_1775307247127.png',
    description: 'شرائح عرض بصرية مكثفة.'
  },
  {
    id: '4',
    name: 'تقرير الحالة السنوي',
    type: 'DOCX',
    category: 'Lean',
    image: '/annual_report_mockup_1775307267245.png',
    description: 'تقرير متابعة الأداء السنوي.'
  }
];

export const ExportTemplates: React.FC = () => {
  const [selectedId, setSelectedId] = useState('1');
  const [brandColor, setBrandColor] = useState('#2563eb');
  const [sections, setSections] = useState({ summary: true, financials: true, marketing: false, swot: true });

  const toggleSection = (key: keyof typeof sections) => setSections(prev => ({ ...prev, [key]: !prev[key] }));
  const selectedTemplate = TEMPLATES.find(t => t.id === selectedId);

  return (
    <div dir="rtl" className="min-h-[calc(100vh-100px)] bg-[#F8FAFC] font-['IBM_Plex_Sans_Arabic'] text-slate-900 animate-in fade-in duration-700 flex flex-col lg:flex-row shadow-inner relative overflow-hidden">
      
      {/* 1. COMPACT SIDEBAR */}
      <aside className="w-full lg:w-72 bg-white border-l border-slate-100 flex flex-col shrink-0 z-10 shadow-sm">
        <div className="p-6 lg:p-7 border-b border-slate-50">
           <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100">
                 <Settings2 size={16} />
              </div>
              <h2 className="text-md font-black text-slate-950">تخصيص التصدير</h2>
           </div>

           <div className="space-y-4 mb-6">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">لون الهوية</label>
              <div className="flex flex-wrap gap-2">
                 {['#2563eb', '#7c3aed', '#059669', '#dc2626', '#1e293b'].map(color => (
                    <button key={color} onClick={() => setBrandColor(color)} className={`w-6 h-6 rounded-full border-2 transition-all ${brandColor === color ? 'border-slate-900 scale-110' : 'border-transparent'}`} style={{ backgroundColor: color }} />
                 ))}
              </div>
           </div>

           <div className="space-y-1.5">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">الأقسام</label>
              {Object.keys(sections).map(key => (
                 <button key={key} onClick={() => toggleSection(key as any)} className={`w-full flex items-center justify-between p-3 rounded-xl transition-all border ${sections[key as keyof typeof sections] ? 'bg-blue-50 border-blue-100 text-blue-900' : 'bg-transparent border-transparent text-slate-400'}`}>
                    <span className="text-[12px] font-black">{key === 'summary' ? 'الملخص' : key === 'financials' ? 'المالية' : key === 'marketing' ? 'التسويق' : 'SWOT'}</span>
                    <div className={`w-8 h-4 rounded-full relative ${sections[key as keyof typeof sections] ? 'bg-blue-600' : 'bg-slate-200'}`}>
                       <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${sections[key as keyof typeof sections] ? 'left-0.5' : 'left-4.5'}`}></div>
                    </div>
                 </button>
              ))}
           </div>
        </div>

        <div className="p-6 bg-slate-50/50 mt-auto">
           <button className="w-full py-3.5 bg-slate-950 text-white rounded-xl font-black text-xs shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all group">
              <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              توليد الملف
           </button>
        </div>
      </aside>

      {/* 2. MAIN GALLERY AREA */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8">
        <header className="mb-6">
           <h2 className="text-xl lg:text-2xl font-black text-slate-950 mb-1 tracking-tight">استوديو القوالب <span className="text-blue-600">الاحترافية</span></h2>
           <p className="text-slate-400 font-bold text-[12px]">قوالب بمعايير استشارية لإبهار المستثمرين.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
           {TEMPLATES.map(template => (
              <div key={template.id} onClick={() => setSelectedId(template.id)} className={`group relative bg-white border rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${selectedId === template.id ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'}`}>
                 <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
                    <img src={template.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg border border-white/50 shadow-sm flex items-center gap-2">
                       {template.type === 'PDF' && <FileText size={10} className="text-rose-500" />}
                       <span className="text-[8px] font-black text-slate-700">{template.type}</span>
                    </div>
                    {selectedId === template.id && (
                       <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[1px] flex items-center justify-center">
                          <Check size={32} className="text-blue-600 animate-in zoom-in" strokeWidth={4} />
                       </div>
                    )}
                 </div>
                 <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                       <h3 className="text-md font-black text-slate-900">{template.name}</h3>
                       <span className="text-[7px] font-black bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded-md border">{template.category}</span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold">{template.description}</p>
                 </div>
              </div>
           ))}
        </div>
      </main>

      {/* 3. NEW COMPACT CENTER-BOTTOM SELECTION PILL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 duration-700">
         <div className="bg-slate-900/90 backdrop-blur-xl text-white px-3 py-2.5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 ring-1 ring-slate-800">
            <div className="w-9 h-9 bg-white/10 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-inner">
               <img src={selectedTemplate?.image} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest">القالب النشط</span>
               <h4 className="text-[11px] font-black text-white truncate max-w-[140px]">{selectedTemplate?.name}</h4>
            </div>
            <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
            <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-all font-black text-[10px] whitespace-nowrap">
               Live ⚡
            </button>
         </div>
      </div>

    </div>
  );
};
