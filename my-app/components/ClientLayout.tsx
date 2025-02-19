"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const isRootPage = pathname === "/"

  const updateLayout = useCallback(() => {
    const newIsMobile = window.innerWidth < 768
    setIsMobile(newIsMobile)
    if (!newIsMobile) {
      setIsCollapsed(false)
    } else {
      setIsCollapsed(true)
    }
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [updateLayout])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <div
        id="mobile-toolbar"
        className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 z-30 md:hidden"
      >
        <span className="font-medium">origen</span>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {isMobile && !isCollapsed && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar} />
        )}
        <Sidebar 
          isCollapsed={isCollapsed} 
          onToggleAction={toggleSidebar} 
          isMobile={isMobile} 
        />
        <main
          className={`flex-1 flex flex-col bg-white dark:bg-gray-900 ${
            isMobile ? "pt-16 mt-[var(--toolbar-height)]" : isCollapsed ? "md:pl-[60px]" : "md:pl-[240px]"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

