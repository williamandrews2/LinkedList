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

    if (this.head === null) {
      this.head = node;
    }

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
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }
  
  pop() {}
  at(index) {}
  contains(value) {}
  find(element) {}
  delete(element) {}
  insertAt(value, index) {}
  removeAt(value, index) {}

  printToArray() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.printToArray();
console.log(`Head: ${list.getHead()}`);
console.log(`Tail: ${list.getTail()}`);
