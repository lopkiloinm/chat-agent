import { UserCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import ChatInput from "@/components/chat-input"

export default function AccountManagerPage() {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 mb-3">
          <UserCircle className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">Account Manager</h1>
        </div>

        <p className="text-muted-foreground mb-8 text-center">
          Focused on account management, including transaction signing, message signing, and account creation.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Sign transactions</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Sign messages</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Create new accounts</p>
          </Card>
          <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
            <p className="text-sm">Manage account security</p>
          </Card>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <ChatInput placeholder="Ask about account management..." />
      </div>
    </>
  )
}

