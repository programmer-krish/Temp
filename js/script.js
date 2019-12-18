function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    top: element.offsetTop
  });
}
document.getElementById("homeMenu").addEventListener('click', () => scrollTo(document.getElementById("first-screen")));
document.getElementById("featuresMenu").addEventListener('click', () => scrollTo(document.getElementById("features")));
document.getElementById("reviewsMenu").addEventListener('click', () => scrollTo(document.getElementById("reviews")));
document.getElementById("downloadMenu").addEventListener('click', () => scrollTo(document.getElementById("download")));
document.getElementById("homeMenu2").addEventListener('click', () => scrollTo(document.getElementById("first-screen")));
document.getElementById("featuresMenu2").addEventListener('click', () => scrollTo(document.getElementById("features")));
document.getElementById("reviewsMenu2").addEventListener('click', () => scrollTo(document.getElementById("reviews")));
document.getElementById("downloadMenu2").addEventListener('click', () => scrollTo(document.getElementById("download")));
document.getElementById("homeMenu3").addEventListener('click', () => scrollTo(document.getElementById("first-screen")));
document.getElementById("featuresMenu3").addEventListener('click', () => scrollTo(document.getElementById("features")));
document.getElementById("reviewsMenu3").addEventListener('click', () => scrollTo(document.getElementById("reviews")));
document.getElementById("downloadMenu3").addEventListener('click', () => scrollTo(document.getElementById("download")));
document.getElementById("button").addEventListener('click', () => scrollTo(document.getElementById("features")));
document.getElementById("buttonUP").addEventListener('click', () => scrollTo(document.getElementById("first-screen")));

var windowWidth = window.innerWidth;


function calcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.getElementById("first-screen").setAttribute("style", "height:" + vH + "px;");
}

calcVH();
window.addEventListener('onorientationchange', calcVH, true);

var headerHeight = document.querySelector('.header').clientHeight;
var firstScreenHeight = document.querySelector('.first-screen').clientHeight;
var mainContentHigh = document.querySelector('.main-content').style.height = (firstScreenHeight - headerHeight) + "px";
var highCorrection = document.querySelector('.main-content').style.paddingTop = (headerHeight) + "px";
var hamburgerMenuTopHeight = document.getElementById("hamburgerMenu--topHeight").style.height = (headerHeight) + "px";

function resizeFunction() {
  if (window.matchMedia("(min-width: 433px)").matches) {
    calcVH();
  }
  window.addEventListener('onorientationchange', calcVH, true);
  var headerHeight = document.querySelector('.header').clientHeight;
  var firstScreenHeight = document.querySelector('.first-screen').clientHeight;
  var mainContentHigh = document.querySelector('.main-content').style.height = (firstScreenHeight - headerHeight) + "px";
  var highCorrection = document.querySelector('.main-content').style.paddingTop = (headerHeight) + "px";
  var hamburgerMenuTopHeight = document.getElementById("hamburgerMenu--topHeight").style.height = (headerHeight) + "px";
}
function scrollFunction() {
  var windowWidth = window.innerWidth;
  if (document.documentElement.scrollTop > 40) {
    document.getElementById("buttonUP").style.display = "flex";
    document.getElementById("scrollPadding").style.paddingTop = 5 + "px";
    document.getElementById("scrollPadding").style.paddingBottom = 5 + "px";
    var hamburgerMenuTopHeight = document.getElementById("hamburgerMenu--topHeight").style.height = (headerHeight - 40) + "px";
  }
  if (document.documentElement.scrollTop < 41) {
    document.getElementById("buttonUP").style.display = "none";
  }
  if (document.documentElement.scrollTop < 41 && windowWidth > 790) {
    document.getElementById("scrollPadding").style.paddingTop = 25 + "px";
    document.getElementById("scrollPadding").style.paddingBottom = 25 + "px";
    var hamburgerMenuTopHeight = document.getElementById("hamburgerMenu--topHeight").style.height = (headerHeight) + "px";
  }
}




window.onscroll = () => {
  scrollFunction()
};

window.onresize = () => {
  resizeFunction()
};




