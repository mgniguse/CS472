/**
 * app.js
 */

"use strict"
//Ques 1


function max(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else return n2;
};
console.log("max of 5 and 8 is: " + max(5,8));

//Ques 2
function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) 
    return n1;
    if (n2 > n1 && n2 > n3) 
    return n2;
    else return n3;

}
console.log("maxOfThree: "+maxOfThree(34,45,53));

function isVowel(x) {
    let result = false;
    if (x == "a" || x == "e" || x == "i" || x == "u" || x == "o") {
        result = true;
    }

    return result
}

console.log("isVowel  :"+isVowel("a"))


//Ques 4
const sum = n => {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];

    }
    return sum;
}

console.log("The sum is :" + sum([1, 2, 3, 4]))


const multiply = num => {
    let product = 1;
    for (let i = 0; i < num.length; i++) {
        product *= num[i];
    }
    return product;
}

console.log("The product is : "+ multiply([1, 2, 3, 4]))

//Ques 5

const reverse = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("reverse: "+reverse("!uoy evol"))

// Ques 6

const findLongestWord = str => {
    let firstElement = str[0];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (firstElement > str[i + 1]) {
            count = firstElement.length;
        }
        else {
            count = str[i].length
        }
    }
    return count;
}

let longest = ["long", "short", "misghina"];
console.log("findLongestWord :"+findLongestWord(longest));

//Ques 7

const filterLongWords = (str, num) => {
    let words = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > num) {
            words = str[i];
        }
    }
    return words;
}

console.log("filterLongWords: "+ filterLongWords(["Sirak", "Donovan", "Gebriela"], 6));

//Ques 8

const computeSumOfSquares = x => {
    let sum = 1;
    let temp;
    for (let i = 0; i < x.length; i++) {
        temp = x[i] * 2;
        sum += temp;
    }
    return sum;
}

console.log("computeSumOfSquares: "+computeSumOfSquares([1, 2, 3]))

//Ques 9 
const printOddNumbersOnly = x => {
    let temp;
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            result += x[i];
            temp += result;
        }

    }
    return result;
}

console.log("The odd numbers ares : "+printOddNumbersOnly([2, 5, 4, 6, 8, 5, 3, 1]))

//Ques 10
const computeSumOfSquaresOfEvensOnly = x => {
    let temp = 0;
    let sqr = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            sqr = x[i] * x[i];
            temp += sqr
        }
    }
    return temp
}

console.log("sum of squares of even numbers only is: "+computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]))

//Ques 11
const sumOfReduce = x => {
    let sum = 0;
    sum += x.reduce((x, y) => x + y);
    return sum;
}
console.log("sumOfReduce :" + sumOfReduce([1, 2]));


const multiplyOfReduce = (x) => {
    let result = 0;
    result += x.reduce((x, y) => x * y);
    return result;
}

console.log("ultiplyOfReduce :"+multiplyOfReduce([1, 2, 3]));

//Ques 12
const findSecondBiggest = arr => {
    let temp = 0;
    let secondLargest = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i]>temp){
            temp = arr[i];
        }
    }
   
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]>secondLargest && arr[j]<temp){
            secondLargest = arr[j]
        }
        
    }

    
    return secondLargest;
}

console.log("findSecondBiggest  :"+findSecondBiggest([19,9,11,0,12]));

//Ques 13
function printFibo(a,b,c){
    let sum = [];
    sum.push(b);
    sum.push(c);
    let fib =0;
    for (let i = 2; i < a; i++) {
        fib = sum[sum.length-2] + sum[sum.length-1]
        sum.push(fib);
    }
    return sum;
}
console.log("printFibo :"+printFibo(10,0,1))

