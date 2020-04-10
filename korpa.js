var ukupno=0;


function korpa( id, cena,  proizvod, restoran){

	if('localStorage' in window && window.localStorage!==null){
		var x=document.getElementById(id).value;

		if(x<=0) {alert("Ne mozete uneti negativnu kolicinu proizoda!");}
else{
		var name = proizvod;
		var hrana={
			"id": id,
			"cena": cena,
			"naziv":proizvod,
			"kolicina": x,
			"restoran": restoran
		};
		//console.log(hrana.kolicina)
		localStorage.setItem(proizvod, JSON.stringify(hrana));
	//	var hrana = localStorage.getItem('kupljeno'); 
		//hrana = JSON.parse(hrana) izvlacenje objekta
	
		console.log(localStorage)
	

	}
}
}

function uvecaj(x){

	y=document.getElementById(x).value;
	y++;
	document.getElementById(x).value=y;
	
	}

	function umanji(x){
		
		y=document.getElementById(x).value;
		y--;
		if(y==0) y=1;
		document.getElementById(x).value=y;
	
	}