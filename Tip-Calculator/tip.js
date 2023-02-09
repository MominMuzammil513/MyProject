// let amount = 100;
// let tip = 5;
// let totalbill = 0;

// tip =(tip*amount)/100
// totalbill=tip+amount


// console.log(`tip:${tip} & Bill: ${totalbill}`);

console.log("abcd")

let calculate = () =>{
    tip ={}
    tip.amount = document.querySelector('#input-amount').value;
    tip.inTip = document.querySelector('#input-tip').value;
    tip.amount =parseInt(document.querySelector('#input-amount').value);
    tip.inTip =parseInt(document.querySelector('#input-tip').value)

    tip.reset =()=>{
        document.querySelector('#input-amount').value=''
        document.querySelector('#input-tip').value=''
    }

    tip.calc =()=>{
        tip.totalBill = 0;
        tip.inTip = (tip.inTip*tip.amount)/100;
        tip.totalBill = tip.inTip + tip.amount;

    }
    tip.showData =()=>{
        tip.reset();
        tip.calc();
        console.log(tip.totalBill);
        document.querySelector('.tip-amount').innerHTML = tip.inTip;
        document.querySelector('.total-amount').innerHTML  = tip.totalBill;

    }
    tip.showData();

}
