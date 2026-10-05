Laxmi Electronics & Electricals

Final Full-Stack Production Build Task for AI Coding Agent

Build the complete production-ready website for:



Laxmi Electronics and Electricals



Reference repository:



https://github.com/PrakashKumarSahu/Laxmi



The old repository is the business/functionality reference only.



Rebuild the application using a modern, modular full-stack architecture.

1. NON-NEGOTIABLE REQUIREMENTS

These requirements override implementation convenience.

1.1 Latest stable only

Use the newest stable, production-supported versions available when the implementation is performed.



Never use:



alpha releases

beta releases

release candidates

nightly builds

development branches

abandoned libraries

deprecated packages

deprecated APIs

legacy APIs

packages with known security vulnerabilities



"Latest" means:

newest stable production release that is appropriate for the project's dependency chain.

Do not blindly use a higher version if it is beta/experimental.



Before installing dependencies, verify their current stable status from their official package/project documentation.

2. CURRENT BASELINE

At the time this task was written:



Django: 6.1

React: 19.2

PostgreSQL: 18.6

Node.js: latest LTS line

Python: newest stable version officially supported by the selected Django release



These versions are a baseline, NOT a hardcoded forever requirement.



If a newer stable compatible version exists when implementation begins, use it.



Do not use PostgreSQL 19 while it remains beta.

3. ARCHITECTURAL PRINCIPLE

The most important requirement is:

MODULAR + HUMAN MAINTAINABLE

The project must be understandable to a competent developer who has never seen it before.



Do NOT build a giant application.



Do NOT put everything in:



one Django app

one React component

one service file

one API file

one giant Dockerfile

one giant configuration file



Every domain should have a clear responsibility.

4. DOMAIN-DRIVEN MODULAR STRUCTURE

Backend should be divided by business responsibility.



Recommended:

backend/
├── config/
├── apps/
│   ├── core/
│   ├── business/
│   ├── catalog/
│   ├── services/
│   ├── projects/
│   └── enquiries/
├── manage.py
└── tests/


core

Only shared infrastructure:



base models

common utilities

common exceptions

health checks

shared constants where genuinely necessary



Do not turn core into a dumping ground.

business

Business information:



BusinessProfile

contact information

address

opening hours

map configuration

social links

website configuration

catalog

Catalogue functionality:



Category

Product

ProductImage

component/product catalogue

filtering

searching

stock information

services

Repair/service functionality:



Service

repair-related catalogue information

projects

Student/project functionality:



Project

project categories

project information

enquiries

Customer interactions:



RepairRequest

ProductEnquiry

ProjectRequest

ContactRequest



Keep business domains isolated.

5. FRONTEND ARCHITECTURE

Use React with a modular structure such as:

frontend/
├── src/
│   ├── app/
│   ├── api/
│   ├── components/
│   ├── features/
│   │   ├── business/
│   │   ├── catalog/
│   │   ├── services/
│   │   ├── projects/
│   │   └── enquiries/
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── types/
│   ├── utils/
│   └── main.*


Each feature should contain its own:



API functions where appropriate

types

components

hooks

validation

UI logic



Do not create a giant:

components/


folder containing hundreds of unrelated components.

6. SHARED CODE RULE

Create shared utilities only when they are genuinely shared.



Do NOT create:

utils/
helpers/
common/


as dumping grounds.



Every module should have a clear reason to exist.



A developer should be able to answer:

"Why does this file exist?"

by looking at its location and surrounding module.

7. TECHNOLOGY STACK

Backend

Use:



Django

Django REST Framework

PostgreSQL

modern Python

modern PostgreSQL driver

appropriate production server

image processing library where required

automated testing tools

linting/formatting/type-checking tools



Do not use obsolete Django patterns.



Do not use deprecated Django APIs.



Use current Django configuration and recommended patterns.

8. FRONTEND

Use:



React

Vite

TypeScript

modern React APIs

React Router

current stable server-state/data-fetching solution where justified

modern CSS/Tailwind solution if selected

modern form/validation tooling where justified



