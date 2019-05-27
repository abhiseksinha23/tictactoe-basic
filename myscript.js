var restart = document.querySelector("#b");
var squares = document.querySelectorAll('td');

function clearboard(){
	for (var i = 0; i <squares.length; i++) {
		squares[i].textContent ='';
	}
}

restart.addEventListener('click', clearboard);

function changeMarker(){
	if(this.textContent === ''){
		this.textContent ='X';
	}else if(this.textContent === 'X'){
		this.textContent = 'O';
	}else{
		this.textContent = '';
	}
}
for (var i = 0 ; i<squares.length ; i++) {
	squares[i].addEventListener('click', changeMarker)
}





