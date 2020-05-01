import { fireEvent, render } from "@testing-library/vue";
import cloneDeep from "lodash/cloneDeep";

import Component from "./App.vue";

describe("The `v-on` Directive", () => {
  test("clicking button calls createTodo method", async () => {
    const LocalComponent = cloneDeep(Component);

    LocalComponent.methods.createTodo = jest.fn();

    const { getByText } = render(LocalComponent);

    await fireEvent.click(getByText("Create Todo"));
    expect(LocalComponent.methods.createTodo).toHaveBeenCalledTimes(1);
  });
});

describe("Create Todos", () => {
  test("clicking button creates a todo", async () => {
    const { getByText } = render(Component);

    await fireEvent.click(getByText("Create Todo"));
    getByText("Do foo");
  });
});
