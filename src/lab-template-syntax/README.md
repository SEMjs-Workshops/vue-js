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

> Mustache syntax isn't new. It's a pattern that's existed for a long time, and is common in server-side frameworks. Mustache syntax gets its name from the visual similarity between a curly brace (`{`) and a mustache.

### Text

Open the UI by browsing to http://localhost:8080. You should see "This app says" on the page, with nothing afterward.

Next, open `App.vue`. You'll see "This app says {{ message }}". This is because Vue doesn't have anything to replace `{{ message }}` with!

Take a look at the `<script>` block. You'll see a `data` function, which returns an empty object. Vue will use that object to interpolate data. Replace the empty object with `{ message: "yo" }`.

If you go back to your browser, you'll see "This app says yo". Vue is interpolating our data into the HTML!

The `renders message correctly` test is currently failing, because it expects the page to say "This app says hello!". Change the data object to make the test pass.

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

The `renders reversed message correctly` test is currently failing, because it expects the page to say "hello backwards is elloh". Change the `<template>` to make the test pass.

### Computed Properties

We've seen that Vue's template syntax supports complex JavaScript expressions. However, it's bad practice to put complex JavaScript expressions in your view (i.e. your `<template>`).

Which of these templates is easier to quickly understand?

Without computed properties:

```hbs
<div>{{ message.split('').reverse().join('') }}<div>
```

With computed properties:

```hbs
<div>{{ reversedMessage }}<div>
```

To add a computed property to our component, we'll need to add a `computed` function like this:

```js
export default {
  computed: {
    reversedMessage: function() {},
  },
  data() {
    return {
      message: "hello",
    };
  },
};
```

In your template, you'll be using `reversedMessage` as if it's a normal variable. But under the hood, `reversedMessage` is actually a function that Vue will automatically call. Computed properties must be functions because they need to dynamically compute a value. We could update `message` at any time, so `reversedMessage` needs to have the updated `message` value.

Let's use the computed value in the template: change `{{ message.split('').reverse().join('') }}` to `{{ reversedMessage }}`. You'll notice that you now have 2 failing tests:

- `renders reversed message correctly`
- `reversedMessage computed property is correct`

To make these tests pass, the `reverseMessage` computed property will need to return the correct value.

What should `reverseMessage` return? Let's try using the `message.split('').reverse().join('')` expression we had in our template. After saving your file, take a look at the UI terminal process. You should see the following error:

```
error  'message' is not defined  no-undef
```

This error is happening because `message` isn't a global variable. Instead, it's on the component instance itself. So you'll need to access it with `this.message` instead of `message`.

> In JavaScript, the definition `this` is surpringly complicated. But in a Vue computed property, `this` represents the component instance. The component you're creating can be thought of as a "class" which will be "instantiated" when it's actually created.

All of your tests should now pass. You're done with the lab!

## Resources

- [Official docs](https://vuejs.org/v2/guide/syntax.html)
