# Linked List Implementation (JavaScript)

This project is a simple implementation of a **singly linked list** in JavaScript. It was created as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists)'s JavaScript curriculum, focusing on building data structures from scratch to better understand how they work under the hood.

## 🔧 Features

The `LinkedList` class includes the following methods:

- `append(element)` — Adds a new node with the given value to the end of the list.
- `prepend(element)` — Adds a new node to the beginning of the list.
- `isEmpty()` — Returns `true` if the list is empty.
- `size()` — Returns the number of elements in the list.
- `getHead()` — Returns the value of the head node.
- `getTail()` — Returns the value of the last node in the list.
- `at(index)` — Returns the value at a given index.
- `pop()` — Removes the last element from the list.
- `contains(value)` — Returns `true` if the value exists in the list.
- `find(element)` — Returns the index of the node containing the value, or `-1` if not found.
- `delete(element)` — Removes the first occurrence of a value from the list.
- `insertAt(value, index)` — Inserts a node with the given value at the specified index.
- `removeAt(index)` — Removes the node at the specified index.
- `printToArray()` — Returns the entire list as a JavaScript array.

## 📁 Files

- `LinkedList.js` — Contains the `Node` and `LinkedList` class definitions.
- `main.js` — A demo file to test and use the linked list functions.
- `package.json` — Configured with `"type": "module"` to support ES Module syntax.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed

### Running the Project

1. Clone the repository or download the files.
2. Navigate to the project directory in your terminal.
3. Make sure your `package.json` contains `"type": "module"`.
4. Run:

```bash
node main.js
