export const dummyData: { [key: string]: Message[] } = {
  "blockchain-basics": [
    { role: "user", content: "What is blockchain technology?" },
    {
      role: "assistant",
      content:
        "Blockchain technology is a decentralized, distributed ledger system that records transactions across multiple computers. It's designed to be secure, transparent, and resistant to modification of its data. Here are some key features of blockchain:\n\n1. Decentralization: No single entity has control over the entire network.\n2. Transparency: All transactions are visible to anyone on the network.\n3. Immutability: Once data is recorded, it's extremely difficult to change.\n4. Security: Uses cryptographic techniques to ensure data integrity.\n5. Consensus Mechanisms: Ensures agreement on the state of the network.\n\nBlockchain was initially developed as the technology behind cryptocurrencies like Bitcoin, but its potential applications extend far beyond digital currencies to areas like supply chain management, voting systems, and digital identity verification.",
      searchQuery: "Blockchain technology overview and key features",
      sources: [
        {
          name: "Blockchain Fundamentals",
          summary:
            "This document provides a comprehensive overview of blockchain technology, including its core concepts, key features, and fundamental principles of operation.",
        },
        {
          name: "Blockchain vs Traditional Databases",
          summary:
            "A comparative analysis of blockchain technology against traditional centralized database systems, highlighting the unique advantages and use cases of blockchain.",
        },
        {
          name: "Blockchain Applications Beyond Cryptocurrency",
          summary:
            "Explores the various applications of blockchain technology in different industries, showcasing its potential beyond just financial transactions.",
        },
      ],
    },
    { role: "user", content: "How does blockchain work?" },
    {
      role: "assistant",
      content:
        "Blockchain works through a series of interconnected processes:\n\n1. Transaction Initiation: A user initiates a transaction on the blockchain network.\n\n2. Block Creation: The transaction is combined with other pending transactions to create a new block.\n\n3. Block Verification: The new block is broadcast to all nodes (computers) in the network.\n\n4. Consensus: Nodes verify the block's validity through a consensus mechanism (e.g., Proof of Work or Proof of Stake).\n\n5. Block Addition: Once verified, the new block is added to the existing chain of blocks.\n\n6. Transaction Completion: The transaction is now complete and permanently recorded on the blockchain.\n\nEach block in the chain contains:\n- A list of transactions\n- A timestamp\n- A reference to the previous block (creating the \"chain\")\n- A unique identifier (hash)\n\nThis process ensures that once information is entered, it can't be altered without changing all subsequent blocks and gaining network consensus, making blockchain highly secure and tamper-resistant.\n\nThe decentralized nature of blockchain means that instead of relying on a central authority to verify transactions, the network uses consensus mechanisms to agree on the state of the ledger. This eliminates single points of failure and makes the system more resilient to attacks or manipulation.",
      searchQuery: "Blockchain functioning and processes",
      sources: [
        {
          name: "Blockchain Architecture",
          summary:
            "A detailed breakdown of blockchain's architecture, explaining how different components interact to process transactions and maintain the integrity of the chain.",
        },
        {
          name: "Consensus Mechanisms in Blockchain",
          summary:
            "Information about various consensus mechanisms used in blockchain networks, including details on Proof of Work, Proof of Stake, and other algorithms.",
        },
        {
          name: "Cryptography in Blockchain",
          summary:
            "A comprehensive guide on how cryptographic techniques are used in blockchain to ensure security, privacy, and immutability of data.",
        },
      ],
    },
  ],
  "origen-overview": [
    { role: "user", content: "What is the Origen AI Platform?" },
    {
      role: "assistant",
      content:
        "The Origen AI Platform is an advanced AI Assistant platform designed to connect organizations' documents, applications, and people. It offers a comprehensive solution for enhancing various aspects of organizational operations through AI-powered assistance, integration, and advanced search capabilities.\n\nKey features of the Origen AI Platform include:\n\n1. Integration: Can integrate with over 30 different tools and applications.\n2. Contextual Understanding: Designed to handle work-related queries with contextual awareness.\n3. Data Security: Prioritizes data security and offers open-source transparency.\n4. AI-Enabled Customer Support: Helps teams access up-to-date information across various sources.\n5. Advanced Enterprise Search: Offers capabilities like natural language queries and rapid information parsing.\n\nThe platform was developed to improve efficiency, decision-making, and overall productivity in modern businesses.",
      searchQuery: "Origen AI Platform overview and key features",
      sources: [
        {
          name: "Origen Platform Overview",
          summary:
            "This document provides a comprehensive overview of the Origen AI Platform, including its core features, integration capabilities, and primary use cases across different industries.",
        },
        {
          name: "Origen Technical Specifications",
          summary:
            "Detailed technical information about the Origen AI Platform, including its architecture, data processing capabilities, and security measures.",
        },
        {
          name: "Origen vs Competitors",
          summary:
            "A comparative analysis of the Origen AI Platform against other AI assistant platforms in the market, highlighting Origen's unique features and advantages.",
        },
      ],
    },
    { role: "user", content: "How does the Origen AI Platform work?" },
    {
      role: "assistant",
      content:
        "The Origen AI Platform works through a series of interconnected processes:\n\n1. Data Integration: The platform connects to various organizational data sources, including documents, applications, and communication channels.\n\n2. Natural Language Processing: It uses advanced NLP techniques to understand and interpret user queries in natural language.\n\n3. Contextual Analysis: The platform analyzes the context of each query, considering the user's role, previous interactions, and relevant organizational data.\n\n4. Information Retrieval: Using its advanced search capabilities, it quickly parses through large amounts of information to find relevant data.\n\n5. AI-Powered Response Generation: The platform generates responses using AI models trained on the organization's data and industry-specific information.\n\n6. Continuous Learning: The system learns from each interaction, improving its responses and recommendations over time.\n\n7. Integration with Workflows: It can integrate with existing tools and workflows, allowing for seamless incorporation into daily operations.\n\n8. Security and Compliance: Throughout these processes, the platform maintains strict security protocols and ensures compliance with data protection regulations.\n\nThis multi-step process allows the Origen AI Platform to provide accurate, context-aware assistance across various organizational functions, from customer support to decision-making and process automation.",
      searchQuery: "Origen AI Platform functioning and processes",
      sources: [
        {
          name: "Origen System Architecture",
          summary:
            "A detailed breakdown of the Origen AI Platform's system architecture, explaining how different components interact to process queries and generate responses.",
        },
        {
          name: "Origen AI Models",
          summary:
            "Information about the AI models used in the Origen platform, including details on training data, model architecture, and continuous learning mechanisms.",
        },
        {
          name: "Origen Integration Guide",
          summary:
            "A comprehensive guide on how the Origen AI Platform integrates with various tools and workflows, including API documentation and best practices for implementation.",
        },
      ],
    },
  ],
  "usdt-transfer": [
    { role: "user", content: "I want to transfer 100 USDT to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e" },
    {
      role: "assistant",
      content:
        "I've prepared a transaction for you to transfer 100 USDT to the address you specified. Please review the transaction details below:",
      transaction: {
        transactionType: "Transfer",
        fromAddress: "0x1234...5678", // This would be the user's actual address in a real implementation
        toAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: "100",
        tokenType: "usdt",
      },
    },
    { role: "user", content: "The transaction details look correct. How do I confirm and execute this transfer?" },
    {
      role: "assistant",
      content:
        "Great! I'm glad the transaction details look correct. To confirm and execute this transfer, please follow these steps:\n\n1. Double-check the transaction details one last time to ensure everything is accurate.\n2. Click the 'Confirm Transaction' button at the bottom of the transaction card.\n3. You'll be prompted to sign the transaction using your connected wallet (e.g., MetaMask).\n4. Review the gas fees and adjust if necessary.\n5. Confirm the transaction in your wallet.\n\nAfter these steps, the transaction will be broadcast to the network. You'll receive a confirmation once the transaction is processed. Is there anything else you'd like to know about this process?",
    },
  ],
}

export interface Message {
  role: "user" | "assistant"
  content: string
  searchQuery?: string
  sources?: {
    name: string
    summary: string
  }[]
  transaction?: {
    transactionType: string
    fromAddress: string
    toAddress: string
    amount: string
    tokenType: string
  }
  assistant?: string
}

