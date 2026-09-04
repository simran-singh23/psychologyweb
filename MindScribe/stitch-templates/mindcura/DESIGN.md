---
name: MindCura
colors:
  surface: '#f1fcf7'
  surface-dim: '#d1ddd8'
  surface-bright: '#f1fcf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf6f1'
  surface-container: '#e5f0eb'
  surface-container-high: '#dfebe6'
  surface-container-highest: '#dae5e0'
  on-surface: '#141e1b'
  on-surface-variant: '#414944'
  inverse-surface: '#28332f'
  inverse-on-surface: '#e8f3ee'
  outline: '#717974'
  outline-variant: '#c0c8c2'
  surface-tint: '#3a6753'
  primary: '#134231'
  on-primary: '#ffffff'
  primary-container: '#2d5a47'
  on-primary-container: '#9fcfb7'
  inverse-primary: '#a1d1b9'
  secondary: '#99462a'
  on-secondary: '#ffffff'
  secondary-container: '#fe9572'
  on-secondary-container: '#762c12'
  tertiary: '#00442f'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c5c45'
  on-tertiary-container: '#93d2b5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcedd4'
  primary-fixed-dim: '#a1d1b9'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#214f3d'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59e'
  on-secondary-fixed: '#390b00'
  on-secondary-fixed-variant: '#7a2f15'
  tertiary-fixed: '#b0f0d2'
  tertiary-fixed-dim: '#95d4b6'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#0c513a'
  background: '#f1fcf7'
  on-background: '#141e1b'
  surface-variant: '#dae5e0'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: ebGaramond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: ebGaramond
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-md:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: plusJakartaSans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: plusJakartaSans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
  max-content-width: 1200px
---

## Brand & Style
This design system pairs clinical rigor with restorative sanctuary. Designed for a high-trust therapeutic and psychiatric counseling platform, the aesthetic balances scholarly authority with compassionate care. 

The emotional posture is deeply grounding, unhurried, and intellectually reassuring. It achieves this balance through an editorial-meets-clinical aesthetic: tranquil sage greens anchor the emotional tone, warm organic alabasters remove clinical coldness, and literary typography honors human depth. Interface surfaces must convey quiet stillness—free of chaotic stimuli, high-velocity micro-interactions, or harsh contrast.

## Colors
The color palette establishes a grounded therapeutic sanctuary, avoiding standard sterile clinical blues and abrasive alerts.

- **Primary (`#2D5A47`)**: Deep Forest Sage. Conveys restorative clinical authority, confidentiality, and biological harmony. Applied to primary navigational anchors, dominant calls to action, and core identity markers.
- **Secondary (`#D97757`)**: Warm Earthen Terracotta. Provides warm, humanizing contrast. Used deliberately for focal highlights, active reflective prompts, urgent appointments, and gentle attention cues.
- **Tertiary (`#3E7B62`)**: Muted Moss Green. Serves as supporting tone for secondary actions, active session indicators, and successful clinical progress states.
- **Neutral (`#1A2421`)**: Deep Charcoal Slate. A tinted, softened black that prevents ocular fatigue during extended journaling and intake review. Secondary body copy uses `#2C3834`.
- **Canvas & Surfaces**: The base application background rests on Warm Alabaster Sand (`#FAF8F5`), shifting to Warm Cream (`#F4EFEA`) for secondary container elevation and `#E8F0EB` (Soft Sage Tint) for supportive card fills and calm thematic groupings.
- **Semantic Mappings**:
  - Success/Safe: Soft Sage (`#3E7B62`)
  - Caution/Alert: Warm Ochre (`#C88A36`)
  - Critical/Crisis Support: Deep Rust (`#A94438`)
  - Surface Stroke: Whisper Slate (`rgba(44, 56, 52, 0.08)`)

## Typography
The typographic architecture blends humanistic scholarship with functional readability:

- **EB Garamond** anchors all editorial displays, section intros, therapeutic narratives, and reflective section titles. Its classic calligraphic proportion radiates academic depth, historical grounding, and warm intellect.
- **Plus Jakarta Sans** is the operational workhorse for all user interface patterns, medical record cards, intake forms, micro-labels, and quantitative therapeutic logs. Its soft, modern geometry provides optical clarity without sterile mechanical hardness.
- Generous line heights (`1.6x` to `1.7x` on body copy) enforce an unhurried, digestible reading cadence necessary for patients in heightened stress states.

## Layout & Spacing
The layout follows a centered, breath-oriented grid structure that resists density and cognitive overload.

