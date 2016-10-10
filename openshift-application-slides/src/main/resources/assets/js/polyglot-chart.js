var last_random_data = {
    'groovy' : 0,
    'javascript' : 0,
    'ruby' : 0
};

function createPolyglotChart() {
    var canvas = document.getElementById('polyglot-chart');
    var ctx = canvas.getContext("2d");
    var startingData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                label: "Ruby"
            },
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                label: "Groovy"
            },
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                fillColor: "rgba(80,90,180,0.2)",
                strokeColor: "rgba(80,90,180,1)",
                pointColor: "rgba(80,90,180,1)",
                pointStrokeColor: "#fff",
                label: "JavaScript"
            }
        ]
    };
    var chart = new Chart(ctx).Line(startingData, {animationSteps: 5});
    var lastLabel = 10;
    setInterval(function () {
        chart.addData([last_random_data.ruby, last_random_data.groovy, last_random_data.javascript], ++lastLabel);
        chart.removeData();
    }, 1000);
}

function handlePolyglotMessage(message) {
    var value = message.value;
    if (message.id === "groovy") {
        last_random_data.groovy = value;
    } else if (message.id === "javascript") {
        last_random_data.javascript = value;
    } else {
        last_random_data.ruby = value;
    }
}