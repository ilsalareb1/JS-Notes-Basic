///functions
function calculateAge(birthYear){
    return 2019 - birthYear;
}

let galloBirth = 2002;

//functionCall (argument goes here);

const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2004);

/* console.log(ageGallo, ageIlsa, ageThami); */

let firstName = 'Brendan';
function yearsUntilRetire (year, firstName){
    let age = calculateAge(year);
    let retirement = 65 - age;

    console.log(`${firstName} retires in ${retirement}.`);

}

yearsUntilRetire(2002, firstName);