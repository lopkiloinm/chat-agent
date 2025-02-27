import { searchAssistantGenerate, tokenAssistantGenerate } from "@/lib/agent-answers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { question, type } = await req.json()
  try {
    const response = type === "token" 
      ? await tokenAssistantGenerate(question)
      : await searchAssistantGenerate(question)
    
    console.log('AI Response:', JSON.stringify(response, null, 2))
    
    return NextResponse.json(response)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
} 