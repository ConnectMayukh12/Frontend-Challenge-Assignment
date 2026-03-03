import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  ClipboardCheck,
  FileText,
  Calendar,
  Bell,
  Settings,
  Info,
  ChevronRight,
  LogOut,
  X,
} from "lucide-react";

const mainNav = [
  { label: "Dashboard", icon: LayoutGrid, to: "/dashboard" },
  { label: "Projects", icon: ClipboardCheck, to: "/projects" },
  { label: "Scans", icon: FileText, to: "/scans" },
  { label: "Schedule", icon: Calendar, to: "/schedule" },
];
const secondaryNav = [
  { label: "Notifications", icon: Bell, to: "/notifications" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "Support", icon: Info, to: "/support" },
];

const NavItem = ({ label, icon: Icon, to, collapsed, dark }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-6 py-2.5 rounded-3xl text-sm font-medium transition-all duration-150 group
      ${
        isActive
          ? "bg-[#0CC8A8]/15 text-[#019f85]"
          : dark
            ? "text-gray-400 hover:bg-white/5 hover:text-white"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
      }`
    }
  >
    <Icon size={18} className="shrink-0" />
    {!collapsed && <span className="truncate">{label}</span>}
  </NavLink>
);

const Sidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  dark,
}) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setShowLogout(false);
    navigate("/");
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-40 flex flex-col
          ${dark ? "bg-[#111111] border-r border-white/[0.06]" : "bg-white border-r border-gray-200 shadow-sm"}
          w-64
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 shrink-0">
          <div className="w-7 h-7 rounded-full bg-[#02b194] flex items-center justify-center shrink-0">
            <div className="z-2 w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="font-bold text-[20px] tracking-wide text-[#02b194]">
            aps
          </span>
        </div>

        {/* Main nav */}
        <nav className="flex-1 px-2 py-6 space-y-1 overflow-y-auto">
          {mainNav.map((item) => (
            <NavItem key={item.label} {...item} collapsed={false} dark={dark} />
          ))}

          {/* Separator */}
          <div
            className={`mx-4 my-3 h-px ${dark ? "bg-white/[0.06]" : "bg-gray-200"}`}
          />

          {secondaryNav.map((item) => (
            <NavItem key={item.label} {...item} collapsed={false} dark={dark} />
          ))}
        </nav>

        {/* User */}
        <div
          className={`flex items-center gap-3 px-3 py-4 border-t shrink-0 ${dark ? "border-white/[0.06]" : "border-gray-200"}`}
        >
          <img
            src="/User.png"
            alt="avatar"
            className="w-8 h-8 rounded-full shrink-0 object-cover"
          />
          <div className="min-w-0">
            <p
              className={`text-xs truncate ${dark ? "text-gray-400" : "text-gray-500"}`}
            >
              admin@edu.com
            </p>
            <p
              className={`text-xs font-semibold truncate ${dark ? "text-white" : "text-gray-900"}`}
            >
              Security Lead
            </p>
          </div>
          <button
            onClick={() => setShowLogout(true)}
            className={`ml-auto transition shrink-0 cursor-pointer ${dark ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-gray-700"}`}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </aside>

      {/* Logout Modal */}
      {showLogout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowLogout(false)}
        >
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl w-[480px]
              ${dark ? "bg-[#151515] border border-white/10" : "bg-white border border-gray-200"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowLogout(false)}
              className={`absolute top-3 right-3 z-10 p-1.5 rounded-full transition cursor-pointer
                ${dark ? "bg-black/40 text-gray-300 hover:bg-black/60" : "bg-white/70 text-gray-600 hover:bg-white"}`}
            >
              <X size={14} />
            </button>

            {/* Cat gif */}
            <img src="/Cat.gif" alt="cat" className="w-full object-cover" />

            {/* Content */}
            <div className="px-6 py-5 text-center">
              <p
                className={`text-sm font-semibold mb-1 ${dark ? "text-white" : "text-gray-900"}`}
              >
                Ready to leave?
              </p>
              <p
                className={`text-xs mb-5 ${dark ? "text-gray-400" : "text-gray-500"}`}
              >
                You'll be signed out of your session.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogout(false)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition
                    ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 py-2 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition flex items-center justify-center gap-1.5"
                >
                  <LogOut size={14} />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
