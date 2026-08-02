# CSS Introduction

CSS (Cascading Style Sheets) is the language used to control the presentation and layout of web pages. While HTML defines a page's structure and content, CSS controls how that content looks—such as its colors, fonts, spacing, positioning, and responsiveness.

CSS works by applying rules to HTML elements. A rule usually includes a selector, which chooses the element to style, and one or more declarations, which define the visual properties to apply.

```css
h1 {
  color: royalblue;
  font-size: 2rem;
}
```

Learning CSS helps you create clear, attractive, and responsive interfaces that work across different screen sizes and devices.

## CSS Versions and Evolution

CSS has evolved in stages rather than through a single, complete replacement:

- **CSS1 (1996):** Introduced basic styling for fonts, colors, text, and spacing.
- **CSS2 (1998):** Added positioning, media types, tables, and support for more complex page layouts.
- **CSS2.1:** Refined CSS2 and became an important compatibility standard for browsers.
- **CSS3 and later:** CSS was divided into independent modules, allowing features such as Flexbox, Grid, animations, transitions, media queries, and custom properties to develop separately.

Modern CSS continues to evolve through these modules, so new features can be introduced without waiting for an entirely new CSS version.

## Types of CSS

CSS can be added to an HTML document in three main ways:

### Inline CSS

Inline CSS is written directly in an element's `style` attribute. It is useful for quick, one-off styling, but is harder to maintain in larger projects.

```html
<p style="color: crimson;">Hello, CSS!</p>
```

### Internal CSS

Internal CSS is written inside a `<style>` tag in the HTML document's `<head>`. It is useful when styles are needed for only one page.

```html
<style>
  p {
    color: seagreen;
  }
</style>
```

### External CSS

External CSS is stored in a separate `.css` file and connected to HTML with a `<link>` tag. This is the preferred approach for most projects because styles can be reused and maintained in one place.

```html
<link rel="stylesheet" href="styles.css">
```

## Vanilla CSS vs. Tailwind CSS

**Vanilla CSS** means writing standard CSS yourself, without a framework or library. Styles are usually kept in a separate CSS file and applied through custom class names.

```css
.button {
  background: blue;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
}
```

**Tailwind CSS** is a utility-first CSS framework. Instead of writing many custom CSS rules, you combine predefined utility classes directly in HTML.

```html
<button class="bg-blue-600 text-white px-4 py-3 rounded-md">
  Click me
</button>
```

Tailwind CSS is different in workflow, but browsers still receive normal CSS. Vanilla CSS provides direct control and separates styles from HTML, while Tailwind can make building interfaces faster with reusable utility classes.
