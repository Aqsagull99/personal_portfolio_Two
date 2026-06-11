import asyncio
from dotenv import load_dotenv
import os
from agents import AsyncOpenAI

load_dotenv()

# Get OpenRouter API key
openrouter_api_key = os.getenv("OPENROUTER_API_KEY")
if not openrouter_api_key:
    raise ValueError("OPENROUTER_API_KEY is missing")

# Setup client
external_client = AsyncOpenAI(
    api_key=openrouter_api_key,
    base_url="https://openrouter.ai/api/v1",
)

# Test function
async def test_model():
    try:
        response = await external_client.chat.completions.create(
            model="liquid/lfm-2.5-1.2b-instruct:free",
            messages=[{"role": "user", "content": "Hello! Can you help me?"}]
        )
        print("✅ Model working:", response.choices[0].message.content)
    except Exception as e:
        print(f"❌ Error:", e)

# Run the test
asyncio.run(test_model())
