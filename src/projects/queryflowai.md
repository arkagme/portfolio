---
title: QueryFlow AI
description: No-code AI workflow automation platform with visual pipeline builder and chat interface.
date: 2024-11-01
tags: ["react", "fastapi", "postgresql", "chromadb", "ai", "rag"]
repoLink: "https://github.com/arkagme/queryflow-backend/"
liveLink: ""
featured: true
pinned: true
stars: 0
contributors: 0
---

# QueryFlow

**QueryFlow** is a no-code AI workflow automation platform that lets users design and run complex AI pipelines through a drag-and-drop interface and conversational chat. It focuses on connecting documents, web search, and LLM reasoning into a single orchestrated flow.

## Features

- **Visual Workflow Builder**: Drag-and-drop nodes to compose AI tasks such as retrieval, summarization, classification, and web search.
- **Document Intelligence**: Upload PDFs, text, and other documents for automatic extraction, chunking, embedding, and retrieval.
- **Context-Aware Chat**: Chat interface that routes queries through the designed workflow for grounded answers.
- **Persistent Workflows**: Save, load, and version workflows with stored configuration in a database.
- **REST API Layer**: Programmatic access to workflows, document uploads, and vector retrieval.

## Tech Stack

- React.js (frontend UI and drag-and-drop builder)
- FastAPI (backend APIs and orchestration)
- PostgreSQL (relational storage for users, workflows, and metadata)
- ChromaDB (vector store for embeddings and semantic search)
- Gemini / LLM APIs (reasoning and generation)
