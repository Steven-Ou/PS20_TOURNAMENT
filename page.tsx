"use client";

import React, { useState } from "react";

// ==========================================
// 1. BRAND NEW DETAILED TEAM SVG LOGOS
// ==========================================

const UnionLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#14532d" stroke="#4ade80" strokeWidth="3"/>
    {/* Stylized Fish Body */}
    <path d="M25 50C35 35 65 35 75 50C65 65 35 65 25 50Z" fill="#a7f3d0"/>
    <path d="M72 50L85 40V60L72 50Z" fill="#4ade80"/>
    <circle cx="40" cy="46" r="3" fill="#14532d"/>
    {/* Waves */}
    <path d="M30 70Q50 65 70 70" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BowneLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ribbon */}
    <path d="M35 20L50 45L65 20" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 20L50 42L58 20" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Gold Medal Circle */}
    <circle cx="50" cy="60" r="24" fill="url(#gold)" stroke="#fbbf24" strokeWidth="3"/>
    <circle cx="50" cy="60" r="18" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
    <text x="50" y="69" fontSize="24" fontWeight="black" fill="#78350f" textAnchor="middle">1</text>
    <defs>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

const SanfordLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="#ea580c" stroke="#fff" strokeWidth="2"/>
    {/* Basketball Ribs */}
    <path d="M8 50H92" stroke="#000" strokeWidth="3"/>
    <path d="M50 8V92" stroke="#000" strokeWidth="3"/>
    <path d="M20 20C35 32 35 68 20 80" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
    <path d="M80 20C65 32 65 68 80 80" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const BarclaysLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield Profile */}
    <path d="M20 20C45 20 50 10 50 10C50 10 55 20 80 20C80 55 68 78 50 90C32 78 20 55 20 20Z" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M30 28C45 28 50 22 50 22C50 22 55 28 70 28C70 50 60 68 50 78C40 68 30 50 30 28Z" fill="#2563eb"/>
    {/* Inner decorative star */}
    <polygon points="50,38 53,45 61,45 55,50 57,58 50,53 43,58 45,50 39,45 47,45" fill="#93c5fd"/>
  </svg>
);

