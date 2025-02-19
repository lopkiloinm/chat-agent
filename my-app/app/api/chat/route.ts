import { searchAssistantGenerate, tokenAssistantGenerate } from "@/lib/agent-answers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { question, type } = await req.json()
  try {
    const response = type === "token" 
      ? await tokenAssistantGenerate(question)
      : await searchAssistantGenerate(question)
    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
} 