// Function to create object for guage chart
function createGauge(wfreq){

  // Convert 
  var level= wfreq / 9 * 180;
  // Trig to calc meter point
  var degrees = 180 - level;
  var radius = .5;
  var radians = degrees * Math.PI / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);

  // Path: may have to change to create a better triangle
  var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
      pathX = String(x),
      space = ' ',
      pathY = String(y),
      pathEnd = ' Z';
  var path = mainPath.concat(pathX,space,pathY,pathEnd);

  console.log(path);

  var data = [{ type: 'scatter',
  x: [0], y:[0],
   marker: {size: 28, color:'850000'},
   showlegend: false,
   name: 'wfeq',
   text: level,
   hoverinfo: 'text+name'},
 { values: [25, 25/9, 25/9, 25/9, 25/9, 25/9,25/9,25/9, 25/9,25/9],
 rotation: 90,
 text: ['','8-9','7-8','6-7','5-6','4-5','3-4','2-3','1-2','0-1'],
 textinfo: 'text',
 textposition:'inside',
 marker: {colors:[  'FFFFFF',
 'FFCCFE',
    
                        'F2B2F1', 'E599E4',
                        'D87FD7', 'CC66CA',
                        'BF4CBD'
                        ,'B23FB0','A519A3','900096']},
 labels: ['','8-9','7-8','6-7','5-6','4-5','3-4','2-3','1-2','0-1',''],
 
 hoverinfo: 'label',
 hole: .25,
 type: 'pie',
 showlegend: false
}];

var layout = {
 shapes:[{
     type: 'path',
     path: path,
     fillcolor: '850000',
     line: {
       color: '850000'
     }
   }],
 title: '<b>Belly Button Washing Frequence</b> <br> Scrubs per Week',
//  height: 1000,
//  width: 1000,
 xaxis: {zeroline:false, showticklabels:false,
            showgrid: false, range: [-1, 1]},
 yaxis: {zeroline:false, showticklabels:false,
            showgrid: false, range: [-1, 1]}
};
return([data,layout]);
}


function buildMetadata(sample) {

var url = `metadata/${sample}`;

console.log(url);


d3.json(url).then(function(response) {

  var data = response;

  console.log(data);

  var panel = d3.select('#sample-metadata');

  console.log(panel);

  panel.html("");

  Object.entries(data).forEach(function(d){
  panel.append('div').text(`${d[0]}: ${d[1]}`);
  })


});
  

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);

}

function buildCharts(sample) {


        
  d3.json(`samples/${sample}`).then(function(response){
    var ids=response.otu_ids;
    var labels=response.otu_labels;
    var sample_values=response.sample_values;

    console.log("data pulled");

    var trace1 = {
      x: ids,
      y: sample_values,
      text: labels,
      mode: 'markers',
      marker : {
        color: ids,
        size : sample_values
      }
    };

    var data =[trace1];
    var layout = {
      showlegend: false,

    };

    Plotly.newPlot('bubble', data, layout);


    // Sort
    // labels_slice.sort(function(a) {
    //   return -a;
    // })

    // Slice 
    var ids_slice = ids.slice(0,10);
    var labels_slice = labels.slice(0,10);
    var values_slice = sample_values.slice(0,10);
    console.log("slices complete");

    var data = [{
      values: values_slice,
      labels: ids_slice,
      hovertext: labels_slice,
      type: 'pie'
    }];
    
    var layout = {
      // height : 600,
      // width : 600,
    };
    
    Plotly.newPlot('pie', data, layout);

  });

  // Guage chart 

  d3.json(`wfreq/${sample}`).then(function(response){
    var wfreq=response.WFREQ;
    var gauge = createGauge(wfreq)
  
    var data=gauge[0];
  
    var layout=gauge[1];
  
    Plotly.newPlot('gauge', data, layout);
  
    });

    document.getElementById("gauge").style.zIndex = "1";


}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });

}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

