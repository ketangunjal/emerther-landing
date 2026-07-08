"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User, ArrowUpRight, Heart } from "lucide-react";
import {
  generateResponse,
  getInitialMessage,
  resetLeadStore,
  type Message,
} from "@/lib/daisy-brain";

// ---- Quick Reply Chips ----
const QUICK_REPLIES = [
  { label: "🖥️ Websites", intent: "I need a premium website" },
  { label: "💳 RCM Systems", intent: "Tell me about revenue automation" },
  { label: "💰 Pricing", intent: "What's your pricing?" },
  { label: "🚀 Both", intent: "I want the full stack" },
];

// ---- Simple markdown-like renderer ----
function RichText({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const workingLine = line;
    // Parse **bold** spans
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;
    const tempRegex = /\*\*(.*?)\*\*/g;

    while ((match = tempRegex.exec(workingLine)) !== null) {
      if (match.index > lastIdx) {
        parts.push(workingLine.slice(lastIdx, match.index));
      }
      parts.push(
        <span key={`b-${i}-${match.index}`} className="font-bold text-white">
          {match[1]}
        </span>
      );
      lastIdx = match.index + match[0].length;
    }
    if (lastIdx < workingLine.length) {
      parts.push(workingLine.slice(lastIdx));
    }

    const content = parts.length > 0 ? parts : line || "\u00A0";

    // Table separator row
    if (line.includes("|") && line.includes("---")) {
      elements.push(
        <div key={i} className="text-xs text-text-muted font-mono py-0.5">
          {content}
        </div>
      );
    }
    // Table data row
    else if (line.startsWith("|")) {
      elements.push(
        <div key={i} className="text-xs text-text-secondary font-mono py-0.5">
          {content}
        </div>
      );
    }
    // Bullet point
    else if (line.trim().startsWith("•") || line.trim().startsWith("- ")) {
      elements.push(
        <div key={i} className="flex gap-2 text-sm leading-relaxed ml-1">
          <span className="text-neon-blue flex-shrink-0 mt-0.5">•</span>
          <span className="text-text-secondary">
            {line.replace(/^[•\-]\s*/, "")}
          </span>
        </div>
      );
    }
    // Empty line = spacer
    else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    }
    // Normal paragraph
    else {
      const isBoldHeading =
        parts.length > 0 && workingLine.includes("**") && workingLine.length < 80;
      elements.push(
        <p
          key={i}
          className={`text-sm leading-relaxed ${
            isBoldHeading ? "text-white font-semibold" : "text-text-secondary"
          }`}
        >
          {content}
        </p>
      );
    }
  });

  return <>{elements}</>;
}

// ---- Typing Indicator ----
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-neon-blue/50"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

// ---- Main Component ----
export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "init",
      role: "daisy",
      text: getInitialMessage(),
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const addMessage = (role: "daisy" | "user", text: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      role,
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);
  };

  const handleSend = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const trimmed = text.trim();
      addMessage("user", trimmed);
      setInput("");
      setIsTyping(true);

      // Simulate AI thinking delay (feels natural)
      const delay = 600 + Math.random() * 900;
      setTimeout(() => {
        const { text: response, leadUpdated } = generateResponse(trimmed);
        addMessage("daisy", response);
        setIsTyping(false);

        if (leadUpdated) {
          setLeadCaptured(true);
        }
      }, delay);
    },
    [isTyping]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const handleQuickReply = (intent: string) => {
    handleSend(intent);
  };

  const handleReset = () => {
    resetLeadStore();
    setMessages([
      {
        id: "init",
        role: "daisy",
        text: getInitialMessage(),
        timestamp: Date.now(),
      },
    ]);
    setLeadCaptured(false);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[370px] sm:w-[420px] glass-card overflow-hidden shadow-glow-lg flex flex-col"
            style={{ maxHeight: "calc(100vh - 140px)" }}
          >
            {/* ---- Header ---- */}
            <div className="flex items-center justify-between p-4 border-b border-daisy-border/30 bg-white/[0.02] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center shadow-glow-sm">
                    <Heart className="w-5 h-5 text-white" fill="rgba(255,255,255,0.2)" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-daisy-card" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Daisy</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Online now — here to help
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-text-muted hover:text-neon-blue hover:bg-neon-blue/5 transition-colors text-xs"
                  title="Restart conversation"
                >
                  ↺
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ---- Messages ---- */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                  >
                    {msg.role === "daisy" && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Heart className="w-4 h-4 text-white" fill="rgba(255,255,255,0.2)" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === "daisy"
                          ? "bg-white/[0.04] rounded-tl-sm"
                          : "bg-neon-blue/10 border border-neon-blue/20 rounded-tr-sm"
                      }`}
                    >
                      {msg.role === "daisy" ? (
                        <RichText text={msg.text} />
                      ) : (
                        <p className="text-white">{msg.text}</p>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-daisy-border/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="w-4 h-4 text-text-muted" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-white" fill="rgba(255,255,255,0.2)" />
                    </div>
                    <div className="bg-white/[0.04] rounded-2xl rounded-tl-sm px-4 py-2">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* ---- Quick Replies ---- */}
            {!isTyping &&
              messages.length <= 3 &&
              !leadCaptured &&
              messages[messages.length - 1]?.role === "daisy" && (
                <div className="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr.label}
                      onClick={() => handleQuickReply(qr.intent)}
                      className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-daisy-border/40 text-xs text-text-secondary hover:text-white hover:border-neon-blue/40 hover:bg-neon-blue/5 transition-all duration-200"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              )}

            {/* ---- Input ---- */}
            <div className="p-4 border-t border-daisy-border/30 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/[0.03] border border-daisy-border/30 rounded-xl px-4 py-2.5 focus-within:border-neon-blue/40 focus-within:bg-white/[0.05] transition-all duration-300">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-text-muted outline-none disabled:opacity-40"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isTyping}
                  className="p-1.5 rounded-lg text-neon-blue hover:bg-neon-blue/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Lead capture confirmation */}
              {leadCaptured && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-400/80 mt-2 text-center"
                >
                  ✅ Lead captured — we&apos;ll be in touch within 24h
                </motion.p>
              )}

              {/* Schedule CTA for engaged visitors */}
              {messages.length > 4 && !leadCaptured && (
                <motion.a
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  href="#contact"
                  className="mt-2 flex items-center justify-center gap-1.5 text-xs text-neon-blue/70 hover:text-neon-blue transition-colors"
                >
                  Prefer to skip the chat?
                  <span className="underline">Schedule a call</span>
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Toggle Button ---- */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-glow-lg transition-all duration-300 ${
          open
            ? "bg-daisy-card border border-daisy-border/50 text-white"
            : "bg-gradient-to-br from-neon-blue to-neon-violet text-white"
        }`}
        aria-label={open ? "Close chat" : "Open chat with Daisy AI"}
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl animate-ping bg-neon-blue/20" />
            {/* Unread dot */}
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-neon-pink border-2 border-daisy-black" />
          </>
        )}
      </motion.button>
    </div>
  );
}
