# Multiple Components Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-multiple-components/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-multiple-components`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

### Connecting Components

So far, our entire app is inside the `App` component. That's been OK so far, but eventually our app will outgrow that pattern. Having a really big `App` component severely hurts readability. Let's see what a multi-component app looks like.

In this example, we'll have 2 components: `App` and `Hello`. The `Hello` component looks like this:

```vue
<template>
  <div>Hello world!</div>
</template>
```

To use the `Hello` component in the `App` component, we need to do 3 things:

- Import it in the `App` component's `<script>` section.
- Register it in the `App` component's `components` object.
- Use it in the `App` component's `<template>` section.

The `App` component will look like this:

```vue
<template>
  <Hello />
</template>

<script>
import Hello from "./Hello";

export default {
  components: {
    Hello,
  },
};
</script>
```

### Props

When you split your app into multiple components, you'll inevitably need to share data and functions among them. In the previous section, the `Hello` component has static "Hello world!" text. Instead, let's make that text dynamic: it'll be specified in the `App` component.

The `Hello` component would look like this:

```vue
<template>
  <div>Hello world!</div>
</template>

<script>
export default {
  props: ["text"],
};
</script>
```

The `App` component would look like this:

```vue
<template>
  <Hello v-bind:text="text" />
</template>

<script>
import Hello from "./Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      text: "Hello world!",
    };
  },
};
</script>
```

## Instructions

### TodoCreator Component

In this section, we'll move some code from the `App` component into the `TodoCreator` component (found in `components/TodoCreator.vue`). First, we need to decide on the code boundary for the `TodoCreator` component.

Ask yourself two questions about the todo creation process:

- What specifically should the `App` component be concerned with?
- What specifically should the `TodoCreator` component be concerned with?

The `App` component should only care about _what_ the created todo is (i.e. the todo data), and not about _how_ the todo is created. Is there a text input? Is there a voice input? Is there a checkbox? It doesn't matter from the `App` component's perspective! By freeing the `App` component of the _how_, we can drastically change the todo creation process while working on a narrow area of the codebase.

The `TodoCreator` component should be deeply concerned with the todo creation process.

📝 **Your task:** Move the todo creation process into the `TodoCreator` component, which can be found in `components/TodoCreator.vue`. Completion of this task will make all of this section's tests pass.

First, we'll need to import `TodoCreator` into `App`. Add the following code to the top of the `App` component's `<script>` section:

```js
import TodoCreator from "./components/TodoCreator";
```

Now that `TodoCreator` is imported, we can register it. Between the `name` and `computed` attributes in `App`, add the following:

```js
components: {
   TodoCreator,
},
```

Let's start working on the `TodoCreator` component itself. We need to do 3 things:

- Add the todo creation template code.
- Register the `todos` prop.
- Add the `createTodo` method.

So `TodoCreator` should look like this:

```vue
<template>
  <div>
    <input type="text" data-testid="todo-creator-input" v-model="todoText" />
    <button v-on:click="createTodo">Create Todo</button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: this.todoText,
      };

      this.todos.push(todo);
    },
  },
};
</script>
```

In `App`, replace the todo creation template code with the following:

```hbs
<TodoCreator v-bind:todos="todos" />
```

And delete the `createTodo` method in `App`, since `App` isn't responsible for todo creation anymore.

Let's review what we did in this section:

- Imported, registered, and used the `TodoCreator` component in the `App` component.
- Passed `todos` as a prop to the `TodoCreator` component.
- Moved the todo creation process to the `TodoCreator` component.

### TodoList Component

In this section, we'll move some code from the `App` component into the `TodoList` component (found in `components/TodoList.vue`). First, we need to decide on the code boundary for the `TodoList` component.

Ask yourself two questions about the todo rendering process:

- What specifically should the `App` component be concerned with?
- What specifically should the `TodoList` component be concerned with?

The `App` component should only care about _what_ the todos are (i.e. the todos data), and not about _how_ the todos are rendered. How should we style the todo text? Should the "is complete" toggle be a checkbox or button? It doesn't matter from the `App` component's perspective! By freeing the `App` component of the _how_, we can drastically change the todos rendering process while working on a narrow area of the codebase.

The `TodoList` component should be deeply concerned with the todos rendering process.

📝 **Your task:** Move the todo rendering logic into the `TodoList` component, which can be found in `components/TodoList.vue`. Completion of this task will make all of this section's tests pass.

First, we'll need to import `TodoList` into `App`. Add the following code to the top of the `App` component's `<script>` section:

```js
import TodoList from "./components/TodoList";
```

Now that `TodoList` is imported, we can register it. Add `TodoList` to the `components` object:

```js
components: {
   TodoCreator,
   TodoList,
},
```

Let's start working on the `TodoList` component itself. We need to do 3 things:

- Add the todo creation template code.
- Register the `todos` prop.

So `TodoList` should look like this:

```vue
<template>
  <ul>
    <li v-for="todo of todos" v-bind:key="todo.id">
      {{ todo.text }}

      <input
        type="checkbox"
        data-testid="todo-checkbox"
        v-model="todo.isComplete"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["todos"],
};
</script>
```

In `App`, replace the todo creation template code with the following:

```hbs
<TodoList v-bind:todos="todos" />
```

Let's review what we did in this section:

- Imported, registered, and used the `TodoList` component in the `App` component.
- Passed `todos` as a prop to the `TodoList` component.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/forms.html)
