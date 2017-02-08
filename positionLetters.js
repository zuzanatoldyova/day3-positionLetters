function countLetters(sentence){
  var result = {};
  for (var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if (/\S/.test(letter)) {
      if (!result[letter]) {
        result[letter] = [];
      }
      result[letter].push(i);
    }}
  return result;
}

console.log(countLetters("lighthouse in the house"));
