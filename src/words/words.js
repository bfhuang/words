'use strict'

function countWords(words) {
    let wordsWithCount = new Map();

    for(let word of words){
        if(wordsWithCount.has(word)){
            wordsWithCount.set(word, wordsWithCount.get(word)+1)
        }else{
            wordsWithCount.set(word, 1)
        }
    }

    return wordsWithCount;
}


module.exports= {countWords}