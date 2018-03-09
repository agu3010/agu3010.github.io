$(document).ready(function(){
    var stage = 0;
    var changeStage = function() {
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
    $('#main').on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
        }
        else{
            if (stage == 0) changeStage();
        }
    });
    $('#main').on({ 'touchstart' : function(){
        if (stage == 0) changeStage();
        }
    });
});

