'use strict';


let dom = document;

let searchHTML = dom.querySelector('.search');
let searchJS = dom.querySelector('.search-input');
let bodyy = dom.querySelectorAll('body');






searchHTML.addEventListener('click', function(e){
    if(searchHTML.style.display = "none"){
        searchJS.style.display = "block";
    }else if(searchJS === searchHTML.style.bodyy){
        searchHTML.style.display = "none"
    }
});


let languages = dom.querySelector('.cont-lang');
let outLang = dom.querySelector('.language')

// languages.addEventListener('click', function(){
//     if(languages.style.display = "none" || languages.style.className = "cont-lang"){

//         languages.style.display = "block";
//     }
// }

outLang.addEventListener('click', function(){
    if(languages.style.className = "cont-lang"){
    languages.style.display = "block";
    }
});