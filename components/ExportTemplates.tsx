
import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Layout, 
  Palette, 
  Eye, 
  Trash2, 
  Copy, 
  Star, 
  FileSpreadsheet, 
  Presentation, 
  Settings2,
  Wand2,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'ppt';
  description: string;
  isDefault: boolean;
  isSystem: boolean;
  lastUsed?: string;
}

const INITIAL_TEMPLATES: Template[] = [
  {
    id: 't1',
    name: 'قالب المستثمر الرسمي',
    type: 'pdf',
    description: 'تصميم كلاسيكي يركز على البيانات والرسوم البيانية، مثالي للعروض التقديمية الرسمية.',
    isDefault: true,
    isSystem: true,
    lastUsed: 'منذ يومين'
  },
  {
    id: 't2',
    name: 'مسودة العمل السريعة',
    type: 'doc',
    description: 'قالب بسيط وسلس مخصص للمراجعات الداخلية وتوزيع المهام على الفريق.',
    isDefault: false,
    isSystem: true,
    lastUsed: 'منذ أسبوع'
  }
];

export const ExportTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);
  const [searchTerm, setSearchTerm] = useState('');

  const getTypeStyle = (type: Template['type']) => {
    switch (type) {
      case 'pdf': return { icon: FileText, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', label: 'PDF' };
      case 'doc': return { icon: Layout, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', label: 'Word' };
      case 'ppt': return { icon: Presentation, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', label: 'PPT' };
    }
  };

  const deleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
  };

  const setDefault = (id: string) => {
    setTemplates(prev => prev.map(t => ({ ...t, isDefault: t.id === id })));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Header & Main Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-100">
              <Palette size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-[1000] text-gray-900 tracking-tight">قوالب التصدير</h1>
          </div>
          <p className="text-gray-400 font-bold text-sm">خصص مظهر خطتك لتناسب هوية شركتك وتبهر المستثمرين.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-primary-100 hover:scale-[1.02] active:scale-95 transition-all">
          <Plus size={18} strokeWidth={3} />
          إنشاء قالب مخصص
        </button>
      </div>

      {/* Toolbar: Search & Filters */}
      <div className="flex flex-col lg:flex-row gap-4 bg-white/60 backdrop-blur-md p-3 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="ابحث عن قالب معين..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-12 pl-4 py-3 bg-white border border-gray-50 rounded-xl outline-none focus:border-primary-200 transition-all font-bold text-xs"
          />
        </div>
        <div className="flex gap-2">
          {['الكل', 'PDF', 'Word', 'المفضلة'].map(f => (
            <button key={f} className={`px-5 py-3 rounded-xl text-[11px] font-black transition-all border ${f === 'الكل' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      {templates.length === 0 ? (
        <div className="py-24 text-center bg-white border-2 border-dashed border-gray-100 rounded-[3rem] animate-in zoom-in-95 duration-500 group cursor-pointer hover:border-primary-200 hover:bg-primary-50/10 transition-all">
          <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center text-gray-300 mx-auto mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all">
            <Wand2 size={48} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-[1000] text-gray-900 mb-2">لا توجد قوالب تصدير مخصصة</h3>
          <p className="text-gray-400 font-bold text-sm max-w-sm mx-auto mb-10 leading-relaxed">
            قم بإنشاء قالبك الأول بألوانك وشعارك الخاص لتعطي خطتك انطباعاً احترافياً لا يُنسى.
          </p>
          <button className="px-10 py-4 bg-primary-600 text-white rounded-2xl text-sm font-black shadow-2xl shadow-primary-200 hover:shadow-primary-300 transition-all">
            إنشاء أول قالب الآن
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(template => {
            const styles = getTypeStyle(template.type);
            const Icon = styles.icon;
            
            return (
              <div key={template.id} className="group relative flex flex-col bg-white border border-gray-100 rounded-[2.5rem] p-4 hover:shadow-2xl hover:shadow-primary-100/30 transition-all duration-500 overflow-hidden">
                {/* Visual Preview Area */}
                <div className="relative aspect-[4/3] rounded-[1.8rem] bg-gray-50 overflow-hidden mb-5 border border-gray-100/50 group-hover:border-primary-100 transition-colors">
                  <div className={`absolute inset-0 bg-gradient-to-br ${styles.bg} opacity-20`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className={`w-20 h-20 ${styles.bg} ${styles.color} rounded-3xl flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                      <Icon size={40} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-1.5 opacity-40">
                      <div className="h-1.5 w-24 bg-current rounded-full mx-auto"></div>
                      <div className="h-1.5 w-16 bg-current rounded-full mx-auto"></div>
                    </div>
                  </div>

                  {/* Badge: Default */}
                  {template.isDefault && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1.5">
                      <Star size={10} fill="currentColor" />
                      افتراضي
                    </div>
                  )}

                  {/* Quick Actions Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-3 bg-white text-gray-900 rounded-xl hover:scale-110 active:scale-90 transition-all shadow-xl">
                      <Eye size={20} />
                    </button>
                    {!template.isSystem && (
                      <button 
                        onClick={() => deleteTemplate(template.id)}
                        className="p-3 bg-white text-red-500 rounded-xl hover:scale-110 active:scale-90 transition-all shadow-xl"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                    <button className="p-3 bg-white text-primary-600 rounded-xl hover:scale-110 active:scale-90 transition-all shadow-xl">
                      <Settings2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 px-2 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border ${styles.bg} ${styles.color} ${styles.border}`}>
                      {styles.label}
                    </span>
                    {template.lastUsed && (
                      <span className="text-[10px] font-bold text-gray-400">استخدم {template.lastUsed}</span>
                    )}
                  </div>
                  <h4 className="text-lg font-[1000] text-gray-900 mb-2 truncate group-hover:text-primary-600 transition-colors">
                    {template.name}
                  </h4>
                  <p className="text-xs font-bold text-gray-500 leading-relaxed mb-6 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <button 
                      onClick={() => setDefault(template.id)}
                      className={`text-[11px] font-black transition-all flex items-center gap-1.5 ${template.isDefault ? 'text-primary-600' : 'text-gray-400 hover:text-gray-900'}`}
                    >
                      {template.isDefault ? <CheckCircle2 size={14} strokeWidth={3} /> : <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-200"></div>}
                      تعيين كافتراضي
                    </button>
                    <button className="text-[11px] font-black text-gray-400 hover:text-gray-900 flex items-center gap-1 group/link">
                      استخدام
                      <ChevronLeft size={14} className="group-hover/link:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* AI Assistance Footer */}
      <div className="mt-20 p-8 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-purple-100">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center flex-shrink-0 border border-white/20">
             <Wand2 size={40} className="text-white animate-pulse" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-2xl font-black mb-2 tracking-tight">هل تريد تصميماً ذكياً وفريداً؟</h4>
            <p className="text-purple-100 font-bold text-sm leading-relaxed max-w-xl">
              دع الذكاء الاصطناعي يحلل هوية مشروعك ويقوم بإنشاء قالب تصدير مخصص يدمج شعارك وألوانك ونبرة علامتك التجارية بشكل آلي واحترافي.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-purple-700 rounded-2xl text-xs font-[1000] hover:bg-gray-100 transition-all shadow-xl shadow-black/10 active:scale-95 whitespace-nowrap">
            توليد ذكي فوراً
          </button>
        </div>
      </div>
    </div>
  );
};
