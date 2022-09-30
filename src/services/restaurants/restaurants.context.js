import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";
import Constants from "expo-constants";

import { restaurantFoursqaureAPI } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { keyword, setLocation } = useContext(LocationContext);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: Constants.manifest.extra.token,
    },
  };
  useEffect(() => {
    if (keyword) {
      setIsLoading(true);

      fetch(
        `https://api.foursquare.com/v3/places/search?categories=13000&open_now=true&near=${keyword}&limit=20`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          //location :
          const latLocation =
            response.context.geo_bounds.circle.center.latitude;
          const lngLocation =
            response.context.geo_bounds.circle.center.longitude;

          setIsLoading(false);
          setLocation({ lat: latLocation, lng: lngLocation });
          setRestaurants(restaurantFoursqaureAPI(response));
        })
        .catch((err) => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
