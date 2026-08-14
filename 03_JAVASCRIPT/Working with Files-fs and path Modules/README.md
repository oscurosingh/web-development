# Working with Files in Node.js: `fs` and `path`

Node.js can work directly with the computer's file system. This is useful for reading configuration files, creating logs, saving uploads, generating reports, managing folders, and building command-line tools.

This guide explains the two built-in modules most commonly used for that work:

- `fs` — performs file-system operations such as reading, writing, renaming, and deleting.
- `path` — safely builds and inspects file paths across Windows, macOS, and Linux.

Both modules are included with Node.js, so no installation is required.

## Importing the modules

Use the `node:` prefix to make it explicit that these are Node.js built-in modules.

```js
const fs = require('node:fs');
const path = require('node:path');
```

For modern `async`/`await` code, import the promise-based API instead:

```js
const fs = require('node:fs/promises');
const path = require('node:path');
```

The examples below use CommonJS (`require`), which works when `package.json` does not set `"type": "module"`. In an ES module, use:

```js
import fs from 'node:fs/promises';
import path from 'node:path';
```

## Why use `path`?

Different operating systems use different separators:

- Windows: `C:\\projects\\app\\file.txt`
- macOS/Linux: `/projects/app/file.txt`

Do not manually concatenate paths with `/` or `\\`. Instead, let `path` build a valid path for the current system.

```js
const filePath = path.join('data', 'users', 'profile.json');

console.log(filePath);
// Windows: data\\users\\profile.json
// macOS/Linux: data/users/profile.json
```

### Useful `path` methods

```js
const filePath = path.join('files', 'report.final.txt');

console.log(path.basename(filePath)); // report.final.txt
console.log(path.dirname(filePath));  // files
console.log(path.extname(filePath));  // .txt
console.log(path.parse(filePath));
// { root: '', dir: 'files', base: 'report.final.txt', ext: '.txt', name: 'report.final' }
```

`path.resolve()` converts relative pieces into an absolute path, based on the current working directory.

```js
const absolutePath = path.resolve('files', 'report.txt');
console.log(absolutePath);
```

`__dirname` refers to the folder containing the current script in CommonJS. It is usually the safest base folder for files that belong to your project.

```js
const myFile = path.join(__dirname, 'myfile.txt');
```

> `process.cwd()` is the folder from which `node` was started. It can be different from `__dirname`.

## Reading files

### Asynchronously with callbacks

```js
const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'myfile.txt');

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Could not read the file:', error.message);
    return;
  }

  console.log(data);
});
```

Passing `'utf8'` returns text. Without an encoding, `data` is a `Buffer` (raw binary data).

### With `async`/`await` (recommended)

```js
const fs = require('node:fs/promises');
const path = require('node:path');

async function readMyFile() {
  const filePath = path.join(__dirname, 'myfile.txt');

  try {
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
    console.error('Could not read the file:', error.message);
  }
}

readMyFile();
```

### Reading JSON

```js
async function readJson(fileName) {
  const filePath = path.join(__dirname, fileName);
  const text = await fs.readFile(filePath, 'utf8');
  return JSON.parse(text);
}

readJson('package.json')
  .then((packageInfo) => console.log(packageInfo.name))
  .catch((error) => console.error(error.message));
```

`JSON.parse()` can fail if the file contains invalid JSON, so keep it inside error handling.

## Writing files

`writeFile()` creates a file if it does not exist. If it already exists, it replaces all existing contents.

```js
const fs = require('node:fs/promises');
const path = require('node:path');

async function createFile() {
  const filePath = path.join(__dirname, 'output.txt');
  await fs.writeFile(filePath, 'Hello from Node.js!\n', 'utf8');
  console.log('File written successfully.');
}

createFile().catch((error) => console.error(error.message));
```

To write JSON in a readable form:

```js
const settings = {
  theme: 'dark',
  notifications: true,
};

const filePath = path.join(__dirname, 'settings.json');
await fs.writeFile(filePath, JSON.stringify(settings, null, 2), 'utf8');
```

The `null, 2` arguments format JSON with two-space indentation.

## Appending to a file

Use `appendFile()` to add content without deleting the existing content. This is especially useful for logs.

```js
const logPath = path.join(__dirname, 'app.log');
const line = `${new Date().toISOString()} - Server started\n`;

await fs.appendFile(logPath, line, 'utf8');
```

## Creating folders

The parent folder must exist before writing a file into it. `mkdir()` with `{ recursive: true }` creates all missing folders and does not fail when the folder already exists.

```js
const outputDirectory = path.join(__dirname, 'data', 'reports');
await fs.mkdir(outputDirectory, { recursive: true });

const reportPath = path.join(outputDirectory, 'daily.txt');
await fs.writeFile(reportPath, 'Daily report\n', 'utf8');
```

## Checking whether a path exists

`fs.existsSync()` is a synchronous method. It is simple for quick scripts, but it blocks the event loop.

```js
const fs = require('node:fs');

if (fs.existsSync(path.join(__dirname, 'myfile.txt'))) {
  console.log('The file exists.');
}
```

For asynchronous application code, attempt the operation and handle `ENOENT` (file or folder not found):

