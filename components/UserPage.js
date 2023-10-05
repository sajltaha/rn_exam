import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { pages } from "../lib/pages";

export default function UserPage() {
  const navigation = useNavigation();
  const [info, setInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { params } = useRoute();

  useEffect(() => {
    setInfo(params.info);
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          style={{ backgroundColor: "white", borderRadius: 50 }}
        >
          <Path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
        </Svg>
        <Text style={styles.card_text}>{info.first_name}</Text>
        <Text style={styles.card_text}>{info.last_name}</Text>
        <Text style={styles.card_text}>{info.email}</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate(pages.usersP)}
        />
      </View>
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
  card_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    width: 300,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#EBE4D1",
    borderRadius: 10,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    elevation: 5,
    marginHorizontal: 5,
  },
});
