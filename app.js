const analyzeButton = document.getElementById("analyze");
const clearButton = document.getElementById("clear");
const textElement = document.getElementById("text");
//const countUniqueWords = document.getElementById(text)

analyzeButton.addEventListener("click", () => {
    const content = textElement.value;
    // console.log('!!!' + content + '???');
    if (content.length) {
        const lengthText = content.length;
        document.getElementById("length").innerText = lengthText;
        document.getElementById("length-non-space").innerText = countNonSpaceChars(content);
        document.getElementById("unique").innerText = countUniqueNonSpaceChars(content);
        document.getElementById("vowels").innerText = countVowelsChars(content);
        document.getElementById("consonants").innerText = countConsonantsChars(content);
        document.getElementById("numbers").innerText = countNumbers(content);
        document.getElementById("words").innerText = countWords(content);
        document.getElementById("words_uniq").innerText =  countUniqueWords(content);
        document.getElementById("capitalized").innerText = countCapitalizedWords(content);
        document.getElementById("word_len-min").innerText =  countMinLengthWords(content);
        document.getElementById("word_len-max").innerText = countMaxLengthWords(content);
        document.getElementById("word_len-average").innerText = countAverageLength(content);
        document.getElementById("sentences").innerText = countTotalSentences(content);
        document.getElementById("sentence_min").innerText = countMinWordsSentences(content);
        document.getElementById("sentence_max").innerText = countMaxWordsSentences(content);
        document.getElementById("sentence_avg").innerText = countAverageWordsInSentences(content);
        document.getElementById("special").innerText = countTotalSpecialChars(content);
        document.getElementById("periods").innerText = countPeriodsSpecialChars(content);
        document.getElementById("commas").innerText = countCommasSpecialChars(content);
        document.getElementById("exclamations").innerText = countExclamationMarksSpecialChars(content);
        document.getElementById("word1").innerText =  countFrequentWords(content, "word1");
        document.getElementById("num1").innerText =  countFrequentWords(content, "num1");
        document.getElementById("word2").innerText =  countFrequentWords(content, "word2");
        document.getElementById("num2").innerText =  countFrequentWords(content, "num2");
        document.getElementById("word3").innerText =  countFrequentWords(content, "word3");
        document.getElementById("num3").innerText =  countFrequentWords(content, "num3");
        document.getElementById("quotes").innerText = countQuotesFeatures(content);
        document.getElementById("repeating").innerText = isConsecutiveDublicatesFeatures(content);
        document.getElementById("palindrome").innerText = IsPalindromTextFeatures(content);



    } else {
        console.log("The field is empty");
    }
});
clearButton.addEventListener('click', function() {
    textElement.value = ''; // Clear the textarea


// Reset all result spans to '0' or default values
    const resultSpans = document.querySelectorAll('#result span');
    resultSpans.forEach(span => {
        if (span.id === 'repeating' || span.id === 'palindrome') {
            span.textContent = 'No';
        } else if (span.id.startsWith('word') || span.id.startsWith('num')) {
            span.textContent = '\u00A0'; // Non-breaking space
        } else {
            span.textContent = '0';
        }
    });

    console.log('Text area cleared and results reset');
});


//Characters +++++++++++++++++++++++++++++++
function countNonSpaceChars(text) {
    text = text
         .replaceAll(" ", "")
        .replaceAll("\n", "")
        .replaceAll("\t", "")
        .replaceAll("&nbsp;", "");

    console.log(text);
    return text.length;
}

function countUniqueNonSpaceChars(text) {
    text = text
        .replaceAll(" ", "")
        .replaceAll("\n", "")
        .replaceAll("\t", "")
        .replaceAll("&nbsp;", "");

    const uniqueChars = new Set(text)
    return uniqueChars.size

    // console.log(text);
    // return text.length;
}
function countVowelsChars(text) {
    //text = text
    const vowels = ['a', 'e', 'i', 'o','u', 'A','E','I','O','U','А','Е','Ё', 'И',
        'О', 'У', 'Ы', 'Э', 'Я', 'Ю', 'а', 'е', 'ё', 'и', 'о', 'у','ы', 'э', 'я', 'ю'];
    const countVowels = text.split('').filter(char =>vowels.includes(char)).length;
    return  countVowels;
}

function countConsonantsChars(text) {
    const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P','Q',
    'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'f','g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's','t',
    'v','w','x','y','z', 'Б', 'В', 'Г', 'Д', 'Ж', 'З', 'К', 'Л', 'М', 'Н', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
    'Й', 'б','в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м','н', 'п','р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'й'];
    const countConsonants = text.split('').filter(char =>consonants.includes(char)).length;
    return countConsonants;
}
function countNumbers(text) {
   const digits = text.match(/\d/g)

    if( digits) {
        return digits.length;
    } else {
        return 0;
    }
}

//Special characters section +++++++++++++++++++++++++++++++++++++++++++++
function countTotalSpecialChars(text) {
    const specialCharactersRedex = /[^a-zA-Z0-9\s]/g;
    const specialChars = text.match(specialCharactersRedex);

    return specialChars ? specialChars.length : 0 ;
}

