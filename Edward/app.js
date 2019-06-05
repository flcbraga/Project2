console.log("test");

var zipcode=92109;

var chartData={};

// Code snippet to update zipcode
function createRadar(zipcode){

d3.json(`/zipcodes/${zipcode}`).then(function(response) {

  // Likely unnecessarily long piece of code to create & remove divs to update chart
  var radar_area = d3.select('#radar_plot');

  var dummy=[];

  radar_area.selectAll('div')
  .data(dummy)
  .exit()
  .remove();

  dummy = [1];

  radar_area.selectAll('div')
  .data(dummy)
  .enter()
  .append('div')
  .attr("id", 'chart_area')
  .attr("width","500px")
  .attr("height",'500px')

  zip_info = response;

  console.log('Zip Stats:')
  console.log(response);

  d3.json('/averages').then(function(reply){

  state_avg=reply;

  console.log('State Avg:')
  console.log(reply);


    anychart.onDocumentReady(function () {
      // create data set on our data

      chartData = {
        title: '',
        header: ['#', `${zipcode} / CA Avg`],
        rows: [
            ['Income',  zip_info.income/state_avg.income],
            ['Education',  zip_info.education/state_avg.education],
            ['Crime', zip_info.crime/state_avg.crime],
            ['Avg Jan Temperature (F)',  zip_info.jan_avg_temp/state_avg.jan_avg_temp],
            ['Cost of Living', zip_info.cost_of_living/state_avg.cost_of_living]
        ]
    };

      console.log(chartData);
    
      // create radar chart
      var chart = anychart.radar();
    
      // set default series type
      chart.defaultSeriesType('area');
    
      // set chart data
      chart.data(chartData);

      console.log(chart);
    
      // force chart to stack values by Y scale.
      chart.yScale().stackMode('value');
    
      // set yAxis settings
      chart.yAxis().stroke('#545f69');
      chart.yAxis().ticks().stroke('#545f69');
    
      // set yAxis labels settings
      chart.yAxis().labels()
              .fontColor('#545f69')
              .format('{%Value}{scale:(1000000)|(M)}');
    
      // set chart legend settings
      chart.legend()
              .align('center')
              .position('center-bottom')
              .enabled(true);
    
      chart.container('');
      // set container id for the chart
      chart.container('chart_area');
      // initiate chart drawing
      chart.draw(); 
    })
  })
});
};

function optionChanged(variable){

  var url=`/${variable.toLowerCase()}`;

  d3.json(url).then(function(response){

    var zips=response;

    var zip_list = []

    zips.forEach(function(zip){
      zip_list.push(zip.toString())
    })

    console.log(zip_list);

    // var list_div=d3.select("#zip_list");

    // console.log(list_div);

    // var zip_list = list_div.append('ul');

    // console.log(zip_list);

    // zip_list.selectAll("li")
    // .data(zips)
    // .enter()
    // .append("li")
    // .html(String)

    // var ul = d3.select('#zip_list').append('ul');

    data_reset=[]

    d3.select("ol")
    .selectAll("li")
    .data(data_reset)
    .exit()
    .remove();

    d3.select("ol")
    .selectAll("li")
    .data(zip_list)
    .enter()
    .append("li")
    .text(function(d) {
      return d;
    })
    .on("click",function(d){
      // Put update function in here
      zipcode = parseInt(d,10);
      console.log(zipcode);
      createRadar(zipcode);
    });

    })
  }

  function init(){

  var url='/income';

  d3.json(url).then(function(response){
    var zips=response;

    var zip_list = []

    zips.forEach(function(zip){
      zip_list.push(zip.toString())
    })


    d3.select("ol")
    .selectAll("li")
    .data(zip_list)
    .enter()
    .append("li")
    .text(function(d) {
      return d;
    })
    .on("click",function(d){
      // Put update function in here
      zipcode = parseInt(d,10);
      console.log(zipcode);
      createRadar(zipcode);
      

    })
    
    ;
    })

  }

  init();



// Radar Plot Source: 
// https://www.anychart.com/products/anychart/gallery/Radar_Charts_(Spiderweb)/Stacked_Area_Radar_Chart.php
// anychart.onDocumentReady(function () {
//   // create data set on our data
//   chartData = {
//       title: '',
//       header: ['#', 'Arizona', 'Florida', 'Nevada'],
//       rows: [
//           ['Income', 1368763, 1991297, 431097],
//           ['Education', 799873, 1254823, 561983],
//           ['Crime', 1497653, 1732987, 1019874],
//           ['Climate', 1351874, 332871, 2027634],
//           ['Cost of Living', 1582987, 649853, 1961085]
//       ]
//   };

//   // create radar chart
//   var chart = anychart.radar();

//   // set default series type
//   chart.defaultSeriesType('area');

//   // set chart data
//   chart.data(chartData);

//   // force chart to stack values by Y scale.
//   chart.yScale().stackMode('value');

//   // set yAxis settings
//   chart.yAxis().stroke('#545f69');
//   chart.yAxis().ticks().stroke('#545f69');

//   // set yAxis labels settings
//   chart.yAxis().labels()
//           .fontColor('#545f69')
//           .format('{%Value}{scale:(1000000)|(M)}');

//   // set chart legend settings
//   chart.legend()
//           .align('center')
//           .position('center-bottom')
//           .enabled(true);


//   // set container id for the chart
//   chart.container('radar_plot');
//   // initiate chart drawing
//   chart.draw();

// })
