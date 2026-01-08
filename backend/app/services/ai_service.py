from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_ai_response(message: str) -> str:
    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",  # ✅ FIXED MODEL
        messages=[
            {
                "role": "system",
                "content": "You are GitGuide AI. Help users with Git and GitHub commands clearly with examples."
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0.6,
        max_tokens=400
    )

    return completion.choices[0].message.content
