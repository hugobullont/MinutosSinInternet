let fs = require('fs');
let dns = require('dns');
let ping = require('ping');

let userHasInternet = true;
let dateWithOutInternet = new Date();
let dateWithInternet = new Date();
let total = 0.0;

const ip = 'quicksight.us-east-1.amazonaws.com';
//const ip = 'lospokemon123.com';

let currentDate = new Date();
let stringDate = currentDate.toLocaleString()

let logger = fs.createWriteStream('MinutosSinInternet.txt', {
    flags: 'a',
});

const postToTXT = () => {
    let minutes = (dateWithInternet.getTime() - dateWithOutInternet.getTime()) / 60000;
    total = total + minutes;
    let message = `\n${dateWithOutInternet.toLocaleString()} - ${dateWithInternet.toLocaleString()} - ${minutes} minutos sin internet. Total Acumulado: ${total} minutos.`;
    logger.write(message);
}


const checkInternet  = () => {
    ping.promise.probe(ip).then((res)=>{
        if(res.alive){
            if(!userHasInternet){
                userHasInternet = true;
                dateWithInternet = new Date();
                postToTXT();
            }
        } else {
            if(userHasInternet){
                userHasInternet = false;
                dateWithOutInternet = new Date();
            }
        }
        console.log(res.time);
    });
}

logger.write(`Minutos sin Internet - Ping: ${ip} - Hora de Inicio: ${stringDate}`);

setInterval(checkInternet,100);