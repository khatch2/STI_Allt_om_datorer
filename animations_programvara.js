/*	Khatchik Shahinyan	*/

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
		if (pos >= 910) {
			clearInterval(time_interval);
		} else {
			pos ++;
			logo.style.right = pos+'px';
		}
	}
	moveProgramvara_text();
};
moveLogo();

// OK move the programvara Text
function moveProgramvara_text() {
	var pos = 0;
	var allt = document.getElementById('programvara_id');
	allt.style.position = 'relative';
	allt.style.left = '220px';
	
	var time_interval = setInterval(move_denna, 10);
	function move_denna(e){
		if (pos >= 63) {
			clearInterval(time_interval);
		} else {
			pos ++;
			allt.style.left = pos+'px';
		}		
	}
};

// OK play the music
window.onload = playThis_1();
function playThis_1(e) {
	var sample = document.getElementById("my_audio");
	sample.play();
}
