import * as search from "./search/index.js"
import * as keyword from "./keywordwindow/index.js"

(function(){
    function init(){
        search.searchWindow();
        keyword.keywordWindow();
        
    }
    init();
})();