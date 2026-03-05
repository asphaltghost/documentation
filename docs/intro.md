# AsphaltGhost – Ueberblick

AsphaltGhost ist eine mobile Community-App fuer die Auto-Szene: Drift-Spots und Tuning-Treffen finden, einreichen und bewerten, plus Community-Feed.

## Tech Stack

- **App:** Expo SDK 54, Expo Router v6, TypeScript, React Query, Zustand
- **Karte:** react-native-maps mit Google Maps (PROVIDER_GOOGLE)
- **Backend:** Supabase (Auth, PostgreSQL, Storage, Edge Functions)
- **Push:** Expo Notifications (Moderator-Benachrichtigungen, taegliche Erinnerung optional)

## Kernfunktionen (MVP)

- **Auth:** Login mit E-Mail oder Username; Profil mit optionalem Vor-/Nachnamen
- **Spot-Map:** Karte mit approved Spots, Filter, Ghost-Marker, Spot-Detail als Modal
- **Spot einreichen:** Adresssuche + Kartenauswahl; KI-Analyse; Bild-Safety
- **Bewertung und Kommentare:** 1-5 Sterne, Kommentar; Bewertung bearbeiten/loeschen
- **Feed:** Chronologischer Feed, Post erstellen, Like/Kommentar, Post-Detail
- **Moderation:** Pending Spots und Reports; Moderatoren-Push
- **Admin:** Moderatoren zuweisen; User loeschen
- **Einstellungen:** Map-Style, Haptik, Push-Erinnerung; Profil/Account; Account loeschen (2-Schritt)

## Homepage (optional)

Separates Vite-Projekt in `homepage/`: Waitlist-Signup und App-Config (app_live, Store-URLs) ueber Edge Functions **waitlist-signup** und **app-config**; kein Supabase-Client im Frontend. Siehe [Setup](./setup.md#optional-homepage-vite).

## Weitere Docs

- Repo `docs/`: ARCHITECTURE, DATABASE, SETUP, DEPLOYMENT, DECISIONS, DESIGN
- Plan: `asphaltghost-mvp-plan.md` (vollstaendiger MVP-Bauplan)
