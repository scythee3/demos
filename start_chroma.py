#!/usr/bin/env python3
"""
Start ChromaDB HTTP server for the Congress RAG system
Run this script: python start_chroma.py
"""

import chromadb
from chromadb.config import Settings

def start_chroma_server():
    print("Starting ChromaDB HTTP server on http://localhost:8000")
    print("Press Ctrl+C to stop the server")
    
    # Start the server
    import uvicorn
    from chromadb.api.fastapi import app
    
    uvicorn.run(app, host="localhost", port=8000, log_level="info")

if __name__ == "__main__":
    try:
        start_chroma_server()
    except Exception as e:
        print(f"Error starting ChromaDB server: {e}")
        print("Try installing uvicorn: pip install uvicorn")
