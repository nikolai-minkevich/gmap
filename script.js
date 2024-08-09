let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 60.716667, lng: 28.766667 },
        zoom: 13,
    });

    let markerCastle = new google.maps.Marker({
        position: { lat: 60.716667, lng: 28.766667 },
        title: "Castle",
        icon: {
            url: "./assets/castle.png",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0) 
        }
    });

    markerCastle.setMap(map);

    let markerLighthouse = new google.maps.Marker({
        position: { lat: 60.716, lng: 28.73 },
        title: "Castle",
        icon: {
            url: "./assets/lighthouse.png",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0)
        }
    });

    markerLighthouse.setMap(map);

    let markerHouse = new google.maps.Marker({
        position: { lat: 60.7016667, lng: 28.78 },
        title: "Castle",
        icon: {
            url: "./assets/house.png",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0)
        }
    });

    markerHouse.setMap(map);

}


