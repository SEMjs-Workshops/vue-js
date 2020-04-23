import { fireEvent, render } from "@testing-library/vue";

import "../plugins/vuetify";
import Component from "./TodoCreator.vue";

test("emits event on submit", async () => {
  const { getByLabelText, emitted } = render(Component);
  const textInput = getByLabelText("New Task");

  await fireEvent.update(textInput, "Also do this");
  await fireEvent.keyPress(textInput, { key: "Enter", code: "Enter" });

  const createTodoEvents = emitted()["create-todo"];

  expect(createTodoEvents.length).toBe(1);

  const createTodoEventArgs = createTodoEvents[0];

  expect(createTodoEventArgs).toEqual([
    { text: "Also do this", isComplete: false },
  ]);
});

test("does not emit event when no text", async () => {
  const { getByLabelText, emitted } = render(Component);
  const textInput = getByLabelText("New Task");

  await fireEvent.keyPress(textInput, { key: "Enter", code: "Enter" });

  const createTodoEvents = emitted()["create-todo"];

  expect(createTodoEvents).toBeUndefined();
});
