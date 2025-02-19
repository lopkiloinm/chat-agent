import { Button } from "@/components/ui/button"

interface Source {
  name: string
  summary: string
}

interface RAGSourcesProps {
  sources?: Source[]
}

export function RAGSources({ sources = [] }: RAGSourcesProps) {
  if (!sources || sources.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {sources.map((source, index) => (
        <Button key={index} variant="secondary" className="h-auto py-2 px-4 flex flex-col items-start text-left w-full">
          <span className="font-medium mb-1 w-full">{source.name}</span>
          <p className="text-xs text-muted-foreground w-full whitespace-normal line-clamp-3">{source.summary}</p>
        </Button>
      ))}
    </div>
  )
}

