//via het DOM document object model wordt er een link gemaakt naar elementen uit je HTML file
i = document.getElementById("break_img")//verwijzing naar je <img id='break_img'>
p = document.getElementById("clock")//verwijzing naar je <p id='clock'>

breakStart = new Date(2021, 1, 8, 14, 34, 0)
breakEnd = new Date(2021, 1, 8, 14, 36, 0)
//stel de begin en eindtijd van je break hier in

e = setInterval(updateTime,100000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
   if (d.getMinutes() >= breakStart.getMinutes()){
       breakNow()
   }
   else{
    //    (d.getMinutes() > breakEnd.getMinutes()){
       endBreak()
   }
   //check hier hoe laat het is en of je wel of geen break moet hebben
}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    i.src = "../Photos/Iron-Man-Break.jpg"
   
}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   i.src = "../Photos/Iron-Man.jpg"
}
