
import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Type, 
  Image as ImageIcon, 
  Download, 
  RefreshCw, 
  Layers, 
  Check, 
  Zap, 
  Layout, 
  CreditCard,
  Target,
  Wand2,
  ChevronLeft
} from 'lucide-react';
import { generateBrandImage } from '../services/geminiService';

interface PaletteOption {
  id: string;
  name: string;
  colors: string[];
}

const COLOR_PALETTES: PaletteOption[] = [
  { id: '1', name: 'التقني الحديث', colors: ['#2563eb', '#1e40af', '#60a5fa', '#f8fafc'] },
  { id: '2', name: 'الفخامة الهادئة', colors: ['#1e1e1e', '#c5a059', '#3a3a3a', '#ffffff'] },
  { id: '3', name: 'الحيوية والنمو', colors: ['#059669', '#10b981', '#34d399', '#f0fdf4'] },
  { id: '4', name: 'الإبداع الجريء', colors: ['#7c3aed', '#ec4899', '#f43f5e', '#fff1f2'] }
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
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-24">
      
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-purple-100">
            <Sparkles size={12} />
            AI Creative Engine
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">استوديو الهوية البصرية</h1>
          <p className="text-gray-400 font-bold text-lg max-w-xl">حوّل رؤيتك الاستراتيجية إلى واقع بصري مذهل في ثوانٍ معدودة.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 overflow-hidden flex-row-reverse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm">
                <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${i}`} alt="Sample Logo" />
              </div>
            ))}
          </div>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">+1k توليد ناجح</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Control Panel (Lg 4) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Step 1: Concept Brief */}
          <div className={`bg-white border rounded-[2.5rem] p-8 shadow-sm transition-all duration-500 ${activeStep === 1 ? 'border-primary-200 ring-8 ring-primary-50/50' : 'border-gray-100'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center">
                <Target size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">مفهوم العلامة</h3>
            </div>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="صف مشروعك بكلمات بسيطة.. (مثلاً: تطبيق توصيل ذكي يتميز بالسرعة والأمان، شعار عصري يعبر عن الانطلاق)"
              className="w-full h-32 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:bg-white focus:border-primary-500 transition-all font-bold text-xs leading-relaxed"
            />
          </div>

          {/* Step 2: Visual Style */}
          <div className={`bg-white border rounded-[2.5rem] p-8 shadow-sm transition-all duration-500 ${activeStep === 2 ? 'border-purple-200 ring-8 ring-purple-50/50' : 'border-gray-100'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                <Palette size={20} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">لوحة الألوان</h3>
            </div>
            <div className="space-y-4">
              {COLOR_PALETTES.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => { setSelectedPalette(p.id); setActiveStep(2); }}
                  className={`w-full group p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    selectedPalette === p.id ? 'bg-purple-50 border-purple-200' : 'bg-white border-gray-100 hover:border-purple-100'
                  }`}
                >
                  <span className={`text-xs font-bold transition-colors ${selectedPalette === p.id ? 'text-purple-700' : 'text-gray-500'}`}>{p.name}</span>
                  <div className="flex items-center gap-1.5">
                    {p.colors.map((c, i) => (
                      <div key={i} className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }}></div>
                    ))}
                    {selectedPalette === p.id && <div className="ml-2 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center"><Check size={12} strokeWidth={4} /></div>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleGenerateLogo}
            disabled={isGenerating || !prompt}
            className="w-full py-5 bg-gray-900 text-white rounded-3xl text-sm font-bold shadow-2xl hover:bg-black hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
          >
            {isGenerating ? <RefreshCw size={20} className="animate-spin" /> : <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />}
            توليد الهوية البصرية الآن
          </button>
        </div>

        {/* Right Preview Section (Lg 8) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Main Showcase */}
          <div className="bg-white border border-gray-100 rounded-[3rem] p-10 min-h-[500px] shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center">
            {generatedLogos.length === 0 ? (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-32 h-32 bg-gray-50 rounded-[3rem] flex items-center justify-center text-gray-200 mx-auto border-4 border-dashed border-gray-100">
                   <ImageIcon size={60} strokeWidth={1} />
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-2">معاينة الهوية</h2>
                   <p className="text-gray-400 font-bold text-sm max-w-sm mx-auto leading-relaxed">بمجرد الضغط على زر التوليد، ستظهر هنا مسودة أولية لشعارك مدمجة مع الألوان التي اخترتها.</p>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-12 animate-in zoom-in-95 duration-500">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative bg-white border border-gray-100 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all">
                       <img src={generatedLogos[0]} className="w-full aspect-square object-cover rounded-[1.8rem]" alt="AI Logo" />
                       <div className="absolute top-6 left-6 p-2 bg-white/80 backdrop-blur-md rounded-xl text-primary-600 shadow-lg">
                          <CheckCircle size={20} />
                       </div>
                       <div className="mt-4 flex items-center justify-between px-2">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">الشعار المعتمد</span>
                          <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors"><Download size={18} /></button>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { icon: CreditCard, label: 'بطاقات عمل', color: 'bg-indigo-50 text-indigo-600' },
                         { icon: Layout, label: 'واجهة الموقع', color: 'bg-emerald-50 text-emerald-600' },
                         { icon: Layers, label: 'تواصل اجتماعي', color: 'bg-rose-50 text-rose-600' },
                         { icon: Type, label: 'مطويات', color: 'bg-amber-50 text-amber-600' }
                       ].map((m, idx) => (
                         <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md transition-all group cursor-pointer">
                            <div className={`w-12 h-12 ${m.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                               <m.icon size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{m.label}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            )}
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          </div>

          {/* Style Board Section */}
          <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary-400">
                         <Zap size={22} />
                      </div>
                      <h4 className="text-xl font-bold tracking-tight">تحليل التناسق البصري</h4>
                   </div>
                   <p className="text-gray-400 font-bold text-sm leading-relaxed max-w-xl">
                     بناءً على اختيارك لمجموعة "التقني الحديث"، يقترح الذكاء الاصطناعي استخدام خطوط (San Serif) بوزن عريض للعناوين، وتدرجات لونية بنسبة 70/30 لتحقيق التوازن البصري المطلوب.
                   </p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                         <span className="text-2xl font-bold text-white">94</span>
                      </div>
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">معدل التناسق</span>
                   </div>
                </div>
             </div>
             {/* Abstract Grid Background */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          </div>

        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-white border border-gray-100 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.5rem] flex items-center justify-center flex-shrink-0">
               <ImageIcon size={32} />
            </div>
            <div>
               <h4 className="text-xl font-bold text-gray-900 mb-1">هل لديك شعار جاهز؟</h4>
               <p className="text-gray-400 font-bold text-sm leading-relaxed">يمكنك تحميل شعارك الحالي وسيقوم النظام باستخلاص الألوان والأنماط منه تلقائياً.</p>
            </div>
         </div>
         <button className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-bold hover:bg-black transition-all group">
            رفع الشعار
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
