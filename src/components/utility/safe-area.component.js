import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const StyledSafeAreaView = styled(SafeAreaView)`
  // display: flex;
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}// allow to avoid the android status
`;
