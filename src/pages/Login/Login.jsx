import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Eye, EyeClosed } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

const IconApple = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const IconGoogle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);
const IconMeta = () => (
  <FontAwesomeIcon icon={faMeta} className="w-5 h-5 text-white" />
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="#00b67a" className="w-4 h-4">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => document.body.classList.remove("login-page", "light");
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ── Mobile logo bar (shown only below lg) ─────────────── */}
      <div className="lg:hidden flex items-center gap-2.5 px-5 pt-5 pb-2">
        <div className="w-7 h-7 rounded-full bg-teal-400 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        </div>
        <span className="text-lg font-semibold tracking-wide text-white">
          aps
        </span>
      </div>

      {/* ── Mobile hero headline (shown only below lg) ────────── */}
      <div className="lg:hidden px-6 pt-4 pb-2 text-white select-none">
        <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
          Expert level Cybersecurity
          <br />
          in <span className="text-teal-400">hours</span> not weeks.
        </h1>
      </div>

      {/* ── LEFT — marketing (hidden on mobile/tablet, shown lg+) ── */}
      <div className="hidden lg:flex flex-col justify-between flex-1 px-12 py-10 text-white select-none">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-teal-400 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>
          <span className="text-lg font-semibold tracking-wide">aps</span>
        </div>

        {/* Hero */}
        <div className="max-w-md">
          <h1 className="px-6 text-[2.1rem] font-bold leading-snug mb-7">
            Expert level Cybersecurity
            <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <p className="px-6 text-sm font-medium tracking-wide text-white mb-4">
            What's included
          </p>
          <ul className="space-y-3.5 text-sm w-full text-white">
            {[
              "Effortlessly spider and map targets to uncover hidden security flaws",
              "Deliver high-quality, validated findings in hours, not weeks.",
              "Generate professional, enterprise-grade security reports automatically.",
            ].map((item) => (
              <li key={item} className="px-6 flex items-start gap-2.5">
                <Check
                  className="w-4 h-4 mt-0.5 shrink-0 text-green-400"
                  strokeWidth={1.9}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Trustpilot */}
        <div className="mb-10 px-6">
          <div className="flex items-center gap-1.5 mb-0.5">
            <IconStar />
            <span className="text-sm text-white font-medium">Trustpilot</span>
          </div>
          <p className="mt-2 font-semibold">
            Rated 4.5/5.0{" "}
            <span className="text-white/45 font-normal text-xs">
              (100k+ reviews)
            </span>
          </p>
        </div>
      </div>

      {/* ── RIGHT — sign-up card ─────────────────────────────────── */}
      <div
        className="flex flex-1 lg:flex-none items-center justify-center
                      w-full lg:w-[480px] px-4 sm:px-8 py-8 lg:py-10 mr-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md lg:max-w-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-1">
            Sign up
          </h2>
          <p className="pt-2 text-center font-normal text-sm text-black tracking-wide mb-6">
            Already have an account?{" "}
            <a
              href="/dashboard"
              className="text-teal-500 font-semibold underline"
            >
              Log in
            </a>
          </p>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem("isAuth", "true");
              navigate("/dashboard");
            }}
          >
            {/* First + Last name stacked vertically */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="First name*"
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Last name*"
                className={inputClass}
              />
            </div>
            <input
              type="email"
              placeholder="Email address*"
              className={inputClass}
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                className={inputClass + " pr-11"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeClosed className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 rounded accent-teal-500 shrink-0 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-500 leading-relaxed cursor-pointer"
              >
                I agree to Aps's{" "}
                <a
                  href="#"
                  className="text-teal-500 hover:underline font-medium"
                >
                  Terms &amp; Conditions
                </a>{" "}
                and acknowledge the{" "}
                <a
                  href="#"
                  className="text-teal-500 hover:underline font-medium"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full mt-1 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm tracking-wide transition"
            >
              Create account
            </button>
          </form>

          {/* Social logins */}
          <div className="flex gap-3 mt-4">
            <button className="flex flex-1 items-center justify-center gap-2 bg-black text-white rounded-full py-2.5 text-sm font-medium hover:bg-gray-900 transition">
              <IconApple />
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 bg-gray-100 text-gray-700 rounded-full py-2.5 text-sm font-medium hover:bg-gray-200 transition border border-gray-200">
              <IconGoogle />
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 bg-blue-600 text-white rounded-full py-2.5 text-sm font-medium hover:bg-blue-700 transition">
              <IconMeta />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
