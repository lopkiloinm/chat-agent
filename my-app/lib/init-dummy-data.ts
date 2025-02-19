import { dummyData } from "@/app/chats/dummyResponses"

export function initializeDummyData() {
  const recentChats = JSON.parse(localStorage.getItem("recentChats") || '{"today": []}')
  let updated = false

  Object.entries(dummyData).forEach(([id, messages]) => {
    if (!recentChats.today.some((chat: any) => chat.id === id)) {
      recentChats.today.push({
        id,
        title: messages[0].content,
        timestamp: Date.now()
      })
      localStorage.setItem(`chat_${id}`, JSON.stringify(messages))
      updated = true
    }
  })

  if (updated) {
    localStorage.setItem("recentChats", JSON.stringify(recentChats))
    window.dispatchEvent(new Event("recentChatsUpdated"))
  }
} 