//Time Complexity: O(N)
//Auxiliary Space: O(1)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.arbit = null;
    }
    }
    
    const cloneLinkedList = (head) => {
    
    // Map to store the mapping of old nodes with new ones
    const mp = new Map();
    let temp = head;
    let nhead = new Node(temp.val);
    mp.set(temp, nhead);
    
    // Loop to create duplicates of nodes with only next pointer
    while (temp.next) {
        nhead.next = new Node(temp.next.val);
        temp = temp.next;
        nhead = nhead.next;
        mp.set(temp, nhead);
    }
    temp = head;
    
    // Loop to clone the arbit pointers
    while (temp) {
        mp.get(temp).arbit = mp.get(temp.arbit);
        temp = temp.next;
    }
    
    // Return the head of the clone
    return mp.get(head);
    }
    
    const printList = (head) => {
    let str = `${head.val}(${head.arbit.val})`;
    head = head.next;
    while (head) {
        str += ` -> ${head.val}(${head.arbit.val})`;
        head = head.next;
    }
    console.log(str);
    }
    
    // Creating a linked list with random pointer
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.arbit = head.next.next;
    head.next.arbit = head;
    head.next.next.arbit = head.next.next.next.next;
    head.next.next.next.arbit = head.next.next;
    head.next.next.next.next.arbit = head.next;
    
    // Print the original list
    console.log("The original linked list : ");
    printList(head);
    
    // Function call
    const sol = cloneLinkedList(head);
    
    console.log("The cloned linked list: = " + 1);
    return 0;
  