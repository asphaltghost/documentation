---
sidebar_position: 2
---

# Setup

Dieses Dokument beschreibt das lokale Setup fuer die AsphaltGhost App (Expo + Supabase + Mapbox) auf Windows.

## Voraussetzungen

- Node.js 20.x (LTS)
- npm
- JDK 17
- Android Studio (inkl. SDK, Emulator, Platform-Tools)
- Supabase Projekt
- Mapbox Access Token

## Projekt starten

1. Repository klonen:
   - `git clone --recurse-submodules git@github.com:AsphaltGhost/base-app.git`
2. In den Projektordner wechseln:
   - `cd base-app`
3. Dependencies installieren:
   - `npm install`
4. `.env.example` nach `.env` kopieren und Werte setzen:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN`
5. **Google Maps API Key (für Karten-Tab):** In `app.json` den Platzhalter ersetzen:
   - **iOS:** `expo.ios.config.googleMapsApiKey` → dein Key
   - **Android:** `expo.android.config.googleMaps.apiKey` → dein Key
   - Key erstellen: [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → API Key. APIs aktivieren: **Maps SDK for Android**, **Maps SDK for iOS**.
   - Ohne gültigen Key bleibt die Karte blau/leer (nur „Google“ sichtbar).

## Android Umgebungsvariablen (PowerShell)

```powershell
$env:ANDROID_HOME="C:\Users\quent\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT="C:\Users\quent\AppData\Local\Android\Sdk"
$env:Path="$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator;$env:Path"
```

Wenn Gradle das SDK nicht findet, in `android/local.properties` setzen:

```properties
sdk.dir=C:/Users/quent/AppData/Local/Android/Sdk
```

## Dev Client Build (Mapbox erforderlich)

Mapbox benoetigt einen Dev Build (Expo Go reicht nicht).

1. Android Dev Build bauen und installieren:
   - `npx expo run:android`
2. Metro fuer Dev Client starten:
   - `npx expo start --dev-client`

## Supabase Basis

Im SQL Editor in Reihenfolge ausfuehren:

1. `supabase/migrations/0001_init_schema.sql`
2. `supabase/migrations/0002_rls_policies.sql`
3. `supabase/migrations/0003_storage_buckets.sql`
4. `supabase/migrations/0004_spot_rating_aggregates_trigger.sql`
5. `supabase/migrations/0005_profile_on_signup.sql`
6. `supabase/migrations/0006_spot_moderation_policy.sql`
7. `supabase/migrations/0007_mvp_auth_and_moderation_hardening.sql`
8. `supabase/migrations/0008_moderation_policy_finalize.sql`

## Edge Function Deployment

1. Supabase CLI login/link:
   - `supabase login`
   - `supabase link --project-ref <project-ref>`
2. Secret setzen:
   - `supabase secrets set OPENAI_API_KEY=<key>`
3. Function deployen:
   - `supabase functions deploy analyze-spot`

## Auth Redirects

In Supabase -> Authentication -> URL Configuration:

- Redirect URL: `asphaltghost://login`
- Optional fuer Dev: `exp+asphaltghost://**`
