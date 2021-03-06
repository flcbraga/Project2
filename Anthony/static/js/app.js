// create combined geojson of boundaries and attributes

function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}


// connect zip code to input variables. creates combined json
function combineJson(zipVariable) {
  for (var i = 0; i < zipVariable.length; i++) {
    if (boundFeatures[i].properties.ZCTA5CE10 == zipVariable) {
      // make sure links are correct
      var combined = Object.assign({}, boundFeatures[i].properties, zipVariable);
      console.log(combined);
    }
  }
}

// // function to build map
// // function buildMap(variable) {
  var grayscalemap = L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    }
  );

  var baseMaps = {
    Grayscale: grayscalemap
  };

  var layers = {
    ZIP_BOUNDS: new L.LayerGroup(),
    INPUT_VARIABLE: new L.LayerGroup()
  };

  var myMap = L.map("map", {
    center: [32.7157, -117.1611],
    zoom: 10,
    maxBounds: L.latLngBounds([90, -180], [-90, 180]),
    maxBoundsViscosity: 1,
    layers: [grayscalemap, layers.ZIP_BOUNDS, layers.INPUT_VARIABLE]
  });

  var overlays = {
    "Zip Code Boundaries": layers.ZIP_BOUNDS,
    Variable: layers.INPUT_VARIABLE
  };

  L.control
    .layers(baseMaps, overlays, {
      collapsed: false
    })
    .addTo(myMap);

    var geojson;
  
  var boundariesAPI =
    "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca_california_zip_codes_geo.min.json";

  d3.json(boundariesAPI, function(boundData) {

    d3.json("data.json", function(data) {
      var boundFeatures = boundData.features;
      // var fullJson = [];

      for (var i = 0; i < 3; i++) {
        Object.keys(data).forEach(function(key) {
          // console.log(key);
          if (boundFeatures[i].properties.ZCTA5CE10 == key) {
            // console.log(boundFeatures[i].properties.ZCTA5CE10);
            // console.log(key);
            var combined = Object.assign({}, boundFeatures[i], data[key]);
            // var combined2 = Object.assign({}, boundFeatures[i].properties, combined);
            console.log(combined);

            // fullJson.push(combined);
          }
        })
      }
      // console.log(fullJson)
      
      // for (item in fullJson) {
      // var mapped = fullJson.map(item => ({["type"]: item.type, ["properties"]: item.properties, ["geometry"]: item.geometry, ["crime"]: item.crime}));
      // console.log(mapped)
      
      
    //   var newObj = Object.assign({}, fullJson);
    //   console.log(newObj);
    //   // }
    //   function style(feature) {
    //     return {
    //         fillColor: getColor(feature.crime),
    //         weight: 2,
    //         opacity: 1,
    //         color: 'white',
    //         dashArray: '3',
    //         fillOpacity: 0.7
    //     };
    // }
    
    // L.geoJson(newObj, {style: style}).addTo(map);
    //   })

    })
  })

  // console.log(fullJson)

      // for (var i = 0; i < boundFeatures.length; i++) {
      //   if (boundFeatures[i].properties.ZCTA5CE10 in data) {
      //     // make sure links are correct
      //     var combined = Object.assign({}, boundFeatures[i].properties, zipVariable);
      //     console.log(combined);




  //     for (var i = 0; i < boundFeatures.length; i++) {
  //       // console.log(boundFeatures[i].properties.ZCTA5CE10);
  //       var zipbounds = L.geoJson(boundFeatures[i].geometry, {
  //         fillOpacity: 0,
  //         color: "black",
  //         weight: 1
  //       });
  //       zipbounds.addTo(layers.ZIP_BOUNDS);
  //     }
  //   });
  // });
// }


// // Grab data with d3
// d3.json(APILink, function(data) {

//   // Create a new choropleth layer
//   geojson = L.choropleth(data, {

//     // Define what  property in the features to use
//     valueProperty: "MHI",

//     // Set color scale
//     scale: ["#ffffb2", "#b10026"],

//     // Number of breaks in step range
//     steps: 10,

//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },

//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup(feature.properties.LOCALNAME + ", " + feature.properties.State + "<br>Median Household Income:<br>" +
//         "$" + feature.properties.MHI);
//     }
//   }).addTo(myMap);