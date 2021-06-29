function rot13(str) {
  let alphabetArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  let arr = str.split("");
  for(let i=0; i<arr.length; i++){
    let ch = arr[i];
    if(alphabetArr.indexOf(ch) !== -1){
      arr[i] = alphabetArr[(alphabetArr.indexOf(ch) + 13) % 26];
    }
  }

  str = arr.join("");
  
  return str;
}

rot13("SERR YBIR?");