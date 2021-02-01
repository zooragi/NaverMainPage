let keywordWindow = function(){
    const qs = x => document.querySelector(x);
    const realTimeViewport = qs(".real_time_viewport");
    const keywordListView = qs(".rts_rank_list_view");
    const closeButton = qs(".list_view_close_btn_ico");
    realTimeViewport.addEventListener("click",(e)=>{
        keywordListView.hidden = false;
    })
    closeButton.addEventListener("click",(e)=>{
        keywordListView.hidden = true;
    })
}

export {keywordWindow}