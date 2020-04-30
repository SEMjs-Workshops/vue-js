import { render } from "@testing-library/vue";
import cloneDeep from "lodash/cloneDeep";

import Component from "./App.vue";

/*
`LocalComponent`
- Clone `Component` because `Component.data` needs to be modified for some 
  tests. If we didn't clone `Component`, then the `Component.data` changes would 
  bleed into other tests.
- `Component.data` is modified because we want to make sure values aren't being
  hardcoded in the template or computed property.
*/

describe("The `v-for` Directive", () => {
  test("each todo text is visible", async () => {
    const { getByText } = render(Component);

    Component.data().todos.forEach((todo) => {
      getByText(todo.text);
    });
  });

  test("each todo text is visible when todos are different", async () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [
          { id: 1, isComplete: false, text: "foo" },
          { id: 2, isComplete: false, text: "bar" },
          { id: 3, isComplete: false, text: "baz" },
        ],
      };
    };

    const { getByText } = render(LocalComponent);

    LocalComponent.data().todos.forEach((todo) => {
      getByText(todo.text);
    });
  });
});
