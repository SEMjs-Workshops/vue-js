import { render } from "@testing-library/vue";
import * as fs from "fs";
import cloneDeep from "lodash/cloneDeep";
import * as path from "path";

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
  test("not done message is visible", () => {
    const { getByText } = render(Component);

    getByText("Not done...");
  });

  test("done message is not visible", () => {
    const { queryByText } = render(Component);

    expect(queryByText("All done!")).toBeNull();
  });

  test("not done message is not visible when all todos are complete", () => {
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

  test("done message is visible when all todos are complete", () => {
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

describe("The `v-else` Directive", () => {
  test("v-else directive is used", () => {
    const content = fs.readFileSync(path.join(__dirname, "App.vue"), "utf-8");

    expect(content).toContain("v-else");
  });
});
