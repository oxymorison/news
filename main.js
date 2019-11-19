$(document).ready(function() {
    /*TIMER*/
    var countdown = 4.3 * 60 * 1000;
    var timerId = setInterval(function() {
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
        //correct
        if (countdown <= 0) {
            clearInterval(timerId);
            $(".timer").html(" few seconds");
        } else {
            if (sec <= 9) {
                $(".timer").html('0' + min + ":" + "0" + sec + " minutes.");
            } else {
                $(".timer").html('0' + min + ":" + sec + " minutes.");
            }
        }
    }, 1000);
    setTimeout(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1000);
    }, 2500);

    function finalStep() {
        var $loadItem = $('.loading-item.change');
        var $infoText = $('.loading-block li');
        var i = 0;
        var animation = setInterval(function() {
            $loadItem.eq(i).closest('.loading-item').hide().next('.loading-item').fadeIn();
            $infoText.eq(i).closest('li').next('li').fadeIn();
            i++;
            if (i == $loadItem.length) {
                $('.loading-block .tohide').hide();
                $('.loading-item.last, .toshow').show();
                $("html, body").animate({
                    scrollTop: $(document).height()
                }, 1000);
                clearInterval(animation);
            }
        }, 1300);
    }
    /*steps*/
    $('.next-btn').on('click', function() {
        $(this).closest('.step').hide().next('.step').fadeIn();
        if ($(this).hasClass('btn-final-step')) {
            /*loading*/
            finalStep();
        }
    });
    var girls = $('.left .girl img'),
        countGirls = girls.length;
    var i = 0;
    setInterval(function() {
        if (i < countGirls - 1) {
            girls.eq(i).fadeOut().next('.girl img').fadeIn();
            i++;
        } else {
            i = 0;
            girls.eq(countGirls - 1).fadeOut();
            girls.eq(0).fadeIn();
        }
    }, 2500);
});