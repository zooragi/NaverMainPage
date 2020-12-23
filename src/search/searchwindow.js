import { searchListHtml } from './searchlisthtml.js'
import { searchValueDelete } from './searchvaluedelete.js'

let searchValue = [];
let searchWindow = function(){

    const qs = (x) => document.querySelector(x);
    const $searchBtn = qs(".search_btn");
    const $searchTerm = qs(".input_text");
    const $kwd_list =qs(".kwd_list");
    let $item_del_bt;
    let blankDicision = (term) => term.replace(/ /g,"");

    $searchTerm.addEventListener("keydown", searchWindowKeyEvent);
    $searchBtn.addEventListener("click", searchWindowClickEvent);

    // --이벤트 핸들러--
    function searchWindowKeyEvent(e){
        if(e.keyCode === 13){
            searchValueSave($searchTerm.value);
        }
    }
    function searchWindowClickEvent(){
        searchValueSave($searchTerm.value);
        $searchTerm.focus();
    }


    // --이벤트 핸들러--

    function searchValueSave(value){
        if(blankDicision(value) === ""){
            alert("''에 대한 검색결과가 없습니다.")
            return;
        }
        else{
            searchValue.push(blankDicision($searchTerm.value));  
            if(searchValue.length > 9) $kwd_list.lastChild.remove();
            $searchTerm.value="";
            render();
        }
    }
    function render(){
        $kwd_list.insertAdjacentHTML("afterbegin",searchListHtml(searchValue.slice(-1)[0]));
        $item_del_bt = qs(".item_del_bt");
        $item_del_bt.addEventListener("click",searchValueDelete);
    }

};

export {searchWindow,searchValue};