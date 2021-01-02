var character = document.getElementById("character")
var block = document.getElementById("block")

function jump(){
  if(character.classList != "animate"){
  character.classList.add("animate");
  }
  setTimeout(function(){
    character.classList.remove("animate")
  },500);
}

var checkDead = setInterval(
  function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    console.log("cc")
    if( blockLeft < 20 && blockLeft > 0 && characterTop >= 130 ) {
      console.log("yes");
      alert("You lose");
      block.style.animation = "none";
      block.style.display = "none";
    }

  }, 10
);