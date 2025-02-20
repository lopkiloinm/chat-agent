"use client"

import { useState } from "react"
import { Bot, ChevronDown, Paperclip, Sliders, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatInputProps {
  placeholder?: string
  onSendAction: (message: string) => Promise<void>
  isLoading?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function ChatInput({ 
  placeholder, 
  onSendAction, 
  isLoading = false,
  value = "",
  onChange
}: ChatInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const handleSend = () => {
    if (value.trim() && onSendAction) {
      onSendAction(value.trim())
      onChange?.("")
    }
  }

  return (
    <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="relative">
        <Input
          placeholder={placeholder}
          className="pr-32 py-6"
          value={value}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
        />
        <div className="absolute right-2 top-2 flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

