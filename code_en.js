var izabrano = 0;
var Restorani = [
       {
          id:1,
          ime: "McDonalds", 
          link: "Restorani/mcd.png",
          vreme: 40, 
          mincena: 5,
          href:"mcdonalds_en.html",
          vrsta: "Grill",
          lokacija: "Zaplanjska 32",
          flag:false
          
        },
         {
          id:2,
           ime: "KFC", 
          link: "Restorani/kfc.png",
          vreme: 50, 
          mincena: 4,
          href:"kfc_en.html",
          vrsta: "Grill",
          lokacija: "Zaplanjska 32",
          flag:false
          
        },
		{
          id:3,
          ime: "Pizza Bar", 
          link: "Restorani/pizzabar.png",
          vreme: 50, 
          mincena: 5,
          href:"pizzabar_en.html",
          vrsta: "Italian food",
          lokacija: "Mutapova 5",
          flag:false
        },
		{
          id:4,
          ime: "Caribic Pizza", 
          link: "Restorani/caribic.jpg",
          vreme: 50, 
          mincena: 4,
          href:"caribic_en.html",
          vrsta: "Italian food",
          lokacija: "Goce Delčeva 31",
          flag:false
        },
		{
          id:5,
          ime: "Pizzeria Jimmy", 
          link: "Restorani/jimmy.png",
          vreme: 50, 
          mincena: 3,
          href:"jimmy_en.html",
          vrsta: "Pancakes",
          lokacija: "Zaplanjska 57",
          flag:false
        },
		{
          id:6,
          ime: "Al Pachinka", 
          link: "Restorani/alpachinka.jpg",
          vreme: 50, 
          mincena: 4.5,
          href:"alpachinka_en.html",
          vrsta: "Pancakes",
          lokacija: "Prizrenska 15",
          flag:false
        },
		{
          id:7,
          ime: "Mister Wang", 
          link: "Restorani/misterwang.jpg",
          vreme: 50, 
          mincena: 3,
          href:"misterwang_en.html",
          vrsta: "Asia food",
          lokacija: "Gospodara Vučića 201",
          flag:false
        },
		{
          id:8,
          ime: "Sač", 
          link: "Restorani/sac.png",
          vreme: 50, 
          mincena: 4.8,
          href:"sac_en.html",
          vrsta: "Cooked food",
          lokacija: "Vojvode stepe 231",
		  flag:false
			
        },
		{
          id:9,
          ime: "Taze Toplo", 
          link: "Restorani/taze.jpg",
          vreme: 50, 
          mincena: 4.6,
          href:"tazetoplo_en.html",
          vrsta: "Cooked food",
          lokacija: "Vase Čarapića 3",
          flag:false
        },
		{
          id:10,
          ime: "Black & White", 
          link: "Restorani/black.png",
          vreme: 50, 
          mincena: 3.5,
          href:"blackandwhite_en.html",
          vrsta: "Asia food",
          lokacija: "Zdravka celara 12",
          flag:false
        },
		{
          id:11,
          ime: "W Sushi", 
          link: "Restorani/wsushi.png",
          vreme: 50, 
          mincena: 4,
          href:"wsushi_en.html",
          vrsta: "Fish",
          lokacija: "Vuka Karadžića 12",
          flag:false
        },
		{
          id:12,
          ime: "Moon Sushi", 
          link: "Restorani/moon1.png",
          vreme: 50, 
          mincena: 5,
          href:"moonsushi_en.html",
          vrsta: "Fish",
          lokacija: "Makedonska 31",
          flag:false
        }
    ];

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
  $.each(Restorani, function(){
    $("#restorani").append("<a href="+this.href+" <div class='res" + this.id+ "'>"+ " </div> </a>");
    $(".res"+this.id).append("<div class='logo'></div>");
    $(".res"+this.id).css({"width":"100%", "float": "left", "margin-bottom" : "20px" ,  "box-shadow": "2px 2px 5px black "});
    $(".res"+this.id).append("<div class='tekst'></div>");
    $(".res"+this.id).find(".logo").append("<img class='img-fluid' style='width:165px;height:120px;' src=" + this.link + " "+ "</img>");
      $(".res"+this.id).find(".tekst").append("<h4>"+this.ime +  "</h4>"+"<span> Food type: " + this.vrsta + " <br></span>"  
        + "<span> Location: "+ this.lokacija+" <br></span>" + "<span> Rating: " + this.mincena + "</span>"
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
	izabrano++;
          for(var i=0;i<Restorani.length;i++){
            if(Restorani[i].vrsta==val){
               $(".res"+Restorani[i].id).css("display", "block");
                 Restorani[i].flag=true;
            
		  }
		  else if(Restorani[i].flag==false){
			  $(".res"+Restorani[i].id).css("display", "none");
		  }
		
		}

      }// end checked
    else{
		izabrano--;
		if(izabrano!=0){
			for(var i=0;i<Restorani.length;i++){
				if(Restorani[i].vrsta==val){
					$(".res"+Restorani[i].id).css("display", "none");
					Restorani[i].flag=false;
				}
			}
		
		}else{
			for(var i=0;i<Restorani.length;i++){				
					$(".res"+Restorani[i].id).css("display", "block");
					Restorani[i].flag=false;
			}
		}
	}
	


    
    
              
    
  
  });
   
    

  });