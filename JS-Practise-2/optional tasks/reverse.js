const statement = 'I am a hard working person';

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

const reversedStatement = reverseWords(statement);
console.log(reversedStatement);