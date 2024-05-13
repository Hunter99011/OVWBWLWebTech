$(document).ready(function(){
    $("#button1").click(function(){
        $("#list1").hide();
        $("#list2").hide();
        const oldUrl = $("a").attr("href");
        const newUrl = oldUrl.replace("https://jquery.com/", "");
        $("a").attr("href", newUrl);
    });

    $("#button2").click(function(){
        $("#list1").hide();
        $("#list2").hide();
        const oldUrl = $("a").attr("href");
        const newUrl = oldUrl.replace("https://jquery.com/", "");
        $("a").attr("href", newUrl);
        $("#button2").hide();
    });

    $("#button3").click(function(){
        $("h1").hide();
    });
});