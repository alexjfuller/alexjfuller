$(document).ready(function(){

$(".mobile-btn").on('click',function(){
  $(".items").toggleClass('displayMenu')
  $(".items li").toggleClass('displayLinks')
});

$('div.project').on('mouseenter',function(){
  $(this).addClass('projectHover')
});

$('div.project').on('mouseleave',function(){
  $(this).removeClass('projectHover')
});






$('a[href^="#"]').click(function(e){
e.preventDefault();
var target = this.hash;
var $target = $(target);
$('html,body').animate({'scrollTop':$target.offset().top - 70},700,
'swing');
});
});
