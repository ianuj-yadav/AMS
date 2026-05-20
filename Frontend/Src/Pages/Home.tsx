import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, LogIn, UserPlus, BarChart3, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black text-slate-900 tracking-tighter">AWSPro</div>
          <div className="flex gap-4">
            <Link to="/login" className="px-6 py-2 rounded-full font-bold text-slate-600 hover:text-slate-900 transition-colors">Sign In</Link>
            <Link to="/signup" className="px-6 py-2 rounded-full font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-7xl font-black text-slate-900 leading-[1.1] mb-8">
              Attendance tracking <br/>
              <span className="text-emerald-500">reimagined.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg">
              The modern way to manage student presence. Real-time marking, automated QR sessions, and powerful analytics.
            </p>
            <div className="flex gap-4">
              <Link to="/signup" className="px-8 py-4 rounded-2xl bg-emerald-500 text-white font-bold text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all">Get Started Now</Link>
              <Link to="/login" className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-600 font-bold text-lg hover:bg-slate-200 transition-all">Existing Admin Login</Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-50 rounded-[4rem] flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-6 w-full">
                   <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                      <Users className="text-emerald-500 mb-4" size={32} />
                      <div className="text-2xl font-bold text-slate-900">1.2k+</div>
                      <div className="text-sm font-bold text-slate-400">Students</div>
                   </div>
                   <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 translate-y-8">
                      <BarChart3 className="text-indigo-500 mb-4" size={32} />
                      <div className="text-2xl font-bold text-slate-900">98%</div>
                      <div className="text-sm font-bold text-slate-400">Accuracy</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
