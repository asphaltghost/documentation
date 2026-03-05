---
sidebar_position: 5
---

# Design

## Design Prinzip

Dark Purple Glass Minimalist.

Ziele:

- Fokus auf Karteninhalt
- ruhige, dunkle Flaechen
- klare Akzentfarbe fuer Actions

## Farb- und Theme-Grundlagen

Siehe `src/lib/theme.ts`:

- Hintergrund: `#0F0A1E`
- Surface: `#171129`
- Primary: `#6B21A8`
- Accent: `#A855F7`
- Text: `#F2EDFF`

## Map Design

Karte: react-native-maps mit Google Maps. Optional Custom-JSON-Style (Dark) aus `src/lib/mapbox.ts`. Marker-Farben (GhostMarker) nach Spot-Type:
  - drift: `#7C3AED`
  - meet: `#3B82F6`
  - track: `#10B981`
  - parking: `#F59E0B`
  - other: `#6B7280`

## UI Konventionen

- Primaraktionen als volle Buttons mit Accent-Farbe
- Sekundaeraktionen als Chips oder Outlined Buttons
- Karten-Overlays mit transparenter Surface
- Einheitliche Radius/Spacing Token aus `theme.ts`

## Komponentenstatus (MVP)

- Basis UI:
  - `src/components/ui/Button.tsx`
  - `src/components/ui/Input.tsx`
  - `src/components/ui/Screen.tsx`
- Map:
  - `GhostMarker`
  - `SpotPreviewSheet`
- Feed:
  - `PostCard`

## Noch offen nach MVP (spaeteres Polishing)

- einheitliche Skeleton-Loader
- klarere Typografie-Hierarchie
- haptisches Feedback bei Kerninteraktionen
