---
sidebar_position: 6
---

# Deployment

## Zielbild

Kurzfristig: interne Android Beta (Dev Client / APK).  
Spaeter: Store-Release fuer Android und iOS via EAS.

## Lokaler Build (Android Dev)

- `npx expo run:android`
- `npx expo start --dev-client`

## EAS Vorbereitung

1. EAS Login:
   - `eas login`
2. Projekt konfigurieren:
   - `eas build:configure`
3. Build Profile in `eas.json` pruefen:
   - `development`
   - `preview`
   - `production`

## EAS Build Beispiele

- Development:
  - `eas build --profile development --platform android`
- Preview:
  - `eas build --profile preview --platform android`
- Production:
  - `eas build --profile production --platform all`

## Supabase Deployment

### Migrationen

- per SQL Editor ausfuehren oder via Supabase CLI Workflow.

### Edge Function

1. Secret setzen:
   - `supabase secrets set OPENAI_API_KEY=<key>`
2. Deploy:
   - `supabase functions deploy analyze-spot`

## GitHub Pages (docs-site)

Die Docusaurus Site wird ueber den Workflow `docs-site/.github/workflows/deploy.yml` bei Push auf `main` deployed.

Voraussetzungen im `documentation` Repo:

- `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`
- Schreibrechte fuer GitHub Actions (Standard fuer Repository Workflows)

## Go-Live Check vor Beta

- Auth Signup/Login laeuft
- Map zeigt approved Spots
- Submit erstellt pending Spot
- Moderation kann pending -> approved/rejected setzen
- Feed Create/Like/Comment laeuft
- KI Analyse liefert verwertbare Felder
