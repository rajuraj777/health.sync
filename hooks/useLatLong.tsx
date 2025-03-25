"use client";
import { useEffect, useState } from 'react';



  export const useLatLong = () => {
    const [coords, setCoords] = useState<{lat: number | null, lng: number | null}>({
      lat: null,
      lng: null
    });
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }, []);
  
    return coords;
  };


export default useLatLong;
