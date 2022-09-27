import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StyledSafeAreaView = styled(SafeAreaView)`
  display: flex;
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}// allow to avoid the android status
`;

const StyledSearchContainer = styled(View)`
  padding: 16px;
`;
const StyledListContainer = styled(View)`
  display: flex;
  padding: 16px;
`;

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
    <StyledListContainer>
      <RestaurantInfoCard />
    </StyledListContainer>
  </StyledSafeAreaView>
);