Do not use:



Create React App

class components unless genuinely required

obsolete React patterns

deprecated lifecycle methods

legacy state-management approaches without justification



Create React App is deprecated by React and should not be introduced into the project.

9. DATABASE

Use PostgreSQL.



Production database must be PostgreSQL.



Never use SQLite for production.



Database requirements:



normalized relational schema

proper foreign keys

proper indexes

constraints where appropriate

timestamps

useful uniqueness constraints

meaningful deletion behavior

transactions where necessary



Do not duplicate data unnecessarily.



Do not store structured information as arbitrary JSON when it deserves relational modelling.



Use JSON fields only when the data genuinely benefits from flexible structure.

10. BUSINESS DOMAIN

The website must support:

Repair Services

Examples:



TV repair

mixer repair

cooler repair

fan repair

iron repair

induction repair

Products

new electronics

refurbished electronics

wholesale products

DTH receivers

electronics components

Student Projects

Arduino projects

IoT projects

embedded projects

robotics/electronics projects

project assistance

Customer Enquiries

contact

repair requests

product enquiries

wholesale enquiries

project requests

11. BUSINESS INFORMATION MUST BE ADMIN MANAGED

Do not hardcode business information in React.



The following must be configurable through backend/admin:



business name

tagline

description

address

phone

WhatsApp

email

opening hours

map URL

logo

social links

hero content

12. PRODUCT SYSTEM

Implement:

Category
Product
ProductImage


Products must support:



name

slug

description

short description

brand

model

category

condition

price

price-display mode

stock

active/inactive

featured

timestamps



Conditions:

NEW
REFURBISHED
USED


Price display:

EXACT
STARTING_FROM
ON_REQUEST


Do not display fake prices.

13. PRODUCT IMAGES

Support multiple images.



Implement:

ProductImage


with:



image

alt text

ordering

primary image



Images must be:



validated

optimized

responsive

properly labelled



Do not store image binaries inside PostgreSQL.

14. SERVICES

Create a proper Service model.



Support:



title

slug

description

common problems

price range if available

image

active

featured

ordering



Everything must be manageable from Django Admin.

15. PROJECTS

Create a proper Project model.



Support:



title

slug

category/type

description

detailed description

difficulty

price

price mode

image

featured

active

16. ENQUIRY SYSTEM

Create separate domain models:

RepairRequest
ProductEnquiry
ProjectRequest
ContactRequest


Each must have:



customer information

submitted information

status

admin notes

timestamps



Statuses must be represented with clear domain choices.



Do not expose admin notes through public APIs.

17. ADMIN

Django Admin is the primary business-management interface.



Admin must allow the owner to manage:



business details

categories

products

product images

services

projects

repair requests

product enquiries

project requests

contact requests



Admin must include:



search

filters

ordering

useful list displays

date filtering

status filtering

bulk actions

image previews where useful



No custom admin SPA should be introduced unless there is a real requirement.

18. REST API

API namespace:

/api/v1/


Public resources:

/business
/categories
/products
/services
/projects


Public submission resources:

/contact
/repair-requests
/product-enquiries
/project-requests


Implement:



pagination

filtering

searching

ordering

validation

consistent errors



Public API must never expose:



passwords

admin notes

internal secrets

internal system fields that have no business purpose

19. API VERSIONING

Never tightly couple the frontend to undocumented backend internals.



Use:

/api/v1/


Keep API serializers and frontend DTO/types clearly separated from database models.



Do not directly expose Django model serialization as the public contract.

20. FRONTEND PAGES

Required pages:

/
 /services
 /services/:slug

 /products
 /products/:slug

 /products/new
 /products/refurbished
 /products/wholesale

 /projects
 /projects/:slug

 /components

 /about
 /contact

 /repair-request
 /project-request


21. HOMEPAGE

Build a polished local-business homepage.



Sections:



Hero

Services

Featured products

Refurbished products

Student projects

Wholesale

Why choose us

Location

Contact CTA



Do not invent:



awards

customer numbers

ratings

testimonials

