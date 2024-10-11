buttonColors= ["red","blue","green","yellow"]
gamePattern=[]
userClick=[]
$(document).keydown(function() {
    nextSequence();
});
function nextSequence(){
    var num=Math.floor(Math.random()*4);
    var randomColor=buttonColors[num]
    gamePattern.push(randomColor)
    console.log(randomColor)
    $(document).find("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor)
}
$(".btn").click(function(){
    var userChosen=$(this).attr('id');
    $(document).find("#"+userChosen).fadeIn(100).fadeOut(100).fadeIn(100);
    userClick.push(userChosen);
    animatePress(userChosen)
    playSound(userChosen);
})
function playSound(color){
    var sound = new Audio('./sounds/' + color + '.mp3');
    sound.play();
}
function animatePress(color){
    $(document).find("#"+color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
      }, 100);
}