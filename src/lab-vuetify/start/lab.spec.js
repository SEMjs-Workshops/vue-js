import * as babelParser from "@babel/parser";
import { render } from "@testing-library/vue";
import * as fs from "fs";
import get from "lodash/get";
import * as path from "path";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";

describe("Hook Up Vuetify", () => {
  test("Vue is instantiated with Vuetify", () => {
    function getMainModule() {
      const mainPath = path.join(__dirname, "main.js");
      const code = fs.readFileSync(mainPath, "utf-8");

      return babelParser.parse(code, { sourceType: "module" });
    }

    function checkVuetifyInVueOptions() {
      function getVuetifyImport(module) {
        return module.program.body.find((node) => {
          if (node.type !== "ImportDeclaration") {
            return false;
          }

          const importPath = get(node, "source.value", "");

          return (
            importPath === "./plugins/vuetify" ||
            importPath === "./plugins/vuetify.js"
          );
        });
      }

      function getVueInstantiation(module) {
        return module.program.body.find((node) => {
          const calleeName = get(node, "expression.callee.object.callee.name");
          return calleeName === "Vue";
        });
      }

      const module = getMainModule();

      if (!getVuetifyImport(module)) {
        return false;
      }

      const node = getVueInstantiation(module);
      const { properties } = node.expression.callee.object.arguments[0];

      return properties.some((node) => {
        return node.key.name === "vuetify" && node.value.name === "vuetify";
      });
    }

    expect(checkVuetifyInVueOptions()).toBe(true);
  });
});

describe("The `v-app` Wrapper Component", () => {
  test("<v-app> is the root element", () => {
    const { container } = render(App, { vuetify });

    expect(container.firstChild.className).toContain("v-application");
  });
});
