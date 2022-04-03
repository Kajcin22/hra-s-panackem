// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

/*
úkoly pro 4. lekci:
1) Vydefinuj si všechny potřebné proměnné. Budeme chtít 100% pracovat se souřadnicemi panáčka a mince, s jejich šířkou a výškou. Potřebujeme i odkaz na jejich HTML elementy.
2) Vytvoř funkci, která umístí panáčka na střed obrazovky. Budeme potřebovat znát šířku a výšku okna (využij vlastnosti - window.innerWidth a window.innerHeight)
3) Podobnou funkci vytvoř i pro minci, tu každopádně chceme umístit náhodně po mapě
4) Reaguj na kliknutí šipek a rozpohybuj panáčka - nahoru, dolu, doleva, doprava. Budeš pracovat se souřadnicemi X,Y. 
5) Vytvoř "animaci", při stisku šipky nahoru se panáček otočí nahoru (změní se obrázek), podobně u dalších šipek

Nezapomeň vše ošetřit - panáček ti nemůže zajíždět za obrazovku apod.
*/
let panacek = document.querySelector ("#panacek");
let mince = document.querySelector ("#mince");
let minceStribrna = document.querySelector ("#minceStribrna");
let minceBronz = document.querySelector ("#minceBronz");
let slimak = document.querySelector ("#slimak");
let slimak2 = document.querySelector ("#slimak2");
let moucha = document.querySelector ("#moucha");
let moucha2 = document.querySelector ("#moucha2");
let skore = document.querySelector ("#score");
let zivot = document.querySelector ("#zivot");
let hudba = document.querySelector ("#hudba");
let zvukmince = document.querySelector ("#zvukmince");
let zvukfanfara = document.querySelector("#zvukfanfara");
let zvukZraneni = document.querySelector("#zvukzraneni");

let body = document.querySelector("body");

let obrazX = window.innerWidth;
let obrazY = window.innerHeight;

let panacekWidth = 74;
let panacekHeight = 64;

let panacekX = 0
let panacekY = 0

//console.log (obrazX);
//console.log (obrazY);

body.addEventListener("load", naStred())
function naStred() {
	stredX = obrazX/2;
	stredY = obrazY/2;
	//console.log(stredX);
	//console.log(stredY);
	panacek.style.left = stredX+"px";
	panacek.style.top= stredY+"px";
	panacekX = stredX;
	panacekY = stredY;
}
let minceWidth = 36
let minceHeight = 36

let minceX = 0
let minceY = 0

body.addEventListener("load", loadMince())
function loadMince () {
	minceX = Math.floor(Math.random() * (obrazX - minceWidth));
	minceY = Math.floor(Math.random() * (obrazY - minceHeight));

	//console.log(minceX);
	//console.log(minceY);
	mince.style.left = minceX + "px";
	mince.style.top = minceY + "px";
}

let slimakWidth = 58
let slimakHeight = 28

let slimakX = 0
let slimakY = 0

body.addEventListener("load", loadSlimak())
function loadSlimak () {
	slimakX = Math.floor(Math.random() * (obrazX - slimakWidth));
	slimakY = Math.floor(Math.random() * (obrazY - slimakHeight));
	slimak.style.left = slimakX + "px";
	slimak.style.top = slimakY + "px";
}

let slimak2Width = 58
let slimak2Height = 28

let slimak2X = 0
let slimak2Y = 0

body.addEventListener("load", loadSlimak2())
function loadSlimak2 () {
	slimak2X = Math.floor(Math.random() * (obrazX - slimak2Width));
	slimak2Y = Math.floor(Math.random() * (obrazY - slimak2Height));
	slimak2.style.left = slimak2X + "px";
	slimak2.style.top = slimak2Y + "px";
}

let mouchaWidth = 72
let mouchaHeight = 32

let mouchaX = 0
let mouchaY = 0

body.addEventListener("load", loadMoucha())
function loadMoucha () {
	mouchaX = Math.floor(Math.random() * (obrazX - mouchaWidth));
	mouchaY = Math.floor(Math.random() * (obrazY - mouchaHeight));
	moucha.style.left = mouchaX + "px";
	moucha.style.top = mouchaY + "px";
}

let moucha2Width = 72
let moucha2Height = 32

let moucha2X = 0
let moucha2Y = 0

body.addEventListener("load", loadMoucha2())
function loadMoucha2 () {
	moucha2X = Math.floor(Math.random() * (obrazX - moucha2Width));
	moucha2Y = Math.floor(Math.random() * (obrazY - moucha2Height));
	moucha2.style.left = moucha2X + "px";
	moucha2.style.top = moucha2Y + "px";
}


let stribrnaWidth = 36
let stribrnaHeight = 36

let stribrnaX = 0
let stribrnaY = 0

