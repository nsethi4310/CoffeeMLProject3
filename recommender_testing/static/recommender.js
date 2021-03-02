// get reference to tbody
var tbody = d3.select("tbody");

// import data
d3.csv("../static/html.csv", function(data) {
    
    data.forEach(function(coffeeReviews) {
        // console.log(coffeeReviews);
        
        // add tr for each row of data
        var row = tbody.append("tr");
        Object.entries(coffeeReviews).forEach(function([key, value]) {
          // console.log(key, value);
          
          // append a cell to the row for each coffee
          var cell = row.append("td");
          cell.text(value);

        });
    });

});
    
////////// TESTING ///////////

// get reference to the 'Filter Table' button
var button = d3.select("#filter-btn");

// run function when 'Filter Table' button is clicked
button.on("click", runEnter);

// define runEnter function
function runEnter() {

    // prevent page refreshing
    d3.event.preventDefault();

    // clear table from html 'tbody' tag
    tbody.html("");
    
    // get reference to the date field
    var inputElement = d3.select("#coffee");
  
    // get value of the input
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // // filter data with the requested date
    // var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    // console.log(filteredData);

    // // add data to the html
    // filteredData.forEach(function(filteredReport) {
    //     console.log(filteredReport);
        
    //     // add tr for each row of data
    //     var row = tbody.append("tr");
    //     Object.entries(filteredReport).forEach(function([key, value]) {
    //       console.log(key, value);
          
    //       // append a cell to the row for each value
    //       // in the ufo report object
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    // });
    

}


//// TESTING //////////

// $("#coffee-data tr").click(function(){
//     $(this).addClass('selected').siblings().removeClass('selected');    
//     var value=$(this).find('td:first').html();
//     alert(value);    
//  });
 
//  $('.ok').on('click', function(e){
//      alert($("#table tr.selected td:first").html());
// });


//////// TESTING 2 ///////////

// // select all 'tr' tags
// var coffee = d3.selectAll("tr");

// // run function when a row is clicked
// coffee.on("click", recommend);

// // define runEnter function
// function recommend() {

//     // // prevent page refreshing
//     // d3.event.preventDefault();

//     // // clear table from html 'tbody' tag
//     // tbody.html("");
    
//     // get selected coffee
//     console.log("hi");
    

// };

