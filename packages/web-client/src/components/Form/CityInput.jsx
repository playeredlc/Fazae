import React, { useRef, useEffect } from 'react';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '../../../public/styles/styles.css' // override some of the library styles.

function CityInput({ name, locationHandler, ... rest }) {  
  const accessPublicToken = 'pk.eyJ1IjoicGxheWVyZWRsYyIsImEiOiJja3dlY29qYWQwMzFxMm91c3ZkNmthMW1qIn0.WSmr7IsPkE7WJyKpsBdJBg';
  const geocoder = new MapboxGeocoder({
    accessToken: accessPublicToken,
    types: 'country,region,place,postcode,locality,neighborhood'
  });
  
  const geoRef = useRef(null);

  useEffect(() => {
    geocoder.addTo(geoRef.current)
  }, [geoRef]);

  
  geocoder.on('result', (event) => {  
    const { id, place_name, text, center } = event.result;
    const resultObject = {
      id: id,
      completeName: place_name,
      shortName: text,
      coord: {
        lon: center[0],
        lat: center[1],
      }
    };

    locationHandler(resultObject);
    
  });

  return (
    <div ref={ geoRef } />
  );
}

export default CityInput;