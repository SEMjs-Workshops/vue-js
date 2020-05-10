# Vue Workshop

Objectives:

- Learn the basics of Vue by building a real app.
- Each lab teaches a Vue concept by applying it to the app.
- No instructor needed. While workshop instructors are beneficial, this workshop's documentation is sufficient enough to stand alone.
- Pre-written tests give feedback on whether a lab section was completed correctly.

Perform the [Initial Setup](#initial-setup) section, followed by [Labs](#labs). If you want an explanation of the repo structure (e.g. "What is `babel.config.js`?"), check out the [Repo Structure](#repo-structure) section.

## Initial Setup

1. Run `npm install` to install dependencies.
2. Run `npm run serve:final` to start completed app we'll be building.
3. Browse to http://localhost:8080. You should see the todo app!
4. Stop the `serve:final` script.
5. When you're ready to start the first lab, click the first link in the [Labs](#labs) section.

## Labs

1. [Template syntax](src/lab-template-syntax/README.md)
2. [Conditional rendering](src/lab-conditional-rendering/README.md)
3. [List rendering](src/lab-list-rendering/README.md)
4. [Event handling](src/lab-event-handling/README.md)
5. [Form input binding](src/lab-form-input-bindings/README.md)
6. [Multiple components](src/lab-multiple-components/README.md)
7. [Style](src/lab-style/README.md)
8. Vuetify
9. [Backend API](src/lab-backend-api/README.md)

## Repo Structure

> JavaScript beginners probably shouldn't read this entire section. It gets into the weeds on tools, which could be overwhelming if you're new to JavaScript. Focus on: `node_modules`, `src`, `.gitignore`, and `package.json`.

Files/folders in the repo root:

- `__mocks__`
  - Contains a file that fixes an issue where tests can't import CSS files.
  - Arbitrarily named.
- `node_modules`
  - Contains third-party dependencies.
  - Created when you run `npm install`.
- `src`
  - Source code for your Vue app.
  - This project is unusual, because it actually contains multiple apps (one for each lab). In a real Vue project, `src` would look more like `src/final`.
- `.eslintrc.js`
  - Config file for [ESLint](https://eslint.org).
  - ESLint is a JavaScript "linter". A linter is a tool that highlights issues with your code (like the little red squigglies under code).
- `.gitignore`
  - Config file that prevents specific files and folders from being tracked by git.
  - For example, we ignore `node_modules` because it's a huge folder (~300 MB), and may contain OS-specific code.
- `babel.config.js`
  - Config file for [Babel](https://babeljs.io).
  - Babel is a JavaScript compiler that makes modern JavaScript backwards compatible.
  - Babel is useful because it lets us use cutting-edge JavaScript syntax without worrying about compatibility with older browsers.
- `db.js`
  - Resources for the [JSON Server](https://github.com/typicode/json-server) REST API.
  - JSON Server makes it really easy to create a "fake" REST API.
  - Arbitrarily named.
- `jest.config.js`
  - Config file for [Jest](https://jestjs.io).
  - Jest is a test-runner. It's the program that runs our test files (`*.spec.js` files).
- `package-lock.json`
  - The complete version tree of all third-party dependencies, and their dependencies, and their dependencies, ad infinitum.
  - Automatically generated.
- `package.json`
  - Essentially the manifest for any JavaScript project.
  - Sections:
    - `scripts`
      - When you run `npm run`, you're actually running a command in the `scripts` section.
        - For example, running `npm run test` runs `scripts.test`.
      - Scripts are arbitrary. If you add `"foo": "echo bar"`, then running `npm run foo` will print `bar` in your terminal.
      - You might ask "where is `npm` getting the commands within scripts, like `vue-cli-service` or `jest`?" They can be found in `node_modules/.bin`.
        - For example, the script `"jest --watch"` is actually running `node_modules/.bin/jest --watch`.
    - `dependencies`
      - Third-party dependencies used in production (and usually also during development).
      - When you deploy a JavaScript app, you should only install `dependencies`.
    - `devDependencies`
      - Third-party dependencies only used during development.
      - When you deploy a JavaScript app, you should not install `devDependencies`.
- `vue.config.js`
  - Config file for Vue.
