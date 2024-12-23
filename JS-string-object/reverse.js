const sentence = 'i am learning web dev';
// const result ='ved bew gninreal ma i';

let reverse = ''
for(const letter of sentence){
  // console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);

for(let i = 0; i < sentence.length; i++) {
  // console.log(i);
}


// shortcut 
const reversed = sentence.split('').reverse().join('');
console.log(reversed);