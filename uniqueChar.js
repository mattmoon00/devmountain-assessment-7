function uniqueChars(word) {
  let wordSet = new Set();
  for (let i = 0; i < word.length; i++) {
    wordSet.add(word[i]);
  }
  if (wordSet.size === word.length) {
    return true;
  } else {
    return false;
  }
}

console.log(uniqueChars("Monday"));
// True
console.log(uniqueChars("Moonday"));
// False
