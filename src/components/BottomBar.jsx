import React from "react";

const STATS = [
  { label: "Sub-Agents", value: 0, color: "text-gray-400" },
  { label: "Parallel Executions", value: 2, color: "text-gray-400" },
  { label: "Operations", value: 1, color: "text-gray-400" },
];

const SEV_COUNTS = [
  { label: "Critical", value: 0, color: "text-red-500" },
  { label: "High", value: 0, color: "text-orange-500" },
  { label: "Medium", value: 0, color: "text-yellow-400" },
  { label: "Low", value: 0, color: "text-[#0CC8A8]" },
];

const BottomBar = ({ dark }) => (
  <div
    className={`flex items-center gap-4 px-4 py-2 border-t text-xs overflow-x-auto
    ${dark ? "bg-[#0F0F0F] border-white/[0.06]" : "bg-white border-gray-200"}`}
  >
    {STATS.map(({ label, value, color }) => (
      <span
        key={label}
        className={`hidden sm:inline shrink-0 ${dark ? "text-gray-400" : "text-gray-500"}`}
      >
        <span className={`font-semibold ${color}`}>⦿</span>{" "}
        <span className={color}>{label}:</span>{" "}
        <span
          className={`font-semibold ${dark ? "text-white" : "text-gray-900"}`}
        >
          {value}
        </span>
      </span>
    ))}
    <div className="flex-1 hidden sm:block" />
    {SEV_COUNTS.map(({ label, value, color }) => (
      <span key={label} className={`shrink-0 ${color}`}>
        {label}: <span className={`font-bold ${color}`}>{value}</span>
      </span>
    ))}
  </div>
);

export default BottomBar;
