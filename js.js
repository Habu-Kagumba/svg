var me = Snap.select("#me"),
	usoz = me.select("#uso"),
	eyebrowLeft = me.select("#eyebrow-left"),
	eyebrow = me.select("#eyebrow"),
	reflection = me.select("#reflection"),
	pupil = me.select("#pupil"),
	iris = me.select("#iris"),
	eyeball = me.select("#eyeball"),
	eyeback = me.select("#eyeback"),
	eyebackblack = me.select("#eyebakblack"),
	reflectionLeft = me.select("#reflection-left"),
	pupilLeft = me.select("#pupil-left"),
	irisLeft = me.select("#iris-left"),
	eyeballLeft = me.select("#eyeball-left"),
	eyebackLeft = me.select("#eyeback-left"),
	eyebackblackLeft = me.select("#eyebackblack-left"),
	eyeshadow = me.select("#eyeshadow"),
	eyeshadow1 = me.select("#eyeshadow1"),
	eyeshadow2 = me.select("#eyeshadow2"),
	eyeshadowLeft = me.select("#eye-shadow-left"),
	eyeline = me.select("#eyeline"),
	eyelineLeft = me.select("#eyeline-left"),
	noseline = me.select("#noseline"),
	noses = me.select("#noses");
	liplower = me.select("#liplower"),
	liptop = me.select("#liptop"),
	moustache = me.select("#moustache"),
	moustacheLeft = me.select("#moustacheleft"),
	goatee = me.select("#goatee"),
	lipshadow = me.select("#lipshadow"),
	beards = me.select("#beards"),
	innerear = me.select("#innerear"),
	ear = me.select("#ear"),
	neckshadow = me.select("#neckshadow"),
	faces = me.select("#faces"),
	//rotate
	neckshadowside = me.select("#neckshadowside"),
	neckback = me.select("#neckback"),
	kambaLeft1 = me.select("#kamba-left1"),
	kambaLeft2 = me.select("#kamba-left2"),
	kambaRight1 = me.select("#kamba-right1"),
	kambaRight2 = me.select("#kamba-right2"),
	holeinside = me.select("#holeinside"),
	holeoutside = me.select("#holeoutside"),
	jacketinside = me.select("#jacketinside"),
	jacketinsidemidi = me.select("#jacketinsidemidi"),
	jacketoutside = me.select("#jacketoutside"),
	zip = me.select("#zip"),
	jacketmarron = me.select("#jacketmarron"),
	jacketmain = me.select("#jacketmain"),
	hoodie = me.select("#hoodie");

var uso = [eyeline,eyelineLeft, noseline,noses,liplower,liptop,moustache,moustacheLeft,goatee,beards,ear,faces];
var eyes = [eyebrow,eyebrowLeft,reflection,reflectionLeft,eyeback,eyebackLeft,eyeball,eyeballLeft,pupil,pupilLeft,iris,irisLeft];
var neck = [neckback];
var noshow = [eyeshadow,eyeshadow1,eyeshadow2,eyeshadowLeft,eyebackblack,eyebackblackLeft,innerear,lipshadow,neckshadow,neckshadowside];
var jacket = [kambaLeft1,kambaLeft2,kambaRight1,kambaRight2,holeinside,holeinside,jacketinside,jacketinsidemidi,jacketoutside,zip,jacketmarron,jacketmain,hoodie];

var blacknwhite = document.getElementById("putBnC");
var color = document.getElementById("putColor");


function bnc(element, array){
	element.animate({
		fill:"#FFFFFF",
		stroke: "#1A1A1A",
		strokewidth: "0.5"
	}, 400, mina.easeout);
}

function noShow(element, array){
	element.animate({
		opacity: "0"
	}, 400, mina.easeout);
}

function pupils(element, array){
	element.animate({
		fill: "#1A1A1A",
		stroke: "#1A1A1A",
		strokewidth: "0.5"
	}, 400, mina.easeout);
}

