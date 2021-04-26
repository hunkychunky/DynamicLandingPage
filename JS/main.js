//DOM ELEMENTS
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
goal = document.getElementById('goal');

const name = document.getElementById('name');


//SHOW THE TIME
function showtime(){
    let today = new Date(), hour = today.getHours(), min = today.getMinutes();
    
    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;
    
    //Output time
    time.innerHTML =`${hour}<span>:</span>${addZero(min)}`;

    setTimeout(showtime, 1000);
}

//Add zero
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') +n;
}

//Set background picture and greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if (hour < 12 ){
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = "Good Morning";
        //document.body.style.color = 'white';
    } else if(hour < 18){
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
    } else{
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//Get name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

//Set name
function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode ==13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();    
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get goal 
function getGoal(){
    if(localStorage.getItem('goal') === null){
        goal.textContent = '[Enter Goal]';
    }else{
        goal.textContent = localStorage.getItem('goal')
    }
}

//Set goal
function setGoal(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode ==13){
            localStorage.setItem('goal', e.target.innerText);
            goal.blur();    
        }
    }else{
        localStorage.setItem('goal', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

//Run
showtime();
setBgGreet();
getName();
getGoal();