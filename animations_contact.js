/*	Khatchik Shahinyan	*/

// OK play the music
window.onload = playThis_1();
function playThis_1(e) {
	var sample = document.getElementById("my_audio");
	sample.play();
}

// OK move the img_write & img_databas pictures
function moveLogo() {
	var pos = 0;
	var write_img = document.getElementById('img_write');
	var databas_img = document.getElementById('img_databas');
	
	write_img.style.width = '60px';
	write_img.style.height = '70px';
	write_img.style.background = 'red';
	write_img.style.position = 'absolute';
	
	databas_img.style.width = '215px';
	databas_img.style.height = '170px';
	databas_img.style.background = 'yellow';
	databas_img.style.position = 'absolute';
	
	var time_interval = setInterval(move, 10);
	function move(e){
		if (pos >= 215) {
			clearInterval(time_interval);
			canvas.style.scale = '3';
		} else {
			pos ++;
			write_img.style.right = pos+'px';
			databas_img.style.right = 5*pos+'px';

			moveCanvas(3.1*pos);			
		}
	};
};
moveLogo();

// OK draw in the canvas
function draw() {
	var canvas = document.getElementById('canvas');
 	if (canvas.getContext) {
 		var ctx = canvas.getContext('2d');

 		// Quadratric curves example
 		ctx.beginPath();
    	ctx.moveTo(75/3, 25/3);
    	ctx.quadraticCurveTo(25/3, 25/3, 25/3, 62.5/3);
    	ctx.quadraticCurveTo(25/3, 100/3, 50/3, 100/3);
    	ctx.quadraticCurveTo(50/3, 120/3, 30/3, 125/3);
    	ctx.quadraticCurveTo(60/3, 120/3, 65/3, 100/3);
    	ctx.quadraticCurveTo(125/3, 100/3, 125/3, 62.5/3);
    	ctx.quadraticCurveTo(125/3, 25/3, 75/3, 25/3);
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

function validateForm() {
	var ditt_namn_x = document.forms["myForm"]["ditt_namn"].value;
	var ditt_email_x = document.forms["myForm"]["ditt_email"].value;
	var ditt_mobil_telefonnummer_x = document.forms["myForm"]["ditt_mobil_telefonnummer"].value;
	var ditt_ärende_x = document.forms["myForm"]["ditt_ärende"].value;
	var ditt_ärende_text_x = document.forms["myForm"]["ditt_ärende_text"].value;

	
	if (ditt_namn_x.toUpperCase() == "KHATCHIK" ||
	 ditt_namn_x.toUpperCase() == "khatchik shahinyan") /* OBS: här fungerar också "Khatchik"*/
	{		
		alert(" Khatchik är min programmare. ");
	} else {
		// console.log(ditt_namn_x);
		alert(" Ditt namn var: " + ditt_namn_x );
	}
	if (ditt_email_x) {
		alert(" Ditt e-mail var: " + ditt_email_x );
	} else {
		alert(" Nogåt gick fel !! " );		
	}
	if (ditt_mobil_telefonnummer_x) {
		alert(" Ditt mobil-nummer var: " + ditt_mobil_telefonnummer_x );
	} else {
		alert(" Nogåt gick fel !! " );		
	}
	if (ditt_ärende_x) {
		alert(" Ditt ärendes rubrik var: " + ditt_ärende_x );
	} else {
		alert(" Nogåt gick fel !! " );		
	}
	if (ditt_ärende_text_x) {
		alert(" Ditt ärendes text var: " + ditt_ärende_text_x );
	} else {
		alert(" Nogåt gick fel !! " );		
	}



	// alert(ditt_namn_x);
;}
// validateForm();

