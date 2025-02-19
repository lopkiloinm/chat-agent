import { Bot, ChevronDown, Paperclip, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatInputProps {
  placeholder: string
}

export default function ChatInput({ placeholder }: ChatInputProps) {
  return (
    <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="relative">
        <Input placeholder={placeholder} className="pr-32 py-6" />
        <div className="absolute right-2 top-2 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="gap-2">
            <Bot className="w-4 h-4" />
            <span className="hidden md:inline">Claude 3.5</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Sliders className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