function irises(element, array){
	element.animate({
		fill: "#666666",
		stroke: "#666666"
	}, 400, mina.easeout);
}
function bncColor(){
	uso.forEach(bnc);
	noshow.forEach(noShow);
	eyes.slice(0,8).forEach(bnc);
	eyes.slice(8,10).forEach(pupils);
	eyes.slice(-2).forEach(irises);
	neck.forEach(bnc);
	jacket.forEach(bnc);
}

var colorthis = [faces,ear,neckback];
var black = [eyebrow,eyebrowLeft,pupil,pupilLeft,moustache,moustacheLeft,goatee,beards,holeoutside];
var shadows = [eyeline,eyelineLeft];
var brown = [liptop,iris,irisLeft,noses];
var greydark = [eyeball,eyeballLeft,holeinside,jacketinside];
var greylight = [jacketinsidemidi,jacketmain];
var greymidi = [hoodie,zip];

function colorfaces(element, array) {
	element.animate({
		fill: "#8c6239",
		stroke: "#8c6239"
	}, 400, mina.easein);
}

function showhidden(element, array){
	element.animate({
		opacity: "1"
	}, 400, mina.easein);
}

function greyed(element,array){
	element.animate({
		fill:"#666666",
		stroke:"#666666"
	},400,mina.easein);
}

function greyel(element,array){
	element.animate({
		fill:"#B3B3B3",
		stroke:"#B3B3B3"
	},400,mina.easein);
}

function greymid(element,array){
	element.animate({
		fill:"#999999",
		stroke: "#999999"
	},400,mina.easein);
}

function otherscolor() {
	neckshadow.animate({
		opacity: "0.6"
	},400,mina.easein);

	eyeback.animate({
		fill:"#bdccd4",
		stroke:"#bdccd4"
	},400,mina.easein);
	eyebackLeft.animate({
		fill:"#bdccd4",
		stroke:"#bdccd4"
	},400,mina.easein);

	reflection.animate({
		fill:"#FFFFFF",
		stroke:"#FFFFFF"
	},400,mina.easein);
	reflectionLeft.animate({
		fill:"#FFFFFF",
		stroke:"#FFFFFF"
	},400,mina.easein);

	liplower.animate({
		fill:"#a67c52",
		stroke: "none",
		strokewidth: "0"
	},400,mina.easein);

	noseline.animate({
		fill:"#603813",
		stroke:"none"
	},400,mina.easein);

	jacketoutside.animate({
		fill:"#333333",
		stroke: "#333333"
	},400,mina.easein);

	jacketmarron.animate({
		fill:"#722626",
		stroke:"#722626"
	},400,mina.easein);

	kambaRight2.animate({
		fill:"#1b1464",
		stroke:"#1b1464"
	},400,mina.easein);
	kambaLeft2.animate({
		fill:"#1b1464",
		stroke:"#1b1464"
	},400,mina.easein);

	kambaLeft1.animate({
		fill:"#2e3192",
		stroke:"#2e3192"
	},400,mina.easein);
	kambaRight1.animate({
		fill:"#2e3192",
		stroke:"#2e3192"
	},400,mina.easein);
}

function blacked(element, array){
	element.animate({
		fill:"#1A1A1A",
		stroke: "#1A1A1A"
	}, 400, mina.easein);
}

function shadowlight(element, array){
	element.animate({
		fill:"#754b28",
		stroke: "#754b28"
	}, 400, mina.easein);
}

function browned(element, array){
	element.animate({
		fill:"#42210b",
		stroke:"#42210b"
	},400,mina.easein);
}


/*------------------------------------------------------------------------------*/
var animationmusic = [eyeline,eyelineLeft, noseline,noses,liplower,liptop,moustache,moustacheLeft,goatee,beards,ear,faces,
eyebrow,eyebrowLeft,reflection,reflectionLeft,eyeback,eyebackLeft,eyeball,eyeballLeft,pupil,pupilLeft,iris,irisLeft,neckback,
eyeshadow,eyeshadow1,eyeshadow2,eyeshadowLeft,eyebackblack,eyebackblackLeft,innerear,lipshadow,neckshadow];

