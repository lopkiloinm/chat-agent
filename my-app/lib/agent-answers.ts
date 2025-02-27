interface OpenAIResponse {
  choices: [
    {
      message: {
        content: string
      }
    },
  ]
}

export async function searchAssistantGenerate(question = ""): Promise<any> {
  const apiKey = process.env.OPENAI_API_KEY;

  const requestBody = {
    model: "gpt-4o-latest",
    messages: [
      {
        role: "system",
        content: "You gather top 3 sources of information for the prompt and use that for the answer.",
      },
      {
        role: "user",
        content: question,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "search_response",
        strict: true,
        schema: {
          type: "object",
          properties: {
            role: {
              type: "string",
              description: "The role of the responder.",
              enum: ["assistant"]
            },
            content: {
              type: "string",
              description: "The main content of the response providing a full answer to the query.",
            },
            searchQuery: {
              type: "string",
              description: "The search query that prompted the response.",
            },
            sources: {
              type: "array",
              description: "A list of exactly 3 sources used to generate the response. You must create 3 sources even if they don't exist.",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "The name of the source document.",
                  },
                  summary: {
                    type: "string",
                    description: "A brief summary of the content of the source document.",
                  },
                },
                required: ["name", "summary"],
                additionalProperties: false,
              },
            },
          },
          required: ["role", "content", "searchQuery", "sources"],
          additionalProperties: false,
        },
      },
    },
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorDetail = await response.text()
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetail}`)
    }

    const data = (await response.json()) as OpenAIResponse
    return JSON.parse(data.choices[0].message.content)
  } catch (error: any) {
    console.error("Failed to generate response:", error)
    throw new Error("Failed to generate response: " + error.message)
  }
}

export async function tokenAssistantGenerate(question = ""): Promise<any> {
  const apiKey = process.env.OPENAI_API_KEY;

  const requestBody = {
    model: "gpt-4o-latest",
    messages: [
      {
        role: "system",
        content: "You politely assist with the user's transaction.",
      },
      {
        role: "user",
        content: question,
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "token_response",
        strict: true,
        schema: {
          type: "object",
          properties: {
            role: {
              type: "string",
              description: "The role of the entity generating the response.",
              enum: ["assistant"]
            },
            content: {
              type: "string",
              description: "The content of the response detailing the transaction."
            },
            transaction: {
              type: "object",
              description: "Details of the transaction being processed.",
              properties: {
                transactionType: {
                  type: "string",
                  description: "Type of the transaction (e.g., Transfer)."
                },
                fromAddress: {
                  type: "string",
                  description: "Address from which the transfer is made."
                },
                toAddress: {
                  type: "string",
                  description: "Address to which the transfer is sent."
                },
                amount: {
                  type: "string",
                  description: "Amount of tokens being transferred."
                },
                tokenType: {
                  type: "string",
                  description: "Type of token being transferred.",
                  enum: [
                    "eth",
                    "usdt",
                    "dai",
                    "usdc",
                    "apt",
                    "rlusd"
                  ]
                }
              },
              required: [
                "transactionType",
                "fromAddress",
                "toAddress",
                "amount",
                "tokenType"
              ],
              additionalProperties: false
            }
          },
          required: [
            "role",
            "content",
            "transaction"
          ],
          additionalProperties: false
        }
      }
    }
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorDetail = await response.text()
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetail}`)
    }

    const data = (await response.json()) as OpenAIResponse
    return JSON.parse(data.choices[0].message.content)
  } catch (error: any) {
    console.error("Failed to generate response:", error)
    throw new Error("Failed to generate response: " + error.message)
  }
}



