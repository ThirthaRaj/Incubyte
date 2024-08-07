const sum = require('../index')

describe("Sum numbers in string", () => {
  test("returns 0 if the string is empty", () => {
    expect(sum('')).toBe(0);
  });

  test("return 6 by ignoring \n and other delimiters", () => {
    expect(sum('1\n2,3')).toBe(6);
  });

  test("return 3 by ignoring \n and other delimiters", () => {
    expect(sum('//;\n1;2')).toBe(3);
  });

  test("throws an error if number is negative", () => {
    expect(() => sum('-1')).toThrow();
  });
});