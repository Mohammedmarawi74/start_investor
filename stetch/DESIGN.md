# Design System Specification: High-End Arabic AI Dashboard

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** 

This system is designed to feel less like a software tool and more like a high-end editorial workspace. It moves beyond the "standard dashboard" by prioritizing breathability, sophisticated RTL (Right-to-Left) flow, and a futuristic aesthetic that balances AI-driven power with human-centric softness. We achieve this by rejecting rigid containers in favor of layered surfaces, using dramatic typography scales to command attention, and employing glassmorphism to suggest a multi-dimensional digital environment. The goal is a professional interface that feels premium, intentional, and unmistakably modern.

---

## 2. Colors & Visual Soul
The palette is rooted in Deep Indigo and Vibrant Purple, set against a pristine, multi-tiered neutral canvas.

### The Color Palette (Material Logic)
- **Primary (`#4647d3`):** The core brand anchor. Use for high-emphasis actions.
- **Secondary (`#6a37d4`):** The AI-engine accent. Reserved for vibrant purple highlights and futuristic elements.
- **Surface (`#f5f7f9`):** The primary background. Provides a cool, clean slate.
- **Tertiary (`#006947`):** Reserved for "Success" or "Live" status indicators.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To separate the sidebar from the main content or a header from a grid, use tonal shifts. A `surface-container-low` panel sitting on a `surface` background creates a natural boundary that feels expensive and architectural. Avoid 1px lines that "trap" content.

### Surface Hierarchy & Nesting
Use the surface tiers to create physical depth. 
1. **Base Layer:** `surface` (`#f5f7f9`)
2. **Sectioning:** `surface-container-low` (`#eef1f3`) for large layout blocks.
3. **Interactive Components:** `surface-container-lowest` (`#ffffff`) for cards and white-space-focused elements.
4. **Elevated AI Insights:** `surface-container-highest` (`#d9dde0`) for subtle emphasis.

### Signature Textures: Glass & Gradients
- **Glassmorphism:** For floating modals, sidebar active states, or overlay elements, use `on_surface` at 5% opacity with a `24px` backdrop-blur. 
- **The "AI Glow":** Primary buttons and key data visualizations should utilize a linear gradient from `primary` (`#4647d3`) to `secondary` (`#6a37d4`) to give the UI a living, energetic pulse.

---

## 3. Typography
The system uses a dual-font strategy to balance geometric modernity with Arabic calligraphic heritage.

- **Display & Headlines (Plus Jakarta Sans / Cairo):** Used for large-scale hero numbers and section headers. 
    - *Role:* To project authority and futuristic precision.
    - *Usage:* `display-lg` (3.5rem) for main AI insights; `headline-md` (1.75rem) for card titles.
- **Body & Labels (Manrope / IBM Plex Sans Arabic):** Optimized for high readability in RTL data-dense environments.
    - *Role:* To provide a clean, functional counterpoint to the expressive headlines.
    - *Usage:* `body-md` (0.875rem) for primary descriptions; `label-sm` (0.6875rem) for metadata.

---

## 4. Elevation & Depth
We define space through **Tonal Layering** rather than structural scaffolding.

- **The Layering Principle:** A card does not need a shadow to exist; it needs a contrast in surface tier. Place a `surface-container-lowest` (#FFFFFF) card on a `surface` background to achieve a "Soft Lift."
- **Ambient Shadows:** When a component must float (e.g., a primary action button or a flying AI chip), use an ultra-diffused shadow: `0px 20px 40px rgba(70, 71, 211, 0.08)`. Note the tint: the shadow is a faint purple-blue, not grey, ensuring it feels like light passing through a prism.
- **The "Ghost Border" Fallback:** If a layout requires a container boundary for accessibility, use the `outline-variant` token at **15% opacity**. This creates a hint of a container without breaking the editorial flow.
- **RTL Visual Weight:** In an RTL layout, depth is perceived from the right. Ensure shadows and gradients follow the light source coming from the top-right to align with the reading direction.

---

## 5. Components

### Buttons
- **Primary:** Large radius (`xl`: 3rem), gradient fill (Primary to Secondary), `on_primary` text.
- **Secondary/Glass:** `surface-container-lowest` at 40% opacity, backdrop-blur 12px, with a Primary `Ghost Border`.

### AI-Powered Cards
- **Construction:** Use `surface-container-lowest` with a `lg` (2rem) corner radius. 
- **Interaction:** No dividers. Use `title-md` for the header and `body-sm` for the content, separated by 16px of vertical white space.
- **Status Indicators:** Use the vibrant `tertiary` (green) for "Active" and `error` (red) for "Critical" in a pill-shaped "Chip" format.

### Sidebar (RTL)
- **Positioning:** Fixed to the right.
- **Visuals:** Use `surface-container-low`. The "Active" state for navigation items should not be a box, but a subtle color shift and a `secondary` vertical bar on the right edge of the item.

### Input Fields
- **Styling:** `surface-container-high` background, `none` border, `md` (1.5rem) radius. On focus, transition the background to `surface-container-lowest` and apply a Primary `Ghost Border`.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts. Let some cards be wider than others to guide the eye through the AI's logic.
*   **Do** use "Breathing Room." If you think there is enough margin, add 8px more.
*   **Do** ensure all icons are "Duotone" or "Lightweight" to match the premium typography.
*   **Do** align all text to the right, ensuring numbers (if using Western numerals) are legible and well-spaced.

### Don't
*   **Don't** use 1px solid black or dark grey borders. This immediately makes the design feel like a generic template.
*   **Don't** use standard "Drop Shadows" (`#000000`). Always tint your shadows with the Primary or On-Surface hue.
*   **Don't** use sharp corners. Every element should feel ergonomic and "soft-tech."
*   **Don't** use dividers (`<hr>`). Use white space or a 4px shift in background tone to separate ideas.

---

## 7. Spacing & Rhythm
The system follows an 8px grid, but encourages "Editorial Gaps."
- **Outer Page Padding:** 40px to 64px to create a "frame" around the content.
- **Card Internal Padding:** 32px to allow the "Premium Arabic" typography to breathe.
- **Section Gaps:** Use the `xl` spacing (48px+) between major functional blocks to signify a change in context.