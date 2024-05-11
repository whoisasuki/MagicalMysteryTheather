const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

// function getBaseTicketCost(age) {
    
//     if ((age <= 12) || (age >= 65)) {
//         cost = CHILD_AND_SENIOR_TICKET_COST;
//     } else {        
//             return GENERAL_ADMISSION_TICKET_COST;
//         }


// };

function buyTicket() {
    const age = prompt('What is your age?');
    console.log(age);
    let cost = getBaseTicketCost(age);
    console.log("base cost: " + cost);

    const isMatinee = prompt('Are you attending a matinee show?').toLowerCase();
    console.log(isMatinee);
    cost = applyMatineeDiscount(cost, isMatinee);
    
    alert('Your ticket will cost: $' + cost);
}
function getBaseTicketCost(age){
    if ((age <= 12) || (age >=65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    }
    return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeDiscount(cost, isMatinee) {
    if ((isMatinee === 'yes')|| (isMatinee === 'y')) {
        console.log("apply discount");
        return cost - MATINEE_DISCOUNT;
        }
    return cost;
}
