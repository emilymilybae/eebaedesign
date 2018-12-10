window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("uparrow").style.display = "block";
    } else {
        document.getElementById("uparrow").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function test(element) {
    var newTab = window.open();
    setTimeout(function() {
        newTab.document.body.innerHTML = element.innerHTML;
    }, 500);
    return false;
}

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['Daily', 'Life stlye'],
//     ['Exercise and health',     12],
//     ['Mental health',    11],
//     ['Learning and reading', 0],
//     ['Creative arts',    2],
//     ['Beauty care',  2],
//     ['Socializing and time with friends',    9]
//   ]);

//   var options = {
//     title: 'What is your primary goal in using a fitness tracker?'
//   };

//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

//   chart.draw(data, options);
// }

      // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawSarahChart);

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawAnthonyChart);

      // Callback that draws the pie chart for Sarah's pizza.
      function drawSarahChart() {

        // Create the data table for Sarah's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Exercise and health',     12],
            ['Mental health',    11],
            ['Learning and reading', 0],
            ['Creative arts',    2],
            ['Beauty care',  2],
            ['Socializing and time with friends',    9]
        ]);

        // Set options for Sarah's pie chart.
        var options = {title:'What is most important to you to improve your daily life stlye?',
                       width:600,
                       height:400};

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('exercise_chart_div'));
        chart.draw(data, options);
      }

      // Callback that draws the pie chart for Anthony's pizza.
      function drawAnthonyChart() {

        // Create the data table for Anthony's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['0-3', 1],
          ['4-7', 21],
          ['8-10', 10],
          ['10+', 3],
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'How many hours on average a week do you spend on personal interests/hobbies?',
                       width:600,
                       height:400};

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Time_chart_div'));
        chart.draw(data, options);
      }
$(window).on("throttledresize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable([]);
    drawChart(data, options);
});