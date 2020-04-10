$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#navbarNav").toggleClass("show_list");
    $("#navbarNav").fadeIn();

});
