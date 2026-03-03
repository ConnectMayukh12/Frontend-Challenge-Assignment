import React from "react";

const FINDINGS = [
  {
    severity: "Critical",
    time: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    path: "/api/users/profile",
    desc: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    severity: "High",
    time: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    path: "/api/auth/login",
    desc: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    severity: "Medium",
    time: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    path: "/api/search",
    desc: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];

const severityBadge = {
  Critical: "bg-red-500    text-white",
  High: "bg-orange-500 text-white",
  Medium: "bg-yellow-400 text-black",
  Low: "bg-green-500  text-white",
};

const FindingLog = ({ dark }) => (
  <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-2">
    {FINDINGS.map((f, i) => (
      <div
        key={i}
        className={`rounded-lg p-3 border cursor-pointer transition scan-card-in
          ${
            dark
              ? "bg-[#1A1A1A] border-white/[0.06] hover:border-white/10"
              : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
          }`}
        style={{ animationDelay: `${0.15 + i * 0.12}s` }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${severityBadge[f.severity]}`}
          >
            {f.severity}
          </span>
          <span
            className={`text-[10px] ${dark ? "text-gray-500" : "text-gray-400"}`}
          >
            {f.time}
          </span>
        </div>
        <h4
          className={`text-xs font-semibold mb-1 ${dark ? "text-white" : "text-gray-900"}`}
        >
          {f.title}
        </h4>
        <p className="text-[10px] text-[#0CC8A8] font-jetbrains mb-1">
          {f.path}
        </p>
        <p
          className={`text-[11px] leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}
        >
          {f.desc}
        </p>
      </div>
    ))}
  </div>
);

export default FindingLog;
