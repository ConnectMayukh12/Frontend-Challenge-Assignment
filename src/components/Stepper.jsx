import React from "react";
import {
  SearchCode,
  Network,
  FlaskConical,
  ClipboardCheck,
  FileText,
} from "lucide-react";

const STEPS = [
  { label: "Spidering", icon: SearchCode },
  { label: "Mapping", icon: Network },
  { label: "Testing", icon: FlaskConical },
  { label: "Validating", icon: ClipboardCheck },
  { label: "Reporting", icon: FileText },
];

const Stepper = ({ activeIndex, dark }) => (
  <div className="flex items-start flex-1 min-w-0">
    {STEPS.map(({ label, icon: Icon }, i) => {
      const active = i === activeIndex;
      const done = i < activeIndex;
      return (
        <React.Fragment key={label}>
          {/* step — pop in with stagger */}
          <div
            className="flex flex-col items-center gap-1.5 shrink-0 scan-step-pop"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition shrink-0
              ${
                active
                  ? "bg-[#0CC8A8] text-white shadow-md shadow-[#0CC8A8]/30"
                  : done
                    ? dark
                      ? "bg-[#0CC8A8]/20 text-[#0CC8A8]"
                      : "bg-[#0CC8A8]/15 text-[#0CC8A8]"
                    : dark
                      ? "bg-white/5 border border-white/10 text-gray-500"
                      : "bg-white border border-gray-200 text-gray-400"
              }`}
            >
              <Icon size={16} />
            </div>
            <span
              className={`text-[11px] font-medium whitespace-nowrap
              ${
                active
                  ? "text-[#0CC8A8]"
                  : done
                    ? dark
                      ? "text-[#0CC8A8]/70"
                      : "text-[#0CC8A8]/80"
                    : dark
                      ? "text-gray-500"
                      : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </div>
          {/* connector — grow in after its left step */}
          {i < STEPS.length - 1 && (
            <div className="flex items-start pt-[18px] w-10 flex-1 mx-1.5 overflow-hidden">
              <div
                className={`h-px w-full scan-connector-grow
                ${i < activeIndex ? "bg-[#0CC8A8]/60" : dark ? "bg-white/10" : "bg-gray-200"}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              />
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default Stepper;
