// var isSunny = true;
// var isRaining = false;

// var number = 5;
// console.log(number < 3); // this will log `false`

// var isSunny = false;
// var isRaining = true;
    
// if(isSunny) {
//     console.log("Wear sunscreen");
// }
    
// if(isRaining) {
//     console.log("Bring an umbrella");
// }


// var num = 0;
// var obj = new String('0');
// var str = '0';

// console.log(num === num); // true
// console.log(obj === obj); // true
// console.log(str === str); // true

// console.log(num === obj); // false
// console.log(num === str); // false
// console.log(obj === str); // false
// console.log(null === undefined); // false
// console.log(obj === null); // false
// console.log(obj === undefined); // false

// <-- LOOPS -->
// var start = 0;
// var end = 10;

// while(start <= end) {
//     console.log("start: " + start + ", end: " + end);
//     start++;
//     end--;
// }

// console.log( 8 % 3 );

// console.log( 8 % 3 == 2 );

// for(var i=8, i>-2; i-=3) {
//     console.log(i);
// }

// var x = 0;
// for(var i=1; i<5; i++) {
//     x += i;
// }
// console.log(x);

// const props = [
//     { id: 1, name: 'Fizz'},
//     { id: 2, name: 'Buzz'},
//     { id: 3, name: 'FizzBuzz'}
// ];

//     const [,, { name }] = props;

//     console.log(name); // "FizzBuzz"



for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}