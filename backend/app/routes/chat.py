# app/routes/chat.py
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import generate_ai_response

router = APIRouter(prefix="/chat")


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@router.post("")
@router.post("/")
def chat_endpoint(request: ChatRequest):
    try:
        reply = generate_ai_response(request.message)
        return {"reply": reply}
    except Exception as e:
        return {"reply": f"⚠️ Server error: {str(e)}"}


