//Time Complexity: O(N)
//Auxiliary Space: O(1)

let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// Function that detects loop in the list
function detectAndRemoveLoop(node) {
  let slow = node,
    fast = node;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    // If slow and fast meet at same
    // point then loop is present
    if (slow == fast) {
      removeLoop(slow, node);
      return 1;
    }
  }
  return 0;
}

// Function to remove loop
function removeLoop(loop, head) {
  let ptr1 = loop;
  let ptr2 = loop;

  // Count the number of nodes in loop
  let k = 1,
    i;

  while (ptr1.next != ptr2) {
    ptr1 = ptr1.next;
    k++;
  }

  // Fix one pointer to head
  ptr1 = head;

  // And the other pointer to k nodes after head
  ptr2 = head;
  for (i = 0; i < k; i++) {
    ptr2 = ptr2.next;
  }

  // Move both pointers at the same pace, they will meet at loop starting node
  while (ptr2 != ptr1) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // Get pointer to the last node
  while (ptr2.next != ptr1) {
    ptr2 = ptr2.next;
  }

  // Set the next node of the loop ending node to fix the loop
  ptr2.next = null;
}

// Function to print the linked list
function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

//Example-1
// Q- Input: N = 3 / value[] = {1,3,4}  / X = 2
// head = new Node(1);
// head.next = new Node(3);
// head.next.next = new Node(4);
// Creating a loop for testing
//if(head.next.next.next = head.next.next){

//Example-2
//Input:
//N = 4  / value[] = {1,8,3,4}  /  X = 0

// head = new Node(1);
// head.next = new Node(8);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);

// Creating a loop for testing
// if(head.next.next.next.next = head.next.next){

//Example-3

// Creating a loop for testing
//Input: N = 4 /  value[] = {1,2,3,4}   /  X = 1

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

//print
if ((head.next.next.next.next = head.next.next)) {
  detectAndRemoveLoop(head);
  console.log("Linked List loop is present : " + 1);
} else {
  console.log("Linked List loop is not present : " + 0);
}
