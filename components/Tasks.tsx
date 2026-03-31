
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  AlertCircle, 
  Calendar, 
  User as UserIcon, 
  FileText, 
  Plus, 
  Search,
  MoreVertical,
  ChevronLeft,
  ListTodo,
  TrendingUp,
  Filter
} from 'lucide-react';
import { Task } from '../types';

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'مراجعة الملخص التنفيذي',
    description: 'تأكد من أن الأرقام المالية تتوافق مع التوقعات الجديدة في القسم المالي.',
    status: 'completed',
    priority: 'medium',
    relatedPlan: 'خطة عمل test1',
    assignedBy: 'Admin User',
    dueDate: '27-11-2025',
    timestamp: 'منذ شهر'
  },
  {
    id: '2',
    title: 'تحليل المنافسين في السوق الرياضي',
    description: 'إضافة قائمة بالمنافسين المباشرين وغير المباشرين في منطقة الرياض.',
    status: 'completed',
    priority: 'high',
    relatedPlan: 'مشروع صالة ألعاب رياضية',
    assignedBy: 'Admin User',
    dueDate: '22-11-2025',
    timestamp: 'منذ شهر'
  },
  {
    id: '3',
    title: 'تحديد مصادر الإيرادات البديلة',
    description: 'البحث عن 3 مصادر إيرادات إضافية لتعزيز التدفق النقدي في السنة الأولى.',
    status: 'in_progress',
    priority: 'high',
    relatedPlan: 'خطة عمل eslam',
    assignedBy: 'Admin User',
    dueDate: '05-12-2025',
    timestamp: 'منذ يومين'
  },
  {
    id: '4',
    title: 'تصميم الهوية البصرية الأولية',
    description: 'استخدام المولد الذكي لإنشاء شعار ولوحة ألوان تعكس حداثة المشروع.',
    status: 'pending',
    priority: 'low',
    relatedPlan: 'خطة عمل test2',
    assignedBy: 'Admin User',
    dueDate: '10-12-2025',
    timestamp: 'منذ أسبوع'
  }
];

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_progress' | 'completed'>('all');

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(t => t.status === filter);

  const getPriorityStyles = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'medium': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'low': return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  const getStatusLabel = (status: Task['status']) => {
    switch (status) {
      case 'completed': return { label: 'مكتملة', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' };
      case 'in_progress': return { label: 'قيد التنفيذ', color: 'bg-primary-50 text-primary-600 border-primary-100' };
      case 'pending': return { label: 'قيد الانتظار', color: 'bg-gray-50 text-gray-400 border-gray-100' };
    }
  };

  const counts = {
    all: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    in_progress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-gray-200">
              <ListTodo size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">مهامي</h1>
          </div>
          <p className="text-gray-400 font-bold text-sm">جميع المهام المعينة لي لإتمام خطط العمل بنجاح.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-primary-100 hover:scale-[1.02] active:scale-95 transition-all">
          <Plus size={18} strokeWidth={3} />
          إضافة مهمة جديدة
        </button>
      </div>

      {/* Tabs / Filters */}
      <div className="bg-white p-1.5 rounded-[2rem] border border-gray-100 shadow-sm flex flex-wrap gap-1">
        {[
          { id: 'all', label: 'الكل', count: counts.all },
          { id: 'pending', label: 'قيد الانتظار', count: counts.pending },
          { id: 'in_progress', label: 'قيد التنفيذ', count: counts.in_progress },
          { id: 'completed', label: 'مكتملة', count: counts.completed },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all ${
              filter === tab.id 
                ? 'bg-primary-600 text-white shadow-lg' 
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
            }`}
          >
            {tab.label}
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${filter === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="py-24 text-center bg-white border border-dashed border-gray-200 rounded-[3rem]">
            <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 mx-auto mb-6">
              <ListTodo size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">لا توجد مهام في هذا القسم</h3>
            <p className="text-gray-400 font-bold text-sm">أنت مواكب لجميع مهامك حالياً، أحسنت!</p>
          </div>
        ) : (
          filteredTasks.map((task) => {
            const statusStyle = getStatusLabel(task.status);
            return (
              <div key={task.id} className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-8 hover:shadow-2xl hover:shadow-primary-100/30 transition-all duration-500 overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  
                  <div className="flex-1 space-y-4 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                        {task.title}
                      </h3>
                      <div className="flex gap-2">
                        <span className={`text-[9px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider ${getPriorityStyles(task.priority)}`}>
                          {task.priority === 'high' ? 'عالية' : task.priority === 'medium' ? 'متوسطة' : 'منخفضة'}
                        </span>
                        <span className={`text-[9px] font-bold px-2.5 py-1 rounded-lg border ${statusStyle.color}`}>
                          {statusStyle.label}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm font-bold text-gray-500 leading-relaxed max-w-2xl">
                      {task.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-primary-600 bg-primary-50/50 px-3 py-1.5 rounded-xl border border-primary-100/50">
                        <FileText size={14} />
                        {task.relatedPlan}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                        <UserIcon size={14} className="text-gray-300" />
                        من: <span className="text-gray-600">{task.assignedBy}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                        <Calendar size={14} className="text-gray-300" />
                        الموعد: <span className="text-gray-600">{task.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400">
                        <Clock size={14} className="text-gray-300" />
                        {task.timestamp}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-gray-50 pt-6 md:pt-0">
                    <button className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-[12px] font-bold transition-all ${
                      task.status === 'completed' 
                        ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' 
                        : 'bg-primary-600 text-white shadow-xl shadow-primary-100 hover:bg-primary-700'
                    }`}>
                      {task.status === 'completed' ? <CheckCircle2 size={16} strokeWidth={3} /> : <Circle size={16} strokeWidth={3} />}
                      {task.status === 'completed' ? 'تم الإكمال' : 'تحديد كمكتمل'}
                    </button>
                    <button className="p-3 bg-white border border-gray-100 text-gray-400 rounded-2xl hover:text-primary-600 hover:border-primary-100 transition-all">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>

                {/* Left Accent Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all ${
                  task.priority === 'high' ? 'bg-rose-500' : task.priority === 'medium' ? 'bg-amber-400' : 'bg-blue-500'
                }`}></div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Insight */}
      <div className="p-8 bg-gradient-to-r from-gray-900 to-slate-800 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400">
            <TrendingUp size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">معدل الإنتاجية</h4>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest opacity-80">لقد أنجزت 8 مهام هذا الأسبوع</p>
          </div>
        </div>
        <div className="flex gap-2">
           {[...Array(7)].map((_, i) => (
             <div key={i} className={`w-1.5 h-10 rounded-full ${i < 5 ? 'bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/10'}`}></div>
           ))}
        </div>
      </div>
    </div>
  );
};
