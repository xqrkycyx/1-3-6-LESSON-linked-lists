/**
 * `Node` is used to store values in a linked list
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * The `LinkedList` class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * The number of nodes in the linked list
   *
   * @returns {number}
   *   The number of nodes in the linked list
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Insert a new value at the head of the list
   * @param value
   *  The new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  // Method: Insert after (i.e., at tail)
  insert(value) {
    const newNode = new Node(value);

    if (this.head) {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  /**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  Function that returns `true` if the current node matches the search criteria
   *
   * @returns {Node|null}
   *  The first node where `isMatch(node, index) === true`,
   *  or `null` if no match is found
   */
  find(isMatch) {
    let index = 0;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        return node;
      }
      index++;
      node = node.next;
    }
    return null;
  }
}

module.exports = LinkedList;
