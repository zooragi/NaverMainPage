let searchListRender = function (event){
    const qs = x => document.querySelector(x);
    let $autoframe = qs(".autoframe");
    if(event.target.parentNode.classList.contains('open_window')) $autoframe.hidden = false;
    else $autoframe.hidden = true;
};

export {searchListRender}