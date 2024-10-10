const analyzeButton = document.getElementById("analyze");
const clearButton = document.getElementById("clear");
const textElement = document.getElementById("text");
//const countUniqueWords = document.getElementById(text)

analyzeButton.addEventListener("click", () => {
    const content = textElement.value;
    // console.log('!!!' + content + '???');
    if (content.length) {
        const lengthText = content.length;

        document.getElementById("word1").innerText =  countFrequentWords(content, "word1");
        document.getElementById("num1").innerText =  countFrequentWords(content, "num1");
        document.getElementById("word1").innerText =  countFrequentWords(content, "word2");
        document.getElementById("num1").innerText =  countFrequentWords(content, "num2");
        document.getElementById("word1").innerText =  countFrequentWords(content, "word3");
        document.getElementById("num1").innerText =  countFrequentWords(content, "num3");
    } else {
        console.log("The field is empty");
    }
});
//Frequently occurring words +++++++++++++++++++++++++++++++++++++++++++++??????

function countFrequentWords( text, frequency) {
    const words = text.toLowerCase().split(/\W+/);

    const countFrequencyWordsArray = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word) {
            let found = false;
            for (let j = 0; j < countFrequencyWordsArray.length; j++) {
                if (countFrequencyWordsArray[j][0] === word) {
                    countFrequencyWordsArray[j][1]++;
                    found = true
                    break;
                }
            }
            if (!found) {
                countFrequencyWordsArray.push([word, 1]);
            }
        }
    }
    countFrequencyWordsArray.sort((a, b) => b[1] - a[1]);

    return countFrequencyWordsArray.map(item => ({word: item[0], frequency: item[1]}))
}
