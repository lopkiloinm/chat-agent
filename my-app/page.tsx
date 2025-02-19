import {
  Search,
  MessageSquare,
  PenSquare,
  Image,
  Bot,
  ChevronDown,
  Paperclip,
  Sliders,
  MapPin,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-[240px] border-r flex flex-col bg-stone-50">
        <div className="p-3 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
          </div>
          <span className="font-medium">onyx</span>
        </div>

        <Button variant="ghost" className="flex gap-2 mx-3 justify-start">
          <PenSquare className="w-4 h-4" />
          New Chat
        </Button>

        <div className="px-3 py-4">
          <div className="text-sm font-medium mb-2">Assistants</div>
          <div className="space-y-1">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-sm h-8 gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </Link>
            <Link href="/general">
              <Button
                variant="secondary"
                className="w-full justify-start text-sm h-8 gap-2 bg-stone-200 hover:bg-stone-300"
              >
                <MessageSquare className="w-4 h-4" />
                General
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start text-sm h-8 gap-2">
              <Image className="w-4 h-4" />
              Art
            </Button>
          </div>
        </div>

        <Button variant="ghost" className="justify-start mx-3 text-sm">
          Explore Assistants
        </Button>

        <div className="px-3 py-4">
          <div className="text-sm font-medium mb-2">Chats</div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4" />
              Today
            </div>
            <Button variant="ghost" className="w-full justify-start text-sm h-8">
              Upward Trend Presentation
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm h-8">
              Initial Greeting Exchange
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full px-4">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-8 h-8" />
            <h1 className="text-2xl font-semibold">General</h1>
          </div>

          <p className="text-muted-foreground mb-8 text-center">
            Assistant with no search functionalities. Chat directly with the Large Language Model.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
            <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm">Summarize a document</p>
            </Card>
            <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm">Help me with coding</p>
            </Card>
            <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm">Draft a professional email</p>
            </Card>
            <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <p className="text-sm">Learn something new</p>
            </Card>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 max-w-3xl mx-auto w-full">
          <div className="relative">
            <Input placeholder="Message General assistant..." className="pr-32 py-6" />
            <div className="absolute right-2 top-2 flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="gap-2">
                <Bot className="w-4 h-4" />
                Claude 3.5
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Sliders className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

