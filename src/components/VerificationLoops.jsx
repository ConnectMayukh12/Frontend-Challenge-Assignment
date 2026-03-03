import React from "react";

const VerificationLoops = ({ dark }) => (
  <div className="flex-1 flex items-center justify-center p-8">
    <div className="text-center">
      <div className={`text-4xl mb-3 ${dark ? "opacity-20" : "opacity-30"}`}>
        🔄
      </div>
      <p className={`text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
        No verification loops running
      </p>
    </div>
  </div>
);

export default VerificationLoops;
