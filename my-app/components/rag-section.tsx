import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { truncateText } from "@/lib/utils"

interface Source {
  name: string
  summary: string
}

interface RAGSectionProps {
  searchQuery: string
  sources: Source[]
}

export function RAGSection({ searchQuery, sources }: RAGSectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Search className="w-4 h-4" />
        <span>Searched for: </span>
        <span className="italic">{searchQuery}</span>
      </div>

      <p className="text-sm font-medium mb-2">Found Relevant Sources:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {sources.map((source, index) => (
          <Button
            key={index}
            variant="secondary"
            className="h-auto py-2 px-4 flex flex-col items-start text-left w-full"
          >
            <span className="font-medium mb-1 w-full truncate">{truncateText(source.name, 30)}</span>
            <p className="text-xs text-muted-foreground w-full whitespace-normal line-clamp-3">{source.summary}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

