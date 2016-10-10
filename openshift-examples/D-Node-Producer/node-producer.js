var EventBus = require('vertx3-eventbus-client');
var config = require('app-config');

console.log(process.env);

console.log("Event bus bridge location: " + config.eventbus.bridge);
var eb = new EventBus(config.eventbus.bridge);

eb.onopen = function () {
    var counter = 0;
    setInterval(function () {
        eb.publish("eventbus-example", {
            "message": "bonjour from node (" + counter + ")",
            "from": "node"
        });
        counter++;
    }, 5000);
};