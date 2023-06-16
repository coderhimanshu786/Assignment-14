//Time Complexity: O(N)
//Auxiliary Space: O(1)

// Linked List Node
class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}
// A utility function to create a new node
function newNode(key) {
  let temp = new Node();
  temp.data = key;
  temp.next = null;
  return temp;
}

// Rearranges given linked list such that all even positioned nodes are before odd positioned. Returns new head of linked List.
function rearrangeEvenOdd(head) {
  // Corner case
  if (head == null) return null;

  // Initialize first nodes of even and odd lists
  let odd = head;
  let even = head.next;

  // Remember the first node of even list so that we can connect the even list at the end of odd list.
  let evenFirst = even;

  while (1 == 1) {
    // If there are no more nodes, then connect first node of even list to the last node of odd list
    if (odd == null || even == null || even.next == null) {
      odd.next = evenFirst;
      break;
    }

    // Connecting odd nodes
    odd.next = even.next;
    odd = even.next;

    // If there are NO more even nodes after current odd.
    if (odd.next == null) {
      even.next = null;
      odd.next = evenFirst;
      break;
    }

    // Connecting even nodes
    even.next = odd.next;
    even = odd.next;
  }
  return head;
}

// A utility function to print a linked list
function printlist(node) {
  while (node != null) {
    console.log((node.data) + "->");
    node = node.next;
  }
}

// Example 1-- Input: head = [1,2,3,4,5]

// let head = newNode(1);
// head.next = newNode(2);
// head.next.next = newNode(3);
// head.next.next.next = newNode(4);
// head.next.next.next.next = newNode(5);

//Example 2 ---  Input: head = [2,1,3,5,6,4,7]
let head = newNode(2);
head.next = newNode(1);
head.next.next = newNode(3);
head.next.next.next = newNode(5);
head.next.next.next.next = newNode(6);
head.next.next.next.next.next = newNode(4);
head.next.next.next.next.next.next = newNode(7);

//Print
console.log("Given Linked List<br/>");
printlist(head);

head = rearrangeEvenOdd(head);

console.log("Modified Linked List ");
printlist(head);
