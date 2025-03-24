"use client";
import { useEffect, useState } from 'react';

const useLatLong = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
            console.log("Position:", position);
          },
          (error) => {
            console.error("Error getting location:", error);
            if (error && error.code && error.message) {
              setErrorMessage(`Error getting location: ${error.message}`);
            } else {
              setErrorMessage("Unknown geolocation error occurred.");
            }
          }
        );
      };

      getLocation();
    }
  }, []);

  return { location, errorMessage };
};

export default useLatLong;
