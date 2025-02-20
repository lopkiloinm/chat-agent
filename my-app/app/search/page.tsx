"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import ChatInput from "@/components/chat-input"

export default function SearchPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleButtonClick = (text: string) => {
    setInputValue(text)
  }

  const handleSendMessage = async (message: string) => {
    setIsLoading(true)
    const chatId = encodeURIComponent(message.toLowerCase().replace(/\s+/g, "-"))
    addChatToSidebar(chatId, message)
    router.push(`/chats/${chatId}`)
    localStorage.setItem(
      `chat_${chatId}`,
      JSON.stringify([
        { role: "user", content: message },
      ])
    )

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ question: message }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()

      localStorage.setItem(
        `chat_${chatId}`,
        JSON.stringify([
          { role: "user", content: message },
          { ...data, assistant: "search" },
        ])
      )

      window.location.href = `/chats/${chatId}`
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const addChatToSidebar = (chatId: string, title: string) => {
    const chats = JSON.parse(localStorage.getItem("recentChats") || '{"today": []}')
    const newChat = { id: chatId, title, timestamp: Date.now() }
    chats.today = [newChat, ...chats.today]
    localStorage.setItem("recentChats", JSON.stringify(chats))

    // Dispatch a custom event to update the sidebar
    window.dispatchEvent(new Event("recentChatsUpdated"))
  }

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 mb-3">
          <Search className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Search</h1>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Expert in web3, crypto, and blockchain technologies. Access comprehensive knowledge on decentralized systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors" onClick={() => handleButtonClick("Explain how DeFi protocols work and their main components")}>
            <p className="text-sm">Explain DeFi protocols</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors" onClick={() => handleButtonClick("Compare Proof of Work vs Proof of Stake consensus mechanisms")}>
            <p className="text-sm">Compare consensus mechanisms</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors" onClick={() => handleButtonClick("What are the latest trends in blockchain technology for 2024?")}>
            <p className="text-sm">Analyze recent blockchain trends</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors" onClick={() => handleButtonClick("Explain current cryptocurrency regulations and compliance requirements")}>
            <p className="text-sm">Discuss crypto regulations</p>
          </Card>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput
          placeholder="Ask about web3, crypto, or blockchain..."
          onSendAction={handleSendMessage}
          isLoading={isLoading}
          value={inputValue}
          onChange={setInputValue}
        />
      </div>
    </>
  )
}

