//push and pop

let array1 = [19, 7, 'n', "ygr"];
array1.push(45);
console.log(array1);    //45 added to array
array1.pop();
console.log(array1);    //45 gone
array1.pop('n');        //cant remove n this way
console.log(array1);    //ygr gone


//unshift and shift

let array2 = ['j', 4, 56, "word"];
array2.unshift(3);
console.log(array2); //3 added 
array2.shift();
console.log(array2); //3 gone

//splice and slice difference:

let array3 = [1, 2, 'h', "hello"];
let spliced1 = array3.splice(4, 0, 7);
console.log(array3)          //this array changed
console.log(spliced1)       //this array has nothing in it
let spliced2 = array3.splice(4, 1, "seven");
console.log(array3)          //7 is now seven
console.log(spliced2)       //this has the removed 7 

let array4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let sliced = array4.slice(1);
console.log(array4);        //this array did not chnage
console.log(sliced);        //this array has all elements but 1

//concat 

let colors1 = ["red", "blue", "green"];
let colors2 = ["purple", "yellow", "orange"];
let colors3 = colors1.concat(colors2);
console.log(colors1);       //no change
console.log(colors2);       //no chnage
console.log(colors3);       //colors1 followed by colors2

//sort

let trees = ['spruce', 'pine', 'cedar', 'maple', 'oak', 'birch', 'aspen'];
trees.sort();
console.log(trees);                         //default alphanumerically
let numbers1 = [12, 7, 4, 8,56];
numbers.sort();                             //this does not work well with numbers
console.log(numbers1);                       //output is 12, 4, 56, 7, 8
numbers.sort((a, b) => a > b ? 1 : -1);     //works with numbers
console.log(numbers1);                       //output is 4, 7, 8, 12, 56

//forEach and map

let numbers2 = [ 1, 2, 3, 4, 5];
numbers2.forEach(a => console.log(a));
numbers2.map(num => num*2);
console.log(numbers2);          //map changes the array

//searching methods

let sample = [ 65, 19, 7, 11, 16, 91, 10,];
console.log(sample.find(num => num < 15));          //finds 7

let even = sample.filter(num => num % 2 == 0);
console.log(sample);                                //array unchanged
console.log(even);                                  //array with only even numbers

sample.every(num => num < 50);                      //T/F lokking for every item to pass
sample.some(num => num < 50);                       //T/F lokking for at least one to pass

//reduce
let people = [
    {name: "John", age: 43},
    {name: "Bob", age: 28},
    {name: "Liam", age: 12}
];
let age = people.reduce((sum, person) => {
    return sum + person.age;
}, 0)
console.log(age);                               //adds up everyones age