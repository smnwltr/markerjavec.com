
// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Add white background to navbar upon scroll

$(document).ready(function () {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            header.addClass("navbar-scroll");
        } else {
            header.removeClass("navbar-scroll")
        }
    });
});
