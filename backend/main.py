from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from database import init_db, increment_visits, get_total_visits
from utils import send_email
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()
init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API de Elena Guardia"}

@app.post("/api/visit")
async def visit(request: Request):
    increment_visits()
    total = get_total_visits()

    # Envía un correo (si está activado en el .env)
    if os.getenv("SEND_EMAILS") == "true":
        send_email(
            subject="📥 Visita a tu página",
            body=f"Has recibido una nueva visita. Total actual: {total}",
            to=os.getenv("ADMIN_EMAIL")
        )

    return JSONResponse(content={"visits": total})

