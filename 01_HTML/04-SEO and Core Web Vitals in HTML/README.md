# SEO and Core Web Vitals in HTML

This folder explains how HTML helps with **SEO** and how good page structure can support better **Core Web Vitals**.

The `index.html` file is about **Lord Krishna** and already includes some important SEO-friendly HTML parts:

- `<!DOCTYPE html>` for HTML5 document type
- `<html lang="en">` for page language
- `<meta charset="UTF-8">` for character support
- `<meta name="viewport">` for responsive design
- `<meta name="description">` for search engine summary
- `<title>` for the browser tab and search result title
- `<h1>` for the main page heading
- `<p>` for readable page content

## What is SEO?

SEO stands for **Search Engine Optimization**. It means improving a web page so search engines like Google can understand it better and show it to users in search results.

In HTML, SEO mainly depends on:

- Clear title
- Useful meta description
- Proper heading structure
- Meaningful content
- Semantic HTML tags
- Image alt text
- Mobile-friendly layout
- Fast loading speed

## SEO Parts Used in the Index File

### 1. Page Language

```html
<html lang="en">
```

The `lang` attribute tells browsers and search engines that the page language is English.

This is useful for:

- Accessibility
- Search engines
- Screen readers
- Translation tools

### 2. Character Encoding

```html
<meta charset="UTF-8">
```

This helps the browser display text, symbols, and special characters correctly.

### 3. Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This makes the page responsive on mobile, tablet, and desktop screens.

It is important because many users visit websites from mobile devices.

### 4. Meta Description

```html
<meta name="description" content="A brief overview of Lord Krishna, his significance in Hindu mythology, and his teachings.">
```

The meta description gives a short summary of the page.

Search engines may show this description in search results. A good meta description should be:

- Short
- Clear
- Related to the page content
- Helpful for users

### 5. Title Tag

```html
<title>About Lord Krishna</title>
```

The title tag appears in the browser tab and search results.

A good title should clearly describe the page topic.

### 6. Main Heading

```html
<h1>About Lord Krishna</h1>
```

The `<h1>` tag is the main heading of the page.

Usually, a page should have one main `<h1>` that clearly explains the topic.

## Good Heading Structure

Headings help users and search engines understand the structure of a page.

Example:

```html
<h1>About Lord Krishna</h1>
<h2>Role in Mahabharata</h2>
<h2>Teachings of Krishna</h2>
<h3>Bhagavad Gita</h3>
```

Use headings in order:

- `<h1>` for main title
- `<h2>` for main sections
- `<h3>` for subsections

Do not use headings only to make text bigger. Use CSS for styling.

## Semantic HTML for SEO

Semantic HTML uses meaningful tags that describe the purpose of content.

Useful semantic tags:

- `<header>` for top section
- `<nav>` for navigation links
- `<main>` for main content
- `<section>` for page sections
- `<article>` for independent content
- `<aside>` for side content
- `<footer>` for bottom section

Example:

```html
<main>
    <article>
        <h1>About Lord Krishna</h1>
        <p>Lord Krishna is a major deity in Hinduism...</p>
    </article>
</main>
```

Semantic tags make the page easier to understand for browsers, search engines, and screen readers.

## Image SEO

If an image is added to the page, always use the `alt` attribute.

Example:

```html
<img src="krishna.jpg" alt="Illustration of Lord Krishna">
```

The `alt` text helps:

- Search engines understand the image
- Screen readers describe the image
- Users when an image fails to load

## What are Core Web Vitals?

Core Web Vitals are performance metrics used to measure user experience on a web page.

The current Core Web Vitals are:

| Metric | Full Form | What It Measures | Good Score |
| --- | --- | --- | --- |
| LCP | Largest Contentful Paint | Loading performance | 2.5 seconds or less |
| INP | Interaction to Next Paint | Page responsiveness | 200 milliseconds or less |
| CLS | Cumulative Layout Shift | Visual stability | 0.1 or less |

## 1. LCP - Largest Contentful Paint

LCP measures how quickly the largest visible content appears on the screen.

The largest content can be:

- A heading
- A paragraph
- An image
- A banner
- A video poster

To improve LCP:

- Use optimized images.
- Avoid very large files.
- Use simple and clean HTML.
- Load important content first.
- Avoid unnecessary external scripts.

## 2. INP - Interaction to Next Paint

INP measures how quickly a page responds when a user interacts with it.

Examples of interactions:

- Clicking a button
- Opening a menu
- Typing in a form
- Selecting an option

To improve INP:

- Avoid heavy JavaScript.
- Keep event handlers simple.
- Do not block the main thread.
- Load only the JavaScript that is needed.

For a simple HTML page like this folder's `index.html`, INP is usually good because there is no heavy JavaScript.

## 3. CLS - Cumulative Layout Shift

CLS measures how much the page layout moves unexpectedly while loading.

Bad CLS example:

- Text appears first.
- Then an image loads above it.
- The text suddenly moves down.

To improve CLS:

- Add width and height to images.
- Avoid inserting content above existing content.
- Use proper space for ads, images, and embeds.
- Do not load fonts in a way that causes big layout changes.

## How HTML Helps Core Web Vitals

Clean HTML helps performance because browsers can read and display the page easily.

Good HTML practices:

- Use simple structure.
- Use semantic tags.
- Add `alt`, `width`, and `height` to images.
- Keep content meaningful.
- Avoid unnecessary nested elements.
- Put important content near the top.
- Use responsive meta viewport.

## SEO Checklist for HTML Pages

Use this checklist while creating HTML pages:

- Add a clear `<title>`.
- Add a useful meta description.
- Use only one main `<h1>`.
- Use headings in proper order.
- Write meaningful paragraph content.
- Use semantic HTML tags.
- Add `alt` text for images.
- Use readable URLs and file names.
- Make the page mobile-friendly.
- Keep the page fast and lightweight.

## Core Web Vitals Checklist

To improve Core Web Vitals:

- Optimize large images.
- Avoid heavy JavaScript.
- Use simple HTML structure.
- Reserve image space with width and height.
- Do not create unexpected layout shifts.
- Keep CSS and JavaScript files small.
- Test pages using Lighthouse or PageSpeed Insights.

## Improved Example Structure

The current index file is good for a beginner example. A more semantic version could look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A brief overview of Lord Krishna, his significance in Hindu mythology, and his teachings.">
    <title>About Lord Krishna</title>
</head>
<body>
    <main>
        <article>
            <h1>About Lord Krishna</h1>
            <p>
                Lord Krishna is a major deity in Hinduism, revered as the eighth avatar of Vishnu.
                He is known for his role in the Mahabharata and his teachings in the Bhagavad Gita.
            </p>
        </article>
    </main>
</body>
</html>
```

## Important Points to Remember

- SEO helps search engines understand a web page.
- Core Web Vitals measure user experience.
- The title and meta description are important for SEO.
- Headings should follow a proper order.
- Semantic HTML improves readability and accessibility.
- Fast, stable, and responsive pages give users a better experience.

## Reference

- Official Core Web Vitals guide: https://web.dev/articles/vitals

## Conclusion

SEO and Core Web Vitals are both important for modern websites. HTML helps SEO by giving meaning and structure to content. Clean HTML also helps performance, accessibility, and user experience.
