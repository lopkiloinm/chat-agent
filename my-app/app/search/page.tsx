import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import ChatInput from "@/components/chat-input"

export default function SearchPage() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 mb-3">
          <Search className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Search</h1>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Expert in web3, crypto, and blockchain technologies. Access comprehensive knowledge on decentralized systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Explain DeFi protocols</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Compare consensus mechanisms</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Analyze recent blockchain trends</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Discuss crypto regulations</p>
          </Card>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput placeholder="Ask about web3, crypto, or blockchain..." />
      </div>
    </>
  )
}

