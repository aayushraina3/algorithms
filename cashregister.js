function checkCashRegister(price, cash, cid) {
  let cashInDrawer = cid.slice();
  //console.log(cashInDrawer)

  let change = cash-price;
  
  if(change > totalCid(cid)){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if(change == totalCid(cid)){
    return {status: "CLOSED", change: cid};
  }else{
    let changeArr = [];

    for(let i=cashInDrawer.length - 1; i>=0; i--){

      let temp = [cashInDrawer[i][0], 0];
      while (change >= currencyVal(cashInDrawer[i][0]) && cashInDrawer[i][1] > 0) {
        temp[1] += currencyVal(cashInDrawer[i][0]);
        cashInDrawer[i][1] -= currencyVal(cashInDrawer[i][0]);
        change -= currencyVal(cashInDrawer[i][0]);
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArr.push(temp);
      }

    }
    
    if (change > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    
    return {status: "OPEN", change: changeArr};
  }
}

function currencyVal(curr){
  if(curr === "ONE HUNDRED") return 100;
  else if(curr === "TWENTY") return 20;
  else if(curr === "TEN") return 10;
  else if(curr === "FIVE") return 5;
  else if(curr === "ONE") return 1;
  else if(curr === "QUARTER") return 0.25;
  else if(curr === "DIME") return 0.1;
  else if(curr === "NICKEL") return 0.05;
  else if(curr === "PENNY") return 0.01;
  else return 0;
}

function totalCid(arr){
  let amount = 0;
  for(let i=0; i<arr.length; i++){
    amount += arr[i][1];
  }
  return amount.toFixed(2);
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
