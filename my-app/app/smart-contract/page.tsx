"use client"

import { FileCode } from "lucide-react"
import { Card } from "@/components/ui/card"
import ChatInput from "@/components/chat-input"
import { useState } from "react"

export default function SmartContractPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async (message: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ question: message }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 mb-3">
          <FileCode className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Smart Contract</h1>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Expert in blockchain interaction, including reading data, monitoring events, and executing smart contract
          calls.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Read and parse blockchain data</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Monitor blockchain events</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Execute smart contract calls</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Analyze smart contract security</p>
          </Card>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput 
          placeholder="Ask about smart contracts and blockchain interactions..." 
          onSendAction={handleSend}
        />
      </div>
    </>
  )
}

