
  var start=new Date().getTime();

  function getRandomColor()
  {
    var letters='0123456789ABCDEF';
    var color='#';
    for(var i=0; i<6; i++)
        {
        color +=letters[Math.floor(Math.random() * 16)];
            }
        
return color;
        }
        

function move()
{
    const left1=Math.random()*300;

    const top1=Math.random()*300;

    const wh=((Math.random()*400)+100);

    document.getElementById("shape").style.left=left1 +"px";

    document.getElementById("shape").style.top=top1 +"px";

    document.getElementById("shape").style.width=wh + "px";

    document.getElementById("shape").style.height=wh +"px";

    document.getElementById("shape").style.display="block";

    document.getElementById("shape").style.backgroundColor=getRandomColor();

  var start=new Date().getTime();
}
move();

const shape=document.getElementById("shape");
shape.onclick=function () {
    shape.style.display = "none";
  var end = new Date().getTime();
 // alert("start"+start);
  //alert("end"+end);
  var timeTaken=(end-start)/1000;
  alert(timeTaken +"seconds");
  move();
  }
  

  