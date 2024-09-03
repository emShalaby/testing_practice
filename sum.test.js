const sum = require("./sum");
test("should exist", () => {
  expect(sum).not.toBeUndefined;
});
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
