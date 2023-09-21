const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let morseString = '';
    let morseLetterLength = 0;
    for(let i = 0; i < expr.length - 1; i+=2) {
        let numberLetter = expr.slice(i, i + 2);
        if (numberLetter === '10') morseString += '.';
        if (numberLetter == '11') morseString += '-';
        morseLetterLength += 2;
        if (morseLetterLength === 10) {
            morseLetterLength = 0;
            morseString += ' ';
        }
    }

    const morseStringSplit = morseString.split(" ");
    let result = "";

    for (let i = 0; i < morseStringSplit.length - 1; i++) {
        let decodeWord = MORSE_TABLE[morseStringSplit[i]];

        if (decodeWord) result += decodeWord;
        else result += " ";
    }

    return result;
}

module.exports = {
    decode
}