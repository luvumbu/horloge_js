<div>
  <h1 class="flex">
      <div id="annee"></div>
      <div id="mois"></div>
      <div id="jours"></div>
      <div class="flex2">
          <div id="heures"></div>:
          <div id="minutes"></div>:
          <div id="secondes"></div>
      </div>

  </h1>  
    <div class="flex couleur1">
        <p>lu</p>
        <p>mar</p>
        <p>me</p>
        <p>je</p>
        <p>ve</p>
        <p>sa</p>
        <p>di</p>
    </div>
</div>
<style> 
.flex2 
{
    display: flex; 
    font-family: 'Mansalva', cursive;
    
}
.flex 
{
    display:flex ; 
    justify-content: space-around ; 
   
   
    box-shadow: 4px 4px 4px black ; 
}
.couleur1 
{
    background-color: #404040 ; 
    color: white ; 
}

</style>

<script>

setInterval(function(){ 


    var d = new Date();
        document.getElementById("annee").innerHTML = d.getFullYear();
        document.getElementById("mois").innerHTML = d.getMonth() + 1;
        document.getElementById("jours").innerHTML = d.getDate();
        document.getElementById("heures").innerHTML = d.getHours();
        document.getElementById("minutes").innerHTML = d.getMinutes();
        document.getElementById("secondes").innerHTML = d.getSeconds();


    
    }, 1000);

</script>

<link href="https://fonts.googleapis.com/css?family=Mansalva&display=swap" rel="stylesheet">