import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function UserPage() {
  const { params } = useRoute();
  console.log(params);
  return (
    <View style={styles.container}>
      <Text>sadasd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF2D8",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