- **Grid Architecture**: 12-column responsive grid on desktop with a capped maximum width of `1200px` to maintain comfortable eye movement. Tablet utilizes an 8-column layout; mobile collapses to a single or 4-column flow.
- **Breathing Room**: Vertical margins are intentionally 20% more expansive than conventional productivity dashboards. Spacing tiers `space-2xl` (`3rem`) and `space-3xl` (`4.5rem`) separate mental wellness modules, session overviews, and qualitative notes.
- **Reading Rhythm**: Clinical note containers and journal inputs are capped at a line length of 65 to 72 characters, centering patient reflections within ample horizontal margins.

## Elevation & Depth
This design system rejects deep drop shadows, heavy multi-layered stacking, and harsh black drop-offs. Visual hierarchy relies on **tonal layers paired with ultra-diffused atmospheric shadows**:

- **Ground Plane**: Base canvas sits on `#FAF8F5`.
- **Level 1 (Clinical & Reflection Cards)**: Rendered in pure `#FFFFFF` or `#F4EFEA`, framed with an imperceptible hairline border (`1px solid rgba(44, 56, 52, 0.07)`), casting a tinted ambient shadow: `0 4px 20px -2px rgba(45, 90, 71, 0.05)`.
- **Level 2 (Popovers, Dropdowns, Session Drawers)**: Pure `#FFFFFF`, floating with `0 12px 32px -4px rgba(26, 36, 33, 0.08)`.
- **Level 3 (Modal Sanctuary Overlays)**: Accompanied by a gentle sage-tinted translucent backdrop blur (`rgba(250, 248, 245, 0.85)` with `backdrop-filter: blur(8px)`), drawing focus toward the immediate clinical dialog without inducing claustrophobia.

## Shapes
The shape philosophy creates gentle visual containment. Sharp, acute geometry triggers subconscious alert reflexes, so elements utilize soft, organic curvatures:

- Standard structural units, card surfaces, and form controls employ a baseline radius of `0.5rem` (8px).
- Large thematic cards, wellness dashboard panels, and modal containers use `rounded-xl` (`1.5rem` / 24px).
- Contextual pill tags, status pills, and primary interactive buttons adopt smooth capsule styling to emphasize tactile safety and warmth.

## Components

### Buttons
- **Primary**: Solid Deep Sage (`#2D5A47`) with crisp white Plus Jakarta Sans text (`label-md`). Hover transitions smoothly to Muted Moss (`#3E7B62`) with subtle tactile depression. Border radius is fully pill-shaped (`9999px`) or `0.5rem` depending on container scale.
- **Secondary / Warm Accent**: Outlined in deep sage with transparent background, or solid Terracotta (`#D97757`) for crucial action points (such as "Book Session" or "Crisis Helpline").
- **Ghost / Narrative**: Unbordered, text-colored (`#2D5A47`), featuring an understated underline on hover for academic and reflective links.

### Input Fields & Intake Forms
- Background filled with Soft Cream (`#F4EFEA`) to mitigate the harsh glare of stark white input boxes.
- Framed with a 1px border of `rgba(44, 56, 52, 0.12)`.
- Focus state activates an elegant transition: background shifts to pure `#FFFFFF`, accompanied by a 1px Deep Sage border (`#2D5A47`) and a soft ring shadow (`0 0 0 3px rgba(62, 123, 98, 0.15)`). No aggressive browser-default outlines.
- Labels are set in `label-md`, positioned consistently above the input with ample micro-spacing.

### Cards & Clinical Panels
- Cards use subtle dual tones: either white surface on warm alabaster canvas, or Soft Sage Tint (`#E8F0EB`) for supportive diagnostic takeaways.
- Header sections within cards feature EB Garamond `headline-sm` or `headline-md`, punctuated by quiet horizontal dividers in `rgba(44, 56, 52, 0.06)`.
- Internal padding is generous (`space-lg` to `space-xl`).

### Chips & Badges
- Filter chips and mood/state tags utilize muted earth tones: Soft Sage (`#E8F0EB` background with `#2D5A47` text) or Terracotta Tint (`#FAF0EC` with `#D97757` text).
- Rounded pill geometry (`9999px`), padding `6px 14px`, typographic scale `label-sm`. Active selection state is signaled by solid sage fill with light text.

### Checkboxes & Radio Buttons
- Rounded check containers (4px radius) and concentric circular radios.
- Inactive state: 1.5px border of `#2C3834` at 30% opacity against warm cream.
- Checked state: Smooth fill with Deep Sage (`#2D5A47`), featuring a clean white checkmark or center pip. 

### Therapeutic & Clinical Specials
- **Reflective Quote & Insight Blocks**: Wide margins, centered or left-bordered with a 3px Warm Terracotta vertical rail, set in italicized EB Garamond (`body-lg`) to highlight breakthroughs, journal excerpts, and psychoeducational principles.
- **Session Status Banners**: Soft, low-saturation banners utilizing `#E8F0EB` with quiet sage icons, assuring the client of privacy, encryption, and calm readiness.