years of experience



unless data is explicitly provided.

22. DESIGN

The website should look like a finished professional business website.



Requirements:



modern

clean

trustworthy

responsive

mobile-first

accessible

fast

easy to navigate



Avoid:



over-animation

unnecessary gradients

template-looking sections

excessive cards

unnecessary dashboards

giant hero sections with little useful information



The design should prioritize business conversion.

23. MOBILE

Assume a significant percentage of customers use mobile.



Test:

320px
375px
425px
768px
1024px
1280px
1440px+


Ensure:



navigation works

forms work

buttons are usable

cards don't overflow

images don't break layouts

tables are responsive

text remains readable

24. CUSTOMER CONTACT

Every major customer flow must have a clear CTA.



Examples:

Request Repair
Enquire Now
Ask on WhatsApp
Call Us
Request Project
Contact Us


Do not implement fake checkout/payment functionality.



This is primarily a catalogue and enquiry platform.

25. WHATSAPP

WhatsApp number must be configurable.



Generate links dynamically.



Product enquiry can prefill:

Hello, I am interested in [PRODUCT NAME].


Repair enquiry can prefill:

Hello, I need repair service for [SERVICE NAME].


26. FORMS

Every public form must have:



frontend validation

backend validation

loading state

success state

failure state

duplicate-submission prevention

rate limiting

useful error messages



Never rely only on React validation.



Django must independently validate every request.

27. SECURITY

Production configuration must include appropriate:



HTTPS

secure cookies

CSRF protection

CORS restrictions

HSTS

clickjacking protection

content-type sniffing protection

security headers

allowed-host validation

secret management

request-size limits

rate limiting



Never use:

DEBUG=True
CORS_ALLOW_ALL_ORIGINS=True


in production.

28. DEPENDENCY POLICY

This project MUST have a strict dependency policy.



Before adding a dependency:



Check whether the functionality can be implemented using the framework itself.

Prefer framework functionality.

If a dependency is needed, verify it is actively maintained.

Verify it supports the selected stable framework version.

Verify it has no known incompatible/deprecated API.

Use the newest stable compatible release.

Avoid duplicate libraries solving the same problem.



Do not add packages just because they are popular.

29. NO DEPRECATED TECHNOLOGY

The agent must actively search the official documentation/changelog for deprecations before using APIs.



Never introduce:



deprecated Django APIs

deprecated React APIs

deprecated router APIs

obsolete Python APIs

deprecated PostgreSQL features

deprecated npm packages

abandoned packages

legacy configuration formats



If a library requires a deprecated API to function, DO NOT use that library.



Find a maintained alternative.

30. DEPENDENCY LOCKING

Do not use floating dependencies in a reproducible production build.



Bad:

Django
react
postgres


Good:

exact tested versions


Use:



lockfiles

pinned production versions

reproducible Docker builds



However, do NOT blindly pin abandoned versions just because they were once installed.



Dependency upgrades must be intentional and tested.

31. DEPENDENCY AUDIT

Create automated dependency checks.



CI must detect:



outdated packages

known security vulnerabilities

deprecated dependencies

unsupported framework versions



Use the current ecosystem-standard auditing tools available at implementation time.



Do not hardcode obsolete audit tooling.

32. CODE QUALITY

Use current stable tooling for:



formatting

linting

type checking

testing



Enforce these through CI.



Python:



formatter

linter

type checking



TypeScript:



ESLint

formatter

TypeScript compiler checks



Do not permit large amounts of ignored lint/type errors.

33. TYPE SAFETY

Backend:



Use type hints throughout application/service/util layers.



Frontend:



Use TypeScript strictly.



Avoid:

any


unless there is a documented reason.



API response types should be explicit.

34. BUSINESS LOGIC

Do not put complicated business logic directly into:



React JSX

Django views

serializers containing hundreds of lines

model methods that become huge



Use focused services/use-case functions where appropriate.



Example:

catalog/
    services/
        product_search.py
        product_queries.py


or an equivalent clean architecture.



Do not create a service layer merely for simple CRUD.



