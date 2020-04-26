import { render } from "@testing-library/vue";
// import cloneDeep from "lodash/cloneDeep";

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
  test("visible text is visible", async () => {
    const { getByText } = render(Component);

    getByText("I should be visible");
  });

  test("not visible text is not visible", async () => {
    const { queryByText } = render(Component);

    expect(queryByText("I should not be visible")).toBeNull();
  });
});

describe("The `v-else` Directive", () => {
  test("renders correct stock text", async () => {
    const { getByText, queryByText } = render(Component);

    getByText("Out of stock");
    expect(queryByText("In stock")).toBeNull();
  });
});
