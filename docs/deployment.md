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

- Migrationen 0001 bis 0024 im SQL Editor ausfuehren (siehe [Database](./database.md)).

### Edge Functions

1. Secret: `supabase secrets set OPENAI_API_KEY=<key>` (fuer analyze-spot)
2. Deploy:
   - `supabase functions deploy analyze-spot`
   - `supabase functions deploy notify-moderators`
   - `supabase functions deploy waitlist-signup` (Homepage)
   - `supabase functions deploy app-config` (Homepage: app_live, Store-URLs)

## GitHub Pages (docs-site)

Die Docusaurus Site wird ueber den Workflow `docs-site/.github/workflows/deploy.yml` bei Push auf `main` deployed.

Voraussetzungen im `documentation` Repo:

- `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`
- Schreibrechte fuer GitHub Actions (Standard fuer Repository Workflows)

## Go-Live Check vor Beta

- Auth: Registrierung/Login (E-Mail oder Username), Abmelden
- Map: approved Spots (react-native-maps), Filter
- Spot einreichen: pending Spot (Adresse + Map-Pick), KI-Analyse, Bild-Safety
- Moderation: pending -> approved/rejected; Reports
- Feed: Post erstellen, Like, Kommentar; Post-Detail
- Spot-Detail: Bewertung (Bearbeiten/Loeschen), Kommentare
- Push: Moderator-Benachrichtigungen; Einstellungen (taegliche Erinnerung, Profil, Account loeschen)
- Homepage (falls genutzt): Waitlist-Signup, App-Config (app_live, Store-URLs)
