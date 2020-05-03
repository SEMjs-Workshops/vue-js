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

Your apps will frequently need to react to events. For example, you may want to run a JavaScript function when a user clicks a button. The `v-on` directive lets us do that.

```hbs
<button v-on:click="doStuff">Click Me</button>
```

In the above example, Vue will run the `doStuff` method when the user clicks on the button. The called method is an "event handler".

> An event handler is a JavaScript method that's called when an event occurs.

## Instructions

### The `v-on` Directive

The app now has a button and a `createTodo` method. However, the button isn't wired up, so it doesn't do anything.

📝 **Your task:** Edit the app so that clicking the button causes an alert to appear. Completion of this task will make all of this section's tests pass.

The `createTodo` method is already coded for us, so we just need to add it to the button. Add the `v-on:click="createTodo"` attribute to the button. Click the button and an alert should appear.

### Create Todos

Now that we've seen how to call a method when an event occurs, let's change the `createTodo` so that it does something more useful.

📝 **Your task:** Update the new `createTodo` method so that it adds a new todo to `todos`. The new todo should have the dummy text `"Do foo"`. The `createTodo` method should be called when the button is clicked. Completion of this task will make all of this section's tests pass.

Update the `createTodo` method should so that it performs the following logic:

```js
const todo = {
  id: this.todos.length + 1,
  isComplete: false,
  text: "Do foo",
};

this.todos.push(todo);
```

Note that `todo.id` is calculated. Since we're using `todo.id` for `v-bind:key`, it needs to be unique for each todo.

Next, add the `createTodo` as the `click` event handler on the button. Now if you click the button, you should see a "Do foo" todo appear in the list.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/events.html)
