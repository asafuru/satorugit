const main = document.querySelectorAll(".main-menu");
const item = Array.prototype.slice.call(main,0);

item.forEach(function (element) {
  element.addEventListener("mouseover",function(){
    element.querySelector(".sub-menu").classList.add("open");
  },false);
  element.addEventListener("mouseout",function(){
    element.querySelector(".sub-menu").classList.remove("open");
  },false);
});

//ハンバーガーボタン
$(function(){
  $( ".js-hamburger" ).click( function() {
    $( this ).toggleClass( "is-open" );
    $( ".menu" ).toggleClass( "is-open" );
    //$( "body" ).toggleClass( "open" );
  });
});
//ボタン押したらスライドトグルで開く
//$("button").click(function () {
//  $(".menu").slideToggle();
//});