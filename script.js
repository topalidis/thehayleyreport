window.addEventListener("scroll", function(){
  if(window.scrollY==0){
    document.querySelector("header").style.background = "#eff0ed";
    document.querySelector("header").style.color = "var(--header-color)";
  } else {
    document.querySelector("header").style.background = "#eff0ed";
    document.querySelector("header").style.color = "#000000";
  }
});