$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   $(".card_para").click(function() {
       $(".card_para").css("color", "red");
   });

   $("h2").hover(function() {
       $("h2").css("color", "#66ccff");
   });

   $("#big_up").hover(function() {
       $("#big_up").css("font-size", "30px");
   });

   $(".bottom_button").mouseenter(function() {
       $("body").css("background-color", "black");
   });
   $(".bottom_button").mouseleave(function() {
       $("body").css("background-color", "grey");
   });


   $("#first_button").click(function() {
       $(".card").hide(slow);
   });

}); 