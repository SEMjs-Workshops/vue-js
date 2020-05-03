# Conditional Rendering Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-conditional-rendering/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-conditional-rendering`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

We've seen that we can inject dynamic data inside of DOM elements (e.g. a `<div>`), but how do we make DOM elements _themselves_ dynamic? The answer is a Vue concept called "directives".

Directives are placed on DOM elements like any other attribute, but have their own Vue-specific behavior. We'll cover directives in more detail throughout this workshop. For now, just know that you can identify a directive by looking for the `v-` prefix (e.g. `v-if` or `v-for`).

## Instructions

### The `v-if` Directive

The `v-if` directive is like an `if` statement in JavaScript: if an expression is true, then do something. For a `v-if` directive, "do something" is "render this DOM element". Let's look at some examples.

This JavaScript conditional:

```js
if (myValue === 1) {
  /* Show <div>True!</div> */
}
```

Could be represented in Vue like this:

```hbs
<div v-if="myValue === 1">True!</div>
```

> You can access your component's data within directives.

All of the following DOM elements will render:

```hbs
<div v-if="true">I'm visible</div>
<div v-if="1 === 1">I'm visible</div>
<div v-if="3 > 2">I'm visible</div>
<div v-if="'foo' !== 'bar">I'm visible</div>
```

None of the following DOM elements will render:

```hbs
<div v-if="false">I'm not visible</div>
<div v-if="1 !== 1">I'm not visible</div>
<div v-if="3 < 2">I'm not visible</div>
<div v-if="'foo' === 'bar">I'm not visible</div>
```

📝 **Your task:** Make the `All done!` message appear only when all todos are complete, and the `Not done...` message appear only when some todos are incomplete. In other words, these messages are mutually exclusive. Completion of this task will make all of this section's tests pass.

Add the `v-if` directive onto the messages' `<div>` elements, like this:

```hbs
<div v-if="completedTodosCount === todos.length">All done!</div>
<div v-if="completedTodosCount < todos.length">Not done...</div>
```

### The `v-else` Directive

The `v-else` directive is like an `else` statement in JavaScript: if an expression is not true, then do something else.

So this JavaScript conditional:

```js
if (myValue === 1) {
  /* Show <div>True!</div> */
} else {
  /* Show <div>False...</div> */
}
```

Could be represented in Vue like this:

```hbs
<div v-if="myValue === 1">True!</div>
<div v-else>False...</div>
```

Our template currently uses two `v-if` directives, but really should use a `v-else`. Using `v-else` will be a cleaner conditional, since the user has either completed all of the todos or has not completed all of the todos.

📝 **Your task:** For one of the messages use the `v-else` directive instead of `v-if`.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/conditional.html)
