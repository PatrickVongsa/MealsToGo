import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  StyledCard,
  StyledCardCover,
  StyledInfo,
  StyledContainer,
  StyledIcon,
  StyledRating,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard elevation={5} key={name}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <StyledInfo>
        <Text variant="label">{name}</Text>
        <StyledContainer>
          <StyledRating>
            {ratingArray.map((_, i) => (
              <SvgXml key={123 + i} xml={star} width={20} height={20} />
            ))}
          </StyledRating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="caption" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <StyledIcon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </StyledContainer>
        <Text variant="caption">{address}</Text>
      </StyledInfo>
    </StyledCard>
  );
};
