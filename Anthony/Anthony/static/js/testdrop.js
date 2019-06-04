var income = '"income"';
var crime = '"crime"';
var education = '"education"';
var climate = '"climate"';
var cost = '"cost"';

function updateValue () {
    d3.select('#dropdown')
    .on('change', function () {
        var newData = eval(d3.select(this).property('value'));
        console.log(newData);
        return newData;
    });
}

updateValue()
// console.log(newValue)