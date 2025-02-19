"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
}

export function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const savedState = localStorage.getItem(`collapsible-${title}`)
    if (savedState !== null) {
      setIsOpen(JSON.parse(savedState))
    }
  }, [title])

  const toggleOpen = () => {
    const newState = !isOpen
    setIsOpen(newState)
    localStorage.setItem(`collapsible-${title}`, JSON.stringify(newState))
  }

  return (
    <div>
      <button
        className="flex items-center gap-1 text-sm font-medium w-full text-left mb-2 text-gray-700 dark:text-gray-300"
        onClick={toggleOpen}
      >
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        {title}
      </button>
      {isOpen && <div className="space-y-1 -ml-4">{children}</div>}
    </div>
  )
}

