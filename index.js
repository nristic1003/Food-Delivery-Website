var Restorani = [
        {
          id:1,
          ime: "McDonalds", 
          link: "Restorani/mcd.png",
          vreme: 40, 
          mincena: 5,
          href:"mcdonalds.html",
          vrsta: "Rostilj",
          lokacija: "Zaplanjska 32",
          
        },
         {
          id:2,
           ime: "KFC", 
          link: "Restorani/kfc.png",
          vreme: 50, 
          mincena: 4,
          href:"kfc.html",
          vrsta: "Rostilj",
          lokacija: "Zaplanjska 32"
          
        },
		{
          id:3,
          ime: "Pizza Bar", 
          link: "Restorani/pizzabar.png",
          vreme: 50, 
          mincena: 5,
          href:"pizzabar.html",
          vrsta: "Italijanska hrana",
          lokacija: "Mutapova 5"
        },
		{
          id:4,
          ime: "Caribic Pizza", 
          link: "Restorani/caribic.jpg",
          vreme: 50, 
          mincena: 4,
          href:"caribic.html",
          vrsta: "Italijanska hrana",
          lokacija: "Goce Delčeva 31"
        },
		{
          id:5,
          ime: "Pizzeria Jimmy", 
          link: "Restorani/jimmy.png",
          vreme: 50, 
          mincena: 3,
          href:"jimmy.html",
          vrsta: "Palacinke",
          lokacija: "Zaplanjska 57"
        },
		{
          id:6,
          ime: "Al Pachinka", 
          link: "Restorani/alpachinka.jpg",
          vreme: 50, 
          mincena: 4.5,
          href:"alpachinka.html",
          vrsta: "Palacinke",
          lokacija: "Prizrenska 15"
        },
		{
          id:7,
          ime: "Mister Wang", 
          link: "Restorani/misterwang.jpg",
          vreme: 50, 
          mincena: 3,
          href:"misterwang.html",
          vrsta: "Azijska hrana",
          lokacija: "Gospodara Vučića 201"
        },
		{
          id:8,
          ime: "Sač", 
          link: "Restorani/sac.png",
          vreme: 50, 
          mincena: 4.8,
          href:"sac.html",
          vrsta: "Kuvana jela",
          lokacija: "Vojvode stepe 231"
        },
		{
          id:9,
          ime: "Taze Toplo", 
          link: "Restorani/taze.jpg",
          vreme: 50, 
          mincena: 4.6,
          href:"tazetoplo.html",
          vrsta: "Kuvana jela",
          lokacija: "Vase Čarapića 3"
        },
		{
          id:10,
          ime: "Black & White", 
          link: "Restorani/black.png",
          vreme: 50, 
          mincena: 3.5,
          href:"blackandwhite.html",
          vrsta: "Azijska hrana",
          lokacija: "Zdravka celara 12"
        },
		{
          id:11,
          ime: "W Sushi", 
          link: "Restorani/wsushi.png",
          vreme: 50, 
          mincena: 4,
          href:"wsushi.html",
          vrsta: "Riba",
          lokacija: "Vuka Karadžića 12"
        },
		{
          id:12,
          ime: "Moon Sushi", 
          link: "Restorani/moon1.png",
          vreme: 50, 
          mincena: 5,
          href:"moonsushi.html",
          vrsta: "Riba",
          lokacija: "Makedonska 31"
        }
		
    ];

	
	function SortByPoints1(a,b){
		var aime = a.mincena;
		var bime = b.mincena;
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
					
					for ( var j = 0, len1 = 12; j < len1; j++ ){
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
  
  $("#restorani").empty();
  
  Restorani.sort(SortByPoints1);
  
  
  for(var i=0;i<3;i++){
      $("#restorani").append("<a href="+Restorani[i].href+" <div class='res" + Restorani[i].id+ "'>"+ " </div> </a>");
      $(".res"+Restorani[i].id).append("<div class='logo'></div>");
      $(".res"+Restorani[i].id).css({"width":"100%", "float": "left", "margin-bottom" : "20px" ,  "box-shadow": "2px 2px 5px black "});
      $(".res"+Restorani[i].id).append("<div class='tekst'></div>");
      $(".res"+Restorani[i].id).find(".logo").append("<img class='img-fluid' style='width:165px;height:120px;' src=" + Restorani[i].link + " "+ "</img>");
      $(".res"+Restorani[i].id).find(".tekst").append("<h4>"+Restorani[i].ime +  "</h4>"+"<span> Vrsta hrane: " + Restorani[i].vrsta + " <br></span>"  
        + "<span> Lokacija: "+ Restorani[i].lokacija+" <br></span>" + "<span> Ocena: " + Restorani[i].mincena + "</span>"
     );
     $(".res"+Restorani[i].id).find(".tekst").css("padding","5px");
	 $(".res"+Restorani[i].id).css("display", "block");
  
  
		
		
				
	}
		
      

	


    
    
              
    
  
  });
   
    

