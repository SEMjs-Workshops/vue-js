import { render } from "@testing-library/vue";
import * as fs from "fs";
// import cloneDeep from "lodash/cloneDeep";
import * as path from "path";

import TodoList from "./components/TodoList.vue";

describe("App Component", () => {
  test("CSS classes are correct", () => {
    const content = fs.readFileSync(path.join(__dirname, "App.vue"), "utf-8");

    expect(content).toContain('class="app-wrapper"');
    expect(content).toContain('class="app-statistics"');
  });

  test("CSS import is correct", () => {
    const content = fs.readFileSync(path.join(__dirname, "App.vue"), "utf-8");

    expect(content).toContain("<style scoped>");
    expect(content).toContain('@import "../static/App.css"');
  });
});

describe("TodoCreator Component", () => {
  test("CSS classes are correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoCreator.vue"),
      "utf-8"
    );

    expect(content).toContain('class="todo-creator-wrapper"');
    expect(content).toContain("<style scoped>");
    expect(content).toContain('@import "../../static/TodoCreator.css"');
  });

  test("CSS import is correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoCreator.vue"),
      "utf-8"
    );

    expect(content).toContain('class="todo-creator-wrapper"');
    expect(content).toContain("<style scoped>");
    expect(content).toContain('@import "../../static/TodoCreator.css"');
  });
});

describe("TodoList Component", () => {
  test("CSS import is correct", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "components/TodoList.vue"),
      "utf-8"
    );

    expect(content).toContain("<style scoped>");
    expect(content).toContain('@import "../../static/Todo.css"');
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
