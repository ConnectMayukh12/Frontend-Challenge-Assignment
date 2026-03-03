import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "../../context/ThemeContext";
import { Home, Menu, Sun, Moon, Timer } from "lucide-react";
import "./ScanDetail.css";
import CircularProgress from "../../components/CircularProgress";
import Stepper from "../../components/Stepper";
import MetaRow from "../../components/MetaRow";
import ActivityLog from "../../components/ActivityLog";
import VerificationLoops from "../../components/VerificationLoops";
import FindingLog from "../../components/FindingLog";
import BottomBar from "../../components/BottomBar";

/* ──────────────────────────────────────────
   Inline icon — pulse dot for console header
────────────────────────────────────────── */
const IconDot = () => (
  <svg viewBox="0 0 10 10" className="w-2 h-2 fill-[#0CC8A8] animate-pulse">
    <circle cx="5" cy="5" r="5" />
  </svg>
);

/* ══════════════════════════════════════════
   Main ScanDetail Page
══════════════════════════════════════════ */
const ScanDetail = () => {
  const { dark, setDark } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("activity");
  const sideW = "md:pl-64";

  return (
    <div
      className={`h-screen overflow-hidden ${dark ? "bg-[#0F0F0F] text-white" : "bg-[#F5F5F5] text-gray-900"}`}
    >
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        dark={dark}
      />

      <div
        className={`transition-all duration-300 ${sideW} h-screen flex flex-col overflow-hidden`}
      >
        {/* ── Header ────────────────────────────────────────── */}
        <header
          className={`scan-fade-in sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 border-b
          ${dark ? "bg-[#0F0F0F]/95 border-white/[0.06] backdrop-blur-md" : "bg-white border-gray-200"}`}
        >
          {/* Left: breadcrumb */}
          <div className="flex items-center gap-2 text-sm min-w-0">
            <button
              className={`md:hidden mr-2 ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} />
            </button>

            <span
              className={`font-semibold text-sm ${dark ? "text-white" : "text-gray-900"}`}
            >
              Scan
            </span>

            <Home
              size={14}
              className={`hidden sm:block ${dark ? "text-gray-500" : "text-gray-400"}`}
            />

            <span
              className={`hidden sm:inline ${dark ? "text-gray-500" : "text-gray-400"}`}
            >
              /
            </span>

            <span
              className={`hidden sm:inline truncate ${dark ? "text-gray-400" : "text-gray-500"}`}
            >
              Private Assets
            </span>

            <span
              className={`hidden sm:inline ${dark ? "text-gray-500" : "text-gray-400"}`}
            >
              /
            </span>

            <span className="text-[#0CC8A8] font-medium truncate">
              New Scan
            </span>
          </div>

          {/* Right: action buttons + theme toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              className={`hidden sm:inline-flex px-4 py-1.5 rounded-lg text-sm font-medium border transition
              ${dark ? "border-white/15 text-gray-200 hover:bg-white/5" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
            >
              Export Report
            </button>

            <button
              className={`hidden sm:inline-flex px-4 py-1.5 rounded-lg text-sm font-medium border transition
              ${dark ? "border-red-500/30 text-red-400 hover:bg-red-500/10" : "border-red-300 text-red-500 bg-red-50 hover:bg-red-100"}`}
            >
              Stop Scan
            </button>

            <button
              onClick={() => setDark((d) => !d)}
              className={`p-1.5 rounded-lg border transition
                ${dark ? "border-white/10 text-gray-400 hover:bg-white/5" : "border-gray-200 text-gray-500 hover:bg-gray-100"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        {/* ── Top Progress Section ───────────────────────────── */}
        <section className="shrink-0 scan-fade-up sd-1">
          <div
            className={`mx-4 my-3 rounded-xl ${dark ? "bg-[#111111]" : "bg-white"} border overflow-hidden ${dark ? "border-white/[0.07]" : "border-gray-200"}`}
          >
            <div className="flex flex-col sm:flex-row items-stretch">
              {/* Circle */}
              <div className="shrink-0 flex items-center justify-center sm:justify-start px-5 py-5">
                <CircularProgress percent={67} dark={dark} />
              </div>
              {/* Horizontal divider on mobile */}
              <div
                className={`sm:hidden h-px shrink-0 ${dark ? "bg-white/[0.07]" : "bg-gray-200"}`}
              />
              {/* Vertical divider on sm+ */}
              <div
                className={`hidden sm:block w-px shrink-0 ${dark ? "bg-white/[0.07]" : "bg-gray-200"}`}
              />
              {/* Right: Stepper + MetaRow */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="overflow-x-auto px-4 py-4">
                  <Stepper activeIndex={0} dark={dark} />
                </div>
                <MetaRow dark={dark} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Live Scan Console (full-width, contains left+right) ── */}
        <main className="flex-1 min-h-0 px-4 pb-4 overflow-hidden scan-fade-up sd-2">
          <div
            className={`h-full flex flex-col rounded-2xl border overflow-hidden
            ${dark ? "bg-[#111111] border-white/[0.06]" : "bg-white border-gray-200 shadow-sm"}`}
          >
            {/* ── Console header ── */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b shrink-0
              ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
            >
              <div className="flex items-center gap-2.5">
                <IconDot />
                <span
                  className={`text-sm font-semibold ${dark ? "text-white" : "text-gray-900"}`}
                >
                  Live Scan Console
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium
                  ${dark ? "bg-white/10 text-gray-300" : "bg-gray-100 text-gray-500"}`}
                >
                  <Timer size={11} />
                  Running...
                </span>
              </div>
            </div>

            {/* ── Body: left col + right col ── */}
            <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
              {/* LEFT — tabs: Activity Log | Verification Loops */}
              <div className="flex-1 min-h-0 min-w-0 flex flex-col overflow-hidden">
                {/* Tab bar */}
                <div
                  className={`flex border-b shrink-0 ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
                >
                  {["activity", "verification"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition
                        ${
                          activeTab === tab
                            ? "border-[#0CC8A8] text-[#0CC8A8]"
                            : `border-transparent ${dark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`
                        }`}
                    >
                      {tab === "activity"
                        ? "Activity Log"
                        : "Verification Loops"}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div
                  className={`flex-1 min-h-0 overflow-hidden ${dark ? "bg-[#0D0D0D]" : "bg-gray-50"}`}
                >
                  {activeTab === "activity" ? (
                    <ActivityLog dark={dark} />
                  ) : (
                    <VerificationLoops dark={dark} />
                  )}
                </div>
              </div>

              {/* Vertical divider (desktop) / Horizontal divider (mobile) */}
              <div
                className={`shrink-0
                  lg:w-px lg:h-auto h-px w-auto
                  ${dark ? "bg-white/[0.06]" : "bg-gray-100"}`}
              />

              {/* RIGHT — Finding Log */}
              <div
                className={`flex flex-col shrink-0
                w-full h-[260px] lg:h-auto lg:w-[380px] xl:w-[420px] overflow-hidden`}
              >
                {/* sub-header */}
                <div
                  className={`px-4 py-2 border-b shrink-0
                  ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
                >
                  <span
                    className={`text-xs font-semibold ${dark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Finding Log
                  </span>
                </div>
                {/* cards */}
                <div className="flex-1 min-h-0 overflow-hidden">
                  <FindingLog dark={dark} />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ── Bottom Status Bar ───────────────────────────────── */}
        <div className="shrink-0">
          <BottomBar dark={dark} />
        </div>
      </div>
    </div>
  );
};

export default ScanDetail;
