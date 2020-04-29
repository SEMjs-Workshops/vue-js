# Conditional Rendering Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-conditional-rendering/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-conditional-rendering`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Instructions

### Directives

We've seen that we can inject dynamic data inside of DOM elements, but how do we make DOM elements _themselves_ dynamic? The answer is a Vue concept call "directives". Directives are special Vue-specific attributes for DOM elements.

### The `v-if` Directive

The `v-if` directive is like an `if` statement in other languages: if an expression is true, then do something. For a `v-if` directive, "do something" is "render this DOM element". Let's look at some examples.

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

> You can access your component's data within `v-if` expressions.

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

Some of this section's tests are failing, because the `All done!` and `Not done...` DOM elements aren't conditional. Add `v-if` directives to these 2 `<div>` elements so that the tests pass.

Hint: you'll need to compare the `completedTodosCount` computed property and the length of `todos`.

### The `v-else` Directive

The `v-else` directive is like an `else` statement in other languages: if an expression is not true, then do something else.

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

For the `<div>` element around `Not done...`, replace the `v-if` directive with `v-else`. This should have no effect on the page or the tests, but is a cleaner conditional (since all tasks are either completed or not).

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/conditional.html)
