
const timer=document.querySelector("#time");
const countDown= ()=> {
    let initialTime=null;
    let finalTime=null;


    const countDownCalculation= ()=>{

        if(initialTime==null){
            initialTime=Date.now();
            finalTime=initialTime+11000;
           
        }
      const  temp=Date.now();
        
    let timeDifference= temp< finalTime ? (finalTime-temp):0;
       timeDifference=parseInt(timeDifference/1000);
        if(timeDifference<1){
          timer.innerHTML="Happy Independence Day";
          return;
        }
        timer.innerHTML=timeDifference;
        requestAnimationFrame(countDownCalculation)



    }
    countDownCalculation();
}
countDown();
