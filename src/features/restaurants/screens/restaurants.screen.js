import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const StyledRestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16, paddingBottom: 88 },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <StyledSafeAreaView>
      {/* SafeAreaView avoid the notch and status bar and navigation bar on Iphone*/}
      <Search />
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          color={Colors.red400}
          size="large"
        />
      ) : (
        <StyledRestaurantsList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </StyledSafeAreaView>
  );
};
