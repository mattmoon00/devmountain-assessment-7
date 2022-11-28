function longestWord(wordList) {
    let max = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > max) {
            max = wordList[i].length;
        }
    }
    return max;
}

console.log(longestWord(["short", "longest"]));
