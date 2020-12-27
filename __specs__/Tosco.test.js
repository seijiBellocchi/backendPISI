import sum from "../src/server";

test('Soma', () => {
  expect(sum(1, 2)).toBe(3);
});