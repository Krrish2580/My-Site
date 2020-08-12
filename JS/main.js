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