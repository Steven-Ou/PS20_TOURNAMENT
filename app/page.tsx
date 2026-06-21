"use client";

import React, { useState, useEffect } from "react";

// ==========================================
// 1. CORE VECTOR LOGO COMPONENT ASSETS
// ==========================================

const UnionLogo = () => (
  <svg
    className="w-12 h-12 flex-shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#14532d"
      stroke="#4ade80"
      strokeWidth="3"
    />
    <path d="M25 50C35 35 65 35 75 50C65 65 35 65 25 50Z" fill="#a7f3d0" />
    <path d="M72 50L85 40V60L72 50Z" fill="#4ade80" />
    <circle cx="40" cy="46" r="3" fill="#14532d" />
    <path
      d="M30 70Q50 65 70 70"
      stroke="#22c55e"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BowneLogo = () => (
  <svg
    className="w-12 h-12 flex-shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35 20L50 45L65 20"
      stroke="#ef4444"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 20L50 42L58 20"
      stroke="#3b82f6"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="50"
      cy="60"
      r="24"
      fill="url(#goldMedal)"
      stroke="#fbbf24"
      strokeWidth="3"
    />
    <circle
      cx="50"
      cy="60"
      r="18"
      fill="none"
      stroke="#fff"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <text
      x="50"
      y="69"
      fontSize="24"
      fontWeight="black"
      fill="#78350f"
      textAnchor="middle"
    >
      1
    </text>
    <defs>
      <linearGradient id="goldMedal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
  </svg>
);

const SanfordLogo = () => (
  <svg
    className="w-12 h-12 flex-shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="42"
      fill="#ea580c"
      stroke="#fff"
      strokeWidth="2"
    />
    <path d="M8 50H92" stroke="#000" strokeWidth="3" />
    <path d="M50 8V92" stroke="#000" strokeWidth="3" />
    <path
      d="M20 20C35 32 35 68 20 80"
      stroke="#000"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 20C65 32 65 68 80 80"
      stroke="#000"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const BarclaysLogo = () => (
  <svg
    className="w-12 h-12 flex-shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20C45 20 50 10 50 10C50 10 55 20 80 20C80 55 68 78 50 90C32 78 20 55 20 20Z"
      fill="#1d4ed8"
      stroke="#60a5fa"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M30 28C45 28 50 22 50 22C50 22 55 28 70 28C70 50 60 68 50 78C40 68 30 50 30 28Z"
      fill="#2563eb"
    />
    <polygon
      points="50,38 53,45 61,45 55,50 57,58 50,53 43,58 45,50 39,45 47,45"
      fill="#93c5fd"
    />
  </svg>
);

const PremiumChampionshipEmblem = ({
  accentColor,
  uniqueId,
}: {
  accentColor: string;
  uniqueId: string;
}) => (
  <svg
    className="w-12 h-12 flex-shrink-0"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,5 92,25 92,65 50,95 8,65 8,25"
      fill="#111827"
      stroke={`url(#goldGradient-${uniqueId})`}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <polygon
      points="50,11 86,28 86,62 50,88 14,62 14,28"
      fill="#030712"
      stroke={accentColor}
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path
      d="M32,62 L36,42 L45,50 L50,36 L55,50 L64,42 L68,62 Z"
      fill={`url(#goldGradient-${uniqueId})`}
    />
    <circle cx="50" cy="32" r="2.5" fill="#fff" />
    <circle cx="36" cy="38" r="2" fill="#fff" />
    <circle cx="64" cy="38" r="2" fill="#fff" />
    <polygon
      points="50,70 52,75 58,75 53,79 55,85 50,81 45,85 47,79 42,75 48,75"
      fill={`url(#goldGradient-${uniqueId})`}
    />
    <defs>
      <linearGradient
        id={`goldGradient-${uniqueId}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#78350f" />
        <stop offset="25%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#d97706" />
        <stop offset="65%" stopColor="#ffffff" />
        <stop offset="85%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
    </defs>
  </svg>
);

const EmptyPlaceholderLogo = () => (
  <div className="w-12 h-12 rounded-full border border-dashed border-slate-700 flex items-center justify-center text-slate-600 font-bold text-xs flex-shrink-0">
    —
  </div>
);

interface TeamConfig {
  key: string;
  name: string;
  colorClass: string;
  hexColor: string;
  isCustom?: boolean;
}

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

  const [tournamentTitle, setTournamentTitle] = useState(
    "PS20 MIKE LEGEND TOURNAMENT",
  );
  const [subHeader, setSubHeader] = useState("BASKETBALL SCHEDULE");
  const [resultsDay, setResultsDay] = useState(
    "TODAY'S RESULTS - THURSDAY MAY 28TH",
  );
  const [timelineText, setTimelineText] = useState(
    "WEEK 2 SCHEDULE: TBA (To Be Announced)",
  );
  const [hideEliminatedRosters, setHideEliminatedRosters] =
    useState<boolean>(true);

  const [teamsConfig, setTeamsConfig] = useState<TeamConfig[]>([
    {
      key: "unions",
      name: "THE UNIONS",
      colorClass: "text-emerald-400",
      hexColor: "#34d399",
    },
    {
      key: "bownes",
      name: "THE BOWNES",
      colorClass: "text-amber-500",
      hexColor: "#f59e0b",
    },
    {
      key: "sanfords",
      name: "THE SANFORDS",
      colorClass: "text-orange-500",
      hexColor: "#f97316",
    },
    {
      key: "barclays",
      name: "THE BARCLAYS",
      colorClass: "text-blue-400",
      hexColor: "#60a5fa",
    },
  ]);

  const [topScores, setTopScores] = useState<Record<string, number>>({
    unions: 0,
    bownes: 0,
    sanfords: 0,
    barclays: 0,
  });

  const [matches, setMatches] = useState<MatchData[]>([
    {
      id: 1,
      teamA: "sanfords",
      teamB: "unions",
      scoreA: 0,
      scoreB: 0,
      foulsA: 0,
      foulsB: 0,
    },
    {
      id: 2,
      teamA: "bownes",
      teamB: "barclays",
      scoreA: 0,
      scoreB: 0,
      foulsA: 0,
      foulsB: 0,
    },
  ]);

  const [rosters, setRosters] = useState<Record<string, string[]>>({
    unions: [
      "KMY",
      "小鱼",
      "Dudu",
      "Hong Tao",
      "慢慢来",
      "腰王",
      "MING",
      "好好睡觉",
    ],
    bownes: [
      "yuxuan",
      "LiNg",
      "Gao Xiang",
      "Eric",
      "Owen",
      "Benc",
      "Lee",
      "炜",
      "Ye 哥",
      "芥琵",
    ],
    sanfords: [
      "Steven",
      "William_Yan",
      "绿豆赚",
      "09^",
      "ishtiar",
      "Ryan",
      "Beau",
      "Alex",
      "Leo",
    ],
    barclays: [
      "kys r",
      "YJH —",
      "胡内",
      "篮板王",
      "稳",
      "Syw",
      "Sean",
      "Taotao",
      "高手",
      "James c",
    ],
  });

  const legacyBrandRegistry: Record<
    string,
    { name: string; hexColor: string; colorClass: string }
  > = {
    unions: {
      name: "THE UNIONS",
      hexColor: "#34d399",
      colorClass: "text-emerald-400",
    },
    bownes: {
      name: "THE BOWNES",
      hexColor: "#f59e0b",
      colorClass: "text-amber-500",
    },
    sanfords: {
      name: "THE SANFORDS",
      hexColor: "#f97316",
      colorClass: "text-orange-500",
    },
    barclays: {
      name: "THE BARCLAYS",
      hexColor: "#60a5fa",
      colorClass: "text-blue-400",
    },
  };

  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamColor, setNewTeamColor] = useState("#a855f7");

  const handleLogoRender = (teamKey: string, color: string) => {
    switch (teamKey) {
      case "unions":
        return <UnionLogo />;
      case "bownes":
        return <BowneLogo />;
      case "sanfords":
        return <SanfordLogo />;
      case "barclays":
        return <BarclaysLogo />;
      default: {
        const customTeam = teamsConfig.find((t) => t.key === teamKey);
        if (customTeam)
          return (
            <PremiumChampionshipEmblem accentColor={color} uniqueId={teamKey} />
          );
        return <EmptyPlaceholderLogo />;
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTitle = localStorage.getItem("ps20_title");
      const savedSub = localStorage.getItem("ps20_subHeader");
      const savedDay = localStorage.getItem("ps20_resultsDay");
      const savedTopScores = localStorage.getItem("ps20_topScores");
      const savedMatches = localStorage.getItem("ps20_matches");
      const savedTimeline = localStorage.getItem("ps20_timelineText");
      const savedHideToggle = localStorage.getItem("ps20_hideToggle");
      const savedTeamsConfig = localStorage.getItem("ps20_teamsConfig");
      const savedRosters = localStorage.getItem("ps20_rosters");

      if (savedTitle) setTournamentTitle(savedTitle);
      if (savedSub) setSubHeader(savedSub);
      if (savedDay) setResultsDay(savedDay);
      if (savedTopScores) setTopScores(JSON.parse(savedTopScores));
      if (savedMatches) setMatches(JSON.parse(savedMatches));
      if (savedTimeline) setTimelineText(savedTimeline);
      if (savedHideToggle)
        setHideEliminatedRosters(JSON.parse(savedHideToggle));
      if (savedTeamsConfig) setTeamsConfig(JSON.parse(savedTeamsConfig));
      if (savedRosters) setRosters(JSON.parse(savedRosters));

      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("ps20_title", tournamentTitle);
      localStorage.setItem("ps20_subHeader", subHeader);
      localStorage.setItem("ps20_resultsDay", resultsDay);
      localStorage.setItem("ps20_topScores", JSON.stringify(topScores));
      localStorage.setItem("ps20_matches", JSON.stringify(matches));
      localStorage.setItem("ps20_timelineText", timelineText);
      localStorage.setItem(
        "ps20_hideToggle",
        JSON.stringify(hideEliminatedRosters),
      );
      localStorage.setItem("ps20_teamsConfig", JSON.stringify(teamsConfig));
      localStorage.setItem("ps20_rosters", JSON.stringify(rosters));
    }
  }, [
    tournamentTitle,
    subHeader,
    resultsDay,
    topScores,
    matches,
    timelineText,
    hideEliminatedRosters,
    teamsConfig,
    rosters,
    isHydrated,
  ]);

  const createNewTeamAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamName.trim()) return;

    let cleanKey = newTeamName.toLowerCase().replace(/\s+/g, "");
    if (cleanKey.startsWith("the")) {
      cleanKey = cleanKey.replace(/^the/, "");
    }

    if (teamsConfig.some((t) => t.key === cleanKey))
      return alert("Team already exists!");

    if (legacyBrandRegistry[cleanKey]) {
      const historicalBackup = legacyBrandRegistry[cleanKey];
      const restoredTeamObj: TeamConfig = {
        key: cleanKey,
        name: historicalBackup.name,
        colorClass: historicalBackup.colorClass,
        hexColor: historicalBackup.hexColor,
        isCustom: false,
      };

      setTeamsConfig([...teamsConfig, restoredTeamObj]);
      setTopScores({ ...topScores, [cleanKey]: topScores[cleanKey] || 0 });
      if (!rosters[cleanKey]) {
        setRosters({ ...rosters, [cleanKey]: Array(8).fill("") });
      }
      setNewTeamName("");
      return;
    }

    const generatedKey = newTeamName.toLowerCase().replace(/\s+/g, "_");
    const newTeamObj: TeamConfig = {
      key: generatedKey,
      name: newTeamName.toUpperCase(),
      colorClass: "",
      hexColor: newTeamColor,
      isCustom: true,
    };

    setTeamsConfig([...teamsConfig, newTeamObj]);
    setTopScores({ ...topScores, [generatedKey]: 0 });
    setRosters({ ...rosters, [generatedKey]: Array(8).fill("") });
    setNewTeamName("");
  };

  const removeTeamFromSystem = (teamKey: string) => {
    if (
      confirm(
        `Are you sure you want to completely remove ${getTeamName(teamKey)}?`,
      )
    ) {
      setTeamsConfig((prev) => prev.filter((t) => t.key !== teamKey));

      const scoreCopy = { ...topScores };
      delete scoreCopy[teamKey];
      setTopScores(scoreCopy);

      const rosterCopy = { ...rosters };
      delete rosterCopy[teamKey];
      setRosters(rosterCopy);

      setMatches((prev) =>
        prev.map((m) => ({
          ...m,
          teamA: m.teamA === teamKey ? "none" : m.teamA,
          teamB: m.teamB === teamKey ? "none" : m.teamB,
        })),
      );
    }
  };

  const getTeamName = (teamKey: string) => {
    const found = teamsConfig.find((t) => t.key === teamKey);
    return found ? found.name : "N/A";
  };

  const updateMatchField = (id: number, field: keyof MatchData, value: any) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)),
    );
  };

  const removeMatchBox = (id: number) => {
    setMatches((prev) => prev.filter((m) => m.id !== id));
  };

  const addMatchBox = () => {
    const newId =
      matches.length > 0 ? Math.max(...matches.map((m) => m.id)) + 1 : 1;
    setMatches((prev) => [
      ...prev,
      {
        id: newId,
        teamA: "none",
        teamB: "none",
        scoreA: 0,
        scoreB: 0,
        foulsA: 0,
        foulsB: 0,
      },
    ]);
  };

  const isTeamActive = (teamKey: string) => {
    if (!hideEliminatedRosters) return true;
    return matches.some((m) => m.teamA === teamKey || m.teamB === teamKey);
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-white p-3 md:p-6 font-sans antialiased">
      {/* ADMINISTRATIVE ACCESS CONSOLE OVERLAY */}
      <div className="max-w-7xl mx-auto mb-6 bg-[#111827] p-4 rounded-xl border border-slate-800 flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-center gap-3">
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
            <span className="text-xs font-semibold tracking-wider text-slate-400">
              AUTHORIZATION LEVEL:
            </span>
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

        {/* ADMIN ADD TEAM FORM */}
        {isAdmin && (
          <form
            onSubmit={createNewTeamAction}
            className="border-t border-slate-800 pt-3 flex flex-wrap items-center gap-4 bg-slate-900/40 p-3 rounded-lg"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-black text-slate-400 tracking-wider">
                🚀 LEAGUE TEAM MANAGER:
              </span>
              <span className="text-[10px] text-slate-500 font-medium font-sans">
                TIP: TYPE "UNIONS", "BOWNES", "SANFORDS", OR "BARCLAYS" TO
                AUTO-RESTORE ORIGINAL ICONS!
              </span>
            </div>
            <input
              type="text"
              placeholder="ENTER TEAM NAME..."
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className="bg-[#070b13] border border-slate-700 rounded px-3 py-2 text-sm md:text-xs outline-none text-white w-full sm:w-52 font-bold uppercase"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                CUSTOM COLOR:
              </span>
              <input
                type="color"
                value={newTeamColor}
                onChange={(e) => setNewTeamColor(e.target.value)}
                className="bg-transparent border-none outline-none w-8 h-6 cursor-pointer"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black px-3 py-2 rounded shadow w-full sm:w-auto"
            >
              PRODUCE LIVE TEAM PROFILE
            </button>
          </form>
        )}
      </div>

      {/* GLOBAL HEADER */}
      <header className="text-center mb-8 border-b border-slate-800 pb-5 px-2">
        <input
          type="text"
          value={tournamentTitle}
          disabled={!isAdmin}
          onChange={(e) => setTournamentTitle(e.target.value)}
          className="bg-transparent font-black text-2xl md:text-4xl text-center tracking-wider w-full uppercase outline-none border-none disabled:cursor-not-allowed"
        />
        <div className="flex justify-center items-center gap-2 mt-2 font-bold text-orange-500 tracking-widest text-sm">
          <span>★</span>
          <input
            type="text"
            value={subHeader}
            disabled={!isAdmin}
            onChange={(e) => setSubHeader(e.target.value)}
            className="bg-transparent font-bold text-center tracking-widest uppercase outline-none text-orange-500 border-none w-full max-w-[260px] text-xs disabled:cursor-not-allowed"
          />
          <span>★</span>
        </div>
      </header>

      {/* ONE INTEGRATED MAIN PANEL COLUMN */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-start w-full">
        {/* HERO PREVIEW DASHBOARD / TODAY'S RESULTS */}
        <div className="bg-[#111827] border border-slate-800 rounded-2xl p-4 md:p-5 shadow-2xl w-full">
          <input
            type="text"
            value={resultsDay}
            disabled={!isAdmin}
            onChange={(e) => setResultsDay(e.target.value)}
            className="bg-transparent text-xs font-bold text-center tracking-widest text-slate-400 uppercase w-full mb-5 border-none outline-none disabled:cursor-not-allowed"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {teamsConfig.map((t) => (
              <div
                key={t.key}
                className="relative bg-slate-900/60 p-3 pt-8 rounded-xl border border-slate-800 flex flex-col items-center group transition-all"
              >
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => removeTeamFromSystem(t.key)}
                    className="absolute top-1.5 right-1.5 text-[9px] text-slate-500 hover:text-red-400 font-extrabold px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 transition-opacity"
                  >
                    ❌
                  </button>
                )}
                <span
                  className="text-[10px] md:text-[11px] font-black tracking-widest mb-2.5 uppercase text-center truncate w-full px-1"
                  style={{ color: t.hexColor }}
                >
                  {t.name}
                </span>
                {handleLogoRender(t.key, t.hexColor)}
                <input
                  type="number"
                  value={topScores[t.key] === 0 ? "" : topScores[t.key]}
                  placeholder="0"
                  disabled={!isAdmin}
                  onChange={(e) =>
                    setTopScores({
                      ...topScores,
                      [t.key]: parseInt(e.target.value) || 0,
                    })
                  }
                  className="bg-transparent font-black text-3xl w-full text-center mt-3 border-none outline-none text-slate-200 disabled:cursor-not-allowed py-1 rounded focus:bg-slate-950/40"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DYNAMIC SCORING MATRICES */}
        <div className="flex flex-col gap-4 w-full">
          {matches.map((match) => (
            <div
              key={match.id}
              className="relative bg-gradient-to-r from-[#111827] to-[#0a0f1d] border border-slate-800 rounded-xl p-4 md:p-5 pt-8 flex flex-col md:flex-row items-center justify-between shadow-md gap-4 md:gap-0"
            >
              {isAdmin && (
                <button
                  onClick={() => removeMatchBox(match.id)}
                  className="absolute top-2 right-2 text-slate-500 hover:text-red-400 font-bold text-[10px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 transition-all"
                >
                  ❌ DELETE BOX
                </button>
              )}

              {/* TEAM A DROPDOWN BLOCK */}
              <div className="flex items-center gap-3 w-full md:w-4/12 justify-start bg-slate-950/30 md:bg-transparent p-2 md:p-0 rounded-lg">
                {handleLogoRender(
                  match.teamA,
                  teamsConfig.find((t) => t.key === match.teamA)?.hexColor ||
                    "#555",
                )}
                <select
                  value={match.teamA}
                  disabled={!isAdmin}
                  onChange={(e) =>
                    updateMatchField(match.id, "teamA", e.target.value)
                  }
                  className="bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase disabled:cursor-not-allowed cursor-pointer flex-1 md:flex-none p-1 rounded focus:bg-slate-950"
                  style={{
                    color:
                      teamsConfig.find((t) => t.key === match.teamA)
                        ?.hexColor || "#94a3b8",
                  }}
                >
                  <option value="none" className="bg-[#070b13] text-slate-500">
                    N/A (HIDE TEAM)
                  </option>
                  {teamsConfig.map((t) => (
                    <option
                      key={t.key}
                      value={t.key}
                      className="bg-[#070b13]"
                      style={{ color: t.hexColor }}
                    >
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* SCORING AND FOULS CENTER MODULE */}
              <div className="flex items-center justify-center gap-8 md:gap-6 w-full md:w-4/12 px-2 py-1 bg-slate-900/40 md:bg-transparent rounded-xl border border-slate-800/40 md:border-none">
                <div className="flex flex-col items-center justify-center min-w-[60px]">
                  {match.teamA !== "none" ? (
                    <>
                      <input
                        type="number"
                        value={match.scoreA === 0 ? "" : match.scoreA}
                        placeholder="0"
                        disabled={!isAdmin}
                        onChange={(e) =>
                          updateMatchField(
                            match.id,
                            "scoreA",
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="bg-transparent text-4xl font-black text-center w-16 border-none outline-none disabled:cursor-not-allowed h-10 p-1 rounded focus:bg-slate-950"
                        style={{
                          color:
                            teamsConfig.find((t) => t.key === match.teamA)
                              ?.hexColor || "#fff",
                        }}
                      />
                      <div className="flex items-center text-xs text-red-500 font-bold mt-1 bg-red-950/20 px-2 py-0.5 rounded border border-red-900/10">
                        <span>F:&nbsp;</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={match.foulsA === 0 ? "" : match.foulsA}
                          disabled={!isAdmin}
                          className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold focus:text-white text-xs"
                          onChange={(e) =>
                            updateMatchField(
                              match.id,
                              "foulsA",
                              parseInt(e.target.value) || 0,
                            )
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <span className="text-slate-700 text-xs font-bold">—</span>
                  )}
                </div>

                <span className="text-xs font-black tracking-widest bg-black/60 px-3 py-2 rounded-md border border-slate-800 shadow-sm self-center">
                  VS
                </span>

                <div className="flex flex-col items-center justify-center min-w-[60px]">
                  {match.teamB !== "none" ? (
                    <>
                      <input
                        type="number"
                        value={match.scoreB === 0 ? "" : match.scoreB}
                        placeholder="0"
                        disabled={!isAdmin}
                        onChange={(e) =>
                          updateMatchField(
                            match.id,
                            "scoreB",
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="bg-transparent text-4xl font-black text-center w-16 border-none outline-none disabled:cursor-not-allowed h-10 p-1 rounded focus:bg-slate-950"
                        style={{
                          color:
                            teamsConfig.find((t) => t.key === match.teamB)
                              ?.hexColor || "#fff",
                        }}
                      />
                      <div className="flex items-center text-xs text-red-500 font-bold mt-1 bg-red-950/20 px-2 py-0.5 rounded border border-red-900/10">
                        <span>F:&nbsp;</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={match.foulsB === 0 ? "" : match.foulsB}
                          disabled={!isAdmin}
                          className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold focus:text-white text-xs"
                          onChange={(e) =>
                            updateMatchField(
                              match.id,
                              "foulsB",
                              parseInt(e.target.value) || 0,
                            )
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <span className="text-slate-700 text-xs font-bold">—</span>
                  )}
                </div>
              </div>

              {/* TEAM B DROPDOWN BLOCK */}
              <div className="flex items-center gap-3 w-full md:w-4/12 justify-end bg-slate-950/30 md:bg-transparent p-2 md:p-0 rounded-lg flex-row-reverse md:flex-row">
                <select
                  value={match.teamB}
                  disabled={!isAdmin}
                  onChange={(e) =>
                    updateMatchField(match.id, "teamB", e.target.value)
                  }
                  className="bg-transparent font-extrabold tracking-wider text-sm outline-none border-none uppercase text-right md:text-right disabled:cursor-not-allowed cursor-pointer flex-1 md:flex-none mr-2 md:mr-0 p-1 rounded focus:bg-slate-950"
                  style={{
                    color:
                      teamsConfig.find((t) => t.key === match.teamB)
                        ?.hexColor || "#94a3b8",
                  }}
                >
                  <option value="none" className="bg-[#070b13] text-slate-500">
                    N/A (HIDE TEAM)
                  </option>
                  {teamsConfig.map((t) => (
                    <option
                      key={t.key}
                      value={t.key}
                      className="bg-[#070b13]"
                      style={{ color: t.hexColor }}
                    >
                      {t.name}
                    </option>
                  ))}
                </select>
                {handleLogoRender(
                  match.teamB,
                  teamsConfig.find((t) => t.key === match.teamB)?.hexColor ||
                    "#555",
                )}
              </div>
            </div>
          ))}
        </div>

        {/* LARGE FORMAT BROADCAST BULLETIN NOTES SECTION */}
        <div className="bg-[#0c1222] border border-slate-800 rounded-xl p-4 md:p-5 text-left shadow-inner flex flex-col w-full">
          <span className="text-orange-500 text-[10px] uppercase font-black tracking-widest mb-2 flex items-center gap-1">
            <span>📢</span> OFFICIAL TOURNAMENT NOTICE BOARD
          </span>
          <textarea
            value={timelineText}
            disabled={!isAdmin}
            onChange={(e) => setTimelineText(e.target.value)}
            placeholder="ENTER BROADCAST NOTICE NOTES DETAILS HERE..."
            className="bg-slate-950/40 p-4 rounded-lg font-black text-xl md:text-[40px] text-slate-200 w-full min-h-[140px] border border-slate-800 outline-none uppercase tracking-wide leading-tight resize-y disabled:cursor-not-allowed disabled:bg-transparent disabled:border-none disabled:p-0"
          />
        </div>

        {/* ========================================================= */}
        {/* FIXED & WIDE ROSTERS LAYOUT PANEL PLACED HORIZONTALLY AT BOTTOM */}
        {/* ========================================================= */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 md:p-5 shadow-2xl w-full mt-2">
          <div className="border-b border-slate-800 pb-3 mb-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <h3 className="font-black tracking-widest text-sm text-slate-300 uppercase flex items-center gap-2">
              <span>🏀</span> TEAMS & ROSTERS MANAGER
            </h3>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hideEliminatedRosters}
                onChange={(e) => setHideEliminatedRosters(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700 text-orange-500 focus:ring-0 w-3.5 h-3.5"
              />
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">
                HIDE ROSTERS FOR N/A TEAMS
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {teamsConfig.map((team) => {
              if (!isTeamActive(team.key)) return null;
              const playerArray = rosters[team.key] || [];

              return (
                <div
                  key={team.key}
                  className="space-y-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="font-black text-[11px] p-2 rounded text-center tracking-widest uppercase border bg-slate-950 flex justify-between items-center px-3"
                      style={{
                        color: team.hexColor,
                        borderColor: `${team.hexColor}20`,
                      }}
                    >
                      <span>{team.name}</span>

                      {/* ACCESSIBLE LINEUP SLOTS SCALER CONTROLS RESTORED */}
                      {isAdmin && (
                        <div className="flex items-center gap-2 text-xs bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                          <button
                            type="button"
                            title="Remove Last Spot"
                            onClick={() => {
                              if (playerArray.length > 1) {
                                setRosters({
                                  ...rosters,
                                  [team.key]: playerArray.slice(0, -1),
                                });
                              }
                            }}
                            className="text-red-400 hover:text-red-300 font-black px-1"
                          >
                            —
                          </button>
                          <button
                            type="button"
                            title="Add Player Spot"
                            onClick={() => {
                              setRosters({
                                ...rosters,
                                [team.key]: [...playerArray, ""],
                              });
                            }}
                            className="text-emerald-400 hover:text-emerald-300 font-black px-1"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>

                    <ol className="space-y-1.5 text-xs text-slate-300 pl-1 mt-3">
                      {playerArray.map((player, idx) => (
                        <li
                          key={idx}
                          className={`flex items-center gap-1 px-2 py-1 rounded border border-transparent ${isAdmin ? "bg-slate-900/60" : "bg-transparent"}`}
                        >
                          <span className="text-slate-500 font-mono text-[10px] w-4">
                            {idx + 1}.
                          </span>
                          <input
                            type="text"
                            value={player}
                            disabled={!isAdmin}
                            placeholder="Empty Slot"
                            onChange={(e) => {
                              const teamCopy = [...playerArray];
                              teamCopy[idx] = e.target.value;
                              setRosters({ ...rosters, [team.key]: teamCopy });
                            }}
                            className={`bg-transparent border-none p-0 w-full outline-none focus:text-white text-sm md:text-xs py-0.5 px-1 rounded focus:bg-slate-950 ${!isAdmin ? "text-slate-200 font-normal cursor-default pointer-events-none" : ""}`}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
