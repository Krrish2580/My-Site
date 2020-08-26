const sidebarBtn = document.querySelector('.sidebar-btn');
let sidebarOpen = false;
sidebarBtn.addEventListener('click', () => {
    if(!sidebarOpen) {
        sidebarBtn.classList.add('open');
        sidebarOpen = true;
    } else {
        sidebarBtn.classList.remove('open');
        sidebarOpen = false;
    }
});

function myFunction() {
    var x = document.getElementById("sidebar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  $('body').mousemove(function(e){
    var moveX = (e.pageX * -1 / 15);
    var moveY = (e.pageY * -1 / 15);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

$('.bg-image').mousemove(function(e){
  var moveX = (e.pageX * -1 / 50);
  var moveY = (e.pageY * -1 / 50);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})

$('.about-me').mousemove(function(e){
  var moveX = (e.pageX * -1 / 50);
  var moveY = (e.pageY * -1 / 50);
  $(this).css('background-position', moveX + 'px ' + moveY + 'px')
})
      

      function initMap(){
        var location = {lat: 27.984344, lng: 83.768530};
        var map = new google.maps.Map(document.getElementById("map"),{
          zoom: 4,
          center: location
        });
      }

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
