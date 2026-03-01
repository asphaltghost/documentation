---
sidebar_position: 3
---

# Architecture

## High-Level

AsphaltGhost ist eine mobile Expo App mit Supabase als Backend.

- Frontend: Expo Router + React Native + TypeScript
- Backend: Supabase (Auth, Postgres, Storage, Edge Functions)
- Maps: Mapbox (`@rnmapbox/maps`)
- Data Fetching: React Query
- Local State: Zustand

## App Routing

Routenstruktur (vereinfacht):

- `app/_layout.tsx` - Root Layout, Auth Guard, Provider
- `app/(auth)/login.tsx`, `app/(auth)/register.tsx`
- `app/(tabs)/map.tsx`
- `app/(tabs)/submit.tsx`
- `app/(tabs)/feed.tsx`
- `app/(tabs)/profile.tsx`
- `app/spot/[id].tsx`
- `app/post/[id].tsx`
- `app/profile/[id].tsx`
- `app/create-post.tsx`
- `app/moderation.tsx`
- `app/pick-location.tsx`

## Data Layer

API Layer in `src/api/` kapselt Supabase Zugriff:

- `auth.ts` - Login/Register/Signout
- `spots.ts` - Spot CRUD, Ratings, Comments, AI-Analyze Call
- `posts.ts` - Feed, Create Post, Likes, Post Comments
- `profiles.ts` - Profil und Moderator-Status

Hooks in `src/hooks/` kapseln Query/Mutation Logik (React Query):

- `useSpots`, `useSpotDetail`, `useSubmitSpot`
- `usePosts`, `useProfile`, `useModeration`

## Security Model

- RLS auf allen Haupttabellen aktiv
- Owner-basierte Policies fuer User-Content
- Moderation ueber `moderators` Tabelle und spezielle Spots-Policies

## Native Integration

- Mapbox wird appweit in `src/lib/mapbox.ts` initialisiert
- Supabase Session wird ueber `expo-secure-store` persistiert (`src/lib/supabase.ts`)

## Non-Goals (MVP)

- Keine komplexe Rollenverwaltung ausser Moderation
- Kein umfassendes Analytics/Telemetry Setup
- Kein Production-grade Admin Panel ausser Basis-Moderation-View
