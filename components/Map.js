import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResult.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));
  console.log(selectedLocation);
  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/akzmsh/ckw2doel405qb14pm5oyj42ym"
      mapboxApiAccessToken="pk.eyJ1IjoiYWt6bXNoIiwiYSI6ImNrdzJkYnR3bTBlYXoycHA2dm1neDdmYWsifQ.phcUwNaXLFaOJNbIlpyeJg"
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResult.map((res) => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img
              onClick={() => setSelectedLocation(res)}
              aria-label="push-pin"
              role="img"
              className="w-10 cursor-pointer animate-bounce"
              src="/location-pin.png"
              alt=""
            />
          </Marker>

          {selectedLocation.long === res.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
