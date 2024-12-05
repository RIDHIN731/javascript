function countvowels (inputsting){
    const vowels = "aeiou";
    const count = 0;
for (let char of inputString.ToLowerCase()){
    if(vowels.includes(char)){
        count++;
    }
  }

return count;
}
const examplestring =  "hello,world";
console.log(countvowels(examplestring));






function removeDuplicates(string) {
    let result = "";
    let seen = new Set();
    for (let char of string) {
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    return result;
}


let inputString = "aabbccddeeffgghh";
let output = removeDuplicates(inputString);
console.log(output); // Output: "abcdefgh"





