$(function () {
    $(".content").eq(0).show();
    $(".title").click(function () {
        $(this).siblings(".content").stop().slideUp();
        $(this).next().stop().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings(".title").removeClass("active");
    });
});
