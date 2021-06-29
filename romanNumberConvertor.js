function convertToRoman(num) {
 let Arr1 = ["I","II","III","IV","V","VI","VII","VIII","IX"]
 let Arr10 = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
 let Arr100 = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
 let Arr1000 = ["M", "MM", "MMM", "MMMM"]

 let size = String(num).length;
 let result = "";

 for(let i=0; i<size; i++){
   let digit = num % 10;
   num = Math.trunc(num/10);

   if(digit == 0) continue;
   
   if(i==0) result = Arr1[digit - 1] + result
   else if(i==1) result = Arr10[digit - 1] + result
   else if(i==2) result = Arr100[digit - 1] + result
   else result = Arr1000[digit - 1] + result
 }

 return result;
}

convertToRoman(400);