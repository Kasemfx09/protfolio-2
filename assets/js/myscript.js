// SHOW MENU
const showMenu = (toggleId, labibId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        labib = document.getElementById(labibId),
        bodypadding = document.getElementById(bodyId);

    if (toggle && labib) {
        toggle.addEventListener("click", () => {
            // APARECER MENU
            labib.classList.toggle("show");
            // ROTATE TOGGLE
            toggle.classList.toggle("rotate");
            // PADDING BODY
            bodypadding.classList.toggle("expander");
        });
    }
};
showMenu("nav-toggle", "labib", "body");

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
    linkColor.forEach((l) => l.classList.remove("active-1"));
    this.classList.add("active-1");
}

linkColor.forEach((l) => l.addEventListener("click", colorLink));

//skill
$(document).ready(function() {
    $(".skill-box")
        .find("b")
        .each(function(i) {
            return $(this)
                .prop("Counter", 0)
                .animate({
                    Counter: $(this).parent().data("percent"),
                }, {
                    duration: 5000,
                    easing: "swing",
                    step(now) {
                        return $(this).text(Math.ceil(now) + "%");
                    },
                });
        });

    return $(".skill-box .skills-circle li").each(function(i) {
        const _right = $(this).find(".bar-circle-right");
        const _left = $(this).find(".bar-circle-left");
        const _percent = $(this).attr("data-percent");
        let deg = 3.6 * _percent;
        if (_percent <= 50) {
            return _right.animate({
                circle_rotate: deg,
            }, {
                step(deg) {
                    $(this).css("transform", `rotate(${deg}deg)`);
                },
                duration: 5000,
            });
        } else {
            const full_deg = 180;
            deg -= full_deg;
            let run_duration = 5000 * (50 / _percent);
            return _right.animate({
                circle_rotate: full_deg,
            }, {
                step(full_deg) {
                    $(this).css("transform", `rotate(${full_deg}deg)`);
                },
                duration: run_duration,
                easing: "linear",
                complete() {
                    run_duration -= 5000;
                    _left.css({
                        clip: "rect(0, 150px, 150px, 75px)",
                        background: "#08a310",
                    });
                    return _left.animate({
                        circle_rotate: deg,
                    }, {
                        step(deg) {
                            $(this).css("transform", `rotate(${deg}deg)`);
                        },
                        duration: Math.abs(run_duration),
                        easing: "linear",
                    });
                },
            });
        }
    });
});

//Accordion

if (document.readyState !== "loading") {
    console.log("ready!");
    ready();
} else {
    document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
    var accordion = document.getElementsByTagName("dt");

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function() {
            accordionClick(event);
        });
    }
}

var accordionClick = (eventHappened) => {
    console.log(eventHappened);
    var targetClicked = event.target;
    console.log(targetClicked);
    var classClicked = targetClicked.classList;
    console.log("target clicked: " + targetClicked);
    console.log(classClicked[0]);
    while (classClicked[0] != "description-title") {
        console.log("parent element: " + targetClicked.parentElement);
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
        console.log("target clicked while in loop:" + targetClicked);
        console.log("class clicked while in loop: " + classClicked);
    }
    var description = targetClicked.nextElementSibling;
    console.log(description);
    var expander = targetClicked.children[0];
    if (description.style.maxHeight) {
        description.style.maxHeight = null;
        expander.innerHTML = "&#10133;";
    } else {
        var allDescriptions = document.getElementsByTagName("dd");
        for (var i = 0; i < allDescriptions.length; i++) {
            console.log("current description: " + allDescriptions[i]);
            if (allDescriptions[i].style.maxHeight) {
                console.log("there is a description already open");
                allDescriptions[i].style.maxHeight = null;
                allDescriptions[i].previousElementSibling.children[0].innerHTML =
                    "&#10133;";
            }
        }
        description.style.maxHeight = description.scrollHeight + "px";
        expander.innerHTML = "&#10134;";
    }
};
//slick projects
$(document).ready(function() {
    $(".projects-slick").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
//slick feedback
$(document).ready(function() {
    $(".feedback-slick").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
//skill-language
$(".skills").each(function() {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({
        animatedValue: 0,
    }).animate({
        animatedValue: per,
    }, {
        duration: 1000,
        step: function() {
            $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function() {
            $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
    });
});

//counter
$(document).ready(function() {
    $(".counter").counterUp({
        delay: 100,
        time: 5000,
    });
});

//inspect closed
/*
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
};
*/
//inspect closed
$(document).ready(function() {
    $("body").bind("cut copy past", function(e) {
        e.preventDefault();
    });
    $("body").on("contextmenu", function(e) {
        return false;
    });
});