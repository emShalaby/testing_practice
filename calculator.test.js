const calculator = require("./calculator");
test("should exist", () => {
  expect(calculator).not.toBeUndefined();
});

test("add 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("subtract 1 , 2 to equal -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("multiply 3 , 2 to equal 6", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
test("divide 6 , 2 to equal 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
