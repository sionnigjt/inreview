//迭代法
function reverseList(head) {
    //验证
    if (!head || !head.next) return head
    let pre = null, curr = head, next
    while (curr) {
        next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
}
//尾递归
function reverseList2(head) {
    let reserve = function (pre, curr) {
        if (!curr) {
            return pre
        }
        let next = curr.next
        curr.next = pre
        return reserve(curr, next)
    }
    if (!head || !head.next) return head
    return reserve(null, head)
}
//递归法
function reverseList3(head) {
    //结束条件
    if (!head||!head.next) {
        return head
    }
    let next = head.next
    let reservehead = reverseList3(next)
    next.next = head
    head.next = null
    return reservehead
}