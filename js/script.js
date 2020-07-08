$(document).ready(function(){
  $(".parent-dropdown").mouseover(function(){
  $(this).children(".dropdown").toggle();
 });
 $(".parent-dropdown").mouseout(function(){
 $(this).children(".dropdown").toggle();
 });
/////////////////////////////////////hamburger/X
 $(".fa-bars").click(function() {
   $(".hidden-menu").show();
 });

 $(".fa-times").click(function() {
   $(".hidden-menu").hide();
 });

 $(".fa-bars").click(function() {
   $(".fa-bars").hide();
   $(".fa-times").show();
   $(this).children(".submenu").hide();

 });
 $(".fa-times").click(function() {
   $(".fa-times").hide();
   $(".fa-bars").show();
 });
 ////////////////////////////////////sottomenu
 $(".link-menu").click(function() {
   $(".submenu").toggle();
 });
 // $(".link-menu1").click(function() {
 //   $(".submenu1").toggle();
 // });


});