```js
try {
  await fs.access(path.join(__dirname, 'myfile.txt'));
  console.log('The file exists.');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('The file does not exist.');
  } else {
    throw error;
  }
}
```

Avoid checking and then acting when possible: another process could change the file between those two steps. Prefer performing the intended read/write operation and handling its error.

## Getting file information

`stat()` returns metadata about a path.

```js
const filePath = path.join(__dirname, 'myfile.txt');
const info = await fs.stat(filePath);

console.log(info.isFile());       // true
console.log(info.isDirectory());  // false
console.log(info.size);           // size in bytes
console.log(info.birthtime);      // creation time
console.log(info.mtime);          // last modified time
```

## Listing folder contents

```js
const folderPath = __dirname;
const entries = await fs.readdir(folderPath, { withFileTypes: true });

for (const entry of entries) {
  const type = entry.isDirectory() ? 'folder' : 'file';
  console.log(`${type}: ${entry.name}`);
}
```

Using `{ withFileTypes: true }` provides `Dirent` objects, which let you distinguish files from folders without a separate `stat()` call for each entry.

## Renaming and moving files

`rename()` changes a file name. It can also move a file when the destination is in another folder on the same file system.

```js
const oldPath = path.join(__dirname, 'output.txt');
const newPath = path.join(__dirname, 'archive', 'output-old.txt');

await fs.mkdir(path.dirname(newPath), { recursive: true });
await fs.rename(oldPath, newPath);
```

## Copying files

```js
const source = path.join(__dirname, 'myfile.txt');
const copy = path.join(__dirname, 'myfile-copy.txt');

await fs.copyFile(source, copy);
```

## Deleting files and folders

Deleting cannot be undone by Node.js, so be certain that the path is correct.

```js
const filePath = path.join(__dirname, 'temporary.txt');
await fs.unlink(filePath); // delete one file
```

To remove an empty folder:

```js
await fs.rmdir(path.join(__dirname, 'empty-folder'));
```

To remove a folder and everything inside it:

```js
await fs.rm(path.join(__dirname, 'temporary-folder'), {
  recursive: true,
  force: true,
});
```

Use `recursive: true` carefully: it deletes every nested file and folder. `force: true` prevents an error when the target does not exist.

## Synchronous vs asynchronous APIs

The `fs` module provides both styles.

```js
// Synchronous: blocks execution until the file is read.
const text = require('node:fs').readFileSync('myfile.txt', 'utf8');

// Asynchronous: allows Node.js to do other work while waiting.
async function readAsync() {
  const textAsync = await require('node:fs/promises').readFile('myfile.txt', 'utf8');
  console.log(textAsync);
}
```

Use asynchronous APIs for servers and most real applications, because blocking the event loop can delay other requests. Synchronous methods are acceptable for short setup scripts, one-off command-line programs, or code that runs before a server starts.

## A complete example

This example creates a `notes` folder, saves a note, reads it back, then lists the folder contents.

```js
const fs = require('node:fs/promises');
const path = require('node:path');

async function manageNotes() {
  const notesDirectory = path.join(__dirname, 'notes');
  const notePath = path.join(notesDirectory, 'welcome.txt');

  try {
    await fs.mkdir(notesDirectory, { recursive: true });
    await fs.writeFile(notePath, 'Welcome! This note was created with fs.\n', 'utf8');

    const note = await fs.readFile(notePath, 'utf8');
    console.log('Note contents:', note);

    const files = await fs.readdir(notesDirectory);
    console.log('Notes folder:', files);
  } catch (error) {
    console.error('File operation failed:', error.message);
  }
}

manageNotes();
```

Save the complete example in `main.js`, then run it from this folder:

```bash
node main.js
```

## Common errors and tips

- **`ENOENT`**: A file or directory was not found. Check the path and create parent directories before writing.
- **`EACCES` / `EPERM`**: The program does not have permission to access the file. Check folder permissions and whether another program has locked the file.
- **Overwritten data**: `writeFile()` replaces a file's contents. Use `appendFile()` when you need to preserve existing content.
- **Relative path confusion**: Prefer `path.join(__dirname, ...)` for project files so your code does not depend on where the command was run.
- **Missing encoding**: Use `'utf8'` for text files; otherwise Node.js returns a `Buffer`.
- **User-supplied paths**: Never blindly join user input to a sensitive folder. Validate names and make sure the resolved path remains inside the intended base directory to prevent path traversal such as `../../secret.txt`.

## Quick reference

| Task | Recommended method |
| --- | --- |
| Build a path | `path.join()` |
| Make an absolute path | `path.resolve()` |
| Read text | `fs.readFile(file, 'utf8')` |
| Create/replace a file | `fs.writeFile()` |
| Add to a file | `fs.appendFile()` |
| Create directories | `fs.mkdir(dir, { recursive: true })` |
| Read folder contents | `fs.readdir()` |
| Inspect metadata | `fs.stat()` |
| Rename or move | `fs.rename()` |
| Copy | `fs.copyFile()` |
| Delete a file | `fs.unlink()` |
| Delete a directory tree | `fs.rm(dir, { recursive: true, force: true })` |

For the full API, see the official [Node.js File system documentation](https://nodejs.org/api/fs.html) and [Node.js Path documentation](https://nodejs.org/api/path.html).
