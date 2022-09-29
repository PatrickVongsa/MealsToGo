import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { StyledSafeAreaView } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <StyledSafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => {
            setLunchExpanded(false);
            setDinnerExpanded(false);
            setDrinksExpanded(false);
            setBreakfastExpanded(!breakfastExpanded);
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => {
            setDinnerExpanded(false);
            setDrinksExpanded(false);
            setBreakfastExpanded(false);
            setLunchExpanded(!lunchExpanded);
          }}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => {
            setLunchExpanded(false);
            setDrinksExpanded(false);
            setBreakfastExpanded(false);
            setDinnerExpanded(!dinnerExpanded);
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => {
            setLunchExpanded(false);
            setDinnerExpanded(false);
            setBreakfastExpanded(false);
            setDrinksExpanded(!drinksExpanded);
          }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </StyledSafeAreaView>
  );
};
