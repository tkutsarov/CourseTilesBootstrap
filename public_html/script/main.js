
function limitTitleText(){
    var span=$('div.course-title span');    
    var divh=$('div.course-title').height();
    
    for (var i = 0; i < span.length; i++) {      
        console.log($(span[i]).outerHeight());
        console.log(divh);
        while ($(span[i]).outerHeight()>divh) {           
            $(span[i]).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        } 
    }
}

function showSubmenu(){
    $('div.submenu').click(function(){
        $('ul.hidden-menu-list', this).toggle();
        $('ul.hidden-menu-list li', this).toggle();
        
        var widthWrapper = $("#wrapper").width();
        var widthSubmenu = $('ul.hidden-menu-list').width();
        var offset = $(this).offset().left;
        
        if ((offset + widthSubmenu) > widthWrapper) {
            $('ul.hidden-menu-list', this).css('left', '5%');
        } else {
            $('ul.hidden-menu-list', this).css('left', '85%');    
        }
    });
}

$( document ).ready(function() {
    
    $('div.finished-course div.course-panel div.course-info div.bottom-info div.left-side-info \n\
           div.progress-panel div.progress div.progress-bar').css('width', '100%');
    $('div.finished-course-submenu div.course-panel div.course-info div.bottom-info div.left-side-info \n\
           div.progress-panel div.progress div.progress-bar').css('width', '100%');   
    $('div.finished-course div.course-panel div.course-info div.bottom-info div.left-side-info \n\
           div.progress-panel div.progress-rate').text("100% finished");
    $('div.finished-course-submenu div.course-panel div.course-info div.bottom-info div.left-side-info \n\
           div.progress-panel div.progress-rate').text("100% finished");  
    
    showSubmenu();
    limitTitleText();   
});

$(window).resize(function() {
    limitTitleText();
    
    $('ul.hidden-menu-list').css('display', 'none'); 
    $('ul.hidden-menu-list li').css('display', 'none'); 
});


