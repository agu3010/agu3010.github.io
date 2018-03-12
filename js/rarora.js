$(document).ready(function(){
    var stage = 0;
    var changeStage = function() {
        if (stage == 0) {
            stage = 1;
            $('#one').animate({
                opacity:0
            }, 1000, function(){
                $('#one').css('display', 'none');
                $('#two').css('display', 'block');
                $('#two').animate({
                opacity:1}, 1000);
            })
        }
    }
    $('#main').on('mousewheel', function(e){
        if (!(e.originalEvent.wheelDelta /120 > 0)) changeStage();
    });
    $('#main').on('DOMMouseScroll', function(e){ changeStage() });
    $('#main').on({ 'touchstart' : function(e){
        if (stage == 0) {
            e.preventDefault()
            changeStage();
        }
    }});
    $('body').keypress(function(){ changeStage() });
    setTimeout(changeStage, 3000)
    $('.r-popover').popover({html:true});
});

