# Vue Workshop

Objectives:

- Learn the basics of Vue by building a real app.
- Each lab teaches a Vue concept by applying it to the app.
- No instructor needed. While workshop instructors are beneficial, this workshop's documentation is sufficient enough to stand alone.
- Pre-written tests give feedback on whether a lab section was completed correctly.

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
6. Attribute binding
7. Class binding
8. Components
9. [Backend API](src/lab-backend-api/README.md)

## Repo Structure

The `src` folder contains multiple Vue apps: the final app (`src/final`) and all of the labs (`src/lab-*`). This is unusual for a Vue project, but it's necessary to simplify this workshop.
