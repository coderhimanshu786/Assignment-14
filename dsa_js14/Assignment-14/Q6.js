//Time Complexity: O(N)
//Auxiliary Space: O(1)

let head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	// function rotates a linked list counter-clockwise and updates the head. The function assumes that k is smaller than size of linked list. It doesn't modify the list if k is greater than or equal to size
	function rotate(k) {
		if (k == 0)
			return;

		// Let us understand the below code for example k = 4 and list = 10->20->30->40->50->60.
		let current = head;

		// current will either point to kth or NULL after this loop. current will point to node 40 in the above example
		let count = 1;
		while (count < k && current != null) {
			current = current.next;
			count++;
		}

		// If current is NULL, k is greater than or equal to count of nodes in linked list. Don't change the list in this case
		if (current == null)
			return;

		// current points to kth node. Store it in a letiable. kthNode points to node 40 in the above example
		let kthNode = current;

		// current will point to last node after this loop current will point to node 60 in the above example
		while (current.next != null)
			current = current.next;

		// Change next of last node to previous head Next of 60 is now changed to node 10

		current.next = head;

		// Change head to (k+1)th node head is now changed to node 50
		head = kthNode.next;

		// change next of kth node to null
		kthNode.next = null;
	}

	//Given a reference (pointer to pointer) to the head of a list and an int, push a new node on the front of the list.
	function push(new_data) {
		// 1 & 2: Allocate the Node & Put in the data
let new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	function printList() {
let temp = head;
		while (temp != null) {
			console.log(temp.data + " -> ");
			temp = temp.next;
		}
	}

		//Example-1 -- create a list 2->4->7->8->9
		// for (i = 9; i >= 2; i -= 2)

        //Example -2 --- value[] = {1, 2, 3, 4, 5, 6, 7, 8}
		for (i = 8; i >= 1; i -= 1)
			push(i);

		console.log("Given list<br/>");
		printList();

        //example-1
		// rotate(3);

        //example-2
		rotate(4);

		console.log("Rotated Linked List " );
		printList();
