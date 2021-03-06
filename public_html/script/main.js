
function limitTitleText() {
    var span = $('div.course-title span');
    var divh = $('div.course-title').height();

    for (var i = 0; i < span.length; i++) {

        while ($(span[i]).outerHeight() > divh) {
            $(span[i]).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }
}

function dynamicResizeContainer() {
    $('.course-title-field').each(function () {
        if ($('.submenu', this).length == 0) {
            $('.course-title', this).css('width', '100%');
        }
    })

    $('.bottom-info').each(function () {
        if (!$('.right-side-info', this).text()) {
            $('.right-side-info', this).css('display', 'none');
            $('.left-side-info', this).css('width', '100%');
        }
    })
}

function showSubmenu() {
    $('div.submenu').click(function () {
        $('ul.hidden-menu-list', this).toggle();
        $('ul.hidden-menu-list li', this).toggle();

        var widthWrapper = $("body .container").width();
        var widthSubmenu = $('ul.hidden-menu-list').width();
        var offset = $(this).offset().left;

        if ((offset + widthSubmenu) > widthWrapper) {
            $('ul.hidden-menu-list', this).css('left', '5%');
        } else {
            $('ul.hidden-menu-list', this).css('left', '85%');
        }
    });
}

$(document).ready(function () {
    showSubmenu();
    limitTitleText();
    dynamicResizeContainer();
});

$(window).resize(function () {
    limitTitleText();

    $('ul.hidden-menu-list').css('display', 'none');
    $('ul.hidden-menu-list li').css('display', 'none');
});


