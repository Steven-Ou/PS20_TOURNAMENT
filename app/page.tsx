"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Core global sync cloud client

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
      fill="#d1fae5"
      stroke="#059669"
      strokeWidth="4"
    />
    <path d="M25 50C35 35 65 35 75 50C65 65 35 65 25 50Z" fill="#34d399" />
    <path d="M72 50L85 40V60L72 50Z" fill="#059669" />
    <circle cx="40" cy="46" r="3" fill="#111827" />
    <path
      d="M30 70Q50 65 70 70"
      stroke="#047857"
      strokeWidth="3"
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
      stroke="#dc2626"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 20L50 42L58 20"
      stroke="#2563eb"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="50"
      cy="60"
      r="24"
      fill="url(#goldMedal)"
      stroke="#d97706"
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
      fill="#f97316"
      stroke="#111827"
      strokeWidth="3"
    />
    <path d="M8 50H92" stroke="#111827" strokeWidth="3" />
    <path d="M50 8V92" stroke="#111827" strokeWidth="3" />
    <path
      d="M20 20C35 32 35 68 20 80"
      stroke="#111827"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M80 20C65 32 65 68 80 80"
      stroke="#111827"
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
      fill="#2563eb"
      stroke="#1e40af"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M30 28C45 28 50 22 50 22C50 22 55 28 70 28C70 50 60 68 50 78C40 68 30 50 30 28Z"
      fill="#3b82f6"
    />
    <polygon
      points="50,38 53,45 61,45 55,50 57,58 50,53 43,58 45,50 39,45 47,45"
      fill="#fff"
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
      fill="#f3f4f6"
      stroke={`url(#goldGradient-${uniqueId})`}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <polygon
      points="50,11 86,28 86,62 50,88 14,62 14,28"
      fill="#ffffff"
      stroke={accentColor}
      strokeWidth="1.5"
      opacity="0.9"
    />
    <path
      d="M32,62 L36,42 L45,50 L50,36 L55,50 L64,42 L68,62 Z"
      fill={`url(#goldGradient-${uniqueId})`}
    />
    <circle cx="50" cy="32" r="2.5" fill="#111827" />
    <circle cx="36" cy="38" r="2" fill="#111827" />
    <circle cx="64" cy="38" r="2" fill="#111827" />
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
  <div className="w-12 h-12 rounded-full border border-dashed border-slate-400 flex items-center justify-center text-slate-400 font-bold text-xs flex-shrink-0">
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
    "LOADING TOURNAMENT ENGINE...",
  );
  const [subHeader, setSubHeader] = useState("");
  const [resultsDay, setResultsDay] = useState("");
  const [timelineText, setTimelineText] = useState("");
  const [hideEliminatedRosters, setHideEliminatedRosters] =
    useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState("#fcfbf7");
  const [isDarkThemeText, setIsDarkThemeText] = useState(false);

  const [teamsConfig, setTeamsConfig] = useState<TeamConfig[]>([
    {
      key: "unions",
      name: "THE UNIONS",
      colorClass: "text-emerald-600",
      hexColor: "#059669",
    },
    {
      key: "bownes",
      name: "THE BOWNES",
      colorClass: "text-red-600",
      hexColor: "#dc2626",
    },
    {
      key: "sanfords",
      name: "THE SANFORDS",
      colorClass: "text-orange-600",
      hexColor: "#ea580c",
    },
    {
      key: "barclays",
      name: "THE BARCLAYS",
      colorClass: "text-blue-600",
      hexColor: "#2563eb",
    },
  ]);

  const [topScores, setTopScores] = useState<Record<string, number>>({});
  const [matches, setMatches] = useState<MatchData[]>([]);
  const [rosters, setRosters] = useState<Record<string, string[]>>({});

  const legacyBrandRegistry: Record<
    string,
    { name: string; hexColor: string; colorClass: string }
  > = {
    unions: {
      name: "THE UNIONS",
      hexColor: "#059669",
      colorClass: "text-emerald-600",
    },
    bownes: {
      name: "THE BOWNES",
      hexColor: "#dc2626",
      colorClass: "text-red-600",
    },
    sanfords: {
      name: "THE SANFORDS",
      hexColor: "#ea580c",
      colorClass: "text-orange-600",
    },
    barclays: {
      name: "THE BARCLAYS",
      hexColor: "#2563eb",
      colorClass: "text-blue-600",
    },
  };

  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamColor, setNewTeamColor] = useState("#9333ea");

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

  const handleThemePresetChange = (color: string, isDarkText: boolean) => {
    setBackgroundColor(color);
    setIsDarkThemeText(isDarkText);
  };

  // ==========================================
  // REAL-TIME SYNC ENGINE: LISTENS TO EMITTED WEBHOOKS
  // ==========================================
  useEffect(() => {
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("tournament_state")
        .select("*")
        .eq("id", "ps20_main")
        .single();

      if (data && !error) {
        setTournamentTitle(data.title);
        setSubHeader(data.sub_header);
        setResultsDay(data.results_day);
        setTimelineText(data.timeline_text);
        setHideEliminatedRosters(data.hide_eliminated_rosters);
        setBackgroundColor(data.background_color);
        setIsDarkThemeText(data.is_dark_theme_text);
        setTopScores(data.top_scores);
        setMatches(data.matches);
        setRosters(data.rosters);
      }
      setIsHydrated(true);
    };

    fetchInitialData();

    const channel = supabase
      .channel("live_tournament_feed")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "tournament_state",
          filter: "id=eq.ps20_main",
        },
        (payload) => {
          // 🛑 THE CRITICAL CHANGE: If you are the logged-in admin,
          // ignore incoming stream packets so your deletions don't bounce back!
          if (isAdmin) return;

          const freshState = payload.new;
          setTournamentTitle(freshState.title);
          setSubHeader(freshState.sub_header);
          setResultsDay(freshState.results_day);
          setTimelineText(freshState.timeline_text);
          setHideEliminatedRosters(freshState.hide_eliminated_rosters);
          setBackgroundColor(freshState.background_color);
          setIsDarkThemeText(freshState.is_dark_theme_text);
          setTopScores(freshState.top_scores);
          setMatches(freshState.matches);
          setRosters(freshState.rosters);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]); // <-- Make sure to add isAdmin to the dependency array here

  useEffect(() => {
    if (!isHydrated || !isAdmin) return;

    const delayDebounceTimer = setTimeout(async () => {
      await supabase
        .from("tournament_state")
        .update({
          title: tournamentTitle,
          sub_header: subHeader,
          results_day: resultsDay,
          timeline_text: timelineText,
          hide_eliminated_rosters: hideEliminatedRosters,
          background_color: backgroundColor,
          is_dark_theme_text: isDarkThemeText,
          top_scores: topScores,
          matches: matches,
          rosters: rosters,
        })
        .eq("id", "ps20_main");
    }, 400);

    return () => clearTimeout(delayDebounceTimer);
  }, [
    tournamentTitle,
    subHeader,
    resultsDay,
    timelineText,
    hideEliminatedRosters,
    backgroundColor,
    isDarkThemeText,
    topScores,
    matches,
    rosters,
    isHydrated,
    isAdmin,
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
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`min-h-screen p-3 md:p-6 font-sans antialiased transition-colors duration-200 ${
        isDarkThemeText
          ? "text-white selection:bg-slate-800"
          : "text-[#111827] selection:bg-orange-100"
      }`}
    >
      {/* ADMINISTRATIVE ACCESS CONSOLE OVERLAY */}
      <div
        className={`max-w-7xl mx-auto mb-6 p-4 rounded-xl border flex flex-col gap-4 shadow-sm ${
          isDarkThemeText
            ? "bg-slate-900/90 border-slate-700"
            : "bg-[#f3f2eb] border-slate-300"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {isAdmin && (
              <button
                onClick={addMatchBox}
                className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs px-3 py-1.5 rounded transition-all flex items-center gap-1 shadow"
              >
                ➕ ADD NEW MATCH BOX
              </button>
            )}

            <div className="flex items-center gap-2 border-l border-slate-300 pl-3">
              <span
                className={`text-[11px] font-bold ${isDarkThemeText ? "text-slate-400" : "text-slate-600"}`}
              >
                THEME PRESETS:
              </span>
              <button
                type="button"
                onClick={() => handleThemePresetChange("#fcfbf7", false)}
                className="w-5 h-5 rounded-full border border-slate-400 bg-[#fcfbf7]"
                title="Poster Cream Light"
              />
              <button
                type="button"
                onClick={() => handleThemePresetChange("#0f172a", true)}
                className="w-5 h-5 rounded-full border border-slate-400 bg-[#0f172a]"
                title="Classic Slate Dark"
              />
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-6 h-5 p-0 bg-transparent border-none outline-none cursor-pointer"
                title="Custom Color Picker Canvas"
              />
              <label className="flex items-center gap-1 cursor-pointer select-none ml-1">
                <input
                  type="checkbox"
                  checked={isDarkThemeText}
                  onChange={(e) => setIsDarkThemeText(e.target.checked)}
                  className="rounded border-slate-300 text-orange-600 w-3 h-3"
                />
                <span className="text-[10px] font-semibold text-slate-500">
                  WHITE TEXT
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-bold tracking-wider ${isDarkThemeText ? "text-slate-400" : "text-slate-600"}`}
            >
              AUTHORIZATION LEVEL:
            </span>
            <select
              value={isAdmin ? "admin" : "user"}
              onChange={(e) => setIsAdmin(e.target.value === "admin")}
              className={`text-xs font-bold px-3 py-1.5 rounded border outline-none cursor-pointer shadow-inner ${
                isDarkThemeText
                  ? "bg-slate-800 text-orange-400 border-slate-600"
                  : "bg-white text-orange-600 border-slate-300"
              }`}
            >
              <option value="admin">HIGHER ADMINISTRATIVE LEVEL (ADMIN)</option>
              <option value="user">SPECTATOR LEVEL (USER - READ ONLY)</option>
            </select>
          </div>
        </div>

        {/* ADMIN ADD TEAM FORM */}
        {isAdmin && (
          <form
            className={`border-t pt-3 flex flex-wrap items-center gap-4 p-3 rounded-lg ${
              isDarkThemeText
                ? "border-slate-700 bg-slate-800/50"
                : "border-slate-300 bg-white/60"
            }`}
            onSubmit={createNewTeamAction}
          >
            <div className="flex flex-col gap-1">
              <span
                className={`text-xs font-black tracking-wider ${isDarkThemeText ? "text-slate-300" : "text-slate-700"}`}
              >
                🚀 LEAGUE TEAM MANAGER:
              </span>
              <span className="text-[10px] text-slate-500 font-semibold font-sans">
                TIP: TYPE "UNIONS", "BOWNES", "SANFORDS", OR "BARCLAYS" TO
                AUTO-RESTORE ORIGINAL COLORS
              </span>
            </div>
            <input
              type="text"
              placeholder="ENTER TEAM NAME..."
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className="border border-slate-300 rounded px-3 py-2 text-sm md:text-xs outline-none text-slate-900 w-full sm:w-52 font-bold uppercase shadow-inner"
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black px-3 py-2 rounded shadow w-full sm:w-auto transition-colors"
            >
              PRODUCE LIVE TEAM PROFILE
            </button>
          </form>
        )}
      </div>

      {/* GLOBAL HEADER */}
      <header
        className={`text-center mb-8 border-b pb-5 px-2 ${isDarkThemeText ? "border-slate-700" : "border-slate-300"}`}
      >
        <input
          type="text"
          value={tournamentTitle}
          disabled={!isAdmin}
          onChange={(e) => setTournamentTitle(e.target.value)}
          className={`bg-transparent font-black text-3xl md:text-5xl text-center tracking-tight w-full uppercase outline-none border-none disabled:cursor-default ${
            isDarkThemeText ? "text-white" : "text-slate-900"
          }`}
        />
        <div className="flex justify-center items-center gap-2 mt-2 font-bold text-orange-600 tracking-widest text-sm">
          <span>★</span>
          <input
            type="text"
            value={subHeader}
            disabled={!isAdmin}
            onChange={(e) => setSubHeader(e.target.value)}
            className="bg-transparent font-black text-center tracking-widest uppercase outline-none text-orange-600 border-none w-full max-w-[260px] text-xs disabled:cursor-default"
          />
          <span>★</span>
        </div>
      </header>

      {/* ONE INTEGRATED MAIN PANEL COLUMN */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-start w-full">
        {/* HERO PREVIEW DASHBOARD / TODAY'S RESULTS */}
        <div
          className={`border rounded-2xl p-4 md:p-5 shadow-sm w-full ${
            isDarkThemeText
              ? "bg-slate-900/60 border-slate-800"
              : "bg-[#f3f2eb] border-slate-300"
          }`}
        >
          <input
            type="text"
            value={resultsDay}
            disabled={!isAdmin}
            onChange={(e) => setResultsDay(e.target.value)}
            className={`bg-transparent text-xs font-black text-center tracking-widest uppercase w-full mb-5 border-none outline-none disabled:cursor-default ${
              isDarkThemeText ? "text-slate-400" : "text-slate-600"
            }`}
          />

          <div className="flex flex-wrap justify-center gap-4">
            {teamsConfig.map((t) => (
              <div
                key={t.key}
                className={`relative p-3 pt-8 rounded-xl border flex flex-col items-center group shadow-sm transition-all w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)] min-w-[140px] ${
                  isDarkThemeText
                    ? "bg-slate-800 border-slate-700 hover:border-slate-500"
                    : "bg-white border-slate-200 hover:border-slate-400"
                }`}
              >
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => removeTeamFromSystem(t.key)}
                    className="absolute top-1.5 right-1.5 text-[10px] text-slate-400 hover:text-red-600 font-extrabold px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200"
                  >
                    ❌
                  </button>
                )}
                <span
                  className="text-xs md:text-sm font-black tracking-wider mb-2.5 uppercase text-center truncate w-full px-1"
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
                  className={`bg-transparent font-black text-4xl w-full text-center mt-3 border-none outline-none disabled:cursor-default py-1 rounded focus:bg-slate-100/40 ${
                    isDarkThemeText ? "text-white" : "text-slate-900"
                  }`}
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
              className={`relative border rounded-xl p-4 md:p-5 pt-8 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4 md:gap-0 ${
                isDarkThemeText
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-300"
              }`}
            >
              {isAdmin && (
                <button
                  onClick={() => removeMatchBox(match.id)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-red-600 font-bold text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200 transition-all"
                >
                  ❌ DELETE BOX
                </button>
              )}

              {/* TEAM A DROPDOWN BLOCK */}
              <div className="flex items-center gap-3 w-full md:w-4/12 justify-start p-2 md:p-0 rounded-lg">
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
                  className="bg-transparent font-black tracking-wider text-sm outline-none border-none uppercase disabled:cursor-default cursor-pointer flex-1 md:flex-none p-1 rounded focus:bg-slate-100/10"
                  style={{
                    color:
                      teamsConfig.find((t) => t.key === match.teamA)
                        ?.hexColor || "#64748b",
                  }}
                >
                  <option value="none" className="text-slate-400">
                    N/A (HIDE TEAM)
                  </option>
                  {teamsConfig.map((t) => (
                    <option
                      key={t.key}
                      value={t.key}
                      className="text-slate-900"
                      style={{ color: t.hexColor }}
                    >
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* SCORING AND FOULS CENTER MODULE */}
              <div
                className={`flex items-center justify-center gap-8 md:gap-6 w-full md:w-4/12 px-2 py-1 rounded-xl border md:border-none ${
                  isDarkThemeText
                    ? "bg-slate-800 border-slate-700 md:bg-transparent"
                    : "bg-slate-50 border-slate-200 md:bg-transparent"
                }`}
              >
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
                        className={`bg-transparent text-4xl font-black text-center w-16 border-none outline-none disabled:cursor-default h-10 p-1 rounded focus:bg-slate-500/20 ${
                          isDarkThemeText ? "text-white" : "text-slate-900"
                        }`}
                        style={{
                          color: isDarkThemeText
                            ? "#fff"
                            : teamsConfig.find((t) => t.key === match.teamA)
                                ?.hexColor || "#111827",
                        }}
                      />
                      <div className="flex items-center text-xs text-red-600 font-bold mt-1 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        <span>F:&nbsp;</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={match.foulsA === 0 ? "" : match.foulsA}
                          disabled={!isAdmin}
                          className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold text-xs"
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
                    <span className="text-slate-400 text-xs font-bold">—</span>
                  )}
                </div>

                <span className="text-xs font-black tracking-widest bg-slate-200 text-slate-700 px-3 py-2 rounded-md border border-slate-300 shadow-sm self-center">
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
                        className={`bg-transparent text-4xl font-black text-center w-16 border-none outline-none disabled:cursor-default h-10 p-1 rounded focus:bg-slate-500/20 ${
                          isDarkThemeText ? "text-white" : "text-slate-900"
                        }`}
                        style={{
                          color: isDarkThemeText
                            ? "#fff"
                            : teamsConfig.find((t) => t.key === match.teamB)
                                ?.hexColor || "#111827",
                        }}
                      />
                      <div className="flex items-center text-xs text-red-600 font-bold mt-1 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        <span>F:&nbsp;</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={match.foulsB === 0 ? "" : match.foulsB}
                          disabled={!isAdmin}
                          className="bg-transparent w-8 text-center outline-none border-none p-0 font-bold text-xs"
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
                    <span className="text-slate-400 text-xs font-bold">—</span>
                  )}
                </div>
              </div>

              {/* TEAM B DROPDOWN BLOCK */}
              <div className="flex items-center gap-3 w-full md:w-4/12 justify-end p-2 md:p-0 rounded-lg flex-row-reverse md:flex-row">
                <select
                  value={match.teamB}
                  disabled={!isAdmin}
                  onChange={(e) =>
                    updateMatchField(match.id, "teamB", e.target.value)
                  }
                  className="bg-transparent font-black tracking-wider text-sm outline-none border-none uppercase text-right md:text-right disabled:cursor-default cursor-pointer flex-1 md:flex-none mr-2 md:mr-0 p-1 rounded focus:bg-slate-100/10"
                  style={{
                    color:
                      teamsConfig.find((t) => t.key === match.teamB)
                        ?.hexColor || "#64748b",
                  }}
                >
                  <option value="none" className="text-slate-400">
                    N/A (HIDE TEAM)
                  </option>
                  {teamsConfig.map((t) => (
                    <option
                      key={t.key}
                      value={t.key}
                      className="text-slate-900"
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
        <div
          className={`border rounded-xl p-4 md:p-5 text-left shadow-inner flex flex-col w-full ${
            isDarkThemeText
              ? "bg-slate-900/40 border-slate-800"
              : "bg-[#f3f2eb] border-slate-300"
          }`}
        >
          <span className="text-orange-600 text-xs uppercase font-black tracking-widest mb-2 flex items-center gap-1">
            <span>📢</span> OFFICIAL TOURNAMENT NOTICE BOARD
          </span>
          <textarea
            value={timelineText}
            disabled={!isAdmin}
            onChange={(e) => setTimelineText(e.target.value)}
            placeholder="ENTER BROADCAST NOTICE NOTES DETAILS HERE..."
            className={`p-4 rounded-lg font-black text-xl md:text-[40px] w-full min-h-[140px] border outline-none uppercase tracking-wide leading-tight resize-y disabled:cursor-default ${
              isDarkThemeText
                ? "bg-slate-800 border-slate-700 text-white"
                : "bg-white border-slate-300 text-slate-800"
            }`}
          />
        </div>

        {/* FIXED & WIDE ROSTERS LAYOUT PANEL PLACED HORIZONTALLY AT BOTTOM */}
        <div
          className={`border rounded-2xl p-4 md:p-5 shadow-sm w-full mt-2 ${
            isDarkThemeText
              ? "bg-slate-900/60 border-slate-800"
              : "bg-[#f3f2eb] border-slate-300"
          }`}
        >
          <div
            className={`border-b pb-3 mb-5 flex flex-col sm:flex-row justify-between items-center gap-3 ${
              isDarkThemeText ? "border-slate-800" : "border-slate-300"
            }`}
          >
            <h3
              className={`font-black tracking-widest text-sm uppercase flex items-center gap-2 ${
                isDarkThemeText ? "text-slate-200" : "text-slate-800"
              }`}
            >
              <span>🏀</span> TEAMS & ROSTERS MANAGER
            </h3>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hideEliminatedRosters}
                onChange={(e) => setHideEliminatedRosters(e.target.checked)}
                className="rounded bg-white border-slate-300 text-orange-600 focus:ring-0 w-3.5 h-3.5"
              />
              <span
                className={`text-[10px] font-black uppercase tracking-wider ${isDarkThemeText ? "text-slate-400" : "text-slate-600"}`}
              >
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
                  className={`space-y-3 p-3 rounded-xl border flex flex-col justify-between shadow-sm ${
                    isDarkThemeText
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div>
                    <div
                      className={`font-black text-sm p-2 rounded text-center tracking-widest uppercase border flex justify-between items-center px-3 ${
                        isDarkThemeText ? "bg-slate-900" : "bg-slate-50"
                      }`}
                      style={{
                        color: team.hexColor,
                        borderColor: `${team.hexColor}40`,
                      }}
                    >
                      <span>{team.name}</span>

                      {isAdmin && (
                        <div className="flex items-center gap-2 text-xs bg-white px-1.5 py-0.5 rounded border border-slate-300 shadow-sm">
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
                            className="text-red-600 hover:text-red-500 font-black px-1"
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
                            className="text-emerald-600 hover:text-emerald-500 font-black px-1"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>

                    <ol
                      className={`space-y-1.5 text-xs pl-1 mt-3 ${isDarkThemeText ? "text-slate-300" : "text-slate-800"}`}
                    >
                      {playerArray.map((player, idx) => (
                        <li
                          key={idx}
                          className={`flex items-center gap-1 px-2 py-1 rounded border border-transparent ${
                            isAdmin
                              ? isDarkThemeText
                                ? "bg-slate-900/60 border-slate-700/60"
                                : "bg-slate-50 border-slate-200"
                              : "bg-transparent"
                          }`}
                        >
                          <span className="text-slate-400 font-mono text-[10px] w-4">
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
                            className={`bg-transparent border-none p-0 w-full outline-none font-bold text-sm md:text-xs py-0.5 px-1 rounded focus:bg-slate-500/10 ${
                              isDarkThemeText ? "text-white" : "text-slate-900"
                            } ${!isAdmin ? "cursor-default pointer-events-none" : ""}`}
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
