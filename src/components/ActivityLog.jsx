import React, { useEffect, useState } from "react";

const LOGS = [
  {
    time: "09:00:00",
    parts: [
      { text: "I'll begin a systematic penetration test on " },
      { text: "helpdesk.democorp.com", type: "url" },
      { text: ". Let me start with reconnaissance and enumeration." },
    ],
  },
  {
    time: "09:01:00",
    parts: [
      {
        text: "Good! target is online. Now let me perform port scanning to identify running services.",
      },
    ],
  },
  {
    time: "09:02:00",
    parts: [
      {
        text: "Excellent reconnaissance results:\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.",
      },
    ],
  },
  {
    time: "09:03:00",
    parts: [
      {
        text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ",
      },
      {
        text: '"TODO: Delete the testing account (test:test)"',
        type: "keyword",
      },
      { text: ". Let me test this credential. The login redirects to " },
      { text: "/password/test", type: "path" },
      { text: ". Let me follow that path and explore it." },
    ],
  },
  {
    time: "09:04:00",
    parts: [
      {
        text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ",
      },
      { text: "'#'", type: "keyword" },
      {
        text: " which means the current page. Let me try a different approach.",
      },
    ],
  },
  {
    time: "09:05:00",
    parts: [
      {
        text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ",
      },
      { text: "test:test", type: "url" },
      { text: " password directly on other endpoints." },
    ],
  },
  {
    time: "09:06:00",
    parts: [
      { text: "Great! I can access the dashboard using the " },
      { text: "'X-UserId: 10032'", type: "path" },
      {
        text: ' header. The dashboard shows "Welcome, John Doe". This suggests an ',
      },
      { text: "**IDOR vulnerability**", type: "vuln" },
      {
        text: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
      },
    ],
  },
];

const partStyle = (type) => {
  if (type === "url")
    return "text-[#0CC8A8] underline underline-offset-2 cursor-pointer";
  if (type === "keyword") return "text-yellow-400 font-jetbrains";
  if (type === "path")
    return "bg-[#0CC8A8]/10 text-[#0CC8A8] font-jetbrains px-1 py-0.5 rounded text-xs";
  if (type === "vuln") return "text-orange-400 font-bold";
  return "";
};

const timeColors = ["text-gray-400"];

const REVEAL_INTERVAL = 650; // ms between each new message

const ActivityLog = ({ dark }) => {
  const [visible, setVisible] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const bottomRef = React.useRef(null);

  // Reveal one message at a time
  useEffect(() => {
    if (visible < LOGS.length) {
      const t = setTimeout(
        () => setVisible((v) => v + 1),
        visible === 0 ? 300 : REVEAL_INTERVAL,
      );
      return () => clearTimeout(t);
    } else {
      // All done — show blinking cursor after a short pause
      const t = setTimeout(() => setShowCursor(true), 400);
      return () => clearTimeout(t);
    }
  }, [visible]);

  // Auto-scroll to bottom as new messages appear
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visible, showCursor]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto font-jetbrains text-xs leading-relaxed space-y-4 p-4">
      {LOGS.slice(0, visible).map((log, i) => (
        <div
          key={i}
          className="flex gap-2 scan-log-in"
          style={{ animationDelay: "0ms" }} // already revealed sequentially
        >
          <span
            className={`${timeColors[i % timeColors.length]} shrink-0 select-none font-semibold`}
          >
            [{log.time}]
          </span>
          <p
            className={`flex-1 flex flex-wrap gap-x-0.5 leading-relaxed whitespace-pre-wrap
            ${dark ? "text-gray-300" : "text-gray-700"}`}
          >
            {log.parts.map((p, j) =>
              p.text.includes("\n") ? (
                <span
                  key={j}
                  className={partStyle(p.type)}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {p.text}
                </span>
              ) : (
                <span key={j} className={partStyle(p.type)}>
                  {p.text}
                </span>
              ),
            )}
          </p>
        </div>
      ))}

      {/* Typing indicator while next message is pending */}
      {visible < LOGS.length && visible > 0 && (
        <div className="flex gap-2 scan-log-in">
          <span className="text-gray-500 shrink-0 select-none font-semibold">
            [......]
          </span>
          <span className="flex items-center gap-1">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className={`inline-block w-1.5 h-1.5 rounded-full ${
                  dark ? "bg-gray-500" : "bg-gray-400"
                } animate-bounce`}
                style={{ animationDelay: `${d * 0.15}s` }}
              />
            ))}
          </span>
        </div>
      )}

      {/* Blinking cursor after all messages loaded */}
      {showCursor && (
        <div className="flex gap-2 scan-log-in">
          <span className="text-emerald-400 shrink-0 select-none font-semibold">
            [09:07:00]
          </span>
          <span
            className={`inline-block w-2 h-4 ${
              dark ? "bg-gray-300" : "bg-gray-600"
            } animate-pulse`}
          />
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ActivityLog;
