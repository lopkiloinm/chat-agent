"use client"

import { useState, useRef, useEffect } from "react"
import { useParams } from "next/navigation"
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import ChatInput from "@/components/chat-input"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { RAGSection } from "@/components/rag-section"
import { TransactionComponent } from "@/components/transaction-component"
import { searchAssistantGenerate } from "@/lib/agent-answers"
import { dummyData, type Message } from "../dummyResponses"

interface RecentChat {
  id: string
  title: string
}

export default function DynamicChatPage() {
  const params = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (params.id && typeof params.id === "string") {
      const savedMessages = localStorage.getItem(`chat_${params.id}`)
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages))
      }
    }
  }, [params.id])

  const handleSend = async (message: string) => {
    setIsLoading(true)
    try {
      const newUserMessage: Message = { role: "user", content: message }
      setMessages(prev => [...prev, newUserMessage])

      // Determine if this is a token chat based on the last assistant message
      const isTokenChat = messages.some(msg => 
        msg.role === "assistant" && msg.transaction
      )

      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ 
          question: message,
          type: isTokenChat ? "token" : "search"
        }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()

      const newAssistantMessage = { ...data, role: "assistant" }
      setMessages(prev => [...prev, newAssistantMessage])

      if (params.id && typeof params.id === "string") {
        localStorage.setItem(
          `chat_${params.id}`,
          JSON.stringify([...messages, newUserMessage, newAssistantMessage])
        )
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight
      }
    }
  }

  return (
    <div className="flex flex-col min-h-full bg-white dark:bg-gray-900 overflow-hidden">
      <div className="flex-grow overflow-auto" ref={contentRef}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          {messages.map((message, index) => (
            <div key={index} className={`mb-6 ${message.role === "user" ? "text-right" : "text-left"}`}>
              {message.role === "user" ? (
                <div className="inline-block p-4 rounded-lg bg-gray-200 dark:bg-gray-700">
                  <p className="text-sm text-black dark:text-white">{message.content}</p>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  {message.searchQuery && message.sources && (
                    <div className="border-b border-gray-200 dark:border-gray-700 p-4 pb-2">
                      <RAGSection searchQuery={message.searchQuery} sources={message.sources} />
                    </div>
                  )}
                  <div className="p-4">
                    <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none" remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                  {message.transaction && (
                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                      <TransactionComponent {...message.transaction} />
                    </div>
                  )}
                  <div className="flex items-center gap-2 p-2 border-t border-gray-200 dark:border-gray-700 text-muted-foreground">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md hover:text-foreground transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md hover:text-foreground transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md hover:text-foreground transition-colors">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md hover:text-foreground transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput 
          placeholder="Type your message..." 
          onSendAction={handleSend}
          isLoading={isLoading}
          value={inputValue}
          onChange={setInputValue}
        />
      </div>
    </div>
  )
}

