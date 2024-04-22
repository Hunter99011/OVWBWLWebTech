$(document).ready(function(){
  $("#button1").click(function(){
    $("#animationBox").animate({
        left: '250px',
        opacity: '1',
        height: '150px',
        width: '200px',
        fontSize: '30pt',
        });
    setTimeout(() => {
        $("#animationBox").animate({
            top: '350px',
            opacity: '1',
            height: '165px',
            width: '150px',
            fontSize: '30pt',
          });
    }, 600);
    setTimeout(() => {
        $("#animationBox").animate({
            left: '10px',
            opacity: '0.4',
            height: '165px',
            width: '150px',
            fontSize: '30pt',
          });
    }, 1200);
    setTimeout(() => {
        let isHidden = $("#container").is(":hidden");
        $("#animationBox").animate({
            top: isHidden == true ? '87px' : '207px',
            opacity: '1',
            height: '50px',
            width: '100px',
            fontSize: '12pt',
          });
    }, 1800);
  });
    $("#button2").click(function(){
        $("#container").hide();
    });
    $("#button3").click(function(){
        $("#animationBox").animate({
            height: 'toggle',
          });
        setTimeout(() => {
            $("#animationBox").animate({
                height: 'toggle',
              });
        }, 100);
        setTimeout(() => {
            $("#animationBox").animate({
                left: '400px',
                width: '200px',
              });
        }, 150);
    });
});