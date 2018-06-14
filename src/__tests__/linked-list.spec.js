const LinkedList = require('../linked-list');

test('create LL', () => {
  expect(new LinkedList()).toBeInstanceOf(LinkedList)
});




// move to tail of spec
test('length getter return length', () => {
  const testList = new LinkedList();
  expect(testList.length).toBe(0)
})
test('set length fails', () => {
  const testList = new LinkedList();
  testList.length = 22;
  expect(testList.length).toBe(0)
})