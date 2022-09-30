import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../components/search.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  // const [latDelta, setLatDelta] = useState(0);

  const { lat, lng } = location;

  // useEffect(() => {
  //   const northeastLat = viewport.northeast.lat;
  //   const southwestLat = viewport.southwest.lat;

  //   // setLatDelta(northeastLat - southwestLat);
  // }, [location, viewport]);

  return (
    <>
      <Search />
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={Colors.blue400}
          size="large"
          style={{ position: "absolute", top: "50%", left: "45%", zIndex: 999 }}
        />
      )}
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        {restaurants.map((restaurant, i) => {
          return (
            <Marker
              key={987987 + i}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
