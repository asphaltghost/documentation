# Setup – Kurzfassung

Schneller Einstieg für Entwickler. Ausführlich: `docs/SETUP.md` im Repo.

## Voraussetzungen

- Node 20, npm, JDK 17, Android Studio (für Android Build)
- Supabase-Projekt, Google Maps API Key

## Schritte

1. **Repo klonen:** `git clone --recurse-submodules <repo-url>` → `cd base-app`
2. **Install:** `npm install`
3. **Umgebung:** `.env` mit `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`; Google Maps Key in `app.json`
4. **Supabase:** Alle Migrationen von `0001` bis `0020` im SQL Editor ausführen (siehe `docs/DATABASE.md`)
5. **Edge Functions:** `supabase functions deploy analyze-spot` und `supabase functions deploy notify-moderators`; Secret `OPENAI_API_KEY` setzen
6. **Dev Build:** `npx expo run:android` (oder iOS), danach `npx expo start --dev-client`

## Wichtige Hinweise

- **Karte & Push** benötigen einen Development Build (nicht Expo Go).
- **Auth** nutzt AsyncStorage; Redirect in Supabase auf `asphaltghost://login` setzen.
- **Docs (Docusaurus):** Bei Bedarf `cd docs-site && npm install && npm start`.
