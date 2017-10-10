const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex({ socketTimeout: 10000 });

const render = require('./poloniex-render.js')

// poloniex.returnTicker(function (err, ticker) {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(ticker);
//   }
// });

// poloniex.returnOrderBook( "BTC_XRP", null, (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data);
//   }
// });



// poloniex.returnTradeHistory( "BTC_XRP", 0, 100, 100, (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data);
//   }
// });



// poloniex.returnCurrencies((err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data);
//   }
// });


poloniex.returnChartData("BTC_XRP", 3000, 0, 1000, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});

// // poloniex.subscribe('ticker');
// poloniex.subscribe('BTC_XRP');
 
// poloniex.on('message', (channelName, data, seq) => {
//   if (channelName === 'ticker') {
//     console.log(`Ticker: ${data}`);
//   }
//   if (channelName === 'BTC_XRP') {
//     // console.log(`order book and trade updates received for currency pair ${channelName}`);
//     // console.log(`data sequence number is ${seq}`);
//     // console.log(data);
//     var buf = [];
//     render.trade(data, buf, () => {
//         buf.forEach( (value) => {
//             console.log(value);
//         });
//     });
//   }
// });
 
// poloniex.on('open', () => {
//   console.log(`Poloniex WebSocket connection open`);
// });
 
// poloniex.on('close', (reason, details) => {
//   console.log(`Poloniex WebSocket connection disconnected`);
// });
 
// poloniex.on('error', (error) => {
//   console.log(`An error has occured`);
// });

// poloniex.openWebSocket(
// {

// });