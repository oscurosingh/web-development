# Backend with Node.js and npm

Node.js is a JavaScript runtime built on Chrome's V8 engine used to build backend applications. It enables server-side programming with JavaScript and is well suited for APIs, real-time apps, and microservices.

npm is the Node package manager. It helps install, manage, and share packages and dependencies for Node.js projects.

## Useful Node.js and npm commands

- `node <file>`: Run a Node.js script from a file.
- `node --inspect <file>`: Start a Node process with debugging enabled.
- `npm init`: Create a new project and generate a `package.json` file.
- `npm init -y`: Initialize a project with default options and generate a `package.json` without prompts.
- `npm install <package>` or `npm i <package>`: Install a package locally and add it to `node_modules`.
- `npm install -g <package>`: Install a package globally.
- `npm install` or `npm i`: Install all dependencies from `package.json`.
- `npm uninstall <package>`: Remove a package from the project.
- `npm update`: Update project dependencies to newer versions.
- `npm run <script>`: Run a script defined in `package.json`.
- `npm test`: Run the test script defined in `package.json`.
- `npm list`: Show installed packages and dependency tree.
- `npm outdated`: Check for outdated dependencies.
## Auto-restart during development (nodemon)

`nodemon` is a utility that monitors for any changes in your source and automatically restarts the node application. It's useful during development to avoid manually restarting the server.

Installation (local dev dependency):

- `npm install --save-dev nodemon`

Add a script to package.json to use nodemon:

```json
"scripts": {
	"start": "node index.js",
	"dev": "nodemon index.js"
}
```

Run the dev script:

- `npm run dev`

You can also install nodemon globally: `npm install -g nodemon`, then run `nodemon index.js` directly.
## Backend workflow

1. Use `npm init` to initialize the project.
2. Install server libraries like `express`, `koa`, or `fastify`.
3. Write backend logic in JavaScript files and run them with `node`.
4. Manage dependencies and scripts with `npm`.
5. Deploy the server or API once the application is ready.
