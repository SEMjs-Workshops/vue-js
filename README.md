# Vue Workshop

This workshop teaches Vue.js basics by creating a real, functioning todo app.

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

## Initial Setup

1. Run `npm install` to install dependencies.
2. Run `npm run start:server` to start the REST API server.
3. In a new terminal, run `npm run serve` to start the UI.
4. Browse to http://localhost:8080

## Repo Structure

This entire repo is one single-page application (SPA), but each lab is essentially standalone. For example, when you're working on Lab 1 you'll only be working inside `src/lab-1`.

The rationale for creating one SPA is to allow all the labs to easily share dependencies. It'd be really annoying if you needed to run `npm install` for each lab!

## Usage

Run `npm run start:server -- --delay 2000` to add a 2 second delay to the REST API server.
