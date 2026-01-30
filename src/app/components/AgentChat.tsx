"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser, FiCpu, FiTrash2 } from "react-icons/fi";

type ChatMessage = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isError?: boolean;
};

export default function AgentChat() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chat, isLoading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setChat((c) => [
      ...c,
      {
        id: crypto.randomUUID(),
        text: input,
        isUser: true,
        timestamp: new Date(),
      },
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post(`${API_URL}/chat`, { message: input });
      setChat((c) => [
        ...c,
        {
          id: crypto.randomUUID(),
          text: res.data.reply || "No response",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setChat((c) => [
        ...c,
        {
          id: crypto.randomUUID(),
          text: "Agent is not reachable right now.",
          isUser: false,
          isError: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_-15px_rgba(236,72,153,0.4)] overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80">
          <div className="flex items-center gap-3">
            <FiCpu className="text-2xl" />
            <div>
              <h2 className="font-bold">Aqsa Gull’s AI Assistant</h2>
              <p className="text-xs opacity-80">Ask anything about her work</p>
            </div>
          </div>
          <button
            onClick={() => setChat([])}
            className="text-sm flex items-center gap-2 hover:opacity-80"
          >
            <FiTrash2 /> Clear
          </button>
        </div>

        {/* Chat */}
        <div
          ref={scrollRef}
          className="h-[30rem] overflow-y-auto px-6 py-6 space-y-4"
        >
          {chat.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col justify-center items-center text-center text-gray-400"
            >
              <FiCpu className="text-6xl mb-4 text-purple-400" />
              <p className="text-lg font-semibold">
                Hi, I’m your AI assistant
              </p>
              <p className="text-sm opacity-70">
                Ask about Aqsa’s projects, skills or experience
              </p>
            </motion.div>
          )}

          <AnimatePresence>
            {chat.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.isUser ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[75%] flex gap-3 items-end">
                  {!m.isUser && <FiCpu className="text-purple-400" />}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.isUser
                        ? "bg-blue-600/30 text-blue-100"
                        : m.isError
                        ? "bg-red-500/20 text-red-200"
                        : "bg-white/10 text-gray-100"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.isUser && <FiUser className="text-blue-400" />}
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-purple-400"
              >
                <FiCpu />
                <span className="animate-pulse">Thinking…</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex gap-3">
          <textarea
            className="flex-1 resize-none rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold disabled:opacity-40"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </section>
  );
}





