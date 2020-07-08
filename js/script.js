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
   $(".submenu").hide();

 });
 $(".fa-times").click(function() {
   $(".fa-times").hide();
   $(".fa-bars").show();
 });
 ////////////////////////////////////sottomenu

 $(".parent1").click(function(){
 $(this).children(".submenu").toggle();
});
////////////chevron down/up////////

$(".fa-bars").click(function() {
  $(".fa-chevron-up").hide();
  $(".fa-chevron-down").show();
});

$(".chevron-container").click(function() {
  $(".fa-chevron-down").hide();
  $(".fa-chevron-up").show();
});
$(".chevron-container").click(function() {
  $(".fa-chevron-up").hide();
  $(".fa-chevron-down").show();
});
});