function countPeriodsSpecialChars(text) {
    const periodRedex = /\./g;
    const periods = text.match( periodRedex);

    return periods ? periods.length : 0 ;
}


function countCommasSpecialChars(text) {
    const commasRedex = /\,/g;
    const commas = text.match(commasRedex);

    return commas ? commas.length : 0 ;
}

function countExclamationMarksSpecialChars(text) {
    const exclamationRegex = /\!/g;
    const exclamationMarks = text.match(exclamationRegex);

    return exclamationMarks ? exclamationMarks.length : 0 ;
}

//Words section ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function countWords(text) {
    let arr  = text
        .trim()
        .replaceAll('- ','')
        .replaceAll('&mdash; ', '')
        .replaceAll('_ ','')
        .split(' ')

    return arr.length;

    //console.log(text);
}

function countUniqueWords(text) {
    let arr = text
         .trim()
        .replaceAll('- ','')
        .replaceAll('_ ','')
        .replace(/[\\.,\/#!$%\^&\*;:{}=\-_`~()\'\"\[\]]/g, '')
        .toLowerCase()
        .split(' ')
        .filter(word => word.length > 0);


    let s =  new Set(arr);
    console.log(s)
    return s.size;
}

function countCapitalizedWords(text){
    let array = text
        .trim()
        .replace(/[\\.,\/#!$%\^&\*;:{}=\-_`~()\'\"\[\]]/g, '')
        .replaceAll('\n', '')
        .replaceAll(/[0-9]/g, '')
        .split(' ').filter(word => word.length > 0);

    // .split(/\s+/).filter(word => word.length > 0);

    let count = 0;

    for(let word of array) {
        if (word.at(0).toUpperCase() === word.at(0)) {
            count ++
        }
    }
    console.log(array)
    console.log(count)
    return count
}

function countMinLengthWords(text) {
    const words = text.replace(/[^\w\s]|_/g, "").split(/\s+/);
    let minLength = Infinity;
    let count= 0;

    for (const word of words) {
        if (word.length < minLength) {
            minLength = word.length;
        }
    }
    for (const word of words) {
        if (word.length === minLength) {
            count++;
        }
    }

    return count;
}

function countMaxLengthWords(text) {
    //const words = text.replace(/[^\w\s]|_/g, "").split(/\s+/);
   // const words = text.split(/\b/).filter(word => /\S/.test(word))
    const words = text.match(/\p{L}+/gu);
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

function  countAverageLength(text) {
    //const words = text.replace(/[^\w\s]|_/g, "").split(/\s+/);
    const words = text.replace(/[^\p{L}\p{N}\s]|_/gu, "").split(/\s+/);
    let totalLength = 0
    for (const word of words) {
        totalLength += word.length;
    }

    return (totalLength / words.length).toFixed(2);
}

//Sentences section +++++++++++++++++++++++++++++++++++++++++++++++++
function countTotalSentences(text)  {
    const sentences = text.split(/[.!?]+/);
    const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);

    return filteredSentences.length
}
function countMinWordsSentences(text) {
    const sentences = text.split(/[.!?]+\s*/);
    console.log("Split sentences:", sentences.map(s => `"${s}"`));
    const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);
    console.log("Filtered sentences:", filteredSentences.map(s => `"${s}"`));
    //let minWordsCount = Infinity;

    let minWordsCount = filteredSentences.length > 0 ?
        filteredSentences[0].trim().split(/\s+/).length : 0;

    for (let i = 0; i < filteredSentences.length; i++) {
        const sentence = filteredSentences[i].trim();
       // const nonSpaceChars = sentence.replace(/\s/g,'')
        //const length = sentence.length;
       // const length = nonSpaceChars.length;
        const words = sentence.split(/\s+/);
        const wordCount = words.length;


        console.log(`Sentence ${i + 1}:`);
        console.log("  Sentence:", JSON.stringify(sentence));
        console.log("  Character count:", length);

        if (wordCount < minWordsCount) {
           minWordsCount = wordCount;
            console.log("  New minimum word count:", minWordsCount);
        }
    }
    return minWordsCount;
}
//text =The quick brown fox jumps over the lazy dog. The dog was not amused! What will happen next?
function countMaxWordsSentences(text) {
    const sentences = text.split(/[.!?]+/);
    console.log("Split sentences:", sentences.map(s => `"${s}"`));
    const filteredSentences = sentences.filter(sentence => sentence.trim().length > 0);
    //console.log("Filtered sentences:", filteredSentences.map(s => `"${s}"`));
    let maxWordsCount = 0;
    let longestSentence = "";

    for (let i = 0; i < filteredSentences.length; i++) {
        const sentence = filteredSentences[i].trim();
        const words = sentence.split(/\s+/);
        const wordCount = words.length;


        console.log(`Sentence ${i + 1}:`);
        console.log("  Sentence:", JSON.stringify(sentence));
        console.log("  Character count:", length);

        if (wordCount > maxWordsCount) {
            maxWordsCount = wordCount;
            longestSentence = sentence;
            console.log("  New maximum word count:", maxWordsCount);
            console.log("  New longest sentence:", JSON.stringify(longestSentence));
        }
    }
    //return { maxWordsCount, longestSentence };
    return maxWordsCount;
}
function countAverageWordsInSentences(text) {
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);

    let totalWords = 0;
    let countSentence = sentences.length;

    for (let i = 0; i < countSentence; i++) {
        const words = sentences[i].trim().split(/\s+/);
        totalWords += words.length;
    }
    const averageWords = totalWords / countSentence
        .toFixed(2);

    return(averageWords);
}

//Frequently occurring words +++++++++++++++++++++++++++++++++++++++++++++??????

// function countFrequentWords( text, frequency) {
//     const words = text.toLowerCase().split(/\W+/);
//
//     const countFrequencyWordsArray = [];
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if (word) {
//             let found = false;
//             for (let j = 0; j < countFrequencyWordsArray.length; j++) {
//                 if (countFrequencyWordsArray[j][0] === word) {
//                     countFrequencyWordsArray[j][1]++;
//                     found = true
//                     break;
//                 }
//             }
//             if (!found) {
//                 countFrequencyWordsArray.push([word, 1]);
//             }
//         }
//     }
//     countFrequencyWordsArray.sort((a, b) => b[1] - a[1]);
//
//     return countFrequencyWordsArray.map(item => ({word: item[0], frequency: item[1]}))
// }
// if (content.length) {
//     const frequentWords = countFrequentWords(content);
// for (let i = 1; i <= 3; i++) {
//     if (frequentWords[i-1]) {
//         document.getElementById(`word${i}`).innerText = frequentWords[i-1].word;
//         document.getElementById(`num${i}`).innerText = frequentWords[i-1].frequency;
//     } else {
//         document.getElementById(`word${i}`).innerText = '';
//         document.getElementById(`num${i}`).innerText = '';
//     }
// }
// } else {
//     console.log("The field is empty");
// }
 analyzeButton.addEventListener("click", () => {
    const content = textElement.value;
    if (content.length) {
        const frequentWords = countFrequentWords(content);

        // Display top 3 frequent words
        for (let i = 1; i <= 3; i++) {
            const wordElement = document.getElementById(`word${i}`);
            const numElement = document.getElementById(`num${i}`);

            if (frequentWords[i-1]) {
                const { word, frequency } = frequentWords[i-1];
                wordElement.textContent = word;
                numElement.textContent = frequency.toString();
                console.log(`Setting word${i} to "${word}" and num${i} to "${frequency}"`);
            } else {
                wordElement.textContent = '';
                numElement.textContent = '';
                console.log(`Clearing word${i} and num${i}`);
            }
        }
    } else {
        console.log("The field is empty");
    }
});

function countFrequentWords(text) {
    text = text
   const words = text.toLowerCase().match((/\b\p{L}+\b/gu)) || [];
    const wordFrequency = {};

    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    return Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([word, frequency]) => ({ word, frequency }));
}

function debugFrequentWords() {
    const content = textElement.value;
    const frequentWords = countFrequentWords(content);
    console.log("Frequent words:", frequentWords);
    frequentWords.forEach((item, index) => {
        console.log(`Word ${index + 1}: "${item.word}", Frequency: ${item.frequency}`);
    });
}

// Call this function when analyzing
analyzeButton.addEventListener("click", debugFrequentWords);
//Features section +++++++++++++++++++++++++++++++++++++++++++++++++
function countQuotesFeatures(text) {
    const quotesRegex = /['"]/g;
    const quotes = text.match(quotesRegex);

    return quotes ? quotes.length : 0;
}

function isConsecutiveDublicatesFeatures(text) {
    for (let i = 0; i< text.length; i++) {
        if (text[i] === text[i+1]) {
            return "Yes";
        }
    }
    return "No";
}

function IsPalindromTextFeatures(text) {
    const removeNonAlphaCharText = text.replace(/[^a-zA-Z0-9]/g, '');
    const lowerNonAlphaCharText=  removeNonAlphaCharText.toLowerCase();
    const reversedText = lowerNonAlphaCharText.split('').reverse().join('');

    return lowerNonAlphaCharText === reversedText ?  "Yes" : "No";
}


// С другой стороны, все будет хорошо!
//     Лев Толстой говорил: "Все думают изменить мир, но никто не думает изменить себя."
//
// "А роза упала на лапу Азора", - сказал Игорь.
//
//     Топот. Комок мок. Лёша на полке клопа нашёл..
//A man, a plan, a canal, Panama"
//
// Enter your text in the field below and click the 'Analyze' button.
//     .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()\'\"\[\]]/g,"")
//
// Я царь – я раб, я червь — я бог. Немудрено голову срубить – мудрено приставить.
//1. I love Lucy 2. and Nick.
//Сначала он сказал: "Нет! Нет! Нет!". Но, подумав, сказал: 'Давайте попробуем.'.
//// Q aeiouаяуюоеёэиыAEIOUАЯУЮОЕЁЭИЫ? O O?! A Ё! %^& 1 Q... 2njd,&*(gfv658 3 555 7.
//No lemons, no melon.
// No, it is open on one position.
// A Toyota! Race fast, safe car! A Toyota!
// Never odd or even