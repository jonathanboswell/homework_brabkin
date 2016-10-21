
var cities = ['New York','San Francisco','Los Angeles','Atlanta','Venice'];
console.log("Initial Array", cities);

for(var index = 0; index < cities.length; index = index + 1)
{
    console.log(cities[index]);
}
   
var sel = document.getElementById('city-type');
for(var i = 0; i < cities.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = cities[i];
    opt.value = cities[i];
    sel.appendChild(opt);
}

opt.value = i
var citiesCss = ['nyc', 'sf','la','atx','venice'];

$("#city-type").change(
  function () {
    var otherCityName = $("#city-type").val();
    var index = cities.indexOf(otherCityName)
    var cssClass = citiesCss[index];
    $("body").removeClass();
    $("body").addClass(cssClass);
});
