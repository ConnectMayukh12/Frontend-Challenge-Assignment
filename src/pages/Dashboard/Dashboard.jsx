import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import StatsBar from "../../components/StatsBar";
import ScanTable from "../../components/ScanTable";
import { useTheme } from "../../context/ThemeContext";
import { Home, Menu, Sun, Moon } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const { dark, setDark } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sideW = "md:pl-64";

  return (
    <div
      className={`min-h-screen ${dark ? "dashboard-dark" : "dashboard-light"}`}
    >
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        dark={dark}
      />

      {/* Main content area shifts right on desktop */}
      <div
        className={`transition-all duration-300 ${sideW} min-h-screen flex flex-col`}
      >
        {/* ── Top header ──────────────────────────────────────── */}
        <header
          className={`anim-fade sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 border-b
          ${dark ? "bg-[#0F0F0F]/95 border-white/[0.06] backdrop-blur-md" : "bg-white border-gray-200"}`}
        >
          {/* Left: title + breadcrumb */}
          <div className="flex items-center gap-2 text-sm min-w-0">
            {/* Mobile hamburger */}
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

        {/* ── Page body ───────────────────────────────────────── */}
        <main className="flex-1 px-3 py-4 sm:px-5 sm:py-5 space-y-4 sm:space-y-5">
          <div className="anim-fade-up delay-2">
            <StatsBar dark={dark} />
          </div>
          <div className="anim-fade-up delay-3">
            <ScanTable dark={dark} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
