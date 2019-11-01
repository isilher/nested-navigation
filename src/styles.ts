import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    minWidth: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30
  }
});
