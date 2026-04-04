
import React, { useState } from 'react';
import {
  Palette, Sparkles, Type, Image as ImageIcon, Download,
  RefreshCw, Layers, Check, Zap, Layout, CreditCard,
  Target, Wand2, ChevronLeft, SlidersHorizontal, CheckCircle2,
  Smartphone, Monitor, Presentation, Shirt, AppWindow,
  Eye, EyeOff, ClipboardCheck, ArrowUpRight, Briefcase
} from 'lucide-react';
import { generateBrandImage } from '../services/geminiService';

interface PaletteOption {
  id: string;
  name: string;
  colors: string[];
}

const COLOR_PALETTES: PaletteOption[] = [
  { id: '1', name: 'التقني الحديث (Tech Modern)', colors: ['#0052FF', '#8B5CF6', '#3B82F6', '#F8FAFC'] },
  { id: '2', name: 'الفخامة الهادئة (Quiet Luxury)', colors: ['#0F172A', '#CBD5E1', '#334155', '#F1F5F9'] },
  { id: '3', name: 'الحيوية والنمو (Bio Vitality)', colors: ['#10B981', '#34D399', '#059669', '#F0FDF4'] },
  { id: '4', name: 'الإبداع الجريء (Bold Creative)', colors: ['#EC4899', '#F43F5E', '#8B5CF6', '#FFF1F2'] }
];

const BRAND_PERSONALITIES = [
  { id: 'minimalist', label: 'بسيط (Minimalist)', icon: Target },
  { id: 'luxurious', label: 'فاخر (Luxurious)', icon: Sparkles },
  { id: 'playful', label: 'مبتكر (Playful)', icon: Zap },
  { id: 'traditional', label: 'رصين (Traditional)', icon: Briefcase }
];

