const button = document.querySelector('.menu-button');
const tiles = document.querySelector('.list');
const masksDiv = document.querySelector('.masks');
const stickersDiv = document.querySelector('.stickers');
const cupsDiv = document.querySelector('.cups');
var number =0;
let menuOpen = false;
button.addEventListener('click', () => {
	if(!menuOpen){
		button.classList.add('open');
		tiles.classList.add('scaled');
		menuOpen = true;
	}
	else{
		button.classList.remove('open');
		tiles.classList.remove('scaled');
		menuOpen = false;
	}
})

window.onload = window.setInterval(swap,5000);

function swap(){
	if (number==1) {
		masksDiv.innerHTML = "<img src='mask1.jpg'>";
		cupsDiv.innerHTML = "<img src='cup1.jpg'>";
		stickersDiv.innerHTML = "<img src='sticker1.jpg'>";
		number=0;
	}
	else{
		masksDiv.innerHTML = "<img src='Mask.jpg'>";
		cupsDiv.innerHTML = "<img src='cup.jpg'>";
		stickersDiv.innerHTML = "<img src='sticker.jpg'>";
		number=1;
	}
}