// import React, { useEffect } from 'react';

// function MapContainer() {
//   useEffect(() => {
//     // Función para cargar el mapa
//     const loadMap = () => {
//       // Obtiene la clave de API de tu archivo .env
//       const apiKey = process.env.API_KEY;

//       if (!apiKey) {
//         console.error('No se encontró la clave de API de Google Maps en el archivo .env');
//         return;
//       }

//       // URL de la API de Google Maps
//       const apiUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=3&language=en`;

//       // Carga el script de la API de Google Maps de forma asincrónica
//       const script = document.createElement('script');
//       script.src = apiUrl;
//       script.async = true;
//       script.onload = initMap;
//       document.head.appendChild(script);
//     };

//     // Función para inicializar el mapa
//     const initMap = () => {
//       const google = window.google;

//       // Crea un nuevo mapa de Google Maps
//       const map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 25.815073, lng: -80.32023 }, // Coordenadas iniciales
//         zoom: 14, // Ajusta el nivel de zoom según tus necesidades
//       });

//       // Crea un marcador en las coordenadas especificadas
//       new google.maps.Marker({
//         position: { lat: 25.815073, lng: -80.32023 },
//         map: map,
//         title: 'Mi Marcador',
//       });
//     };

//     // Carga el mapa cuando se monta el componente
//     loadMap();
//   }, []);

//   return (
//     <div>
//       <h1>Mapa de Google</h1>
//       <div id="map" style={{ width: '100%', height: '400px' }}></div>
//     </div>
//   );
// }

// export default MapContainer;
