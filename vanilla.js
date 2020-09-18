'use strict';

// alert('sdf')
let dom = document;

let searchHTML = dom.querySelector('.search');
let searchJS = dom.querySelector('.search-input');
let input = dom.querySelector('.inputForJs');


// function conditionBody(){
//     if()
// }









let languages = dom.querySelector('.cont-lang');
let outLang = dom.querySelector('.language > a');

outLang.addEventListener('click', function(event){
    const display = languages.style.display;

    if (display === 'block') {
        languages.style.display = 'none';
    } else {
        languages.style.display = 'block';
    }
 });


 outLang.addEventListener('blur', function(event){
    // event.stopPropagation();
    languages.style.display = "none";
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

//  bodyElm.addEventListener('click', function(event){
//    if(event.target !== outLang){
//         languages.style.display = "none";
//     }

//     console.log(event, languages);

// });

 




//                     ABOUT US ///////////////



let tabsBtn = dom.querySelectorAll(".tabs__nav-btn");
let tabsItems = dom.querySelectorAll(".tabs__item");
let firstChild = dom.querySelector(".tabs__nav :first-child");

// firstChild.addEventListener('click',function(){
//     console.log("beeee")
// })

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
     
        tabsBtn.forEach(function(item){
            item.classList.remove('active');
          });

        tabsItems.forEach(function(item){
            item.classList.remove('addText');
          }); 



            currentBtn.classList.add('active');
            currentTab.classList.add('addText');
    });

    // if(item != firstChild){
    //     // item.stopPropagation();
    //     firstChild.style.color = "#2d3e50";
    // }else{
    //     item.classList.add('active');
        
    // }
})