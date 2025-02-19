import type React from "react"

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="px-3 py-4">
      <div className="text-xs font-semibold mb-2 text-gray-700 dark:text-gray-300">{title}</div>
      <div>{children}</div>
    </div>
  )
}

