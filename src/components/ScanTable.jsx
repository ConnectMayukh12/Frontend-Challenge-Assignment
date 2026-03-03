import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Mock data ───────────────────────────────────────────────── */
const MOCK_SCANS = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: [5, 12, 23, 18],
    lastScan: "4d ago",
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vuln: [5, 12, null, null],
    lastScan: "4d ago",
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vuln: [5, 12, null, null],
    lastScan: "4d ago",
  },
  {
    id: 10,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vuln: [2, 4, 6, 1],
    lastScan: "3d ago",
  },
  {
    id: 11,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vuln: [2, 4, 6, 1],
    lastScan: "3d ago",
  },
  {
    id: 12,
    name: "API Gateway",
    type: "Whitebox",
    status: "Completed",
    progress: 100,
    vuln: [1, 8, 15, 22],
    lastScan: "1d ago",
  },
  {
    id: 13,
    name: "Mobile Backend",
    type: "Greybox",
    status: "Scheduled",
    progress: 0,
    vuln: [],
    lastScan: "—",
  },
  {
    id: 14,
    name: "Corporate Network",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    vuln: [3, 9, 11, 5],
    lastScan: "5d ago",
  },
  {
    id: 15,
    name: "Cloud Infrastructure",
    type: "Whitebox",
    status: "Failed",
    progress: 35,
    vuln: [7, 2, 0, 0],
    lastScan: "2d ago",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */
const StatusChip = ({ status }) => {
  const cfg = {
    Completed: "bg-[#0CC8A8]/15 text-[#0CC8A8] border border-[#0CC8A8]/30",
    Scheduled: "bg-gray-500/15 text-gray-400 border border-gray-500/20",
    Failed: "bg-red-500/15 text-red-400 border border-red-500/20",
  };
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-xs font-medium ${cfg[status] ?? ""}`}
    >
      {status}
    </span>
  );
};

const ProgressBar = ({ value, status }) => {
  const barColor =
    status === "Failed"
      ? "bg-red-500"
      : status === "Scheduled"
        ? "bg-gray-400"
        : "bg-[#0CC8A8]";
  return (
    <div className="flex items-center gap-2 min-w-[100px]">
      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-gray-400 w-8 text-right shrink-0">
        {value}%
      </span>
    </div>
  );
};

const vulnColors = [
  "bg-red-500", // critical
  "bg-orange-500", // high
  "bg-yellow-400", // medium
  "bg-[#0CC8A8]", // low
];

const VulnBadges = ({ vuln }) => (
  <div className="flex gap-1">
    {vuln.map((n, i) =>
      n != null && n !== 0 ? (
        <span
          key={i}
          className={`${vulnColors[i]} mr-1 text-white text-[11px] font-bold w-5.5 h-5.5 w-6 h-6 rounded flex items-center justify-center`}
        >
          {n}
        </span>
      ) : null,
    )}
  </div>
);

/* ── Toolbar icons ───────────────────────────────────────────── */
const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-400"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconFilter = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconColumns = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="3" y="3" width="7" height="18" rx="1" />
    <rect x="14" y="3" width="7" height="18" rx="1" />
  </svg>
);
const IconPlus = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className="w-4 h-4"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconRefresh = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </svg>
);

/* ── Main Table ─────────────────────────────────────────────── */
const ScanTable = ({ dark }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = MOCK_SCANS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase()) ||
      s.status.toLowerCase().includes(search.toLowerCase()),
  );

  const th = `px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider
    ${dark ? "text-gray-500" : "text-gray-400"}`;

  return (
    <div
      className={`rounded-lg border overflow-hidden
      ${dark ? "bg-[#161616] border-white/[0.07]" : "bg-white border-gray-200 shadow-sm"}`}
    >
      {/* Toolbar */}
      <div
        className={`flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 px-4 py-3 border-b
        ${dark ? "border-white/[0.07]" : "border-gray-100"}`}
      >
        {/* Search */}
        <div
          className={`flex items-center gap-2 w-full sm:flex-1 sm:min-w-[180px] sm:max-w-md
          rounded-md border px-3 py-2
          ${dark ? "bg-black/30 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-900"}`}
        >
          <IconSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search scans..."
            className="bg-transparent text-sm outline-none w-full placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-2 sm:ml-auto">
          <button
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium border transition
            ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
          >
            <IconFilter /> Filter
          </button>
          <button
            className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium border transition
            ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
          >
            <IconColumns /> Column
          </button>
          <button
            onClick={() => navigate("/new-scan")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold
              bg-[#0CC8A8] hover:bg-[#0bb598] text-white transition shadow-md shadow-[#0CC8A8]/20 ml-auto sm:ml-0"
          >
            <IconPlus /> New scan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className={dark ? "bg-black/20" : "bg-gray-50"}>
              <th className={th}>Scan Name</th>
              <th className={th}>Type</th>
              <th className={th}>Status</th>
              <th className={th}>Progress</th>
              <th className={th}>Vulnerability</th>
              <th className={`${th} text-right`}>Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan, i) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scans/${scan.id}`)}
                className={`cursor-pointer transition-colors
                  ${
                    dark
                      ? `border-t border-white/[0.04] hover:bg-white/[0.03] ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`
                      : `border-t border-gray-100 hover:bg-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`
                  }`}
              >
                <td
                  className={`px-4 py-3.5 text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}
                >
                  {scan.name}
                </td>
                <td
                  className={`px-4 py-3.5 text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {scan.type}
                </td>
                <td className="px-4 py-3.5">
                  <StatusChip status={scan.status} />
                </td>
                <td className="px-4 py-3.5">
                  <ProgressBar value={scan.progress} status={scan.status} />
                </td>
                <td className="px-4 py-3.5">
                  <VulnBadges vuln={scan.vuln} />
                </td>
                <td
                  className={`px-4 py-3.5 text-sm text-right ${dark ? "text-gray-500" : "text-gray-400"}`}
                >
                  {scan.lastScan}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-gray-500"
                >
                  No scans match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScanTable;
