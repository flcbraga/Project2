var myMap = L.map("map", {
    center: [32.7157, -117.1611],
    zoom: 10,
    maxBounds: L.latLngBounds([90, -180], [-90, 180]),
    maxBoundsViscosity: 1
    // layers: [grayscalemap]
});

var grayscalemap = L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
        attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
    }).addTo(myMap);

// """If we wanted to add more layers"""
// var baseMaps = {
//     Grayscale: grayscalemap
// };

// L.control
//     .layers(baseMaps {
//         collapsed: false
//     })
//     .addTo(myMap);

var geoAPI =
    "https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/ca_california_zip_codes_geo.min.json";

d3.json(geoAPI, function (geoData) {
    d3.json("data.json", function (zipData) {
        // geoData.features.forEach(val => {
        //     let { properties } = val
        //     let newProps = zipData[properties.ZCTA5CE10]
        //     val.properties = { ...properties, ...newProps }
        // })

        geoData.features.map(res => Object.assign(res, {
            properties: {
                ...res.properties,
                ...zipData[res.properties.ZCTA5CE10]
            }
        }))

        L.choropleth(geoData, {
            valueProperty: "income",
            scale: ["#0A2F51", "#DEEDCF"],
            steps: 10,
            mode: "q",
            style: {
                color: "#fff",
                weight: 1,
                fillOpacity: 0.8
            },
            // """Binding a pop-up to each layer"""
            // onEachFeature: function (feature, layer) {
            //     layer.bindPopup("<strong>Zip Code: </strong>" + feature.properties.ZCTA5CE10 + "<br>Crime Rate: " + feature.properties.crime);
            // }
        }).addTo(myMap);

    })
})
