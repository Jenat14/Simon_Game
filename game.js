buttonColors= ["red","blue","green","yellow"]
gamePattern=[]
$(document).keydown(function() {
    nextSequence();
});
function nextSequence(){
    var num=Math.floor(Math.random()*4);
    var randomColor=buttonColors[num]
    gamePattern.push(randomColor)
    console.log(randomColor)
    $(document).find("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = new Audio('./sounds/' + randomColor + '.mp3');
    sound.play();
}
