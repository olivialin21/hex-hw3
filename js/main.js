$(document).ready(function(e){
  // hover“首頁”時，選單展開
  e.preventdefault;
  $('#nav-index').hover(function(event){
    $('.nav-sublist').stop().slideToggle();
  });
  // hover nav-sublist 時，選單展開
  $('.nav-sublist').hover(function(event){
    $('.nav-sublist').stop().slideToggle();
  });
  // 漢堡選單
  $('.nav-ham').click(function(){
		$(this).toggleClass('open');
    $('.nav').toggleClass('show');
  });
})