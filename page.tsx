"use client";

import React, { useState, useRef } from 'react';

interface TeamConfig {
  name: string;
  colorClass: string;
  borderClass: string;
  players: string[];
}

export default function TournamentDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [dateText, setDateText] = useState("WEDNESDAY 5/27/2026");
  const [upcomingText, setUpcomingText] = useState("WEEK 2 SCHEDULE: TBA\n(To Be Announced)");
  
  // Media asset container upload state
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Middle panel scoreboard scores
  const [scores, setScores] = useState({
    sanfordsGame: 31,
    bownesGame: 30,
    unionsGame: 36,
    barclaysGame: 34,
  });

  // Single truth configuration for all 4 team names and player lists
  const [teams, setTeams] = useState<Record<string, TeamConfig>>({
    sanfords: {
      name: "THE SANFORDS",
      colorClass: "bg-orange-950/40 border-orange-900/60 text-orange-400",
      borderClass: "border-orange-600 bg-orange-800",
      players: ["Steven", "William_Yan", "绿豆糕", "09^", "WhilarYan", "易陌讳", "Ryan", "Beau", "Leo", "Mwxot"],
    },
    bownes: {
      name: "THE BOWNES",
      colorClass: "bg-stone-900/40 border-stone-800/60 text-stone-400",
      borderClass: "border-stone-700 bg-stone-900",
      players: ["SHBW", "LiNg", "Gao Xiang", "Eric", "Owen", "Benc", "Lee", "炜", "Ye 哥", "芳昆"],
    },
    unions: {
      name: "THE UNIONS",
      colorClass: "bg-emerald-950/40 border-emerald-900/60 text-emerald-400",
      borderClass: "border-emerald-700 bg-emerald-900",
      players: ["KMY", "小鱼", "Dudu", "Hong Tao", "慢慢来", "猴王", "MING", "好好睡觉"],
    },
    barclays: {
      name: "THE BARCLAYS",
      colorClass: "bg-slate-900/40 border-slate-800/60 text-blue-400",
      borderClass: "border-slate-700 bg-slate-900",
      players: ["kys r", "YJH ~", "胡内", "篮板王", "穗", "Syw", "Sean", "Taotao", "高手", "James c"],
    },
  });

  const handlePlayerChange = (teamKey: string, index: number, value: string) => {
    setTeams(prev => {
      const updated = [...prev[teamKey].players];
      updated[index] = value;
      return { ...prev, [teamKey]: { ...prev[teamKey], players: updated } };
    });
  };

  const handleTeamNameChange = (teamKey: string, value: string) => {
    setTeams(prev => ({
      ...prev,
      [teamKey]: { ...prev[teamKey], name: value.toUpperCase() }
    }));
  };

  // Handle local picture uploads
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1019] text-white font-sans p-6 flex flex-col items-center">
      
      {/* Settings Panel Ribbon Menu */}
      <div className="w-full max-w-7xl mb-4 flex justify-between items-center px-2">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Live Controls:</span>
          {isEditing && (
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded font-medium border border-slate-700 transition"
            >
              🖼️ Upload Court Photo
            </button>
          )}
          <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className={`px-6 py-2 rounded font-bold tracking-wide shadow transition ${isEditing ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          {isEditing ? "💾 Save Layout Configuration" : "⚙️ Open Interactive Editor"}
        </button>
      </div>

      {/* =========================================================================
          MAIN MANAGEMENT DASHBOARD TEMPLATE (Left Sidebar Removed completely)
         ========================================================================= */}
      <div className="w-full max-w-7xl bg-[#0e151f] border border-slate-800 rounded-lg p-6 shadow-2xl">
        
        {/* Title Header Banner Block */}
        <div className="text-center mb-8 border-b border-slate-800/60 pb-5">
          <h1 className="text-4xl font-black tracking-wider text-white">PS20 MIKE LEGEND TOURNAMENT</h1>
          <div className="flex justify-center items-center space-x-3 mt-1.5">
            <span className="text-orange-500 font-bold tracking-widest text-sm">★ BASKETBALL SCHEDULE ★</span>
            <span className="text-slate-600">•</span>
            {isEditing ? (
              <input 
                type="text" 
                value={dateText} 
                onChange={(e) => setDateText(e.target.value)} 
                className="bg-slate-800 text-white font-bold px-2 py-0.5 rounded border border-slate-600 text-xs text-center w-48"
              />
            ) : (
              <span className="text-slate-300 font-mono font-bold text-sm tracking-wide">{dateText}</span>
            )}
          </div>
        </div>

        {/* Outer Split Matrix Grid: 8 Columns Center Panels, 4 Columns All Rosters */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT/CENTER FIELD: MATCHUPS, SCORES, AND MEDIA RUN UPLOADER */}
          <div className="col-span-8 flex flex-col space-y-5">
            
            {/* Top Matchups Container Grid: Scores Removed, Fully Reordered */}
            <div className="bg-[#0b1019] border border-slate-800/80 rounded-lg p-4">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-3 text-center">
                Tournament Brackets & Pairs
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Pair 1: Sanfords vs Bownes */}
                <div className="flex items-center justify-between bg-[#0e151f] p-4 rounded border border-slate-800 relative">
                  <div className="w-5/12 text-center">
                    {isEditing ? (
                      <input type="text" value={teams.sanfords.name} onChange={(e) => handleTeamNameChange('sanfords', e.target.value)} className="bg-slate-800 text-center text-xs font-bold p-1 rounded w-full"/>
                    ) : (
                      <div className="text-sm font-black text-orange-400 tracking-wide truncate">{teams.sanfords.name}</div>
                    )}
                  </div>
                  <div className="text-xs font-black text-slate-500 bg-[#0b1019] border border-slate-800 px-2.5 py-1 rounded-full z-10">VS</div>
                  <div className="w-5/12 text-center">
                    {isEditing ? (
                      <input type="text" value={teams.bownes.name} onChange={(e) => handleTeamNameChange('bownes', e.target.value)} className="bg-slate-800 text-center text-xs font-bold p-1 rounded w-full"/>
                    ) : (
                      <div className="text-sm font-black text-stone-400 tracking-wide truncate">{teams.bownes.name}</div>
                    )}
                  </div>
                </div>

                {/* Pair 2: Unions vs Barclays */}
                <div className="flex items-center justify-between bg-[#0e151f] p-4 rounded border border-slate-800 relative">
                  <div className="w-5/12 text-center">
                    {isEditing ? (
                      <input type="text" value={teams.unions.name} onChange={(e) => handleTeamNameChange('unions', e.target.value)} className="bg-slate-800 text-center text-xs font-bold p-1 rounded w-full"/>
                    ) : (
                      <div className="text-sm font-black text-emerald-400 tracking-wide truncate">{teams.unions.name}</div>
                    )}
                  </div>
                  <div className="text-xs font-black text-slate-500 bg-[#0b1019] border border-slate-800 px-2.5 py-1 rounded-full z-10">VS</div>
                  <div className="w-5/12 text-center">
                    {isEditing ? (
                      <input type="text" value={teams.barclays.name} onChange={(e) => handleTeamNameChange('barclays', e.target.value)} className="bg-slate-800 text-center text-xs font-bold p-1 rounded w-full"/>
                    ) : (
                      <div className="text-sm font-black text-blue-400 tracking-wide truncate">{teams.barclays.name}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: Live Detailed Interactive Scoreboards */}
            <div className="bg-[#0b1019] border border-slate-800 rounded-lg p-4 space-y-3">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1 text-center">
                Live Score Results Panel
              </div>

              {/* Score Display Row 1 */}
              <div className={`flex items-center justify-between border p-3.5 rounded-lg shadow-inner ${teams.sanfords.colorClass}`}>
                <span className="font-extrabold text-sm tracking-wide w-1/3">{teams.sanfords.name}</span>
                {isEditing ? (
                  <input type="number" value={scores.sanfordsGame} onChange={(e) => setScores({...scores, sanfordsGame: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm text-white"/>
                ) : (
                  <span className="text-2xl font-black font-mono">{scores.sanfordsGame}</span>
                )}
                <span className="text-[9px] font-extrabold bg-slate-900 border border-slate-800 px-3 py-0.5 rounded-full text-slate-400">FINAL</span>
                {isEditing ? (
                  <input type="number" value={scores.bownesGame} onChange={(e) => setScores({...scores, bownesGame: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm text-white"/>
                ) : (
                  <span className="text-2xl font-black font-mono text-stone-400">{scores.bownesGame}</span>
                )}
                <span className="font-extrabold text-sm tracking-wide w-1/3 text-right">{teams.bownes.name}</span>
              </div>

              {/* Score Display Row 2 */}
              <div className={`flex items-center justify-between border p-3.5 rounded-lg shadow-inner ${teams.unions.colorClass}`}>
                <span className="font-extrabold text-sm tracking-wide w-1/3">{teams.unions.name}</span>
                {isEditing ? (
                  <input type="number" value={scores.unionsGame} onChange={(e) => setScores({...scores, unionsGame: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm text-white"/>
                ) : (
                  <span className="text-2xl font-black font-mono">{scores.unionsGame}</span>
                )}
                <span className="text-[9px] font-extrabold bg-slate-900 border border-slate-800 px-3 py-0.5 rounded-full text-slate-400">FINAL</span>
                {isEditing ? (
                  <input type="number" value={scores.barclaysGame} onChange={(e) => setScores({...scores, barclaysGame: parseInt(e.target.value) || 0})} className="bg-slate-800 w-16 text-center rounded font-bold p-1 text-sm text-white"/>
                ) : (
                  <span className="text-2xl font-black font-mono text-blue-400">{scores.barclaysGame}</span>
                )}
                <span className="font-extrabold text-sm tracking-wide w-1/3 text-right">{teams.barclays.name}</span>
              </div>
            </div>

            {/* Picture Upload Container Box Area */}
            <div className="bg-[#0b1019] border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden group">
              {uploadedImage ? (
                <>
                  <img src={uploadedImage} alt="Court Highlights" className="w-full h-full object-cover max-h-[300px] rounded" />
                  {isEditing && (
                    <button 
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-500 text-white font-bold p-1 px-2.5 text-xs rounded shadow"
                    >
                      Remove Media
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center p-6 flex flex-col items-center space-y-2">
                  <div className="text-3xl text-slate-600">🖼️</div>
                  <div className="text-xs font-bold text-slate-400 tracking-wide">Court Picture Display Container</div>
                  <div className="text-[10px] text-slate-600 max-w-xs">
                    {isEditing ? "Click 'Upload Court Photo' on the top panel ribbon to add a match picture highlight here." : "No game media file has been attached yet."}
                  </div>
                </div>
              )}
            </div>

            {/* Upcoming/TBA Schedule Box Panel Component */}
            <div className="bg-[#0b1019] border border-slate-800 rounded-lg p-4 text-center">
              <div className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-1">Timeline Target Info</div>
              {isEditing ? (
                <textarea 
                  value={upcomingText} 
                  onChange={(e) => setUpcomingText(e.target.value)}
                  rows={2}
                  className="bg-slate-800 text-center text-white w-full max-w-lg p-2 rounded border border-slate-600 font-mono text-xs"
                />
              ) : (
                <div className="text-lg font-black tracking-wide text-slate-200 whitespace-pre-line leading-snug">
                  {upcomingText}
                </div>
              )}
            </div>

          </div>

          {/* RIGHT PANEL: FULL 4-TEAM SIMULTANEOUS ROSTERS MATRIX VIEW */}
          <div className="col-span-4 bg-[#0b1019] border border-slate-800 rounded-lg p-4 flex flex-col">
            <div className="text-center text-xs font-bold text-slate-400 tracking-wider border-b border-slate-800/60 pb-3 mb-3 uppercase">
              Tournament Team Rosters
            </div>
            
            {/* 4-Team Layout Map without scrolling clutter */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {Object.entries(teams).map(([teamKey, team]) => (
                <div key={teamKey} className="flex flex-col space-y-1 bg-[#0e151f]/60 border border-slate-800/60 p-2 rounded shadow-sm">
                  <div className={`text-[9px] font-black py-1 rounded text-center tracking-wider border ${team.borderClass} text-white truncate`}>
                    {team.name.replace("THE ", "")}
                  </div>
                  
                  <div className="space-y-0.5 flex-1 overflow-y-auto max-h-[160px] pr-0.5 scrollbar-thin">
                    {team.players.map((player, idx) => (
                      <div key={idx} className="flex items-center text-[11px] text-slate-400 font-mono">
                        <span className="w-3.5 text-slate-600 text-[9px] text-right pr-1 font-sans">{idx + 1}</span>
                        {isEditing ? (
                          <input 
                            type="text" 
                            value={player} 
                            onChange={(e) => handlePlayerChange(teamKey, idx, e.target.value)}
                            className="bg-slate-800 text-white text-[10px] px-1 py-0.5 rounded w-full border border-slate-700 font-sans"
                          />
                        ) : (
                          <span className="truncate pl-0.5 text-slate-300 tracking-tight">{player}</span>
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
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-center items-center space-x-6 text-[9px] font-bold text-slate-500 tracking-widest">
          <span>COMPETE.</span>
          <span>RESPECT.</span>
          <span className="text-orange-500/80">LEGENDARY.</span>
        </div>
      </div>
    </div>
  );
}