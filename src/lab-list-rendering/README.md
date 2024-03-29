# List Rendering Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve lab-list-rendering`
2. In a new terminal, start the test runner.
   - Run `npm run test lab-list-rendering`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

The `v-for` directive is like a `for` loop in JavaScript: you want to perform logic on each item in an array. For a `v-for` directive, that "logic" is rendering each item.

Let's look at an example. Let's say we had the following array in our data:

```js
colors = ["red", "blue", "yellow"];
```

And we added the following code to our template:

```hbs
<div v-for="color of colors" v-bind:key="color">
  {{ color }}
</div>
```

The resulting HTML on the page would be:

```html
<div>red</div>
<div>blue</div>
<div>yellow</div>
```

In the above example you'll notice the `v-bind:key` directive. We won't cover that directive in detail workshop. Just remember that you should always use it when using `v-for`, and that its values should be unique throughout the array.

> The `v-bind:key` directive essentially makes Vue render more "accurately". Without a unique key for each item in a list, you may get some unexpected behavior. For more information on the `v-bind:key` directive, see [this page](https://vuejs.org/v2/api/#key) in the official docs.

In this lab, we have an array of todos and we want to render each one in the same way. This scenario is exactly what `v-for` was made for.

## Instructions

### The `v-for` Directive

Go to your browser and you'll see two todos. If you look at `App.vue`, you'll see that we also have two todos in our data. Lab done, right? Well, not quite.

Add another item to `todos`:

```js
[
  { id: 1, isComplete: false, text: "Call mom" },
  { id: 2, isComplete: true, text: "Buy groceries" },
  { id: 3, isComplete: true, text: "Brush teeth" },
];
```

And now go back to your browser. You won't see the "Brush teeth" todo since we've only hardcoded two todos in our template. We need to render `N` todos, where `N` is the length of the `todos` array.

📝 **Your task:** Use the `v-for` directive to render the list of todos. Completion of this task will make all of this section's tests pass.

Replace the two `<li>` elements with a single `<li>` element that has the `v-for` attribute. Since we want render each `todo` in the `todos` array, you'll want to use `v-for="todo of todos"`.

Inside the `<li>` element, you can use the `todo` variable. The `todo` variable will be the current todo object in the loop. That means you can get the todo text using `todo.text`.

If you didn't add the `v-bind:key` directive, you'll get a `vue/require-v-for-key` error. We need to use something unique for the key, so `todo.id` works perfectly.

This is the end of the lab, but there are two more optional sections.

### Just for Fun

Let's see what happens if we add a todo after the page is already loaded. Open the JavaScript console in your browser.

> To open the JavaScript console in Chrome, go to View -> Developer -> JavaScript console.

> To open the JavaScript console in Firefox, go to Tools -> Web Developer -> Web Console.

To add a todo, run the following code in the JavaScript console:

```js
document.getElementById("app").__vue__.$children[0].todos.push({
  id: 99,
  isComplete: false,
  text: "Go to Mars",
});
```

> The above code is not the right way to manipulate Vue data. We'll cover the right way (the Vue DevTools extension) in a later lab.

You should see "Go to Mars" show up in your todo list.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

### Why Is `index` a Bad Key?

If you want the `index` for each iteration of the loop, you can get it like this:

```hbs
<div v-for="(color, index) of colors" v-bind:key="color">
  {{ color }} at index {{ index }}
</div>
```

So you might be wondering: why can't I just use `index` for my key? In most cases, that'll work fine. But using `index` as your key can lead to some sneaky bugs.

An example of a bug is when the order of your array changes. If you use `index` as your key, then the first item will always have the key `0`. So what happens if you move the first item to index `1`? Vue won't know it's the same item. Here's a working example of the bug:

https://jsbin.com/wohima/edit?js,output

## Resources

- [Official docs](https://vuejs.org/v2/guide/list.html)
