import os
import logging
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

# Initialize Groq client
api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=api_key) if api_key else None


def load_system_prompt() -> str:
    prompt_file = os.path.join(
        os.path.dirname(os.path.dirname(__file__)), "prompts", "system_prompt.txt"
    )
    if os.path.exists(prompt_file):
        try:
            with open(prompt_file, "r", encoding="utf-8") as f:
                content = f.read().strip()
                if content:
                    return content
        except Exception as e:
            logger.error(f"Failed to read system prompt file: {e}")

    return (
        "You are GitGuide AI, an expert Git and GitHub mentor. "
        "Help users step-by-step with Git and GitHub commands clearly with examples."
    )


def generate_ai_response(message: str) -> str:
    if not client:
        return "⚠️ GROQ_API_KEY is not configured in backend/.env."

    system_prompt = load_system_prompt()

    configured_model = os.getenv("GROQ_MODEL", "groq/compound")
    candidate_models = [
        configured_model,
        "groq/compound",
        "qwen/qwen3.8-27b",
        "groq/compound-mini",
    ]

    models_to_try = []
    for m in candidate_models:
        if m and m not in models_to_try:
            models_to_try.append(m)

    last_exception = None
    for model_name in models_to_try:
        try:
            completion = client.chat.completions.create(
                model=model_name,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": message},
                ],
                temperature=0.6,
                max_tokens=800,
            )
            reply = completion.choices[0].message.content
            if reply and reply.strip():
                return reply
        except Exception as e:
            logger.warning(f"Groq API call failed for model '{model_name}': {e}")
            last_exception = e

    logger.error(f"All Groq model attempts failed. Last error: {last_exception}")
    return "⚠️ Server error while connecting to AI model. Please try again."

