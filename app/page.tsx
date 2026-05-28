"use client";

import React, { useState } from "react";

// ==========================================
// 1. BRAND NEW DETAILED TEAM SVG LOGOS
// ==========================================

const UnionLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#14532d" stroke="#4ade80" strokeWidth="3"/>
    <path d="M25 50C35 35 65 35 75 50C65 65 35 65 25 50Z" fill="#a7f3d0"/>
    <path d="M72 50L85 40V60L72 50Z" fill="#4ade80"/>
    <circle cx="40" cy="46" r="3" fill="#14532d"/>
    <path d="M30 70Q50 65 70 70" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BowneLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 20L50 45L65 20" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 20L50 42L58 20" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="60" r="24" fill="url(#goldMedal)" stroke="#fbbf24" strokeWidth="3"/>
    <circle cx="50" cy="60" r="18" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3"/>
    <text x="50" y="69" fontSize="24" fontWeight="black" fill="#78350f" textAnchor="middle">1</text>
    <defs>
      <linearGradient id="goldMedal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

const SanfordLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="#ea580c" stroke="#fff" strokeWidth="2"/>
    <path d="M8 50H92" stroke="#000" strokeWidth="3"/>
    <path d="M50 8V92" stroke="#000" strokeWidth="3"/>
    <path d="M20 20C35 32 35 68 20 80" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
    <path d="M80 20C65 32 65 68 80 80" stroke="#000" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const BarclaysLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20C45 20 50 10 50 10C50 10 55 20 80 20C80 55 68 78 50 90C32 78 20 55 20 20Z" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M30 28C45 28 50 22 50 22C50 22 55 28 70 28C70 50 60 68 50 78C40 68 30 50 30 28Z" fill="#2563eb"/>
    <polygon points="50,38 53,45 61,45 55,50 57,58 50,53 43,58 45,50 39,45 47,45" fill="#93c5fd"/>
  </svg>
);

const TeamLogoRenderer = ({ teamKey }: { teamKey: string }) => {
  switch (teamKey) {
    case "unions": return <UnionLogo />;
    case "bownes": return <BowneLogo />;
    case "sanfords": return <SanfordLogo />;
    case "barclays": return <BarclaysLogo />;
    default: return null;
  }
};

