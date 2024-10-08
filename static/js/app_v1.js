// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field


    // Filter the metadata for the object with the desired sample number


    // Use d3 to select the panel with id of `#sample-metadata`


    // Use `.html("") to clear any existing metadata


    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    ids = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let id_droplist = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i=0; i < ids.length; i++)
      id_droplist.append("option").text(ids[i])

    // Get the first sample from the list
    sample1 = data.samples[0];
    // console.log(sample1.sample_values)

    // Build charts and metadata panel with the first sample
    // let plot_data = []

    // for (let i=0; i<sample1.sample_values.length; i++) {
    //   let trace1 = {
    //     x: sample1.sample_values[i],
    //     y: sample1.otu_ids[i],
    //     text: `OTU ${sample1.otu_ids[i]}`,
    //     name: "Greek",
    //     type: "bar",
    //     orientation: "h"
    //   };

    //   plot_data.push(trace1);
    // }

    let trace1 = {
      x: sample1.sample_values,
      y: sample1.otu_ids.map(id => `OTU ${id}`),
      text: sample1.otu_labels, //ids.map(id => `OTU ${id}`),
      name: "Greek",
      type: "bar",
      orientation: "h"
    };

    let plot_data = [trace1]
    console.log(plot_data);
  
    // Apply a title to the layout
    let layout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", plot_data, layout);

      });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
