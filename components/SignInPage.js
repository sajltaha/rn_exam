import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";
import { pages } from "../lib/pages";

export default function SignInPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <View style={styles.search_block}>
        <TextInput
          placeholder="Login..."
          style={styles.search_input}
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
        <TextInput
          placeholder="Password..."
          style={styles.search_input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Sign In"
          disabled={!login || !password}
          onPress={() => {
            setLogin("");
            setPassword("");
            navigation.navigate(pages.usersP);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF2D8",
  },
  search_input: {
    backgroundColor: "white",
    width: 170,
    elevation: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontWeight: "bold",
  },
  search_block: {
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    marginBottom: 25,
  },
});
