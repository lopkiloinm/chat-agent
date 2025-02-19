"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { type LucideIcon, GripVertical } from "lucide-react"

interface SidebarItemProps {
  href?: string
  icon?: LucideIcon
  isActive?: boolean
  onClick?: () => void
  children: React.ReactNode
  onDragStart?: (e: React.DragEvent) => void
  onDragOver?: (e: React.DragEvent) => void
  onDragEnd?: (e: React.DragEvent) => void
  onDrop?: (e: React.DragEvent) => void
  draggable?: boolean
  isDragging?: boolean
  isDragOver?: boolean
}

export function SidebarItem({
  href,
  icon: Icon,
  isActive,
  onClick,
  children,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  draggable,
  isDragging,
  isDragOver,
}: SidebarItemProps) {
  const [showDragHandle, setShowDragHandle] = useState(false)

  const ButtonComponent = (
    <div
      className={`relative group ${isDragging ? "opacity-50" : ""} ${isDragOver ? "bg-blue-100 dark:bg-blue-900" : ""}`}
      onMouseEnter={() => setShowDragHandle(true)}
      onMouseLeave={() => setShowDragHandle(false)}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
      {(showDragHandle || isDragging) && (
        <div className="absolute left-0 top-0 bottom-0 w-6 flex items-center justify-center cursor-move">
          <GripVertical className="w-4 h-4 text-gray-400" />
        </div>
      )}
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={`w-full justify-start text-sm h-8 gap-2 ${
          isActive
            ? "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
            : "hover:bg-gray-100 dark:hover:bg-gray-800"
        } ${showDragHandle || isDragging ? "pl-8" : ""} ${
          isDragOver ? "bg-blue-100 dark:bg-blue-900" : ""
        } transition-all duration-200`}
        onClick={onClick}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </Button>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block mb-0.5 last:mb-0">
        {ButtonComponent}
      </Link>
    )
  }

  return <div className="mb-0.5 last:mb-0">{ButtonComponent}</div>
}

