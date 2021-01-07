// Control Flow exercises

let max = (a,b) =>{
return ( a> b)  ? a : b;
};

// Find the max number
max(1,3); // 3
//is it portrait or landscape 
let isLandscape = (width, height)=>{
    return (width > height)
}
isLandscape(900, 499); // true

// FizzBizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Divisible by 3 or 5 => input
// Not a Number => 'Not a Number'
function fizzBuzz(input){
    if (typeof input !=='number')
    return 'not a number';
    if ((input % 3 === 0)&&(input % 5 ===0))
    return 'FizzBuzz'
    if (input % 3 === 0)
    return 'Fizz';
    if (input % 5 ===0)
    return 'Buzz'

    return input; 
}
const output = fizzBuzz(34);
console.log(output); 

// give the driver 5 point for each 5 lm/h over speed limit
// more 12 the license with suspend 
const speed = 53;
const speedLimit = 70; 
const kmPerPoint = 5;
function checkSpeed(){
    if (speed < speedLimit + kmPerPoint){
        console.log('ok');
    }else{
            const points = Math.floor((speed - speedLimit / kmPerPoint));
            if (points >= 12 ){
            console.log("License suspended");
            }else{            
                console.log('Points', points);
} 
}
    
}

// even and odd number

function showNumber(limit){
    for (let i =0; i<= limit; i++){
        const message = (i % 2 === 0) ? 'Even':'ODD';
        console.log(i, message);
    }
}
// count truthy
const array= [ 0, null, undfined, '',2,3];
function countTruthy(array){
    let count = 0;
    for (let value of array)
    if(value)
    count++;
    return count;
}

// find value string in object
const movie = {
    title : "Hello",
    relese:2010,
    by: "Marwan",
    rating: 4,
}
function showString(obj){
    for ( let key in obj){
        if (typeof obj[key]==='string')
        console.log(key, obj[key]);
    }
}