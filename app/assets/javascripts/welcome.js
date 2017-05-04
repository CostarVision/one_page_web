$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation': true,
        afterLoad: function(anchorLink, index){

            if(index == 3){
                console.log("afterLoad:" + index );
                $('.section3').find('p').addClass('animated bounceOutLeft');
            }
        },
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
});