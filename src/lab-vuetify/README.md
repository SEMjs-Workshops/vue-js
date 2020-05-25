# Vuetify Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve lab-vuetify`
2. In a new terminal, start the test runner.
   - Run `npm run test lab-vuetify`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

### Component Libraries

Vuetify is the most popular component library for Vue. But before talking about Vuetify specifically, let's discuss component libraries in general.

No matter how unique your app is, its low-level component needs are likely similar to most sites. Even if you're building the first space tourism site for pets, you'll still need dropdowns/inputs/checkboxes/etc. If you maintain your own component library then you'll need to worry about tests, accessibility, browser compability, and more. Why create all that extra work for yourself?

You might think, "If I use a common component library, then my site will look generic." That sentiment is true to an extent, but popular component libraries are customizable. For example, Vuetify lets you change the colors, icons, and font. While Vuetify will always have the [Material Design](https://material.io/design) feel, many design experts say that's a good thing. Users typically prefer a relatively consistent experience between sites, so lean into their expectations!

### Vuetify

Take a few minutes to browse Vuetify's components in their [API explorer](https://vuetifyjs.com/en/components/api-explorer). They offer a wide variety of components, likely covering all of your UI needs.

## Instructions

### Hook Up Vuetify

For Vue to integrate Vuetify, you need to pass a Vuetify object as an option to Vue. Creation of the Vuetify object is already taken care of in `plugins/vuetify.js`.

📝 **Your task:** In `main.js`, import `vuetify` from `plugins/vuetify`. Add `vuetify` to the options object passed to `Vue`. Completion of this task will make all of this section's tests pass.

Your `main.js` should look like this:

```js
import Vue from "vue";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount("#app");
```

The text input on the page will appear to disappear (it won't have an outline). This is expected, and it'll become visible later in the workshop.

### The `v-app` Wrapper Component

For Vuetify to work properly, you must "wrap" all Vuetify component with the `v-app` component. The `v-app` wrapper allows Vuetify to share "state" (e.g. themes) between components. Since all Vuetify components must be descendents of `v-app`, you might as well make the root component of your whole app.

📝 **Your task:** In the `App` component, make `v-app` the root component. Completion of this task will make all of this section's tests pass.

```vue
<template>
  <v-app>
    <div id="app">
      <!-- Stuff here -->
    </div>
  </v-app>
</template>
```

### The `TodoCreator` Component

Let's make the text input look better. In `components/TodoCreator.vue`, change the `<input>` element to `<v-text-field>`. We can also remove the `type="text"` attribute, since the `<v-text-field>` component is by definition a text input. Don't change any other attribute.

```hbs
<v-text-field
  v-model="todoText"
  @keypress.enter="createTodo"
/>
```

In your browser, you should now see an underline on the text input.

The text input would be more easily identifiable if it had a full outline Just add the `outlined` attribute to the `<v-text-field>` element!

```hbs
<v-text-field
  v-model="todoText"
  @keypress.enter="createTodo"
  outlined
/>
```

In your browser, you should now see an outline around the text input.

Users can clearly see the input, but how do they know what it does? Let's create a label by adding the `label="New Task"` attribute to the `<v-text-field>` element.

```hbs
<v-text-field
  v-model="todoText"
  @keypress.enter="createTodo"
  outlined
  label="New Task"
/>
```

In your browser, you should see the "New Task" label.

The label behavior is pretty cool:

- When the input is empty and not focused, "New Task" appears in the input.
- When you click in the input, the "New Task" label moves up using a smooth animation.

The input is looking pretty good, but it has a lot of padding. To reduce the padding, add the `dense` attribute to the `<v-text-field>` element.

```hbs
<v-text-field
  v-model="todoText"
  @keypress.enter="createTodo"
  outlined
  label="New Task"
  dense
/>
```

### The `TodoList` Component

In the last section, we saw that Vuetify has an easy parallel with HTML: replace `<input type="text">` with `<v-text-input>`. We can do the same thing with lists! In `components/TodoList.vue`, make the following changes:

- Change `<ul>` to `<v-list>`.
- Change `<li>` to `<v-list-item>`.
- Change `<input type="checkbox">` to `<v-checkbox>`.
  - Don't change any attributes besides deleting `type="checkbox"`.

```vue
<template>
  <v-list two-line>
    <v-list-item v-for="todo of todos" v-bind:key="todo.id">
      <span v-bind:class="{ 'line-through': todo.isComplete }">
        {{ todo.text }}
      </span>

      <v-checkbox data-testid="todo-checkbox" v-model="todo.isComplete" />
    </v-list-item>
  </v-list>
</template>
```

In your browser, there should be larger gaps between list items and selected checkboxes should be green.

The checkboxes aren't vertically aligned; that looks kinda ugly. Luckily, Vuetify provides some neat list item layouts. Make the following changes:

- Wrap the `<span>` inside `<v-list-item-content>`.
- Wrap the `<v-checkbox>` inside `<v-list-item-action>`.

```vue
<template>
  <v-list two-line>
    <v-list-item v-for="todo of todos" v-bind:key="todo.id">
      <v-list-item-content>
        <span v-bind:class="{ 'line-through': todo.isComplete }">
          {{ todo.text }}
        </span>
      </v-list-item-content>

      <v-checkbox data-testid="todo-checkbox" v-model="todo.isComplete" />
    </v-list-item>
  </v-list>
</template>
```

In your browser, the checkboxes should be vertically aligned.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuetifyjs.com/en/introduction/why-vuetify)
