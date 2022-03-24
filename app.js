var tens=00;
var second=00;
const outputSecond=document.getElementById("second")
const outputTens=document.getElementById("tens")
const btnStart=document.getElementById("btn-start")
const btnStop=document.getElementById("btn-stop")
const btnReset=document.getElementById("btn-reset")
var interval;

btnStart.addEventListener("click",()=>{
    clearInterval(interval)
   interval=setInterval(startTime,10)

})

btnStop.addEventListener("click",()=>{
    clearInterval(interval)
})

btnReset.addEventListener("click",()=>{
    clearInterval(interval)
    tens="00";
    second="00";
    outputSecond.innerText=second
    outputTens.innerText=tens

})

function startTime(){
    tens++
    if(tens<=9){
        outputTens.innerText="0"+tens
    }
    if(tens>9){
        outputTens.innerText=tens
    }
    if(tens>99){
        second++
        outputSecond.innerText="0"+second;
        tens=0;
        outputTens.innerText="0"+tens;
    }
    if(second>9){
        outputSecond.innerText=second
    }
}