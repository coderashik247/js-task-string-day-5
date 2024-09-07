const sentence = "mAry had A little lamb.Some providers charge An extra $5 to $15 a month to use their router or modem.";

let count = 0;

for(let i=0; i<sentence.length; i++){
    if(sentence[i] === "a" || sentence[i] === "A"){
        count++;
    }
}

console.log(count);