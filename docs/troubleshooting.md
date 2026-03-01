---
sidebar_position: 9
---

# Troubleshooting

Diese Seite sammelt die haeufigsten Setup- und Runtime-Probleme aus der MVP-Implementierung.

## 1) `@rnmapbox/maps native code not available`

**Symptom**
- App startet, aber Mapbox meldet fehlenden nativen Code.

**Ursache**
- App laeuft in Expo Go statt Dev Client, oder kein aktueller native Build installiert.

**Fix**
- `npx expo run:android`
- `npx expo start --dev-client`
- Sicherstellen, dass die Dev-Client-App gestartet wird (nicht Expo Go).

## 2) `No development build (...) is installed`

**Symptom**
- Metro laeuft, aber Expo findet keine installierte Dev Build App.

**Fix**
- Geraet checken: `adb devices`
- Paket checken: `adb shell pm list packages | rg asphaltghost`
- Falls noetig: `cd android; .\gradlew installDebug; cd ..`
- Danach erneut: `npx expo start --dev-client`

## 3) `Unsupported class file major version ...`

**Symptom**
- Gradle Build bricht bei Java-Version ab.

**Ursache**
- Falsche JDK-Version (zu neu).

**Fix**
- JDK 17 installieren und aktivieren (`JAVA_HOME` auf JDK 17 setzen).
- Gradle Daemon neu starten/clean build ausfuehren.

## 4) `SDK location not found`

**Symptom**
- Android Build findet kein SDK.

**Fix**
- PowerShell env setzen:
  - `$env:ANDROID_HOME="C:\Users\quent\AppData\Local\Android\Sdk"`
  - `$env:ANDROID_SDK_ROOT="C:\Users\quent\AppData\Local\Android\Sdk"`
- Optional `android/local.properties`:
  - `sdk.dir=C:/Users/quent/AppData/Local/Android/Sdk`

## 5) Docusaurus Build bricht wegen Broken Links

**Symptom**
- `npm run build` in `docs-site` bricht mit Broken Links.

**Fix**
- Startseite sicher auf `/` legen (z. B. `slug: /` in `docs/intro.md`).
- Relative Links im Docs-Baum verwenden (`./setup`, `./deployment`, ...).

## 6) Supabase Auth Link geht auf `localhost:3000`

**Symptom**
- Email-Bestaetigungslink oeffnet localhost statt App.

**Fix**
- Supabase -> Authentication -> URL Configuration:
  - Redirect URL: `asphaltghost://login`
  - optional fuer Dev: `exp+asphaltghost://**`
- Bei Signup `emailRedirectTo` auf App-Scheme setzen.

## 7) Supabase Query Fehler / leere Daten

**Symptom**
- Spots/Feed bleiben leer oder werfen Policy/Relation Errors.

**Ursache**
- Migrationen nicht vollstaendig ausgefuehrt.

**Fix**
- Migrationen `0001` bis `0008` in Reihenfolge ausfuehren.
- Danach Smoke-Test fuer Spot-, Moderation- und Feed-Flows.

## 8) Spot Moderation funktioniert fuer falsche Nutzer

**Symptom**
- Nicht-Moderatoren koennen freigeben oder Moderatoren sehen pending nicht.

**Fix**
- `0007_mvp_auth_and_moderation_hardening.sql` und `0008_moderation_policy_finalize.sql` sicher anwenden.
- `moderators` Tabelle pruefen und mindestens einen Moderator hinterlegen.

## 9) Edge Function Analyse liefert keine Daten

**Symptom**
- KI-Analyse ruft Function auf, aber Ergebnis fehlt oder ist Fehler.

**Fix**
- Function deployen: `supabase functions deploy analyze-spot`
- Secret setzen: `supabase secrets set OPENAI_API_KEY=<key>`
- Function Logs in Supabase pruefen.

## 10) Typed Routes Fehler bei dynamischen Pfaden

**Symptom**
- `router.push("/post/${id}")` wirft TypeScript Fehler.

**Fix**
- Objektform fuer dynamische Segmente nutzen:
  - `router.push({ pathname: "/post/[id]", params: { id } } as never)`