export default function Home() {
  // ==========================================
  // 2. CONFIGURABLE DYNAMIC STATES
  // ==========================================
  const [tournamentTitle, setTournamentTitle] = useState("PS20 MIKE LEGEND TOURNAMENT");
  const [subHeader, setSubHeader] = useState("BASKETBALL SCHEDULE");
  const [resultsDay, setResultsDay] = useState("TODAY'S RESULTS - WEDNESDAY MAY 27TH");

  // Editable Leaderboard / Top Totals
  const [topScores, setTopScores] = useState({ unions: 46, bownes: 18, sanfords: 31, barclays: 24 });

  // Editable Game Day Scores
  const [gameScores, setGameScores] = useState({
    sanfordsGame: 31,
    bownesGame: 30,
    unionsGame: 36,
    barclaysGame: 34,
  });

  // Timeline Schedule Banner
  const [timelineText, setTimelineText] = useState("WEEK 2 SCHEDULE: TBA (To Be Announced)");

  // Roster arrays matching names in tournament.jpg
  const [rosters, setRosters] = useState({
    unions: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "猴王", "MING", "好好睡觉"],
    bownes: ["SHBW", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "烤", "Ye 哥", "芥琵"],
    sanfords: ["Steven", "William_Yan", "绿豆赚", "09^", "Whilar·Yan", "易阿炜", "Ryan", "Beau", "Leo", "Mwxot"],
    barclays: ["kys r", "YJH —", "胡内", "篮板王", "稳", "Syw", "Sean", "Taotao", "高手", "James c"],
  });

  // State handlers for fast mutations
  const updateTopScore = (team: keyof typeof topScores, val: string) => {
    setTopScores(prev => ({ ...prev, [team]: parseInt(val) || 0 }));
  };

  const updateGameScore = (gameKey: keyof typeof gameScores, val: string) => {
    setGameScores(prev => ({ ...prev, [gameKey]: parseInt(val) || 0 }));
  };

  const updatePlayerName = (team: keyof typeof rosters, idx: number, name: string) => {
    setRosters(prev => {
      const copy = [...prev[team]];
      copy[idx] = name;
      return { ...prev, [team]: copy };
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white p-6 font-sans antialiased selection:bg-orange-500/30">
      
      {/* GLOBAL HEADER AREA */}
      <header className="text-center mb-8 border-b border-slate-800/60 pb-5">
        <input
          type="text"
          value={tournamentTitle}
          onChange={(e) => setTournamentTitle(e.target.value)}
          className="bg-transparent font-black text-4xl text-center tracking-wider w-full uppercase outline-none focus:text-orange-500 border-none transition-colors"
        />
        <div className="flex justify-center items-center gap-2 mt-2 font-bold text-orange-500 tracking-widest text-sm">
          <span>★</span>
          <input
            type="text"
            value={subHeader}
            onChange={(e) => setSubHeader(e.target.value)}
            className="bg-transparent font-bold text-center tracking-widest uppercase outline-none text-orange-500 border-none w-64 text-xs"
          />
          <span>★</span>
        </div>
      </header>

      {/* NEW 2-COLUMN LAYOUT (Left Sidebar has been completely removed) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
        
        {/* LEFT/CENTER INTERACTIVE CONTAINER (Web Match Stuff Cards) */}
        <main className="lg:col-span-2 flex flex-col gap-6">
          
          {/* TOP RESULTS DASHBOARD HERO PANEL */}
          <div className="bg-[#111827] border border-slate-800/80 rounded-2xl p-5 shadow-2xl">
            <input
              type="text"
              value={resultsDay}
              onChange={(e) => setResultsDay(e.target.value)}
              className="bg-transparent text-xs font-bold text-center tracking-widest text-slate-400 uppercase w-full mb-5 border-none outline-none focus:text-white"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* THE UNIONS */}
              <div className="bg-[#0c1f17] p-4 rounded-xl border border-emerald-950/60 flex flex-col items-center group">
                <span className="text-[11px] font-black tracking-widest text-emerald-400 mb-3">THE UNIONS</span>
                <UnionLogo />
                <input
                  type="number"
                  value={topScores.unions}
                  onChange={(e) => updateTopScore('unions', e.target.value)}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-emerald-300"
                />
              </div>

              {/* THE BOWNES */}
              <div className="bg-[#1c1613] p-4 rounded-xl border border-amber-950/60 flex flex-col items-center group">
                <span className="text-[11px] font-black tracking-widest text-amber-500 mb-3">THE BOWNES</span>
                <BowneLogo />
                <input
                  type="number"
                  value={topScores.bownes}
                  onChange={(e) => updateTopScore('bownes', e.target.value)}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-amber-400"
                />
              </div>

              {/* THE SANFORDS */}
              <div className="bg-[#241712] p-4 rounded-xl border border-orange-950/60 flex flex-col items-center group">
                <span className="text-[11px] font-black tracking-widest text-orange-500 mb-3">THE SANFORDS</span>
                <SanfordLogo />
                <input
                  type="number"
                  value={topScores.sanfords}
                  onChange={(e) => updateTopScore('sanfords', e.target.value)}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-orange-400"
                />
              </div>

              {/* THE BARCLAYS */}
              <div className="bg-[#0f1626] p-4 rounded-xl border border-blue-950/60 flex flex-col items-center group">
                <span className="text-[11px] font-black tracking-widest text-blue-400 mb-3">THE BARCLAYS</span>
                <BarclaysLogo />
                <input
                  type="number"
                  value={topScores.barclays}
                  onChange={(e) => updateTopScore('barclays', e.target.value)}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-blue-300"
                />
              </div>
            </div>
          </div>

          {/* DETAILED MATCHUPS LIST VIEW */}
          <div className="flex flex-col gap-4">
            
            {/* Match Card 1 */}
            <div className="bg-gradient-to-r from-[#2a160e] to-[#141110] border border-orange-950/70 rounded-xl p-4 flex items-center justify-between shadow-md hover:border-orange-500/20 transition-all">
              <div className="flex items-center gap-4 w-5/12">
                <SanfordLogo />
                <span className="font-extrabold tracking-wider text-sm text-orange-400">THE SANFORDS</span>
              </div>
              <div className="flex items-center justify-center gap-3 w-2/12">
                <input 
                  type="number" 
                  value={gameScores.sanfordsGame} 
                  onChange={(e) => updateGameScore('sanfordsGame', e.target.value)}
                  className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-orange-400"
                />
                <span className="text-[10px] font-black tracking-tighter bg-black/50 px-2 py-1 rounded border border-slate-800">VS</span>
                <input 
                  type="number" 
                  value={gameScores.bownesGame} 
                  onChange={(e) => updateGameScore('bownesGame', e.target.value)}
                  className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-amber-500"
                />
              </div>
              <div className="flex items-center justify-end gap-4 w-5/12">
                <span className="font-extrabold tracking-wider text-sm text-amber-500">THE BOWNES</span>
                <BowneLogo />
              </div>
            </div>

            {/* Match Card 2 */}
            <div className="bg-gradient-to-r from-[#0b1f16] to-[#0d1624] border border-emerald-950/70 rounded-xl p-4 flex items-center justify-between shadow-md hover:border-emerald-500/20 transition-all">
              <div className="flex items-center gap-4 w-5/12">
                <UnionLogo />
                <span className="font-extrabold tracking-wider text-sm text-emerald-400">THE UNIONS</span>
              </div>
              <div className="flex items-center justify-center gap-3 w-2/12">
                <input 
                  type="number" 
                  value={gameScores.unionsGame} 
                  onChange={(e) => updateGameScore('unionsGame', e.target.value)}
                  className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-emerald-400"
                />
                <span className="text-[10px] font-black tracking-tighter bg-black/50 px-2 py-1 rounded border border-slate-800">VS</span>
                <input 
                  type="number" 
                  value={gameScores.barclaysGame} 
                  onChange={(e) => updateGameScore('barclaysGame', e.target.value)}
                  className="bg-transparent text-3xl font-black text-center w-12 border-none outline-none text-blue-400"
                />
              </div>
              <div className="flex items-center justify-end gap-4 w-5/12">
                <span className="font-extrabold tracking-wider text-sm text-blue-400">THE BARCLAYS</span>
                <BarclaysLogo />
              </div>
            </div>
          </div>

          {/* TIMELINE TIMETABLE CONTAINER SLAG */}
          <div className="bg-[#0c1222] border border-slate-900 rounded-xl p-5 text-center shadow-inner flex flex-col justify-center items-center">
            <span className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-2">TIMELINE METADATA BANNER</span>
            <input 
              type="text"
              value={timelineText}
              onChange={(e) => setTimelineText(e.target.value)}
              className="bg-transparent font-black text-xl text-slate-200 w-full text-center border-none outline-none uppercase tracking-wide"
            />
          </div>
        </main>

        {/* RIGHT COLUMN: RE-DESIGNED TEAMS & ROSTERS SECTION (2-Column Grid Layout) */}
        <aside className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 shadow-2xl">
          <h3 className="text-center font-black tracking-widest text-xs text-slate-400 uppercase border-b border-slate-800/80 pb-3 mb-5">
            TEAMS & ROSTERS
          </h3>
          
          {/* Split grid layout looking exactly like the tournament image roster blocks */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            
            {/* The Unions Side Block */}
            <div className="space-y-3">
              <div className="bg-[#0c1f17] text-emerald-400 font-black text-[10px] p-2 rounded border border-emerald-900/40 text-center tracking-widest uppercase">
                THE UNIONS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.unions.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1 bg-slate-900/40 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-800">
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      onChange={(e) => updatePlayerName('unions', idx, e.target.value)} 
                      className="bg-transparent border-none p-0 w-full outline-none focus:text-white"
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* The Bownes Side Block */}
            <div className="space-y-3">
              <div className="bg-[#1c1613] text-amber-500 font-black text-[10px] p-2 rounded border border-amber-900/40 text-center tracking-widest uppercase">
                THE BOWNES
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.bownes.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1 bg-slate-900/40 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-800">
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      onChange={(e) => updatePlayerName('bownes', idx, e.target.value)} 
                      className="bg-transparent border-none p-0 w-full outline-none focus:text-white"
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* The Sanfords Side Block */}
            <div className="space-y-3">
              <div className="bg-[#241712] text-orange-500 font-black text-[10px] p-2 rounded border border-orange-900/40 text-center tracking-widest uppercase">
                THE SANFORDS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.sanfords.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1 bg-slate-900/40 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-800">
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      onChange={(e) => updatePlayerName('sanfords', idx, e.target.value)} 
                      className="bg-transparent border-none p-0 w-full outline-none focus:text-white"
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* The Barclays Side Block */}
            <div className="space-y-3">
              <div className="bg-[#0f1626] text-blue-400 font-black text-[10px] p-2 rounded border border-blue-900/40 text-center tracking-widest uppercase">
                THE BARCLAYS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.barclays.map((player, idx) => (
                  <li key={idx} className="flex items-center gap-1 bg-slate-900/40 px-1.5 py-0.5 rounded border border-transparent hover:border-slate-800">
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      onChange={(e) => updatePlayerName('barclays', idx, e.target.value)} 
                      className="bg-transparent border-none p-0 w-full outline-none focus:text-white"
                    />
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </aside>

      </div>

      {/* FOOTER METADATA */}
      <footer className="text-center mt-12 text-slate-600 text-[10px] tracking-widest font-bold uppercase">
        COMPETE · RESPECT · LEGENDARY
      </footer>
    </div>
  );
}