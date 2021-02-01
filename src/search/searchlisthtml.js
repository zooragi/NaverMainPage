import { month, day } from './date.js'

let searchListHtml = function(content,uniquNum){
    return `<li class="kwd_item">
    <div class="kwd">
        <span class="fix">                                                        
            <span class="kwd_ico">
                <i class="search_ico"></i>
            </span>
            <span class="search_term search_term_${uniquNum}">${content}</span>
        </span>
    </div>
    <span class="etc">
        <span class="date">${month}.${day}</span>
        <div class="item_del_bt">
            <span class="item_del_bt_ico imsc"></span>
        </div>
    </span>
    </li>`
    
}

export {searchListHtml}

