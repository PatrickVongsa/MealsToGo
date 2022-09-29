import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";

import { LocationContext } from "../../../services/location/location.context";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <StyledSearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </StyledSearchContainer>
  );
};
