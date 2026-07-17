# ID and Classes in HTML

This folder explains the use of **id** and **class** attributes in HTML. These attributes are very important because they help us identify, group, style, and control HTML elements using CSS and JavaScript.

The `index.html` and `style.css` files demonstrate:

- The `id` attribute
- The `class` attribute
- CSS id selector using `#`
- CSS class selector using `.`
- Multiple classes on one element
- Linking an external CSS file with HTML

## Files in This Folder

| File | Purpose |
| --- | --- |
| `index.html` | Contains HTML examples of id and class |
| `style.css` | Contains CSS styling for id and class selectors |
| `Readme.md` | Contains notes about id and classes |

## What is an ID in HTML?

The `id` attribute is used to give a unique name to an HTML element.

Example from `index.html`:

```html
<div id="firstdiv">
    <h1>Understanding ID and Classes in HTML</h1>
</div>
```

Here, `firstdiv` is the id of the `<div>` element.

Important points about `id`:

- An id should be unique on a page.
- Two elements should not have the same id.
- It is used to target one specific element.
- It can be used in CSS and JavaScript.

## CSS ID Selector

In CSS, an id is selected using the `#` symbol.

Example from `style.css`:

```css
#firstdiv {
    background-color: rgb(197, 182, 44);
}
```

This CSS applies background color only to the element with `id="firstdiv"`.

## What is a Class in HTML?

The `class` attribute is used to group one or more elements.

Example from `index.html`:

```html
<div class="seconddiv">
    <h2>Example of ID and Classes</h2>
</div>
```

Here, `seconddiv` is the class name.

Important points about `class`:

- A class can be used on multiple elements.
- One element can have more than one class.
- Classes are mostly used for styling with CSS.
- Classes are useful when we want the same style on many elements.

## CSS Class Selector

In CSS, a class is selected using the `.` symbol.

Example from `style.css`:

```css
.seconddiv {
    background-color: rgb(44, 182, 197);
}
```

This CSS applies background color to all elements that have `class="seconddiv"`.

## Difference Between ID and Class

| ID | Class |
| --- | --- |
| Used for one unique element | Used for one or more elements |
| Selected using `#` in CSS | Selected using `.` in CSS |
| Same id should not be repeated | Same class can be repeated |
| Useful for specific targeting | Useful for common styling |
| Example: `id="firstdiv"` | Example: `class="seconddiv"` |

## Multiple Classes on One Element

An HTML element can have more than one class.

Example from `index.html`:

```html
<div id="thirddiv" class="red bg-yellow">First</div>
```

Here:

- `thirddiv` is the id.
- `red` is one class.
- `bg-yellow` is another class.

The classes are separated by a space.

In `style.css`, the `bg-yellow` class is styled:

```css
.bg-yellow {
    background-color: rgb(63, 190, 105);
}
```

So the element with `class="bg-yellow"` gets this background color.

## Linking CSS with HTML

The HTML file uses an external CSS file:

```html
<link rel="stylesheet" href="style.css">
```

This line connects `style.css` with `index.html`.

It is written inside the `<head>` tag.

## ID and Class Naming Rules

Good naming rules:

- Use meaningful names.
- Do not start names with numbers.
- Avoid spaces in id and class names.
- Use lowercase names when possible.
- Use hyphen or camelCase for longer names.

Examples:

```html
<div id="main-section"></div>
<div class="card-box"></div>
```

Avoid unclear names like:

```html
<div id="abc"></div>
<div class="x"></div>
```

## ID and Class with JavaScript

IDs and classes are also useful in JavaScript.

Example using id:

```javascript
document.getElementById("firstdiv");
```

Example using class:

```javascript
document.querySelector(".seconddiv");
```

This helps JavaScript find and modify HTML elements.

## Small Corrections in the Current Files

In `index.html`, the `<div class="seconddiv">` starts but should be closed before the `</body>` tag.

Correct structure:

```html
<div class="seconddiv">
    <h2>Example of ID and Classes</h2>
    <p>Here is an example of how to use id and class in HTML:</p>
</div>
```

Also, the `red` class is used here:

```html
<div id="thirddiv" class="red bg-yellow">First</div>
```

But `.red` is not defined in `style.css`. If needed, it can be added like this:

```css
.red {
    color: red;
}
```

## Best Practices

- Use `id` only when the element is unique.
- Use `class` when the same style is needed in multiple places.
- Keep id and class names meaningful.
- Do not repeat the same id on one page.
- Use external CSS for clean code.
- Use multiple classes when you want to combine styles.

## Important Viva Questions

### 1. What is an id in HTML?

An id is a unique identifier given to an HTML element.

### 2. What is a class in HTML?

A class is used to group one or more HTML elements for styling or scripting.

### 3. Can two elements have the same id?

No, an id should be unique on a page.

### 4. Can two elements have the same class?

Yes, many elements can use the same class.

### 5. How do we select an id in CSS?

We select an id using the `#` symbol.

Example:

```css
#firstdiv {
    color: blue;
}
```

### 6. How do we select a class in CSS?

We select a class using the `.` symbol.

Example:

```css
.seconddiv {
    color: green;
}
```

### 7. Can one element have multiple classes?

Yes, one element can have multiple classes separated by spaces.

Example:

```html
<div class="red bg-yellow">First</div>
```

### 8. What is the main difference between id and class?

An id is used for one unique element, while a class can be used for multiple elements.

### 9. Where is the CSS file linked in HTML?

The CSS file is linked inside the `<head>` tag using the `<link>` tag.

### 10. Which has higher CSS specificity, id or class?

An id selector has higher specificity than a class selector.

## Conclusion

IDs and classes are very important in HTML and CSS. An id is used for unique elements, while classes are used to group and style multiple elements. They help keep web pages organized, reusable, and easy to style.
