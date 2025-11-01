// app.js — loads predefined locations and initializes Google Map
let map;
let markers = [];

async function initMap() {
  // load locations.json
  let locations = [];
  try {
    const res = await fetch('locations.json');
    locations = await res.json();
  } catch (err) {
    console.error('Failed to load locations.json', err);
  }

  const center = locations.length ? { lat: locations[0].lat, lng: locations[0].lng } : { lat: 0, lng: 0 };
  map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 4,
  });

  const listEl = document.getElementById('locations-list');
  listEl.innerHTML = '';

  locations.forEach((loc, i) => {
    const marker = new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.name,
    });

    const info = new google.maps.InfoWindow({
      content: `<div style="min-width:150px"><h3>${loc.name}</h3><p>${loc.description || ''}</p></div>`
    });

    marker.addListener('click', () => info.open(map, marker));
    markers.push(marker);

    const li = document.createElement('li');
    li.textContent = loc.name;
    li.addEventListener('click', () => {
      map.panTo(marker.getPosition());
      map.setZoom(12);
      info.open(map, marker);
    });
    listEl.appendChild(li);
  });
}

// Keep initMap available for the Google Maps callback
window.initMap = initMap;
