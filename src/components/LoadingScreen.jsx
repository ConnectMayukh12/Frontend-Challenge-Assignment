import React from "react";

const LoadingScreen = () => (
  <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0F0F0F] gap-5">
    {/* Logo */}
    <div className="flex items-center gap-2.5 mb-2">
      <div className="w-8 h-8 rounded-full bg-[#02b194] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white" />
      </div>
      <span className="font-bold text-[22px] tracking-wide text-[#02b194]">
        aps
      </span>
    </div>

    {/* Spinner ring */}
    <div className="relative w-10 h-10">
      <svg
        className="w-full h-full animate-spin"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="4"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#0CC8A8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="60 40"
        />
      </svg>
    </div>

    <p className="text-xs text-gray-500 tracking-widest uppercase">Loading…</p>
  </div>
);

export default LoadingScreen;
