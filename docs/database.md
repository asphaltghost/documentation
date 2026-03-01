---
sidebar_position: 4
---

# Database

## Uebersicht

PostgreSQL Schema liegt in Supabase, Migrationen im Repo unter `supabase/migrations/`.

Haupttabellen:

- `profiles`
- `spots`
- `spot_ratings`
- `posts`
- `post_likes`
- `comments`
- `moderators`

## Migration Reihenfolge

1. `0001_init_schema.sql`
2. `0002_rls_policies.sql`
3. `0003_storage_buckets.sql`
4. `0004_spot_rating_aggregates_trigger.sql`
5. `0005_profile_on_signup.sql`
6. `0006_spot_moderation_policy.sql`
7. `0007_mvp_auth_and_moderation_hardening.sql`
8. `0008_moderation_policy_finalize.sql`

## RLS / Rollen

- Alle Kern-Tabellen haben RLS aktiv.
- User koennen eigenen Content erstellen.
- Spot-Moderation erfolgt ueber `moderators`.
- Nicht-moderierte Spots sind `pending`.

## Wichtige Trigger/Funktionen

- `handle_new_user_profile()`:
  - erstellt Profil nach Signup automatisch
- `refresh_spot_rating_stats(...)` + Trigger:
  - synchronisiert `avg_rating` und `rating_count` in `spots`

## Storage Buckets

- `spot-photos` (public)
- `post-photos` (public)
- `avatars` (public)

## Edge Functions

- `analyze-spot`
  - Input: `imageBase64`
  - Output: `surface`, `size`, `description`, `obstacles`

## Betriebsnotiz

Nach jeder neuen Migration:

- SQL in Supabase ausfuehren
- bei Policy-Aenderungen Spot- und Feed-Flows kurz smoke-testen