body.addEventListener("load", loadStribro())
function loadStribro () {
	stribrnaX = Math.floor(Math.random() * (obrazX - stribrnaWidth));
	stribrnaY = Math.floor(Math.random() * (obrazY - stribrnaHeight));
	minceStribrna.style.left = stribrnaX + "px";
	minceStribrna.style.top = stribrnaY + "px";
}

let bronzWidth = 36
let bronzHeight = 36

let bronzX = 0
let bronzY = 0

body.addEventListener("load", loadBronz())
function loadBronz () {
	bronzX = Math.floor(Math.random() * (obrazX - bronzWidth));
	bronzY = Math.floor(Math.random() * (obrazY - bronzHeight));
	minceBronz.style.left = bronzX + "px";
	minceBronz.style.top = bronzY + "px";
}


let posunSlimaka = -3
function slimakVlevo () {
		if (posunSlimaka>=0){
			slimak.src = "obrazky/slimak-vpravo.png"
		} else {
		slimak.src = "obrazky/slimak-vlevo.png"
	}
			slimakX = slimakX + posunSlimaka
			slimak.style.left = slimakX + "px"
			
		if (slimakX <= 0 || slimakX > (obrazX-slimakWidth)){
				posunSlimaka = posunSlimaka * -1
				slimakX = slimakX + posunSlimaka
				slimak.style.left = slimakX + "px";	
			}
		
}

let posunSlimaka2 = -3
function slimak2Vlevo () {
	if (posunSlimaka2>=0){
		slimak2.src = "obrazky/slimak-vlevo.png"
	} else {
	slimak2.src = "obrazky/slimak-vpravo.png"
	}
		slimak2X = slimak2X - posunSlimaka2
		slimak2.style.left = slimak2X + "px"
		
	if (slimak2X <= 0 || slimak2X > (obrazX-slimak2Width)){
			posunSlimaka2 = posunSlimaka2 * -1
			slimak2X = slimak2X - posunSlimaka2
			slimak2.style.left = slimak2X + "px";	
		}
	
}

let posunMoucha = -15
function letMoucha () {
		if (posunMoucha>=0){
			moucha.src = "obrazky/moucha-vpravo.png"
		} else {
		moucha.src = "obrazky/moucha-vlevo.png"
	}
			mouchaY = mouchaY + posunMoucha
			moucha.style.top = mouchaY + "px"
			
		if (mouchaY <= 0 || mouchaY > (obrazY-mouchaHeight)){
				posunMoucha = posunMoucha * -1
				mouchaY = mouchaY + posunMoucha
				moucha.style.top = mouchaY + "px";	
			}
		
}

let posunMoucha2 = -15
function letMoucha2 () {
	if (posunMoucha2>=0){
		moucha2.src = "obrazky/moucha-vpravo.png"
	} else {
	moucha2.src = "obrazky/moucha-vlevo.png"
}
		moucha2Y = moucha2Y + posunMoucha2
		moucha2.style.top = moucha2Y + "px"
		
	if (moucha2Y <= 0 || moucha2Y > (obrazY-moucha2Height)){
			posunMoucha2 = posunMoucha2 * -1
			moucha2Y = moucha2Y + posunMoucha2
			moucha2.style.top = moucha2Y + "px";	
		}
	
}


let skoreHodnota = 0
let zivotHodnota = 5
//console.log(skoreHodnota)

function resetGame(){
	zivot.src = "obrazky/srdce-5.png"
	loadBronz();
	loadStribro();
	loadMince();
	loadSlimak();
	loadSlimak2();
	loadMoucha();
	loadMoucha2();
	naStred();
}

function pohybNepratel (){
	slimakVlevo();
	slimak2Vlevo();
	letMoucha();
	letMoucha2();
}

