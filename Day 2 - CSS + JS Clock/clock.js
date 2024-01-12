const secondHand = document.querySelector('.second-hand'); //selecciona la clase del documento HTML
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); //nos arroja los segundos del actual minuto
    const secondsDegrees = ((seconds / 60) * 360) + 90;//obtiene los segundos en grados.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins /60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; 
    
    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate(); 
//Establece el intervalo en que se moverán las agujas pra setDate y correra en 1000 Milisegundos