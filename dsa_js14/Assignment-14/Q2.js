//Time Complexity: O(N)
//Auxiliary Space: O(1)


/* Linked list node */
class Node
{
	constructor()
	{
		this.data = 0;
		this.next = null;
	}
};

// Function to create a new node with given data
function newNode(data)
{
	let new_node = new Node();
	new_node.data = data;
	new_node.next = null;
	return new_node;
}

// Function to reverse the linked list
function reverse(head)
{
	let prev = null;
	let current = head;
	let next;
	while (current != null)
	{
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

//Utils
function addOneUtil(head)
{
	// res is head node of the resultant list
	let res = head;
	let temp, prev = null;

	let carry = 1, sum;

	while (head != null) //while both lists exist
	{
		// Calculate value of next digit in resultant list.
		// The next digit is sum of following things
		// (i) Carry
		// (ii) Next digit of head list (if there is a next digit)
		sum = carry + head.data;

		// update carry for next calculation
		carry = (sum >= 10)? 1 : 0;

		// update sum if it is greater than 10
		sum = sum % 10;

		// Create a new node with sum as data
		head.data = sum;

		// Move head and second pointers to next nodes
		temp = head;
		head = head.next;
	}

	// if some carry is still there, add a new node to result list.
	if (carry > 0)
		temp.next = newNode(carry);

	// return head of the resultant list
	return res;
}

// This function mainly uses addOneUtil().
function addOne(head)
{
	// Reverse linked list
	head = reverse(head);

	// Add one from left to right of reversed list
	head = addOneUtil(head);

	// Reverse the modified list
	return reverse(head);
}

// A utility function to print a linked list
function printList(node)
{
	while (node != null)
	{
		console.log( node.data);
		node = node.next;
	}
}

//Example-1
/* Q LinkedList: 4->5->6 */
// let head = newNode(4);
// head.next = newNode(5);
// head.next.next = newNode(6);

//Example-2
let head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);

console.log( "List is ");
printList(head);
head = addOne(head);
console.log( "Resultant Linkedlist is ->");
printList(head);