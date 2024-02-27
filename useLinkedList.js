const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insertAtHead("One");
linkedList.insert(2);

console.log(linkedList); // before 'update' of "One" to "1"

// You can use `find()` to update the value of a node in the list.
linkedList.find((node) => node.value === "One").value = 1;

console.log(linkedList); // after 'update' of "One" to "1"

console.log(
  "find 2",
  linkedList.find((node) => node.value === 2)
);

console.log(
  "find 3",
  linkedList.find((node) => node.value === 3)
);

// RUN THIS USING "node useLinkedList.js"
