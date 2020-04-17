# Vue Workshop

This workshop teaches Vue.js basics by creating a real, functioning todo app.

## Initial Setup

1. Run `npm install` to install dependencies.
2. Run `npm run start:server` to start the REST API server.
3. In a new terminal, run `npm run serve src/final/mainjs` to start the completed app we'll be building.
4. Browse to http://localhost:8080. You should see the todo app!

## Topics Covered

- Single-file components
  - Keeping a component's HTML, JavaScript, and CSS in one file.
- Directives
  - Add dynamic behavior to DOM elements.
  - Example: using `v-if` for conditional rendering.
- Props
  - Data that's passed from a parent component to a child component.
- Data
  - Data that's managed by the component.
- Methods
  - Component-specific functions.
- Emitting events
  - Passing data from a child component to its parent.
- Communicating with a REST server.
  - We'll have a UI data that's kept in-sync with the server using `GET`, `POST`, and `PATCH` requests.
- The Vuetify UI library.
  - Components that look beautiful out-of-the-box.

## The Workshop

When you're ready to start the first lab, open [src/lab-1/README.md](src/lab-1/README.md).

## Repo Structure

The `src` folder contains multiple Vue apps: the final app (`src/final`) and all of the labs (`src/lab-*`). This is unusual for a Vue project, but it's necessary to simplify this workshop.

## Usage

### Serving the REST API

Most of the labs need to fetch data from a REST API. To start the REST API, run the following command:

```
npm run start:server
```

You can verify the REST API is running by running the following command:

```
curl localhost:3000/todos
```

If you want to simulate a slow REST API, you can add a delay of 2 seconds:

```
npm run start:server -- --delay 2000
```

### Serving Vue Apps

To serve a specific app, run the following command. Make sure you replace `<app>` with an app name (e.g. `lab-1`).

```
npm run serve src/<app>/main.js
```

For example, the following command will start `lab-1`:

```
npm run serve src/lab-1/main.js
```

Browse to http://localhost:8080 to see the app.

### Testing Vue Apps

To run the tests for a specific app, run the following command. Make sure you replace `<app>` with an app name (e.g. `lab-1`).

```
npm test -- src/<app> --watch
```

For example, the following command will run the tests for `lab-1`:

```
npm test -- src/lab-1 --watch
```

Note that watch mode is enabled. The test runner (Jest) will automatically rerun the tests when you make changes.
