function moins() 
{
  affichelemois-- ; 
 
  if(affichelemois==-1)
  {
    affichelemois=12 ; 
    afficheannee -- ; 
    
  }
 // d.setMonth(d.getMonth()+1);
  for(var i = 0 ; i<taillej ; i++)
  {
    taillez = document.getElementsByClassName(nousjours[i]).length;
    vide = document.getElementsByClassName("vide").length;
    for(var z = 0 ; z<taillez ; z++)
    {   
        document.getElementsByClassName(nousjours[i])[0].remove() ; 
        //supprime les valeur du tableau dans l'ordre        
    }
    for(var zz = 0 ; zz<vide ; zz++)
    {   
        document.getElementsByClassName("vide")[0].remove();
        // Suprimme les vaaleur du tableau vide  
    }
  }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var d = new Date();
/*
alert(d.getMonth()+1) ; 
d.setMonth(d.getMonth()+2);
alert(d.getMonth()+1) ; 
// test 
*/

//var dxtest = new Date(d.getMonth() + 1+" 1, "+d.getFullYear()+" 11:13:00");

// fin du test 

encore = encore-1 ;
d.setMonth(d.getMonth()+encore);
var monmois =d.getMonth() ; 
affichelemois = monmois;
affichelanee = d.getFullYear() ; 

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
       alert(this.id);  
       alert(lesmois[affichelemois]) ;      
   };
   n++;
   njour ++ ; 
}

//console.log(nousjours[0]);
// cases
var drawer = nousommes;
var n = 0 ; 
var njour = 1 ; var monmax = 31 ; 
if(lesmois[affichelemois]=="FÉVRIER")
{
var monmax = 29 ; 
  
}
if(lesmois[affichelemois]=="JUIN" || lesmois[affichelemois]=="AVRIL" || lesmois[affichelemois]=="SEPTEMBRE" || lesmois[affichelemois]=="NOVEMBRE")
{
var monmax = 30 ; 
  
}


for(var ii = 0 ; ii<=monmax; ii++)
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
upmois = lesmois[affichelemois];
var d = new Date();
document.getElementById("annee").innerHTML = afficheannee;                  
document.getElementById("mois").innerHTML = upmois;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}