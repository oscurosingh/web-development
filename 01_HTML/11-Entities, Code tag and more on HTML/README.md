# HTML Entities, Code Tag, Pre Tag and More

This folder explains some useful HTML concepts that help us display special text, code examples, preserved spacing, quotations, and basic HTML boilerplate code.

The `index.html` file demonstrates:

- HTML entities such as `&lt;`, `&gt;`, and `&copy;`
- The `<br>` tag for line breaks
- The `<pre>` tag for preserving spaces and line breaks
- The `<code>` tag for showing code
- The `<blockquote>` tag for quotations
- Basic HTML boilerplate structure

## 1. HTML Entities

HTML entities are special codes used to display reserved characters in HTML.

Some characters, like `<` and `>`, are already used by HTML to create tags. If we write them directly in the page, the browser may treat them as HTML code instead of plain text.

To display these characters safely, we use entities.

Example from the index file:

```html
this code is for paragraph &lt;p&gt; paragraph &lt;/p&gt;
```

Output:

```text
this code is for paragraph <p> paragraph </p>
```

Here:

- `&lt;` means less than sign `<`
- `&gt;` means greater than sign `>`

## 2. Common HTML Entities

Some commonly used HTML entities are:

| Entity | Output | Use |
| --- | --- | --- |
| `&lt;` | `<` | Shows less than sign |
| `&gt;` | `>` | Shows greater than sign |
| `&amp;` | `&` | Shows ampersand |
| `&copy;` | copyright symbol | Shows copyright symbol |
| `&nbsp;` | space | Adds a non-breaking space |
| `&quot;` | `"` | Shows double quote |
| `&apos;` | `'` | Shows single quote |

Example:

```html
copyright: &copy; 2023
```

This displays a copyright symbol before `2023`.

## 3. Why We Use HTML Entities

HTML entities are useful when:

- We want to display HTML tags as text.
- We want to show special symbols.
- We want to avoid confusing the browser.
- We want to write examples of HTML code on a web page.

For example, to display `<h1> heading </h1>` as text, we should write:

```html
&lt;h1&gt; heading &lt;/h1&gt;
```

## 4. The `<br>` Tag

The `<br>` tag is used to add a line break.

It is an empty tag, which means it does not need a closing tag.

Example:

```html
First line
<br>
Second line
```

Output:

```text
First line
Second line
```

Use `<br>` when you need a simple line break inside text.

## 5. The `<pre>` Tag

The `<pre>` tag stands for preformatted text.

Normally, HTML ignores extra spaces, tabs, and line breaks. But text inside a `<pre>` tag is displayed exactly as it is written in the code.

Example from the index file:

```html
<pre>
     we can write anything in pre tag
     it will be displayed as it is

        we can write multiple lines
        and it will be displayed as it is
        and it will not ignore spaces
        and it will not ignore tabs
</pre>
```

The browser keeps:

- Multiple spaces
- Line breaks
- Indentation
- Tabs

The `<pre>` tag is useful for:

- Code blocks
- Poetry
- Text diagrams
- Showing formatted examples

## 6. The `<code>` Tag

The `<code>` tag is used to display computer code.

Example:

```html
<code>
console.log("Hello World");
</code>
```

The text inside `<code>` is usually displayed in a monospace font.

For a small piece of code, use only `<code>`.

Example:

```html
Use the <code>&lt;p&gt;</code> tag for paragraphs.
```

For a full code block, use `<pre>` and `<code>` together.

Example:

```html
<pre><code>
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
</code></pre>
```

## 7. Using `<pre>` and `<code>` Together

In the index file, the HTML boilerplate code is written inside:

```html
<pre><code>
    code goes here
</code></pre>
```

This is a good way to show code examples on a web page because:

- `<pre>` preserves spacing and line breaks.
- `<code>` tells the browser that the content is code.
- HTML entities stop the browser from running the code as real HTML.

## 8. The `<blockquote>` Tag

The `<blockquote>` tag is used to show a long quotation.

Example:

```html
<blockquote cite="source-url">
    This is a blockquote.
</blockquote>
```

The `cite` attribute can store the source URL of the quote.

Example with class:

```html
<blockquote class="quotation" cite="source-url">
    This is a quotation from a source.
</blockquote>
```

Here:

- `class="quotation"` can be used for CSS styling.
- `cite="source-url"` gives information about the quote source.

## 9. HTML Boilerplate Code

Boilerplate code is the basic starting structure of an HTML document.

The index file shows this boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## 10. Explanation of Boilerplate

### `<!DOCTYPE html>`

This tells the browser that the document is written in HTML5.

### `<html lang="en">`

This is the root element of the HTML page. The `lang="en"` attribute tells the browser that the page language is English.

### `<head>`

The `<head>` section contains information about the web page. This information is not directly shown on the page.

### `<meta charset="UTF-8">`

This sets the character encoding. UTF-8 supports most letters, numbers, symbols, and characters from many languages.

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

This helps the page display properly on mobile phones, tablets, and desktops.

### `<title>`

The `<title>` tag sets the title shown in the browser tab.

### `<body>`

The `<body>` section contains the visible content of the web page.

## 11. Important Notes

- Use HTML entities when you want to display HTML tags as text.
- Use `<pre>` when you want to keep spaces and line breaks.
- Use `<code>` when you want to show code.
- Use `<pre><code>` together for larger code examples.
- Use `<blockquote>` for long quotations.
- Use boilerplate code as the starting point for every HTML page.

## 12. Small Correction To Remember

When writing a blockquote with both `class` and `cite`, keep both attributes separate:

```html
<blockquote class="quotation" cite="source-url">
```

Also, HTML entities should end with a semicolon. For example:

```html
&lt;/h1&gt;
```

## Conclusion

These HTML features are very useful when creating learning pages, documentation, notes, and examples. Entities help show reserved characters, `<pre>` keeps formatting, `<code>` displays code, and boilerplate gives every HTML page a proper structure.
