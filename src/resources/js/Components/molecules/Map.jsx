import React, { useRef, useEffect, useState } from 'react';

export default function Map({ center, children }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  let ce = {
    center: new window.google.maps.LatLng({ lat: center.lat, lng: center.lng }),
    zoom: 17,
  };

  useEffect(() => {
    if (map) {
      map.setOptions(ce);
    }
  }, [map, ref, center]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: {
            lat: center.lat,
            lng: center.lng,
          },
          zoom: 10,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }),
      );
    }
  }, [ref, map]);

  return (
    <>
      <div ref={ref} className="" style={{ height: '100%', width: '100%' }} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
