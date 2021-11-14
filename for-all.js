let menu = document.getElementById("icon");
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
menu.addEventListener("click", function () {
    document.getElementById("show-title").classList.toggle("show");
    document.getElementById("show-menu").classList.toggle("show");

})

// function darkMode() {
    // var element = document.body;
//     // element.classList.toggle("dark-mode");
//     // element.body.style. 
//     document.getElementById("logo").style.background = "#4e4e4e";
//     document.getElementById("show-title").style.background = "#4e4e4e";
//     document.getElementById().style.color = "white";
//     document.getElementById("logo-s").style.color = "white";
//     document.querySelectorAll('a').style.color = "white";
   
//  }


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
