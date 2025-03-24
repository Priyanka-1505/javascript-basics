const str1 = 'Priyanka Patel'

// console.log(str1[3]);
// console.log(str1.length);
// console.log(str1.toUpperCase());
// console.log(str1.charAt(7));
// console.log(str1.indexOf('r'));

const newstr = str1.substring(0,4)
console.log(newstr);

const anotherstr = str1.slice(-3,2)
console.log(anotherstr);

url = "https://piyu.com/youru%20panchalpatel"

console.log(url.replace('%20',''));
console.log(url.includes('panchal'));
console.log(url.split('/'))
