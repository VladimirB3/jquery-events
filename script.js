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


   $("#first_button").mouseenter(function() { 
       $("#first_button").fadeTo(1000, 0.5);
   });
   $("#first_button").mouseleave(function() { 
       $("#first_button").fadeTo(1000, 1);
   });


   $("#second_button").click(function(e) {
        e.preventDefault();
        var $this = $(this).parent().find('p');
        $("#2para").not($this).show();
        $this.slideToggle('slow');
    });


}); 