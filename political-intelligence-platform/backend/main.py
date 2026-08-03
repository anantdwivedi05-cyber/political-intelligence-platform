from fastapi import FastAPI
from pydantic import BaseModel
from api.search import router as search_router

app = FastAPI(
    title="Political Intelligence Platform API",
    version="0.1.0"
)
app.include_router(search_router, prefix="/api")

class AnalyzeRequest(BaseModel):
    name: str

@app.get("/")
def health():
    return {
        "status":"running",
        "service":"Political Intelligence Platform API"
    }

@app.post("/api/analyze")
def analyze(data: AnalyzeRequest):
    return {
        "politician": data.name,
        "basic_profile": {},
        "criminal_cases": [],
        "assets": {},
        "party_history": [],
        "election_history": [],
        "ai_summary": "Data integration coming in Session 4."
    }
