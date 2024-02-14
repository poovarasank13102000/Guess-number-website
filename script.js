

var checknumber = document.getElementById("checknumber")
var result = document.getElementById("result")
var randomnumber = Math.floor(Math.random() * 10) + 1
var score = document.getElementById("score")
var totalscore = 10
function update() {
    var enternumber = checknumber.value
    if (enternumber == randomnumber) {
        console.log("Right")
        result.textContent = "Right"
        alert("You Won...")

        function playmusic(audioname){
        let audio=new Audio(audioname);
        audio.play();
        
       }
       playmusic('/Audio.mp3/mp3.mp3')
      
    }
    
    else {
        totalscore = totalscore - 1
        score.textContent = "Totalscore:" + totalscore
        result.textContent = "Wrong"
        function playmusic(audioname){
        let audio=new Audio(audioname);
        audio.play();
        
       }
       playmusic('/Audio.mp3/wrong.mp3')
    }
}

var poppup=document.getElementById("poppup")
var poppupbox=document.getElementById("poppupbox")
var btn=document.getElementById("submit")

function change(){
    poppup.style.display='none'
    poppupbox.style.display='none'
}

