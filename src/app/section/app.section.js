/*  𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ 
    //  ★   =   début de l'information
    //  ☆   =   fin de l'information
    //  ♨   =   Code de l'information premier letre du fichier et dernier lettre du fichier suivi du numéro du commentaire.
    //  ♫   = connexion css all suivi du nom du fichier
    //  ☹☹ Double appel du fichier 
    //  ✈  = ★♨=ls0003☹☹♨=ap012  app.links et app.ph ★♨=ls0003☹☹  ♨=ap012
    //  ❥ = le fichier ne pas au même emplacement que l'appelant /!\
    𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ */   
// ajourdhuit
var lesmois=["JANVIER","FÉVRIER","MARS","AVRIL","MAI","JUIN","JUILLET","AOÛT","SEPTEMBRE","OCTOBRE","NOVEMBRE","DÉCEMBRE"]
var nousjours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"] ;
var encore = 0 ; 
var d = new Date();
var afficheannee =d.getFullYear(); 
var monmois =d.getMonth() ; 
var affichelemois = monmois;
var dxo = new Date(monmois + 1+" 1, "+d.getFullYear()+" 11:13:00");
var tt = dxo.toString() ; // transforme la date en type string
// cette ligne permet de s'avoir le premier nombre du mois
var nousommes ="" ;// initialisation de la variable
for(var i = 0 ; i<3 ; i++)
{
nousommes =  nousommes+tt[i];
//permet de recolter la valeur pour savoir quel jour nous sommes
}
//alert(nousommes);
switch (nousommes) {
  // Switch permet la verification du jouor 
  // en fonction du nom on va pouvoir  lui donner une valeur
    case "Mon":
    parle = 0; 
    break;
    case "Tue":
    parle = 1; 
    break;
    case "Wed":
    parle = 2; 
    break;
    case "Thu":
         parle = 3; 
    break;
    case "Fri":
         parle = 4; 
    break;
    case "Sat":
         parle = 5; 
    break;
    case "Sun":
         parle = 6; 
    break;
}

  function queljour(jour) 
{
jours=jour;
var node = document.createElement("p"); 
var textnode = document.createTextNode(njour);         
node.appendChild(textnode);     
node.setAttribute("id", "variable"+n); 
node.setAttribute("class", jours);   

document.getElementById(jours).appendChild(node); 
var tampo = "variable"+n ; 
var element = document.getElementById(tampo);
element.onclick = function() {

       document.getElementById("ajaxx").style.display="block" ; 
       /*
       
       



       */



       /// debut  du tes 




       var xhttp;
       if (window.XMLHttpRequest) {
         // code for modern browsers
         xhttp = new XMLHttpRequest();
       } else {
         // code for IE6, IE5
         xhttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           document.getElementById("ajaxx").innerHTML = this.responseText;
         }
       };
       xhttp.open("GET", "src/app/section/app.ajaxx.php", true);
       xhttp.send();




       /// fin du test
        
   };
   n++;
   njour ++ ; 
}

//console.log(nousjours[0]);
// cases
var drawer = nousommes;
var n = 0 ; 
var njour = 1 ; 
for(var ii = 0 ; ii<32; ii++)
{
/*
    var d = new Date();
    document.getElementById("mois").innerHTML = d.getMonth() + 1;
    document.getElementById("jours").innerHTML = d.getDate();
    document.getElementById("heures").innerHTML = d.getHours();
    document.getElementById("minutes").innerHTML = d.getMinutes();
    document.getElementById("annee").innerHTML = d.getFullYear();
*/

if(ii==0)
{
  if(ii!=parle)
  {
    for(var x =0 ; x<parle ; x++ ) 
    {
      //
      var node = document.createElement("p"); 
      var textnode = document.createTextNode("");         
      node.appendChild(textnode);     
      node.setAttribute("id", "vide");
      var textnode = document.createTextNode("0");         // Create a text node
      node.appendChild(textnode);  
      node.setAttribute("class", "vide"); 
      document.getElementById(nousjours[x]).appendChild(node); 
    //
    }
    //
  }
}
var xc = new Date();
var paer= new Date(xc.getMonth() + 1+" "+ii+", "+d.getFullYear());
//console.log(paer);
if(paer!="Invalid Date")
{
   queljour(nousjours[parle]) ;  
      //console.log(parle) ; 
      if(parle==7)
      {
        parle=0;
      }
      parle ++ ;
      if(parle==7)
      {
      // console.log(parle);
        parle=0;
        //console.log("---__---") ; 
      }     
  }
}
// nombre des jours dans la semaine du lundi au dimanche
var taillej = nousjours.length ; // donne la taille du tableaua

    
    setInterval(function()
{ 
              upmois = lesmois[affichelemois];
              var d = new Date();
              document.getElementById("annee").innerHTML = afficheannee;                  
              document.getElementById("mois").innerHTML = upmois;
              document.getElementById("jours").innerHTML = d.getDate();
              document.getElementById("heures").innerHTML = d.getHours();
              document.getElementById("minutes").innerHTML = d.getMinutes();
              // affiche les valeurs ; 
              if(document.getElementById("minutes").innerHTML= d.getMinutes()<10)
              {
                document.getElementById("minutes").innerHTML = "0"+d.getMinutes()
              }
              else 
              {
                document.getElementById("minutes").innerHTML = d.getMinutes()
              }
              if(document.getElementById("secondes").innerHTML= d.getSeconds()<10)
              {
                document.getElementById("secondes").innerHTML = "0"+d.getSeconds();
              }
              else 
              {
                document.getElementById("secondes").innerHTML = d.getSeconds();
              }              
              // faire une action toute les secondes pour l'actualisation de lheure          
  }, 1000);


