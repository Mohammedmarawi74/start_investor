import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Circle,
  Sparkles,
  Edit3,
  Save,
  FileText,
  BarChart3,
  Lightbulb,
  Target,
  Users,
  DollarSign,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { PlanSection } from '../types';

interface BusinessPlanEditorProps {
  sections: PlanSection[];
  onSectionUpdate: (id: string, updates: Partial<PlanSection>) => void;
  expandedSectionId: string | null;
  onSectionExpand: (id: string | null) => void;
}

const getSectionIcon = (title: string) => {
  if (title.includes('الملخص')) return FileText;
  if (title.includes('السوق')) return BarChart3;
  if (title.includes('العمل')) return Lightbulb;
  if (title.includes('التسويق')) return Target;
  if (title.includes('الهيكل')) return Users;
  if (title.includes('المالية')) return DollarSign;
  return FileText;
};

const getSectionColor = (index: number) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-indigo-500',
  ];
  return colors[index % colors.length];
};

export const BusinessPlanEditor: React.FC<BusinessPlanEditorProps> = ({
  sections,
  onSectionUpdate,
  expandedSectionId,
  onSectionExpand,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (section: PlanSection) => {
    setEditingId(section.id);
    setEditContent(section.content);
  };

  const handleSave = () => {
    if (editingId) {
      onSectionUpdate(editingId, { content: editContent });
      setEditingId(null);
      setEditContent('');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditContent('');
  };

  const toggleSection = (id: string) => {
    if (expandedSectionId === id) {
      onSectionExpand(null);
    } else {
      onSectionExpand(id);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50/50 p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">محرر خطة العمل</h1>
        <p className="text-gray-500 font-medium text-sm">
          قم بتحرير وتحسين أقسام خطة عملك بمساعدة الذكاء الاصطناعي
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">التقدم الكلي</h2>
          <span className="text-2xl font-black text-primary-600">
            {Math.round(sections.filter((s) => s.isCompleted).length / sections.length * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-700"
            style={{
              width: `${sections.filter((s) => s.isCompleted).length / sections.length * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sections.map((section, index) => {
          const Icon = getSectionIcon(section.title);
          const colorClass = getSectionColor(index);
          const isExpanded = expandedSectionId === section.id;
          const isEditing = editingId === section.id;

          return (
            <div
              key={section.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Section Header */}
              <div
                className="p-5 cursor-pointer flex items-center gap-4"
                onClick={() => toggleSection(section.id)}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${colorClass} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-bold text-gray-900">{section.title}</h3>
                    {section.isCompleted && (
                      <CheckCircle size={16} className="text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                    {section.lastEdited && <span>آخر تعديل: {section.lastEdited}</span>}
                    {section.progress && <span>التقدم: {section.progress}%</span>}
                  </div>
                </div>

                {/* Scores */}
                <div className="flex items-center gap-3">
                  {section.aiScore !== undefined && (
                    <div className="text-center">
                      <div className="text-xs font-bold text-gray-400 mb-0.5">AI</div>
                      <div
                        className={`text-sm font-black ${
                          section.aiScore >= 80
                            ? 'text-green-600'
                            : section.aiScore >= 60
                            ? 'text-amber-600'
                            : 'text-red-600'
                        }`}
                      >
                        {section.aiScore}
                      </div>
                    </div>
                  )}
                  {section.humanScore !== undefined && (
                    <div className="text-center">
                      <div className="text-xs font-bold text-gray-400 mb-0.5">بشري</div>
                      <div
                        className={`text-sm font-black ${
                          section.humanScore >= 80
                            ? 'text-green-600'
                            : section.humanScore >= 60
                            ? 'text-amber-600'
                            : 'text-red-600'
                        }`}
                      >
                        {section.humanScore}
                      </div>
                    </div>
                  )}
                  <button className="text-gray-400 hover:text-primary-600 transition-colors">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              {/* Section Content */}
              {isExpanded && (
                <div className="border-t border-gray-50 p-6 bg-gray-50/50">
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-600">تقدم القسم</span>
                      <span className="text-xs font-black text-primary-600">
                        {section.progress || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-primary-500 rounded-full transition-all duration-500"
                        style={{ width: `${section.progress || 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Content Editor */}
                  {isEditing ? (
                    <div className="space-y-4">
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full min-h-[200px] p-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-700 font-medium leading-relaxed"
                        placeholder="اكتب محتوى القسم هنا..."
                      />
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={handleCancel}
                          className="px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
                        >
                          إلغاء
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 transition-colors flex items-center gap-2"
                        >
                          <Save size={16} />
                          حفظ
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 min-h-[150px]">
                        {section.content ? (
                          <p className="text-gray-700 leading-relaxed font-medium whitespace-pre-wrap">
                            {section.content}
                          </p>
                        ) : (
                          <div className="text-center py-8 text-gray-400">
                            <Edit3 size={32} className="mx-auto mb-3 opacity-30" />
                            <p className="text-sm font-bold">لا يوجد محتوى بعد</p>
                            <p className="text-xs mt-1">اضغط على "تحرير" لبدء الكتابة</p>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleEdit(section)}
                          className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-primary-300 transition-all flex items-center gap-2"
                        >
                          <Edit3 size={16} />
                          تحرير
                        </button>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center gap-2">
                          <Sparkles size={16} />
                          توليد بالذكاء الاصطناعي
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AI Assistant CTA */}
      <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <Sparkles size={32} strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black mb-2">هل تحتاج مساعدة في الكتابة؟</h3>
            <p className="text-purple-100 font-medium text-sm opacity-90">
              دع الذكاء الاصطناعي يساعدك في إنشاء محتوى احترافي لخطة عملك
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-2xl font-bold text-sm hover:shadow-lg transition-all">
            ابدأ الآن
          </button>
        </div>
      </div>
    </div>
  );
};