export default function Home() {
  // Administrative Permission Level Access Control
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const [tournamentTitle, setTournamentTitle] = useState("PS20 MIKE LEGEND TOURNAMENT");
  const [subHeader, setSubHeader] = useState("BASKETBALL SCHEDULE");
  const [resultsDay, setResultsDay] = useState("TODAY'S RESULTS - THURSDAY MAY 28TH");

  const [topScores, setTopScores] = useState({ unions: 0, bownes: 0, sanfords: 0, barclays: 0 });
  
  const [match1, setMatch1] = useState({ teamA: "sanfords", teamB: "unions", scoreA: 0, scoreB: 0, foulsA: 0, foulsB: 0 });
  const [match2, setMatch2] = useState({ teamA: "bownes", teamB: "barclays", scoreA: 0, scoreB: 0, foulsA: 0, foulsB: 0 });

  const [timelineText, setTimelineText] = useState("WEEK 2 SCHEDULE: TBA (To Be Announced)");

  const [rosters, setRosters] = useState({
    unions: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "腰王", "MING", "好好睡觉"],
    bownes: ["yuxuan", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "炜", "Ye 哥", "芥琵"],
    sanfords: ["Steven", "William_Yan", "绿豆赚", "09^", "ishtiaq", "Ryan", "Beau", "Leo"],
    barclays: ["kys r", "YJH —", "胡内", "篮板王", "稳", "Syw", "Sean", "Taotao", "高手", "James c"],
  });

  const getTeamColorClass = (teamKey: string) => {
    switch (teamKey) {
      case "unions": return "text-emerald-400";
      case "bownes": return "text-amber-500";
      case "sanfords": return "text-orange-500";
      case "barclays": return "text-blue-400";
      default: return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-white p-6 font-sans antialiased">
      
      {/* ADMINISTRATIVE STATUS CONSOLE OVERLAY */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-end items-center gap-3 bg-[#111827] p-3 rounded-xl border border-slate-800">
        <span className="text-xs font-semibold tracking-wider text-slate-400">AUTHORIZATION LEVEL:</span>
        <select 
          value={isAdmin ? "admin" : "user"} 
          onChange={(e) => setIsAdmin(e.target.value === "admin")}
          className="bg-[#1f2937] text-xs text-orange-400 font-bold px-3 py-1.5 rounded border border-slate-700 outline-none cursor-pointer"
        >
          <option value="admin">HIGHER ADMINISTRATIVE LEVEL (ADMIN)</option>
          <option value="user">SPECTATOR LEVEL (USER - READ ONLY)</option>
        </select>
      </div>

      {/* GLOBAL HEADER */}
      <header className="text-center mb-8 border-b border-slate-800 pb-5">
        <input
          type="text"
          value={tournamentTitle}
          disabled={!isAdmin}
          onChange={(e) => setTournamentTitle(e.target.value)}
          className="bg-transparent font-black text-4xl text-center tracking-wider w-full uppercase outline-none border-none disabled:cursor-not-allowed"
        />
        <div className="flex justify-center items-center gap-2 mt-2 font-bold text-orange-500 tracking-widest text-sm">
          <span>★</span>
          <input
            type="text"
            value={subHeader}
            disabled={!isAdmin}
            onChange={(e) => setSubHeader(e.target.value)}
            className="bg-transparent font-bold text-center tracking-widest uppercase outline-none text-orange-500 border-none w-64 text-xs disabled:cursor-not-allowed"
          />
          <span>★</span>
        </div>
      </header>

      {/* TWO-COLUMN MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
        
        {/* MATCH STUFF CARDS ROW BOXES */}
        <main className="lg:col-span-2 flex flex-col gap-6">
          
          {/* HERO PREVIEW DASHBOARD */}
          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-2xl">
            <input
              type="text"
              value={resultsDay}
              disabled={!isAdmin}
              onChange={(e) => setResultsDay(e.target.value)}
              className="bg-transparent text-xs font-bold text-center tracking-widest text-slate-400 uppercase w-full mb-5 border-none outline-none disabled:cursor-not-allowed"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* UNIONS PANEL */}
              <div className="bg-[#0c1f17] p-4 rounded-xl border border-emerald-950 flex flex-col items-center">
                <span className="text-[11px] font-black tracking-widest text-emerald-400 mb-3">THE UNIONS</span>
                <UnionLogo />
                <input
                  type="number"
                  value={topScores.unions === 0 ? "" : topScores.unions}
                  placeholder="0"
                  disabled={!isAdmin}
                  onChange={(e) => setTopScores({ ...topScores, unions: parseInt(e.target.value) || 0 })}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-emerald-300 disabled:cursor-not-allowed"
                />
              </div>

              {/* BOWNES PANEL */}
              <div className="bg-[#1c1613] p-4 rounded-xl border border-amber-950 flex flex-col items-center">
                <span className="text-[11px] font-black tracking-widest text-amber-500 mb-3">THE BOWNES</span>
                <BowneLogo />
                <input
                  type="number"
                  value={topScores.bownes === 0 ? "" : topScores.bownes}
                  placeholder="0"
                  disabled={!isAdmin}
                  onChange={(e) => setTopScores({ ...topScores, bownes: parseInt(e.target.value) || 0 })}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-amber-400 disabled:cursor-not-allowed"
                />
              </div>

              {/* SANFORDS PANEL */}
              <div className="bg-[#241712] p-4 rounded-xl border border-orange-950 flex flex-col items-center">
                <span className="text-[11px] font-black tracking-widest text-orange-500 mb-3">THE SANFORDS</span>
                <SanfordLogo />
                <input
                  type="number"
                  value={topScores.sanfords === 0 ? "" : topScores.sanfords}
                  placeholder="0"
                  disabled={!isAdmin}
                  onChange={(e) => setTopScores({ ...topScores, sanfords: parseInt(e.target.value) || 0 })}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-orange-400 disabled:cursor-not-allowed"
                />
              </div>

              {/* BARCLAYS PANEL */}
              <div className="bg-[#0f1626] p-4 rounded-xl border border-blue-950 flex flex-col items-center">
                <span className="text-[11px] font-black tracking-widest text-blue-400 mb-3">THE BARCLAYS</span>
                <BarclaysLogo />
                <input
                  type="number"
                  value={topScores.barclays === 0 ? "" : topScores.barclays}
                  placeholder="0"
                  disabled={!isAdmin}
                  onChange={(e) => setTopScores({ ...topScores, barclays: parseInt(e.target.value) || 0 })}
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-blue-300 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* DYNAMIC MATCHUPS PANELS */}
          <div className="flex flex-col gap-4">
            
            {/* MATCH BOX 1 */}
            <div className="bg-gradient-to-r from-[#1c120c] to-[#0a0f1d] border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-4 w-5/12">
                <TeamLogoRenderer teamKey={match1.teamA} />
                <select 
                  value={match1.teamA} 
                  disabled={!isAdmin}
                  onChange={(e) => setMatch1({ ...match1, teamA: e.target.value })}
                  className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase ${getTeamColorClass(match1.teamA)} disabled:cursor-not-allowed`}
                >
                  <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                  <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                  <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                  <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                </select>
              </div>

              <div className="flex items-center justify-center gap-4 w-3/12">
                <div className="flex flex-col items-center">
                  <input 
                    type="number" 
                    value={match1.scoreA === 0 ? "" : match1.scoreA}
                    placeholder="0"
                    disabled={!isAdmin}
                    onChange={(e) => setMatch1({ ...match1, scoreA: parseInt(e.target.value) || 0 })}
                    className={`bg-transparent text-3xl font-black text-center w-12 border-none outline-none ${getTeamColorClass(match1.teamA)} disabled:cursor-not-allowed`}
                  />
                  <div className="flex items-center text-[10px] text-red-500 gap-0.5">
                    <span>F:</span>
                    <input type="number" placeholder="0" value={match1.foulsA === 0 ? "" : match1.foulsA} disabled={!isAdmin} className="bg-transparent w-6 text-center outline-none border-none p-0 focus:text-white" onChange={(e) => setMatch1({...match1, foulsA: parseInt(e.target.value) || 0})}/>
                  </div>
                </div>

                <span className="text-[10px] font-black tracking-tighter bg-black/50 px-2 py-1 rounded border border-slate-800 h-6 flex items-center">VS</span>

                <div className="flex flex-col items-center">
                  <input 
                    type="number" 
                    value={match1.scoreB === 0 ? "" : match1.scoreB}
                    placeholder="0"
                    disabled={!isAdmin}
                    onChange={(e) => setMatch1({ ...match1, scoreB: parseInt(e.target.value) || 0 })}
                    className={`bg-transparent text-3xl font-black text-center w-12 border-none outline-none ${getTeamColorClass(match1.teamB)} disabled:cursor-not-allowed`}
                  />
                  <div className="flex items-center text-[10px] text-red-500 gap-0.5">
                    <span>F:</span>
                    <input type="number" placeholder="0" value={match1.foulsB === 0 ? "" : match1.foulsB} disabled={!isAdmin} className="bg-transparent w-6 text-center outline-none border-none p-0 focus:text-white" onChange={(e) => setMatch1({...match1, foulsB: parseInt(e.target.value) || 0})}/>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 w-5/12">
                <select 
                  value={match1.teamB} 
                  disabled={!isAdmin}
                  onChange={(e) => setMatch1({ ...match1, teamB: e.target.value })}
                  className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase text-right ${getTeamColorClass(match1.teamB)} disabled:cursor-not-allowed`}
                >
                  <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                  <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                  <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                  <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                </select>
                <TeamLogoRenderer teamKey={match1.teamB} />
              </div>
            </div>

            {/* MATCH BOX 2 */}
            <div className="bg-gradient-to-r from-[#171311] to-[#0a0f1d] border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-4 w-5/12">
                <TeamLogoRenderer teamKey={match2.teamA} />
                <select 
                  value={match2.teamA} 
                  disabled={!isAdmin}
                  onChange={(e) => setMatch2({ ...match2, teamA: e.target.value })}
                  className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase ${getTeamColorClass(match2.teamA)} disabled:cursor-not-allowed`}
                >
                  <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                  <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                  <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                  <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                </select>
              </div>

              <div className="flex items-center justify-center gap-4 w-3/12">
                <div className="flex flex-col items-center">
                  <input 
                    type="number" 
                    value={match2.scoreA === 0 ? "" : match2.scoreA}
                    placeholder="0"
                    disabled={!isAdmin}
                    onChange={(e) => setMatch2({ ...match2, scoreA: parseInt(e.target.value) || 0 })}
                    className={`bg-transparent text-3xl font-black text-center w-12 border-none outline-none ${getTeamColorClass(match2.teamA)} disabled:cursor-not-allowed`}
                  />
                  <div className="flex items-center text-[10px] text-red-500 gap-0.5">
                    <span>F:</span>
                    <input type="number" placeholder="0" value={match2.foulsA === 0 ? "" : match2.foulsA} disabled={!isAdmin} className="bg-transparent w-6 text-center outline-none border-none p-0 focus:text-white" onChange={(e) => setMatch2({...match2, foulsA: parseInt(e.target.value) || 0})}/>
                  </div>
                </div>

                <span className="text-[10px] font-black tracking-tighter bg-black/50 px-2 py-1 rounded border border-slate-800 h-6 flex items-center">VS</span>

                <div className="flex flex-col items-center">
                  <input 
                    type="number" 
                    value={match2.scoreB === 0 ? "" : match2.scoreB}
                    placeholder="0"
                    disabled={!isAdmin}
                    onChange={(e) => setMatch2({ ...match2, scoreB: parseInt(e.target.value) || 0 })}
                    className={`bg-transparent text-3xl font-black text-center w-12 border-none outline-none ${getTeamColorClass(match2.teamB)} disabled:cursor-not-allowed`}
                  />
                  <div className="flex items-center text-[10px] text-red-500 gap-0.5">
                    <span>F:</span>
                    <input type="number" placeholder="0" value={match2.foulsB === 0 ? "" : match2.foulsB} disabled={!isAdmin} className="bg-transparent w-6 text-center outline-none border-none p-0 focus:text-white" onChange={(e) => setMatch2({...match2, foulsB: parseInt(e.target.value) || 0})}/>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 w-5/12">
                <select 
                  value={match2.teamB} 
                  disabled={!isAdmin}
                  onChange={(e) => setMatch2({ ...match2, teamB: e.target.value })}
                  className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase text-right ${getTeamColorClass(match2.teamB)} disabled:cursor-not-allowed`}
                >
                  <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                  <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                  <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                  <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                </select>
                <TeamLogoRenderer teamKey={match2.teamB} />
              </div>
            </div>

          </div>

          {/* TIMELINE BANNER */}
          <div className="bg-[#0c1222] border border-slate-900 rounded-xl p-5 text-center shadow-inner flex flex-col justify-center items-center">
            <span className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-2">TIMELINE METADATA BANNER</span>
            <input 
              type="text"
              value={timelineText}
              disabled={!isAdmin}
              onChange={(e) => setTimelineText(e.target.value)}
              className="bg-transparent font-black text-xl text-slate-200 w-full text-center border-none outline-none uppercase tracking-wide disabled:cursor-not-allowed"
            />
          </div>
        </main>

        {/* ROSTERS COLUMN PANELS (Modified to respect Authorization Levels) */}
        <aside className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 shadow-2xl lg:col-span-1">
          <h3 className="text-center font-black tracking-widest text-xs text-slate-400 uppercase border-b border-slate-800 pb-3 mb-5">
            TEAMS & ROSTERS
          </h3>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            
            {/* UNIONS */}
            <div className="space-y-3">
              <div className="bg-[#0c1f17] text-emerald-400 font-black text-[10px] p-2 rounded border border-emerald-900/40 text-center tracking-widest uppercase">
                THE UNIONS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.unions.map((player, idx) => (
                  <li key={idx} className={`flex items-center gap-1 px-1.5 py-0.5 rounded border border-transparent ${isAdmin ? 'bg-slate-900/40' : 'bg-transparent'}`}>
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      disabled={!isAdmin}
                      onChange={(e) => {
                        const copy = [...rosters.unions];
                        copy[idx] = e.target.value;
                        setRosters({ ...rosters, unions: copy });
                      }} 
                      className={`bg-transparent border-none p-0 w-full outline-none focus:text-white ${!isAdmin ? 'text-slate-200 font-normal cursor-default pointer-events-none' : ''}`}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* BOWNES */}
            <div className="space-y-3">
              <div className="bg-[#1c1613] text-amber-500 font-black text-[10px] p-2 rounded border border-amber-900/40 text-center tracking-widest uppercase">
                THE BOWNES
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.bownes.map((player, idx) => (
                  <li key={idx} className={`flex items-center gap-1 px-1.5 py-0.5 rounded border border-transparent ${isAdmin ? 'bg-slate-900/40' : 'bg-transparent'}`}>
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      disabled={!isAdmin}
                      onChange={(e) => {
                        const copy = [...rosters.bownes];
                        copy[idx] = e.target.value;
                        setRosters({ ...rosters, bownes: copy });
                      }} 
                      className={`bg-transparent border-none p-0 w-full outline-none focus:text-white ${!isAdmin ? 'text-slate-200 font-normal cursor-default pointer-events-none' : ''}`}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* SANFORDS */}
            <div className="space-y-3">
              <div className="bg-[#241712] text-orange-500 font-black text-[10px] p-2 rounded border border-orange-900/40 text-center tracking-widest uppercase">
                THE SANFORDS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.sanfords.map((player, idx) => (
                  <li key={idx} className={`flex items-center gap-1 px-1.5 py-0.5 rounded border border-transparent ${isAdmin ? 'bg-slate-900/40' : 'bg-transparent'}`}>
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      disabled={!isAdmin}
                      onChange={(e) => {
                        const copy = [...rosters.sanfords];
                        copy[idx] = e.target.value;
                        setRosters({ ...rosters, sanfords: copy });
                      }} 
                      className={`bg-transparent border-none p-0 w-full outline-none focus:text-white ${!isAdmin ? 'text-slate-200 font-normal cursor-default pointer-events-none' : ''}`}
                    />
                  </li>
                ))}
              </ol>
            </div>

            {/* BARCLAYS */}
            <div className="space-y-3">
              <div className="bg-[#0f1626] text-blue-400 font-black text-[10px] p-2 rounded border border-blue-900/40 text-center tracking-widest uppercase">
                THE BARCLAYS
              </div>
              <ol className="space-y-1.5 text-xs text-slate-300 pl-1">
                {rosters.barclays.map((player, idx) => (
                  <li key={idx} className={`flex items-center gap-1 px-1.5 py-0.5 rounded border border-transparent ${isAdmin ? 'bg-slate-900/40' : 'bg-transparent'}`}>
                    <span className="text-slate-500 font-mono text-[10px] w-3.5">{idx + 1}.</span>
                    <input 
                      type="text"
                      value={player} 
                      disabled={!isAdmin}
                      onChange={(e) => {
                        const copy = [...rosters.barclays];
                        copy[idx] = e.target.value;
                        setRosters({ ...rosters, barclays: copy });
                      }} 
                      className={`bg-transparent border-none p-0 w-full outline-none focus:text-white ${!isAdmin ? 'text-slate-200 font-normal cursor-default pointer-events-none' : ''}`}
                    />
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}