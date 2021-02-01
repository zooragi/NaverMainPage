let keywordWindow = function(){
    const qs = x => document.querySelector(x);
    const realTimeViewport = qs(".real_time_viewport");
    const keywordListView = qs(".rts_rank_list_view");
    realTimeViewport.addEventListener("click",(e)=>{
        keywordListView.hidden = false;
    })
}

export {keywordWindow}