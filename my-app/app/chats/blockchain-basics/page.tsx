"use client"

import { useState, useRef } from "react"
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import ChatInput from "@/components/chat-input"
import { RAGSection } from "@/components/rag-section"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Message {
  role: "user" | "assistant"
  content: string
  searchQuery?: string
  sources?: {
    name: string
    summary: string
  }[]
}

const initialMessages: Message[] = [
  {
    role: "user",
    content: "What is blockchain technology?",
  },
  {
    role: "assistant",
    content: `Blockchain technology is a decentralized, distributed ledger system that records transactions across multiple computers. It's designed to be secure, transparent, and resistant to modification of its data. Here are some key features of blockchain:

1. Decentralization: No single entity has control over the entire network.
2. Transparency: All transactions are visible to anyone on the network.
3. Immutability: Once data is recorded, it's extremely difficult to change.
4. Security: Uses cryptographic techniques to ensure data integrity.
5. Consensus Mechanisms: Ensures agreement on the state of the network.

Blockchain was initially developed as the technology behind cryptocurrencies like Bitcoin, but its potential applications extend far beyond digital currencies to areas like supply chain management, voting systems, and digital identity verification.`,
    searchQuery: "Blockchain technology overview and key features",
    sources: [
      {
        name: "Blockchain Fundamentals",
        summary:
          "This document provides a comprehensive overview of blockchain technology, including its core concepts, key features, and fundamental principles of operation.",
      },
      {
        name: "Blockchain vs Traditional Databases",
        summary:
          "A comparative analysis of blockchain technology against traditional centralized database systems, highlighting the unique advantages and use cases of blockchain.",
      },
      {
        name: "Blockchain Applications Beyond Cryptocurrency",
        summary:
          "Explores the various applications of blockchain technology in different industries, showcasing its potential beyond just financial transactions.",
      },
    ],
  },
  {
    role: "user",
    content: "How does blockchain work?",
  },
  {
    role: "assistant",
    content: `Blockchain works through a series of interconnected processes:

1. Transaction Initiation: A user initiates a transaction on the blockchain network.

2. Block Creation: The transaction is combined with other pending transactions to create a new block.

3. Block Verification: The new block is broadcast to all nodes (computers) in the network.

4. Consensus: Nodes verify the block's validity through a consensus mechanism (e.g., Proof of Work or Proof of Stake).

5. Block Addition: Once verified, the new block is added to the existing chain of blocks.

6. Transaction Completion: The transaction is now complete and permanently recorded on the blockchain.

Each block in the chain contains:
- A list of transactions
- A timestamp
- A reference to the previous block (creating the "chain")
- A unique identifier (hash)

This process ensures that once information is entered, it can't be altered without changing all subsequent blocks and gaining network consensus, making blockchain highly secure and tamper-resistant.

The decentralized nature of blockchain means that instead of relying on a central authority to verify transactions, the network uses consensus mechanisms to agree on the state of the ledger. This eliminates single points of failure and makes the system more resilient to attacks or manipulation.`,
    searchQuery: "Blockchain functioning and processes",
    sources: [
      {
        name: "Blockchain Architecture",
        summary:
          "A detailed breakdown of blockchain's architecture, explaining how different components interact to process transactions and maintain the integrity of the chain.",
      },
      {
        name: "Consensus Mechanisms in Blockchain",
        summary:
          "Information about various consensus mechanisms used in blockchain networks, including details on Proof of Work, Proof of Stake, and other algorithms.",
      },
      {
        name: "Cryptography in Blockchain",
        summary:
          "A comprehensive guide on how cryptographic techniques are used in blockchain to ensure security, privacy, and immutability of data.",
      },
    ],
  },
]

export default function BlockchainBasicsPage() {
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
        <ChatInput placeholder="Ask about blockchain..." />
      </div>
    </div>
  )
}