var musica = document.getElementById("music");

var musicsvg = Snap.select("#musicsvg"),
	musicicon = musicsvg.select("#musicicon");

function music(){
	usoz.toggleClass("ngomaz");
	musicicon.toggleClass("play");
	player = document.getElementById('muziki');
	if (player.paused) {
		player.play();
	} else {
		player.pause();
	}
	raiseEyebrow();
}
/*--------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------*/
function raiseEyebrow(){
	eyebrowLeft.animate({
		path : "M229.426,78.755l9.834,4.049l24.164-26.331l7.681,0.766l-8.733-5.321l0.919-2.812l-33.083,28.311l-2.246,0.366L229.426,78.755z"
	},400,mina.elastic);
	eyeshadowLeft.animate({
		path : "M238,81.403l1.476,17.978l15.106-9.63l1.986-28.501L238,81.403z"
	}, 400, mina.elastic);
}

function lowereyebrow(){
	eyebrowLeft.animate({
		path : "M231.695,78.963l7.856,7.168l31.713-16.478l6.955,3.346l-6.387-7.987l1.825-2.328l-40.771,15.288l-2.236-0.424L231.695,78.963z"
	},600, mina.backin);
	eyeshadowLeft.animate({
		path : "M238.814,86.131l0.662,13.25l15.106-9.63l4.002-14.011L238.814,86.131z"
	},600,mina.backin);
}

var blinky = [reflection,reflectionLeft,pupil,pupilLeft,iris,irisLeft,eyeball,eyeballLeft];
var eyebackBrown = [eyeback,eyebackLeft];
var eyebackblink = [eyebackblack,eyebackblackLeft];

function eyeblink(element,array){
	element.animate({
		opacity:"0"
	},400, mina.easeout);
}
function eyeblinkopen(element,array){
	element.animate({
		opacity:"1"
	},400, mina.easeout);
}
function eyeblinktwo(element,array){
	element.animate({
		fill:"#8c6239",
		stroke:"#8c6239"
	}, 400, mina.easeout);
}
function eyeblinkthree(element, array){
	element.animate({
		fill:"#754b28",
		stroke:"#754b28"
	},400,mina.easeout);
}


/*---------------------------------------------------------------------------------*/

var d = Snap.select("#decolorThis"),
	decolor = d.select("#decolor");

var b = Snap.select("#colorThis"),
	colour = b.select("#colour");

decolor.animate({
	fill:"#FFFFFF",
	stroke:"#1A1A1A"
}, 50, mina.bounce);

colour.animate({
	fill:"#8c6239",
	stroke:"#8c6239"
},50,mina.bounce);

function bncColor(){
	uso.forEach(bnc);
	noshow.forEach(noShow);
	eyes.slice(0,8).forEach(bnc);
	eyes.slice(8,10).forEach(pupils);
	eyes.slice(-2).forEach(irises);
	neck.forEach(bnc);
	jacket.forEach(bnc);
	musicicon.animate({
		fill:"#FFFFFF",
		stroke:"#1A1A1A"
	}, 400, mina.bounce);
	coloring = "False";
}

function colored() {
	colorthis.forEach(colorfaces);
	noshow.forEach(showhidden);
	otherscolor();
	black.forEach(blacked);
	shadows.forEach(shadowlight);
	brown.forEach(browned);
	greylight.forEach(greyel);
	greydark.forEach(greyed);
	greymidi.forEach(greymid);
	musicicon.animate({
		fill:"#722626",
		stroke:"#722626"
	},400, mina.bounce);
	coloring = "True";
}

blacknwhite.addEventListener('click', bncColor);
color.addEventListener('click', colored);
musica.addEventListener('click', music);

