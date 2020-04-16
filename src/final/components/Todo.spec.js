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
