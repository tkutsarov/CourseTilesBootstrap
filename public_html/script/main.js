
function limitTitleText(){
    var span=$('div.course-title span');
    
    var divh=$('div.course-title').height();
    for (var i = 0; i < span.length; i++) {                
        while ($(span[i]).outerHeight()>divh) {           
            $(span[i]).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        } 
    }
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
    
});

$( document ).ready(limitTitleText);

