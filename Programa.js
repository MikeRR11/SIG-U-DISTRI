var map = L.map('map').setView([4.580200331352674, -74.15305838329007], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([4.580117924803484, -74.15292884442182]).addTo(map);
marker1.bindPopup("<b>Punto 1!</b><br>Mi casa.").openPopup();


var marker2 = L.marker([4.578470950593719, -74.1510727524939]).addTo(map);
marker2.bindPopup("<b>Punto 2!</b><br>Parque Gruta de la Virgen del Carmen.").openPopup();


var marker3 = L.marker([4.580249626560241, -74.15489758308757]).addTo(map);
marker3.bindPopup("<b>Punto 3!</b><br>Parque Jamaica.").openPopup();

var marker4 = L.marker([4.581795196228045, -74.15428043411943]).addTo(map);
marker4.bindPopup("<b>Punto 4!</b><br>Easy Gaitan Cortes .").openPopup();


var marker5 = L.marker([4.580680411269815, -74.15486886430801]).addTo(map);
marker5.bindPopup("<b>Punto 5!</b><br>Estación Terpel Las Vegas.").openPopup();

