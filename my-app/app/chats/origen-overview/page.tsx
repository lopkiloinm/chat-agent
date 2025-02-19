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
    content: "What is the Origen AI Platform?",
  },
  {
    role: "assistant",
    content: `The Origen AI Platform is an advanced AI Assistant platform designed to connect organizations' documents, applications, and people. It offers a comprehensive solution for enhancing various aspects of organizational operations through AI-powered assistance, integration, and advanced search capabilities.

Key features of the Origen AI Platform include:

1. Integration: Can integrate with over 30 different tools and applications.
2. Contextual Understanding: Designed to handle work-related queries with contextual awareness.
3. Data Security: Prioritizes data security and offers open-source transparency.
4. AI-Enabled Customer Support: Helps teams access up-to-date information across various sources.
5. Advanced Enterprise Search: Offers capabilities like natural language queries and rapid information parsing.

The platform was developed to improve efficiency, decision-making, and overall productivity in modern businesses.`,
    searchQuery: "Origen AI Platform overview and key features",
    sources: [
      {
        name: "Origen Platform Overview",
        summary:
          "This document provides a comprehensive overview of the Origen AI Platform, including its core features, integration capabilities, and primary use cases across different industries.",
      },
      {
        name: "Origen Technical Specifications",
        summary:
          "Detailed technical information about the Origen AI Platform, including its architecture, data processing capabilities, and security measures.",
      },
      {
        name: "Origen vs Competitors",
        summary:
          "A comparative analysis of the Origen AI Platform against other AI assistant platforms in the market, highlighting Origen's unique features and advantages.",
      },
    ],
  },
  {
    role: "user",
    content: "How does the Origen AI Platform work?",
  },
  {
    role: "assistant",
    content: `The Origen AI Platform works through a series of interconnected processes:

1. Data Integration: The platform connects to various organizational data sources, including documents, applications, and communication channels.

2. Natural Language Processing: It uses advanced NLP techniques to understand and interpret user queries in natural language.

3. Contextual Analysis: The platform analyzes the context of each query, considering the user's role, previous interactions, and relevant organizational data.

4. Information Retrieval: Using its advanced search capabilities, it quickly parses through large amounts of information to find relevant data.

5. AI-Powered Response Generation: The platform generates responses using AI models trained on the organization's data and industry-specific information.

6. Continuous Learning: The system learns from each interaction, improving its responses and recommendations over time.

7. Integration with Workflows: It can integrate with existing tools and workflows, allowing for seamless incorporation into daily operations.

8. Security and Compliance: Throughout these processes, the platform maintains strict security protocols and ensures compliance with data protection regulations.

This multi-step process allows the Origen AI Platform to provide accurate, context-aware assistance across various organizational functions, from customer support to decision-making and process automation.`,
    searchQuery: "Origen AI Platform functioning and processes",
    sources: [
      {
        name: "Origen System Architecture",
        summary:
          "A detailed breakdown of the Origen AI Platform's system architecture, explaining how different components interact to process queries and generate responses.",
      },
      {
        name: "Origen AI Models",
        summary:
          "Information about the AI models used in the Origen platform, including details on training data, model architecture, and continuous learning mechanisms.",
      },
      {
        name: "Origen Integration Guide",
        summary:
          "A comprehensive guide on how the Origen AI Platform integrates with various tools and workflows, including API documentation and best practices for implementation.",
      },
    ],
  },
]

export default function OrigenOverviewPage() {
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
        <ChatInput placeholder="Ask about the Origen AI Platform..." />
      </div>
    </div>
  )
}

