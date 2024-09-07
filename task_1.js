const sentence = "Some providers charge an extra $5 to $15 a month to use their router or modem.";

let count = 0;

for(let char of sentence){
    if(char === 'a'){
        count++;
    }
}
console.log(count);