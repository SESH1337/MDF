'use strict';


let dom = document;

let searchHTML = dom.querySelector('.search');
let searchJS = dom.querySelector('.search-input');
let input = dom.querySelector('.inputForJs');


// function conditionBody(){
//     if()
// }









let languages = dom.querySelector('.cont-lang');
let outLang = dom.querySelector('.language');

outLang.addEventListener('click', function(event){
    event.stopPropagation();
    if(languages.style.display = "none"){
    languages.style.display = "block";
    }else{
        out.style.display = "none";
    }
});




let bodyElm = dom.body;



    searchHTML.addEventListener('click', function(e){
        e.stopPropagation();
        if(searchJS.style.display = "none"){
            searchJS.style.display = "block";
        }else{
            searchJS.style.display = "block";
        }
    });     


    bodyElm.addEventListener('click', function(event){
    
        if(event.target !== searchJS){
            searchJS.style.display = "none";
    }else{
        input.style.display = "block";
    }
 });

 bodyElm.addEventListener('click', function(event){
    
    if(event.target !== languages){
        languages.style.display = "none";
}else{
    input.style.display = "block";
}
});

 




