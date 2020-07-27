function welcomeGuest(name, greetHandler) {
    greetHandler(name);
}
const actorName = 'Tom Hanks';

function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}

welcomeGuest(actorName, greetAfternoon);
welcomeGuest('Kate Winslet', greetEvening);
welcomeGuest('Shakib Khan', greetMorning);
