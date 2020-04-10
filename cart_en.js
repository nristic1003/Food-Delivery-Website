$(document).ready(function(){
	var id=0;
	var n=0;
	var suma=0;
	var isempty = 0;
	$("#korpa").on('click', function(){
		suma=0;
		var arr = [];
			/*if(localStorage.length==0&&suma==0){
				console.log(localStorage.length);
				$(".modal-body").append("<div id='prazno'><p> Korpa je prazna! Molimo Vas izaberite bar jedan proizvod!</p></div>");
			}*/
			
			/*else{*/

				$('#prazno').remove();
				for ( var i = 0, len = localStorage.length; i < len; ++i ) {
				var k=localStorage.key(i);
				var proizvod=localStorage.getItem(k);
				proizvod=JSON.parse(proizvod);
				
				if(proizvod.hasOwnProperty('kolicina')==true){ //<---
				suma=suma+proizvod.cena*proizvod.kolicina;
				arr[i]=k;
				isempty++;
				
			
				$('.modal-body').append("<div class='item"+ i + "'> </div>");
					id=i;
				$('.item'+i).append("<table class='table' style='width: 100%'> <tr> <td align='center'>"+ proizvod.naziv + "</td> <td align='center'>" + proizvod.kolicina+ "</td> <td align='center'>"+proizvod.cena*proizvod.kolicina+
					"</td><td align='center'><button  name='btn' class='btn btn-danger' value='"+i+"'>Delete</button></td></tr></table>" );
				}//<--
				
			}
			if(isempty==0){
				$(".modal-body").append("<div id='prazno'><p>Cart is empty! Please choose at least one product!</p></div>");
				
			}
			isempty=0;
/*}*/
			$('.ukupno').append('<h4 align="center">Total: ' + suma + ',00 din</h4>');

			$('.btn-danger').on('click', function(){

					var key = arr[$(this).val()];
					var item =localStorage.getItem(key);
					item=JSON.parse(item);
					if(item.hasOwnProperty('kolicina')){//<----
					
					suma=suma-item.cena*item.kolicina;
					$('.ukupno').find('h4').text('Ukupno za placanje: ' + suma);
					localStorage.removeItem(arr[$(this).val()]);
					console.log(localStorage);
					
					$(this).parent().parent().parent().parent().parent().remove();
					}//<----
					if(suma==0){
						$(".modal-body").append("<div id='prazno'><p>Cart is empty! Please choose at least one product!</p></div>");
					}
			


	});

				


	});

	$("#nastavi").on('click', function(){

			var n=id;

			for(var j=0;j<=n;j++){
				$('.item'+j).remove();
				id--;
			}
			$('.modal-body').find('#prazno').remove();
			$('.ukupno').find('h4').remove();
			suma=0;


	});

$(document).click(function(e) {
    if ($(e.target).closest('#myModal').length) {
    	var n=id;

			for(var j=0;j<=n;j++){
				$('.item'+j).remove();
				id--;
			}
			$('.modal-body').find('#prazno').remove();
			$('.ukupno').find('h4').remove();
    }

});


    $("#naruci").on('click',function(){
    	
    	if(suma==0){alert('Please choose at least one product!'); }else{
    	$('#myModal').modal('hide');
    	$('#forma').modal('show');
		$('#konacno').empty();//<----- Izmena
    	$('#konacno').append('Iznos: ' + suma + ',00 din');
}

    });

    $('.btn-info').on('click',function(){

    	if($('#ime').val()!=''){
    		if($('#prezime').val()!=''){		
    				if($('#email').val()!=''){
    					if($('#adresa').val()!=''){
    						if($('#telefon').val()!=''){
    							alert('Thank you for your purchase!');
    							localStorage.clear();
    							$('#forma').modal('hide');


    							}else{
    							alert('Please enter your phone number');
    					}
    				}else{
    							alert('Please enter your address');
    					}
    		}else{
    							alert('Please enter your email');
    					}
    	}else{
    							alert('Please enter your surname');
    					}
    }else{
    							alert('Please enter your name');
    					}

    	
			
	

	});

	$('#pdf').on('click', function(){

					var doc = new jsPDF();
					var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();

			today = mm + '/' + dd + '/' + yyyy;
			var string;
			var cena=suma.toString();
			
			var  y = 20;
			doc.text('Datum narudzbine:' , 10 , 10);
			doc.text(today , 10 , 20);
			doc.text('Restorani :' , 90 , 10);
			doc.text('Cena: ' , 150 , 10);
			doc.text(cena , 150 , 20);

			



for ( var i = 0, len = localStorage.length; i < len; ++i ) {
				var k=localStorage.key(i);
				var proizvod=localStorage.getItem(k);
				proizvod=JSON.parse(proizvod);
				if(proizvod.hasOwnProperty('kolicina')){	//<------
				var string = proizvod.restoran;
				doc.text(string ,90 ,y );
				y+=10;
				}//<----
			}

			

	doc.save('orders.pdf')
			
	});

	



});