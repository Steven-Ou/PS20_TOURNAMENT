"use client";

import React, { useState, useEffect } from "react";

// ==========================================
// 1. DETAIL-ORIENTED TEAM SVG LOGOS
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

const EmptyPlaceholderLogo = () => (
  <div className="w-12 h-12 rounded-full border border-dashed border-slate-700 flex items-center justify-center text-slate-600 font-bold text-xs">
    —
  </div>
);

const TeamLogoRenderer = ({ teamKey }: { teamKey: string }) => {
  switch (teamKey) {
    case "unions": return <UnionLogo />;
    case "bownes": return <BowneLogo />;
    case "sanfords": return <SanfordLogo />;
    case "barclays": return <BarclaysLogo />;
    default: return <EmptyPlaceholderLogo />;
  }
};

interface MatchData {
  id: number;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  foulsA: number;
  foulsB: number;
}

export default function Home() {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Structural Dashboard Content States
  const [tournamentTitle, setTournamentTitle] = useState("PS20 MIKE LEGEND TOURNAMENT");
  const [subHeader, setSubHeader] = useState("BASKETBALL SCHEDULE");
  const [resultsDay, setResultsDay] = useState("TODAY'S RESULTS - THURSDAY MAY 28TH");
  const [topScores, setTopScores] = useState({ unions: 0, bownes: 0, sanfords: 0, barclays: 0 });
  
  // Custom Notes / Information state replacing TBA timeline box
  const [noteMessage, setNoteMessage] = useState("ENTER ANNOUNCEMENT HERE...");
  const [hideEliminatedRosters, setHideEliminatedRosters] = useState<boolean>(true);

  const [matches, setMatches] = useState<MatchData[]>([
    { id: 1, teamA: "sanfords", teamB: "unions", scoreA: 0, scoreB: 0, foulsA: 0, foulsB: 0 },
    { id: 2, teamA: "bownes", teamB: "barclays", scoreA: 0, scoreB: 0, foulsA: 0, foulsB: 0 }
  ]);

  const [rosters, setRosters] = useState({
    unions: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "腰王", "MING", "好好睡觉"],
    bownes: ["yuxuan", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "炜", "Ye 哥", "芥琵"],
    sanfords: ["Steven", "William_Yan", "绿豆赚", "09^", "ishtiar", "Ryan", "Beau", "Alex", "Leo"],
    barclays: ["kys r", "YJH —", "胡内", "篮板王", "稳", "Syw", "Sean", "Taotao", "高手", "James c"],
  });

  // 1. HYDRATE CORE CONTENT STATES FROM BROWSER STORAGE ON INGEST
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTitle = localStorage.getItem("ps20_title");
      const savedSub = localStorage.getItem("ps20_subHeader");
      const savedDay = localStorage.getItem("ps20_resultsDay");
      const savedTopScores = localStorage.getItem("ps20_topScores");
      const savedMatches = localStorage.getItem("ps20_matches");
      const savedNote = localStorage.getItem("ps20_noteMessage");
      const savedHideToggle = localStorage.getItem("ps20_hideToggle");
      const savedRosters = localStorage.getItem("ps20_rosters");

      if (savedTitle) setTournamentTitle(savedTitle);
      if (savedSub) setSubHeader(savedSub);
      if (savedDay) setResultsDay(savedDay);
      if (savedTopScores) setTopScores(JSON.parse(savedTopScores));
      if (savedMatches) setMatches(JSON.parse(savedMatches));
      if (savedNote) setNoteMessage(savedNote);
      if (savedHideToggle) setHideEliminatedRosters(JSON.parse(savedHideToggle));
      if (savedRosters) setRosters(JSON.parse(savedRosters));
      
      setIsHydrated(true);
    }
  }, []);

  // 2. RUN BACKGROUND AUTOMATED LOCAL STORAGE SYNC PASSES
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("ps20_title", tournamentTitle);
      localStorage.setItem("ps20_subHeader", subHeader);
      localStorage.setItem("ps20_resultsDay", resultsDay);
      localStorage.setItem("ps20_topScores", JSON.stringify(topScores));
      localStorage.setItem("ps20_matches", JSON.stringify(matches));
      localStorage.setItem("ps20_noteMessage", noteMessage);
      localStorage.setItem("ps20_hideToggle", JSON.stringify(hideEliminatedRosters));
      localStorage.setItem("ps20_rosters", JSON.stringify(rosters));
    }
  }, [tournamentTitle, subHeader, resultsDay, topScores, matches, noteMessage, hideEliminatedRosters, rosters, isHydrated]);

  const getTeamColorClass = (teamKey: string) => {
    switch (teamKey) {
      case "unions": return "text-emerald-400";
      case "bownes": return "text-amber-500";
      case "sanfords": return "text-orange-500";
      case "barclays": return "text-blue-400";
      default: return "text-slate-500";
    }
  };

  const updateMatchField = (id: number, field: keyof MatchData, value: any) => {
    setMatches(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const removeMatchBox = (id: number) => {
    setMatches(prev => prev.filter(m => m.id !== id));
  };

  const addMatchBox = () => {
    const newId = matches.length > 0 ? Math.max(...matches.map(m => m.id)) + 1 : 1;
    setMatches(prev => [...prev, { id: newId, teamA: "sanfords", teamB: "unions", scoreA: 0, scoreB: 0, foulsA: 0, foulsB: 0 }]);
  };

  // Check if a specific team is currently assigned anywhere on the match dashboard list
  const isTeamActive = (teamKey: string) => {
    if (!hideEliminatedRosters) return true; 
    return matches.some(m => m.teamA === teamKey || m.teamB === teamKey);
  };

  if (!isHydrated) {
    return <div className="min-h-screen bg-[#070b13] text-slate-500 flex items-center justify-center font-mono text-xs">LOADING PS20 TOURNAMENT ENGINE...</div>;
  }

  return (
    <div className="min-h-screen bg-[#070b13] text-white p-6 font-sans antialiased">
      
      {/* ADMINISTRATIVE STATUS CONSOLE OVERLAY */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-wrap justify-between items-center gap-3 bg-[#111827] p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          {isAdmin && (
            <button
              onClick={addMatchBox}
              className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs px-3 py-1.5 rounded transition-all flex items-center gap-1 shadow"
            >
              ➕ ADD NEW MATCH BOX
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
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
            {matches.map((match) => (
              <div 
                key={match.id} 
                className="relative bg-gradient-to-r from-[#111827] to-[#0a0f1d] border border-slate-800 rounded-xl p-5 pt-8 flex items-center justify-between shadow-md min-h-[105px]"
              >
                {/* WIPE ROW MODULE */}
                {isAdmin && (
                  <button
                    onClick={() => removeMatchBox(match.id)}
                    className="absolute top-2 right-2 text-slate-500 hover:text-red-400 font-bold text-[10px] bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800 transition-all"
                  >
                    ❌ DELETE BOX
                  </button>
                )}

                {/* TEAM A DROPDOWN BLOCK */}
                <div className="flex items-center gap-4 w-4/12">
                  <TeamLogoRenderer teamKey={match.teamA} />
                  <select 
                    value={match.teamA} 
                    disabled={!isAdmin}
                    onChange={(e) => updateMatchField(match.id, "teamA", e.target.value)}
                    className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase ${getTeamColorClass(match.teamA)} disabled:cursor-not-allowed`}
                  >
                    <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                    <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                    <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                    <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                    <option value="none" className="bg-[#070b13] text-slate-500">N/A (HIDE TEAM)</option>
                  </select>
                </div>

                {/* SCORING AND FOULS CENTER Display */}
                <div className="flex items-center justify-center gap-6 w-4/12 px-2">
                  <div className="flex flex-col items-center justify-center min-w-[50px]">
                    {match.teamA !== "none" ? (
                      <>
                        <input 
                          type="number" 
                          value={match.scoreA === 0 ? "" : match.scoreA}
                          placeholder="0"
                          disabled={!isAdmin}
                          onChange={(e) => updateMatchField(match.id, "scoreA", parseInt(e.target.value) || 0)}
                          className={`bg-transparent text-4xl font-black text-center w-16 border-none outline-none ${getTeamColorClass(match.teamA)} disabled:cursor-not-allowed h-10`}
                        />
                        <div className="flex items-center text-[11px] text-red-500 font-bold mt-1">
                          <span>F:&nbsp;</span>
                          <input 
                            type="number" 
                            placeholder="0" 
                            value={match.foulsA === 0 ? "" : match.foulsA} 
                            disabled={!isAdmin} 
                            className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold focus:text-white" 
                            onChange={(e) => updateMatchField(match.id, "foulsA", parseInt(e.target.value) || 0)}
                          />
                        </div>
                      </>
                    ) : (
                      <span className="text-slate-700 text-xs font-bold">—</span>
                    )}
                  </div>

                  <span className="text-xs font-black tracking-widest bg-black/60 px-2.5 py-1.5 rounded-md border border-slate-800 shadow-sm self-center">VS</span>

                  <div className="flex flex-col items-center justify-center min-w-[50px]">
                    {match.teamB !== "none" ? (
                      <>
                        <input 
                          type="number" 
                          value={match.scoreB === 0 ? "" : match.scoreB}
                          placeholder="0"
                          disabled={!isAdmin}
                          onChange={(e) => updateMatchField(match.id, "scoreB", parseInt(e.target.value) || 0)}
                          className={`bg-transparent text-4xl font-black text-center w-16 border-none outline-none ${getTeamColorClass(match.teamB)} disabled:cursor-not-allowed h-10`}
                        />
                        <div className="flex items-center text-[11px] text-red-500 font-bold mt-1">
                          <span>F:&nbsp;</span>
                          <input 
                            type="number" 
                            placeholder="0" 
                            value={match.foulsB === 0 ? "" : match.foulsB} 
                            disabled={!isAdmin} 
                            className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold focus:text-white" 
                            onChange={(e) => updateMatchField(match.id, "foulsB", parseInt(e.target.value) || 0)}
                          />
                        </div>
                      </>
                    ) : (
                      <span className="text-slate-700 text-xs font-bold">—</span>
                    )}
                  </div>
                </div>

                {/* TEAM B DROPDOWN BLOCK */}
                <div className="flex items-center justify-end gap-4 w-4/12">
                  <select 
                    value={match.teamB} 
                    disabled={!isAdmin}
                    onChange={(e) => updateMatchField(match.id, "teamB", e.target.value)}
                    className={`bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase text-right ${getTeamColorClass(match.teamB)} disabled:cursor-not-allowed`}
                  >
                    <option value="unions" className="bg-[#070b13] text-emerald-400">THE UNIONS</option>
                    <option value="sanfords" className="bg-[#070b13] text-orange-500">THE SANFORDS</option>
                    <option value="bownes" className="bg-[#070b13] text-amber-500">THE BOWNES</option>
                    <option value="barclays" className="bg-[#070b13] text-blue-400">THE BARCLAYS</option>
                    <option value="none" className="bg-[#070b13] text-slate-500">N/A (HIDE TEAM)</option>
                  </select>
                  <TeamLogoRenderer teamKey={match.teamB} />
                </div>
              </div>
            ))}

            {matches.length === 0 && (
              <div className="text-center py-8 bg-slate-900/20 border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs font-bold">
                NO ACTIVE MATCHES ON DISPLAY. CLICK "ADD NEW MATCH BOX" TO START.
              </div>
            )}
          </div>

          {/* BRAND NEW EXPANDED 40PT NOTES / CONTESTANT BROADCAST PANEL */}
          <div className="bg-[#0c1222] border border-slate-800 rounded-xl p-6 text-left shadow-2xl flex flex-col">
            <span className="text-orange-500 text-[11px] uppercase font-black tracking-widest mb-3 flex items-center gap-1.5">
              <span>📢</span> OFFICIAL TOURNAMENT NOTICE BOARD
            </span>
            <textarea 
              value={noteMessage}
              disabled={!isAdmin}
              onChange={(e) => setNoteMessage(e.target.value)}
              placeholder="TYPE TOURNAMENT DETAILS OR ANNOUNCEMENTS HERE..."
              className="bg-[#080d1a]/50 p-4 border border-slate-800/80 rounded-lg text-[40px] font-black text-slate-100 w-full min-h-[220px] outline-none tracking-wide placeholder-slate-700 resize-y leading-tight font-sans disabled:cursor-not-allowed disabled:bg-transparent disabled:border-none disabled:p-0"
            />
          </div>
        </main>

        {/* ROSTERS COLUMN PANELS WITH INTEGRATED HIDE N/A FUNCTIONALITY */}
        <aside className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 shadow-2xl lg:col-span-1">
          <div className="border-b border-slate-800 pb-3 mb-5 flex flex-col gap-2">
            <h3 className="text-center font-black tracking-widest text-xs text-slate-400 uppercase">
              TEAMS & ROSTERS
            </h3>
            {/* HIDE N/A FILTER CONTROL FOR ALL THE ACTIVE ROSTERS */}
            <label className="flex items-center justify-center gap-2 cursor-pointer select-none mt-1">
              <input 
                type="checkbox" 
                checked={hideEliminatedRosters} 
                onChange={(e) => setHideEliminatedRosters(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700 text-orange-500 focus:ring-0 w-3.5 h-3.5"
              />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">HIDE ROSTERS FOR N/A TEAMS</span>
            </label>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            
            {/* UNIONS */}
            {isTeamActive("unions") && (
              <div className="space-y-3 transition-all duration-200">
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
            )}

            {/* BOWNES */}
            {isTeamActive("bownes") && (
              <div className="space-y-3 transition-all duration-200">
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
            )}

            {/* SANFORDS */}
            {isTeamActive("sanfords") && (
              <div className="space-y-3 transition-all duration-200">
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
            )}

            {/* BARCLAYS */}
            {isTeamActive("barclays") && (
              <div className="space-y-3 transition-all duration-200">
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
            )}

          </div>
        </aside>

      </div>
    </div>
  );
}