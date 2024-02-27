import React, { useRef, useEffect } from 'react';

export default function MapRoute(props) {
  const searchRef = useRef(null);
  const lat = props.lat;
  const lng = props.lng;

  useEffect(() => {
    if (props.map) {
      props.map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        searchRef.current,
      );
    }
  }, [props.map]);

  return (
    <>
      <div ref={searchRef} className={props.MapInfo == '' ? 'hidden' : ''}>
        <div className="ml-2 mt-2 bg-white p-1">
          <p>{props.MapInfo.name}<br/>
            {props.MapInfo.state}
            {props.MapInfo.city}
            {props.MapInfo.address}
          </p>
          <p className="text-blue-500">
            <a
              href={
                'https://www.google.com/maps/dir/?api=1&destination=' +
                lat +
                ',' +
                lng
              }
            >
              ルート
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
