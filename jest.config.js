module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "tests",
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts?$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  coverageDirectory: "../coverage/reports",
  testEnvironment: "node",
  testTimeout: 20000,
};
