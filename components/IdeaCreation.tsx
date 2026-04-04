
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Wand2, 
  Lightbulb, 
  Target, 
  Zap, 
  ArrowRight, 
  ChevronLeft,
  BrainCircuit,
  MessageSquare,
  Rocket,
  Plus,
  Compass,
  Briefcase,
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface CreationStage {
  id: number;
  label: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}

const INITIAL_STAGES: CreationStage[] = [
  { id: 1, label: 'تعريف الفكرة', description: 'نقوم الآن بتحليل البذرة الأولى لمشروعك واستخلاص قيمته الجوهرية.', status: 'active' },
  { id: 2, label: 'تحليل الفجوات', description: 'البحث عن "المحيطات الزرقاء" وفرص التميز التنافسي في السوق.', status: 'pending' },
  { id: 3, label: 'هندسة العميل', description: 'رسم بروفايل العميل المثالي وتحليل رحلة احتياجه.', status: 'pending' },
  { id: 4, label: 'توليد الهوية', description: 'صياغة الاسم الاستراتيجي والمهمة الكبرى للمشروع.', status: 'pending' }
];

export const IdeaCreation: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [prompt, setPrompt] = useState('');
  const [stages, setStages] = useState<CreationStage[]>(INITIAL_STAGES);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Simulation of AI processing
  useEffect(() => {
    if (step === 'processing') {
      const interval = setInterval(() => {
        setStages(prev => {
          const next = [...prev];
          if (activeStageIndex < next.length) {
            next[activeStageIndex].status = 'completed';
            if (activeStageIndex + 1 < next.length) {
              next[activeStageIndex + 1].status = 'active';
            }
            setActiveStageIndex(idx => idx + 1);
          } else {
             clearInterval(interval);
             setTimeout(() => setStep('result'), 1000);
          }
          return next;
        });
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [step, activeStageIndex]);

  const handleStart = () => {
    if (prompt.trim().length > 10) {
      setStep('processing');
    }
  };

  return (
    <div dir="rtl" className="min-h-[80vh] flex flex-col font-['IBM_Plex_Sans_Arabic'] animate-in fade-in zoom-in-95 duration-1000">
      
      {/* Dynamic Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {step === 'input' && (
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full py-10 relative z-10">
           <button 
             onClick={onBack}
             className="absolute top-0 right-0 p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all flex items-center gap-2 text-xs font-black"
           >
              <ArrowRight size={16} />
              <span>العودة للمقترحات</span>
           </button>

           <div className="w-20 h-20 bg-indigo-600/10 text-indigo-600 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl shadow-indigo-100 relative group overflow-hidden">
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10"></div>
              <Lightbulb size={40} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
           </div>

           <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 text-center leading-tight tracking-tight">
              صِف <span className="text-indigo-600">شرارة فكرتك</span> الأولى
           </h1>
           <p className="text-slate-400 font-bold text-lg text-center max-w-xl mb-12 leading-relaxed">
              لا تبحث عن الكمال الآن، فقط اكتب ما يجول بذهنك وسيتولى الذكاء الاصطناعي تحويله لاستراتيجية عمل متماسكة.
           </p>

           <div className="w-full relative group">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="مثال: منيكور منزلي، توصيل أكل هندي صحي، تطبيق لإدارة الفرق الرياضية..."
                className="w-full min-h-[220px] bg-white border-2 border-slate-100 rounded-[3rem] p-10 text-xl font-bold text-slate-800 outline-none focus:border-indigo-600/30 focus:shadow-[0_40px_100px_rgba(79,70,229,0.08)] transition-all resize-none placeholder:text-slate-200"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                 <div className="flex gap-2">
                    {['تقني', 'لوجستي', 'تعليمي'].map(tag => (
                      <button key={tag} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">{tag}</button>
                    ))}
                 </div>
                 
                 <button 
                   onClick={handleStart}
                   disabled={prompt.length < 10}
                   className={`px-10 py-5 rounded-[2rem] flex items-center gap-4 transition-all ${
                     prompt.length >= 10 
                     ? 'bg-slate-950 text-white shadow-2xl hover:scale-105 active:scale-95' 
                     : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                   }`}
                 >
                    <span className="text-sm font-black">بدء المحاكاة الذكية</span>
                    <Wand2 size={20} />
                 </button>
              </div>
           </div>

           <div className="mt-12 flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2"><Sparkles size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">GPT-4 Omni Engine</span></div>
              <div className="flex items-center gap-2"><BrainCircuit size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">Business Intelligence Framework</span></div>
           </div>
        </div>
      )}

      {step === 'processing' && (
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full relative z-10">
           <div className="relative mb-20">
              <div className="w-32 h-32 rounded-[2.5rem] bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_80px_rgba(79,70,229,0.3)] animate-pulse">
                 <BrainCircuit size={48} className="animate-spin-slow" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl animate-bounce">
                 <Sparkles size={24} />
              </div>
           </div>

           <div className="w-full max-w-md space-y-8">
              {stages.map((stage) => (
                <div key={stage.id} className={`flex items-start gap-6 transition-all duration-700 ${stage.status === 'pending' ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      stage.status === 'completed' ? 'bg-emerald-500 text-white' : 
                      stage.status === 'active' ? 'bg-indigo-600 text-white ring-8 ring-indigo-50' : 'bg-slate-100 text-slate-400'
                   }`}>
                      {stage.status === 'completed' ? <CheckCircle2 size={20} /> : <span className="text-sm font-black">{stage.id}</span>}
                   </div>
                   <div className="flex-1">
                      <h3 className={`text-lg font-black mb-1 ${stage.status === 'active' ? 'text-indigo-600' : 'text-slate-800'}`}>{stage.label}</h3>
                      <p className="text-xs font-bold text-slate-400 leading-relaxed">{stage.description}</p>
                   </div>
                   {stage.status === 'active' && (
                     <div className="flex gap-1">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      )}

      {step === 'result' && (
        <div className="flex-1 max-w-5xl mx-auto w-full py-10 relative z-10">
           <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl">
                    <Rocket size={24} />
                 </div>
                 <div>
                    <h2 className="text-3xl font-black text-slate-900">تمت ولادة فكرتك!</h2>
                    <p className="text-sm font-bold text-slate-400 italic">"حوّلنا شرارة خيالك لواقع استراتيجي مدروس"</p>
                 </div>
              </div>
              <button 
                onClick={() => setStep('input')}
                className="px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-2xl text-xs font-black transition-all flex items-center gap-2"
              >
                 تعديل المدخلات
              </button>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Proposal Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                 <div className="bg-slate-950 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10"><Zap size={100} /></div>
                    <div className="relative z-10">
                       <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20 mb-4 inline-block">مقترح التسمية الاستراتيجي</span>
                       <h3 className="text-3xl font-black mb-6 leading-tight">إيدو فلو (EduFlow)</h3>
                       <p className="text-slate-400 font-bold text-sm leading-relaxed mb-8">
                          بروتوكول لوجستي ذكي يربط بين مراكز التعليم المنزلي وموردي الأدوات العلمية في لحظة الاحتياج.
                       </p>
                       <div className="flex justify-between items-end border-t border-white/5 pt-6">
                          <div>
                             <div className="text-[10px] font-black text-slate-500 uppercase mb-1">الجاذبية السوقية</div>
                             <div className="text-2xl font-black text-emerald-400">92%</div>
                          </div>
                          <div className="flex -space-x-2">
                             {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">U{i}</div>)}
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                    <h4 className="text-sm font-black text-slate-900 mb-6 flex items-center gap-2">
                       <Target className="text-indigo-600" size={16} />
                       بروفايل العميل المثالي
                    </h4>
                    <div className="space-y-4">
                       <PersonaItem label="آباء طموحون" desc="فئة متوسطة الدخل تبحث عن تعليم لا مركزي." />
                       <PersonaItem label="المؤسسات التعليمية" desc="تبحث عن كفاءة تشغيلية في توريد المواد." />
                    </div>
                 </div>
              </div>

              {/* Matrix Reveal Area */}
              <div className="lg:col-span-2 bg-white rounded-[4rem] border border-slate-100 p-10 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:scale-110 transition-transform duration-1000"><Compass size={300} strokeWidth={0.5} /></div>
                 
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-12">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center"><Activity size={20} /></div>
                          <h4 className="text-xl font-black text-slate-900">مصفوفة الميزة التنافسية</h4>
                       </div>
                       <Badge color="emerald">محيط أزرق مكتشف</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-10 flex-1">
                       <ValueProp 
                         icon={<Plus className="text-blue-600" />} 
                         title="التقارب اللحظي" 
                         desc="توصيل الأدوات خلال ساعة واحدة من طلب المعلم في الحصة الافتراضية." 
                       />
                       <ValueProp 
                         icon={<BrainCircuit className="text-purple-600" />} 
                         title="التنبؤ بالمواد" 
                         desc="ذكاء اصطناعي يتوقع نفاذ المواد لدى الطالب قبل أن يشعر بالحاجة إليها." 
                       />
                    </div>

                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between gap-6">
                       <div className="flex-1">
                          <h5 className="text-sm font-black text-slate-900 mb-1">جاهز للبدء؟</h5>
                          <p className="text-xs font-bold text-slate-400">حوّل هذا المقترح الآن إلى خطة عمل شاملة وجدول مالي دقيق.</p>
                       </div>
                       <button className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] text-sm font-black shadow-2xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                          <span>بناء خطة العمل الكاملة</span>
                          <ArrowUpRight size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

const PersonaItem = ({ label, desc }: { label: string, desc: string }) => (
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all">
     <div className="text-xs font-black text-slate-900 mb-1">{label}</div>
     <p className="text-[10px] font-bold text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const ValueProp = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-4 hover:shadow-xl hover:shadow-indigo-50/50 transition-all">
     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">{icon}</div>
     <div>
        <h5 className="text-base font-black text-slate-900 mb-2">{title}</h5>
        <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
     </div>
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; color: 'emerald' | 'amber' }> = ({ children, color }) => (
  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black border uppercase tracking-widest ${
    color === 'emerald' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
  }`}>
     {children}
  </span>
);

const CheckCircle2 = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
