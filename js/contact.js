const slider2 = document.querySelector(".contact-slider")
const contacts = document.querySelector(".contacts")
const wrapper = document.querySelector(".wrapper")
const title1 = document.querySelector(".title1")
const title = document.querySelector(".title")
const formbtn = document.querySelector(".formbut1")

const tl = new TimelineMax();

tl.fromTo(slider2, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(title, 1, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(title1, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(contacts, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(formbtn, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")
.fromTo(wrapper, 1, {opacity: 0, y:30}, {opacity: 1, y:0}, "-=0.5")