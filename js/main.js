$(document).ready(function(e){
  // hover“首頁”時，選單展開
  $('#nav-index').hover(function(e){
    $('.nav-sublist').stop().slideToggle();
  });
  // hover nav-sublist 時，選單展開
  $('.nav-sublist').hover(function(){
    $('.nav-sublist').stop().slideToggle();
  });
  // 漢堡選單
  $('.nav-ham').click(function(){
		$(this).toggleClass('open');
    $('.nav').toggleClass('show');
  });
  $('.order-block i').click(function(){
    $(this).toggleClass('fa-heart-o')
    $(this).toggleClass('fa-heart')
  })
  $('#form-cancel').click(function(e){
    // e.preventdefault();
    $('#map-form').trigger("reset")
  })
})