// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    // Define a variable to hold the count of vowels
    let vowelCount = 0;
    for  (const letter of str) {
        if ("aeiouAEIOU".includes(letter)){
            vowelCount++;
        }
        
    }
    return vowelCount;
}

console.log(countVowels("Shubham"))