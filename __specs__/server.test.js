import sum from "../src/server";

test('Funcionou', () => {
  expect(sum(1, 2)).toBe(3);
});