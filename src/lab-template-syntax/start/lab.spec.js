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

describe("Text", () => {
  test("renders app name correctly", async () => {
    const { getByText } = render(Component);

    getByText("Todo-aloo");
  });

  test("renders app name correctly when appName is different", async () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        appName: "foobar",
      };
    };

    const { getByText } = render(LocalComponent);

    getByText("foobar");
  });
});

describe("JavaScript Expressions", () => {
  test("renders completed todos message correctly", () => {
    const { getByText } = render(Component);

    getByText("1 todos completed");
  });

  test("renders completed todos message correctly when todos is different", () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [
          { isComplete: false },
          { isComplete: true },
          { isComplete: true },
        ],
      };
    };

    const { getByText } = render(LocalComponent);

    getByText("2 todos completed");
  });
});

describe("Computed Properties", () => {
  test("completedTodosCount computed property is correct", () => {
    const localThis = Component.data();

    expect(Component.computed.completedTodosCount.call(localThis)).toBe(1);
  });

  test("completedTodosCount computed property is correct when todos is different", () => {
    const localThis = {
      todos: [
        { isComplete: false },
        { isComplete: true },
        { isComplete: true },
      ],
    };

    expect(Component.computed.completedTodosCount.call(localThis)).toBe(2);
  });
});
