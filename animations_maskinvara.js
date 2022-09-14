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
		if (pos >= 855) {
			clearInterval(time_interval);
		} else {
			pos ++;
			logo.style.right = pos+'px';
		}
	}
};
moveLogo();

