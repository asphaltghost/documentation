---
sidebar_position: 7
---

# Decisions (ADR Light)

Dieses Dokument haelt wichtige Architekturentscheidungen fest.

---

## D-001: Expo Router statt manuelle Navigation

- Status: Accepted
- Kontext: Schnelle MVP-Iteration mit file-based routing.
- Entscheidung: Expo Router als Routing-Standard.
- Konsequenz: Routenstruktur direkt im `app/` Ordner.

## D-002: Supabase als Full-Backend

- Status: Accepted
- Kontext: Auth + DB + Storage + Edge Functions aus einer Hand.
- Entscheidung: Supabase fuer MVP Kern.
- Konsequenz: RLS muss sauber gepflegt werden.

## D-003: Mapbox als Karten-Stack

- Status: Accepted
- Kontext: Auto-Community braucht starke Kartenfunktion.
- Entscheidung: `@rnmapbox/maps` mit Dev Client.
- Konsequenz: Kein Expo Go-only Workflow fuer Kartenfeatures.

## D-004: Moderation via DB-Rolle (moderators Tabelle)

- Status: Accepted
- Kontext: Pending Spot Freigabe darf nicht offen fuer alle sein.
- Entscheidung: Moderation role-basiert per `moderators` Tabelle und RLS.
- Konsequenz: mindestens ein Moderator muss in DB vorhanden sein.

## D-005: KI Spot Analyse via Supabase Edge Function

- Status: Accepted
- Kontext: Feature 6 als Differenzierung im MVP.
- Entscheidung: `analyze-spot` Edge Function ruft OpenAI Vision auf.
- Konsequenz: Secret Management (`OPENAI_API_KEY`) erforderlich.

## D-006: Auth Session in Secure Store

- Status: Accepted
- Kontext: Mobile Token-Persistenz sicherer als AsyncStorage.
- Entscheidung: Supabase Auth Storage Adapter auf `expo-secure-store`.
- Konsequenz: Native Dependency und Dev Build erforderlich.
