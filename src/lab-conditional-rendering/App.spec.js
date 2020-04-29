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

describe("The `v-if` Directive", () => {
  test("not done message is visible", async () => {
    const { getByText } = render(Component);

    getByText("Not done...");
  });

  test("done message is not visible", async () => {
    const { queryByText } = render(Component);

    expect(queryByText("All done!")).toBeNull();
  });

  test("not done message is not visible when all todos are complete", async () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [{ isComplete: true }],
      };
    };

    const { queryByText } = render(LocalComponent);

    expect(queryByText("Not done...")).toBeNull();
  });

  test("done message is visible when all todos are complete", async () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [{ isComplete: true }],
      };
    };

    const { getByText } = render(LocalComponent);

    getByText("All done!");
  });
});
