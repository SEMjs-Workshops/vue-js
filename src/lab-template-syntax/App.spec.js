import { render } from "@testing-library/vue";

import Component from "./App.vue";

test("renders text", async () => {
  const { getByText } = render(Component);

  getByText("This app says hello!");
});
