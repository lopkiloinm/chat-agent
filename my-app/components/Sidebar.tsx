"use client"

import React, { useState, useEffect } from "react"
import {
  Search,
  MessageSquare,
  PenSquare,
  Coins,
  FileCode,
  UserCircle,
  Moon,
  Sun,
  Wallet,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarSection } from "@/components/sidebar/sidebar-section"
import { SidebarItem } from "@/components/sidebar/sidebar-item"
import { CollapsibleSection } from "@/components/sidebar/collapsible-section"

interface Assistant {
  id: string
  name: string
  href: string
  icon: LucideIcon
}

interface SidebarProps {
  isCollapsed: boolean
  onToggleAction: () => void
  isMobile: boolean
}

export default function Sidebar({ isCollapsed, onToggleAction, isMobile }: SidebarProps) {
  const pathname = usePathname()
  const [assistants, setAssistants] = useState<Assistant[]>([
    { id: "search", name: "Search", href: "/search", icon: Search },
    { id: "general", name: "General", href: "/general", icon: MessageSquare },
    { id: "token-manager", name: "Token Manager", href: "/token-manager", icon: Coins },
    { id: "smart-contract", name: "Smart Contract", href: "/smart-contract", icon: FileCode },
    { id: "account-manager", name: "Account Manager", href: "/account-manager", icon: UserCircle },
  ])
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode) {
      setIsDarkMode(savedMode === "true")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", isDarkMode.toString())
  }, [isDarkMode])

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.setData("text/plain", index.toString())
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault()
    const sourceIndex = Number.parseInt(e.dataTransfer.getData("text"))
    if (sourceIndex !== targetIndex) {
      const newAssistants = [...assistants]
      const [removed] = newAssistants.splice(sourceIndex, 1)
      newAssistants.splice(targetIndex, 0, removed)
      setAssistants(newAssistants)
    }
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 ${
        isMobile && isCollapsed ? "w-0 overflow-hidden" : isCollapsed ? "w-[60px]" : "w-[240px]"
      } border-r flex flex-col bg-white dark:bg-gray-800 transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-black dark:border-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-black dark:border-white"></div>
          </div>
          {!isCollapsed && <span className="font-medium">origen</span>}
        </div>
        {!isMobile && (
          <Button variant="ghost" size="icon" onClick={onToggleAction}>
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        )}
      </div>

      {/* Scrollable Content */}
      {!isCollapsed && (
        <>
          <div className="flex-1 overflow-y-auto">
            <div className="pt-4">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start text-sm h-9 px-3">
                  <PenSquare className="w-4 h-4 mr-2" />
                  New Chat
                </Button>
              </Link>
            </div>

            <SidebarSection title="Assistants">
              {assistants.map((assistant, index) => (
                <React.Fragment key={assistant.id}>
                  <SidebarItem
                    href={assistant.href}
                    icon={assistant.icon}
                    isActive={pathname === assistant.href}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    onDrop={(e) => handleDrop(e, index)}
                    isDragging={index === draggedIndex}
                    isDragOver={index === dragOverIndex}
                  >
                    {assistant.name}
                  </SidebarItem>
                  {index === dragOverIndex && index !== draggedIndex && (
                    <div className="h-0.5 bg-blue-500 my-1 transition-all duration-200" />
                  )}
                </React.Fragment>
              ))}
              {dragOverIndex === assistants.length && (
                <div className="h-0.5 bg-blue-500 my-1 transition-all duration-200" />
              )}
            </SidebarSection>

            <SidebarSection title="Chats">
              <div className="space-y-4">
                <CollapsibleSection title="Today">
                  <SidebarItem href="/chats/blockchain-basics" isActive={pathname === "/chats/blockchain-basics"}>
                    <span className="truncate">Blockchain Basics</span>
                  </SidebarItem>
                  <SidebarItem href="/chats/origen-overview" isActive={pathname === "/chats/origen-overview"}>
                    <span className="truncate">Origen AI Platform Overview</span>
                  </SidebarItem>
                  <SidebarItem href="/chats/usdt-transfer" isActive={pathname === "/chats/usdt-transfer"}>
                    <span className="truncate">USDT Transfer</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">Initial Greeting Exchange</span>
                  </SidebarItem>
                </CollapsibleSection>
                <CollapsibleSection title="Yesterday">
                  <SidebarItem>
                    <span className="truncate">Cryptocurrency Market Analysis</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">Smart Contract Development</span>
                  </SidebarItem>
                </CollapsibleSection>
                <CollapsibleSection title="7 days">
                  <SidebarItem>
                    <span className="truncate">DeFi Protocols Comparison</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">Blockchain Scalability Solutions</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">NFT Marketplace Setup</span>
                  </SidebarItem>
                </CollapsibleSection>
                <CollapsibleSection title="30 days">
                  <SidebarItem>
                    <span className="truncate">Intro to Web3 Technologies</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">Crypto Wallet Security Best Practices</span>
                  </SidebarItem>
                  <SidebarItem>
                    <span className="truncate">Decentralized Identity Systems</span>
                  </SidebarItem>
                </CollapsibleSection>
              </div>
            </SidebarSection>
          </div>

          {/* Sidebar Footer */}
          <div className="px-3 py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="text-sm font-medium">{isDarkMode ? "Dark" : "Light"} Mode</span>
              </div>
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            </div>
            <Button variant="outline" className="w-full justify-between text-sm h-9">
              <Wallet className="w-4 h-4" />
              <span className="truncate">0x1234...5678</span>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

