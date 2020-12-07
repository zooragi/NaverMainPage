import { searchListHtml } from './searchlisthtml.js'
let searchValue = [];
let searchWindow = function(){
    "use strict";

    const qs = (x) => document.querySelector(x);
    const $searchBtn = qs(".search_btn");
    const $searchTerm = qs(".input_text");
    const $kwd_list = qs(".kwd_list");
    let blankDicision = (term) => term.replace(/ /g,"");

    function init(){
        eventListener($searchTerm,"keydown",searchWindowKeyEvent);
        eventListener($searchBtn,"click",searchWindowClickEvent);
    }

    function eventListener(eventTarget,type,eventHandler){
        eventTarget.addEventListener(type, (e) => eventHandler(e));
    }
    function searchWindowKeyEvent(e){
        if(e.keyCode === 13){
            searchValueSave($searchTerm.value);
            render();
        }
    }
    function searchWindowClickEvent(){
        searchValueSave($searchTerm.value);
        render();
        $searchTerm.focus();
    }

    function searchValueSave(value){
        if(blankDicision(value) === "") alert("''에 대한 검색결과가 없습니다.");
        else{
            searchValue.push(blankDicision($searchTerm.value));  
            if(searchValue.length > 9) $kwd_list.lastChild.remove();
            $searchTerm.value="";
        }
        
    }
    function render(){
        $kwd_list.insertAdjacentHTML("afterbegin",searchListHtml(searchValue.slice(-1)[0]));
    }


    init();

 

};

export {searchWindow};