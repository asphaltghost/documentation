---
sidebar_position: 4
---

# Database

## Uebersicht

PostgreSQL Schema liegt in Supabase, Migrationen im Repo unter `supabase/migrations/`.

Haupttabellen:

- `profiles` (first_name, last_name, show_real_name; Login per E-Mail oder Username)
- `spots`, `spot_ratings`
- `posts`, `post_likes`
- `comments` (post_id, spot_id; user_id nullable)
- `moderators`, `admins`
- `reports` (target_type: spot|post, status: open|resolved|dismissed)
- `moderation_push_tokens`
- `waitlist` (E-Mail, name; nur anon INSERT – fuer Homepage)
- `app_public_config` (id=1, app_live, store_url_apple, store_url_play; nur ueber Edge Function lesbar)

## Migration Reihenfolge

Migrationen 0001 bis 0024 in `supabase/migrations/` der Reihe nach ausfuehren. Wichtige zusaetzliche: 0009–0014 (Post-Moderation, Reports, Admin), 0015 delete_own_user_rpc, 0016 auth_username_login_and_realname, 0017 staff_spot_auto_approve, 0018 detach_deleted_user, 0019 spot_duplicate_guard_20m, 0020 moderation_push_tokens, 0021 admins_manage_admins, 0022 storage_delete_policies, 0023 waitlist, 0024 app_public_config.

## RLS / Rollen

- RLS auf allen Kern-Tabellen. Owner-Policies. Moderation ueber `moderators`, Admin ueber `admins` (User/Moderatoren/Admins verwalten). Spots nur approved sichtbar; Staff-Spots auto-approved. `waitlist`: nur anon INSERT. `app_public_config`: nur Admins SELECT/UPDATE; Anon liest ueber app-config Edge Function.

## Wichtige Trigger/Funktionen

- `handle_new_user_profile()`, `refresh_spot_rating_stats()` + Trigger, `resolve_login_email()`, `delete_own_user()`, `trg_auto_approve_staff_spot`, `trg_prevent_spot_duplicate_20m`.

## Storage Buckets

- `spot-photos`, `post-photos`, `avatars` (public). Delete-Policies (0022): User loeschen eigene Objekte; Admins koennen beliebige Avatare loeschen.

## Edge Functions

- **analyze-spot:** imageBase64 (Analyse) oder imageUrl + mode safety (Bild-Safety). Output: surface, size, description, obstacles bzw. allowed, reason.
- **notify-moderators:** type new_report | spot_review_required; Expo Push an Moderatoren/Admins.
- **waitlist-signup:** POST { email, name? }; schreibt in waitlist. Fuer Homepage.
- **app-config:** GET; liefert app_live, store_url_apple, store_url_play aus app_public_config. Fuer Homepage.

## Betriebsnotiz

Nach jeder neuen Migration:

- SQL in Supabase ausfuehren
- bei Policy-Aenderungen Spot- und Feed-Flows kurz smoke-testen
