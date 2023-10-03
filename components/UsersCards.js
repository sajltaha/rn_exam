import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { pages } from "../lib/pages";

export default function UsersCards({ users, setUsers }) {
  const navigation = useNavigation();

  const deleteCard = (id) => {
    const filtered = users.filter((user) => {
      if (user.id !== id) {
        return user;
      }
    });
    setUsers(filtered);
  };

  if (users.length > 0) {
    return (
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onLongPress={() => deleteCard(item.id)}
              onPress={() => navigation.navigate(pages.userP, { info: item })}
              style={styles.card}
              key={item.id}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                style={{ backgroundColor: "white", borderRadius: 50 }}
              >
                <Path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </Svg>
              <View>
                <Text style={styles.card_text}>{item.first_name}</Text>
                <Text style={styles.card_text}>{item.last_name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  } else {
    return <Text style={styles.error_text}>User doesn't exist!</Text>;
  }
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#EBE4D1",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 5,
    marginHorizontal: 5,
  },
  card_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  error_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "brown",
  },
});
