// get reference to tbody
var tbody = d3.select("tbody");

// import data
d3.csv("Resources/html.csv", function(data) {
    
    data.forEach(function(coffeeReviews) {
        // console.log(coffeeReviews);
        
        // add tr for each row of data
        var row = tbody.append("tr");
        Object.entries(coffeeReviews).forEach(function([key, value]) {
          // console.log(key, value);
          
          // append a cell to the row for each value in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
    });
    
    
    
    






});

