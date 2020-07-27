function getFullName(firstName, lastName) {
    console.log(arguments);
    let fullName = ' ';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('Hanif', 'Shongket', 'Poribahan', 'Shubokta');
console.log(name);