var host = window.location.host;
var suffix = "-" + host.substring(window.location.host.indexOf("vertx-openshift-slides."));

var a_http_server="http://vertx-http-server" + suffix;
var b_http_client="http://vertx-http-client" + suffix;
var e_http_client="http://vertx-http-failure" + suffix;
var f_http_client="http://vertx-http-failure" + suffix + "/cb";

// HTTP Hello World
$("#http-hello-world-btn").click(function () {
    var result = $("#http-hello-world-result");
    $.get(a_http_server, function (data) {
        result.html(data);
    });
});

// Chained HTTP Hello World
$("#http-chained-hello-world-btn").click(function () {
    var result = $("#http-chained-hello-world-result");
    $.get(b_http_client, function (data) {
        result.html(data);
    });
});

// Chained HTTP Hello World with failure
$("#failure-chain-btn").click(function () {
    var result = $("#failure-chain-result");
    $.get(e_http_client, function (data) {
        result.prepend("<p>" + data + "</p>");
    });
});

// Circuit Breaker
$("#failure-chain-cb-btn").click(function () {
    var result = $("#failure-chain-cb-result");
    $.get(f_http_client, function (data) {
        result.prepend("<p>" + data + "</p>");
    });
});