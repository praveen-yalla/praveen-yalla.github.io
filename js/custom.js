$(document).ready(function() {

    new WOW().init();
    $('.loader-div').addClass('animated bounceOutRight');
    $('.preloader').addClass('animated bounceOutLeft');
    setTimeout(function() {
        $('.preloader').hide();
    }, 2000);
    setTimeout(function() {
        $(".art-bg").removeClass('animated fadeInDown');
    }, 3000);
    $('.head,.tag').addClass('animated fadeInUp');
    $('.tagline').addClass('animated fadeInUp');
    $('.intro').addClass('animated fadeInUp');
    $(".art-bg").addClass('animated fadeInDown');
    $('.prot-btn .cv-btn').addClass('animated fadeInUp');



    $("#nav-open").on("click", this, function() {
        $(".navigation").toggleClass("nav-trigger");
        $(".nav-icon").toggleClass("open-nav");
        $('.menu li').toggleClass('animated fadeInUp');
        $('.social').toggleClass('animated fadeInDown');
    });

    $(".menu li a").click(function() {
        $($(this).attr("href")).parent().find(".page").removeClass("fadeInUp");
        $($(this).attr("href")).addClass("fadeInUp");
    });

    var get = $(".clr-block ul li")

    $.each(get, function() {
        $(this).css("backgroundColor", $(this).text());
    })



    $("#submitbtn").on("click", this, function() {
        var form = $("#contactform").serialize();

        //alert(form);

        $.ajax({
                method: "GET",
                url: "form.php",
                data: $("#contactform").serialize()
            })
            .done(function(msg) {
                //alert(msg);
            });
    });


})
