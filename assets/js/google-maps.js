function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 35.7219, lng: 51.3347};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Tehran, Iran' // Title Location
    });
}