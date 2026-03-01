---
sidebar_position: 1
slug: /
---

# AsphaltGhost Documentation

Welcome to the AsphaltGhost documentation site.

## Getting Started (5 Minuten)

1. Clone:
   - `git clone --recurse-submodules git@github.com:AsphaltGhost/base-app.git`
2. Install:
   - `cd base-app`
   - `npm install`
3. Configure env:
   - `.env.example` zu `.env` kopieren
   - `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`, `EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN` setzen
4. Build Android Dev Client (wegen Mapbox):
   - `npx expo run:android`
5. Start App:
   - `npx expo start --dev-client`

## Overview

This site centralizes setup, architecture, database, design, deployment, and MVP handoff documentation for `base-app`.

## Documentation Index

- [Setup](./setup)
- [Architecture](./architecture)
- [Database](./database)
- [Design](./design)
- [Deployment](./deployment)
- [Decisions (ADR Light)](./decisions)
- [MVP Acceptance Checklist](./mvp-acceptance)
- [Troubleshooting](./troubleshooting)
