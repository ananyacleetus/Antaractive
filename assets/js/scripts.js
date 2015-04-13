$(document).ready(function() {
    /*============================================
	Page Preloader
	==============================================*/
    $(window).load(function() {
        $('#page-loader').fadeOut(500, function() {});
    })

    /*============================================
	Header
	==============================================*/
    $('#home').height($(window).height() + 50);
    $.backstretch('assets/images/header.jpg');
    $(window).scroll(function() {
        var st = $(this).scrollTop(),
            wh = $(window).height(),
            sf = 1.2 - st / (10 * wh);
        $('.backstretch img').css({
            'transform': 'scale(' + sf + ')',
            '-webkit-transform': 'scale(' + sf + ')'
        });
        $('#home .container').css({
            'opacity': (1.4 - st / 400)
        });
        if ($(window).scrollTop() > ($(window).height() + 50)) {
            $('.backstretch').hide();
        } else {
            $('.backstretch').show();
        }
    });
    var st = $(this).scrollTop(),
        wh = $(window).height(),
        sf = 1.2 - st / (10 * wh);
    $('.backstretch img').css({
        'transform': 'scale(' + sf + ')',
        '-webkit-transform': 'scale(' + sf + ')'
    });
    $('#home .container').css({
        'opacity': (1.4 - st / 400)
    });
    /*============================================
	Navigation Functions
	==============================================*/
    if ($(window).scrollTop() < ($(window).height() - 50)) {
        $('#main-nav').removeClass('scrolled');
    } else {
        $('#main-nav').addClass('scrolled');
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() < ($(window).height() - 50)) {
            $('#main-nav').removeClass('scrolled');
        } else {
            $('#main-nav').addClass('scrolled');
        }
    });
    /*============================================
	ScrollTo Links
	==============================================*/
    $('a.scrollto').click(function(e) {
        $('html,body').scrollTo(this.hash, this.hash, {
            gap: {
                y: -70
            }
        });
        e.preventDefault();

        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });
    /*============================================
	Skills
	==============================================*/
    $('.skills-item').each(function() {
        var perc = $(this).find('.percent').data('percent');

        $(this).data('height', perc);
    })

    $('.touch .skills-item').each(function() {
        $(this).css({
            'height': $(this).data('height') + '%'
        });
    })

    $('.touch .skills-bars').css({
        'opacity': 1
    });
    /*============================================
	Project thumbs - Masonry
	==============================================*/
    $(window).load(function() {

        $('#projects-container').css({
            visibility: 'visible'
        });

        $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            //columnWidth:370,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 25
        });

        scrollSpyRefresh();
        waypointsRefresh();

    });
    /*============================================
	Filter Projects
	==============================================*/
    $('#filter-works a').click(function(e) {
        e.preventDefault();

        if ($('#project-preview').hasClass('open')) {
            closeProject();
        }

        $('#filter-works li').removeClass('active');
        $(this).parent('li').addClass('active');

        var category = $(this).attr('data-filter');

        $('.project-item').each(function() {
            if ($(this).is(category)) {
                $(this).removeClass('filtered');
            } else {
                $(this).addClass('filtered');
            }

            $('#projects-container').masonry('reload');
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });
    
    /*============================================
	Twitter
	==============================================*/
    var tweetsLength = $('#twitter-slider').data('tweets-length'),
        widgetID = $('#twitter-slider').data('widget-id');

    twitterFetcher.fetch(widgetID, 'twitter-slider', tweetsLength, true, false, true, '', false, handleTweets);

    function handleTweets(tweets) {

        var x = tweets.length,
            n = 0,
            tweetsHtml = '<ul class="slides">';

        while (n < x) {
            tweetsHtml += '<li>' + tweets[n] + '</li>';
            n++;
        }

        tweetsHtml += '</ul>';
        $('#twitter-slider').html(tweetsHtml);

        $('.twitter_reply_icon').html("<i class='fa fa-reply'></i>");
        $('.twitter_retweet_icon').html("<i class='fa fa-retweet'></i>");
        $('.twitter_fav_icon').html("<i class='fa fa-star'></i>");

        $('#twitter-slider').flexslider({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            slideshowSpeed: 5000,
            useCSS: true,
            controlNav: false,
            pauseOnAction: false,
            pauseOnHover: true,
            smoothHeight: false
        });
    }
    /*============================================
	Waypoints Animations
	==============================================*/
    $('.scrollimation').waypoint(function() {
        $(this).addClass('in');
    }, {
        offset: '90%'
    });
    /*============================================
	Resize Functions
	==============================================*/
    var thumbSize = $('.project-item').width();
    $(window).resize(function() {
        $('#home').height($(window).height() + 50);

        if ($('.project-item').width() != thumbSize) {

            $('#projects-container').masonry('reload');
            thumbSize = $('.project-item').width();
        }
        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*============================================
	Refresh scrollSpy function
	==============================================*/
    function scrollSpyRefresh() {
        setTimeout(function() {
            $('body').scrollspy('refresh');
        }, 1000);
    }

    /*============================================
	Refresh waypoints function
	==============================================*/
    function waypointsRefresh() {
        setTimeout(function() {
            $.waypoints('refresh');
        }, 1000);
    }
});