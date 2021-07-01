function telephoneCheck(str) {
  
  let formatRegex = /^1?\s?(\d{3}|\(\d{3}\))\s?-?(\d{3})\s?-?(\d{4})$/
  let result = formatRegex.test(str);
  return result;
}

telephoneCheck("555-555-5555")
