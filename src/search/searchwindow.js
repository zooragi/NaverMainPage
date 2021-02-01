import { searchListHtml } from './searchlisthtml.js'
import { searchValueDelete } from './searchvaluedelete.js'
import { searchListRender } from './saerchlistrender.js'

let searchValue = [];
let searchWindow = function(){
    const qs = (x) => document.querySelector(x);
    const $searchBtn = qs(".search_btn");
    const $searchTerm = qs(".input_text");
    const $kwd_list = qs(".kwd_list");
    const $inputText = qs(".input_text");
    let uniqueNum = 0;
    let $item_del_bt;
    let toggle = true;
    let blankDicision = (term) => term.replace(/ /g,"");

    $searchTerm.addEventListener("keydown", searchWindowKeyEvent);
    $searchBtn.addEventListener("click", searchWindowClickEvent);

    $inputText.addEventListener("click",(event) => {
        toggle = !toggle;
        if(toggle) {
            event.target.parentNode.classList.remove('open_window');
            searchListRender(event);
        }
        else {
            event.target.parentNode.classList.add('window_focus');
            event.target.parentNode.classList.add('open_window');
            searchListRender(event);
        }

    });
    // $inputText.addEventListener("focus",(event) => {
    //     event.target.parentNode.classList.add('window_focus');
    //     event.target.parentNode.classList.add('open_window');
    //     searchListRender(event);
    // });

    // $inputText.addEventListener("blur",(event) => {
    //     event.target.parentNode.classList.remove('open_window');
    //     event.target.parentNode.classList.remove('window_focus');
    //     searchListRender(event);
    //     console.log(event.target);
    //     // if(!event.target.parentNode.classList.contains('open_window')) {
    //     //     $autoframe.hidden = false;
    //     // }
    //     // else {
    //     //     event.target.parentNode.classList.remove('window_focus');
    //     //     $autoframe.hidden = true;
    //     // }

    // });

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
    class searchTermInfo{
        constructor(value,uniqueNum,frequencyNum){
            this.value = value;
            this.uniqueNum = uniqueNum;
            this.frequencyNum = frequencyNum;
        }
    }

    // --이벤트 핸들러--
    function searchValueSave(value){
        if(blankDicision(value) === ""){
            alert("''에 대한 검색결과가 없습니다.")
            return;
        }
        else{
            uniqueNum++;
            if(searchValue.some(x=>x.value === value) ) {
                let existValue = searchValue.filter(x=>x.value === value);
                console.log(searchValue);
                let listItem = qs(`.search_term_${existValue[0].uniqueNum}`).parentNode.parentNode.parentNode;
                $kwd_list.removeChild(listItem);
                searchValue.splice(searchValue.indexOf(existValue[0]),1);
                existValue[0].uniqueNum = uniqueNum;
                existValue[0].frequencyNum += 1;
                searchValue.push(existValue[0]);  
                render(value,uniqueNum);
                $searchTerm.value="";
                return;
            }
            searchValue.push(new searchTermInfo(value,uniqueNum,1)); 
            if(searchValue.length > 9) $kwd_list.lastChild.remove();
            $searchTerm.value="";
            render(value,uniqueNum);
        }
    }
    function render(value){        
        $kwd_list.insertAdjacentHTML("afterbegin",searchListHtml(value,uniqueNum));
        $item_del_bt = qs(".item_del_bt");
        $item_del_bt.addEventListener("click",searchValueDelete);
    }
};

export {searchWindow,searchValue,searchListRender};