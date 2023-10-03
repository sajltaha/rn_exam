import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import SearchUser from "./SearchUser";
import UsersCards from "./UsersCards";
import AddUser from "./AddUser";
import { useNavigation } from "@react-navigation/native";

export default function AllUsersPage({ navigation }) {
  const [users, setUsers] = useState([]);
  const [usersFound, setUsersFound] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      if (data) {
        setUsers(data.data);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SearchUser
        users={users}
        setUsers={setUsers}
        setUsersFound={setUsersFound}
      />
      <UsersCards users={usersFound ? usersFound : users} setUsers={setUsers} />
      <AddUser users={users} setUsers={setUsers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF2D8",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 20,
  },
  add_button: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
});
