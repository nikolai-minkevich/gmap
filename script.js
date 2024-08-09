let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 60.716667, lng: 28.766667 },
        zoom: 12,
    });

    let markerCastle = new google.maps.Marker({
        position: { lat: 60.716667, lng: 28.766667 },
        title: "Castle",
        icon: {
            url: "./assets/castle.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }
    });

    markerCastle.setMap(map);

    let markerLighthouse = new google.maps.Marker({
        position: { lat: 60.716, lng: 28.73 },
        title: "Castle",
        icon: {
            url: "./assets/lighthouse.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }
    });

    markerLighthouse.setMap(map);

    let markerHouse = new google.maps.Marker({
        position: { lat: 60.7016667, lng: 28.78 },
        title: "Castle",
        icon: {
            url: "./assets/house.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        }
    });

    markerHouse.setMap(map);

}


