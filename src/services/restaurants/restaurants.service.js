import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, rej) => {
    const mock = mocks[location];
    if (!mock) {
      rej("not found");
    }

    res(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};

export const restaurantFoursqaureAPI = ({ results = [] }) => {
  const mappedResultsAPI = results.map((restaurant) => {
    return {
      name: restaurant.name,
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      address: restaurant.location.formatted_address,
      isOpenNow: true,
      rating: Math.floor(Math.random() * (5 - 3 + 1) + 3),
      photos: [mockImages[Math.floor(Math.random() * mockImages.length)]],
      lat: restaurant.geocodes.main.latitude,
      lng: restaurant.geocodes.main.longitude,
    };
  });

  return mappedResultsAPI;
};
