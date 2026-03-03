import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "../../context/ThemeContext";
import {
  Home,
  Menu,
  Sun,
  Moon,
  FolderOpen,
  CalendarDays,
  Bell,
  Settings,
  MessageCircle,
  FileText,
} from "lucide-react";

const PAGE_META = {
  "/projects": { label: "Projects", icon: FolderOpen },
  "/schedule": { label: "Schedule", icon: CalendarDays },
  "/notifications": { label: "Notifications", icon: Bell },
  "/settings": { label: "Settings", icon: Settings },
  "/support": { label: "Support", icon: MessageCircle },
};

const PlaceholderPage = () => {
  const { dark, setDark } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const meta = PAGE_META[pathname] ?? { label: "Page", icon: FileText };

  return (
    <div
      className={`h-screen overflow-hidden ${dark ? "bg-[#0F0F0F] text-white" : "bg-[#F5F5F5] text-gray-900"}`}
    >
      <Sidebar
        collapsed={false}
        setCollapsed={() => {}}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        dark={dark}
      />

      <div className="md:pl-64 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 border-b
          ${dark ? "bg-[#0F0F0F]/95 border-white/[0.06] backdrop-blur-md" : "bg-white border-gray-200"}`}
        >
          <div className="flex items-center gap-2 text-sm min-w-0">
            <button
              className={`md:hidden mr-2 ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={20} />
            </button>
            <Home
              size={14}
              className={dark ? "text-gray-500" : "text-gray-400"}
            />
            <span className={dark ? "text-gray-500" : "text-gray-400"}>/</span>
            <span className="text-[#0CC8A8] font-medium">{meta.label}</span>
          </div>

          <button
            onClick={() => setDark((d) => !d)}
            className={`p-1.5 rounded-lg border transition
              ${dark ? "border-white/10 text-gray-400 hover:bg-white/5" : "border-gray-200 text-gray-500 hover:bg-gray-100"}`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        {/* Body */}
        <main className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          <div
            className={`p-6 rounded-2xl ${dark ? "bg-white/5" : "bg-white"} shadow-sm`}
          >
            <meta.icon size={56} className="text-[#0CC8A8]" />
          </div>

          <div className="text-center">
            <h1
              className={`text-2xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}
            >
              {meta.label}
            </h1>
            <p
              className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}
            >
              You're currently in the{" "}
              <span className="font-semibold text-[#0CC8A8]">{meta.label}</span>{" "}
              section.
              <br />
              This page is under construction.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0CC8A8] hover:bg-[#0ab394] text-white text-sm font-semibold transition"
          >
            <Home size={15} />
            Go to Dashboard
          </button>
        </main>
      </div>
    </div>
  );
};

export default PlaceholderPage;
