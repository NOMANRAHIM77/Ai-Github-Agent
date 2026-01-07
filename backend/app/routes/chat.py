from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import generate_ai_response

router = APIRouter(prefix="/api", tags=["Chat"])

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(data: ChatRequest):
    return {"response": generate_ai_response(data.message)}
