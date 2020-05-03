import { fireEvent, render } from "@testing-library/vue";
import cloneDeep from "lodash/cloneDeep";

import Component from "./App.vue";

describe("The `v-model` Directive", () => {
  test("todo creation flow works", async () => {
    const { getByTestId, findByText } = render(Component);
    const input = getByTestId("todo-creator-input");

    await fireEvent.update(input, "Do some stuff");

    const button = getByTestId("todo-creator-button");

    await fireEvent.click(button);
    await findByText("Do some stuff");
  });
});

describe("Updating Todo `isComplete`", () => {
  test("toggling a checkbox updates the model", async () => {
    const LocalComponent = cloneDeep(Component);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [
          { id: 1, isComplete: false, text: "foo" },
          { id: 2, isComplete: false, text: "bar" },
          { id: 3, isComplete: true, text: "baz" },
        ],
      };
    };

    const { getAllByTestId, findByText } = render(LocalComponent);
    const checkboxes = getAllByTestId("todo-checkbox");

    await findByText("1 todos completed");
    await fireEvent.click(checkboxes[0]);
    await findByText("2 todos completed");
  });
});
