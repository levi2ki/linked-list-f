const Node = require('./Node');

function ExternalLinkedList() {
  let __head = null;
  let __tail = null;
  let __length = 0;

  function LinkedList() {
    this.length;
    this.head;
    this.tail;
  }

  Object.defineProperty(LinkedList.prototype, 'length', {
    get: function() {
      return __length;
    },
    set: function(_) {
      console.info(`length property of ${this.constructor.name} is read-only`)
      void _;
    }
  })

  /* TODO: define getter */
  LinkedList.prototype.getFirst = function () {
    return __head;
  }

  /* TODO: define getter */
  LinkedList.prototype.getLast = function () {
    return __tail;
  }

  LinkedList.prototype.addNext = function (val) {
    const nodeToAdd = new Node(val);

    if (__head === null) {
      __head = nodeToAdd;
    }

    if (__tail !== null) {
      __tail.__next = nodeToAdd;
    }
    __tail = nodeToAdd;
    __length += 1;

    return nodeToAdd.value;
  }

  LinkedList.prototype.addFirst = function (val) {
    const nodeToAdd = new Node(val);

    if (__head === null) {
      __head = nodeToAdd;
      __tail = nodeToAdd;

      return nodeToAdd.value;
    }

    nodeToAdd.__next = __head;
    __head = nodeToAdd;
    __length += 1;

    return nodeToAdd.value;
  }

  LinkedList.prototype.removeLast = function () {
    let prev;
    let current = __head;

    if (__head === null) {
      return null;
    }

    if (__head.__next === null) {
      const val = __head.value;
      __head = null;
      return val;
    }

    while (current.__next !== null) {
      prev = current;
      current = current.__next;
    }

    prev.__next = null;
    __tail = prev;
    __length -= 1;
    return current.value;
  }

  LinkedList.prototype.removeFirst = function () {
    const val = __head.value;
    __head = __head.__next;
    __length -= 1;
    return val;
  }

  return new LinkedList();
}

module.exports = ExternalLinkedList();


const a = new ExternalLinkedList();
const b = new ExternalLinkedList();
a.addNext(1)

console.log(a.getLast());
console.log(b.getLast());
a.length = 200;