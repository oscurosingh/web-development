# CommonJS vs ECMAScript Modules

## Overview
CommonJS and ECMAScript Modules (ESM) are two different module systems in JavaScript with different syntax, loading mechanisms, and use cases.

---

## CommonJS

### What is CommonJS?
CommonJS is a module system designed for server-side JavaScript (Node.js). It was created before ES6 standardized modules.

### Syntax

**Exporting:**
```javascript
// Single export
module.exports = function() { };

// Multiple exports
module.exports = {
  func1: function() { },
  func2: function() { }
};

// Or using exports shorthand
exports.func1 = function() { };
exports.func2 = function() { };
```

**Importing:**
```javascript
const myModule = require('./myModule.js');
const { func1, func2 } = require('./myModule.js');
```

### Characteristics
- **Synchronous loading**: Modules are loaded synchronously, blocking code execution
- **Runtime evaluation**: Modules are evaluated at runtime
- **Dynamic imports**: You can conditionally require modules at runtime
- **Server-first**: Designed primarily for Node.js environment
- **No static analysis**: Cannot be analyzed statically before execution

### Advantages
- Well-established and widely used in Node.js
- Simple and straightforward syntax
- Allows dynamic imports
- Good for server-side applications

### Disadvantages
- Synchronous loading is unsuitable for browsers
- Cannot be statically analyzed for tree-shaking
- Different implementations across environments

### Example
```javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// app.js
const math = require('./math.js');
console.log(math.add(5, 3)); // 8
```

---

## ECMAScript Modules (ESM)

### What is ECMAScript Modules?
ESM is the standardized module system introduced in ES6 (2015) and is the official standard for JavaScript modules.

### Syntax

**Exporting:**
```javascript
// Named exports
export const func1 = () => { };
export const func2 = () => { };

// Or grouped exports
export { func1, func2 };

// Default export
export default function() { }

// Mixed exports
export default function main() { }
export const helper = () => { };
```

**Importing:**
```javascript
// Named imports
import { func1, func2 } from './module.js';

// Default import
import myFunction from './module.js';

// Mix of default and named
import myFunction, { helper } from './module.js';

// Import all
import * as myModule from './module.js';

// Dynamic import
import('./module.js').then(module => { });
```

### Characteristics
- **Asynchronous loading**: Modules are loaded asynchronously
- **Static structure**: Import/export statements must be at the top level (not inside conditionals)
- **Compile-time**: Module structure is analyzed at parse time
- **Browser-native**: Supported natively in modern browsers
- **Tree-shaking friendly**: Unused exports can be removed during bundling

### Advantages
- Official JavaScript standard
- Asynchronous loading suitable for browsers
- Static structure enables tree-shaking and optimization
- Better performance with bundlers
- Widely supported in modern environments

### Disadvantages
- No dynamic imports (without async import syntax)
- Requires transpilation for older browsers
- Stricter rules on module structure

### Example
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
```

---

## Key Differences

| Feature | CommonJS | ESM |
|---------|----------|-----|
| **Loading** | Synchronous | Asynchronous |
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
| **Execution** | Runtime | Parse-time |
| **Primary Use** | Server-side (Node.js) | Browsers & Modern JS |
| **Tree-shaking** | Not supported | Supported |
| **Dynamic Imports** | Yes (via `require`) | Yes (via `import()`) |
| **Module Structure** | Dynamic | Static |
| **Performance** | Good for servers | Better for browsers |
| **Standardized** | De facto standard | Official ES6 standard |

---

## Module Resolution

### CommonJS
```javascript
// Searches in node_modules
const lodash = require('lodash');

// File resolution order: .js, .json, .node
const local = require('./myModule');
```

### ESM
```javascript
// Must specify full path or use node_modules resolution
import lodash from 'lodash';

// Must include extension or configure resolver
import { helper } from './myModule.js';
```

---

## Compatibility & Migration

### Node.js Support
- **CommonJS**: Full support (default)
- **ESM**: Full support (use `.mjs` extension or `"type": "module"` in package.json)

### Enabling ESM in Node.js
By default, Node.js treats `.js` files as CommonJS. To use ES6 modules:

**Option 1: Use `.mjs` extension**
```javascript
// math.mjs
export const add = (a, b) => a + b;
```

**Option 2: Set `"type": "module"` in package.json**
```json
{
  "type": "module"
}
```
Once this is set, all `.js` files are treated as ES6 modules by default. If you need CommonJS files, use `.cjs` extension.

**Example with mixed modules:**
```json
{
  "type": "module"
}
```
```javascript
// app.js (treated as ESM)
import { add } from './math.js';
console.log(add(5, 3));

// helper.cjs (treated as CommonJS)
module.exports = { helper: () => {} };
```

### Browser Support
- **CommonJS**: Not supported natively; requires bundler (Webpack, Browserify)
- **ESM**: Supported in all modern browsers

### Using Both in Node.js
```json
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js"
    }
  }
}
```

---

## Best Practices

### CommonJS
- Use for Node.js backend applications
- Keep exports simple and predictable
- Document module dependencies clearly

### ECMAScript Modules
- Use for new projects and modern environments
- Prefer named exports for clarity
- Use default exports sparingly
- Leverage tree-shaking for bundle optimization

---

## Conclusion

**Choose CommonJS when:**
- Building Node.js server applications
- Working in legacy environments
- Compatibility is more important than standards

**Choose ESM when:**
- Building modern JavaScript applications
- Creating libraries for browser use
- Want better performance and optimization
- Need to follow JavaScript standards
