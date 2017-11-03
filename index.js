var counter = setInterval(minsT, 1000);

var count = function mins(m) {return m*60;}

function minsT()
count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs";