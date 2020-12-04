import { searchListHtml } from './searchlisthtml.js'
import { month, day } from './date.js'

let searchValue = [];
let searchWindow = function(){
    "use strict";

    const qs = (x) => document.querySelector(x);
    const $searchBtn = qs(".search_btn");
    const $searchTerm = qs(".input_text");
    const $kwd_list =qs(".kwd_list");

    $searchTerm.addEventListener("keydown", (e) => {
        if(e.keyCode === 13){
            searchValueCountLimit($searchTerm.value);
        }
    });
    $searchBtn.addEventListener("click",(e)=> {
        searchValueCountLimit($searchTerm.value);
    });

    function searchValueCountLimit(value){
        if(blankDicision(value)) return;
        if(searchValue.length > 9){
            searchValue.push(value);
            searchValue.shift();
            $kwd_list.lastChild.remove();
        } else {
            searchValue.push($searchTerm.value);  
        }
        $kwd_list.insertAdjacentHTML("afterbegin",searchListHtml(searchValue.slice(-1)[0]));
        $searchTerm.value="";
    }

    function blankDicision(term){
        if( term.replace(/ /g,"") === "" ) {
            alert("''에 대한 검색결과가 없습니다.")
            return 1;
        }
    }
    
 

};

export {searchWindow};