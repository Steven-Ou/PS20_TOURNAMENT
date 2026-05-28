"use client";

import React, { useState } from 'react';

interface TeamConfig {
  name: string;
  shortName: string;
  colorClass: string;
  textClass: string;
  borderClass: string;
  badgeBg: string;
  players: string[];
}

export default function TournamentDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [dateText, setDateText] = useState("WEDNESDAY 5/27/2026");
  const [upcomingText, setUpcomingText] = useState("WEEK 2 SCHEDULE: TBA\n(To Be Announced)");

  // Live score system state - values are perfectly shared across top and middle views
  const [scores, setScores] = useState({
    unions: 36,
    bownes: 30,
    sanfords: 31,
    barclays: 34,
  });

  // Centralized single source of truth for styles, titles, and team assets
  const [teams, setTeams] = useState<Record<string, TeamConfig>>({
    unions: {
      name: "THE UNIONS",
      shortName: "UNIONS",
      colorClass: "bg-emerald-950/40 border-emerald-900/60",
      textClass: "text-emerald-400",
      borderClass: "border-emerald-700 bg-emerald-900",
      badgeBg: "bg-emerald-500",
      players: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "猴王", "MING", "好好睡觉"],
    },
    bownes: {
      name: "THE BOWNES",
      shortName: "BOWNES",
      colorClass: "bg-stone-900/40 border-stone-800/60",
      textClass: "text-stone-400",
      borderClass: "border-stone-700 bg-stone-900",
      badgeBg: "bg-stone-500",
      players: ["SHBW", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "炜", "Ye 哥", "芳昆"],
    },
    sanfords: {
      name: "THE SANFORDS",
      shortName: "SANFORDS",
      colorClass: "bg-orange-950/40 border-orange-900/60",
      textClass: "text-orange-400",
      borderClass: "border-orange-600 bg-orange-800",
      badgeBg: "bg-orange-500",
      players: ["Steven", "William_Yan", "绿豆糕", "09^", "WhilarYan", "易陌讳", "Ryan", "Beau", "Leo", "Mwxot"],
    },
    barclays: {
      name: "THE BARCLAYS",
      shortName: "BARCLAYS",
      colorClass: "bg-slate-900/40 border-slate-800/60",
      textClass: "text-blue-400",
      borderClass: "border-slate-700 bg-slate-900",
      badgeBg: "bg-blue-500",
      players: ["kys r", "YJH ~", "胡内", "篮板王", "穗", "Syw", "Sean", "Taotao", "高手", "James c"],
    },
  });

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
      
      {/* Configuration Toggle Ribbon */}
      <div className="w-full max-w-6xl mb-4 flex justify-end">
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className={`px-6 py-2 rounded font-bold tracking-wide transition shadow-md ${isEditing ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          {isEditing ? "💾 Save Board Updates" : "⚙️ Open Interactive Editor"}
        </button>
      </div>

      {/* MAIN CONTAINER DASHBOARD LAYOUT */}
      <div className="w-full max-w-6xl bg-[#0e151f] border border-slate-800 rounded-lg p-6 shadow-2xl relative">
        
        {/* Board Heading Banner */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold tracking-wider text-white">PS20 MIKE LEGEND TOURNAMENT</h1>
          <h2 className="text-xl font-bold tracking-widest text-orange-500 mt-1">★ BASKETBALL SCHEDULE ★</h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* LEFT SIDEBAR PANEL: DATE & QUICK SCORE FEED */}
          <div className="col-span-2 bg-[#0b1019] border border-slate-800 p-4 rounded flex flex-col justify-between text-center text-xs">
            <div>
              <div className="text-slate-500 font-bold tracking-wider text-[10px]">CURRENT DATE</div>
              <div className="text-orange-500 font-bold mt-2">TODAY</div>
              {isEditing ? (
                <input 
                  type="text" 
                  value={dateText} 
                  onChange={(e) => setDateText(e.target.value)} 
                  className="bg-slate-800 text-center text-white w-full font-bold mt-1 p-1 rounded border border-slate-600 text-xs"
                />
              ) : (
                <div className="font-bold text-xs leading-tight text-slate-200 mt-1 whitespace-pre-line">{dateText}</div>
              )}
            </div>

            {/* History Tracker - Now fully reactive using state values directly */}
            <div className="border-t border-b border-slate-800/80 my-4 py-4 space-y-3">
              <div className="text-slate-400 font-bold tracking-wider text-[10px]">TODAY'S RESULTS</div>
              
              <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800/50">
                <div className="text-[10px] font-bold text-orange-400">SANFORDS vs BOWNES</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-0.5">{scores.sanfords} - {scores.bownes}</div>
              </div>

              <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800/50">
                <div className="text-[10px] font-bold text-emerald-400">UNIONS vs BARCLAYS</div>
                <div className="text-xs font-mono font-bold text-slate-300 mt-0.5">{scores.unions} - {scores.barclays}</div>
              </div>
            </div>

            <div>
              <div className="text-orange-500 font-bold tracking-wider text-[10px]">UPCOMING</div>
              <div className="text-slate-300 font-bold mt-1">WEEK 2</div>
              <div className="text-slate-500 text-[10px] mt-0.5">MON - FRI RUNS</div>
            </div>
          </div>

          {/* MAIN GRAPHICS GRID SPACE (CENTER) */}
          <div className="col-span-7 flex flex-col space-y-4">
            
            {/* Split Bracket Grids Panel */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-4">
              <div className="text-center text-xs font-bold text-slate-400 tracking-wider mb-3">
                MATCHUPS — WEDNESDAY GAME RESULTS
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                
                {/* Matchup Set 1: Unions vs Bownes */}
                <div className="grid grid-cols-2 gap-2 bg-[#0e151f] p-2 rounded border border-slate-800/80 relative">
                  <div className={`p-3 rounded text-center border ${teams.unions.borderClass}`}>
                    <div className="text-[11px] font-extrabold text-white mb-1 tracking-wider">UNIONS</div>
                    {isEditing ? (
                      <input type="number" value={scores.unions} onChange={(e) => setScores({...scores, unions: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-lg font-bold p-0.5"/>
                    ) : (
                      <span className="text-3xl font-black tracking-tight text-emerald-400">{scores.unions}</span>
                    )}
                  </div>
                  <div className={`p-3 rounded text-center border ${teams.bownes.borderClass}`}>
                    <div className="text-[11px] font-extrabold text-white mb-1 tracking-wider">BOWNES</div>
                    {isEditing ? (
                      <input type="number" value={scores.bownes} onChange={(e) => setScores({...scores, bownes: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-lg font-bold p-0.5"/>
                    ) : (
                      <span className="text-3xl font-black tracking-tight text-stone-300">{scores.bownes}</span>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1019] border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-400 shadow-md">VS</div>
                </div>

                {/* Matchup Set 2: Sanfords vs Barclays */}
                <div className="grid grid-cols-2 gap-2 bg-[#0e151f] p-2 rounded border border-slate-800/80 relative">
                  <div className={`p-3 rounded text-center border ${teams.sanfords.borderClass}`}>
                    <div className="text-[11px] font-extrabold text-white mb-1 tracking-wider">SANFORDS</div>
                    {isEditing ? (
                      <input type="number" value={scores.sanfords} onChange={(e) => setScores({...scores, sanfords: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-lg font-bold p-0.5"/>
                    ) : (
                      <span className="text-3xl font-black tracking-tight text-orange-400">{scores.sanfords}</span>
                    )}
                  </div>
                  <div className={`p-3 rounded text-center border ${teams.barclays.borderClass}`}>
                    <div className="text-[11px] font-extrabold text-white mb-1 tracking-wider">BARCLAYS</div>
                    {isEditing ? (
                      <input type="number" value={scores.barclays} onChange={(e) => setScores({...scores, barclays: parseInt(e.target.value) || 0})} className="bg-slate-800 w-full text-center rounded text-lg font-bold p-0.5"/>
                    ) : (
                      <span className="text-3xl font-black tracking-tight text-blue-400">{scores.barclays}</span>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1019] border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-400 shadow-md">VS</div>
                </div>

              </div>
            </div>

            {/* Mid Panels: Detailed Horizontal Game Displays */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-4 space-y-3">
              
              {/* Game Row 1 */}
              <div className={`flex items-center justify-between border p-3 rounded shadow-sm ${teams.sanfords.colorClass}`}>
                <div className="flex items-center space-x-2 w-1/3">
                  <span className={`w-2.5 h-2.5 rounded-full ${teams.sanfords.badgeBg}`}></span>
                  <span className="font-extrabold text-sm text-orange-400 tracking-wide">{teams.sanfords.name}</span>
                </div>
                {isEditing ? (
                  <input type="number" value={scores.sanfords} onChange={(e) => setScores({...scores, sanfords: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm"/>
                ) : (
                  <span className="text-2xl font-black text-orange-400 font-mono">{scores.sanfords}</span>
                )}
                <span className="text-[10px] font-bold bg-slate-800 border border-slate-700/60 px-2.5 py-0.5 rounded-full text-slate-400 mx-4">FINAL</span>
                {isEditing ? (
                  <input type="number" value={scores.bownes} onChange={(e) => setScores({...scores, bownes: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm"/>
                ) : (
                  <span className="text-2xl font-black text-stone-400 font-mono">{scores.bownes}</span>
                )}
                <div className="flex items-center justify-end space-x-2 w-1/3 text-right">
                  <span className="font-extrabold text-sm text-stone-400 tracking-wide">{teams.bownes.name}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${teams.bownes.badgeBg}`}></span>
                </div>
              </div>

              {/* Game Row 2 */}
              <div className={`flex items-center justify-between border p-3 rounded shadow-sm ${teams.unions.colorClass}`}>
                <div className="flex items-center space-x-2 w-1/3">
                  <span className={`w-2.5 h-2.5 rounded-full ${teams.unions.badgeBg}`}></span>
                  <span className="font-extrabold text-sm text-emerald-400 tracking-wide">{teams.unions.name}</span>
                </div>
                {isEditing ? (
                  <input type="number" value={scores.unions} onChange={(e) => setScores({...scores, unions: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm"/>
                ) : (
                  <span className="text-2xl font-black text-emerald-400 font-mono">{scores.unions}</span>
                )}
                <span className="text-[10px] font-bold bg-slate-800 border border-slate-700/60 px-2.5 py-0.5 rounded-full text-slate-400 mx-4">FINAL</span>
                {isEditing ? (
                  <input type="number" value={scores.barclays} onChange={(e) => setScores({...scores, barclays: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm"/>
                ) : (
                  <span className="text-2xl font-black text-blue-400 font-mono">{scores.barclays}</span>
                )}
                <div className="flex items-center justify-end space-x-2 w-1/3 text-right">
                  <span className="font-extrabold text-sm text-blue-400 tracking-wide">{teams.barclays.name}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${teams.barclays.badgeBg}`}></span>
                </div>
              </div>

            </div>

            {/* Upcoming/TBA Container Card */}
            <div className="bg-[#0b1019] border border-slate-800 rounded p-5 flex flex-col items-center justify-center min-h-[130px] text-center">
              <div className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-1.5">UPCOMING TILES</div>
              {isEditing ? (
                <textarea 
                  value={upcomingText} 
                  onChange={(e) => setUpcomingText(e.target.value)}
                  rows={2}
                  className="bg-slate-800 text-center text-white w-full max-w-md p-2 rounded border border-slate-600 font-mono text-xs"
                />
              ) : (
                <div className="text-xl font-black tracking-wide text-slate-200 whitespace-pre-line leading-relaxed">
                  {upcomingText}
                </div>
              )}
            </div>

          </div>

          {/* TEAM PANEL MANIPULATION VIEW (RIGHT) */}
          <div className="col-span-3 bg-[#0b1019] border border-slate-800 rounded p-3 flex flex-col space-y-4">
            <div className="text-center text-xs font-bold text-slate-400 tracking-wider border-b border-slate-800/60 pb-2">
              ROSTER MANAGEMENT
            </div>
            
            <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[440px] pr-1 scrollbar-thin">
              {Object.entries(teams).map(([teamKey, team]) => (
                <div key={teamKey} className="space-y-1.5">
                  <div className={`text-[10px] font-black px-2 py-1 rounded tracking-widest text-center flex items-center justify-center space-x-1.5 ${team.borderClass} text-white`}>
                    <span className={`w-1.5 h-1.5 rounded-full bg-white`}></span>
                    <span>{team.name}</span>
                  </div>
                  <div className="bg-[#0e151f] p-2 rounded border border-slate-800/80 space-y-1">
                    {team.players.map((player, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-400 font-mono">
                        <span className="w-4 text-slate-600 text-[9px] font-sans">{idx + 1}.</span>
                        {isEditing ? (
                          <input 
                            type="text" 
                            value={player} 
                            onChange={(e) => handlePlayerChange(teamKey, idx, e.target.value)}
                            className="bg-slate-800 text-white text-xs p-0.5 rounded w-full border border-slate-700 font-sans"
                          />
                        ) : (
                          <span className="truncate pl-1 text-slate-300 tracking-wide">{player}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Branding Footer Tagline */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-center items-center space-x-6 text-[9px] font-bold text-slate-500 tracking-widest">
          <span>COMPETE.</span>
          <span>RESPECT.</span>
          <span className="text-orange-500/80">LEGENDARY.</span>
        </div>
      </div>
    </div>
  );
}