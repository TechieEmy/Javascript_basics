 
// const fruits= ['apple', 'kiwi', 'banana', 'oranges']
// const fruitstring= fruits.join(' ,')

// console.log(fruits.includes('banana'))
// console.log(fruits.indexOf( 'apple'))

// const colors = ['blue', 'purple', 'green', 'orange', 'white', 'black']

// const pickColors = colors.filter(color => color[2])

// console.log(pickColors)

// const students = [
//                     {name: 'Josh', age: 15, color: 'blue'},
//                     {name: 'Matthew', age: 25, color: 'black'},
//                     {name: 'James', age: 18, color: 'yellow'},
//                     {name: 'Rita', age: 17, color: 'indigo'},
//                     {name: 'Vawn', age: 21, color: 'blue'},
//                     {name: 'Dante', age: 18, color: 'red'},
//                     {name: 'Kimberly', age: 10, color: 'yellow'},
//                     {name: 'Bruce', age: 15, color: 'black'},
//                     {name: 'Dave', age: 15, color: 'red'},      
// ];

// students.forEach(function(student){
//                     console.log(student.name + + student.age + + student.color)
// })


// const studentAge = () => {
//                     students.map((student) => {
//                                         return {student.age}
//                     })
// }
// console.log(studentAge)

// console.log(students.name)

//  console.log(studentDetails)

// assignment.....

// assignmente 1.....function to check two given numbers..return true if one of them is 50 or their sum is 50


        const isEqualTo = (a, b) => a ===50 || a+b ===50;
        console.log(isEqualTo(50,0));
        console.log(isEqualTo(0, 50));


//         assignment 2...check if a given integer is negative or positive
function value(x , y){
                    isNum= ''
                    if(x < y){
                                     return   isNum= 'Number is negative'
                    }else{
                                    return    isNum = 'Number is positive'
                    }
}
console.log(value(-2, 4))





// assignment 3...

let names= ['yang', 'po', 'li'];
names.unshift('py')
names.shift()
console.log(names)

// assignment 4..find the largest od 3 integers

function num(a, b, c)  {
largestNum = 0
if(a > b){
                    return a;
}else {
                    return c;
}
}                
console.log(num(50, 30, 10));

// assignment 5


function integer(x, y){
let isCloseTo100 = 0

if(x < y){
return isCloseTo100 = y
}else{
                    return x
}
}

console.log(integer(45, 75));

// assignment 6

function threeNumbers(x, y, z){
let isTheSame = 0
if(x & y & z == 5){
return isTheSame = 30
}
else if (x & y=== 5) {
             return isTheSame = 40       
} else {
       return 20             
}

}
 console.log(threeNumbers(5, 5, 5));
 console.log(threeNumbers(5, 5, 2))

// assignment 7

const fruits =['Apple', 'Oranges', 'Mango', 'Pineapple']
fruits.reverse()
console.log(fruits)

// assignment 8
const vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels.length);


// assignment 9

const greet = "Good Morning Maam How Are You Doing Today";
let myGreeting = greet.split(" ")
console.log(myGreeting);

// assignment 10

const names1 = [
                    {firstName:'Emily', lastName: 'Ogwuche'}
]
names1.forEach(function(name){
                    console.log(name.firstName)
                    console.log(name.lastName + '' + name.firstName)
})


