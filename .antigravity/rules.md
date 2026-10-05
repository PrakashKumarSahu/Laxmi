# Project Rules & Guidelines - Laxmi Electronics and Electricals

## 1. Code Quality & Standards
- **Python/Django:** Follow PEP8 standards. Use type annotations where appropriate. Keep functions modular and views clean. Use DRF serializers for API validation.
- **Frontend (React/Vite):** Use functional React components with hooks. Clean component modularity. Strict prop types / interfaces.
- **Styling:** Modern design aesthetic (vibrant colors, glassmorphism, responsive grid, dynamic hover effects, sleek animations). High UX visual standards.

## 2. API Design & Security
- RESTful endpoints following standard conventions under `/api/v1/`.
- Rate limiting / Throttling enabled for public enquiry forms (Contact, Repair Enquiry, Purchase Request, Project Request).
- CORS headers configured for React frontend communication.

## 3. Database & Models
- Proper field validation, indexes, and verbose names.
- Choice fields for `category`, `condition` (New, Refurbished, Wholesale), and request statuses.
- Support for image upload/media storage.

## 4. Docker & Environment
- Environment variables via `.env` file (`DEBUG`, `SECRET_KEY`, `ALLOWED_HOSTS`, `DATABASE_URL`).
- Containerized Django backend + Gunicorn / Uvicorn + PostgreSQL / SQLite support + React Nginx/Vite containerization.
