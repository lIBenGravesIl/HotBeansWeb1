const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
const button = document.querySelector(".btn");
const slider = document.querySelector(".apply-slider");
const title = document.querySelector(".title");
const apply = document.querySelector(".Apply")
const application = document.querySelector(".application")
const codecademy = document.querySelector(".codecademy")
const w3 = document.querySelector(".w3schools")
const wrapper = document.querySelector(".wrapper")

const tl = new TimelineMax();

tl.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(title, 1, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(apply, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(application, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(codecademy, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(w3, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=1")
.fromTo(wrapper, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else{
        customTxt.innerHTML = "No File Selected.";
    }
});
button.addEventListener("click", function(){
    customTxt.innerHTML = "No File Selected"
});
