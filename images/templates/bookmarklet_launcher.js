(function(){
    if(window.myBookmarklet!==undefined){
        myBookmarklet();
    }
    else{
        document.body.appendChild(document.createElement('script')).src='http://55.55.55.5:8080/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();