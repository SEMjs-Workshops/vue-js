# Event Handling Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-event-handling/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-event-handling`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

## Instructions

### The `v-on` Directive

In this section, our goal is to create a "Create Todo" button. When this button is clicked, a new todo is added.

We want to run some logic when the button is clicked, so we'll need to handle the `click` event. Add the following code to your template, above the `<ul>` element.

```hbs
<button v-on:click="createTodo">Create Todo</button>
```

You can see we're using the `v-on` directive with the `click` event. This means we want to handle the `click` event when it occurs "on" the button. But what is `createTodo`? That's our "event handler".

> An event handler is a JavaScript method that's called when an event occurs.

So in summary, every time the button is clicked, the `createTodo` method will be called.

Now we need to make the `createTodo` method. Add this to your component's `methods` object:

```js
createTodo: function() {
  alert("Hi");
},
```

Try clicking the button. You should see the alert message.

This section's tests should now be passing.

### Create Todos

Now that we've seen how to call a method when an event occurs, let's change `createTodo` to actually add a new todo. The test for this section is expecting a todo with the text `"Do foo"` to be added when the button is clicked. Change `createTodo` to make this test pass.

The new logic will be:

```js
const todo = {
  id: this.todos.length + 1,
  isComplete: false,
  text: "Do foo",
};

this.todos.push(todo);
```

Note that `todo.id` is calculated. Since we're using `todo.id` for `v-bind:key`, it needs to be unique for each todo.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/events.html)
