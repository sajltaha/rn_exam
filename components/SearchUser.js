import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function SearchUser({ setUsers, users }) {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.search_block}>
      <TextInput
        placeholder="First name..."
        style={styles.search_input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Search" disabled={!username} />
      <Button title="All users" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 25,
  },
});
