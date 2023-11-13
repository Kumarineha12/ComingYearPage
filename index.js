let Time=new Date("January 1, 2024 00:00:00").getTime();
let x =setInterval(function(){
    let now=new Date().getTime();
    let d=Time-now;
    let days=Math.floor(d/(1000*60*60*24));
    let hours=Math.floor((d%(1000*60*60*24))/(1000*60*60));
    let min=Math.floor((d%(1000*60*60))/(1000*60));
    let sec=Math.floor((d%(1000*60))/1000);
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    if(d<0){
        clearInterval(x);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
    }
},1000);