import { render } from "@testing-library/vue";

import Component from "./App.vue";

test("renders message", async () => {
  const { getByText } = render(Component);

  getByText("This app says hello");
});

test("renders reversed message", () => {
  const { getByText } = render(Component);

  getByText("hello backwards is olleh");
});
