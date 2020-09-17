const sum = require("../src/sum");

it("check sum result", () => {
  const result = sum(2, 5);

  expect(result).toBe(7);
});
