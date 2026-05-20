import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Briefcase, ArrowLeft } from 'lucide-react';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', department: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      
      navigate('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-8 font-bold text-sm">
          <ArrowLeft size={16} /> Back to Hub
        </Link>
        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20">
            <UserPlus size={28} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Join AWSPro</h1>
          <p className="text-slate-500 mb-8 font-medium">Create your administrative account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2 mb-1.5 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  className="w-full bg-slate-50 border border-slate-200 h-14 rounded-2xl pl-12 pr-4 font-semibold text-slate-700 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="Prof. John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2 mb-1.5 block">Department</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  className="w-full bg-slate-50 border border-slate-200 h-14 rounded-2xl pl-12 pr-4 font-semibold text-slate-700 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="Computer Science"
                  value={formData.department}
                  onChange={e => setFormData({...formData, department: e.target.value})}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 h-14 rounded-2xl pl-12 pr-4 font-semibold text-slate-700 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="name@college.edu"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border border-slate-200 h-14 rounded-2xl pl-12 pr-4 font-semibold text-slate-700 focus:border-emerald-400 focus:ring focus:ring-emerald-400/20 outline-none transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
            </div>

            {error && <div className="p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100">{error}</div>}

            <button type="submit" className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98]">
              Create Account
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center text-slate-500 font-medium">
            Already have an account? <Link to="/login" className="text-emerald-600 font-bold hover:text-emerald-700">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
