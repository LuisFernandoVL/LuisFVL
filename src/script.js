window.onscroll = function() {myFunction()};

var barratopo = document.getElementById("barratopo");
var sticky = barratopo.offsetTop;

var irtopo = document.getElementsByClassName("irtopo")[0];


function myFunction() {
  if (window.pageYOffset >= sticky) {
    barratopo.style.paddingTop=0;
    barratopo.style.display='block';
    barratopo.classList.add("sticky");

    irtopo.style.display='block'
  } else {
    barratopo.style.display='none';
    barratopo.classList.remove("sticky");
    
    irtopo.style.display='none'
  }
}