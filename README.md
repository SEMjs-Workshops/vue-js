# Vue Workshop

This workshop teaches Vue.js basics by creating a real, functioning todo app.

## Initial Setup

1. Run `npm install` to install dependencies.
2. Run `npm run serve:final` to start completed app we'll be building.
3. Browse to http://localhost:8080. You should see the todo app!
4. Stop the `serve:final` script.
5. When you're ready to start the first lab, click the link in the [Labs](#labs) section.

## Labs

1. [Template syntax](src/lab-template-syntax/README.md)
2. [Conditional rendering](src/lab-conditional-rendering/README.md)
3. [List rendering](src/lab-list-rendering/README.md)
4. Attribute binding
5. Class binding
6. Form input binding
7. Event handling
8. Components
9. [Backend API](src/lab-backend-api/README.md)

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

To serve a specific app, run the following command. Make sure you replace `<app>` with an app name (e.g. `lab-backend-api`).

```
npm run serve src/<app>/main.js
```

For example, the following command will start `lab-backend-api`:

```
npm run serve src/lab-backend-api/main.js
```

Browse to http://localhost:8080 to see the app.

### Testing Vue Apps

To run the tests for a specific app, run the following command. Make sure you replace `<app>` with an app name (e.g. `lab-backend-api`).

```
npm test -- src/<app> --watch
```

For example, the following command will run the tests for `lab-backend-api`:

```
npm test -- src/lab-backend-api --watch
```

Note that watch mode is enabled. The test runner (Jest) will automatically rerun the tests when you make changes.
