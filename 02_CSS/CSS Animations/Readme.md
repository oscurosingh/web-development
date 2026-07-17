# CSS Animations (Open Folder)

This folder demonstrates basic **CSS animations** using `@keyframes` and the `animation` shorthand.

## How to run
1. Open **`index.html`** in a browser.
   - Path: `CSS/CSS Animations/index.html`

## What’s inside
### File references
- **HTML/entry file:** `index.html`
- **Animation logic:** embedded in `index.html` inside the `<style>` tag

### Key CSS concepts used
- **`@keyframes`**: defines the animation steps (`from` → `to`)
- **`animation` shorthand**: applies the animation to an element
- **Transform and styling changes** during the animation

### Where to look in `index.html`
- `div.box` uses:
  - `animation: shubham 3s ease-in-out 1s 1 alternate-reverse forwards;`
- `@keyframes shubham` defines:
  - `from { background-color: ...; transform: translateX(...) translateY(...); }`
  - `to { background-color: ...; }`

## Notes
- `forwards` keeps the final state after the animation finishes.
- `alternate-reverse` makes the animation reverse direction on alternation.

## Preview
Open `index.html` and you should see the `.box` element animate inside the blue container.
