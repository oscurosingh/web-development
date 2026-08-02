
# CSS Media Queries

Media queries let CSS apply styles only when specific conditions are true. They are most commonly used to make a website responsive, so its layout works well on phones, tablets, laptops, and large screens.

In simple terms: write the normal style first, then use a media query only when the screen or user preference needs a different style.

## Preparing a Responsive Page

Add this tag inside the HTML document's `<head>`. It tells mobile browsers to use the device's actual screen width when calculating the page layout.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Basic Syntax

A media query starts with `@media`, followed by a condition and a block of CSS rules.

```css
@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
  }
}
```

In this example, the navigation changes from its normal layout to a vertical layout when the viewport is `768px` wide or smaller.

The **viewport** is the visible area of the browser window. When a media query uses `width`, it checks the viewport width, not the width of one particular element.

### Mobile-First Design

The mobile-first approach writes the default styles for small screens first, then uses `min-width` queries to improve the layout as more screen space becomes available. This is a common and recommended responsive-design pattern.

```css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Here, cards appear in one column on small screens, two columns on medium screens, and three columns on larger screens.

### Desktop-First Design

Desktop-first CSS begins with a large-screen layout and uses `max-width` queries to simplify it on smaller screens. It is valid, but mobile-first is often easier to maintain when most visitors use phones.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

### Common Media Features

- `min-width`: Applies styles when the viewport is at least a given width.
- `max-width`: Applies styles when the viewport is no wider than a given width.
- `min-height` and `max-height`: Check the viewport height.
- `orientation`: Checks whether a device is in `portrait` or `landscape` mode.
- `prefers-color-scheme`: Detects whether a user prefers a light or dark color scheme.
- `prefers-reduced-motion`: Helps reduce animations for users who request less motion.
- `hover` and `pointer`: Help tailor interactions for devices with a mouse, touch screen, or other input method.

For example, touch devices usually cannot hover in the same way as a mouse. This rule adds a hover effect only when the main input device supports hovering:

```css
@media (hover: hover) {
  .button:hover {
    background: navy;
  }
}
```

### Combining Conditions

Use `and` to require more than one condition. Use a comma to separate alternatives, which acts like “or”.

```css
/* Between 768px and 1024px wide */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}

/* Portrait screens or screens with a narrow viewport */
@media (orientation: portrait), (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }
}
```

### Dark Mode and Motion Preferences

Media queries can respect a visitor's system preferences. This improves accessibility and gives users a more comfortable experience.

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #111827;
    color: #f9fafb;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    scroll-behavior: auto;
    transition-duration: 0.01ms;
  }
}
```

### Choosing Breakpoints

Breakpoints should be selected when the content or layout starts to look cramped, rather than only targeting specific device models. Common starting points are `480px` for small phones, `768px` for tablets, and `1024px` for laptops, but every design may need different values.

Keep media-query rules close to the components they change, test layouts at many widths, and use flexible tools such as Flexbox, Grid, percentages, and `clamp()` alongside media queries.

## Practical Example: Responsive Navigation

This example keeps a navigation bar horizontal on larger screens and changes it to a vertical layout on small screens.

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 600px) {
  .navbar,
  .nav-links {
    flex-direction: column;
    align-items: stretch;
  }
}
```

## Good Practices

- Start with a flexible layout before adding breakpoints. Flexbox and Grid often solve layout problems without many media queries.
- Choose breakpoints where the design needs them; do not create one for every device model.
- Keep the number of breakpoints small and purposeful.
- Test by gradually resizing the browser, not only at the exact breakpoint widths.
- Make text readable, buttons easy to tap, and important content available at every screen size.
- Prefer relative units such as `rem`, `%`, `fr`, `vw`, and `clamp()` when they suit the design.
