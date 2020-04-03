const slider2 = document.querySelector(".slider")
const team = document.querySelector(".Team")
const teaminfo = document.querySelector(".teaminfo")
const clickthem = document.querySelector(".clickthem")


const tl = new TimelineMax();

tl.fromTo(slider2, 0.7, {y: "100%"}, {y: "0%", ease: Power2.easeInOut})
.fromTo(team, 1.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(teaminfo, 1.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(clickthem, 1.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5");

document.getElementById('keenan').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.bg-modal').style.display = 'none';
    });
});
document.getElementById('kabir').addEventListener('click',
function() {
    document.querySelector('.bg-modal-2').style.display = 'flex';
    document.querySelector('.close-2').addEventListener('click',
    function() {
        document.querySelector('.bg-modal-2').style.display = 'none';
    });
});
document.getElementById('kathy').addEventListener('click',
function() {
    document.querySelector('.bg-modal-3').style.display = 'flex';
    document.querySelector('.close-3').addEventListener('click',
    function() {
        document.querySelector('.bg-modal-3').style.display = 'none';
    });
});
document.getElementById('clinton').addEventListener('click',
function() {
    document.querySelector('.bg-modal-4').style.display = 'flex';
    document.querySelector('.close-4').addEventListener('click',
    function() {
        document.querySelector('.bg-modal-4').style.display = 'none';
    });
});
document.getElementById('russel').addEventListener('click',
function() {
    document.querySelector('.bg-modal-5').style.display = 'flex';
    document.querySelector('.close-5').addEventListener('click',
    function() {
        document.querySelector('.bg-modal-5').style.display = 'none';
    });
});
document.getElementById('christine').addEventListener('click',
function() {
    document.querySelector('.bg-modal-6').style.display = 'flex';
    document.querySelector('.close-6').addEventListener('click',
    function() {
        document.querySelector('.bg-modal-6').style.display = 'none';
    });
});