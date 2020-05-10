import { render } from "@testing-library/vue";
import * as fs from "fs";
import cloneDeep from "lodash/cloneDeep";
import * as path from "path";

import App from "./App.vue";
import TodoCreator from "./components/TodoCreator.vue";
import TodoList from "./components/TodoList.vue";

describe("App Component", () => {
  test("CSS class is correct", () => {
    const LocalComponent = cloneDeep(App);
    const data = LocalComponent.data();

    LocalComponent.data = function() {
      return {
        ...data,
        todos: [
          { id: 1, isComplete: false, text: "foo" },
          { id: 2, isComplete: true, text: "bar" },
        ],
      };
    };

    const { getByText } = render(LocalComponent);

    expect(getByText("1 todos completed").className).toContain(
      "app-statistics"
    );
  });

  test("CSS import is correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "App.vue"),
      "utf-8"
    );

    expect(content).toContain('src="../static/App.css"');
  });
});

describe("TodoCreator Component", () => {
  test("CSS classes are correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoCreator.vue"),
      "utf-8"
    );

    expect(content).toContain('class="todo-creator-wrapper"');
  });

  test("CSS import is correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoCreator.vue"),
      "utf-8"
    );

    expect(content).toContain('src="../../static/TodoCreator.css"');
  });
});

describe("TodoList Component", () => {
  test("CSS import is correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoList.vue"),
      "utf-8"
    );

    expect(content).toContain('src="../../static/TodoList.css"');
  });

  test("completed todos have line-through class", () => {
    const { getByText } = render(TodoList, {
      props: {
        todos: [
          { id: 1, text: "foo", isComplete: true },
          { id: 2, text: "bar", isComplete: false },
        ],
      },
    });

    expect(getByText("foo").className).toContain("line-through");
    expect(getByText("bar").className).not.toContain("line-through");
  });
});
