import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const StyledCard = styled(Card)`
  padding: 16px;
  background-color: white;
`;

const StyledCardCover = styled(Card.Cover)`
  background-color: red;
`;

const Title = styled(Text)`
  padding-top: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <StyledCard elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </StyledCard>
  );
};
