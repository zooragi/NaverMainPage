import {searchValue} from "./searchwindow.js"

let searchValueDelete = function(event)  {
    const qs = (x) => document.querySelector(x);
    const $searchLists = qs(".kwd_list");
    // $searchLists.childNodes.forEach(element => console.log(element));
    console.log(event)
    console.log(searchValue)
}

export {searchValueDelete}
