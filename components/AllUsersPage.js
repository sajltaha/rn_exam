import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import SearchUser from "./SearchUser";
import UsersCards from "./UsersCards";
import AddUser from "./AddUser";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { pages } from "../lib/pages";

export default function AllUsersPage() {
  const [users, setUsers] = useState([]);
  const [usersFound, setUsersFound] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      if (data) {
        setUsers(data.data);
        setUsersFound(data.data);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <SearchUser
        users={users}
        setUsers={setUsers}
        setUsersFound={setUsersFound}
      />
      <UsersCards
        setUsersFound={setUsersFound}
        usersFound={usersFound}
        users={users}
        setUsers={setUsers}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(pages.signInP)}
        style={styles.add_button}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          height="70"
          viewBox="0 -960 960 960"
          width="70"
        >
          <Path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v160q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v160h-80Z" />
        </Svg>
      </TouchableOpacity>
      <AddUser
        users={users}
        setUsers={setUsers}
        setUsersFound={setUsersFound}
      />
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
    left: 25,
  },
});
