
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Comment, User } from '../types';

interface CommentsProps {
  comments: Comment[];
  currentUser: User;
  hideTitle?: boolean;
}

export const Comments: React.FC<CommentsProps> = ({ comments: initialComments, currentUser, hideTitle = false }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      user: currentUser.name,
      avatar: currentUser.avatar,
      timestamp: 'الآن'
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className={hideTitle ? '' : 'my-8 pt-8 border-t border-gray-200'}>
      {!hideTitle && (
        <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <MessageSquare size={20} className="text-gray-400" />
          التعليقات والنقاش
        </h2>
      )}

      {/* List */}
      <div className="space-y-6 mb-8">
        {comments.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm font-bold">لا توجد تعليقات بعد. ابدأ النقاش مع فريقك.</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 group">
              <img src={comment.avatar} alt={comment.user} className="w-12 h-12 rounded-2xl border-2 border-white shadow-md object-cover" />
              <div className="flex-1">
                <div className="bg-gray-50 px-5 py-4 rounded-[1.5rem] rounded-tr-none inline-block max-w-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-bold text-xs text-gray-900">{comment.user}</span>
                    <span className="text-[10px] font-bold text-gray-400 bg-white px-2 py-0.5 rounded-lg border border-gray-50">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{comment.text}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="flex items-start gap-4 pt-4 border-t border-gray-50">
        <img src={currentUser.avatar} alt="You" className="w-12 h-12 rounded-2xl border-2 border-white shadow-md object-cover" />
        <div className="flex-1 relative">
          <textarea 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-[1.5rem] p-5 pr-5 pl-14 focus:ring-4 focus:ring-primary-100 focus:border-primary-400 outline-none transition-all resize-none h-28 text-sm font-medium text-gray-700 shadow-sm"
            placeholder="اكتب ملاحظاتك أو استفساراتك هنا..."
          />
          <button 
            onClick={handleAddComment}
            className="absolute bottom-4 left-4 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all shadow-lg shadow-primary-200 disabled:opacity-50 disabled:shadow-none hover:scale-105 active:scale-95 group"
            disabled={!newComment.trim()}
          >
            <Send size={18} strokeWidth={2.5} className={document.dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1 transition-transform' : 'group-hover:translate-x-1 transition-transform'} />
          </button>
        </div>
      </div>
    </div>
  );
};
