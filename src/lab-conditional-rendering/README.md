# Conditional Rendering Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-conditional-rendering/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-conditional-rendering`
   - You'll see test failures. This is expected, since completion of this lab will makes the tests pass.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Instructions

### Directives

We've seen that we can inject dynamic data inside of DOM elements, but how do we make DOM elements _themselves_ dynamic? The answer is a Vue concept call "directives". Directives as special Vue-specific attributes for DOM elements.

### The `v-if` Directive

The `v-if` directive is like `if` statements in other languages: if an expression is true, then do something. For a `v-if` directive, "do something" is "render this DOM element". Let's look at some examples.

So this JavaScript conditional:

```js
if (count > 0) {
  /* Show <div>Hello</div> */
}
```

Could be represented in Vue like this:

```hbs
<div v-if="count > 0">Hello</div>
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
<div v-if="false">I'm visible</div>
<div v-if="1 !== 1">I'm visible</div>
<div v-if="3 < 2">I'm visible</div>
<div v-if="'foo' === 'bar">I'm visible</div>
```

Let's fix 2 of the failing tests:

- `visible text is visible`
- `not visible text is not visible`

To make these tests pass, we'll need to change the `v-if` expressions in the template. Go ahead and make those changes.

### The `v-else` Directive

The `v-else` directive is like `else` statements in other languages: if an expression is not true, then do something else.

So this JavaScript conditional:

```js
if (isInStock) {
  /* Show <div>In stock</div> */
} else {
  /* Show <div>Out of stock</div> */
}
```

Could be represented in Vue like this:

```hbs
<div v-if="isInStock">In stock</div>
<div v-else>Out of stock</div>
```

Add the above `<div>`s to your template. Your browser should show "In stock", but the tests for this section are still failing. Change the `isInStock` data variable to `false` to make the tests pass.

## Resources

- [Official docs](https://vuejs.org/v2/guide/conditional.html)
