// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function capitalizedString(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizedString('marcus browne'));

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function returnUniqueWords(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("e") && !arr[i].startsWith("e")) {
            newArray.push(arr[i]);
        } 
    }
    return newArray;

}
console.log(returnUniqueWords(["ellen", "jane", "zigland", "pedestrian"]))

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function returnLetterCount(str) {
    let count = {}
    for (let char of str) {
        if (char >= "a" && char <= "z") {
            count[char] = (count[char] || 0) + 1;
        }
    }
    return count
}   
console.log(returnLetterCount('marcus'));

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }