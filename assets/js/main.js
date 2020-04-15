
// Add white background to navbar upon scroll

$(document).ready(function () {
    //caches a jQuery object containing the header element
    var header = $(".navbar.scrolling");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 150 && $(window).width() > 739) {
            header.addClass("navbar-scroll");
            $(".scrolling-img").attr("src", "/assets/img/logo-black.png")
        } else if ($(window).width() > 739) {
            header.removeClass("navbar-scroll")
            $(".scrolling-img").attr("src", "/assets/img/logo-white.png")
        }
    });
});

// Insert year for copyright
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// Hamburger menu toggling
window.onload = function () {
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    var elementsArray = document.querySelectorAll(".nav-link");
    var collapsible = document.getElementById("navbarNav")
    // On click toggle class "is-active"
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("is-active");
    });

    elementsArray.forEach(function (elem) {
        elem.addEventListener("click", function () {
            hamburger.classList.remove("is-active");
            collapsible.classList.remove("show");
        });
    });
}

// smooth scrolling
$(document).ready(function () {
    $(".smooth-scroll").click(function (e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: 0 }, 1000); return false }) })

});


// Adjusting scroll to for anchor tags so they are not hidden by navbar, 
// thanks to https://stackoverflow.com/a/17535094/11159842

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function (event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function () {
        offsetAnchor();
    }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

// read the url to check for contact=sent parameter (contact form)
$(document).ready(
    function () {
        let searchParams = new URLSearchParams(window.location.search);
        let param = searchParams.get('contact');
        if (param == 'sent') {
            $('#contactForm').addClass('d-none');
            $('#contactSuccess').removeClass('d-none');
            $('#contactSuccess').addClass('d-block');
            $('#contactSuccess').get(0).scrollIntoView();
        }
    }
)

// ekko lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



// fade in out of quote boxes

let $el, $ps, $up, $cl, totalHeight;

$(".read-more").click(function () {

    totalHeight = 0

    $el = $(this);
    $p = $el.parent();
    $up = $el.parent().parent().find('.quote-box');
    $ps = $up.find('.fade-out')
    $cl = $p.parent().find('.read-less');

    // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    $ps.each(function () {
        totalHeight += $(this).outerHeight();
    });

    $up
        .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999,
            "-webkit-mask-image": "none",
            "mask-image": "none"
        })
        .animate({
            "height": totalHeight
        });

    $p.addClass('d-none');
    $cl.addClass('d-block');
    // prevent jump-down
    return false;

});

// reverse changes and collapse text box again
$(".read-less").click(function () {
    $up
        .css({
            "height": "80px",
            "-webkit-mask-image": "linear-gradient(to bottom, black 20%, transparent 100%)",
            "mask-image": "linear-gradient(to bottom, black 20%, transparent 100%)",

        })
        .animate({
            "height": "80px",
        });
    $(this).removeClass('d-block')
    $(this).parent().parent().find('.read-more').parent().removeClass('d-none');

    return false;

})