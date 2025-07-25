import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("DATABASE_URL")
TABLE = "visits"

def init_db():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    cur.execute(f"""
        CREATE TABLE IF NOT EXISTS {TABLE} (
            id SERIAL PRIMARY KEY,
            count INTEGER
        );
    """)
    cur.execute(f"SELECT count FROM {TABLE} WHERE id = 1;")
    if cur.fetchone() is None:
        cur.execute(f"INSERT INTO {TABLE} (id, count) VALUES (1, 0);")
    conn.commit()
    cur.close()
    conn.close()

def increment_visits():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    cur.execute(f"UPDATE {TABLE} SET count = count + 1 WHERE id = 1;")
    conn.commit()
    cur.close()
    conn.close()

def get_total_visits():
    conn = psycopg2.connect(DB_URL)
    cur = conn.cursor()
    cur.execute(f"SELECT count FROM {TABLE} WHERE id = 1;")
    result = cur.fetchone()[0]
    cur.close()
    conn.close()
    return result

