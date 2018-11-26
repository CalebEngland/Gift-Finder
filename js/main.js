
// // Main JS FOR Christmas Gift Finder Landing Page

// // Variables

// const buttons = document.querySelectorAll('.category-tabs button');
// const popular = buttons[0];
// const byPrice = buttons[1];
// const greatDeals = buttons[2];
// const byCategory = buttons[3];
// const content = document.querySelectorAll('#tabcontent div');

// // Functions

// const removeClass = () => {
//   for (let i = 0; i <buttons.length; i++ ) {
//     if (buttons[i].classList.contains('active')) {
//       buttons[i].classList.remove('active');
//     }
//     }
// };

// const func = () => {
//   if (popular.classList.contains('active')) {
//     content[0].style.display = "inherit";
//     content[1].style.display = "none";
//     content[2].style.display = "none";
//     content[3].style.display = "none";
//   } else if (byPrice.classList.contains('active')) {
//     content[1].style.display = "inherit";
//     content[0].style.display = "none";
//     content[2].style.display = "none";
//     content[3].style.display = "none";
//   }else if (greatDeals.classList.contains('active')) {
//     content[2].style.display = "inherit";
//     content[1].style.display = "none";
//     content[0].style.display = "none";
//     content[3].style.display = "none";
//   }else if (byCategory.classList.contains('active')) {
//     content[3].style.display = "inherit";
//     content[1].style.display = "none";
//     content[2].style.display = "none";
//     content[0].style.display = "none";
//   }
// };

// // Event Listeners

// popular.addEventListener("click",removeClass,false);
// popular.addEventListener("click",function addClass() { popular.classList.add('active'); },false);
// popular.addEventListener("click",func,false);

// byPrice.addEventListener("click",removeClass,false);
// byPrice.addEventListener("click",function addClass() { byPrice.classList.add('active'); },false);
// byPrice.addEventListener("click",func,false);

// greatDeals.addEventListener("click",removeClass,false);
// greatDeals.addEventListener("click",function addClass() { greatDeals.classList.add('active'); },false);
// greatDeals.addEventListener("click",func,false);

// byCategory.addEventListener("click",removeClass,false);
// byCategory.addEventListener("click",function addClass() { byCategory.classList.add('active'); },false);
// byCategory.addEventListener("click",func,false);

"use strict";var buttons=document.querySelectorAll(".category-tabs button"),popular=buttons[0],byPrice=buttons[1],greatDeals=buttons[2],byCategory=buttons[3],content=document.querySelectorAll("#tabcontent div"),removeClass=function(){for(var t=0;t<buttons.length;t++)buttons[t].classList.contains("active")&&buttons[t].classList.remove("active")},func=function(){popular.classList.contains("active")?(content[0].style.display="inherit",content[1].style.display="none",content[2].style.display="none",content[3].style.display="none"):byPrice.classList.contains("active")?(content[1].style.display="inherit",content[0].style.display="none",content[2].style.display="none",content[3].style.display="none"):greatDeals.classList.contains("active")?(content[2].style.display="inherit",content[1].style.display="none",content[0].style.display="none",content[3].style.display="none"):byCategory.classList.contains("active")&&(content[3].style.display="inherit",content[1].style.display="none",content[2].style.display="none",content[0].style.display="none")};popular.addEventListener("click",removeClass,!1),popular.addEventListener("click",function(){popular.classList.add("active")},!1),popular.addEventListener("click",func,!1),byPrice.addEventListener("click",removeClass,!1),byPrice.addEventListener("click",function(){byPrice.classList.add("active")},!1),byPrice.addEventListener("click",func,!1),greatDeals.addEventListener("click",removeClass,!1),greatDeals.addEventListener("click",function(){greatDeals.classList.add("active")},!1),greatDeals.addEventListener("click",func,!1),byCategory.addEventListener("click",removeClass,!1),byCategory.addEventListener("click",function(){byCategory.classList.add("active")},!1),byCategory.addEventListener("click",func,!1);