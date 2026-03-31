
import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Settings,
  MoreHorizontal,
  Clock,
  ChevronLeft,
  X
} from 'lucide-react';
import { Notification } from '../types';

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'اكتمل تحليل الخطة',
    message: 'قام الذكاء الاصطناعي بإنهاء تحليل "خطة عمل eslam" بنسبة نجاح 92%. يمكنك مراجعة النتائج الآن.',
    timestamp: 'منذ دقيقتين',
    isRead: false
  },
  {
    id: '2',
    type: 'ai',
    title: 'اقتراحات جديدة متوفرة',
    message: 'لديك 5 اقتراحات جديدة لتحسين قسم "التوقعات المالية" بناءً على اتجاهات السوق الحالية.',
    timestamp: 'منذ ساعة',
    isRead: false
  },
  {
    id: '3',
    type: 'warning',
    title: 'قرب انتهاء الرصيد',
    message: 'رصيد نقاط الذكاء الاصطناعي الخاص بك أقل من 15 نقطة. يرجى الشحن للاستمرار في استخدام الميزات المتقدمة.',
    timestamp: 'منذ 5 ساعات',
    isRead: true
  },
  {
    id: '4',
    type: 'system',
    title: 'تحديث النظام v2.5',
    message: 'تم إضافة ميزة توليد الهوية البصرية الجديدة. ابدأ بتجربتها في قسم المحرر الآن!',
    timestamp: 'منذ يوم',
    isRead: true
  },
  {
    id: '5',
    type: 'info',
    title: 'تعليق جديد',
    message: 'قامت سارة أحمد بإضافة تعليق على قسم "الملخص التنفيذي".',
    timestamp: 'منذ يومين',
    isRead: true
  }
];

export const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const toggleRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n));
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => !n.isRead);

  const getIcon = (type: Notification['type']) => {
    switch(type) {
      case 'success': return { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' };
      case 'warning': return { icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' };
      case 'ai': return { icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-50' };
      case 'system': return { icon: Settings, color: 'text-blue-500', bg: 'bg-blue-50' };
      default: return { icon: Info, color: 'text-gray-500', bg: 'bg-gray-100' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-100">
              <Bell size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">الإشعارات</h1>
          </div>
          <p className="text-gray-400 font-bold text-sm">لديك {unreadCount} إشعار غير مقروء يحتاج انتباهك.</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-all shadow-sm"
          >
            <CheckCheck size={16} />
            تعيين الكل كمقروء
          </button>
          <button 
            onClick={clearAll}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition-all"
          >
            <Trash2 size={16} />
            حذف الكل
          </button>
        </div>
      </div>

      {/* Tabs / Filter */}
      <div className="flex bg-gray-100/50 p-1.5 rounded-2xl mb-8 w-fit border border-gray-100">
        <button 
          onClick={() => setFilter('all')}
          className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${filter === 'all' ? 'bg-white text-primary-600 shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
        >
          الكل
        </button>
        <button 
          onClick={() => setFilter('unread')}
          className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${filter === 'unread' ? 'bg-white text-primary-600 shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
        >
          غير المقروءة
          {unreadCount > 0 && <span className="bg-primary-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">{unreadCount}</span>}
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="py-24 text-center bg-white border border-dashed border-gray-200 rounded-[3rem] animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 mx-auto mb-6">
              <Bell size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">لا توجد إشعارات جديدة</h3>
            <p className="text-gray-400 font-bold text-sm max-w-xs mx-auto">عندما يحدث شيء مهم، ستجد تفاصيله هنا فوراً.</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const { icon: Icon, color, bg } = getIcon(notification.type);
            return (
              <div 
                key={notification.id}
                className={`
                  group relative flex items-start gap-5 p-6 rounded-[2.5rem] transition-all duration-300 border
                  ${notification.isRead 
                    ? 'bg-white border-gray-50 hover:border-gray-200 opacity-80 hover:opacity-100' 
                    : 'bg-white border-primary-100 shadow-xl shadow-primary-50/20 ring-4 ring-primary-50/10'
                  }
                `}
              >
                {/* Unread Indicator Dot */}
                {!notification.isRead && (
                  <div className="absolute top-8 right-2 w-2 h-2 bg-primary-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-pulse"></div>
                )}

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-inner ${bg} ${color}`}>
                  <Icon size={26} strokeWidth={2.5} />
                </div>

                {/* Content - ADDED PL-28 TO PREVENT OVERLAP WITH LEFT BUTTONS */}
                <div className="flex-1 min-w-0 pl-28">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className={`text-base font-bold truncate ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                      {notification.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-tighter shrink-0">
                      <Clock size={12} />
                      {notification.timestamp}
                    </div>
                  </div>
                  <p className="text-sm font-bold text-gray-500 leading-relaxed mb-4">
                    {notification.message}
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="text-[11px] font-bold text-primary-600 hover:text-primary-800 transition-colors flex items-center gap-1 group/btn">
                      متابعة التفاصيل
                      <ChevronLeft size={14} className="group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <button 
                      onClick={() => toggleRead(notification.id)}
                      className="text-[11px] font-bold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {notification.isRead ? 'تعليم كغير مقروء' : 'تعليم كمقروء'}
                    </button>
                  </div>
                </div>

                {/* Quick Actions (Appear on Hover) - ADJUSTED TO PREVENT OVERLAP */}
                <div className="absolute top-1/2 -translate-y-1/2 left-8 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 translate-x-[-15px] group-hover:translate-x-0 z-10">
                  <button className="p-2.5 bg-white/90 backdrop-blur-sm text-gray-400 rounded-xl hover:text-gray-900 border border-gray-100 shadow-lg">
                    <MoreHorizontal size={14} strokeWidth={3} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    className="p-2.5 bg-red-50/90 backdrop-blur-sm text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-lg border border-red-100 hover:border-red-500"
                    title="حذف"
                  >
                    <Trash2 size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
