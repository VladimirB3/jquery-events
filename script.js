$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(this).removeClass('highlight_stream').addClass('highlight_stream');

   });
   $("#stream2_btn").on("click", function() {
        $(this).removeClass('highlight_stream').addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(this).removeClass('highlight_stream').addClass('highlight_stream');
   });
   
   $("p").click(function(){
		$(this).children("a").css("background-color", "yellow");
   });

   $("button").click(function(){
		$(this).prev().slideToggle('slow');
   });

   $("img").on("click", function(){
       $(this).next().children("p").slideDown();
   });

   $(".card").on("click", function() {
       $(this).toggleClass("highlight_stream");
   });



}); 