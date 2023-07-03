import React, { useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  style?: {
    width?: string;
    height?: string;
    [key: string]: any;
  };
}

const API_KEY: string = process.env.REACT_APP_API_KEY || "";

const Map: React.FC<MapProps> = ({ center, style }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={style}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <CircularProgress />
  );
};

export default Map;
