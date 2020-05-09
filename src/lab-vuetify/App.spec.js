import { fireEvent, render } from "@testing-library/vue";
import * as fs from "fs";
import cloneDeep from "lodash/cloneDeep";
import * as path from "path";

import Component from "./App.vue";

describe("TodoCreator Component", () => {
  test("App imports component", () => {
    const content = fs.readFileSync(path.join(__dirname, "App.vue"), "utf-8");

    expect(content).toContain("import TodoCreator");
    expect(content).toContain("<TodoCreator");
  });

  test("todo creation flow works", async () => {
    const { getByTestId, getByText, findByText } = render(Component);
    const input = getByTestId("todo-creator-input");

    await fireEvent.update(input, "Do some stuff");

    const button = getByText("Create Todo");

    await fireEvent.click(button);
    await findByText("Do some stuff");
  });
});

describe("TodoList Component", () => {
  test("App imports component", () => {
    const content = fs.readFileSync(path.join(__dirname, "App.vue"), "utf-8");

    expect(content).toContain("import TodoList");
    expect(content).toContain("<TodoList");
  });

  test("todo list renders correctly", async () => {
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

    const { getByText } = render(LocalComponent);

    getByText("foo");
    getByText("bar");
    getByText("baz");
  });

  test("toggling a checkbox updates the completed todos count", async () => {
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