body.addEventListener("keydown", posunPanacka)	
function posunPanacka (event) {

	switch (event.key) {
		case "w":
			panacek.src = "obrazky/panacek-nahoru.png";
			panacekY = panacekY - 10
			panacek.style.top = panacekY  + "px"
			if(panacekY <= 0){
				panacekY = panacekY + 10
				panacek.style.top = panacekY + "px";
			}
			pohybNepratel();
			break
		case "s":
			panacek.src = "obrazky/panacek.png"
			panacekY = panacekY + 10
			panacek.style.top = panacekY + "px"
			
			if (panacekY > (obrazY-panacekHeight)){
				panacekY = panacekY - 10
				panacek.style.top = panacekY + "px";
				
			}
			pohybNepratel();
			break;
		case "d":
			panacek.src = "obrazky/panacek-vpravo.png"
			panacekX = panacekX + 10
			panacek.style.left = panacekX + "px"

			if (panacekX > (obrazX-panacekWidth)){
				panacekX = panacekX - 10
				panacek.style.left = panacekX + "px";
			}			
			pohybNepratel();
			break;
		case "a":
			panacek.src = "obrazky/panacek-vlevo.png"
			panacekX = panacekX - 10
			panacek.style.left = panacekX + "px"
			if (panacekX <= 0){
				panacekX = panacekX + 10
				panacek.style.left = panacekX + "px";
			}
			pohybNepratel();
			break;	
		
 	}	
	if (!(panacekX + panacekWidth < minceX || minceX + minceWidth < panacekX || panacekY + panacekHeight < minceY || minceY + minceHeight < panacekY)) { //panacek a mince se prekryvaji
		zvukmince.play()
		loadMince()
		skoreHodnota += 3
		skore.textContent = skoreHodnota;
		
	} 
	if (!(panacekX + panacekWidth < stribrnaX || stribrnaX + stribrnaWidth < panacekX || panacekY + panacekHeight < stribrnaY || stribrnaY + stribrnaHeight < panacekY)) { //panacek a stribrna mince se prekryvaji
		zvukmince.play()
		loadStribro()
		skoreHodnota += 2
		skore.textContent = skoreHodnota;
	}

	if (!(panacekX + panacekWidth < bronzX || bronzX + bronzWidth < panacekX || panacekY + panacekHeight < bronzY || bronzY + bronzHeight < panacekY)) { //panacek a stribrna mince se prekryvaji
		zvukmince.play()
		loadBronz()
		skoreHodnota += 1
		skore.textContent = skoreHodnota;
	}

	if (skoreHodnota >= 20) {
		if (skoreHodnota == 20) {
			zvukfanfara.play()
			skore.textContent = " 20 - vítězství";
			skoreHodnota = skoreHodnota + 1
			return
		}
		alert ("Vyhráls!");
		zvukfanfara.play();
		skore.textContent = "0";
		skoreHodnota = 0;
		zivotHodnota = 5;
		resetGame();
		return;
	}



	if (!(panacekX + panacekWidth < slimakX || slimakX + slimakWidth < panacekX || panacekY + panacekHeight < slimakY || slimakY + slimakHeight < panacekY)) { //panacek a slimák se prekryvaji
		zraneni();
	} 

	if (!(panacekX + panacekWidth < slimak2X || slimak2X + slimak2Width < panacekX || panacekY + panacekHeight < slimak2Y || slimak2Y + slimak2Height < panacekY)) { //panacek a slimák2 se prekryvaji
		zraneni();
	} 

	if (!(panacekX + panacekWidth < mouchaX || mouchaX + mouchaWidth < panacekX || panacekY + panacekHeight < mouchaY || mouchaY + mouchaHeight < panacekY)) { //panacek a moucha se prekryvaji
		kradeni ();
}	

if (!(panacekX + panacekWidth < moucha2X || moucha2X + moucha2Width < panacekX || panacekY + panacekHeight < moucha2Y || moucha2Y + moucha2Height < panacekY)) { //panacek a moucha2 se prekryvaji
	kradeni ();
}	


}

body.addEventListener("keyup", panacekStop)
function panacekStop (event) {
	switch (event.key) {
		case "w":
		panacek.src = "obrazky/panacek.png"
		break;
	case "s":
		panacek.src = "obrazky/panacek.png"
		break;
	case "d":
		panacek.src = "obrazky/panacek.png"
		break;
	case "a":
		panacek.src = "obrazky/panacek.png"
		break;
	}
}

function zraneni () {
	zvukZraneni.play()
	zivotHodnota -= 1
	if (zivotHodnota == 4){
	zivot.src = "obrazky/srdce-4.png";
	}
	if (zivotHodnota == 3){
		zivot.src = "obrazky/srdce-3.png"
	}
	if (zivotHodnota == 2){
		zivot.src = "obrazky/srdce-2.png"
	}
	if (zivotHodnota == 1){
		zivot.src = "obrazky/srdce-1.png"
	}
	if (zivotHodnota == 0){
		zivot.src = "obrazky/srdce-0.png"
	}
	if (zivotHodnota < 0){
		alert ("Chcípnuls!");
		zivotHodnota = 5;
		skoreHodnota = 0
		skore.textContent = "0"
		zivot.src = "obrazky/srdce-5.png"
		resetGame();
		return
	}
} 

function kradeni () {
	zvukZraneni.play()
	skoreHodnota -= 1
	skore.textContent = skoreHodnota;
	if (skoreHodnota == 0) {
		skore.textContent = "Byls okraden!";//ale ještě neumíráš
		return
	}
	if (skoreHodnota < 0){ //bez peněz se nedá žít
	alert ("Prohráls!");
	skore.textContent = "0";
	skoreHodnota = 0
	resetGame();
	return
}
}

