module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    ".*\\.(js)$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
};
