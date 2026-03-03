import React, { useEffect, useRef, useState } from "react";

const CircularProgress = ({ percent, dark }) => {
  const r = 52;
  const circ = 2 * Math.PI * r;

  // Animate displayed value from 0 → percent on mount
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const duration = 1400; // ms
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(eased * percent));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [percent]);

  const offset = circ - (displayed / 100) * circ;

  return (
    <div className="relative w-[100px] h-[100px] shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* dark fill */}
        <circle cx="60" cy="60" r="50" fill="#111111" />
        {/* track */}
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="9"
        />
        {/* progress arc */}
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#0CC8A8"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold text-[#0CC8A8] leading-none">
          {displayed}%
        </span>
        <span className="text-[10px] font-medium mt-0.5 text-gray-400">
          In Progress
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
