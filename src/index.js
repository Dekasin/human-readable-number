module.exports = function toReadable (number) {
  let res ='';
  let strNumb = number + "";
  let arrNumb=strNumb.split('')
  //let arr = {"1": "one", "2":"two", "3":"thre", "4":"four", "5":"five", '6': "secs", "7": 'seven', "8": "eght", "9":"nine", "10": "ten", "11": "eleven"};

  let arr20 = ["zero","one", "two", "three", "four", "five", "six", 'seven', "eight", "nine", "ten", "eleven", "twelf", "thirteen", "fourteen","fifteen", "sixteen", "seventeen","eighteen","nineteen"];

  let arr100 = ["zero","ten", "twenty", "thirty", "fourty", "fifty", "sixty", 'seventy', "eighty", "ninty"];

    if( number < 20) {
     res = arr20[number];
     }
     if (20 <=number && number <100) {
      res =arr100[arrNumb[0]] + " " + arr20[arrNumb[1]];
     }

     if (100 <=number && number <1000) {
      res =arr20[arrNumb[0]] + " hundreed " + arr100[arrNumb[1]] + " "+arr20[arrNumb[2]];
     }
  // for (let i = number.length-1; i > 0; i--) {
  //     res.unshift[i];
  // }
 return res;   
}  
