"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import ChatInput from "@/components/chat-input"

interface ChatContainerProps {
  children: React.ReactNode
  placeholder: string
  onSendAction: (message: string) => Promise<void>
}

export default function ChatContainer({ children, placeholder, onSendAction }: ChatContainerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (chatRef.current && inputRef.current) {
        const chatRect = chatRef.current.getBoundingClientRect()
        const inputRect = inputRef.current.getBoundingClientRect()
        const inputMiddle = inputRect.top + inputRect.height / 2

        setIsVisible(chatRect.bottom <= inputMiddle)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        ref={chatRef}
        className={`flex-grow overflow-auto transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
      <div ref={inputRef} className="sticky bottom-0 bg-white border-t">
        <ChatInput placeholder={placeholder} onSendAction={onSendAction} />
      </div>
    </div>
  )
}

