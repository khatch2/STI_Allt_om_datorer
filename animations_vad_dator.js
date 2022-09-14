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
	logo.style.width = '315px';
	logo.style.height = '270px';
	logo.style.background = 'red';
	logo.style.position = 'absolute';
	
	var time_interval = setInterval(move, 10);
	function move(e){
		if (pos >= 870) {
			clearInterval(time_interval);
			logo.style.width = '215px';
			logo.style.height = '170px';

			canvas.style.scale = '3';			
		} else {
			pos ++;
			logo.style.right = pos+'px';
			moveCanvas(pos/2);
		}
	}
};
moveLogo();

// OK draw in the canvas
function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		ctx.beginPath();
    	ctx.arc(75/3, 75/3, 50/3, 0, Math.PI * 2, true); // Outer circle
    	ctx.moveTo(110/3, 75/3);
    	ctx.arc(75/3, 75/3, 35/3, 0, Math.PI, false);  // Mouth (clockwise)
    	ctx.moveTo(65/3, 65/3);
    	ctx.arc(60/3, 65/3, 5/3, 0, Math.PI * 2, true);  // Left eye
    	ctx.moveTo(95/3, 65/3);
    	ctx.arc(90/3, 65/3, 5/3, 0, Math.PI * 2, true);  // Right eye
    	ctx.stroke();
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


            