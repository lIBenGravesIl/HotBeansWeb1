const slider2 = document.querySelector(".contact-slider")
const contacts = document.querySelector(".contacts")

const tl = new TimelineMax();

tl.fromTo(slider2, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})
fromTo(contacts, 1, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
