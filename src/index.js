module.exports = function toReadable (number) {
  let res ='';
  let strNumb = toString(number);
  //let arr = {"1": "one", "2":"two", "3":"thre", "4":"four", "5":"five", '6': "secs", "7": 'seven', "8": "eght", "9":"nine", "10": "ten", "11": "eleven"};

  let arr20 = ["one", "two", "three", "four", "five", "six", 'seven', "eight", "nine", "ten", "eleven", "twelf", "thirteen", "fourteen","fifteen", "sixteen", "seventeen","eighteen","nineteen"];

    if( number < 20) {
     res = arr20[number-1];
     }
  // for (let i = number.length-1; i > 0; i--) {
  //     res.unshift[i];
  // }
 return res;   
}  
