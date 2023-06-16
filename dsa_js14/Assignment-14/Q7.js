//Time Complexity: O(N)
//Auxiliary Space: O(1)

let head = null;

// ListNode
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// to get size of LinkedList
function sizeOfLL(head) {
  let count = 0;
  while (head != null) {
    count = count + 1;
    head = head.next;
  }

  return count;
}

function nextLargerLL(head) {
  // get size of LinkedList
  let count = sizeOfLL(head);

  // make size of ans array equal to size of LL i.e number of nodes in LL
  let ans = new Array(count).fill(null);

  // k is for index of ans array
  let k = 0;

  // j will be one step ahead of head node that will check the greater node
  let j = null;

  // temp is for temporary storing the greater node
  let temp = 0;

  while (head != null) {
    // if head.next is null it means there will be no greater node than head afterwards so add 0 to ans array
    if (head.next == null) {
      ans[k] = 0;
      break;
    }

    // j is one step ahead of head
    j = head.next;

    // if head.val is smaller than j.val so add j.val to ans array and increment index (k)
    if (head.val < j.val) {
      ans[k] = j.val;
      k += 1;
    } else if (head.val >= j.val) {
      // if head.val is greater than or equal to j.val
      while (j != null && head.val >= j.val) {
        // search j.val such that it is greater than head.val
        j = j.next;
      }

      // if j is not equal to null it means we have got a value in LL which is greater than head so add j.val to ans array increment k after adding j.val

      if (j != null) {
        ans[k] = j.val;
        k += 1;
      } else {
        // it means we have not found any value which is greater than head so add 0 to ans array and increment index
        ans[k] = 0;
        k += 1;
      }
    } else {
      ans[k] = 0;
      k += 1;
    }

    head = head.next;
  }

  return ans;
}

function push(new_data) {
  // allocate node null
  let new_node = new ListNode(new_data);

  // link the old list of the new node null
  new_node.next = head;

  // move the head to point to the new node null
  head = new_node;
}

// Utility function to print the linked list
function printList() {
  console.log(nextLargerLL(head));
}

// Example -1  head = [2,1,5]
// push(5);
// push(1);
// push(2);

// Example -2  head = [2,7,4,3,5]
push(5);
push(3);
push(4);
push(7);
push(2);

// Function Call
nextLargerLL(head);
printList();
