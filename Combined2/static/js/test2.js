// populate drop-down
d3.select("#dropdown")
    .selectAll("option")
    .data(dropdown_options)
    .enter()
    .append("option")
    .attr("value", function (option) { return option.value; })
    .text(function (option) { return option.text; });

// initial dataset on load
var selected_dataset = "income";

var w = 760,
    h = 600;

var svg = d3.select("#block")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

var projection = d3.geo.mercator()
    .center([-120, 37])
    .translate([w / 2, h / 2])
    .scale([w * 3.3]);

var path = d3.geo.path()
    .projection(projection);

// first of two scales for linear fill; ref [1]
var fill_viridis = d3.scale.linear()
    .domain(d3.range(0, 1, 1.0 / (viridis_colors.length - 1)))
    .range(viridis_colors);

// second of two scales for linear fill 
var norm_fill = d3.scale.linear()
    .range([0, 1]);

// var geoAPI =
//     "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca_california_zip_codes_geo.min.json";
var geoAPI = '/geojson'
d3.json(geoAPI, function (geoData) {
    // d3.json("data.json", function (zipData) {
    d3.json("/zipcodes", function (zipData) {

        geoData.features.map(res => Object.assign(res, {
            properties: {
                ...res.properties,
                ...zipData[res.properties.ZCTA5CE10]
            }
        }))

        plot = svg.selectAll("path")
            .data(geoData.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("stroke", "#808080")
            .attr("fill", "#b3b3b3")
            .call(updateFill, selected_dataset)
    });
});

// dropdown dataset selection
var dropDown = d3.select("#dropdown");

dropDown.on("change", function () {

    selected_dataset = d3.event.target.value;

    plot.call(updateFill, selected_dataset)

});

function updateFill(selection, selected_dataset) {

    var d_extent = d3.extent(selection.data(), function (d) {
        return parseFloat(d.properties[selected_dataset]);
    });

    rescaleFill(selection, d_extent);
}

function rescaleFill(selection, d_extent) {

    norm_fill.domain(d_extent)

    selection.transition()
        .duration(700)
        .attr("fill", function (d) {
            var datum = parseFloat(d.properties[selected_dataset]);
            return fill_viridis(norm_fill(datum));
        });
}