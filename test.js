
var render = require('./poloniex-render.js');




var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});
 
connection.onopen = function (session) {
        function marketEvent (args,kwargs) {

            var buf = [];
            render.trade(args, buf, () => {
                buf.forEach( (value) => {
                    console.log(value);
                });
            });

        }
        function tickerEvent (args,kwargs) {
                // console.log(args);
        }
        function trollboxEvent (args,kwargs) {
                // console.log(args);
        }
        // session.subscribe('BTC_XRP', marketEvent);

        session.subscribe('BTC_XRP', marketEvent);
        // session.subscribe('ticker', tickerEvent);
        // session.subscribe('trollbox', trollboxEvent);
}

connection.onclose = function () {
  console.log("Websocket connection closed");
}
                       
connection.open();