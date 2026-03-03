import React from "react";

const META = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00 AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350" },
];

const MetaRow = ({ dark }) => (
  <div
    className={`grid grid-cols-3 lg:grid-cols-6 border-t text-xs
    ${dark ? "border-white/[0.06]" : "border-gray-100"}`}
  >
    {META.map(({ label, value }, i) => (
      <div
        key={label}
        className={`flex flex-col px-4 py-2.5
        ${i % 3 !== 0 ? (dark ? "border-l border-white/[0.06]" : "border-l border-gray-100") : ""}
        ${i >= 3 ? (dark ? "border-t border-white/[0.06] lg:border-t-0" : "border-t border-gray-100 lg:border-t-0") : ""}
        ${i === 3 ? (dark ? "lg:border-l lg:border-white/[0.06]" : "lg:border-l lg:border-gray-100") : ""}`}
      >
        <span
          className={`text-[10px] uppercase tracking-widest font-semibold mb-0.5
          ${dark ? "text-gray-500" : "text-gray-400"}`}
        >
          {label}
        </span>
        <span
          className={`font-bold text-[12px]
          ${
            label === "Checklists"
              ? "text-[#0CC8A8]"
              : dark
                ? "text-white"
                : "text-gray-900"
          }`}
        >
          {value}
        </span>
      </div>
    ))}
  </div>
);

export default MetaRow;
