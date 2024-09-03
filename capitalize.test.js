const capitalize = require("./capitalize");
test("should exist", () => {
  expect(capitalize).not.toBeUndefined;
});
test("capitialize first letter of 'hello' ", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("trim both sides of a string", () => {
  expect(capitalize("  hello           ")).toBe("Hello");
});
