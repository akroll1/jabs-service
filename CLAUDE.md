# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

jabs-service is a serverless AWS Lambda microservice that manages email subscriptions for the FightSync application. It handles user subscriptions to different notification types (newsletters, beta updates, reminders, welcome emails) and provides unsubscribe functionality.

**Stack:** TypeScript, Node.js 20, Express 5, Mongoose/MongoDB, AWS Lambda via Serverless Framework

## Common Commands

```bash
# Run locally with hot reload (serverless-offline on port 19070)
npm run dev

# Deploy to AWS
serverless deploy --stage v1

# Lint
npx eslint .
```

## Architecture

```
src/
├── app.ts                 # Express setup, middleware chain, route mounting
├── controllers/           # HTTP request handlers
├── services/              # Business logic (jabs.service.ts, ses.service.ts)
├── models/                # Mongoose schemas
├── domain/                # Domain objects with class-validator decorators
├── middlewares/           # Express middleware (DB connection init)
└── common/                # Shared enums, types, interfaces
```

**Key patterns:**
- Layered architecture: Controller → Service → Model
- Domain objects use class-validator for validation decorators
- MongoDB connection pooling is cached for Lambda cold starts (see `atlas-connection.ts`)
- Path alias `@/*` maps to `src/*`

## Environment Configuration

Environment variables are loaded from `.env.v1.json` (not committed). Key variables:
- `FSL_PROD_MONGODB_URI` / `FSL_DEV_MONGODB_URI` - MongoDB Atlas connection strings
- `FSL_ENV` - Environment (dev/prod) controls connection pool size

## Email Types (JabType enum)

Located in `src/common/enums.ts`: ALL (unsubscribe only), CORNER_INVITE, NEWSLETTER, REMINDERS, WEEKLY_FIGHTS_UPDATE, WELCOME
