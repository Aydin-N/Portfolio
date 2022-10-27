const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")
const shortUl = document.querySelector(".short")
const fillBar = document.querySelectorAll(".fill")
const backLayer = document.querySelector("#bl")
const input = document.querySelectorAll(".gap")
const inputText = document.querySelector(".text-gap")
const resultText = document.getElementById("result-text")
const resultImg = document.getElementById("result-img")
const result = document.getElementById("result")
const root = document.querySelector(":root")
const project = document.querySelectorAll(".project")

menuIcon.addEventListener("click", function(){
  menuIcon.classList.toggle("close")
  if(menuIcon.classList.contains("close")){
    menuIcon.style.transform = "translateX(0)"
    shortUl.style.transform = "translateX(0)"
    menuIcon.children[0].style.transform = "rotate(45deg) translate(8px,6px)"
    menuIcon.children[1].style.width = "15%"
    menuIcon.children[2].style.transform = "rotate(-45deg) translate(8px,-6px)"
    backLayer.classList.add("back-layer")
  } else {
    menuIcon.style.transform = "translateX(-70px)"
    shortUl.style.transform = "translateX(100%)"
    menuIcon.children[0].style.transform = "rotate(0) translate(0, 0)"
    menuIcon.children[1].style.width = "100%"
    menuIcon.children[2].style.transform = "rotate(0) translate(0)"
    backLayer.classList.remove("back-layer")
  }
})
backLayer.addEventListener("click", function(){
  menuIcon.classList.remove("close")
  menuIcon.style.transform = "translateX(-70px)"
  shortUl.style.transform = "translateX(100%)"
  menuIcon.children[0].style.transform = "rotate(0) translate(0, 0)"
  menuIcon.children[1].style.width = "100%"
  menuIcon.children[2].style.transform = "rotate(0) translate(0)"
  backLayer.classList.remove("back-layer")
})
input.forEach((each)=>each.addEventListener("blur", function(){
  if(each.value!=""){
    each.parentElement.querySelector("label").classList.add("filled")
  }else{
    each.parentElement.querySelector("label").classList.remove("filled")
  }
}))
inputText.addEventListener("blur", function(){
  if(inputText.value!=""){
    inputText.parentElement.querySelector("label").classList.add("filled-text")
  }else{
    inputText.parentElement.querySelector("label").classList.remove("filled-text")
  }
})

project.forEach((each) => each.addEventListener("click", ()=>{
  for(a of project){
    a.style.overflow = "hidden"
    a.classList.remove("open")
  }
  each.classList.add("open")
  setTimeout(function(){ each.style.overflow = "auto" }, 500)
}))