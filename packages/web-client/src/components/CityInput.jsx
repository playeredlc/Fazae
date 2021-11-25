import React, { useRef, useEffect } from 'react';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const CityInput = function() {  
  const accessPublicToken = 'pk.eyJ1IjoicGxheWVyZWRsYyIsImEiOiJja3dlY29qYWQwMzFxMm91c3ZkNmthMW1qIn0.WSmr7IsPkE7WJyKpsBdJBg';
  const geoElement = useRef(null);

  let result = null;

  useEffect(() => {
    geocoder.addTo(geoElement.current)
  });
  
  const geocoder = new MapboxGeocoder({
    accessToken: accessPublicToken,
    types: 'country,region,place,postcode,locality,neighborhood'
  });
  geocoder.on('result', (event) => {
    result = event.result;
  })

  return (
    <div>
      <div ref={geoElement} />
    </div>
  );
}

export default CityInput;