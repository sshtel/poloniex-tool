var colors = require('colors');

function trade (array, buf, cb) {
    var len = array.length;
    if(len == 0) return;
    array.forEach((value, index, arr) => {
        
        // console.log(value.type);
        if(value.type == 'newTrade') {
            // console.log('new trade!');    
            // var obj = {
            //     "type" : value.data.type,
            //     "amount" : value.data.amount
            // }
            var data = value.data;

            var rate = data.rate;
            var amount = data.amount;
            var time = data.date;

            if(value.data.type == 'buy'){
                // console.log(data.amount.green);
                rate = rate.green;
                // buf.push(data.amount.green);
            } else if (value.data.type == 'sell'){
                // console.log(data.amount.red);
                rate = rate.red;
                // buf.push(data.amount.underline.red);
            }
            buf.push( rate + "\t" + amount + "\t" + time);
            
        }
        if(index == len - 1) {
            cb();
            return;
        }
    });
}

var orderBook = (array) => {

}

module.exports = {
    "trade": trade,
    "orderBook": orderBook
};




var temp = [
    {
        type: 'orderBookModify',
        data: { 
            type: 'bid', 
            rate: '0.00005824', 
            amount: '40470.93000000' 
        }
    },
    {
        type: 'newTrade',
        data:
        {
            amount: '3000.00000000',
            date: '2017-10-09 02:37:45',
            rate: '0.00005824',
            total: '0.17472000',
            tradeID: '13646518',
            type: 'sell'
        }
    },
    {
        type: 'newTrade',
        data:
        {
            amount: '3000.00000000',
            date: '2017-10-09 02:37:45',
            rate: '0.00005824',
            total: '0.17472000',
            tradeID: '13646518',
            type: 'sell'
        }
    },
    {
        type: 'newTrade',
        data:
        {
            amount: '3000.00000000',
            date: '2017-10-09 02:37:45',
            rate: '0.00005824',
            total: '0.17472000',
            tradeID: '13646518',
            type: 'sell'
        }
    }];
