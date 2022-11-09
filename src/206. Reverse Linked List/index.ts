import { ListNode, listToNodeGenerator, nodeToListGenerator } from "..";

const reverseList = (head: ListNode | null): ListNode | null => {
    if (!head) return null;
    let prev: ListNode | null = null;
    while(head) {
        const temp = head.next as ListNode
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};

console.log("\n206. Reverse Linked List")
console.log(`[1,2,4] ==> `, nodeToListGenerator(reverseList(listToNodeGenerator([1,2,4]))));
console.log(`[1,2,3,4,5] ==> `, nodeToListGenerator(reverseList(listToNodeGenerator([1,2,3,4,5]))));

