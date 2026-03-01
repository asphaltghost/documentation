---
sidebar_position: 8
---

# MVP Acceptance Checklist

Diese Liste ist als kurzer Abnahme-Laufzettel fuer den aktuellen MVP gedacht.

## 10-Punkte-Laufzettel

1. **Auth funktioniert**
   - Registrierung und Login mit Email/Passwort laufen stabil.
   - Redirect nach Login fuehrt in den App-Bereich.

2. **Supabase Basis ist vollstaendig**
   - Migrationen `0001` bis `0008` sind ausgefuehrt.
   - Kern-Tabellen und Buckets sind vorhanden.

3. **Map-Flow ist nutzbar**
   - Karte rendert mit User-Location.
   - Approved Spots werden geladen und Marker sind klickbar.

4. **Spot-Detail ist konsistent**
   - Ratings koennen abgegeben werden.
   - Kommentare koennen gelesen/geschrieben werden.

5. **Spot-Submit funktioniert**
   - Standortwahl, Metadaten und Fotoupload laufen.
   - Neuer Spot landet als `pending`.

6. **KI-Analyse ist aktiv**
   - `analyze-spot` Edge Function ist deployed.
   - `OPENAI_API_KEY` ist als Secret gesetzt.
   - Analyse liefert verwertbare Felder (`surface`, `size`, `description`, `obstacles`).

7. **Moderation ist abgesichert**
   - Nur Moderatoren koennen `pending -> approved/rejected` setzen.
   - Moderatoren sehen alle pending Spots.

8. **Feed funktioniert Ende-zu-Ende**
   - Posts erstellen (inkl. Bilder) funktioniert.
   - Likes und Kommentare funktionieren inkl. Updates im UI.

9. **Profile sind nutzbar**
   - Oeffentliche Profile zeigen User-Infos, Spots und Posts.
   - Link-Navigation aus Feed/Details zu Profilseiten funktioniert.

10. **Build & Runtime Basis steht**
   - Android Dev Client Build startet (`expo run:android` + `expo start --dev-client`).
   - Wichtige Redirects (`asphaltghost://login`) sind in Supabase gesetzt.

## Optionaler Final Smoke-Test (15-20 Min)

- Neuen User registrieren -> einloggen -> Spot submitten -> als Moderator freigeben -> Spot bewerten/kommentieren -> Feed Post erstellen -> Post liken/kommentieren.
