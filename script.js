window.addEventListener("scroll", function(){
  if(window.scrollY==0){
    document.querySelector("header").style.background = "rgba(0,0,0,0)";
    document.querySelector("header").style.color = "var(--header-color)";
  } else {
    document.querySelector("header").style.background = "rgba(239, 240, 237, .95)";
    document.querySelector("header").style.color = "#000000";
  }
});