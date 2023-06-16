//Time Complexity: O(N)
//Auxiliary Space: O(1)

// A Linked List Node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to create Node
function getNode(data) {
  let temp = new ListNode(data);
  temp.next = null;
  return temp;
}

// Function to print the Linked List
function printList(head) {
  while (head.next) {
    console.log(head.val, " -> ");
    head = head.next;
  }
  console.log(head.val, "");
}

// Function that removes continuous nodes
// whose sum is K
function removeZeroSum(head, K) {
  // Root node initialise to 0
  let root = new ListNode(0);

  // Append at the front of the given Linked List
  root.next = head;

  // Map to store the sum and reference of the Node
  let umap = new Map();

  umap.set(0, root);

  // To store the sum while traversing
  let sum = 0;

  // Traversing the Linked List
  while (head != null) {
    // Find sum
    sum += head.val;

    // If found value with (sum - K)
    if (umap.has(sum - K) == true) {
      let prev = umap.get(sum - K);
      let start = prev;

      // Delete all the node traverse till current node
      let aux = sum;

      // Update sum
      sum = sum - K;

      // Traverse till current head
      while (prev != head) {
        prev = prev.next;
        aux += prev.val;
        if (prev != head) umap.delete(aux);
      }

      // Update the start value to the next value of current head
      start.next = head.next;
    }

    // If (sum - K) value not found
    else umap.set(sum, head);

    head = head.next;
  }

  // Return the value of updated head node
  return root.next;
}

//Example -1  Create Linked List head = [1,2,-3,3,1
// let head = getNode(1)
// head.next = getNode(2)
// head.next.next = getNode(-3)
// head.next.next.next = getNode(3)
// head.next.next.next.next = getNode(1)

//Example-2  Create Linked List head = [1,2,3,-3,4]
// let head = getNode(1)
// head.next = getNode(2)
// head.next.next = getNode(3)
// head.next.next.next = getNode(-3)
// head.next.next.next.next = getNode(4)

//Example -3 Create Linked List head = [1,2,3,-3,-2]
let head = getNode(1);
head.next = getNode(2);
head.next.next = getNode(3);
head.next.next.next = getNode(-3);
head.next.next.next.next = getNode(-2);

// Example -1 sum of given elements
// let K = 5

//Example -2 sum of given elements
//let K = 7

//Example -3 sum of given elements
let K = 1;

// Function call to get head node of the updated Linked List
head = removeZeroSum(head, K);

// Print the updated Linked List
if (head != null) printList(head);
console.log(`Final Linked list is = ` + [K]);
