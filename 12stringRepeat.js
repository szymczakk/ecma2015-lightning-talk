class stringMethod{
  sr(letter,count){
    return letter.repeat(count);
  }

  includesNew(haystack, needle){
    return haystack.includes(needle);
  }

  includesOld(haystack, needle){
    return haystack.indexOf(needle) !== -1;
  }
}

const sr = new stringMethod();
console.log(sr.sr('a', 5));
console.log(sr.includesNew('aabba', 'bb'));
console.log(sr.includesNew('aabba', 'cc'));

console.log(sr.includesOld('aabba', 'bb'));
console.log(sr.includesOld('aabba', 'cc'));