Use abstraction where it improves maintainability.

35. DATABASE PERFORMANCE

Avoid N+1 queries.



Use appropriate:



select_related

prefetch_related

indexes

pagination



Do not fetch the entire product database when showing one page.



Use database-side filtering/searching.

36. ERROR HANDLING

Backend:



consistent error schema

proper HTTP status codes

no stack traces in production



Frontend:



loading

error

empty

success states



Create a reusable error-handling mechanism instead of implementing unrelated error logic in every component.

37. SEO

Implement:



page titles

meta descriptions

canonical URLs

sitemap

robots.txt

OpenGraph metadata

semantic HTML

structured data where appropriate



Local business structured data must only contain true information.



Do not fabricate reviews or ratings.

38. ACCESSIBILITY

Must support:



semantic HTML

keyboard navigation

labels

focus states

alt text

accessible forms

correct heading hierarchy

sufficient contrast

screen-reader-friendly controls



Do not use icons without accessible names.

39. PERFORMANCE

Optimize:



image sizes

lazy loading

API requests

frontend bundle

database queries

caching where justified



Do not prematurely introduce complex caching infrastructure.



Every optimization must have a measurable reason.

40. DOCKER

The entire system must be Dockerized.



Required:

Dockerfile
docker-compose.yml
docker-compose.prod.yml
.dockerignore


Services:

frontend
backend
postgres
nginx


Use production-grade images.



Do not use latest image tags for infrastructure.



Pin the tested image versions.

41. CONTAINER DESIGN

Containers should have one clear responsibility.



Avoid:

one container running everything


Frontend build/runtime should be optimized.



Backend should run a production server.



PostgreSQL should use a persistent volume.



Nginx should handle reverse proxy/static delivery as appropriate.

42. DOCKER SECURITY

Production containers should:



avoid root where practical

have minimal packages

use multi-stage builds where useful

have health checks

not contain secrets

not contain development tooling unless required

43. PRODUCTION CONFIGURATION

Use:

.env.example


Required configuration should include:

SECRET_KEY
DEBUG
ALLOWED_HOSTS
CSRF_TRUSTED_ORIGINS

DATABASE_URL

CORS_ALLOWED_ORIGINS

BUSINESS_PHONE
BUSINESS_WHATSAPP
BUSINESS_EMAIL
GOOGLE_MAPS_URL

EMAIL_* configuration where required


Never commit:

.env


or production secrets.

44. STATIC/MEDIA

Separate:

static
media


Use Django's current recommended static-file configuration.



Run:

collectstatic


as part of deployment.



Media must persist independently of the application container.



Architecture should allow future migration to S3-compatible storage.

45. HEALTH CHECKS

Implement:

/health/


or equivalent endpoints.



Check application health.



Database health should be separately detectable.



Docker Compose should include health checks.

46. TESTING

Create automated tests for:

Backend

models

constraints

permissions

API

filtering

search

pagination

forms

validation

rate limiting

health checks

Frontend

routing

components

API integration

loading/error states

forms

major user journeys

End-to-end

Test:

customer visits website
        ↓
browses product
        ↓
opens product
        ↓
submits enquiry
        ↓
admin sees enquiry


Also test:

customer
   ↓
repair request
   ↓
admin


and:

student
   ↓
project request
   ↓
admin


47. CI/CD

Create GitHub Actions.



Pipeline:

install dependencies
        ↓
dependency/security checks
        ↓
lint
        ↓
type check
        ↓
backend tests
        ↓
frontend tests
        ↓
frontend production build
        ↓
Docker build


Any failure must fail CI.

48. DATABASE MIGRATIONS

All schema changes must use Django migrations.



Never manually modify production database structure.



CI should verify migration consistency.

49. DOCUMENTATION

README must explain:



architecture

folder structure

technology versions

development

Docker

environment variables

migrations

admin

testing

production deployment

backup/restore

troubleshooting



A new developer should be able to understand the project without asking the original author.

50. ARCHITECTURE DOCUMENTATION

Create:

