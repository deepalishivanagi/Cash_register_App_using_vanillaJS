var BillAmountis = document.querySelector('#billamount');
var CashAmountis = document.querySelector('#cashgiven');
var Clickbtnis = document.querySelector('#btnclick');
var errormsg = document.querySelector('#message');
var reqnotes = document.querySelectorAll('.notesno');
var Notes = [2000, 500, 100, 20, 10, 5, 1];

// console.log(BillAmountis.value);

function BillOnchangeHandler() {
    //  console.log(BillAmountis.value);
    if (BillAmountis.value < 0) {
        errormsg.innerHTML = 'Invalid amount!';
    } else {
        errormsg.innerHTML = '';
    }
}

function CashOnchangeHandler() {
    if (parseInt(CashAmountis.value) < parseInt(BillAmountis.value)) {
        errormsg.innerHTML = 'Cash amount should be greater than or equal to bill amount';
    } else {
        //  console.log(CashAmountis.value);
        errormsg.innerHTML = '';
    }
}

function OnclickHandler() {
    var amount = parseInt(CashAmountis.value) - parseInt(BillAmountis.value);
    for (var i = 0; i < Notes.length; i++) {
        reqnotes[i].innerHTML = Math.trunc(amount / Notes[i]);
        amount = amount % Notes[i];
        // console.log(reqnotes[i]);
    }
}

BillAmountis.addEventListener('change', BillOnchangeHandler);
CashAmountis.addEventListener('change', CashOnchangeHandler);
Clickbtnis.addEventListener('click', OnclickHandler);
