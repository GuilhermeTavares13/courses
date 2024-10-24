$("h1").addClass("test secondText")

$("button").html("<i>Click me commn</i>");


$("a").attr("href","https://www.google.com");


$("button").click(() => {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

