# ⚡ Laxmi Electronics and Electricals

> **Location:** Near Durga Chowk, Gudhiyari, Raipur, Chhattisgarh 492009  
> **Phone / WhatsApp:** +91 98261 00000  
> **Email:** laxmielectronics.raipur@gmail.com

Full-stack web platform for **Laxmi Electronics and Electricals** — a trusted local shop offering home appliance repairs, wholesale DTH receivers, new and refurbished electronics, and student IoT/Arduino project support.

---

## Project Structure

```
Laxmi/
├── backend/                     # Django 5 + DRF API
│   ├── laxmi/                   # Project config (settings, urls, wsgi)
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── throttling.py
│   ├── accounts/                # User auth (signup/login)
│   ├── home/                    # Contact messages
│   ├── products/                # New / Refurbished / Wholesale DTH products
│   ├── projects/                # Student IoT projects & components
│   ├── services/                # Appliance repair services & enquiries
│   ├── manage.py
│   ├── seed_data.py             # Seeds initial shop data on first run
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                    # React 18 + Vite SPA
│   ├── src/
│   │   ├── components/          # Navbar, Footer, RepairModal, PurchaseModal, ProjectModal
│   │   ├── pages/               # Home, Services, Projects, Products, About, Contact
│   │   ├── api.js               # Axios client with mock fallbacks
│   │   └── index.css            # Global design system (dark glassmorphism)
│   ├── .env.example
│   ├── vite.config.js
│   └── Dockerfile
├── .env.prod.example            # Template for production secrets
├── .gitignore
├── docker-compose.yml           # Development (SQLite dev option + Docker Postgres)
├── docker-compose.prod.yml      # Production (Gunicorn + Nginx + Postgres)
└── .github/
    └── workflows/ci.yml         # GitHub Actions — backend tests + frontend build
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.11, Django 5.2, Django REST Framework |
| Database | PostgreSQL 15 (Docker) / SQLite 3 (local fallback) |
| Frontend | React 18, Vite, React Router DOM v6, Lucide React |
| Containerization | Docker Compose (3 services) |
| Web Server | Gunicorn (API) + Nginx (React SPA) |
| CI/CD | GitHub Actions |

---

## Running the Project

### Option 1 — Docker Compose (all 3 services together)

```bash
# Build and start PostgreSQL, Django API, and React Nginx frontend
docker compose up --build
```

| Service | URL |
|---|---|
| React Frontend | http://localhost:3000 |
| Django REST API | http://localhost:8000/api/v1/ |
| Django Admin | http://localhost:8000/admin/ |
| PostgreSQL | localhost:5432 (`laxmidb`) |

```bash
# Stop all services
docker compose down
```

---

### Option 2 — Local development servers

**Backend (Django)**

```bash
cd backend
python3 -m venv ../.venv
source ../.venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python seed_data.py        # loads initial shop data
python manage.py runserver
```

**Frontend (React + Vite)**

```bash
cd frontend
cp .env.example .env
npm install
npm run dev                # http://localhost:5173
```

---

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/services/` | List repair services |
| POST | `/api/v1/services/enquiry/` | Submit repair booking (rate-limited: 5/min) |
| GET | `/api/v1/products/` | List products (`?condition=NEW\|REFURBISHED\|WHOLESALE`) |
| POST | `/api/v1/products/enquiry/` | Submit purchase / wholesale enquiry |
| GET | `/api/v1/projects/` | List student project kits |
| GET | `/api/v1/components/` | List components in stock |
| POST | `/api/v1/projects/request/` | Submit project assistance request |
| POST | `/api/v1/contact/` | Send a contact message |

---

## Running Tests

```bash
# Backend unit tests
cd backend
../.venv/bin/python manage.py test

# Frontend production build check
cd frontend
npm run build

# Validate Docker Compose config
docker compose config
docker compose -f docker-compose.prod.yml config
```

---

## Production Deployment

```bash
cp .env.prod.example .env.prod   # fill in real secrets
docker compose -f docker-compose.prod.yml up --build -d
```

---

## Business Overview

**Laxmi Electronics and Electricals** is a local shop in Gudhiyari, Raipur offering:

- **Appliance Repairs** — Mixer, Cooler, LED TV, Fan, Induction cooker, Iron box
- **Student Project Support** — Arduino, IoT kits, sensors, components, guidance
- **Wholesale DTH** — DD Free Dish FTA satellite receivers in bulk
- **New Electronics** — Smart LED TVs, Induction cooktops, Ceiling fans
- **Refurbished Items** — Fully serviced appliances with shop warranty

**Business Hours:** Mon–Sat 9:30 AM – 8:30 PM | Sun 10:00 AM – 4:00 PM
