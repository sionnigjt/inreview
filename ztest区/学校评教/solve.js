//学情调查
for (const children of document.getElementsByClassName("option-list")) {
    children.children[0].firstElementChild.checked = true;

}
//量化评教
for (const children of document.getElementsByClassName("option-list")) {
    let map = ["优秀", "非常赞成"];
    if (map.includes(children.children[0].children[1].innerText)) {
        children.children[0].firstElementChild.checked = true;
    }
    else {
        children.children[3].firstElementChild.checked = true;
    }
    //处理文本

    function getElementByXpath(xpath) {
        var element = document.evaluate(xpath, document).iterateNext();
        return element;
    }
    getElementByXpath('//*[@id="sub"]').click()
    document.querySelector("textarea").innerText="没得意见"
}