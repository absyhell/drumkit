var x=document.querySelectorAll("button");
function makesound(s){
    var y;
        switch(s)
        {
            case "w":
                y=new Audio("images/sounds/crash.mp3");
                y.play();
                break;
            case "a":
                y=new Audio("images/sounds/kick-bass.mp3");
                y.play();
                break;
            case "s":
                y=new Audio("images/sounds/snare.mp3");
                y.play();
                break;
            case "d":
                y=new Audio("images/sounds/tom-1.mp3");
                y.play();
                break;
            case "j":
                y=new Audio("images/sounds/tom-2.mp3");
                y.play();
                break;
            case "k":
                y=new Audio("images/sounds/tom-3.mp3");
                y.play();
                break;
            case "l":
                y=new Audio("images/sounds/tom-4.mp3");
                y.play();
                break;
            default: console.log(s);
        }
    }
for(var i=0;i<x.length;i++){
    x[i].addEventListener("click",function(){
        var s=this.innerHTML;
        makesound(s);
        })
    }

document.addEventListener("keydown",function(event)
{
   s=event.key;
    makesound(s);
});
