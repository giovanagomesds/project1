function updateTime () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let week_day = date.getDay(); 
    let week_days = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    
    let day = date.getDay() + 14;
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    day = addZero(day);
    month = addZero(month);

    let timeString =`${hours}:${minutes}:${seconds}`;
    let dayString = `${week_days[week_day]}, ${day}/${month}/${year}`

    document.querySelector(".time").innerHTML = timeString
    document.querySelector(".date").innerHTML = dayString
}

// funçao para adicionar 0 na frente da hora e na frente do mês

function addZero(value){
    return String(value).padStart(2, "0");
}

setInterval(updateTime, 1000)