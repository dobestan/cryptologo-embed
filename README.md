# cryptologo-embed

[![npm](https://img.shields.io/npm/v/cryptologo-embed)](https://www.npmjs.com/package/cryptologo-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/cryptologo-embed)

Embeddable widgets for [CryptoLogo](https://crypto-logo.com) — a database of **413 cryptocurrency logos** available in SVG, PNG, WebP, and ICO formats. Add rich crypto coin cards, glossary terms, search, and inline logo badges to any website with a single `<script>` tag.

CryptoLogo serves as a centralized brand asset repository for the cryptocurrency ecosystem. Every logo is curated in multiple vector and raster formats, ensuring pixel-perfect rendering at any resolution. The database covers major Layer 1 chains (Bitcoin, Ethereum, Solana, Cardano), DeFi protocols (Uniswap, Aave, Compound), stablecoins (USDT, USDC, DAI), and emerging tokens.

> **Try the live widget builder at [widget.crypto-logo.com](https://widget.crypto-logo.com)**

## Table of Contents

- [Quick Start](#quick-start)
- [Widget Types](#widget-types)
  - [Coin Card](#coin-card)
  - [Glossary Term](#glossary-term)
  - [Search](#search)
  - [Logo Badge](#logo-badge)
- [Themes & Styles](#themes--styles)
- [Sizes](#sizes)
- [Widget Options](#widget-options)
- [CDN Options](#cdn-options)
- [Rich Snippets](#rich-snippets)
- [About Cryptocurrency Logos](#about-cryptocurrency-logos)
- [License](#license)

## Quick Start

Add the script tag to your page. All widgets with `data-cryptologo` attributes render automatically:

```html
<!-- Load the CryptoLogo embed widget -->
<script src="https://cdn.jsdelivr.net/npm/cryptologo-embed@1/dist/embed.min.js"></script>

<!-- Coin card widget -->
<div data-cryptologo="entity" data-slug="bitcoin"></div>

<!-- Inline logo badge -->
The price of <span data-cryptologo="logo-badge" data-slug="ethereum"></span> has risen.
```

The script is self-executing, zero-dependency, and uses Shadow DOM for style isolation. Widgets lazy-load via IntersectionObserver and support SPA navigation via MutationObserver.

## Widget Types

### Coin Card

Display a cryptocurrency coin card with logo, symbol badge, category, and description.

```html
<!-- Bitcoin coin card with dark theme -->
<div data-cryptologo="entity"
     data-slug="bitcoin"
     data-theme="dark"
     data-style-variant="modern">
</div>
```

API: `GET https://crypto-logo.com/api/v1/coins/{slug}/`

Shows: 48px logo image, coin name, ticker symbol badge, category tag, description excerpt, and a link to the full coin page on CryptoLogo.

### Glossary Term

Display a cryptocurrency glossary definition card.

```html
<!-- Blockchain glossary term -->
<div data-cryptologo="glossary"
     data-slug="blockchain"
     data-theme="auto">
</div>
```

API: `GET https://crypto-logo.com/api/v1/glossary/{slug}/`

Useful for embedding crypto terminology definitions within educational content, blog posts, or documentation.

### Search

Embed a search form that links to CryptoLogo search results.

```html
<div data-cryptologo="search"
     data-placeholder="Find a cryptocurrency logo..."
     data-size="large">
</div>
```

The form submits to `https://crypto-logo.com/search/` with the query parameter.

### Logo Badge

Inline badge widget for embedding within text. Renders a 16px coin logo and name as an inline element.

```html
<p>
  The price of <span data-cryptologo="logo-badge" data-slug="bitcoin"></span>
  surpassed $100,000, while <span data-cryptologo="logo-badge" data-slug="ethereum"></span>
  crossed the $5,000 mark.
</p>
```

Designed to flow naturally within paragraph text. The badge links to the coin page on CryptoLogo.

## Themes & Styles

### 4 Themes

| Theme | Description |
|-------|-------------|
| `light` | White background, dark text |
| `dark` | Dark background, light text |
| `sepia` | Warm parchment tones |
| `auto` | Follows `prefers-color-scheme` with live `matchMedia` listener |

```html
<div data-cryptologo="entity" data-slug="bitcoin" data-theme="auto"></div>
```

### 2 Styles

| Style | Description |
|-------|-------------|
| `modern` | Amber accent top bar, subtle shadow, rounded badges |
| `minimal` | Flat design, no shadow, transparent logo background |

```html
<div data-cryptologo="entity" data-slug="bitcoin" data-style-variant="minimal"></div>
```

## Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| `compact` | 280px | Sidebars, narrow columns |
| `default` | 420px | Standard content width |
| `large` | 720px | Full-width sections |

```html
<div data-cryptologo="entity" data-slug="bitcoin" data-size="compact"></div>
```

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-cryptologo` | `entity`, `glossary`, `search`, `logo-badge` | — | Widget type (required) |
| `data-slug` | coin/term slug | — | Content identifier |
| `data-theme` | `light`, `dark`, `sepia`, `auto` | `auto` | Color theme |
| `data-size` | `compact`, `default`, `large` | `default` | Widget width |
| `data-style-variant` | `modern`, `minimal` | `modern` | Visual style |
| `data-placeholder` | string | — | Search placeholder text |
| `data-no-snippet` | `true` | — | Disable JSON-LD injection |

## CDN Options

### jsDelivr (Recommended)

```html
<script src="https://cdn.jsdelivr.net/npm/cryptologo-embed@1/dist/embed.min.js"></script>
```

### npm

```bash
npm install cryptologo-embed
```

```javascript
import { initEntityWidgets, initSearchWidgets } from 'cryptologo-embed';
```

### ESM Import

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/cryptologo-embed@1/dist/embed.esm.js';
</script>
```

## Rich Snippets

Entity and glossary widgets automatically inject [DefinedTerm](https://schema.org/DefinedTerm) JSON-LD structured data into your page, improving SEO for cryptocurrency-related content. Injection is idempotent (once per slug) and can be disabled per widget:

```html
<div data-cryptologo="entity" data-slug="bitcoin" data-no-snippet="true"></div>
```

## About Cryptocurrency Logos

Cryptocurrency logos are a critical part of the digital asset ecosystem's brand identity. Each token project maintains official brand guidelines specifying exact colors (hex codes, RGB, CMYK), minimum clear space, and acceptable usage contexts.

### Logo Formats in CryptoLogo

| Format | Extension | Use Case |
|--------|-----------|----------|
| **SVG** | `.svg` | Websites, apps — infinite scaling, small file size, CSS-stylable |
| **PNG** | `.png` | Social media, presentations — transparent background, raster |
| **WebP** | `.webp` | Modern web — 25-34% smaller than PNG with equal quality |
| **ICO** | `.ico` | Favicons, Windows apps — multi-resolution icon container |

### Why Consistent Logo Assets Matter

- **Brand recognition**: Users identify tokens by their logo before reading the name
- **Cross-platform consistency**: The same Bitcoin orange (#F7931A) across every exchange, wallet, and portfolio tracker
- **Legal compliance**: Many projects enforce trademark guidelines for logo usage
- **Accessibility**: High-contrast SVG logos render cleanly on any display density

CryptoLogo provides all 413 cryptocurrency logos with consistent sizing, transparent backgrounds, and standardized naming conventions.

Learn more: [CryptoLogo Coin Database](https://crypto-logo.com/) | [CryptoLogo API](https://crypto-logo.com/developers/)

## License

MIT License. See [LICENSE](./LICENSE).
