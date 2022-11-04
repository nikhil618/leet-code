/**
 * Definition for singly-linked list.
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const listToNodeGenerator = (val: number[]): ListNode | null => {
    if (!val || val?.length === 0) return null;
    const head = new ListNode();
    let curr = head;
    for (let i of val) {
        curr.next = new ListNode(i);
        curr = curr.next;
    }
    return head.next;
};

export const nodeToListGenerator = (head: ListNode | null): number[] => {
    const list = [] as number[];
    do {
        if (head && isFinite(head.val)) {
            list.push(head.val);
            head = head.next;
        }
    } while (head)
    return list;
};

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let sum: ListNode = new ListNode(0),
        current = sum,
        p1 = l1,
        p2 = l2,
        overflow = 0;
    while(p1 || p2) {
        const val1 = p1 ? p1.val : 0,
            val2 = p2 ? p2.val : 0;
        let val = val1 + val2 + overflow;
        if (val > 9) {
            overflow = 1;
            val -= 10;
        } else {
            overflow = 0;
        }
        current.next = new ListNode(val);
        current = current.next;
        if(p1) {
            p1 = p1.next;
        }
        if(p2) {
            p2 = p2.next;
        }
    }
    if (overflow) {
        current.next = new ListNode(overflow);
    }
    return sum.next;
};

console.log("2. Add-Two-Numbers \n")
console.log(nodeToListGenerator(addTwoNumbers(listToNodeGenerator([2,4,3]), listToNodeGenerator([5,6,4]))));