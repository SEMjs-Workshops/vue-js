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
  test("renders message correctly", async () => {
    const { getByText } = render(Component);

    getByText("This app says hello");
  });

  test("renders message correctly when data.message is different", async () => {
    const LocalComponent = cloneDeep(Component);

    LocalComponent.data = function() {
      return {
        message: "foobar",
      };
    };

    const { getByText } = render(LocalComponent);

    getByText("This app says foobar");
  });
});

describe("JavaScript Expressions", () => {
  test("renders reversed message correctly", () => {
    const { getByText } = render(Component);

    getByText("hello backwards is olleh");
  });

  test("renders reversed message correctly when data.message is different", () => {
    const LocalComponent = cloneDeep(Component);

    LocalComponent.data = function() {
      return {
        message: "foobar",
      };
    };

    const { getByText } = render(LocalComponent);

    getByText("foobar backwards is raboof");
  });
});

describe("Computed Properties", () => {
  test("reversedMessage computed property is correct", () => {
    const localThis = { message: "hello" };

    expect(Component.computed.reversedMessage.call(localThis)).toBe("olleh");
  });

  test("reversedMessage computed property is correct when data.message is different", () => {
    const localThis = { message: "foobar" };

    expect(Component.computed.reversedMessage.call(localThis)).toBe("raboof");
  });
});
