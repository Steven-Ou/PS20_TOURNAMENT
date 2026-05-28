"use client";

import React, { useState } from 'react';

// Define clean types for our dashboard state structure
interface TeamRoster {
  name: string;
  color: string;
  textColor: string;
  players: string[];
}

export default function TournamentDashboard() {
  // 1. Core State Management for everything on the board
  const [isEditing, setIsEditing] = useState(false);
  const [dateText, setDateText] = useState("WEDNESDAY 5/27/2026");
  const [upcomingText, setUpcomingText] = useState("WEEK 2 SCHEDULE: TBA\n(To Be Announced)");

  // Live Matchup Scores state
  const [scores, setScores] = useState({
    unionsTop: 46,
    bownesTop: 18,
    sanfordsTop: 31,
    barclaysTop: 24,
    sanfordsMid: 31,
    bownesMid: 30,
    unionsMid: 36,
    barclaysMid: 34,
  });

  // Team Rosters state
  const [teams, setTeams] = useState<Record<string, TeamRoster>>({
    unions: {
      name: "THE UNIONS",
      color: "bg-emerald-900 border-emerald-700",
      textColor: "text-emerald-400",
      players: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "猴王", "MING", "好好睡觉"],
    },
    bownes: {
      name: "THE BOWNES",
      color: "bg-stone-900 border-stone-700",
      textColor: "text-stone-300",
      players: ["SHBW", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "炜", "Ye 哥", "芳昆"],
    },
    sanfords: {
      name: "THE SANFORDS",
      color: "bg-orange-800 border-orange-600",
      textColor: "text-orange-400",
      players: ["Steven", "William_Yan", "绿豆糕", "09^", "WhilarYan", "易陌讳", "Ryan", "Beau", "Leo", "Mwxot"],
    },
    barclays: {
      name: "THE BARCLAYS",
      color: "bg-slate-900 border-slate-700",
      textColor: "text-blue-400",
      players: ["kys r", "YJH ~", "胡内", "篮板王", "穗", "Syw", "Sean", "Taotao", "高手", "James c"],
    },
  });

  // Helper functions to handle dynamic string updates
  const handlePlayerChange = (teamKey: string, index: number, value: string) => {
    setTeams(prev => {
      const updatedPlayers = [...prev[teamKey].players];
      updatedPlayers[index] = value;
      return {
        ...prev,
        [teamKey]: { ...prev[teamKey], players: updatedPlayers }
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1019] text-white font-sans p-6 flex flex-col items-center">
      
      {/* Control Panel Header Toggle */}
      <div className="w-full max-w-6xl mb-4 flex justify-end">
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className={`px-6 py-2 rounded font-bold tracking-wide transition ${isEditing ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          {isEditing ? "💾 Save Layout Modifications" : "⚙️ Open Board Editor"}
        </button>
      </div>

      {/* =========================================================================
          MAIN SCHEDULE DASHBOARD BOARD CONTAINER
         ========================================================================= */}
      <div className="w-full max-w-6xl bg-[#0e151f] border border-slate-800 rounded-lg p-6 shadow-2xl relative">
        
        {/* Main Header Row */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold tracking-wider text-white">PS20 MIKE LEGEND TOURNAMENT</h1>
          <h2 className="text-xl font-bold tracking-widest text-orange-500 mt-1">★ BASKETBALL SCHEDULE ★</h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* LEFT PANEL: DATE & MINI HISTORY TRACKER */}
          <div className="col-span-2 bg-[#0b1019] border border-slate-800 p-3 rounded flex flex-col justify-between text-center text-xs">
            <div>
              <div className="text-slate-400 font-bold tracking-wider">DATE</div>
              <div className="text-orange-500 font-bold mt-2">TODAY</div>
              {isEditing ? (
                <input 
                  type="text" 
                  value={dateText} 
                  onChange={(e) => setDateText(e.target.value)} 
                  className="bg-slate-800 text-center text-white w-full font-bold mt-1 p-1 rounded border border-slate-600"
                />
              ) : (
                <div className="font-bold text-sm leading-tight text-slate-200 mt-1">{dateText}</div>
              )}
            </div>

            <div className="border-t border-b border-slate-800 my-4 py-3 space-y-3">
              <div className="text-slate-500 font-bold tracking-wider">TODAY'S RESULTS</div>
              <div className="text-orange-600 font-bold text-[10px]">THE SANFORDS <span className="text-white">31</span> vs <span className="text-white">30</span></div>
              <div className="text-emerald-500 font-bold text-[10px]">THE BOWNES <span className="text-white">36</span> vs <span className="text-white">34</span></div>
            </div>

            <div>
              <div className="text-orange-500 font-bold tracking-wider">UPCOMING</div>
              <div className="text-slate-300 font-bold mt-1">WEEK 2</div>
              <div className="text-slate-500 mt-1">MONDAY - FRIDAY</div>
            </div>
          </div>

          {/* CENTER PANEL: MATCHUPS AND RESULTS LAYOUTS */}
          <div className="col-span-7 flex flex-col space-y-4">
            
            {/* Top Row: Clean Today's Results Matchup Render Component */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-4">
              <div className="text-center text-xs font-bold text-slate-400 tracking-wider mb-3">
                TODAY'S RESULTS - {dateText}
              </div>
              
              {/* Dynamic 2-Grid Separation (Matchup 1 vs Matchup 2) */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Matchup Group 1 */}
                <div className="grid grid-cols-2 gap-2 bg-[#0e151f] p-2 rounded border border-slate-800 relative">
                  <div className={`p-3 rounded text-center border ${teams.unions.color}`}>
                    <div className="text-xs font-bold text-white mb-1">UNIONS</div>
                    {isEditing ? (
                      <input type="number" value={scores.unionsTop} onChange={(e) => setScores({...scores, unionsTop: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-xl font-bold"/>
                    ) : (
                      <span className="text-3xl font-extrabold tracking-tight text-emerald-400">{scores.unionsTop}</span>
                    )}
                  </div>
                  <div className={`p-3 rounded text-center border ${teams.bownes.color}`}>
                    <div className="text-xs font-bold text-white mb-1">BOWNES</div>
                    {isEditing ? (
                      <input type="number" value={scores.bownesTop} onChange={(e) => setScores({...scores, bownesTop: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-xl font-bold"/>
                    ) : (
                      <span className="text-3xl font-extrabold tracking-tight text-stone-400">{scores.bownesTop}</span>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1019] border border-slate-800 px-2 py-0.5 rounded text-xs font-bold text-slate-400">VS</div>
                </div>

                {/* Matchup Group 2 */}
                <div className="grid grid-cols-2 gap-2 bg-[#0e151f] p-2 rounded border border-slate-800 relative">
                  <div className={`p-3 rounded text-center border ${teams.sanfords.color}`}>
                    <div className="text-xs font-bold text-white mb-1">SANFORDS</div>
                    {isEditing ? (
                      <input type="number" value={scores.sanfordsTop} onChange={(e) => setScores({...scores, sanfordsTop: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-xl font-bold"/>
                    ) : (
                      <span className="text-3xl font-extrabold tracking-tight text-orange-400">{scores.sanfordsTop}</span>
                    )}
                  </div>
                  <div className={`p-3 rounded text-center border ${teams.barclays.color}`}>
                    <div className="text-xs font-bold text-white mb-1">BARCLAYS</div>
                    {isEditing ? (
                      <input type="number" value={scores.barclaysTop} onChange={(e) => setScores({...scores, barclaysTop: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-xl font-bold"/>
                    ) : (
                      <span className="text-3xl font-extrabold tracking-tight text-blue-400">{scores.barclaysTop}</span>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1019] border border-slate-800 px-2 py-0.5 rounded text-xs font-bold text-slate-400">VS</div>
                </div>

              </div>
            </div>

            {/* Middle Row: Detailed Full Scoring Panels */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-4 space-y-3">
              <div className="flex items-center justify-between bg-orange-950/40 border border-orange-900/60 p-3 rounded">
                <span className="font-bold text-orange-400 tracking-wide">THE SANFORDS</span>
                {isEditing ? (
                  <input type="number" value={scores.sanfordsMid} onChange={(e) => setScores({...scores, sanfordsMid: parseInt(e.target.value) || 0})} className="bg-slate-800 w-20 text-center rounded font-bold p-1"/>
                ) : (
                  <span className="text-2xl font-black text-orange-400">{scores.sanfordsMid}</span>
                )}
                <span className="text-xs font-extrabold bg-slate-800 px-3 py-1 rounded-full text-slate-400">VS</span>
                {isEditing ? (
                  <input type="number" value={scores.bownesMid} onChange={(e) => setScores({...scores, bownesMid: parseInt(e.target.value) || 0})} className="bg-slate-800 w-20 text-center rounded font-bold p-1"/>
                ) : (
                  <span className="text-2xl font-black text-stone-400">{scores.bownesMid}</span>
                )}
                <span className="font-bold text-stone-400 tracking-wide">THE BOWNES</span>
              </div>

              <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-900/60 p-3 rounded">
                <span className="font-bold text-emerald-400 tracking-wide">THE UNIONS</span>
                {isEditing ? (
                  <input type="number" value={scores.unionsMid} onChange={(e) => setScores({...scores, unionsMid: parseInt(e.target.value) || 0})} className="bg-slate-800 w-20 text-center rounded font-bold p-1"/>
                ) : (
                  <span className="text-2xl font-black text-emerald-400">{scores.unionsMid}</span>
                )}
                <span className="text-xs font-extrabold bg-slate-800 px-3 py-1 rounded-full text-slate-400">VS</span>
                {isEditing ? (
                  <input type="number" value={scores.barclaysMid} onChange={(e) => setScores({...scores, barclaysMid: parseInt(e.target.value) || 0})} className="bg-slate-800 w-20 text-center rounded font-bold p-1"/>
                ) : (
                  <span className="text-2xl font-black text-blue-400">{scores.barclaysMid}</span>
                )}
                <span className="font-bold text-blue-400 tracking-wide">THE BARCLAYS</span>
              </div>
            </div>

            {/* Bottom Row: Dynamic Schedule Box Panel */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-6 flex flex-col items-center justify-center min-h-[140px] text-center">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-2">UPCOMING TIMELINE CONTAINER</div>
              {isEditing ? (
                <textarea 
                  value={upcomingText} 
                  onChange={(e) => setUpcomingText(e.target.value)}
                  rows={2}
                  className="bg-slate-800 text-center text-white w-full max-w-md p-2 rounded border border-slate-600 font-mono text-sm"
                />
              ) : (
                <div className="text-2xl font-black tracking-wide text-slate-200 whitespace-pre-line">
                  {upcomingText}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT PANEL: LIVE TEAMS & ROSTERS MANAGER */}
          <div className="col-span-3 bg-[#0b1019] border border-slate-800 rounded p-3 flex flex-col space-y-4">
            <div className="text-center text-xs font-bold text-slate-400 tracking-wider border-b border-slate-800 pb-2">
              TEAMS & ROSTERS
            </div>
            
            <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[460px] pr-1 scrollbar-thin">
              {Object.entries(teams).map(([teamKey, team]) => (
                <div key={teamKey} className="space-y-1">
                  <div className={`text-[11px] font-bold px-2 py-0.5 rounded tracking-wider ${team.color} text-white`}>
                    {team.name}
                  </div>
                  <div className="bg-[#0e151f] p-2 rounded border border-slate-800/80 space-y-1">
                    {team.players.map((player, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-400 font-mono">
                        <span className="w-4 text-slate-600 text-[10px]">{idx + 1}.</span>
                        {isEditing ? (
                          <input 
                            type="text" 
                            value={player} 
                            onChange={(e) => handlePlayerChange(teamKey, idx, e.target.value)}
                            className="bg-slate-800 text-white text-xs p-0.5 rounded w-full border border-slate-700 font-sans"
                          />
                        ) : (
                          <span className="truncate pl-1 text-slate-300">{player}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Board Bottom Branding Tagline Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-center items-center space-x-6 text-[10px] font-bold text-slate-500 tracking-widest">
          <span>COMPETE.</span>
          <span>RESPECT.</span>
          <span className="text-orange-500/80">LEGENDARY.</span>
        </div>
      </div>
    </div>
  );
}