export const BrandIdentityStudio: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedPalette, setSelectedPalette] = useState<string>('1');
  const [selectedPersonality, setSelectedPersonality] = useState<string>('minimalist');
  const [generatedLogos, setGeneratedLogos] = useState<string[]>([]);
  const [activeMockup, setActiveMockup] = useState<'logo' | 'mobile' | 'card' | 'website'>('logo');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleGenerateLogo = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const palette = COLOR_PALETTES.find(p => p.id === selectedPalette);
      const personality = BRAND_PERSONALITIES.find(p => p.id === selectedPersonality);
      const stylePrompt = `Logo design for ${prompt}, personality: ${personality?.label}, using colors ${palette?.colors.join(', ')}. Professional, minimalist, high quality, vector style, white background.`;
      const imageUrl = await generateBrandImage(stylePrompt, "professional brand logo");
      setGeneratedLogos(prev => [imageUrl, ...prev]);
      setActiveMockup('logo');
    } catch (err) {
      alert("حدث خطأ أثناء توليد الشعار. يرجى المحاولة لاحقاً.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div dir="rtl" className={`font-['IBM_Plex_Sans_Arabic'] min-h-screen transition-colors duration-700 p-4 lg:p-10 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-[#FAFAF9] text-slate-900'}`}>
      
      {/* Immersive Navigation Header */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex-1">
           <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:rotate-12 ${isDarkMode ? 'bg-indigo-600 text-white shadow-indigo-900/50' : 'bg-[#0052FF] text-white shadow-[#0052FF]/30'}`}>
                 <Palette size={24} />
              </div>
              <div>
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-1 inline-block ${isDarkMode ? 'bg-white/5 border-white/10 text-indigo-400' : 'bg-blue-50 border-blue-100 text-[#0052FF]'}`}>Studio Engine v5.0</span>
                 <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">استوديو <span className={isDarkMode ? 'text-indigo-400' : 'text-[#0052FF]'}>الهوية البصرية</span></h1>
              </div>
           </div>
           <p className={`text-lg font-bold max-w-2xl leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              نحن لا نصمم شعارات، بل نبني روحاً بصرية لمشروعك تتحدث لغة التميز والابتكار التنافسي.
           </p>
        </div>

        <div className="flex items-center gap-4">
           <button 
             onClick={() => setIsDarkMode(!isDarkMode)}
             className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isDarkMode ? 'bg-white text-slate-900 shadow-xl' : 'bg-slate-900 text-white shadow-xl hover:bg-slate-800'}`}
           >
              {isDarkMode ? <Eye size={24} /> : <EyeOff size={24} />}
           </button>
           <div className={`p-4 rounded-3xl border flex items-center gap-5 shadow-sm ${isDarkMode ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-100'}`}>
              <div className="text-center">
                 <div className="text-2xl font-black">94%</div>
                 <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">تحقق الاتساق</div>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
              <div className="text-center">
                 <div className="text-2xl font-black">1.2k+</div>
                 <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">هوية مكتملة</div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Strategic Controls (4 Col) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           
           {/* Brief Card */}
           <div className={`rounded-[2.5rem] p-8 border transition-all ${isDarkMode ? 'bg-slate-900/30 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-8">
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-indigo-600/20 text-indigo-400' : 'bg-blue-50 text-[#0052FF]'}`}>
                    <Target size={20} />
                 </div>
                 <h4 className="text-lg font-black italic">جوهر العلامة</h4>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="صف روح علامتك التجارية... (مثال: تطبيق عقاري فندقي فاخر يهتم بالأمان والخصوصية)"
                className={`w-full h-32 p-5 rounded-2xl outline-none border transition-all text-sm font-bold resize-none ${isDarkMode ? 'bg-white/5 border-white/10 focus:border-indigo-400/50' : 'bg-slate-50 border-slate-200 focus:bg-white focus:border-[#0052FF]/50 shadow-inner'}`}
              />
           </div>

           {/* Personality Selector */}
           <div className={`rounded-[2.5rem] p-8 border transition-all ${isDarkMode ? 'bg-slate-900/30 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">طابع الشخصية البصرية</h4>
              <div className="grid grid-cols-2 gap-4">
                 {BRAND_PERSONALITIES.map(p => (
                   <button 
                     key={p.id}
                     onClick={() => setSelectedPersonality(p.id)}
                     className={`p-4 rounded-2xl border text-center transition-all group ${selectedPersonality === p.id 
                       ? (isDarkMode ? 'bg-indigo-600 border-indigo-400' : 'bg-slate-900 border-slate-900 text-white')
                       : (isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-50 border-slate-100 hover:bg-white')}`}
                   >
                      <p.icon size={22} className={`mx-auto mb-2 transition-transform group-hover:scale-110 ${selectedPersonality === p.id ? 'text-white' : 'text-slate-400'}`} />
                      <span className="text-[10px] font-black uppercase">{p.label.split(' ')[0]}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* Palette Selection (Vertical List) */}
           <div className={`rounded-[2.5rem] p-8 border transition-all ${isDarkMode ? 'bg-slate-900/30 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">التكوين السيكولوجي للألوان</h4>
              <div className="space-y-4">
                 {COLOR_PALETTES.map(p => (
                   <button 
                     key={p.id}
                     onClick={() => setSelectedPalette(p.id)}
                     className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all group ${selectedPalette === p.id 
                       ? (isDarkMode ? 'bg-white/10 border-white/20 ring-1 ring-white/10' : 'bg-white border-slate-900 shadow-xl')
                       : (isDarkMode ? 'bg-transparent border-white/5 hover:bg-white/5' : 'bg-slate-50 border-slate-50 hover:bg-white')}`}
                   >
                      <span className="text-xs font-black">{p.name.split(' (')[0]}</span>
                      <div className="flex -space-x-2">
                         {p.colors.map((c, i) => <div key={i} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: c, zIndex: 10 - i }}></div>)}
                      </div>
                   </button>
                 ))}
              </div>
           </div>

           {/* Action CTA */}
           <button 
             onClick={handleGenerateLogo}
             disabled={isGenerating || !prompt}
             className={`w-full py-6 rounded-[2rem] text-sm font-black shadow-2xl transition-all flex items-center justify-center gap-4 group active:scale-95 disabled:opacity-50 ${isDarkMode ? 'bg-indigo-600 text-white shadow-indigo-900/50 hover:bg-indigo-500' : 'bg-[#0052FF] text-white shadow-[#0052FF]/30 hover:bg-blue-600'}`}
           >
              {isGenerating ? <RefreshCw className="animate-spin" /> : <Wand2 className="group-hover:rotate-12 transition-transform" /> }
              توليد الهوية البصرية المدعومة آلياً
           </button>
        </div>

        {/* Right Side: Showcase Workspace (8 Col) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
           
           {/* Immersive Viewport */}
           <div className={`rounded-[4rem] min-h-[650px] border flex flex-col relative overflow-hidden transition-all duration-1000 ${isDarkMode ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
              
              {/* Toolbar Preview Switcher */}
              <div className={`absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-2 rounded-2xl border z-30 ${isDarkMode ? 'bg-slate-950/80 border-white/10 backdrop-blur-xl' : 'bg-white/80 border-slate-100 backdrop-blur-xl'}`}>
                 <MockupModeBtn active={activeMockup === 'logo'} onClick={() => setActiveMockup('logo')} icon={<ImageIcon size={18} />} label="شعار" darkMode={isDarkMode} />
                 <MockupModeBtn active={activeMockup === 'mobile'} onClick={() => setActiveMockup('mobile')} icon={<Smartphone size={18} />} label="موبايل" darkMode={isDarkMode} />
                 <MockupModeBtn active={activeMockup === 'card'} onClick={() => setActiveMockup('card')} icon={<CreditCard size={18} />} label="بزنس" darkMode={isDarkMode} />
                 <MockupModeBtn active={activeMockup === 'website'} onClick={() => setActiveMockup('website')} icon={<Monitor size={18} />} label="موقع" darkMode={isDarkMode} />
              </div>

              {/* Main Content Render */}
              <div className="flex-1 flex items-center justify-center p-12 relative overflow-hidden">
                 {/* Visual Decor */}
                 <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none ${isDarkMode ? 'bg-indigo-400' : 'bg-[#0052FF]'}`}></div>
                 <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none ${isDarkMode ? 'bg-violet-400' : 'bg-indigo-400'}`}></div>

                 {generatedLogos.length === 0 ? (
                   <div className="text-center animate-in zoom-in-95 duration-1000">
                      <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-6 mx-auto ${isDarkMode ? 'bg-white/5 text-white/20' : 'bg-slate-50 text-slate-200'}`}>
                         <ImageIcon size={48} strokeWidth={1.5} />
                      </div>
                      <h3 className={`text-2xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>قماش العرض البصري</h3>
                      <p className="text-slate-400 font-bold text-sm max-w-sm mx-auto leading-relaxed">
                         ابدأ بوصف رؤيتك لاختيار ملامح العلامة وتجسيدها على مختلف المنصات التسويقية هنا.
                      </p>
                   </div>
                 ) : (
                    <div className="w-full max-w-3xl animate-in zoom-in-95 duration-500">
                       {activeMockup === 'logo' && (
                         <div className="flex flex-col items-center">
                            <div className={`relative p-16 rounded-[4rem] group ${isDarkMode ? 'bg-white border-white' : 'bg-slate-50 border-slate-100 shadow-inner border'}`}>
                               <img src={generatedLogos[0]} className="w-64 h-64 object-contain transition-transform duration-700 group-hover:scale-105" alt="AI Generated Logo" />
                               <button className={`absolute top-8 left-8 p-3 rounded-2xl shadow-xl transition-all opacity-0 group-hover:opacity-100 ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-white'}`}>
                                  <Download size={20} />
                               </button>
                            </div>
                         </div>
                       )}

                       {activeMockup === 'mobile' && (
                         <div className="relative w-72 h-[550px] mx-auto bg-slate-950 border-[6px] border-slate-800 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden animate-in slide-in-from-bottom-12">
                            <div className="absolute top-0 inset-x-0 h-7 bg-slate-950 flex justify-center z-20"><div className="w-20 h-5 bg-slate-800 rounded-b-xl"></div></div>
                            <div className="h-full bg-slate-100 p-6 flex flex-col items-center justify-center relative bg-white">
                               <img src={generatedLogos[0]} className="w-32 h-32 object-contain mb-8 opacity-90" alt="Identity" />
                               <div className="w-full h-8 bg-slate-100 rounded-lg mb-4"></div>
                               <div className="w-full h-24 bg-slate-50 rounded-2xl mb-4 border border-slate-100"></div>
                               <div className="grid grid-cols-2 gap-4 w-full">
                                  <div className="h-20 bg-slate-50 rounded-xl border border-slate-100"></div>
                                  <div className="h-20 bg-slate-50 rounded-xl border border-slate-100"></div>
                               </div>
                               <div className="mt-10 w-full h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white text-[10px] font-black uppercase">Start Experience</div>
                            </div>
                         </div>
                       )}

                       {activeMockup === 'card' && (
                         <div className="flex flex-col gap-10 items-center animate-in fade-in zoom-in-95">
                            <div className="w-[450px] h-[260px] bg-slate-950 rounded-3xl shadow-2xl p-10 flex flex-col justify-between relative overflow-hidden text-white">
                               <div className="absolute top-0 right-0 p-10 opacity-5"><Layers size={200} /></div>
                               <img src={generatedLogos[0]} className="w-20 h-20 object-contain brightness-0 invert opacity-90" alt="Logo" />
                               <div>
                                  <div className="text-xl font-black mb-1">اسم المؤسس</div>
                                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Co-Founder & CEO</div>
                               </div>
                            </div>
                            <div className="w-[450px] h-[260px] bg-white rounded-3xl shadow-2xl p-10 flex items-center justify-center border border-slate-100">
                               <img src={generatedLogos[0]} className="w-40 h-40 object-contain" alt="Logo" />
                            </div>
                         </div>
                       )}

                       {activeMockup === 'website' && (
                         <div className="w-full h-[400px] bg-slate-50 border-[6px] border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95">
                            <div className="h-10 bg-slate-200 flex items-center px-4 gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div><div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div><div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div></div>
                            <div className="bg-white h-full">
                               <div className="p-6 border-b border-slate-50 flex items-center justify-between px-10">
                                  <img src={generatedLogos[0]} className="h-10 object-contain" alt="Logo" />
                                  <div className="flex gap-6"><div className="w-16 h-2 bg-slate-100 rounded-full"></div><div className="w-16 h-2 bg-slate-100 rounded-full"></div><div className="w-16 h-2 bg-slate-100 rounded-full"></div></div>
                               </div>
                               <div className="p-16 text-center max-w-xl mx-auto">
                                  <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">القوة الحقيقية لعلامتك التجارية</h2>
                                  <div className="w-full h-4 bg-slate-50 rounded-full mb-3"></div>
                                  <div className="w-3/4 h-3 bg-slate-50 rounded-full mx-auto mb-10"></div>
                                  <div className={`w-40 h-14 mx-auto rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase ${isDarkMode ? 'bg-indigo-600' : 'bg-blue-600'}`}>See Dashboard</div>
                               </div>
                            </div>
                         </div>
                       )}
                    </div>
                 )}
              </div>

              {/* Bottom Info Ribbon */}
              <div className={`py-6 px-10 border-t flex items-center justify-between ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50/50 border-slate-50'}`}>
                 <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Vector AI</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-600"></div> 300 DPI Export</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-600"></div> Psychology Matched</div>
                 </div>
                 {generatedLogos.length > 0 && (
                   <button className={`px-6 py-3 rounded-xl text-[10px] font-black flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all ${isDarkMode ? 'bg-white text-slate-900' : 'bg-slate-950 text-white'}`}>
                      <span>تحميل باقة الهوية الكاملة</span>
                      <ArrowUpRight size={14} />
                   </button>
                 )}
              </div>
           </div>

           {/* Typography Studio (Lower Grid) */}
           <div className={`rounded-[3rem] p-10 border flex flex-col md:flex-row items-center gap-10 ${isDarkMode ? 'bg-slate-900/30 border-white/5 text-white' : 'bg-white border-slate-100 shadow-sm text-slate-900'}`}>
              <div className="flex-1">
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 shadow-sm ${isDarkMode ? 'bg-indigo-600/20 text-indigo-400' : 'bg-blue-50 text-[#0052FF]'}`}><Type size={20} /></div>
                 <h4 className="text-xl font-black mb-2">استوديو التيبوغرافيا</h4>
                 <p className="text-xs font-bold text-slate-400 max-w-xs leading-relaxed">
                    اخترنا هذي الخطوط لتناسب شخصية علامتك التجارية وتضمن وضوحاً فائقاً في المحتوى العربي والعالمي.
                 </p>
              </div>
              <div className="flex-1 space-y-6 w-full">
                 <FontPreview name="IBM Plex Sans Arabic" sample="نص تجريبي للعنوان الرئيسي" isPrimary={true} darkMode={isDarkMode} />
                 <FontPreview name="Readex Pro" sample="هذا هو نص الفقرات والمحتوى العام" isPrimary={false} darkMode={isDarkMode} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const MockupModeBtn = ({ active, onClick, icon, label, darkMode }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string, darkMode: boolean }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-2.5 rounded-xl text-[10px] font-black flex items-center gap-2 transition-all ${active 
      ? (darkMode ? 'bg-indigo-600 text-white shadow-xl' : 'bg-slate-950 text-white shadow-xl') 
      : (darkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-50 text-slate-400')}`}
  >
     {icon}
     <span className="uppercase tracking-widest">{label}</span>
  </button>
);

const FontPreview = ({ name, sample, isPrimary, darkMode }: { name: string, sample: string, isPrimary: boolean, darkMode: boolean }) => (
  <div className={`p-5 rounded-2xl border flex flex-col gap-1 transition-all ${darkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-50 hover:bg-white'}`}>
     <div className="flex items-center justify-between">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{name}</span>
        {isPrimary && <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${darkMode ? 'bg-indigo-600/20 text-indigo-400' : 'bg-blue-50 text-[#0052FF]'}`}>Primary</span>}
     </div>
     <div className="text-base font-black truncate mt-1">{sample}</div>
  </div>
);
