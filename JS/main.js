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

const sidebar1Btn = document.querySelector('.responsive-sidebar-btn');
let sidebar1Open = false;
sidebar1Btn.addEventListener('click', () => {
    if(!sidebar1Open) {
        sidebar1Btn.classList.add('open');
        sidebar1Open = true;
    } else {
        sidebar1Btn.classList.remove('open');
        sidebar1Open = false;
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