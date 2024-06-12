function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 48.355278,
            lng: 10.905
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
            lat: 49.142693,
            lng: 9.210879
        },
        {
            lat: 51.507351,
            lng: -0.127758
        },
        {
            lat: 39.082520,
            lng: -94.582306
        },
        {
            lat: 37.338207,
            lng: -121.886330
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {});
}