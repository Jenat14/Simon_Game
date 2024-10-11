buttonColors= ["red","blue","green","yellow"]
gamePattern=[]
function nextSequence(){
    var num=Math.floor(Math.random()*4);
    var randomColor=buttonColors[num]
    gamePattern.push(randomColor)
}
nextSequence()