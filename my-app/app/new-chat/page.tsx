import { Search, MessageSquare, Coins, FileCode, UserCircle } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function NewChatPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-4">
        <h1 className="text-3xl font-semibold mb-8">Start a New Chat</h1>
        <p className="text-muted-foreground mb-8 text-center">Choose an assistant to begin your conversation</p>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          <Link href="/" className="block">
            <Card className="hover:bg-accent cursor-pointer transition-colors h-full">
              <CardHeader>
                <Search className="w-8 h-8 mb-2" />
                <CardTitle>Search</CardTitle>
                <CardDescription>
                  Assistant with access to documents and knowledge from Connected Sources.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/general" className="block">
            <Card className="hover:bg-accent cursor-pointer transition-colors h-full">
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
            <Card className="hover:bg-accent cursor-pointer transition-colors h-full">
              <CardHeader>
                <Coins className="w-8 h-8 mb-2" />
                <CardTitle>Token Manager</CardTitle>
                <CardDescription>
                  Specialized in token operations, including transfers, minting, and burning for both standard tokens
                  and NFTs.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/smart-contract" className="block">
            <Card className="hover:bg-accent cursor-pointer transition-colors h-full">
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
            <Card className="hover:bg-accent cursor-pointer transition-colors h-full">
              <CardHeader>
                <UserCircle className="w-8 h-8 mb-2" />
                <CardTitle>Account Manager</CardTitle>
                <CardDescription>
                  Focused on account management, including transaction signing, message signing, and account creation.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

