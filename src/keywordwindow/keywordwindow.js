let keywordWindow = function(){
    const qs = x => document.querySelector(x);
    const realTimeViewport = qs(".real_time_viewport");
    const keywordListView = qs(".rts_rank_list_view");
    const closeButton = qs(".list_view_close_btn_ico");
    const rankTab = qs(".rank_tab");
    // const halfRankTab = document.getElementsByClassName('half_rank_tab');
    const rankList = document.getElementsByClassName("rts_list");

    realTimeViewport.addEventListener("click",(e)=>{
        keywordListView.hidden = false;
    })
    closeButton.addEventListener("click",(e)=>{
        keywordListView.hidden = true;
    })
    
    class RankTab{
        constructor(tab){
            this._tab = tab;
            tab.onclick = this.onClick.bind(this);
        }
        one(event){
            event.target.setAttribute("aria-selected","true")
            event.target.parentNode.childNodes[3].setAttribute("aria-selected","false");
            rankList[0].hidden = false;
            rankList[1].hidden = true;

        }
        eleven(event){
            event.target.setAttribute("aria-selected","true");
            event.target.parentNode.childNodes[1].setAttribute("aria-selected","false");
            rankList[0].hidden = true;
            rankList[1].hidden = false;
        }
        onClick(event){
            let dataTab = event.target.dataset.tabIndex;
            if(dataTab){
                this[dataTab](event);
            }
        }
    }
    new RankTab(rankTab);
}

export {keywordWindow}