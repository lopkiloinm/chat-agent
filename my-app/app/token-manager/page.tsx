"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Coins } from "lucide-react"
import { Card } from "@/components/ui/card"
import ChatInput from "@/components/chat-input"

export default function TokenManagerPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async (message: string) => {
    setIsLoading(true)
    const chatId = encodeURIComponent(message.toLowerCase().replace(/\s+/g, "-"))
    addChatToSidebar(chatId, message)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ question: message, type: "token" }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()

      localStorage.setItem(
        `chat_${chatId}`,
        JSON.stringify([
          { role: "user", content: message },
          { ...data, assistant: "token" },
        ])
      )

      router.push(`/chats/${chatId}`)
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
    window.dispatchEvent(new Event("recentChatsUpdated"))
  }

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 mb-3">
          <Coins className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Token Manager</h1>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Specialized in token operations, including transfers, minting, and burning for both standard tokens and NFTs.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Transfer tokens between accounts</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Mint new tokens or NFTs</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Burn existing tokens or NFTs</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Create new NFT collections</p>
          </Card>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput 
          placeholder="Ask about token operations..." 
          onSendAction={handleSend}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}

