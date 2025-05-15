class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node; // set the head in the case of an empty linked list
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.length++;
  }

  prepend(element) {
    let node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head.element;
  }

  getTail() {
    if (!this.head) return null;

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  pop() {
    // empty list
    if (!this.head) return;

    // list contains only one element
    if (!this.head.next) {
      this.head = null;
      this.length--;
    }

    // more than one element
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.length--;
  }

  at(index) {
    if (index >= this.length) return null;
    if (index === 0) return this.head.element;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.element) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(element) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.element === element) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  delete(element) {
    if (!this.head) return;

    if (currentNode.element === element) {
      this.head = currentNode.next;
      this.length--;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.element === element) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  insertAt(value, index) {}
  removeAt(value, index) {}

  printToArray() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return result;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(list.printToArray());

console.log(list.printToArray());
