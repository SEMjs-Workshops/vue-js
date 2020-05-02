import { fireEvent, render } from "@testing-library/vue";

import Component from "./App.vue";

describe("The `v-model` Directive", () => {
  test("todo creation flow works", async () => {
    const { getByTestId, findByText } = render(Component);
    const input = getByTestId("todo-creator-input");

    await fireEvent.change(input, { target: { value: "Do some stuff" } });

    const button = getByTestId("todo-creator-button");

    await fireEvent.click(button);

    findByText("Do some stuff");
  });
});
