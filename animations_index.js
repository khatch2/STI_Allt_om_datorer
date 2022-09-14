/*	Khatchik Shahinyan	*/

// OK play the music
window.onload = playThis_1();
function playThis_1(e) {
	var sample = document.getElementById("my_audio");
	sample.play();
}

// OK move the logo Picture
function moveLogo() {
	var pos = 0;
	var logo = document.getElementById('logo_id');
	logo.style.width = '215px';
	logo.style.height = '170px';
	logo.style.background = 'red';
	logo.style.position = 'absolute';
	var time_interval = setInterval(move, 10);
	function move(e){
		if (pos >= 840) {
			clearInterval(time_interval);
		} else {
			pos ++;
			logo.style.right = pos+'px';
		}
	}
	moveAllt_text();
};
moveLogo();

// OK move the Allt Text
function moveAllt_text() {
	var pos = 0;
	var allt = document.getElementById('allt_id');
	allt.style.position = 'relative';
	allt.style.left = '220px';
	var time_interval = setInterval(move_allt, 10);
	function move_allt(e){
		if (pos >= 220) {
			clearInterval(time_interval);
		} else {
			pos ++;
			allt.style.left = pos+'px';
			moveCanvas(2.5*pos);
		}
	}
};

// OK draw in the canvas
function draw() {
	var canvas = document.getElementById('canvas');
 	if (canvas.getContext) {
 		var ctx = canvas.getContext('2d');
 		ctx.beginPath();
   		ctx.moveTo(12.5, 25);
    	ctx.lineTo(25, 37.5);
    	ctx.lineTo(25, 12.5);
    	ctx.fill();
  	}
}
draw();

// OK move the canvas
function moveCanvas(a) {
	var posCanvas = a;
	var myCanvas = document.getElementById('canvas');
	myCanvas.style.background = 'white';
	myCanvas.style.position = 'relative';
	myCanvas.style.left = posCanvas+'px';
}

