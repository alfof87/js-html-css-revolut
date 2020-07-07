$(document).ready(function(){
  $(".parent-dropdown").mouseover(function(){
  $(this).children(".dropdown").toggle();
 });
 $(".parent-dropdown").mouseout(function(){
 $(this).children(".dropdown").toggle();
 });

 $(".fa-bars").click(function() {
   $(".hidden-menu").show();
 });

 $(".fa-times").click(function() {
   $(".hidden-menu").hide();
 });

});
