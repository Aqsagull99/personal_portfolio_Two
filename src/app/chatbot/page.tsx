'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMessageSquare, FiLoader, FiAlertCircle } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';

type MessageType = 'user' | 'bot' | 'error';

export default function ChatbotPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ type: MessageType; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    // Add user message immediately
    const userMessage = { type: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.reply || 'Failed to get response');
      }

      // Add bot response
      const botMessage = { type: 'bot' as const, text: data.reply };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error: unknown) {
      // Add error message
      const errorMessage = { 
        type: 'error' as const, 
        text: (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string')
          ? (error as { message: string }).message
          : 'Error connecting to AI service'
      };
      setMessages((prev) => [...prev, errorMessage]);

    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8 flex justify-center items-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
          <div className="flex items-center space-x-3">
            <BsRobot className="text-white text-2xl" />
            <h1 className="text-xl font-bold text-white">Aqsa&#39;s AI Assistant</h1>
          </div>
          <p className="text-purple-100 text-sm mt-1">How can I help you today?</p>
        </div>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[60vh]">
          <AnimatePresence initial={false}>
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-center text-gray-500"
              >
                <FiMessageSquare className="text-4xl mb-3" />
                <p>Start a conversation with the AI</p>
                <p className="text-sm mt-1">Ask anything you&#39;d like to know</p>
              </motion.div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  variants={messageVariants}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.type === 'user' ? 'justify-end' : 
                    msg.type === 'error' ? 'justify-center' : 'justify-start'
                  }`}
                >
                  <div
                    className={`flex max-w-[85%] md:max-w-[75%] ${
                      msg.type === 'user'
                        ? 'bg-indigo-600 text-white'
                        : msg.type === 'error'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    } rounded-2xl p-3`}
                  >
                    <div className={`mr-2 mt-0.5 ${
                      msg.type === 'user' ? 'text-indigo-200' :
                      msg.type === 'error' ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {msg.type === 'user' ? <FiUser /> : 
                       msg.type === 'error' ? <FiAlertCircle /> : <BsRobot />}
                    </div>
                    <div className="flex-1">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className={i !== 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 text-gray-800 rounded-2xl p-3 flex items-center">
                <FiLoader className="animate-spin mr-2 text-gray-500" />
                <span>Thinking...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <motion.div 
            whileHover={{ scale: 1.005 }}
            whileFocus={{ scale: 1.005 }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !loading && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              disabled={loading}
            />
            <motion.button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: loading || !input.trim() ? '' : '#7c3aed' }}
              className={`bg-purple-600 text-white p-3 rounded-xl flex items-center justify-center ${
                loading || !input.trim() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <FiLoader className="animate-spin" />
              ) : (
                <FiSend />
              )}
            </motion.button>
          </motion.div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI may produce inaccurate information. Consider verifying important details.
          </p>
        </div>
      </motion.div>
    </div>
  );
}




