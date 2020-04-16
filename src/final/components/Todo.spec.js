import { render } from "@testing-library/vue";

import "../../plugins/vuetify";
import Todo from "./Todo.vue";

test("renders text", async () => {
  const props = {
    todo: {
      id: 0,
      isComplete: false,
      text: "Do this",
    },
  };

  const { getByText } = render(Todo, { props });

  getByText("Do this");
});

test("renders properly when todo is complete", async () => {
  const props = {
    todo: {
      id: 0,
      isComplete: true,
      text: "Do this",
    },
  };

  const { getByTestId } = render(Todo, { props });
  const isCompleteCheckbox = getByTestId("is-complete");

  expect(isCompleteCheckbox.checked).toEqual(true);
});

test("renders properly when todo is not complete", async () => {
  const props = {
    todo: {
      id: 0,
      isComplete: false,
      text: "Do this",
    },
  };

  const { getByTestId } = render(Todo, { props });
  const isCompleteCheckbox = getByTestId("is-complete");

  expect(isCompleteCheckbox.checked).toEqual(false);
});
