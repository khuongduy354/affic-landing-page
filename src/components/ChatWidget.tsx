import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- NEW: Typing Indicator Component ---
// --- MỚI: Component chỉ báo đang gõ ---
const TypingIndicator = () => (
  <motion.div
    className="flex items-center gap-1.5 p-2"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={{
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
      exit: { opacity: 0 },
    }}
  >
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
        variants={{
          initial: { y: 0 },
          animate: { y: [-2, 2, -2] },
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.2,
        }}
      />
    ))}
  </motion.div>
);

// Define the structure for a chat message
type ChatMessage = {
  id: string;
  role: "user" | "bot" | "error";
  // Text can now be a string or a React component (for the typing indicator)
  text: string | React.ReactNode;
};

// Your webhook URL
const CHAT_WEBHOOK =
  "https://tools.munnandaffiliates.com/webhook/1d622d07-3ae2-4820-8b74-4e53ce0469cb/chat";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Generate UUID v4
  const generateUUID = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  // Focus input when the chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const parseStreamingResponse = (rawText: string): string => {
    try {
      const lines = rawText.trim().split("\n");
      const contentParts: string[] = [];
      lines.forEach((line) => {
        try {
          const json = JSON.parse(line);
          if (json.type === "item" && json.content) {
            contentParts.push(json.content);
          }
        } catch (e) {
          /* Ignore invalid JSON lines */
        }
      });
      return contentParts.length > 0
        ? contentParts.join("")
        : "Received a response, but couldn't extract the message.";
    } catch (e) {
      return rawText;
    }
  };

  const handleSendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isSending) return;

    // Generate session ID if it doesn't exist
    let currentSessionId = sessionId;
    if (!currentSessionId) {
      currentSessionId = generateUUID();
      setSessionId(currentSessionId);
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmedInput,
    };

    // --- STREAMING EFFECT LOGIC ---
    // 1. Add a placeholder message with the typing indicator
    const botPlaceholderId = `bot-placeholder-${Date.now()}`;
    const botPlaceholderMessage: ChatMessage = {
      id: botPlaceholderId,
      role: "bot",
      text: <TypingIndicator />,
    };

    setMessages((prev) => [...prev, userMessage, botPlaceholderMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch(CHAT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: trimmedInput,
          sessionId: currentSessionId,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server returned an error: ${response.status} - ${errorText}`
        );
      }

      const rawText = await response.text();
      console.debug("Raw streaming response:", rawText);
      const botReply = parseStreamingResponse(rawText);

      // --- STREAMING EFFECT LOGIC ---
      // 2. Update the placeholder message with the actual reply
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botPlaceholderId ? { ...msg, text: botReply } : msg
        )
      );
    } catch (error: any) {
      // --- STREAMING EFFECT LOGIC ---
      // 3. Update the placeholder with an error message if something fails
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botPlaceholderId
            ? {
                ...msg,
                role: "error",
                text:
                  error.message ||
                  "Failed to connect. Please check the console.",
              }
            : msg
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSending) {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* The Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-4 sm:right-8 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-card border border-border/30 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/20">
              <h3 className="font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Affic AI Chat
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-muted"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background/50">
              {messages.length === 0 && (
                <div className="text-sm text-center text-muted-foreground h-full flex items-center justify-center">
                  Start the conversation by asking a question.
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-wrap break-words ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : msg.role === "bot"
                        ? "bg-muted text-foreground"
                        : "bg-destructive/20 text-destructive-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-border/20 bg-card">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-input px-3 py-2 rounded-md text-sm outline-none disabled:opacity-50"
                  disabled={isSending}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isSending || !input.trim()}
                >
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatWidget;
