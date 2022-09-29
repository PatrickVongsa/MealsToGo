import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
