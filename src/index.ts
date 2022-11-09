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