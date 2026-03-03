import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth") === "true";

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0F0F0F] gap-6 px-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-[#02b194] flex items-center justify-center shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        </div>
        <span className="font-bold text-[20px] tracking-wide text-[#02b194]">
          aps
        </span>
      </div>

      {/* Cat gif */}
      <img
        src="/Cat.gif"
        alt="lost cat"
        className="w-64 rounded-2xl shadow-xl"
      />

      {/* Text */}
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-[#0CC8A8] leading-none mb-3">
          404
        </h1>
        <p className="text-white text-lg font-semibold mb-1">Page not found</p>
        <p className="text-gray-500 text-sm">
          Looks like this page wandered off somewhere…
        </p>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(isAuth ? "/dashboard" : "/")}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0CC8A8] hover:bg-[#0ab394] text-white text-sm font-semibold transition cursor-pointer"
      >
        <Home size={15} />
        {isAuth ? "Back to Dashboard" : "Sign In"}
      </button>
    </div>
  );
};

export default NotFound;
