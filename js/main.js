$(document).ready(function(){
  // hover“首頁”時，選單展開
  $('#nav-index').hover(function(event){
    $('.nav-sublist').stop().slideToggle();
  });
  // hover nav-sublist 時，選單展開
  $('.nav-sublist').hover(function(event){
    $('.nav-sublist').stop().slideToggle();
  });
})