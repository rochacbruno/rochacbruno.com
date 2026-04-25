# CDE Theme for Marmite

A nostalgic theme inspired by the Common Desktop Environment (CDE) from classic Unix workstations. This theme brings the authentic look and feel of 1990s Unix desktop environments to your modern blog.

![CDE Theme Preview](preview.png)

## Features

- **Authentic CDE/Motif Window Styling**: Each element is styled to look like a CDE window with proper title bars and 3D beveled borders
- **Floating Window Layout**: Blog posts appear as individual floating windows on the desktop
- **Classic Unix Aesthetics**: True-to-form color palette based on authentic CDE specifications
- **Terminal-Style Elements**: Site tagline displayed in a terminal-like window
- **CDE Dialog Alerts**: Markdown alerts styled as CDE dialog windows
- **Responsive Design**: Maintains the retro aesthetic across all device sizes
- **Dual Font System**: Interface uses Pixelated MS Sans Serif for UI elements, Atkinson Hyperlegible for content readability

## Installation

1. Copy the `cde` folder to your Marmite site root
2. Update your `marmite.yaml`:
   ```yaml
   theme: cde
   ```
3. Build your site:
   ```bash
   marmite build
   ```

## Color Palette

The theme uses authentic CDE colors defined as CSS variables in `static/cde-style.css`:

- Desktop Background: `#574c8f` (purple)
- Window Background: `#aeb2c3` (gray-blue)
- Window Borders: `#b24d7a` (magenta)
- Accent Colors: Various blues, greens, and purples

## Customization

### Colors

Edit the CSS variables in `static/cde-style.css`:
```css
:root {
  --cde-desktop-bg: #574c8f;
  --cde-bg-window: #aeb2c3;
  --cde-front-border: #b24d7a;
  /* ... more color variables */
}
```

### Window Layout

The theme features three main windows:
1. **Header Window**: Contains site title, tagline, and navigation
2. **Hero Window**: Welcome section with author info (index page only)
3. **Content Windows**: Individual floating windows for each blog post

### Typography

- **UI Elements**: Pixelated MS Sans Serif (authentic Windows bitmap font)
- **Content**: Atkinson Hyperlegible for improved readability
- **Code**: Monospace fonts for code blocks

## Special Features

### Floating Posts
On list pages (index, tags, archives), each post appears as its own CDE window with:
- Title bar showing the post title
- 3D beveled borders
- Hover effect that "brings window to front"
- Staggered positioning for depth

### Terminal Tagline
The site tagline appears in a terminal-style fieldset with green text on black background, reminiscent of classic Unix terminals.

### CDE Dialog Alerts
GitHub Flavored Markdown alerts are styled as CDE dialog windows:
- Note (blue title bar)
- Tip (green title bar)
- Important (purple title bar)
- Warning (magenta title bar)
- Caution (orange title bar)

### Search Window
The search functionality opens in a proper CDE-style dialog window with:
- Title bar with close button
- Sunken input field
- Tree-view results display

## Configuration

### Required Marmite Settings

```yaml
# marmite.yaml
name: "Your Site Name"
tagline: "Your terminal command"
enable_search: true  # For search functionality
theme: cde
```

### Optional Settings

```yaml
# Custom menu
menu:
  - ["~/Home", "index.html"]
  - ["~/About", "about.html"]
  - ["~/Projects", "projects.html"]
  - ["~/Tags", "tags.html"]
  - ["~/Archive", "archive.html"]

# Fediverse verification (adds rel="me" link)
extra:
  fediverse_verification: "https://mastodon.social/@yourusername"
```

## Markdown Fragments

The theme supports these optional Markdown fragments:

- `_announce.md` - Announcement displayed in the header window title bar
- `_hero.md` - Hero section content (displayed in separate window on index)
- `_sidebar.md` - Sidebar content (if needed)
- `_footer.md` - Custom footer content
- `_htmlhead.md` - Custom HTML in `<head>`
- `_htmltail.md` - Custom HTML before `</body>`

## Content Structure

### Posts

Posts should include front matter for best results:

```markdown
---
title: "Your Post Title"
date: 2025-07-21
authors: ["Your Name"]
tags: ["unix", "cde", "nostalgia"]
description: "Brief description for SEO"
banner_image: "media/your-image.jpg"
---

Your post content here...
```

### Pages

Pages are similar but typically don't have dates:

```markdown
---
title: "About"
description: "About this website"
---

About page content...
```

## Assets Included

The theme comes with these pre-built assets:

- **ms_sans_serif.woff/woff2**: Pixelated MS Sans Serif fonts for authentic UI
- **ms_sans_serif_bold.woff/woff2**: Bold variant of MS Sans Serif
- **Atkinson-Hyperlegible-Regular-102.woff**: Accessible font for content
- **cde-style.css**: Complete CDE theme stylesheet
- **search.js**: Search functionality with CDE window styling
- **script.js**: Theme JavaScript functionality

## Browser Compatibility

The theme works best in modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- WOFF/WOFF2 web fonts
- Modern JavaScript (ES6+)

## Performance

The theme is optimized for the nostalgic experience while maintaining performance:

- **CSS**: Single file with comprehensive CDE styling
- **JavaScript**: Minimal, focused functionality
- **Web fonts**: Bitmap fonts for UI, Atkinson for readability
- **No external dependencies**: All assets included

## Accessibility

Despite the retro aesthetic, the theme maintains modern accessibility:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on interactive elements
- Readable font for content (Atkinson Hyperlegible)

## Theme Configuration (theme.json)

The theme includes a `theme.json` file that describes the theme and its capabilities:

```json
{
  "name": "CDE - Common Desktop Environment",
  "version": "1.0.0",
  "author": "Bruno Rocha",
  "description": "A nostalgic theme inspired by CDE from classic Unix workstations",
  "marmite_version": ">=0.2.6",
  "tags": ["retro", "unix", "cde", "motif", "nostalgia"],
  "features": [
    "Authentic CDE/Motif window styling",
    "Floating window layout for blog posts",
    "3D beveled borders and buttons",
    "Terminal-style tagline display",
    "CDE dialog-style markdown alerts"
  ]
}
```

## Credits

- Inspired by the Common Desktop Environment (CDE) originally developed by HP, IBM, Sun, and others
- Based on authentic CDE/Motif design specifications from [SwissWuff CDE Guide](https://www.swisswuff.ch/wordpress/?p=485)
- Fonts: Pixelated MS Sans Serif, Atkinson Hyperlegible
- Built for [Marmite Static Site Generator](https://github.com/rochacbruno/marmite)

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the theme.

---

Built with nostalgia for the golden age of Unix workstations 🖥️