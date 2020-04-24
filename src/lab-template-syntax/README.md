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

### Mustache Syntax

Using Vue, we can interpolate dynamic data into our HTML. This is accomplished using "mustache" syntax:

```hbs
<div>{{ dynamicDataHere }}</div>
```

In the above code, Vue will recognize that `{{ dynamicDataHere }}` should be replaced using dynamic data.

> Mustache syntax isn't new. It's a pattern that's existed for a long time, and is common in server-side frameworks.

### Text

Open the UI by browsing to http://localhost:8080. You should see "This app says" on the page, with nothing afterward.

Next, open `App.vue`. You'll see "This app says {{ message }}". This is because Vue doesn't have anything to replace `{{ message }}` with!

Take a look at the `<script>` block. You'll see a `data` function, which returns an empty object. Vue will use that object to interpolate data. Replace the empty object with `{ message: "yo" }`.

If you go back to your browser, you'll see "This app says yo". Vue is interpolating our data into the HTML!

The `renders message` test is currently failing, because it expects the page to say "This app says hello!". Change the data object to make the test pass.

### JavaScript Expressions

In the previous section, we interpolated a string. But Vue supports full JavaScript expressions! All of the following are valid interpolations:

```hbs
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
```

Let's give it a try. Below the `<div>` from the last section, add the following code:

```hbs
<div>{{ message.split('').reverse().join('') }}<div>
```

You should see the string "olleh" (the `message` backwards) on the page.

The `renders reversed message` test is currently failing, because it expects the page to say "hello backwards is elloh". Change the `<template>` to make the test pass.

## Resources

- [Official docs](https://vuejs.org/v2/guide/syntax.html)
