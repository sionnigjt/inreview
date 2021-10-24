//单独判断第n个节点
function removeNthFromEnd(head, n) {
    let fast = head, slow = hand
    while (n--) fast = fast.next
    //判断是否为倒数第n个节点
    if (!fast.next) {
        return head.next
    }
    //快慢指针一起行动
    while (fast&& fast.next) {
        fast = fast.next
        slow=slow.next
    }
    //删除
    slow.next=slow.next.next
}
