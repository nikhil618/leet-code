import { ListNode, listToNodeGenerator, nodeToListGenerator } from "../2. Add-Two-Numbers";

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    const head = new ListNode();
    let current = head;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return head.next;
};

console.log("21. Merge Two Sorted Lists \n")
console.log(`[1,2,4] [1,3,4] ==> `, nodeToListGenerator(mergeTwoLists(listToNodeGenerator([1,2,4]), listToNodeGenerator([1,3,4]))));
console.log(`[] [0] ==> `, nodeToListGenerator(mergeTwoLists(listToNodeGenerator([]), listToNodeGenerator([0]))));

