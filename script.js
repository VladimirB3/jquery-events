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
   
   $("p").on("click", function() {
       $("p").children("a").css("color", "yellow");
   });



}); 