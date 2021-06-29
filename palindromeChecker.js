function palindrome(str) {
  let targetStr = str.match(/[a-z0-9]/ig);

  for(let i=0; i<targetStr.length/2; i++){
    let liChar = targetStr[i].toLowerCase();
    let hiChar = targetStr[targetStr.length-i-1].toLowerCase();
    
    if(liChar != hiChar) return false;
  }

  return true;
}



palindrome("eye");