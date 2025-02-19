import { searchAssistantGenerate } from "@/lib/agent-answers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { question } = await req.json()
  try {
    const response = await searchAssistantGenerate(question)
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
} 