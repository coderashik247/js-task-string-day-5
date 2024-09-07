function containsAllVowels(str) {
    str = str.toLowerCase();
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let vowel of vowels) {
      if (!str.includes(vowel)) {
        return "Their no present vowels";
      }
    }
    return "Vowels present at here";
  }
  console.log(containsAllVowels("education")); 
  console.log(containsAllVowels("hello world"));
  