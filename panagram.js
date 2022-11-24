function isPana(phrase) {
  phrase = phrase.toLowerCase();
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < phrase.length; i++) {
    if (letters.includes(phrase[i])) {
      letters.splice(letters.indexOf(phrase[i]), 1);
    }
  }
  if (letters.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPana("The quick brown fox jumps over the lazy dog!"));
// True
console.log(isPana("What is your favorite color?"));
// False
