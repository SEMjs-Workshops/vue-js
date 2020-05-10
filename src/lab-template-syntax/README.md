# Template Syntax Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve lab-template-syntax/start/main.js`
2. In a new terminal, start the test runner.
   - Run `npm run test lab-template-syntax`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

Using Vue, we can interpolate dynamic data into our HTML. This is accomplished using "mustache" syntax:

```hbs
<div>{{ dynamicData }}</div>
```

In the above code, Vue will recognize that `{{ dynamicData }}` should be replaced using the variable `dynamicData`.

> Mustache syntax isn't new. It's a pattern that's existed for a long time, and is common in server-side frameworks. Mustache syntax gets its name from the visual similarity between a curly brace (`{`) and a mustache.

## Instructions

### Text

Open the UI by browsing to http://localhost:8080. You should see "app name here" on the page.

Next, open `App.vue`. You'll see `<div>{{ appName }}</div>` in the template, and `appName: "app name here"` in the data. Vue is dynamically inserting `appName` for us.

If you look at your test runner, you'll see a failing test for this section. The `renders app name correctly` test is expecting "Todo-aloo" (the real app name) to appear on the page.

📝 **Your task:** Make "Todo-aloo" appear on the page by changing the `appName` data. Completion of this task will make all of this section's tests pass.

### JavaScript Expressions

In the previous section, we interpolated a string. But Vue supports full JavaScript expressions! All of the following are valid interpolations:

```hbs
<div>{{ 1 + 2 }}</div>
<div>{{ appName ? 'YES' : 'NO' }}</div>
<div>{{ todos.filter((todo) => todo.isComplete).length }}</div>
```

📝 **Your task:** Make the page say "N todos completed", where N is dynamically calculated using a JavaScript expression. Completion of this task will make all of this section's tests pass.

Add the following element to your template:

```hbs
<div>N todos completed</div>
```

Next, we'll need to replace `N` with the following JavaScript expression:

```hbs
{{ todos.filter((todo) => todo.isComplete).length }}
```

### Computed Properties

We've seen that Vue's template syntax supports complex JavaScript expressions. However, it's bad practice to put complex JavaScript expressions in the view (i.e. the template).

Which of the following templates is easier to quickly understand?

This (without computed properties):

```hbs
<div>{{ todos.filter((todo) => todo.isComplete).length }} todos completed</div>
```

Or this (with computed properties):

```hbs
<div>{{ completedTodosCount }} todos completed</div>
```

To add a computed property to our component, we'll need to add a `computed` function like this:

```js
export default {
  data() {
    return {
      appName: "Todo-aloo",
      todos: [
        { isComplete: false, text: "Call mom" },
        { isComplete: true, text: "Buy groceries" },
      ],
    };
  },
  computed: {
    completedTodosCount: function() {
      return 0;
    },
  },
};
```

In your template, you can use `completedTodosCount` as if it's a normal variable. But under the hood, `completedTodosCount` is actually a function that Vue will automatically call.

> Computed properties must be functions because they need to dynamically compute a value. Component data could be updated at any time, so computed properties need to consume component data each time they're used.

📝 **Your task:** For the "N todos completed" message, use the `completedTodosCount` computed property instead of the hardcoded JavaScript expression. Completion of this task will make all of this section's tests pass.

Let's use the computed value in the template: change `{{ todos.filter((todo) => todo.isComplete).length }}` to `{{ completedTodosCount }}`. The `completedTodosCount` calculated property is currently returning a hardcoded `0`. Instead we'll need to calculate the real value.

Try making `completedTodosCount` return the `todos.filter((todo) => todo.isComplete).length` expression we had in our template. After saving your file, take a look at the UI terminal process. You should see the following error:

```
error  'todos' is not defined  no-undef
```

This error is happening because `todos` isn't a global variable. Instead, it's on the component instance itself. So you'll need to access it with `this.todos` instead of `todos`.

> In JavaScript, the definition `this` is surpringly complicated. But in a Vue computed property, `this` represents the component instance. The component you're creating can be thought of as a "class" which will be "instantiated" when it's actually rendered on the page.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/syntax.html)
