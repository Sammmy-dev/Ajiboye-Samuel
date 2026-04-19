# Design System Document
 
## 1. Overview & Creative North Star
 
### Creative North Star: "The Editorial Architect"
This design system moves beyond the standard "software developer portfolio" by adopting the visual language of high-end editorial magazines and curated content creators. It treats code as craft and projects as features in a premium publication. 
 
The system rejects the rigid, predictable "box-and-grid" layout of modern SaaS. Instead, it embraces **Intentional Asymmetry** and **Aggressive Contrast**. By utilizing oversized typography, overlapping image-to-text treatments, and bold color blocking, the system creates a digital experience that feels bespoke, authoritative, and deeply creative. We aren't just building a site; we are curating a legacy.
 
---
 
## 2. Colors
 
The palette is a sophisticated blend of acidic modernism and earthy heritage. It uses high-contrast pairings to guide the eye and define hierarchy without the need for structural lines.
 
- **Primary (`#F1F27C`):** Lime Yellow. Use as a high-visibility signal. It should be used for critical calls-to-action, hero accents, and brand moments.
- **Surface/Background (`#141313`):** A deep, near-black charcoal that provides the "ink" for our editorial canvas.
- **Secondary/Tertiary (`#C58A21`, `#38401B`):** Ochre and Olive. These are used for tonal depth, providing a bridge between the neon Primary and the dark Surface.
 
### The "No-Line" Rule
Sectioning must be achieved through color blocking, never through 1px solid borders. To separate "About" from "Projects," transition the background from `surface` to `surface_container_low`. If you need a divider, use a significant jump in tonal value or a wide vertical gutter of empty space.
 
### Surface Hierarchy & Nesting
Depth is created by stacking "ink levels" rather than adding shadows.
- **Base Layer:** `surface` (#141313)
- **Secondary Sections:** `surface_container_low` (#1C1B1B)
- **Interactive Cards:** `surface_container_high` (#2A2A29) sitting on a lower base.
This "nested" approach makes the UI feel like a physical stack of premium matte cardstock.
 
### The Glass & Gradient Rule
To add "soul" to the professional polish:
- **Glassmorphism:** For navigation bars or floating status chips, use `surface` at 70% opacity with a `24px` backdrop blur.
- **Signature Textures:** Use a subtle radial gradient on large hero backgrounds, transitioning from `surface` to a slightly lifted `surface_bright` to prevent the dark areas from feeling "dead."
 
---
 
## 3. Typography
 
Typography is the primary engine of this design system. It balances the "Old World" elegance of a serif with the "Digital Native" clarity of a sans-serif.
 
- **Display & Headline (Noto Serif):** Bold, italicized, and elegant. These tokens (`display-lg` to `headline-sm`) are for brand statements and section titles. They should often be oversized, occasionally overlapping containers to break the "grid."
- **Body (Inter):** Clean and minimalist. Used for all long-form text. The contrast between the ornate serif and the functional sans-serif creates a "professional but creative" vibe.
- **Labels (Work Sans):** Monospaced-adjacent feel. Used for metadata (e.g., "DATE // 2024" or "TECH STACK").
 
**Hierarchy Note:** Use `display-lg` for the most important word in a sentence, and pair it with a `body-lg` description to create an editorial "pull-quote" effect.
 
---
 
## 4. Elevation & Depth
 
We avoid the "material" look of floating shadows. Instead, we use **Tonal Layering**.
 
- **The Layering Principle:** A card does not "float" via a shadow; it exists because its background color (`surface_container_highest`) is distinct from the section it sits on (`surface`).
- **Ambient Shadows:** Only use shadows for high-priority overlays (like Modals). Use the "on-surface" color as the shadow tint at 5% opacity with a massive 60px blur to mimic natural room light.
- **The Ghost Border:** For input fields or secondary buttons, use `outline_variant` at 15% opacity. If a border feels like a "line," it is too heavy. It should feel like a "whisper" of a boundary.
- **Sharpness:** The `roundedness` scale is set to `0px`. Everything is sharp, architectural, and deliberate.
 
---
 
## 5. Components
 
### Buttons
- **Primary:** Background: `primary` (#FFFFFF), Text: `on_primary`. Sharp edges. Large horizontal padding.
- **Secondary:** Background: `secondary_container` (#C0851C), Text: `on_secondary`. 
- **Ghost CTA:** No background. `label-md` text with a `primary` underline that expands on hover.
 
### Cards
Cards must not have borders. Use background color shifts. For a "Project" card:
- Use `surface_container_high`.
- Use high-quality, high-contrast photography that fills at least 60% of the card area.
- Typography should overlap the image slightly to create a layered, editorial feel.
 
### Input Fields
- Underline-only or `Ghost Border` (10% opacity). 
- Active state: The underline shifts to `primary` (Lime Yellow).
- Label: Use `label-sm` in all-caps, positioned above the field.
 
### Chips & Tags
- Used for tech stacks. 
- Style: `surface_container_highest` background with `on_surface_variant` text. Sharp corners.
 
### Lists
- Forbid dividers. Use `24px` to `32px` of vertical white space to separate list items. 
- Use the `primary` (Lime Yellow) for bullet points—ideally as a custom shape like a 4-pointed star (as seen in the Brand Guide).
 
---
 
## 6. Do's and Don'ts
 
### Do
- **Do** use intentional white space. If a layout feels "full," it isn't premium.
- **Do** overlap elements. Let a serif headline bleed over the edge of a photograph.
- **Do** use large, high-resolution photography with a consistent color grade that matches the ochre/olive palette.
- **Do** use "all-caps" for small labels to create an authoritative, metadata-heavy aesthetic.
 
### Don't
- **Don't** use rounded corners. This system is built on the precision of 90-degree angles.
- **Don't** use standard blue for links. Links are either `primary` (Lime Yellow) or underlined body text.
- **Don't** add shadows to cards to make them "pop." Use a lighter surface color instead.
- **Don't** use 1px solid borders to define the layout. Let the background colors do the work.
 
---