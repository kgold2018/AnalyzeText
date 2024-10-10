function countCapitalizedWords(text) {
    // Remove numbers
    text = text.replace(/[0-9]/g, '')

    // Split the text into words, removing punctuation
    let array = text
        .trim()
        .replace(/[.,/#!$%^&*;:{}=\-_`~()'"[\]]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 0);  // Remove empty strings

    let count = 0;

    for (let word of array) {
        if (word.charAt(0).toUpperCase() === word.charAt(0) && word.length > 0) {
            count++;
        }
    }
    return count;
}

// Test the function
console.log(countCapitalizedWords("1. I love Mick"));