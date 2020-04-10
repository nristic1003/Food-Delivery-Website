var Restorani = [
		{
          id:1,
          ime: "Mister Wang", 
          link: "Restorani/misterwang.jpg",
          vreme: 50, 
          mincena: 3,
          href:"misterwang.html",
          vrsta: "Azijska hrana",
          lokacija: "Gospodara Vučića 201"
        },
		{
          id:2,
          ime: "W Sushi", 
          link: "Restorani/wsushi.png",
          vreme: 50, 
          mincena: 4,
          href:"wsushi.html",
          vrsta: "Riba",
          lokacija: "Vuka Karadžića 12"
        },
		{
          id:3,
          ime: "Moon Sushi", 
          link: "Restorani/moon1.png",
          vreme: 50, 
          mincena: 5,
          href:"moonsushi.html",
          vrsta: "Riba",
          lokacija: "Makedonska 31"
        }
		
    ];

	
	function SortByName(a,b){
		var aime = a.ime.toLowerCase();
		var bime = b.ime.toLowerCase();
		return ((aime < bime)? -1 : ((aime > bime) ? 1:0));
		
	}
	
	function SortByPoints(a,b){
		var aime = a.mincena;
		var bime = b.mincena;
		return ((aime < bime)? -1 : ((aime > bime) ? 1:0));
		
	}
	
	function SortByLocation(a,b){
		var aime = a.lokacija.toLowerCase();
		var bime = b.lokacija.toLowerCase();
		return ((aime < bime)? -1 : ((aime > bime) ? 1:0));
		
	}
	
	function SortByName1(a,b){
		var aime = a.ime.toLowerCase();
		var bime = b.ime.toLowerCase();
		return ((aime > bime)? -1 : ((aime < bime) ? 1:0));
		
	}
	
	function SortByPoints1(a,b){
		var aime = a.mincena;
		var bime = b.mincena;
		return ((aime > bime)? -1 : ((aime < bime) ? 1:0));
		
	}
	
	function SortByLocation1(a,b){
		var aime = a.lokacija.toLowerCase();
		var bime = b.lokacija.toLowerCase();
		return ((aime > bime)? -1 : ((aime < bime) ? 1:0));
		
	}
	
	

$(document).ready(function () {
	
	
		var id=0;
	var n=0;
	var suma=0;
	var isempty = 0;
	var arr;
	
	
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
				var k=localStorage.key(i);
				var ocena=localStorage.getItem(k);
				ocena=JSON.parse(ocena);
				if(ocena.hasOwnProperty('ukupno')==true){ //<---
					
					for ( var j = 0, len1 = 3; j < len1; j++ ){
						if(Restorani[j].ime==ocena.ime){
							Restorani[j].mincena = Number((ocena.ukupno/ocena.broj).toFixed(2));
							
							var o = document.getElementById('ocena');
							if(o!==null){
								if(o.innerHTML===Restorani[j].ime){
									$("#ocena").empty();
									$("#ocena").append(Restorani[j].mincena);
									
								}
								else if(o.innerHTML==="Black &amp; White"){
									$("#ocena").empty();
									$("#ocena").append(Restorani[9].mincena);
								}
							}
							break;
						}
					}
					
				}//<--
				
	}
	
	

  $("#click").click(function(){
    $("#fil").slideToggle();
  });
  
  
  
  $.each(Restorani, function(){
      $("#restorani").append("<a href="+this.href+" <div class='res" + this.id+ "'>"+ " </div> </a>");
      $(".res"+this.id).append("<div class='logo'></div>");
      $(".res"+this.id).css({"width":"100%", "float": "left", "margin-bottom" : "20px" ,  "box-shadow": "2px 2px 5px black "});
      $(".res"+this.id).append("<div class='tekst'></div>");
      $(".res"+this.id).find(".logo").append("<img class='img-fluid' style='width:165px;height:120px;' src=" + this.link + " "+ "</img>");
      $(".res"+this.id).find(".tekst").append("<h4>"+this.ime +  "</h4>"+"<span> Vrsta hrane: " + this.vrsta + " <br></span>"  
        + "<span> Lokacija: "+ this.lokacija+" <br></span>" + "<span> Ocena: " + this.mincena + "</span>"
     );
     $(".res"+this.id).find(".tekst").css("padding","5px");
  });
  
  
  


  var $x=$('input[name="hrana"]');
  

  $x.change(function(){
    var checked = $(this).prop('checked');
    var val= $(this).val();
    console.dir($x[0].checked);
	
  
    //console.log(checked);
    if(checked==true){
		
		
		
		if(val=="imerastuce"){
			Restorani.sort(SortByName);
		}
	
		
		
		if(val=="lokacijarastuce"){
			Restorani.sort(SortByLocation);
		}
		
		
		
		if(val=="ocenarastuce"){
			Restorani.sort(SortByPoints);
		}
		
		
		
		if(val=="imeopadajuce"){
			Restorani.sort(SortByName1);
		}
		
		
		
		if(val=="lokacijaopadajuce"){
			Restorani.sort(SortByLocation1);
		}
		
		
		
		if(val=="ocenaopadajuce"){
			Restorani.sort(SortByPoints1);
		}
		
		
		$.each(Restorani, function(){
				$("#restorani").empty();
		});	
		
		$.each(Restorani, function(){
			$("#restorani").append("<a href="+this.href+" <div class='res" + this.id+ "'>"+ " </div> </a>");
			$(".res"+this.id).append("<div class='logo'></div>");
			$(".res"+this.id).css({"width":"100%", "float": "left", "margin-bottom" : "20px" , "border":"1px solid black"});
			$(".res"+this.id).append("<div class='tekst'></div>");
			$(".res"+this.id).find(".logo").append("<img class='img-fluid' style='width:165px;height:120px;' src=" + this.link + " "+ "</img>");
			$(".res"+this.id).find(".tekst").append("<h4>"+this.ime +  "</h4>"+"<span> Vreme dostave: " + this.vreme + " min <br></span>"  
			+ "<span> Lokacija: "+ this.lokacija+" <br></span>" + "<span> Ocena: " + this.mincena + "</span>"
		);
		$(".res"+this.id).find(".tekst").css("padding","5px");
		});
		
		for(var i=0;i<Restorani.length;i++){
				$(".res"+Restorani[i].id).css("display", "block");
		}
		
      }
    else{
		
		for(var i=0;i<Restorani.length;i++){
			$(".res"+Restorani[i].id).css("display", "block");
		}
		
	}
	


    
    
              
    
  
  });
   
    

  });