Run the code using the command `node useLinkedList.js` - You will see the following output:

```
// console.log(linkedList); // before using find() to update "One" to "1" :

LinkedList {
  head: Node { value: 'One', next: Node { value: 2, next: null } }
}

// console.log(linkedList); // AFTER using find() to update "One" to "1" :

LinkedList {
  head: Node { value: 1, next: Node { value: 2, next: null } }
}

// console.log(
//   "find 2",
//   linkedList.find((node) => node.value === 2)
// );

// console.log(
//  "find 3",
//  linkedList.find((node) => node.value === 3)
// );


find 2 Node { value: 2, next: null }
find 3 null

```