docs/
├── architecture.md
├── development.md
├── deployment.md
├── database.md
├── api.md
└── maintenance.md


Explain why major architectural decisions were made.

51. MAINTAINABILITY

The project should follow this rule:

Prefer boring, explicit, obvious code over clever code.

A human developer should be able to safely modify:



products

services

forms

business details

API

frontend pages

database models



without understanding the entire codebase.

52. NO OVER-ENGINEERING

Do NOT introduce:



microservices

Kubernetes

Kafka

Redis

GraphQL

event buses

complicated CQRS

unnecessary message queues



unless an actual requirement appears.



The application is a business website.



Use the simplest architecture that can be deployed and maintained professionally.

53. OBSERVABILITY

Provide production-friendly logging.



Logs must include enough information to diagnose:



application failures

API failures

database failures



Do not log:



passwords

secrets

tokens

customer-sensitive information unnecessarily

54. DATABASE BACKUP

Document PostgreSQL backup and restoration.



Use standard PostgreSQL tools.



Backups must not be committed to Git.

55. DEMO DATA

Provide an optional seed command.



Example:

python manage.py seed_demo_data


Demo data must be clearly distinguishable.



Never fabricate:



customer reviews

testimonials

awards

business statistics

56. FINAL DEPLOYMENT

Production must work with:

docker compose -f docker-compose.prod.yml up -d --build


The application must support:



domain configuration

HTTPS

PostgreSQL persistence

static files

media files

migrations

admin

health checks

57. CLEAN CHECKOUT REQUIREMENT

The ultimate test is:

fresh clone
    ↓
copy .env configuration
    ↓
docker compose build
    ↓
docker compose up
    ↓
database migration
    ↓
admin creation
    ↓
website works


No undocumented manual steps are allowed.

58. FINAL AUDIT

Before declaring completion, inspect the entire codebase.



Check:

Architecture

Is every module logically separated?

Is responsibility clear?

Are there giant files?

Is business logic duplicated?

Dependencies

Are all dependencies current stable?

Any deprecated package?

Any deprecated API?

Any abandoned package?

Any unnecessary package?

Any known security vulnerability?

Backend

migrations correct?

APIs tested?

permissions correct?

database optimized?

Frontend

responsive?

accessible?

type-safe?

no legacy React APIs?

no duplicated components?

Security

no secrets committed?

DEBUG disabled in production?

CORS restricted?

CSRF configured?

secure cookies?

rate limiting?

Docker

reproducible?

minimal images?

health checks?

persistent database?

production server?

Nginx?

Deployment

clean checkout works?

production compose works?

database persists?

static/media work?

59. DEFINITION OF DONE

The project is complete only when ALL are true:



 Functional requirements from the original repository are implemented.

 React frontend is complete.

 Django REST backend is complete.

 PostgreSQL database is complete.

 Django Admin is complete.

 Product catalogue works.

 Service catalogue works.

 Project catalogue works.

 Enquiry system works.

 Repair requests work.

 Product enquiries work.

 Project requests work.

 Contact works.

 WhatsApp integration works where configured.

 Responsive UI works.

 SEO implemented.

 Accessibility implemented.

 Automated tests pass.

 CI passes.

 Dependency/security audit passes.

 No deprecated technologies are used.

 No abandoned dependencies are used.

 Dependencies are pinned and reproducible.

 Docker development environment works.

 Docker production environment works.

 PostgreSQL data persists.

 Static files work.

 Media files work.

 Health checks work.

 Production security settings work.

 Documentation is complete.

 A new developer can understand and maintain the project.

FINAL PRINCIPLE

The final system must not merely be "working."



It must be:



MODULAR + CURRENT + STABLE + SECURE + TESTED + HUMAN-MAINTAINABLE + DOCKERIZED + DEPLOYABLE.



Never sacrifice maintainability merely to finish faster.



Never introduce a deprecated technology merely because it is familiar.



Never use an unstable release merely because its version number is higher.



Always prefer the newest stable, actively maintained, officially supported solution that fits the architecture.