function init() {
  // Grab a reference to the dropdown select element
  // Change to d3.select table
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/income").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      // Change to append <tr> 
      selector
        .append('tr')
        .text(zipCode)
        .property("value", sample);
    });

    // // Use the first sample from the list to build the initial plots
    // const firstSample = sampleNames[0];
    // buildCharts(firstSample);
    // buildMetadata(firstSample);
  });

}

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// Initialize the dashboard
init();

