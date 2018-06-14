const Node = require('../Node');

test('new Node returns Object', () => {
  const testNode = new Node("a");
  expect(typeof testNode).toBe("object");
  expect(testNode === testNode).toBeTruthy;
})