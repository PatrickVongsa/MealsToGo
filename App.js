import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from "react-native";

import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        {/* SafeAreaView avoid the notch and status bar and navigation bar on Iphone*/}
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            // onChangeText={onChangeSearch}
            // value={searchQuery}
          />
        </View>
        <View style={styles.listContainer}>
          <Text>our react native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    marginTop: StatusBar.currentHeight /* allow to avoid the android status */,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
