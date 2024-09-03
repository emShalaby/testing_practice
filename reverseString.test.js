const reverseString = require("./reverseString");
test("should exist", () => {
  expect(reverseString).not.toBeUndefined();
});

test("reverse hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});
