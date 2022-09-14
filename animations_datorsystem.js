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
	logo.style.width = '150px';
	logo.style.height = '130px';
	logo.style.background = 'red';
	logo.style.outline = '3px dotted #bada55';
	logo.style.position = 'absolute';
	
	var time_interval = setInterval(move, 10);
	function move(e){
		if (pos >= 905) {
			clearInterval(time_interval);
			logo.style.top = '310px';
		} else {
			pos ++;
			logo.style.right = pos+'px';
		}
	}
};
moveLogo();
