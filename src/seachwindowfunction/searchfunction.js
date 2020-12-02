let searchValue = [];
let searchFunction = function(){
    "use strict";

    const qs = x => document.querySelector(x);
    let searchBtn = qs(".search_btn");
    let searchTerm = qs(".input_text");

    searchTerm.addEventListener("keydown", (e) => {
        if(e.keyCode === 13){
            searchValue.push(searchTerm.value);   
        }
    })
    searchBtn.addEventListener("click",(e)=> {
        searchValue.push(searchTerm.value);
    });
};

export {searchFunction,searchValue};