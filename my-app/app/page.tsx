"use client"

import { useState, useEffect } from "react"
import { Search, MessageSquare, Coins, FileCode, UserCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    const checkNavbarVisibility = () => {
      const navbar = document.getElementById("mobile-toolbar")
      if (navbar) {
        setIsNavbarVisible(window.getComputedStyle(navbar).display !== "none")
      }
    }

    checkNavbarVisibility()
    window.addEventListener("resize", checkNavbarVisibility)
    return () => window.removeEventListener("resize", checkNavbarVisibility)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col items-center justify-center min-h-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Start a New Chat
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose an assistant to begin your conversation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Link href="/search" className="block">
                <Card className="h-full hover:bg-accent cursor-pointer transition-colors">
                  <CardHeader>
                    <Search className="w-8 h-8 mb-2" />
                    <CardTitle>Search</CardTitle>
                    <CardDescription>
                      Expert in web3, crypto, and blockchain technologies. Access comprehensive knowledge on
                      decentralized systems.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/general" className="block">
                <Card className="h-full hover:bg-accent cursor-pointer transition-colors">
                  <CardHeader>
                    <MessageSquare className="w-8 h-8 mb-2" />
                    <CardTitle>General</CardTitle>
                    <CardDescription>
                      Assistant with no search functionalities. Chat directly with the Large Language Model.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/token-manager" className="block">
                <Card className="h-full hover:bg-accent cursor-pointer transition-colors">
                  <CardHeader>
                    <Coins className="w-8 h-8 mb-2" />
                    <CardTitle>Token Manager</CardTitle>
                    <CardDescription>
                      Specialized in token operations, including transfers, minting, and burning for both standard
                      tokens and NFTs.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/smart-contract" className="block">
                <Card className="h-full hover:bg-accent cursor-pointer transition-colors">
                  <CardHeader>
                    <FileCode className="w-8 h-8 mb-2" />
                    <CardTitle>Smart Contract</CardTitle>
                    <CardDescription>
                      Expert in blockchain interaction, including reading data, monitoring events, and executing smart
                      contract calls.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/account-manager" className="block">
                <Card className="h-full hover:bg-accent cursor-pointer transition-colors">
                  <CardHeader>
                    <UserCircle className="w-8 h-8 mb-2" />
                    <CardTitle>Account Manager</CardTitle>
                    <CardDescription>
                      Focused on account management, including transaction signing, message signing, and account
                      creation.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

