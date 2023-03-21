// Eye following cursor--------------------------------------------------------
let eyes = document.querySelectorAll(".eye");
let eyeRect = eyes[0].getBoundingClientRect();
let container = document.querySelector(".eyesContainer");
let containerRect = container.getBoundingClientRect();
window.addEventListener("resize", updatePosition, false);
function updatePosition(e) {
  eyeRect = eyes[0].getBoundingClientRect();
  containerRect = container.getBoundingClientRect();}
document.body.addEventListener("mousemove", eyesFollow, false);
function eyesFollow(e) {
  requestAnimationFrame(() => {
    let xPos = e.pageX;
    let yPos = e.pageY;
    let xDiff = (eyeRect.x + eyeRect.width / 2) - xPos;
    let yDiff = (eyeRect.y + eyeRect.height / 2) - yPos;
    let angle = Math.atan2(yDiff, xDiff) * 180 / Math.PI;
    let mouseXRelativetoContainer = xPos - containerRect.x - containerRect.width / 2;
    let mouseYRelativetoContainer = yPos - containerRect.y - containerRect.height / 2;
    let containerXAngle = 60 * (mouseXRelativetoContainer / window.innerWidth);
    let containerYAngle = -1 * 60 * (mouseYRelativetoContainer / window.innerHeight);
    container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");
    container.style.setProperty("--xAngle", containerXAngle.toFixed(2) + "deg");
    container.style.setProperty("--yAngle", containerYAngle.toFixed(2) + "deg");});}
    
// Cutome Cursor---------------------------------------------------------------
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`});

// Dark and Light theme btn----------------------------------------------------
const root = document.querySelector(':root');
const lightBtn = document.getElementById('light-theme-btn');
const darkBtn = document.getElementById('dark-theme-btn');
function lightTheme() {
  lightBtn.style.setProperty('z-index', '1');
  darkBtn.style.setProperty('z-index', '2');
  root.style.setProperty('--major', '#ffff');
  root.style.setProperty('--minor', '#000');
  root.style.setProperty('--hover', '#c9c9c9');
  root.style.setProperty('--active', '#858585');};
function darkTheme() {
  darkBtn.style.setProperty('z-index', '1');
  lightBtn.style.setProperty('z-index', '2');
  root.style.setProperty('--major', '#000');
  root.style.setProperty('--minor', '#f8f8f8');
  root.style.setProperty('--hover', '#505050');
  root.style.setProperty('--active', '#303030');};
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';});
document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')});
document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')});
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');});
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');});})

// Progress Bar----------------------------------------------------------------
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
  height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
  scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";};
window.onscroll = function () {
  progressBarScroll();};

// Collapsible Project Tiles---------------------------------------------------
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";}});};
      
// Go To Top Button------------------------------------------------------------
function scrollToTop() {
  window.scrollTo(0,0);};
  window.addEventListener('scroll', e=> {
  document.getElementById('top-btn').style.display = window.scrollY > 100 ? 'block' : 'none'; });