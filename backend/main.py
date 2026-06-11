from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from agents.run import Runner
from config.settings import config
from my_agent.portfolio_agent import my_agent



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(req: Request):
    data = await req.json()
    user_message = data.get("message")
    result = await Runner.run(my_agent, user_message, run_config=config, max_turns=20)
    return {"reply": result.final_output}



#  --- Run the app ---
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)



