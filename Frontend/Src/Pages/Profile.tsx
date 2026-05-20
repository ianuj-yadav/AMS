import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Mail, Briefcase, ShieldCheck, ArrowLeft } from 'lucide-react';

const Profile: React.FC = () => {
  const userStr = localStorage.getItem('ams_user');
  const user = userStr ? JSON.parse(userStr) : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ams_user');
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> Go Back
        </button>

        <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 text-center">
          <div className="w-32 h-32 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center text-emerald-600 mx-auto mb-8 text-5xl font-black shadow-inner">
            {user.name?.charAt(0) || 'U'}
          </div>
          
          <h1 className="text-4xl font-black text-slate-900 mb-2">{user.name}</h1>
          <p className="text-emerald-600 font-bold mb-10 flex items-center justify-center gap-2">
            <ShieldCheck size={18} /> Verified Administrator
          </p>

          <div className="grid gap-4 text-left max-w-sm mx-auto mb-12">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Mail className="text-slate-400" size={20} />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</div>
                <div className="font-bold text-slate-700">{user.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Briefcase className="text-slate-400" size={20} />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</div>
                <div className="font-bold text-slate-700">{user.department || 'General Administration'}</div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full py-4 rounded-2xl bg-rose-50 text-rose-600 font-bold text-lg hover:bg-rose-100 transition-all flex items-center justify-center gap-3"
          >
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
