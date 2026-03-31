
import React, { useState } from 'react';
import { 
  User, Shield, CreditCard, Receipt, 
  ExternalLink, Save, Camera, CheckCircle2, 
  AlertCircle, Mail, Briefcase, MapPin, 
  Fingerprint, Key, Globe, ShieldCheck,
  Layout, Sparkles, Pencil
} from 'lucide-react';
import { User as UserType } from '../types';

interface SettingsProps {
  user: UserType;
}

export const Settings: React.FC<SettingsProps> = ({ user }) => {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'security' | 'billing' | 'subscription' | 'invoices'>('profile');
  const [isSaving, setIsSaving] = useState(false);

  const menuItems = [
    { id: 'profile', label: 'الملف الشخصي', icon: User, group: 'الإعدادات' },
    { id: 'security', label: 'الأمان والخصوصية', icon: Shield, group: 'الإعدادات' },
    { id: 'billing', label: 'طرق الدفع', icon: CreditCard, group: 'الفوترة' },
    { id: 'subscription', label: 'اشتراكي الحالي', icon: Receipt, group: 'الفوترة' },
    { id: 'invoices', label: 'سجل الفواتير', icon: ExternalLink, group: 'الفوترة' },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="sticky top-24 space-y-4">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-3 shadow-xl shadow-gray-200/20">
            {['الإعدادات', 'الفوترة'].map((group) => (
              <div key={group} className="mb-6 last:mb-0">
                <h3 className="px-5 py-3 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">{group}</h3>
                <div className="space-y-1">
                  {menuItems.filter(item => item.group === group).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSubTab(item.id as any)}
                      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 group ${
                        activeSubTab === item.id 
                          ? 'bg-primary-600 text-white shadow-xl shadow-primary-200 translate-x-[-4px]' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-primary-600'
                      }`}
                    >
                      <item.icon size={18} className={`${activeSubTab === item.id ? 'text-white' : 'text-gray-300 group-hover:text-primary-600'} transition-colors`} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Account Health Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-6 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={20} className="text-indigo-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-100">أمان الحساب</span>
              </div>
              <h4 className="text-xl font-bold mb-1">ممتاز جداً</h4>
              <p className="text-indigo-100/70 text-[11px] font-bold mb-4">لقد قمت بتفعيل كافة تدابير الحماية الموصى بها.</p>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[92%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Form Area */}
      <div className="flex-1">
        <div className="bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-gray-200/30 overflow-hidden">
          
          {activeSubTab === 'profile' ? (
            <div className="flex flex-col">
              {/* Profile Cover & Avatar Section */}
              <div className="relative h-48 bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-700">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute -bottom-16 right-10 flex items-end gap-6">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-[2.8rem] bg-white p-1.5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <div className="w-full h-full rounded-[2.3rem] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden border border-gray-100">
                        <img src={user.avatar} className="w-full h-full object-cover" alt="Avatar" />
                      </div>
                    </div>
                    <button className="absolute bottom-1 left-1 p-3 bg-primary-600 text-white rounded-2xl shadow-xl hover:bg-primary-700 transition-all hover:rotate-12 active:scale-90 border-4 border-white">
                      <Camera size={18} strokeWidth={3} />
                    </button>
                  </div>
                  <div className="pb-4">
                    <h2 className="text-2xl font-bold text-gray-900 leading-none mb-2">{user.name}</h2>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                        <Globe size={12} className="text-primary-500" />
                        الرياض، السعودية
                      </span>
                      <span className="text-[10px] font-bold text-success bg-success/10 px-3 py-1 rounded-full border border-success/20 uppercase tracking-widest">مستخدم موثق</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing for Avatar */}
              <div className="h-20"></div>

              {/* Form Content */}
              <div className="p-10 space-y-12">
                
                {/* Section 1: Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2 flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <User size={18} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-base font-bold text-gray-800">المعلومات الشخصية</h3>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                      الاسم الكامل
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                      <input 
                        type="text" 
                        defaultValue={user.name}
                        className="w-full pr-12 pl-5 py-4 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-primary-500 focus:ring-8 focus:ring-primary-50 outline-none transition-all font-bold text-gray-700 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                      المسمى الوظيفي
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                      <input 
                        type="text" 
                        placeholder="مثلاً: مؤسس شركة، مدير مالي..."
                        className="w-full pr-12 pl-5 py-4 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-primary-500 focus:ring-8 focus:ring-primary-50 outline-none transition-all font-bold text-gray-700 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group md:col-span-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                      البريد الإلكتروني الأساسي
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                      <input 
                        type="email" 
                        defaultValue={user.email}
                        className="w-full pr-12 pl-5 py-4 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-primary-500 focus:ring-8 focus:ring-primary-50 outline-none transition-all font-bold text-gray-700 shadow-inner"
                      />
                      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-primary-600 hover:text-primary-800 transition-colors bg-white px-3 py-1.5 rounded-xl border border-primary-100">تغيير</button>
                    </div>
                  </div>
                </div>

                {/* Section 2: Biography */}
                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Sparkles size={18} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-base font-bold text-gray-800">السيرة المهنية (AI Ready)</h3>
                  </div>
                  <div className="relative group">
                    <textarea 
                      placeholder="صف رؤيتك المهنية باختصار، سنستخدم هذا الوصف لتحسين صياغة خططك بواسطة الذكاء الاصطناعي..."
                      className="w-full h-40 p-6 bg-gray-50/50 border border-gray-100 rounded-[2rem] focus:bg-white focus:border-primary-500 focus:ring-8 focus:ring-primary-50 outline-none transition-all font-medium text-gray-600 leading-relaxed shadow-inner resize-none"
                    />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                       <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-[10px] font-bold shadow-lg shadow-purple-200 hover:scale-105 active:scale-95 transition-all">
                         <Sparkles size={14} />
                         تحسين بالذكاء الاصطناعي
                       </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Footer Action Bar */}
              <div className="p-8 bg-gray-50/80 backdrop-blur-md border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest">تتم مزامنة كافة التغييرات بشكل آمن</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-8 py-3.5 text-gray-500 font-bold text-xs hover:text-gray-900 transition-colors">إلغاء</button>
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-3 px-12 py-4 rounded-[1.5rem] text-sm font-bold transition-all shadow-2xl active:scale-95 ${
                      isSaving 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed translate-y-1' 
                        : 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-200 hover:translate-y-[-2px]'
                    }`}
                  >
                    {isSaving ? (
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Save size={18} strokeWidth={2.5} />
                    )}
                    <span>{isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-[600px] flex flex-col items-center justify-center text-center p-20">
               <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-200 mb-8 border-2 border-dashed border-gray-100">
                  <Layout size={48} />
               </div>
               <h2 className="text-2xl font-bold text-gray-800 mb-3">هذا القسم قيد التحديث</h2>
               <p className="text-gray-400 font-bold max-w-sm leading-relaxed">نحن نعمل حالياً على بناء تجربة أمان وفوترة متطورة تليق بمستوى تطلعاتك. ابقَ متيقظاً!</p>
               <button 
                 onClick={() => setActiveSubTab('profile')}
                 className="mt-8 flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-bold hover:bg-black transition-all"
               >
                 <ArrowRight size={16} className="rotate-180" />
                 العودة للملف الشخصي
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 19 7-7-7-7"/>
    <path d="M19 12H5"/>
  </svg>
);
