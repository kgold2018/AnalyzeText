function analyzeText() {
    const analyzeButton = document.getElementById('analyze');
    const clearButton = document.getElementById('clear');
    const textElement = document.getElementById('text');

    //const text = document.getElementById('inputText').value;
    analyzeButton.addEventListener('click', () => {
        const content = textElement.value;
        //console.log('!!!' + content + '????');
        if (content.length) {
            //console.log('!!!' + content);
            const lengthText = content.length;
            document.getElementById('length').innerText = lengthText;
            document.getElementById('length-non-space').innerText = countNonSpaceChars(content);
            document.getElementById('results').innerHTML = results;
        } else {
            console.log('Ths field is empty');
        }
    })

    clearButton.addEventListener('click', function() {
      textElement.value = ''; // Clear the textarea

        // // Reset all result spans to '0' or default values
        // const spans = resultSection.getElementsByTagName('span');
        // for (let span of spans) {
        //     if (span.id === 'repeating' || span.id === 'palindrome') {
        //         span.textContent = 'No';
        //     } else if (span.id.startsWith('word') || span.id.startsWith('num')) {
        //         span.textContent = '\u00A0'; // Non-breaking space
        //     } else {
        //         span.textContent = '0';
        //     }
        // }
    });



    function countNonSpaceChars(text) {
        // text = text.trim();
        // text = text.replaceAll(' ','');
        // text = text.replaceAll('\n','');
        // text = text.replaceAll('/t','');
        // text = text.replaceAll('&nbsp;','');
        text = text
            .replaceAll(' ', '')
            .replaceAll('\n', '')
            .replaceAll('/t', '')
            .replaceAll('&nbsp;', '');
        console.log(text);
        return text.length;

    }

    function countWords(text) {
        const charCount = text.length;
        const wordCount = text.trim().split(/\s+/).length;
        const sentenceCount = text.split(/[.!?]+/).length - 1;

        const results = `
        <h2>Analysis Results:</h2>
        <table>
            <tr>
                <th>Metric</th>
                <th>Count</th>
            </tr>
            <tr>
                <td>Characters</td>
                <td>${charCount}</td>
            </tr>
            <tr>
                <td>Words</td>
                <td>${wordCount}</td>
            </tr>
            <tr>
                <td>Sentences</td>
                <td>${sentenceCount}</td>
            </tr>
        </table>
        `
    }
}
