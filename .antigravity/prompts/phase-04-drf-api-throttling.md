# Phase 04: DRF API & Throttling

## Objective
Expose RESTful APIs for services, products, projects, components, and enquiry forms with throttling.

## Tasks
1. Create serializers in `services/serializers.py`, `products/serializers.py`, `projects/serializers.py`, `home/serializers.py`.
2. Create ViewSets/APIViews with filtering, search, and rate limiting (AnonRateThrottle).
3. Connect URLs under `laxmi/urls.py` (`/api/v1/`).
