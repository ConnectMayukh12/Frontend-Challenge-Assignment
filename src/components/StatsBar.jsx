import React from "react";
import { Ban, AlertTriangle, Search, RefreshCw } from "lucide-react";

const metaItems = [
  { label: "Org", value: "Project X" },
  { label: "Owner", value: "Nammagiri" },
  { label: "Total Scans", value: "100" },
  { label: "Scheduled", value: "1000" },
  { label: "Rescans", value: "100" },
  { label: "Failed Scans", value: "100" },
];

const severities = [
  {
    label: "Critical Severity",
    count: 86,
    trend: "+2%",
    up: true,
    trendColor: "text-pink-500",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    Icon: Ban,
  },
  {
    label: "High Severity",
    count: 16,
    trend: "+0.9%",
    up: true,
    trendColor: "text-red-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    Icon: AlertTriangle,
  },
  {
    label: "Medium Severity",
    count: 26,
    trend: "+0.9%",
    up: false,
    trendColor: "text-green-500",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    Icon: AlertTriangle,
  },
  {
    label: "Low Severity",
    count: 16,
    trend: "+0.9%",
    up: true,
    trendColor: "text-orange-500",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    Icon: Search,
  },
];

const StatsBar = ({ dark }) => (
  <div
    className={`border ${dark ? "border-white/[0.07] rounded-xl" : "border-gray-100"} `}
  >
    {/* ── Meta info strip ── */}
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 px-6 py-3 text-sm
      ${dark ? "text-gray-400" : "text-gray-500"}`}
    >
      {metaItems.map(({ label, value }, i, arr) => (
        <React.Fragment key={label}>
          <span>
            {label}:{" "}
            <span
              className={`font-semibold ${dark ? "text-white" : "text-gray-900"}`}
            >
              {value}
            </span>
          </span>
          {i < arr.length - 1 && (
            <span className={dark ? "text-white/10" : "text-gray-300"}>|</span>
          )}
        </React.Fragment>
      ))}
      <span
        className={`ml-auto flex items-center gap-1.5 text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}
      >
        <RefreshCw size={13} /> 10 mins ago
      </span>
    </div>

    {/* ── Severity cards ── */}
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {severities.map(
        ({ label, count, trend, up, trendColor, iconBg, iconColor, Icon }) => (
          <div key={label} className="px-4 py-4 sm:px-5 sm:py-5">
            {/* Row 1: label + icon */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-sm font-medium ${dark ? "text-gray-400" : "text-gray-500"}`}
              >
                {label}
              </span>
              <span className={`p-2.5 rounded-xl ${iconBg} shrink-0`}>
                <Icon size={18} className={iconColor} />
              </span>
            </div>
            {/* Row 2: count + trend */}
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className={`text-3xl font-bold leading-none ${dark ? "text-white" : "text-gray-900"}`}
              >
                {count}
              </span>
              <span className={`text-xs font-medium ${trendColor}`}>
                {up ? "↑" : "↓"} <span className="font-semibold">{trend}</span>{" "}
                <span
                  className={`font-normal ${dark ? "text-gray-500" : "text-gray-400"}`}
                >
                  {up ? "increase" : "decrease"} than yesterday
                </span>
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  </div>
);

export default StatsBar;
