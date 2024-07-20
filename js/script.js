var allImgs = Array.from(document.querySelectorAll(".item img"))
var lightBox = document.getElementById("lighteBox")
var lighteBoxImg = document.getElementById("lighteBox-img"); 
// var icons = document.querySelectorAll("#lighteBox-img i"); 

var  n; 
var  p ;
var  x ;


var currentSlide ;

for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click" , (e)=>{
        var ClickedImgSrc = e.target.getAttribute("src");
        lightBox.classList.replace("d-none" , "d-flex")
        lighteBoxImg.style.backgroundImage = `url(${ClickedImgSrc})`
        
        currentSlide = allImgs.indexOf(e.target)
    })
  }

/* -------------------------------------------------------------------------- closeBtn        */
var closeBtn = document.getElementById("close")
closeBtn.addEventListener("click", ()=>{
  lightBox.classList.replace("d-flex" , "d-none")
})

document.addEventListener("keyup",(e)=>{
  if(e.key == "Escape")
  lightBox.classList.replace("d-flex" , "d-none")
})

lighteBox.addEventListener('click', function(e) { // if click out img close lightBox
    // Check if the click is outside the div
  if (!lighteBoxImg.contains(e.target)) {
      // The click was outside the div
        lightBox.classList.replace("d-flex" , "d-none")
    }
});
/* -------------------------------------------------------------------------- prevBtn          */
var prevBtn = document.getElementById("prev")
prevBtn.addEventListener("click", ()=>{
prev();
})

document.addEventListener("keyup",(e)=>{
  if(e.key == "ArrowLeft")
  prev();
})

function prev()
{
  currentSlide-- ;
  if(currentSlide < 0)
  {
    currentSlide = allImgs.length-1 ;
  }
  lighteBoxImg.style.backgroundImage = `url(${allImgs[currentSlide].src})`
}
/* -------------------------------------------------------------------------- nextBtn      */
var nextBtn = document.getElementById("next")
nextBtn.addEventListener("click", ()=>{
  next();
})


document.addEventListener("keyup",(e)=>{
  if(e.key == "ArrowRight")
    next()
})

function next() {
  currentSlide++ ;
  if(currentSlide == allImgs.length)
  {
    currentSlide = 0 ;
  }
  lighteBoxImg.style.backgroundImage = `url(${allImgs[currentSlide].src})`
}














