"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/ClientLayout"
import { useEffect } from "react"
import { initializeDummyData } from "@/lib/init-dummy-data"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initializeDummyData()
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

