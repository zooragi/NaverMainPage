import {searchValue} from "./searchwindow.js"

let realtimeRank = function(){
    let tmpSearchValue = searchValue.slice();
    let rankOrder = tmpSearchValue.sort((a,b)=>b.frequencyNum - a.frequencyNum).reduce((acc,cur)=>{
        acc.push(cur.value);
        return acc;
    },[]);

    let rankingTag = [...document.getElementsByClassName('keyword')];
    rankingTag.forEach((element,index)=>{
        if(!rankOrder[index]) return;
        element.innerText = rankOrder[index];
    })

    
}

export {realtimeRank}