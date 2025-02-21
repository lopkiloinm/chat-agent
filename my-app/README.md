# AI Chat Interface

A Next.js project demonstrating structured AI responses with custom UI components.

## Overview

This application showcases how to create a structured chat interface with OpenAI's API, where responses follow predefined JSON schemas and are rendered using custom React components.

### Key Features

- **Structured AI Responses**: Uses `lib/agent-answers.ts` to generate JSON responses following specific schemas for different types of assistants
- **Dynamic Chat UI**: `app/chats/[id]` renders AI responses using specialized components based on response type
- **Component Library**: Custom components in `components/` folder handle different response types:
  - Search results with RAG (Retrieval-Augmented Generation) sources
  - Crypto transaction details
  - More can be added by contributors

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Existing Assistants

The application currently includes two types of AI assistants:

### Search Assistant
- Function: `searchAssistantGenerate`
- Purpose: Provides detailed answers with RAG (Retrieval-Augmented Generation) sources
- Response Schema:
  - Content: Main response text
  - Search Query: Original query used
  - Sources: Array of 3 sources with name and summary
- Use Case: General blockchain and crypto knowledge queries

### Token Assistant
- Function: `tokenAssistantGenerate`
- Purpose: Handles token transactions and operations
- Response Schema:
  - Content: Transaction description
  - Transaction: Detailed object containing:
    - Transaction Type
    - From/To Addresses
    - Amount
    - Token Type (eth, usdt, dai, usdc, etc.)
- Use Case: Token transfers and management

## Extending the Application

Contributors can extend the application by:

1. Creating new UI components in the `components/` folder
2. Adding a new assistant type in `lib/agent-answers.ts` with a corresponding JSON schema
3. Updating the chat interface to render the new component based on the AI response

### Example Extension Process

1. Create a new component:
```typescript
// components/MyNewComponent.tsx
export function MyNewComponent({ data }) {
  // Render your custom UI
}
```

2. Add a new assistant schema:
```typescript
// lib/agent-answers.ts
export async function myNewAssistantGenerate() {
  // Define schema and handle OpenAI API response
}
```

3. Update the chat interface to use your component:
```typescript
// app/chats/[id]/page.tsx
import { MyNewComponent } from "@/components/MyNewComponent"

// Add logic to render MyNewComponent based on response type
```

## API Integration

The application uses OpenAI's API to generate structured responses. Each assistant type in `lib/agent-answers.ts` defines a specific JSON schema that the AI must follow, ensuring consistent and predictable responses that can be rendered by the corresponding UI components.

## Contributing

Contributions are welcome! Feel free to add new assistant types and corresponding UI components to expand the application's capabilities.
