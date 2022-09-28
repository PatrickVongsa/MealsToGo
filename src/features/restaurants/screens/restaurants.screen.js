import React from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledRestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => (
  <StyledSafeAreaView>
    {/* SafeAreaView avoid the notch and status bar and navigation bar on Iphone*/}
    <StyledSearchContainer>
      <Searchbar
        placeholder="Search"
        // onChangeText={onChangeSearch}
        // value={searchQuery}
      />
    </StyledSearchContainer>
    <StyledRestaurantsList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </StyledSafeAreaView>
);
