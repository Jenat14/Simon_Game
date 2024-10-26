buttonColors= ["red","blue","green","yellow"]
gamePattern=[]
userClick=[]
var started=false
var level=0
$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});
function nextSequence(){
    userClick=[]
    level+=1
    $("h1").text("Level "+level)
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
    checkAnswer(userClick.length-1)
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
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClick[currentLevel]){
        console.log("Sucess")
        if(userClick.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
    }
    else{
        console.log("Failed")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over"),200
        })
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver()
    }
}
function startOver(){
    level=0;
    gamePattern = [];
    started = false;
}