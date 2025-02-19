"use client"

import { useState, useRef } from "react"
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import ChatInput from "@/components/chat-input"
import { TransactionComponent } from "@/components/transaction-component"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Message {
  role: "user" | "assistant"
  content: string
  transaction?: {
    transactionType: string
    fromAddress: string
    toAddress: string
    amount: string
    tokenType: string
  }
}

const initialMessages: Message[] = [
  {
    role: "user",
    content: "I want to transfer 100 USDT to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  },
  {
    role: "assistant",
    content:
      "I've prepared a transaction for you to transfer 100 USDT to the address you specified. Please review the transaction details below:",
    transaction: {
      transactionType: "Transfer",
      fromAddress: "0x1234...5678", // This would be the user's actual address in a real implementation
      toAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      amount: "100",
      tokenType: "usdt",
    },
  },
  {
    role: "user",
    content: "The transaction details look correct. How do I confirm and execute this transfer?",
  },
  {
    role: "assistant",
    content:
      "Great! I'm glad the transaction details look correct. To confirm and execute this transfer, please follow these steps:\n\n1. Double-check the transaction details one last time to ensure everything is accurate.\n2. Click the 'Confirm Transaction' button at the bottom of the transaction card.\n3. You'll be prompted to sign the transaction using your connected wallet (e.g., MetaMask).\n4. Review the gas fees and adjust if necessary.\n5. Confirm the transaction in your wallet.\n\nAfter these steps, the transaction will be broadcast to the network. You'll receive a confirmation once the transaction is processed. Is there anything else you'd like to know about this process?",
  },
]

export default function USDTTransferPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col min-h-full bg-white dark:bg-gray-900">
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
      <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <ChatInput placeholder="Ask about your USDT transfer..." />
      </div>
    </div>
  )
}

