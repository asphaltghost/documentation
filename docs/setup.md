---
sidebar_position: 2
---

# Setup

Dieses Dokument beschreibt das lokale Setup fuer die AsphaltGhost App (Expo SDK 54 + Supabase + react-native-maps mit Google Maps) auf Windows.

## Voraussetzungen

- Node.js 20.x (LTS)
- npm
- JDK 17
- Android Studio (inkl. SDK, Emulator, Platform-Tools)
- Supabase Projekt
- Google Maps API Key (Karte und ggf. Geocoding)

## Projekt starten

1. Repository klonen (inkl. Submodule fuer docs-site/homepage):
   - `git clone --recurse-submodules git@github.com:AsphaltGhost/base-app.git`
2. In den Projektordner wechseln:
   - `cd base-app`
3. Dependencies installieren:
   - `npm install`
4. `.env` anlegen (z. B. aus `.env.example`):
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY` (oder in app.json unter ios.config / android.config)
5. **Google Maps API Key:** In `app.json` oder ueber `app.config.js`/`.env` setzen. Ohne gültigen Key bleibt die Karte leer/grau. Dev Build erforderlich (Expo Go uebergibt den Key nicht an die native Karte).

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

## Dev Client Build (Karte & Push)

Die Karte (react-native-maps) und Push (expo-notifications) benoetigen einen Development Build. In Expo Go wird der Google-Maps-API-Key nicht an die native Karte uebergeben.

1. Android Dev Build bauen und installieren:
   - `npx expo run:android`
2. Metro fuer Dev Client starten:
   - `npx expo start --dev-client`

Auth-Session wird ueber **AsyncStorage** persistiert (nicht SecureStore).

## Supabase Basis

Im SQL Editor in Reihenfolge ausfuehren: Migrationen von `0001_init_schema.sql` bis `0024_app_public_config.sql`. Vollstaendige Liste siehe [Database](./database.md).

## Edge Function Deployment

1. Supabase CLI login/link:
   - `supabase login`
   - `supabase link --project-ref <project-ref>`
2. Secrets:
   - `supabase secrets set OPENAI_API_KEY=<key>` (fuer analyze-spot)
3. Deploy:
   - `supabase functions deploy analyze-spot`
   - `supabase functions deploy notify-moderators`
   - `supabase functions deploy waitlist-signup` (fuer Homepage-Waitlist)
   - `supabase functions deploy app-config` (Homepage: app_live, Store-URLs)

## Auth Redirects

In Supabase -> Authentication -> URL Configuration:

- Redirect URL: `asphaltghost://login`
- Optional fuer Dev: `exp+asphaltghost://**`

## Optional: Homepage (Vite)

- Ordner: `homepage/`. Eigenes Vite + React Projekt.
- Env (siehe `homepage/.env.example`): `VITE_WAITLIST_API_URL`, `VITE_APP_CONFIG_URL`. Kein Supabase-URL/Key im Frontend; Aufruf ueber Edge Functions waitlist-signup und app-config.
- Routen u. a.: `/`, `/app`, `/events`, `/waitlist`, `/waitlist-success`, `/waitlist-error`, `/impressum`, `/datenschutz`.
