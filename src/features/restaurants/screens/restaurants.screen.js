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
  padding: ${(props) => props.theme.space[3]};
`;
const StyledListContainer = styled(View)`
  display: flex;
  padding: ${(props) => props.theme.space[3]};
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
