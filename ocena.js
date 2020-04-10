var ukupno=0;


function oceni(poen, naziv){

console.log(true);
	if('localStorage' in window && window.localStorage!==null){
		var o = document.getElementById('ocena');
		
		if(localStorage.getItem(naziv)===null){ //Nema ga, pravimo ga!
		var ocena={
			"ime":naziv,
			"ukupno":poen,
			"broj":1
		};
		
		$("#ocena").empty();
		$("#ocena").append(Number((ocena.ukupno/ocena.broj).toFixed(2)));
		
		
		localStorage.setItem(naziv, JSON.stringify(ocena));
		console.log(localStorage);
	}
	else{
		var old = localStorage.getItem(naziv);
		old=JSON.parse(old);
		
		var new_ukupno = old.ukupno;
		new_ukupno+=poen;
		
		var new_broj = old.broj;
		new_broj++;
		
		old.ukupno=new_ukupno;
		old.broj=new_broj;
		
		$("#ocena").empty();
		$("#ocena").append(Number((new_ukupno/new_broj).toFixed(2)));
		
		localStorage.setItem(naziv, JSON.stringify(old));
		console.log(localStorage);
		
		
		
			
		
		
		
	}
		
	
}
}