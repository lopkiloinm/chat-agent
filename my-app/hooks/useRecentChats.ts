"use client"

import { useState, useEffect } from "react"

interface RecentChat {
  id: string
  title: string
  timestamp: number
}

export function useRecentChats() {
  const [recentChats, setRecentChats] = useState<{ [key: string]: RecentChat[] }>({})

  useEffect(() => {
    const loadChats = () => {
      const savedChats = localStorage.getItem("recentChats")
      if (savedChats) {
        const parsedChats = JSON.parse(savedChats)
        // Sort chats by timestamp in descending order
        Object.keys(parsedChats).forEach((key) => {
          parsedChats[key].sort((a: RecentChat, b: RecentChat) => b.timestamp - a.timestamp)
        })
        setRecentChats(parsedChats)
      }
    }

    loadChats()

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "recentChats") {
        loadChats()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Custom event listener for immediate updates
    const handleCustomEvent = () => loadChats()
    window.addEventListener("recentChatsUpdated", handleCustomEvent)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("recentChatsUpdated", handleCustomEvent)
    }
  }, [])

  return recentChats
}

