"use client";

import React, { useState } from 'react';

// --- LOGO SVG GENERATORS MATCHING tournament.jpg ---
const UnionLogo = () => (
  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50C20 30 35 20 50 20C65 20 80 35 80 50C80 70 60 85 50 85C40 85 20 70 20 50Z" fill="#1b3a24" stroke="#4ade80" strokeWidth="3"/>
    <path d="M30 45C35 35 45 35 50 40C55 45 65 40 70 45C65 55 55 60 50 55C45 50 35 55 30 45Z" fill="#a7f3d0"/>
    <path d="M45 75C35 70 25 55 35 45C38 52 48 58 55 52C60 62 55 72 45 75Z" fill="#2dd4bf"/>
    <circle cx="60" cy="40" r="4" fill="#000"/>
  </svg>
);

const BowneLogo = () => (
  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 15L50 35L65 15" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 15L50 32L58 15" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="55" r="26" fill="url(#goldGradient)" stroke="#f59e0b" strokeWidth="3"/>
    <circle cx="50" cy="55" r="20" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 2"/>
    <text x="50" y="64" fontSize="26" fontWeight="bold" fill="#b45309" textAnchor="middle">1</text>
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

const SanfordLogo = () => (
  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="#ea580c" stroke="#000" strokeWidth="3"/>
    <path d="M14 50H86" stroke="#000" strokeWidth="3"/>
    <path d="M50 14V86" stroke="#000" strokeWidth="3"/>
    <path d="M22 22C32 32 32 68 22 78" stroke="#000" strokeWidth="2.5"/>
    <path d="M78 22C68 32 68 68 78 78" stroke="#000" strokeWidth="2.5"/>
  </svg>
);

const BarclaysLogo = () => (
  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20C40 20 50 10 50 10C50 10 60 20 80 20C80 50 70 75 50 90C30 75 20 50 20 20Z" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M28 26C42 26 50 18 50 18C50 18 58 26 72 26" stroke="#93c5fd" strokeWidth="2"/>
  </svg>
);

export default function TournamentDashboard() {
  // Configurable Application State
  const [title, setTitle] = useState("PS20 MIKE LEGEND TOURNAMENT");
  const [subTitle, setSubTitle] = useState("BASKETBALL SCHEDULE");
  const [dateHeader, setDateHeader] = useState("TODAY'S RESULTS - WEDNESDAY MAY 27TH 2026");
  
  const [scores, setScores] = useState({
    unionsToday: 46,
    bownesToday: 18,
    sanfordsToday: 31,
    barclaysToday: 24,
    sanfordsMatch: 31,
    bownesMatch: 30,
    unionsMatch: 36,
    barclaysMatch: 34,
  });

  const [rosters, setRosters] = useState({
    unions: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "猴王", "MING", "好好睡觉"],
    bownes: ["SHBW", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "烤", "Ye 哥", "芥琵"],
    sanfords: ["Steven", "William_Yan", "绿豆赚", "09^", "Whilar·Yan", "易阿炜", "Ryan", "Beau", "Leo", "Mwxot"],
    barclays: ["kys r", "YJH —", "胡内", "篮板王", "稳", "Syw", "Sean", "Taotao", "高手", "James c"],
  });

  const [upcomingText, setUpcomingText] = useState("WEEK 2 SCHEDULE: TBA\n(To Be Announced)");

  // Handle value editing
  const handleScoreChange = (key: keyof typeof scores, val: string) => {
    const parsed = parseInt(val) || 0;
    setScores(prev => ({ ...prev, [key]: parsed }));
  };

  const handleRosterChange = (team: keyof typeof rosters, index: number, val: string) => {
    setRosters(prev => {
      const updated = [...prev[team]];
      updated[index] = val;
      return { ...prev, [team]: updated };
    });
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-white p-6 font-sans antialiased selective-none">
      
      {/* HEADER SECTION */}
      <header className="text-center mb-8 border-b border-gray-800 pb-4 relative">
        <input 
          className="bg-transparent text-center font-extrabold text-4xl tracking-wider w-full uppercase border-none focus:ring-1 focus:ring-orange-500 text-slate-100 outline-none"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-orange-500 text-xl">★</span>
          <input 
            className="bg-transparent text-center font-bold text-xl tracking-widest uppercase border-none focus:ring-1 focus:ring-orange-500 text-orange-500 w-1/2 outline-none"
            value={subTitle} 
            onChange={(e) => setSubTitle(e.target.value)} 
          />
          <span className="text-orange-500 text-xl">★</span>
        </div>
      </header>

      {/* CORE TWO-COLUMN MAIN GRID (Sidebar Left Removed) */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* LEFT & CENTER COMBINED MATCH STUFF (Movable/Adjustable Layout Box) */}
        <section className="lg:col-span-2 flex flex-col gap-6">
          
          {/* TODAY'S TOP ROW SUMMARY HERO */}
          <div className="bg-[#0d1527] border border-slate-800 rounded-xl p-4 shadow-xl">
            <input 
              className="bg-transparent text-xs font-semibold text-center tracking-widest text-slate-400 uppercase w-full mb-4 border-none outline-none focus:bg-slate-900"
              value={dateHeader}
              onChange={(e) => setDateHeader(e.target.value)}
            />
            
            <div className="grid grid-cols-4 gap-2 text-center items-center">
              {/* Unions Top Card */}
              <div className="bg-[#11251d] p-3 rounded-lg border border-emerald-900/50 flex flex-col items-center">
                <span className="text-xs font-bold tracking-wider text-emerald-400 mb-2">THE UNIONS</span>
                <UnionLogo />
                <input type="number" className="bg-transparent font-black text-3xl w-full text-center mt-2 border-none outline-none" value={scores.unionsToday} onChange={(e) => handleScoreChange('unionsToday', e.target.value)} />
              </div>

              {/* Bownes Top Card */}
              <div className="bg-[#1f1a17] p-3 rounded-lg border border-amber-900/40 flex flex-col items-center">
                <span className="text-xs font-bold tracking-wider text-amber-500 mb-2">THE BOWNES</span>
                <BowneLogo />
                <input type="number" className="bg-transparent font-black text-3xl w-full text-center mt-2 border-none outline-none" value={scores.bownesToday} onChange={(e) => handleScoreChange('bownesToday', e.target.value)} />
              </div>

              {/* Sanfords Top Card */}
              <div className="bg-[#2a1b14] p-3 rounded-lg border border-orange-900/40 flex flex-col items-center">
                <span className="text-xs font-bold tracking-wider text-orange-500 mb-2">THE SANFORDS</span>
                <SanfordLogo />
                <input type="number" className="bg-transparent font-black text-3xl w-full text-center mt-2 border-none outline-none" value={scores.sanfordsToday} onChange={(e) => handleScoreChange('sanfordsToday', e.target.value)} />
              </div>

              {/* Barclays Top Card */}
              <div className="bg-[#121b2d] p-3 rounded-lg border border-blue-900/50 flex flex-col items-center">
                <span className="text-xs font-bold tracking-wider text-blue-400 mb-2">THE BARCLAYS</span>
                <BarclaysLogo />
                <input type="number" className="bg-transparent font-black text-3xl w-full text-center mt-2 border-none outline-none" value={scores.barclaysToday} onChange={(e) => handleScoreChange('barclaysToday', e.target.value)} />
              </div>
            </div>
          </div>

          {/* DETAILED MATCHUPS BREAKDOWN BOXES */}
          <div className="flex flex-col gap-4">
            
            {/* Match 1 Card Box */}
            <div className="bg-gradient-to-r from-[#3c1e0e] to-[#1e1715] border border-orange-900/40 rounded-xl p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-4 w-5/12">
                <SanfordLogo />
                <span className="font-bold tracking-wide text-orange-400">THE SANFORDS</span>
              </div>
              <div className="flex items-center justify-center gap-4 w-2/12">
                <input type="number" className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-orange-400" value={scores.sanfordsMatch} onChange={(e) => handleScoreChange('sanfordsMatch', e.target.value)}/>
                <span className="text-xs font-bold bg-black/40 px-2 py-1 rounded-md border border-gray-800">VS</span>
                <input type="number" className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-amber-500" value={scores.bownesMatch} onChange={(e) => handleScoreChange('bownesMatch', e.target.value)}/>
              </div>
              <div className="flex items-center justify-end gap-4 w-5/12">
                <span className="font-bold tracking-wide text-amber-500">THE BOWNES</span>
                <BowneLogo />
              </div>
            </div>

            {/* Match 2 Card Box */}
            <div className="bg-gradient-to-r from-[#11291f] to-[#10192a] border border-emerald-900/40 rounded-xl p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-4 w-5/12">
                <UnionLogo />
                <span className="font-bold tracking-wide text-emerald-400">THE UNIONS</span>
              </div>
              <div className="flex items-center justify-center gap-4 w-2/12">
                <input type="number" className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-emerald-400" value={scores.unionsMatch} onChange={(e) => handleScoreChange('unionsMatch', e.target.value)}/>
                <span className="text-xs font-bold bg-black/40 px-2 py-1 rounded-md border border-gray-800">VS</span>
                <input type="number" className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-blue-400" value={scores.barclaysMatch} onChange={(e) => handleScoreChange('barclaysMatch', e.target.value)}/>
              </div>
              <div className="flex items-center justify-end gap-4 w-5/12">
                <span className="font-bold tracking-wide text-blue-400">THE BARCLAYS</span>
                <BarclaysLogo />
              </div>
            </div>
          </div>

          {/* UPCOMING BANNER TIMELINE CONTAINER */}
          <div className="bg-[#090e1a] border border-gray-900 rounded-xl p-6 text-center shadow-inner flex flex-col justify-center items-center min-h-[140px]">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">UPCOMING TIMELINE CONTAINER</span>
            <textarea 
              className="bg-transparent font-black text-2xl text-slate-200 w-full text-center resize-none border-none outline-none h-16 leading-relaxed"
              value={upcomingText}
              onChange={(e) => setUpcomingText(e.target.value)}
            />
          </div>
        </section>

        {/* RIGHT COLUMN: TEAMS & ROSTERS (Styled Exactly like tournament.jpg Layout Splitting Roster Panels) */}
        <section className="bg-[#0f192b] border border-slate-800 rounded-xl p-4 shadow-2xl flex flex-col">
          <h3 className="text-center font-bold tracking-widest text-sm text-slate-400 uppercase border-b border-gray-800 pb-3 mb-4">TEAMS & ROSTERS</h3>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 overflow-y-auto flex-1 pr-1 max-h-[500px]">
            
            {/* The Unions Side */}
            <div>
              <div className="bg-[#11251d] text-emerald-400 font-bold text-xs p-2 rounded mb-2 border border-emerald-900/50 text-center tracking-wider">THE UNIONS</div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {rosters.unions.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-slate-500 w-4">{idx + 1}.</span>
                    <input className="bg-transparent border-none p-0 focus:bg-slate-900 w-full outline-none" value={player} onChange={(e) => handleRosterChange('unions', idx, e.target.value)} />
                  </li>
                ))}
              </ul>
            </div>

            {/* The Bownes Side */}
            <div>
              <div className="bg-[#1f1a17] text-amber-500 font-bold text-xs p-2 rounded mb-2 border border-amber-900/40 text-center tracking-wider">THE BOWNES</div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {rosters.bownes.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-slate-500 w-4">{idx + 1}.</span>
                    <input className="bg-transparent border-none p-0 focus:bg-slate-900 w-full outline-none" value={player} onChange={(e) => handleRosterChange('bownes', idx, e.target.value)} />
                  </li>
                ))}
              </ul>
            </div>

            {/* The Sanfords Side */}
            <div>
              <div className="bg-[#2a1b14] text-orange-500 font-bold text-xs p-2 rounded mb-2 border border-orange-900/40 text-center tracking-wider">THE SANFORDS</div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {rosters.sanfords.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-slate-500 w-4">{idx + 1}.</span>
                    <input className="bg-transparent border-none p-0 focus:bg-slate-900 w-full outline-none" value={player} onChange={(e) => handleRosterChange('sanfords', idx, e.target.value)} />
                  </li>
                ))}
              </ul>
            </div>

            {/* The Barclays Side */}
            <div>
              <div className="bg-[#121b2d] text-blue-400 font-bold text-xs p-2 rounded mb-2 border border-blue-900/50 text-center tracking-wider">THE BARCLAYS</div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {rosters.barclays.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-slate-500 w-4">{idx + 1}.</span>
                    <input className="bg-transparent border-none p-0 focus:bg-slate-900 w-full outline-none" value={player} onChange={(e) => handleRosterChange('barclays', idx, e.target.value)} />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center mt-12 text-slate-600 text-[10px] tracking-widest font-semibold uppercase">
        COMPETE . RESPECT . LEGENDARY
      </footer>
    </div>
  );
}