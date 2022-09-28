import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledRestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16, paddingBottom: 88 },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <StyledSafeAreaView>
      {/* SafeAreaView avoid the notch and status bar and navigation bar on Iphone*/}
      <StyledSearchContainer>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </StyledSearchContainer>
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
            console.log(item);
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </StyledSafeAreaView>
  );
};
