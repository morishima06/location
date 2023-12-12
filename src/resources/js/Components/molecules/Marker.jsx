import { useState, useEffect } from 'react';

export default function Marker(center) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(center);
    }
  }, [marker, center]);

  return null;
}
