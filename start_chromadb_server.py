import chromadb
import uvicorn
import os
from chromadb.config import Settings

def start_chromadb_server():
    print("Starting ChromaDB server on http://localhost:8000")
    print("Press Ctrl+C to stop")
    
    # Create data directory
    os.makedirs("./chroma_data", exist_ok=True)
    
    try:
        # Try the newer way first
        from chromadb.server.fastapi import app
        print("Using chromadb.server.fastapi")
    except ImportError:
        try:
            # Try alternative import
            from chromadb.api.fastapi import FastAPI
            app = FastAPI(Settings(
                chroma_db_impl="duckdb+parquet",
                persist_directory="./chroma_data"
            ))
            print("Using chromadb.api.fastapi.FastAPI")
        except ImportError:
            try:
                # Try direct server creation
                from chromadb.api.fastapi import create_app
                app = create_app(Settings(
                    chroma_db_impl="duckdb+parquet", 
                    persist_directory="./chroma_data"
                ))
                print("Using chromadb.api.fastapi.create_app")
            except ImportError:
                print("Error: Cannot find compatible ChromaDB FastAPI app")
                print("Let's check what's available in chromadb.api.fastapi:")
                import chromadb.api.fastapi as fastapi_module
                print(dir(fastapi_module))
                return
    
    # Start the server
    uvicorn.run(app, host="0.0.0.0", port=8000)

if __name__ == "__main__":
    start_chromadb_server()
