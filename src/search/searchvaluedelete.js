import {searchValue} from "./searchwindow.js"

let searchValueDelete = function(event)  {
    const qs = (x) => document.querySelector(x);
    const $kwd_list = qs(".kwd_list");
    const $inputText = qs(".input_text");
    const $greenBox = qs(".green_box");
    $inputText.focus();
    $greenBox.classList.add("window_focus");
    let clickedValue = event.currentTarget.parentNode.parentNode.getElementsByClassName("search_term")[0].innerText;
    searchValue.splice(searchValue.indexOf(clickedValue),1);
    $kwd_list.removeChild(event.currentTarget.parentNode.parentNode);
}

export {searchValueDelete}
