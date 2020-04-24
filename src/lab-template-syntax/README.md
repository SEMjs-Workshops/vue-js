# Template Syntax Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-template-syntax/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-template-syntax`
   - You'll see test failures. This is expected, since completion of this lab will makes the tests pass.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Instructions

Using Vue, we can interpolate dynamic data into our HTML. This is accomplished using "mustache" syntax:

```hbs
<div>{{ dynamicDataHere }}</div>
```

In the above code, Vue will recognize that `{{ dynamicDataHere }}` should be replaced using dynamic data.

> Mustache syntax isn't new. It's a pattern that's existed for a long time, and is common in server-side frameworks.

Open the UI by browsing to http://localhost:8080. You should see "This app says" on the page, with nothing afterward.

Next, open `App.vue`. You'll see "This app says {{ message }}". This is because Vue doesn't have anything to replace `{{ message }}` with!

Take a look at the `<script>` block. You'll see a `data` function, which returns an empty object. Vue will use that object to interpolate data. Replace the empty object with `{ message: "yo" }`.

If you go back to your browser, you'll see "This app says yo". Vue is interpolating our data into the HTML!

Our tests still aren't passing because they expect the page to say "This app says hello!". Change the data object to make the tests pass.

## Resources

- [Official docs](https://vuejs.org/v2/guide/syntax.html)
