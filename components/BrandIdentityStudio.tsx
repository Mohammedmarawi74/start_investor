
import React, { useState } from 'react';
import { 
  Palette, Sparkles, Type, Image as ImageIcon, Download, 
  RefreshCw, Layers, Check, Zap, Layout, CreditCard,
  Target, Wand2, ChevronLeft, SlidersHorizontal, CheckCircle2
} from 'lucide-react';
import { generateBrandImage } from '../services/geminiService';

interface PaletteOption {
  id: string;
  name: string;
  colors: string[];
}

const COLOR_PALETTES: PaletteOption[] = [
  { id: '1', name: 'التقني الحديث', colors: ['#0052FF', '#8B5CF6', '#3B82F6', '#F8FAFC'] },
  { id: '2', name: 'الفخامة الهادئة', colors: ['#0F172A', '#CBD5E1', '#334155', '#F1F5F9'] },
  { id: '3', name: 'الحيوية والنمو', colors: ['#10B981', '#34D399', '#059669', '#F0FDF4'] },
  { id: '4', name: 'الإبداع الجريء', colors: ['#EC4899', '#F43F5E', '#8B5CF6', '#FFF1F2'] }
];

export const BrandIdentityStudio: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedPalette, setSelectedPalette] = useState<string>('1');
  const [generatedLogos, setGeneratedLogos] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleGenerateLogo = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const palette = COLOR_PALETTES.find(p => p.id === selectedPalette);
      const stylePrompt = `Logo design, ${prompt}, using colors ${palette?.colors.join(', ')}. Professional, minimalist, high quality, vector style.`;
      const imageUrl = await generateBrandImage(stylePrompt, "professional brand logo");
      setGeneratedLogos(prev => [imageUrl, ...prev]);
      setActiveStep(3);
    } catch (err) {
      alert("حدث خطأ أثناء توليد الشعار. يرجى المحاولة لاحقاً.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="font-['IBM_Plex_Sans_Arabic'] space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24 bg-gradient-to-br from-[#FAFAF9] via-white to-[#F8FAFC] min-h-screen p-4 lg:p-8 rounded-[32px]">
      
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0052FF]/10 text-[#0052FF] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md border border-[#0052FF]/20 shadow-[0_4px_20px_rgba(0,82,255,0.15)]">
            <Sparkles size={14} />
            AI Visual Studio
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight drop-shadow-sm">استوديو الهوية البصرية</h1>
          <p className="text-slate-500 font-normal text-lg max-w-xl leading-relaxed">حوّل رؤيتك الاستراتيجية إلى واقع بصري مذهل، معتمداً على أدق معايير التصميم الاحترافي.</p>
        </div>
        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-xl p-3 rounded-[20px] border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <div className="flex -space-x-3 overflow-hidden flex-row-reverse">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=brand${i}`} alt="Sample Logo" />
              </div>
            ))}
          </div>
          <div className="flex flex-col px-2 text-right">
             <span className="text-[14px] font-bold text-slate-800 leading-none">1,240+</span>
             <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">هوية مبنية</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Control Panel (Lg 4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Concept Brief Card */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white scroll-smooth shadow-[0_8px_32px_rgba(0,82,255,0.04)] rounded-[24px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052FF]/5 rounded-bl-[100px] pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 bg-[#0052FF]/10 text-[#0052FF] rounded-2xl flex items-center justify-center shadow-inner">
                <Target size={22} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="text-lg font-bold text-slate-900">مفهوم العلامة</h3>
                 <p className="text-[11px] font-normal text-slate-400">صف رؤيتك بدقة</p>
              </div>
            </div>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="مثلاً: تطبيق مالي ذكي يعتمد على الأمان والسرعة، شعار يعبر عن الثقة والابتكار التكنولوجي..."
              className="w-full h-32 p-5 bg-slate-50/50 border border-slate-200/60 rounded-[16px] outline-none focus:bg-white focus:border-[#0052FF]/50 focus:ring-4 focus:ring-[#0052FF]/10 transition-all font-normal text-sm leading-relaxed text-slate-700 resize-none shadow-inner"
            />
          </div>

          {/* Color Palette Widget */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-[0_8px_32px_rgba(0,82,255,0.04)] rounded-[24px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-bl-[100px] pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 bg-violet-500/10 text-violet-600 rounded-2xl flex items-center justify-center shadow-inner">
                <SlidersHorizontal size={22} strokeWidth={2.5} />
              </div>
              <div>
                 <h3 className="text-lg font-bold text-slate-900">التكوين اللوني</h3>
                 <p className="text-[11px] font-normal text-slate-400">اختر النغمة البصرية</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 relative z-10">
              {COLOR_PALETTES.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedPalette(p.id)}
                  className={`relative w-full p-4 rounded-[16px] border transition-all duration-300 flex items-center justify-between group overflow-hidden ${
                    selectedPalette === p.id 
                      ? 'bg-white border-[#0052FF]/30 shadow-[0_4px_20px_rgba(0,82,255,0.08)] ring-1 ring-[#0052FF]/10' 
                      : 'bg-slate-50/50 border-slate-200/60 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  {selectedPalette === p.id && <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/5 to-transparent pointer-events-none"></div>}
                  <span className={`text-sm font-bold transition-colors z-10 ${selectedPalette === p.id ? 'text-[#0052FF]' : 'text-slate-600 group-hover:text-slate-900'}`}>{p.name}</span>
                  
                  <div className="flex items-center gap-1 z-10">
                    <div className="flex -space-x-2 mr-3">
                       {p.colors.map((c, i) => (
                         <div key={i} className="w-6 h-6 rounded-full border-2 border-white shadow-sm transition-transform hover:-translate-y-1" style={{ backgroundColor: c, zIndex: 10 - i }}></div>
                       ))}
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${selectedPalette === p.id ? 'bg-[#0052FF] text-white scale-100' : 'bg-slate-200 text-transparent scale-75'}`}>
                       <Check size={12} strokeWidth={4} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <button 
            onClick={handleGenerateLogo}
            disabled={isGenerating || !prompt}
            className="w-full py-5 bg-gradient-to-r from-[#0052FF] to-violet-600 text-white rounded-[24px] text-[15px] font-bold shadow-[0_15px_30px_rgba(0,82,255,0.3)] hover:shadow-[0_20px_40px_rgba(0,82,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
            {isGenerating ? <RefreshCw size={22} className="animate-spin" /> : <Wand2 size={22} className="group-hover:rotate-12 transition-transform" />}
            توليد الهوية البصرية الذكية
          </button>
        </div>

        {/* Right Preview Section (Lg 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Main Showcase */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[24px] min-h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col relative overflow-hidden p-2">
            
            {/* Soft Ambient Canvas Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] opacity-50 pointer-events-none"></div>

            <div className="flex-1 rounded-[20px] bg-white border border-slate-50 p-10 flex text-center items-center justify-center relative z-10 shadow-sm overflow-hidden">
               {/* Decorative Canvas elements */}
               <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-slate-200"></div>
               <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-slate-200"></div>
               <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-slate-200"></div>
               <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-slate-200"></div>
               
               {generatedLogos.length === 0 ? (
                 <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700 max-w-md">
                   <div className="w-24 h-24 bg-slate-50 rounded-[24px] flex items-center justify-center text-slate-300 mx-auto border-2 border-dashed border-slate-200">
                      <ImageIcon size={40} strokeWidth={1.5} />
                   </div>
                   <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-slate-800">قماش العرض البصري</h2>
                      <p className="text-slate-400 font-normal text-sm leading-relaxed">بمجرد بدء التوليد، ستظهر مسودات الهوية البصرية هنا في هذه المساحة الواسعة لتقييمها بشكل احترافي.</p>
                   </div>
                 </div>
               ) : (
                 <div className="w-full h-full flex flex-col animate-in zoom-in-95 duration-500">
                   <div className="flex-1 w-full bg-slate-50/50 rounded-[16px] border border-slate-100 flex items-center justify-center p-8 group relative overflow-hidden shadow-inner">
                      <img src={generatedLogos[0]} className="w-full max-w-[400px] aspect-square object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="AI Generated Logo" />
                      <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-md rounded-xl text-[#0052FF] shadow-[0_8px_30px_rgba(0,82,255,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <Download size={20} className="cursor-pointer hover:scale-110 transition-transform"/>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-4 gap-4 mt-6">
                       {[
                         { icon: Layout, label: 'UI Mockups' },
                         { icon: CreditCard, label: 'Business Cards' },
                         { icon: Layers, label: 'Social Media' },
                         { icon: Type, label: 'Typography' }
                       ].map((m, idx) => (
                         <div key={idx} className="bg-white border border-slate-100 rounded-[16px] p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-[#0052FF]/30 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,82,255,0.06)] cursor-pointer group">
                            <m.icon size={20} className="text-slate-400 group-hover:text-[#0052FF] mb-2 transition-colors" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{m.label}</span>
                         </div>
                       ))}
                   </div>
                 </div>
               )}
            </div>
            
            {/* Visual Consistency Floating Glass Overlay */}
            {generatedLogos.length > 0 && (
               <div className="absolute bottom-32 right-8 w-80 bg-white/60 backdrop-blur-3xl border border-white p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-in slide-in-from-right-8 duration-700">
                  <div className="flex items-start justify-between">
                     <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#0052FF]">
                           <Zap size={16} fill="currentColor" />
                           <h4 className="text-sm font-bold text-slate-900">الاتساق البصري</h4>
                        </div>
                        <p className="text-[10px] font-normal text-slate-500 leading-relaxed max-w-[180px]">
                           تطابق بصري مثالي بنسبة عالية بين الألوان والشكل. الهوية جاهزة للاستخدام التجاري.
                        </p>
                     </div>
                     {/* Circular Progress Glow */}
                     <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#0052FF]/20 rounded-full blur-xl animate-pulse"></div>
                        <svg className="w-full h-full transform -rotate-90 relative z-10">
                           <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/50" />
                           <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175.9" strokeDashoffset={175.9 * (1 - 0.94)} className="text-[#0052FF] drop-shadow-[0_0_8px_rgba(0,82,255,0.8)]" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-sm font-black tracking-tighter text-slate-800 z-10">94</span>
                     </div>
                  </div>
               </div>
            )}
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Sleek Footer Info */}
      <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[24px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
         <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-[16px] flex items-center justify-center flex-shrink-0 border border-slate-100 shadow-inner">
               <ImageIcon size={26} strokeWidth={1.5} />
            </div>
            <div>
               <h4 className="text-lg font-bold text-slate-900 mb-1">هل تمتلك شعاراً حالياً؟</h4>
               <p className="text-slate-500 font-normal text-xs leading-relaxed max-w-md">قم برفع هويتك الحالية وسيتولى الذكاء الاصطناعي استخلاص الأنماط والألوان لتوحيد أعمالك البصرية فوراً.</p>
            </div>
         </div>
         <button className="flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-[16px] text-xs font-bold hover:bg-black hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 transition-all group">
            رفع ملف الهوية
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
         </button>
      </div>

    </div>
  );
};

const CheckCircle = ({ size }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
