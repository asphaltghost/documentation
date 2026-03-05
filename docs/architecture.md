---
sidebar_position: 3
---

# Architecture

## High-Level

AsphaltGhost ist eine mobile Expo App mit Supabase als Backend.

- Frontend: Expo SDK 54, Expo Router v6, React Native, TypeScript
- Backend: Supabase (Auth, Postgres, Storage, Edge Functions)
- Maps: react-native-maps mit Google Maps (PROVIDER_GOOGLE), optional Custom-JSON-Style
- Data Fetching: React Query; Local State: Zustand (authStore, appSettingsStore)
- Auth-Persistenz: AsyncStorage (nicht SecureStore)

## App Routing

Routenstruktur (aktuell): _layout (Auth Guard, Push/Reminder-Sync), (auth)/login|register, (tabs)/map|feed|submit|events|profile, spot/[id], post/[id], profile/[id], create-post, submit-spot, pick-location, edit-spot/[id], moderation, admin, settings/index|profile, my-spots, my-posts.

## Data Layer

API Layer in `src/api/` kapselt Supabase Zugriff:

- `auth.ts` - Login/Register/Signout
- `spots.ts` - Spot CRUD, Ratings, Comments, AI-Analyze Call
- `posts.ts` - Feed, Create Post, Likes, Post Comments
- `profiles.ts`, `reports.ts`, `moderationNotifications.ts`

Hooks: useSpots, useSpotDetail, useSubmitSpot, usePosts, useProfile, useModeration, useAppSettings. Edge Functions App: analyze-spot, notify-moderators. Homepage (ohne Supabase-Client): waitlist-signup, app-config.

## Security Model

- RLS auf allen Haupttabellen aktiv
- Owner-basierte Policies fuer User-Content
- Moderation ueber `moderators`, Admin ueber `admins`; Spots nur approved sichtbar; Staff-Spots auto-approved; Duplikat-Guard 20 m.

## Homepage (separates Vite-Projekt)

Ordner `homepage/`: Vite + React. Kein Supabase im Client; Waitlist und App-Config ueber Edge Functions (VITE_WAITLIST_API_URL, VITE_APP_CONFIG_URL). Routen: /, /app, /events, /waitlist, /waitlist-success, /waitlist-error, /impressum, /datenschutz.

## Native Integration

- Karte: react-native-maps, Style aus src/lib/mapbox.ts. Geocoding: expo-location + Nominatim. Push: expo-notifications (Moderatoren-Push, Reminder). Bild-Safety: Edge Function analyze-spot (mode: safety).

## Non-Goals (MVP)

- Keine komplexe Rollenverwaltung ausser Moderation
- Kein umfassendes Analytics/Telemetry Setup
- Kein Production-grade Admin Panel ausser Basis-Moderation-View
