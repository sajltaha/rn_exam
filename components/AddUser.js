import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Text,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useState } from "react";
import uuid from "react-native-uuid";

export default function AddUser({ setUsers, users }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const addUser = () => {
    const identityCheck = users.filter((user) => {
      if (user.email == email) {
        return user;
      }
    });

    if (identityCheck.length > 0) {
      setAlertMessage({
        text: "User already exists!",
        color: "red",
        value: true,
      });
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    } else {
      const userObj = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        id: uuid.v4(),
      };

      setUsers([...users, userObj]);
      setFirstname("");
      setLastname("");
      setEmail("");
      setAlertMessage({
        text: "Added successfully!",
        color: "green",
        value: true,
      });
      setTimeout(() => {
        setAlertMessage("");
        setModalVisible(false);
      }, 2000);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.add_button}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          height="70"
          viewBox="0 -960 960 960"
          width="70"
        >
          <Path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
        </Svg>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.search_block}>
            <TextInput
              placeholder="First name..."
              style={styles.search_input}
              value={firstname}
              onChangeText={(text) => setFirstname(text)}
            />
            <TextInput
              placeholder="Last name..."
              style={styles.search_input}
              value={lastname}
              onChangeText={(text) => setLastname(text)}
            />
            <TextInput
              placeholder="Email..."
              style={styles.search_input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Button
              title="Add User"
              disabled={!firstname || !lastname || !email}
              onPress={addUser}
            />
            <Button
              title="Go Back"
              onPress={() => {
                setModalVisible(false);
                setFirstname("");
                setLastname("");
                setEmail("");
              }}
            />
            <Text
              style={{
                display: alertMessage.value ? "block" : "none",
                fontSize: 16,
                fontWeight: "bold",
                color: alertMessage.color,
              }}
            >
              {alertMessage.text}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  add_button: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
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
