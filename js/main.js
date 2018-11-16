//what can user see?
//user can see questions

//what can user expect?
//user expects that when they click submit, a random name will appear

//what can the user do?
//user can answer questions, click buttons






var first = ["Arrogant","Vizual","Midnight","Vicious","Misunderstood","Gentleman","Phantom"]
var last=["God", "Royalty","Prince", "Dominator","Ghost","Prophet", "Killa"]
document.getElementById("submit").onclick=userSubmits

function userSubmits(){
  document.getElementById("container").innerHTML = "";
 var rand= Math.round(Math.random()* first.length)
 var randLast = Math.round(Math.random()* last.length)
 console.log(first[rand] + last[randLast])
 document.getElementById("finalName").innerHTML = ("Your name is now: "+first[rand]+ " "+last[rand])
}
