let input = document.getElementById("numbers");
input.addEventListener("keyup",function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("add").click();
    this.value='';
  }
});

let log = '';
let sum = 0;

function add() {
  if(input.value === '') {
    return alert("Your entry was not a valid dollar amount! Please try again.");
  } else if (log === '') {
    log = input.value;
  } else {
    log += " + " + input.value;
  }
  document.getElementById("displayNum").innerHTML = log;
  sum += parseFloat(input.value);
  console.log(sum);
  input.value = '';
  }


function subtotal() {
  document.getElementById("displaySum").innerHTML = "Your subtotal is:<br><br>" +
                                                    "$" + sum.toFixed(2);
}


let salesTax = document.getElementById("tax").value;
let totalAmt;

function calculate(){
  if (document.getElementById("tax").value === "American Sales Tax") {
    totalAmt = sum * 1.0825;
    salesTax = totalAmt - sum;
    } else if(document.getElementById("tax").value === "European Sales Tax") {
      totalAmt = sum * 1.215;
      salesTax = totalAmt - sum;
    }
  document.getElementById("result").innerHTML = "Sales Tax is $" + salesTax.toFixed(2) +
                                                "<br>" +
                                                "Total with Tax is $" + totalAmt.toFixed(2);
  console.log(salesTax);
  console.log(totalAmt);
}
